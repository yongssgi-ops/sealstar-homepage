// ============================================================
// SEALSTAR — 적용분야(Markets) 개별 정적 페이지 생성기
// js/markets.js 의 MARKETS 배열을 읽어 markets/<id>.html 을 생성합니다.
// (news/products와 같은 목적: 각 산업 분야가 검색엔진/생성형 AI가
//  개별 인용할 수 있는 자기만의 URL을 갖도록 함.)
//
// jsdom을 쓰지 않고 Node의 내장 vm 모듈로 MARKETS 배열만 안전하게
// 추출한다 (이 샌드박스에서 jsdom require 자체가 멈추는 이슈 우회).
// js/markets.js의 나머지(사이드바/렌더 로직)는 document가 필요해서
// 건드리지 않고, "var MARKETS = [...]" 리터럴 텍스트만 정규식으로
// 잘라내 img()/PX 헬퍼와 함께 그대로 eval한다.
// ============================================================
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://www.sealstar.com';

// ---- MARKETS 배열 추출 (jsdom 없이) ----
const marketsJsSrc = fs.readFileSync(path.join(root, 'js/markets.js'), 'utf8');
const arrMatch = marketsJsSrc.match(/var MARKETS = (\[[\s\S]*?\n  \]);\n\n  var T=/);
if (!arrMatch) throw new Error('MARKETS array literal not found — js/markets.js format changed?');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(
  "var PX='https://images.pexels.com/photos/';" +
  "var img=function(id){return PX+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w=1500';};" +
  "var MARKETS = " + arrMatch[1] + ";",
  sandbox
);
const MARKETS = sandbox.MARKETS;
if (!Array.isArray(MARKETS) || !MARKETS.length) throw new Error('MARKETS array empty/not found');

const missingId = MARKETS.filter(m => !m.id);
if (missingId.length) throw new Error('missing id on markets: ' + missingId.map(m => m.ko).join(', '));

