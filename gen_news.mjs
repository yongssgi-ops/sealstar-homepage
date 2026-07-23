// ============================================================
// SEALSTAR — 홍보센터 개별 게시글 정적 페이지 생성기
// js/news.js 의 POSTS 배열을 읽어 news/<id>.html 을 하나씩 생성합니다.
// (제품 상세페이지의 gen_products.mjs 와 같은 목적: 각 게시글이
//  검색엔진/생성형 AI가 개별 인용할 수 있는 자기만의 URL을 갖도록 함.)
//
// jsdom을 쓰지 않고 Node의 내장 vm 모듈로 POSTS 배열만 안전하게 추출한다
// (이 샌드박스에서 jsdom require 자체가 멈추는 이슈가 있어 우회).
// ============================================================
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://www.sealstar.com';

// ---- POSTS 배열 추출 (jsdom 없이) ----
const newsJsSrc = fs.readFileSync(path.join(root, 'js/news.js'), 'utf8');
const sandbox = { document: { getElementById: () => null, querySelectorAll: () => [] }, window: {} };
vm.createContext(sandbox);
vm.runInContext(newsJsSrc, sandbox);
const POSTS = sandbox.POSTS;
if (!Array.isArray(POSTS) || !POSTS.length) throw new Error('POSTS array not found/empty');

const missingId = POSTS.filter(p => !p.id);
if (missingId.length) throw new Error('missing id on posts: ' + missingId.map(p => p.titleKo).join(', '));

