import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const root = '/sessions/bold-affectionate-wright/mnt/SealstarHomepage';
const DOMAIN = 'https://www.sealstar.com';

const html = fs.readFileSync(path.join(root, 'products.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'file://' + root + '/products.html' });
const { window } = dom;
global.window = window; global.document = window.document;
try { Object.defineProperty(window, 'localStorage', { value: { getItem: () => null, setItem: () => {} }, configurable: true }); } catch (e) {}
window.IntersectionObserver = class { observe(){} unobserve(){} };
window.history.replaceState = () => {};
window.matchMedia = window.matchMedia || (() => ({ matches: false }));

for (const s of ['js/site.js', 'js/products.js']) {
  const code = fs.readFileSync(path.join(root, s), 'utf8');
  window.eval(code);
}

// extract full sidebar list (id/ko/en) for nav + breadcrumb
const items = [...window.document.querySelectorAll('.item')].map(a => ({
  id: a.getAttribute('data-item'),
  ko: a.querySelector('.ko').textContent,
  en: a.querySelector('.en').textContent
}));

// pull the <style> block from products.html to reuse verbatim
const styleMatch = html.match(/<style>[\s\S]*?<\/style>/);
const styleBlock = styleMatch ? styleMatch[0] : '';

// pull header/footer verbatim
const headerMatch = html.match(/<!-- HEADER -->[\s\S]*?<\/header>/);
const footerMatch = html.match(/<!-- CTA \+ FOOTER -->[\s\S]*?<\/footer>/);
const headerBlock = headerMatch[0].replace('class="active"', ''); // will re-add active on products link
const footerBlock = footerMatch[0];

function esc(s){ return (s||'').replace(/"/g,'&quot;'); }

function subtabBody(){
  return window.document.querySelector('.subtab-body').innerHTML;
}

function buildStaticContent(id){
  window.SS.select(id);
  let contentHtml = window.document.getElementById('content').innerHTML;

  if(id === 'oring'){
    window.SS.oringTab('design'); const design = subtabBody();
    window.SS.oringTab('material'); const material = subtabBody();
    window.SS.oringTab('spec'); window.SS.oringSize(null); const specCards = subtabBody();
    window.SS.oringSize('as568'); const as568 = subtabBody().replace(/<button class="backlink"[\s\S]*?<\/button>/, '');
    window.SS.oringSize('jis'); const jis = subtabBody().replace(/<button class="backlink"[\s\S]*?<\/button>/, '');
    window.SS.oringSize(null); window.SS.oringTab('design'); // reset
    const staticSections =
      '<h3><span class="ko">오링설계</span><span class="en">O-Ring Design</span></h3>' + design +
      '<h3><span class="ko">재질</span><span class="en">Materials</span></h3>' + material +
      '<h3><span class="ko">규격표</span><span class="en">Spec Table</span></h3>' + specCards +
      as568 + jis;
    // strip the interactive subtabs button row + single subtab-body, replace with static sections
    contentHtml = contentHtml.replace(/<div class="subtabs">[\s\S]*?<\/div>\s*<div class="subtab-body">[\s\S]*?<\/div>(?=<div class="inquire")/, '<div class="pbody">' + staticSections + '</div>');
  }
  if(id === 'perfluoro'){
    window.SS.perfluoroTab('perlast'); const perlast = subtabBody();
    window.SS.perfluoroTab('kalrez'); const kalrez = subtabBody();
    window.SS.perfluoroTab('perlast'); // reset
    const staticSections =
      '<h3><span class="ko">퍼플러 (Evolast)</span><span class="en">Perfluoro (Evolast)</span></h3>' + perlast +
      '<h3><span class="ko">Kalrez (Dupont)</span><span class="en">Kalrez (DuPont)</span></h3>' + kalrez;
    contentHtml = contentHtml.replace(/<div class="subtabs">[\s\S]*?<\/div>\s*<div class="subtab-body">[\s\S]*?<\/div>(?=<div class="inquire")/, '<div class="pbody">' + staticSections + '</div>');
  }
  if(id === 'hp'){
    const groupLabel = { hyd: ['유압씰','Hydraulic Seals'], pneu: ['공압씰','Pneumatic Seals'], wiper: ['와이퍼','Wipers'], guide: ['가이드','Guide Elements'] };
    let staticSections = '';
    for(const group of ['hyd','pneu','wiper','guide']){
      window.SS.hpGroup(group); window.SS.hpDetail(null);
      const overview = subtabBody();
      const cats = [...overview.matchAll(/<div class="dcard clickable" onclick="SS\.hpDetail\('([^']+)'\)"><h5><span class="ko">([^<]+)<\/span><span class="en">([^<]+)<\/span>/g)]
        .map(m => ({ key: m[1], ko: m[2], en: m[3] }));
      const [gko, gen] = groupLabel[group];
      let groupSection = `<h3 style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">${gko}</span><span class="en">${gen}</span></h3>` + overview;
      for(const c of cats){
        window.SS.hpDetail(c.key);
        const detailBody = subtabBody().replace(/<button class="backlink"[\s\S]*?<\/button>/, '');
        groupSection += `<h4 class="sizeh" style="margin-top:22px"><span class="ko">${gko} · ${c.ko}</span><span class="en">${gen} · ${c.en}</span></h4>` + detailBody;
      }
      window.SS.hpDetail(null);
      staticSections += groupSection;
    }
    window.SS.hpGroup('hyd'); // reset
    contentHtml = contentHtml.replace(/<div class="subtabs">[\s\S]*?<\/div>\s*<div class="subtab-body">[\s\S]*?<\/div>(?=<div class="inquire")/, '<div class="pbody">' + staticSections + '</div>');
  }
  if(id === 'piston'){
    const lastPbody = () => { const ps = window.document.querySelectorAll('.pbody'); return ps[ps.length - 1]; };
    // strip the leading "<h3>세부 기술자료</h3>" (always re-emitted by renderPiston) and the back-link button —
    // both are re-added manually below so each appears exactly once in the static page.
    const stripLead = (s) => s
      .replace(/^<h3><span class="ko">세부 기술자료<\/span><span class="en">Detailed Technical Data<\/span><\/h3>/, '')
      .replace(/<button class="backlink"[\s\S]*?<\/button>/, '')
      .replace(/<h4 class="sizeh">[\s\S]*?<\/h4>/, ''); // the manual <h3> added below already carries this heading
    window.SS.pistonDetail(null); const overviewInner = lastPbody().innerHTML;
    window.SS.pistonDetail('joint'); const jointBody = stripLead(lastPbody().innerHTML);
    window.SS.pistonDetail('material'); const materialBody = stripLead(lastPbody().innerHTML);
    window.SS.pistonDetail(null); // reset
    // overviewInner already has the "세부 기술자료" h3 + 2 cards; append the two detail tables as their own sub-sections
    const detailSection = '<div class="pbody">' + overviewInner +
      '<h3 style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">조인트 형식별 상세</span><span class="en">Joint Design Details</span></h3>' + jointBody +
      '<h3><span class="ko">소재별 상세</span><span class="en">Material Details</span></h3>' + materialBody +
      '</div>';
    contentHtml = contentHtml.replace(/<div class="pbody"><h3><span class="ko">세부 기술자료[\s\S]*?<\/div>(?=<div class="inquire")/, detailSection);
  }
  if(id === 'spring'){
    window.SS.springTab('design'); const design = subtabBody();
    window.SS.springTab('jacket'); const jacket = subtabBody();
    window.SS.springTab('spring'); const springAlloy = subtabBody();
    window.SS.springTab('design'); // reset
    const staticSections =
      '<h3><span class="ko">설계</span><span class="en">Design</span></h3>' + design +
      '<h3><span class="ko">자켓재질</span><span class="en">Jacket Material</span></h3>' + jacket +
      '<h3><span class="ko">금속재질</span><span class="en">Spring Alloys</span></h3>' + springAlloy;
    contentHtml = contentHtml.replace(/<div class="subtabs">[\s\S]*?<\/div>\s*<div class="subtab-body">[\s\S]*?<\/div>(?=<div class="inquire")/, '<div class="pbody">' + staticSections + '</div>');
  }

  // replace background-image hero div with a real <img alt>
  const it = items.find(x => x.id === id);
  contentHtml = contentHtml.replace(
    /<div class="hero-img" style="background-image:url\('([^']+)'\)"><\/div>/,
    (m, src) => `<div class="hero-img"><img src="../${src}" alt="${esc(it.ko)} ${esc(it.en)} — SEALSTAR" style="width:100%;height:100%;object-fit:cover;display:block" /></div>`
  );
  // this static page lives in products/, so relative links generated by products.js (contact.html) need a ../ prefix
  contentHtml = contentHtml.replace(/href="contact\.html"/g, 'href="../contact.html"');
  // ...and any other inline images (e.g. the piston joint-design diagrams) referenced as root-relative src="images/..."
  contentHtml = contentHtml.replace(/src="images\/web\//g, 'src="../images/web/');

  return contentHtml;
}

function mdesc(contentHtml){
  const m = contentHtml.match(/<p class="desc"><span class="ko">([\s\S]*?)<\/span>/);
  let t = m ? m[1] : '';
  t = t.replace(/<[^>]+>/g,'').trim();
  if(t.length > 155) t = t.slice(0,152) + '...';
  return t;
}

function matList(contentHtml){
  const mats = [...contentHtml.matchAll(/<div class="mat">([\s\S]*?)<\/div>/g)];
  if(!mats.length) return [];
  return [...mats[0][1].matchAll(/<span>([^<]+)<\/span>/g)].map(x => x[1]);
}

const outDir = path.join(root, 'products');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const sitemapUrls = [];

for(const it of items){
  const contentHtml = buildStaticContent(it.id);
  const desc = mdesc(contentHtml);
  const mats = matList(contentHtml);
  const title = `${it.ko} ${it.en} | SEALSTAR (주)씰스타 제품`;
  const url = `${DOMAIN}/products/${it.id}.html`;

  const sidebarLinks = items.map(x =>
    `<a class="item${x.id===it.id?' on':''}" href="${x.id}.html"><span class="ko">${x.ko}</span><span class="en">${x.en}</span></a>`
  ).join('');

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${it.en} (${it.ko})`,
    "description": desc,
    "brand": { "@type": "Organization", "name": "SEALSTAR" },
    "url": url,
    ...(mats.length ? { "material": mats.join(', ') } : {})
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "씰스타 산업용 씰 제조", "item": DOMAIN + "/" },
      { "@type": "ListItem", "position": 2, "name": "산업용 씰 제품군", "item": DOMAIN + "/products.html" },
      { "@type": "ListItem", "position": 3, "name": `${it.ko} ${it.en}`, "item": url }
    ]
  };

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

  const page = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="product" />
<meta property="og:site_name" content="SEALSTAR (주)씰스타" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${DOMAIN}/images/logo-color.png" />
<meta property="og:locale" content="ko_KR" />
<link rel="icon" type="image/x-icon" href="../images/favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png" />
<link rel="stylesheet" href="../css/style.css" />
${styleBlock}
<script type="application/ld+json">
${JSON.stringify(orgJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(productJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(breadcrumbJsonLd, null, 2)}
</script>
</head>
<body>

${headerBlock.replace(/href="index\.html"/g,'href="../index.html"').replace(/href="about\.html"/g,'href="../about.html"').replace(/href="markets\.html"/g,'href="../markets.html"').replace(/href="products\.html"/,'href="../products.html" class="active"').replace(/href="news\.html"/g,'href="../news.html"').replace(/href="contact\.html"/g,'href="../contact.html"').replace('images/logo-color.png','../images/logo-color.png')}

<!-- BANNER -->
<section class="pbanner">
  <div class="wrap">
    <div class="eyebrow"><span class="ko">제품소개</span><span class="en">Products</span></div>
    <h1><span class="ko">${it.ko}</span><span class="en">${it.en}</span></h1>
    <div class="crumb"><a href="../index.html"><span class="ko">홈</span><span class="en">Home</span></a> &nbsp;›&nbsp; <a href="../products.html"><span class="ko">제품소개</span><span class="en">Products</span></a> &nbsp;›&nbsp; <span class="ko">${it.ko}</span><span class="en">${it.en}</span></div>
  </div>
</section>

<!-- PRODUCTS LAYOUT -->
<section class="plink">
  <div class="wrap player">
    <aside class="side" id="side">
      <div class="itemlist">${sidebarLinks}</div>
    </aside>
    <div class="pcontent" id="content">${contentHtml}</div>
  </div>
</section>

<p style="text-align:center;margin:0 0 60px"><a href="../products.html#${it.id}" class="btn btn-ghost"><span class="ko">인터랙티브 카탈로그에서 보기</span><span class="en">View in Interactive Catalog</span></a></p>

${footerBlock.replace(/href="about\.html"/g,'href="../about.html"').replace(/href="markets\.html"/g,'href="../markets.html"').replace(/href="products\.html"/g,'href="../products.html"').replace(/href="news\.html"/g,'href="../news.html"').replace('images/logo-white.png','../images/logo-white.png')}

<script src="../js/site.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(outDir, it.id + '.html'), page, 'utf8');
  sitemapUrls.push(url);
  console.log('wrote', it.id + '.html', '(' + desc.length + ' char desc)');
}

fs.writeFileSync(path.join(root, '_product_urls.json'), JSON.stringify(sitemapUrls, null, 2));
console.log('DONE:', items.length, 'pages');