// ---- header/footer 블록을 markets.html에서 그대로 추출 ----
const marketsHtml = fs.readFileSync(path.join(root, 'markets.html'), 'utf8');
const headerBlock = marketsHtml.match(/<!-- HEADER -->[\s\S]*?<\/header>/)[0];
const footerBlock = marketsHtml.match(/<!-- FOOTER -->[\s\S]*?<\/footer>/)[0];

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function escAttr(s) { return (s || '').replace(/"/g, '&quot;'); }
// pages live in markets/, so local image paths need a ../ prefix; remote http(s) URLs (all MARKETS images are Pexels URLs) are used as-is
function imgUrl(img) { return img && !img.startsWith('http') ? '../' + img : img; }
// prod[].href values look like "products.html#isolator" — point them at the
// real individual product page (../products/isolator.html) instead of the hash-anchor
function productHref(href) {
  const m = /products\.html#(.+)/.exec(href || '');
  return m ? `../products/${m[1]}.html` : (href || '#');
}

function mdesc(m) {
  let t = m.introKo || '';
  if (t.length > 155) t = t.slice(0, 152) + '...';
  return t;
}

const outDir = path.join(root, 'markets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const sitemapUrls = [];

for (const m of MARKETS) {
  const url = `${DOMAIN}/markets/${m.id}.html`;
  const desc = mdesc(m);
  const title = `${m.ko} ${m.en} | SEALSTAR (주)씰스타 적용분야`;

  const areasHtml = m.areasKo.map((k, i) =>
    `<span><span class="ko">${esc(k)}</span><span class="en">${esc(m.areasEn[i] || '')}</span></span>`
  ).join('');

  const perfHtml = m.perf.map((p, i) =>
    `<div class="pc"><div class="no">${i + 1}</div><h4><span class="ko">${esc(p.ko)}</span><span class="en">${esc(p.en)}</span></h4>`
    + `<p><span class="ko">${esc(p.dko)}</span><span class="en">${esc(p.den)}</span></p></div>`
  ).join('');

  const prodHtml = m.prod.map(p =>
    `<a href="${productHref(p.href)}"><span class="ko">${esc(p.ko)}</span><span class="en">${esc(p.en)}</span> →</a>`
  ).join('');

  // 다른 분야 (자기 자신 제외, 최대 4개)
  const related = MARKETS.filter(x => x.id !== m.id).slice(0, 4);
  const relatedHtml = related.map(r => {
    const rbg = r.img ? `background-image:url('${escAttr(imgUrl(r.img))}')` : `background:linear-gradient(135deg,var(--navy-2),var(--sky-d))`;
    return `<a class="rcard" href="${r.id}.html"><div class="rh" style="${rbg}"></div>`
      + `<div class="rb"><h5><span class="ko">${esc(r.ko)}</span><span class="en">${esc(r.en)}</span></h5></div></a>`;
  }).join('');

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SEALSTAR",
    "alternateName": "(주)씰스타",
    "url": DOMAIN + "/",
    "logo": DOMAIN + "/images/logo-color.png",
    "foundingDate": "1982",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "국회대로54길 53-6, 1층",
      "addressLocality": "영등포구",
      "addressRegion": "서울특별시",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-2-2637-6200",
      "email": "info@sealstar.com",
      "contactType": "sales",
      "areaServed": "KR",
      "availableLanguage": ["ko", "en"]
    }
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${m.en} Sealing Solutions (${m.ko})`,
    "description": desc,
    "provider": { "@type": "Organization", "name": "SEALSTAR" },
    "areaServed": "KR",
    "url": url,
    "serviceType": "Industrial sealing products",
    "audience": { "@type": "BusinessAudience", "audienceType": m.en }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "씰스타 산업용 씰 제조", "item": DOMAIN + "/" },
      { "@type": "ListItem", "position": 2, "name": "적용분야", "item": DOMAIN + "/markets.html" },
      { "@type": "ListItem", "position": 3, "name": `${m.ko} ${m.en}`, "item": url }
    ]
  };

  const page = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${escAttr(desc)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SEALSTAR (주)씰스타" />
<meta property="og:title" content="${escAttr(title)}" />
<meta property="og:description" content="${escAttr(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${m.img ? escAttr(m.img.startsWith('http') ? m.img : DOMAIN + '/' + m.img) : DOMAIN + '/images/logo-color.png'}" />
<meta property="og:locale" content="ko_KR" />
<link rel="icon" type="image/x-icon" href="../images/favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png" />
<link rel="stylesheet" href="../css/style.css" />
<style>
  .pbanner{background:linear-gradient(115deg,var(--navy-3),var(--navy-2));color:#fff;padding:56px 0 44px;position:relative;overflow:hidden}
  .pbanner::after{content:"";position:absolute;right:-60px;top:-40px;width:340px;height:340px;border-radius:50%;
    background:radial-gradient(circle,rgba(91,172,224,.35),transparent 70%)}
  .pbanner .eyebrow{color:var(--sky)}
  .pbanner h1{font-size:clamp(22px,3vw,32px);font-weight:900;letter-spacing:-.02em}
  .crumb{color:#9db4d0;font-size:14px;margin-top:12px}
  .crumb a:hover{color:#fff}

  .mwrap{padding:52px 0 88px}
  .mcol{max-width:900px;margin:0 auto}
  .mhero{position:relative;border-radius:16px;overflow:hidden;min-height:260px;display:flex;align-items:flex-end;padding:30px;color:#fff;margin-bottom:30px;background:var(--navy) center/cover}
  .mhero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(9,25,48,.15),rgba(9,25,48,.86))}
  .mhero .cap{position:relative;z-index:1}
  .mhero .en-t{color:var(--sky);font-weight:700;letter-spacing:.05em;font-size:13px;margin-bottom:8px}
  .mhero h1{font-size:clamp(22px,3vw,30px);font-weight:900}
  .intro{color:var(--muted);font-size:16px;line-height:1.8;margin-bottom:34px}

  .blk-t{font-weight:800;color:var(--navy);font-size:14px;letter-spacing:.05em;margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .blk-t::before{content:"";width:16px;height:3px;background:var(--amber);border-radius:2px}
  .areas{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:38px}
  .areas span{background:#eef4fa;color:var(--navy-2);font-size:14px;font-weight:600;padding:9px 16px;border-radius:10px;border:1px solid #dce8f4}

  .perf{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:38px}
  .perf .pc{border:1px solid var(--line);border-radius:12px;padding:22px;background:#fff}
  .perf .pc .no{width:34px;height:34px;border-radius:9px;background:var(--navy);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:12px}
  .perf .pc h4{color:var(--navy);font-size:17px;margin-bottom:6px}
  .perf .pc p{color:var(--muted);font-size:14px;line-height:1.6}

  .relprod{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:38px}
  .relprod a{border:1px solid var(--line);border-radius:999px;padding:9px 17px;font-size:14px;font-weight:700;color:var(--navy);transition:.15s;background:#fff}
  .relprod a:hover{border-color:var(--sky);color:var(--sky-d)}

  .inquire{background:var(--bg-soft);border:1px solid var(--line);border-radius:var(--radius);padding:26px 28px;
    display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:44px}
  .inquire h4{color:var(--navy);font-size:18px;margin-bottom:4px}
  .inquire p{color:var(--muted);font-size:14px}

  .arelated h3{color:var(--navy);font-size:18px;margin-bottom:18px}
  .rgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .rcard{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;transition:.2s;display:block}
  .rcard:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:#cfe0f2}
  .rh{height:80px;background:var(--navy-2) center/cover}
  .rb{padding:12px 14px}
  .rb h5{color:var(--navy);font-size:13.5px;line-height:1.4}

  .aback{text-align:center;margin-top:40px}

  @media(max-width:900px){ .perf{grid-template-columns:1fr} .rgrid{grid-template-columns:1fr 1fr} }
  @media(max-width:560px){
    .mhero{padding:20px;min-height:180px}
    .inquire{padding:20px;flex-direction:column;align-items:flex-start}
    .rgrid{grid-template-columns:1fr}
  }
</style>
<script type="application/ld+json">
${JSON.stringify(orgJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(serviceJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(breadcrumbJsonLd, null, 2)}
</script>
</head>
<body>

${headerBlock.replace(/href="index\.html"/g, 'href="../index.html"').replace(/href="about\.html"/g, 'href="../about.html"').replace(/href="markets\.html" class="active"/, 'href="../markets.html" class="active"').replace(/href="markets\.html"/g, 'href="../markets.html"').replace(/href="products\.html"/g, 'href="../products.html"').replace(/href="news\.html"/g, 'href="../news.html"').replace(/href="contact\.html"/g, 'href="../contact.html"').replace('images/logo-color.png', '../images/logo-color.png')}

<!-- BANNER -->
<section class="pbanner">
  <div class="wrap">
    <div class="eyebrow"><span class="ko">적용분야</span><span class="en">Markets</span></div>
    <h1><span class="ko">${esc(m.ko)}</span><span class="en">${esc(m.en)}</span></h1>
    <div class="crumb"><a href="../index.html"><span class="ko">홈</span><span class="en">Home</span></a> &nbsp;›&nbsp; <a href="../markets.html"><span class="ko">적용분야</span><span class="en">Markets</span></a> &nbsp;›&nbsp; <span class="ko">${esc(m.ko)}</span><span class="en">${esc(m.en)}</span></div>
  </div>
</section>

<!-- CONTENT -->
<section class="mwrap">
  <div class="wrap mcol">
    <div class="mhero" style="background-image:url('${escAttr(imgUrl(m.img))}')">
      <div class="cap">
        <div class="en-t">${esc((m.en || '').toUpperCase())}</div>
        <h1><span class="ko">${esc(m.ko)}</span><span class="en">${esc(m.en)}</span></h1>
      </div>
    </div>
    <p class="intro"><span class="ko">${esc(m.introKo)}</span><span class="en">${esc(m.introEn)}</span></p>

    <div class="blk-t"><span class="ko">주요 적용 부위</span><span class="en">Key Applications</span></div>
    <div class="areas">${areasHtml}</div>

    <div class="blk-t"><span class="ko">요구 성능</span><span class="en">Required Performance</span></div>
    <div class="perf">${perfHtml}</div>

    <div class="blk-t"><span class="ko">관련 제품</span><span class="en">Related Products</span></div>
    <div class="relprod">${prodHtml}</div>

    <div class="inquire">
      <div><h4><span class="ko">해당 산업 적용 사양이 궁금하신가요?</span><span class="en">Need specs for this industry?</span></h4><p><span class="ko">도면이나 사용 조건을 알려주시면 담당자가 확인 후 신속히 답변드립니다.</span><span class="en">Send us your drawings or operating conditions and we will respond promptly.</span></p></div>
      <a class="btn btn-primary" href="../contact.html"><span class="ko">문의하기</span><span class="en">Contact Us</span></a>
    </div>

    <div class="arelated">
      <h3><span class="ko">다른 적용분야</span><span class="en">Other Industries</span></h3>
      <div class="rgrid">${relatedHtml}</div>
    </div>

    <p class="aback"><a href="../markets.html" class="btn btn-ghost"><span class="ko">전체 적용분야 보기</span><span class="en">View All Industries</span></a></p>
  </div>
</section>

${footerBlock.replace(/href="about\.html"/g, 'href="../about.html"').replace(/href="markets\.html"/g, 'href="../markets.html"').replace(/href="products\.html"/g, 'href="../products.html"').replace(/href="news\.html"/g, 'href="../news.html"').replace(/href="contact\.html"/g, 'href="../contact.html"').replace('images/logo-white.png', '../images/logo-white.png')}

<script src="../js/site.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(outDir, m.id + '.html'), page, 'utf8');
  sitemapUrls.push(url);
  console.log('wrote markets/' + m.id + '.html (' + desc.length + ' char desc)');
}

fs.writeFileSync(path.join(root, '_markets_urls.json'), JSON.stringify(sitemapUrls, null, 2));
console.log('DONE:', MARKETS.length, 'market pages');