// ---- header/footer 블록을 news.html에서 그대로 추출 ----
const newsHtml = fs.readFileSync(path.join(root, 'news.html'), 'utf8');
const headerBlock = newsHtml.match(/<!-- HEADER -->[\s\S]*?<\/header>/)[0];
const footerBlock = newsHtml.match(/<!-- FOOTER -->[\s\S]*?<\/footer>/)[0];

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function escAttr(s) { return (s || '').replace(/"/g, '&quot;'); }

const TAG = {
  exhibition: { ko: '전시회', en: 'Exhibition' },
  press: { ko: '언론보도', en: 'Press' },
  notice: { ko: '공지', en: 'Notice' }
};

function paragraphs(bodyKo, bodyEn) {
  const ko = (bodyKo || '').split('\n\n');
  const en = (bodyEn || '').split('\n\n');
  const n = Math.max(ko.length, en.length);
  let out = '';
  for (let i = 0; i < n; i++) {
    out += '<p><span class="ko">' + esc(ko[i] || '') + '</span><span class="en">' + esc(en[i] || '') + '</span></p>';
  }
  return out;
}

function firstLine(s) { return (s || '').split('\n')[0]; }

// pages live in news/, so local image paths (images/web/...) need a ../ prefix;
// remote http(s) URLs are used as-is
function imgUrl(img) { return img && !img.startsWith('http') ? '../' + img : img; }

function mdesc(p) {
  let t = firstLine(p.bodyKo);
  if (t.length > 155) t = t.slice(0, 152) + '...';
  return t;
}

const outDir = path.join(root, 'news');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const sitemapUrls = [];

for (const p of POSTS) {
  const url = `${DOMAIN}/news/${p.id}.html`;
  const desc = mdesc(p);
  const title = `${p.titleKo} | 홍보센터 | SEALSTAR (주)씰스타`;
  const bg = p.img ? `background-image:url('${escAttr(imgUrl(p.img))}')` : `background:linear-gradient(135deg,var(--navy-2),var(--sky-d))`;
  const place = (p.placeKo || p.placeEn)
    ? ` · <span class="ko">${esc(p.placeKo)}</span><span class="en">${esc(p.placeEn)}</span>`
    : '';
  const sourceBlock = p.source
    ? `<div class="src"><a href="${escAttr(p.source)}" target="_blank" rel="noopener">`
      + `<span class="ko">원문 기사 보기${p.sourceName ? ' — ' + esc(p.sourceName) : ''} ↗</span>`
      + `<span class="en">Read the original${p.sourceName ? ' — ' + esc(p.sourceName) : ''} ↗</span></a></div>`
    : '';

  // 다른 소식 4건 (최신순, 자기 자신 제외)
  const related = POSTS.filter(x => x.id !== p.id).slice(0, 4);
  const relatedHtml = related.map(r => {
    const rbg = r.img ? `background-image:url('${escAttr(imgUrl(r.img))}')` : `background:linear-gradient(135deg,var(--navy-2),var(--sky-d))`;
    return `<a class="rcard" href="${r.id}.html"><div class="rh" style="${rbg}"></div>`
      + `<div class="rb"><span class="tag ${r.type}"><span class="ko">${TAG[r.type].ko}</span><span class="en">${TAG[r.type].en}</span></span>`
      + `<h5><span class="ko">${esc(r.titleKo)}</span><span class="en">${esc(r.titleEn)}</span></h5>`
      + `<div class="rdate">${r.date}</div></div></a>`;
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": p.type === 'press' ? "NewsArticle" : "Article",
    "headline": p.titleKo,
    "alternativeHeadline": p.titleEn,
    "description": desc,
    "datePublished": p.date,
    "dateModified": p.date,
    "image": p.img && p.img.startsWith('http') ? [p.img] : [DOMAIN + "/images/logo-color.png"],
    "url": url,
    "publisher": { "@type": "Organization", "name": "SEALSTAR", "logo": { "@type": "ImageObject", "url": DOMAIN + "/images/logo-color.png" } },
    "author": { "@type": "Organization", "name": "SEALSTAR" },
    ...(p.placeKo ? { "contentLocation": { "@type": "Place", "name": p.placeKo } } : {})
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "씰스타 산업용 씰 제조", "item": DOMAIN + "/" },
      { "@type": "ListItem", "position": 2, "name": "홍보센터", "item": DOMAIN + "/news.html" },
      { "@type": "ListItem", "position": 3, "name": p.titleKo, "item": url }
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
<meta property="og:type" content="article" />
<meta property="og:site_name" content="SEALSTAR (주)씰스타" />
<meta property="og:title" content="${escAttr(p.titleKo)}" />
<meta property="og:description" content="${escAttr(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${p.img && p.img.startsWith('http') ? escAttr(p.img) : DOMAIN + '/images/logo-color.png'}" />
<meta property="og:locale" content="ko_KR" />
<meta property="article:published_time" content="${p.date}" />
<link rel="icon" type="image/x-icon" href="../images/favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png" />
<link rel="stylesheet" href="../css/style.css" />
<style>
  .pbanner{background:linear-gradient(115deg,var(--navy-3),var(--navy-2));color:#fff;padding:56px 0 44px;position:relative;overflow:hidden}
  .pbanner::after{content:"";position:absolute;right:-60px;top:-40px;width:340px;height:340px;border-radius:50%;
    background:radial-gradient(circle,rgba(91,172,224,.35),transparent 70%)}
  .pbanner .eyebrow{color:var(--sky)}
  .pbanner h1{font-size:clamp(22px,3vw,32px);font-weight:900;letter-spacing:-.02em;max-width:820px}
  .crumb{color:#9db4d0;font-size:14px;margin-top:12px}
  .crumb a:hover{color:#fff}

  .awrap{padding:52px 0 88px}
  .acol{max-width:800px;margin:0 auto}
  .acard{border:1px solid var(--line);border-radius:var(--radius);background:#fff;overflow:hidden;box-shadow:var(--shadow)}
  .ah{height:340px;background:var(--navy-2) center/cover}
  .ac{padding:32px 36px 36px}
  .tag{display:inline-block;font-weight:700;font-size:12px;padding:4px 12px;border-radius:999px;margin-bottom:14px}
  .tag.exhibition{background:#eaf3fb;color:var(--sky-d)}
  .tag.press{background:#fff2d6;color:#b57a00}
  .tag.notice{background:#eef0f3;color:var(--grey)}
  .ac h1.atitle{color:var(--navy);font-size:26px;line-height:1.35;margin-bottom:10px}
  .ameta{color:var(--muted);font-size:14px;margin-bottom:22px}
  .abody p{color:#37424f;font-size:15.5px;line-height:1.85;margin-bottom:16px}
  .abody p:last-child{margin-bottom:0}
  .src{margin-top:24px;padding-top:18px;border-top:1px solid var(--line)}
  .src a{display:inline-flex;align-items:center;gap:6px;background:var(--bg-soft);border:1px solid var(--line);border-radius:999px;padding:9px 16px;font-size:13.5px;font-weight:700;color:var(--sky-d);transition:.15s}
  .src a:hover{border-color:var(--sky);background:#fff}

  .arelated{margin-top:44px}
  .arelated h3{color:var(--navy);font-size:18px;margin-bottom:18px}
  .rgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .rcard{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;transition:.2s;display:flex;flex-direction:column}
  .rcard:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:#cfe0f2}
  .rh{height:96px;background:var(--navy-2) center/cover}
  .rb{padding:14px}
  .rb .tag{font-size:10.5px;padding:3px 9px;margin-bottom:8px}
  .rb h5{color:var(--navy);font-size:13.5px;line-height:1.4;margin-bottom:8px}
  .rdate{color:var(--muted);font-size:12px}

  .aback{text-align:center;margin-top:40px}

  @media(max-width:900px){
    .rgrid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:560px){
    .ah{height:200px}
    .ac{padding:24px 20px 28px}
    .rgrid{grid-template-columns:1fr}
  }
</style>
<script type="application/ld+json">
${JSON.stringify(orgJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(articleJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(breadcrumbJsonLd, null, 2)}
</script>
</head>
<body>

${headerBlock.replace(/href="index\.html"/g, 'href="../index.html"').replace(/href="about\.html"/g, 'href="../about.html"').replace(/href="markets\.html"/g, 'href="../markets.html"').replace(/href="products\.html"/g, 'href="../products.html"').replace(/href="news\.html" class="active"/, 'href="../news.html" class="active"').replace(/href="news\.html"/g, 'href="../news.html"').replace(/href="contact\.html"/g, 'href="../contact.html"').replace('images/logo-color.png', '../images/logo-color.png')}

<!-- BANNER -->
<section class="pbanner">
  <div class="wrap">
    <div class="eyebrow"><span class="ko">홍보센터</span><span class="en">News</span></div>
    <h1><span class="ko">${esc(p.titleKo)}</span><span class="en">${esc(p.titleEn)}</span></h1>
    <div class="crumb"><a href="../index.html"><span class="ko">홈</span><span class="en">Home</span></a> &nbsp;›&nbsp; <a href="../news.html"><span class="ko">홍보센터</span><span class="en">News</span></a> &nbsp;›&nbsp; <span class="ko">${esc(p.titleKo)}</span><span class="en">${esc(p.titleEn)}</span></div>
  </div>
</section>

<!-- ARTICLE -->
<section class="awrap">
  <div class="wrap acol">
    <article class="acard">
      <div class="ah" style="${bg}"></div>
      <div class="ac">
        <span class="tag ${p.type}"><span class="ko">${TAG[p.type].ko}</span><span class="en">${TAG[p.type].en}</span></span>
        <div class="ameta"><span>${p.date}</span>${place}</div>
        <div class="abody">${paragraphs(p.bodyKo, p.bodyEn)}</div>
        ${sourceBlock}
      </div>
    </article>

    <div class="arelated">
      <h3><span class="ko">다른 소식</span><span class="en">More News</span></h3>
      <div class="rgrid">${relatedHtml}</div>
    </div>

    <p class="aback"><a href="../news.html" class="btn btn-ghost"><span class="ko">전체 목록 보기</span><span class="en">View All News</span></a></p>
  </div>
</section>

${footerBlock.replace(/href="about\.html"/g, 'href="../about.html"').replace(/href="markets\.html"/g, 'href="../markets.html"').replace(/href="products\.html"/g, 'href="../products.html"').replace(/href="news\.html"/g, 'href="../news.html"').replace(/href="contact\.html"/g, 'href="../contact.html"').replace(/href="tel:0226376200"/g, 'href="tel:0226376200"').replace('images/logo-white.png', '../images/logo-white.png')}

<script src="../js/site.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(outDir, p.id + '.html'), page, 'utf8');
  sitemapUrls.push(url);
  console.log('wrote news/' + p.id + '.html (' + desc.length + ' char desc)');
}

fs.writeFileSync(path.join(root, '_news_urls.json'), JSON.stringify(sitemapUrls, null, 2));
console.log('DONE:', POSTS.length, 'news pages');
