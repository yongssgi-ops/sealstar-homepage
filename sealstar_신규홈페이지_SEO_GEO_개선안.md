# (주)씰스타 신규 홈페이지 SEO·GEO 개선안

> 대상: `SealstarHomepage` 프로젝트로 신규 제작 중인 코드 기반 정적 사이트(index/about/markets/products/news/contact.html, Cloudflare Workers 배포). 기존 Sixshop 플랫폼 `www.sealstar.com`을 **전면 대체**할 예정이며, 완전한 코드 접근 권한이 있어 기존 개선안(`sealstar_SEO_GEO_개선안.md`)이 전제한 "임차형 플랫폼 제약"이 대부분 사라집니다. 본 문서는 그 이점을 살려 **실제 코드로 지금 바로 심을 수 있는 개선안**을 제시합니다.
>
> 조사 방법: 신규 사이트 6개 HTML 파일과 `js/products.js`·`js/markets.js`·`js/news.js`의 실제 소스를 직접 grep·리딩하여 얻은 **관측 사실**만 기재했습니다. 수치는 확정값(전화 02-2637-6200 / 이메일 info@sealstar.com / 주소 서울특별시 영등포구 국회대로54길 53-6 1층 / 사업자등록번호 107-87-85067 / 대표 양희승 / 설립 1982년)을 그대로 사용했으며, 확인이 필요한 항목만 **확인 필요**로 표기했습니다.

---

## 0. 도메인 전환 시점 — 지금 할 일 / 전환 시점에 할 일 구분

**도메인은 `www.sealstar.com`을 그대로 사용하는 것으로 확정.** 아래는 "리뉴얼 전 미리 만들어두는 지금"과 "실제 도메인을 연결하는 전환 시점"에 각각 무엇을 해야 하는지 나눈 것입니다. **§2~§6의 코드·콘텐츠 작업 대부분은 도메인 연결을 기다릴 필요 없이 지금 바로 진행 가능**합니다.

### 지금(도메인 연결 전)도 그대로 진행 가능
- §2 og:*/canonical/robots.txt/sitemap.xml/favicon — 코드에 `https://www.sealstar.com/...`을 실제 최종 주소로 그대로 박아 넣으면 됩니다(아직 그 주소가 이 사이트를 가리키지 않아도 무방 — 도메인 연결 순간 자동으로 유효해짐).
- §3 JSON-LD 전체(Organization/WebSite/Product/Breadcrumb/FAQ) — 마찬가지로 최종 도메인 기준으로 지금 심어두면 됩니다.
- §4 SPA→정적 서브페이지 분리, 이미지 alt, 정의 콘텐츠, FAQ 화면 노출 — 순수 코드/콘텐츠 작업, 도메인과 무관하게 지금이 적기입니다. 오히려 리뉴얼 발표 전에 끝내두는 게 맞습니다.
- llms.txt(§8) 초안 작성

### 도메인을 실제로 연결하는 시점(전환일)에만 가능
- **301 리다이렉트 맵 적용** — 기존 Sixshop 사이트의 실제 URL(`/oilseal`, `/hpseal` 등)에서 신규 사이트 URL로 리다이렉트를 걸려면, `www.sealstar.com`이 신규 사이트를 가리키는 순간이어야 실제로 동작합니다. 지금 미리 할 일은 **매핑표만 작성**해두는 것(기존 7개 카테고리 URL ↔ 신규 18개 카테고리 URL 대응표, 아래 §0-1).
- **GSC/네이버 서치어드바이저 소유확인·사이트맵 제출** — 최종 도메인 기준으로 인증해야 재작업이 없습니다. `sealstar-homepage.yongssgi.workers.dev`로 먼저 인증해도 도메인 전환 시 재인증이 필요해 이중작업이 됩니다. **전환일에 한 번만** 진행 권장.
- **GBP/네이버 스마트플레이스의 웹사이트 URL 필드, 외부 디렉토리(komachine·tradekorea 등) 링크 갱신** — 실제 방문 가능한 최종 URL이어야 하므로 전환 후 처리.

### §0-1. 지금 준비해둘 것: 기존 URL ↔ 신규 URL 매핑표 (골격)

전환 당일 바로 적용할 수 있도록 지금 표만 채워두는 것을 권장합니다.

| 기존 Sixshop URL | 신규 URL(§4 정적화 완료 기준) |
|---|---|
| www.sealstar.com/oilseal | www.sealstar.com/products/oil.html |
| www.sealstar.com/hpseal | www.sealstar.com/products/hp.html |
| www.sealstar.com/basicseal | www.sealstar.com/products/oring.html |
| www.sealstar.com/machinedseal | www.sealstar.com/products/machined.html |
| www.sealstar.com/seseal | www.sealstar.com/products/spring.html |
| www.sealstar.com/acmbearings | www.sealstar.com/products/acm.html |
| www.sealstar.com/magneticfilter | www.sealstar.com/products/magnetic.html |
| (그 외 기존 페이지) | (확인 필요 — 기존 사이트 전체 URL 목록 재확인 후 채우기) |

---

## 1. 현황 진단 (AS-IS, 코드 직접 확인)

### 1-1. 페이지별 메타 정보

| 페이지 | `<title>` | meta description | H1 | og:* | canonical | JSON-LD |
|---|---|---|---|---|---|---|
| index.html | SEALSTAR (주) 씰스타 | ✅ 있음(고유) | ✅ 1개 | ❌ 없음 | ❌ 없음 | ❌ 없음 |
| about.html | 회사소개 \| SEALSTAR (주)씰스타 | ✅ 있음(고유) | ✅ 1개 | ❌ 없음 | ❌ 없음 | ❌ 없음 |
| markets.html | 적용분야 \| SEALSTAR (주)씰스타 | ✅ 있음(고유) | ✅ 1개 | ❌ 없음 | ❌ 없음 | ❌ 없음 |
| products.html | 제품소개 \| SEALSTAR (주)씰스타 | ✅ 있음(고유) | ✅ 1개 | ❌ 없음 | ❌ 없음 | ❌ 없음 |
| news.html | 홍보센터 \| SEALSTAR (주)씰스타 | ✅ 있음(고유) | ✅ 1개 | ❌ 없음 | ❌ 없음 | ❌ 없음 |
| contact.html | 문의하기 \| SEALSTAR (주)씰스타 | ✅ 있음(고유) | ✅ 1개 | ❌ 없음 | ❌ 없음 | ❌ 없음 |

**진단**: 기존 사이트의 최대 약점이었던 "메타 중복"은 신규 사이트에서 이미 해결되어 있습니다(6개 페이지 모두 고유 title/description). 반면 og:*, canonical, JSON-LD는 전 페이지 **0건** — 이 부분은 기존 사이트와 동일하게 취약합니다. `robots.txt`·`sitemap.xml`도 저장소에 **존재하지 않음**(Sixshop처럼 자동 생성되지 않으므로 직접 만들어야 함).

### 1-2. 구조적 문제 — SPA 해시라우팅으로 본문이 JS 전용 ★최우선 이슈

`products.html`, `markets.html`, `news.html` 3개 페이지는 원본 HTML에 `<!-- rendered by JS -->` 자리만 있고, 실제 본문(제품명 H2, 작동원리/특징/적용분야 H3, 재질표 등)은 `js/products.js`·`js/markets.js`가 브라우저에서 `innerHTML`로 **런타임에** 채워 넣습니다. 라우팅도 `location.hash`(`products.html#oring` 식) 기반입니다.

| 결과 | 설명 |
|---|---|
| URL이 섹션당 1개뿐 | 제품 18종, 적용분야 다수, 뉴스 게시물 전부가 각각 `products.html#id` 같은 **해시**만 다를 뿐 실제 페이지 URL은 하나 → 개별 제품/뉴스가 검색결과나 AI 답변에 **개별 링크로 인용될 수 없음** |
| 페이지별 고유 title/description 불가 | 해시가 바뀌어도 `<title>`은 그대로 "제품소개 \| SEALSTAR" 고정 — 오링과 자석필터가 검색엔진엔 같은 페이지로 보임 |
| SSR 미지원 크롤러엔 본문이 빈 페이지 | 구글은 JS를 렌더링하지만, 참고 문서 (G-5)에서 지적한 대로 다수의 생성형 AI 크롤러는 JS를 렌더링하지 않음 → raw HTML만 보면 제품 설명·재질표·적용분야가 **전부 비어 있음** |
| 이미지가 `<img>`가 아닌 CSS `background-image` | `heroImgHtml()` 함수가 `background-image:url(...)`로 렌더링 — alt 속성 자체가 불가능한 구조. `js/products.js` 전체에 `alt=` 속성이 **0건** |

기존 Sixshop 사이트의 개선안은 "본문 텍스트 빈곤·헤딩 0개"를 지적했는데, 신규 사이트는 헤딩 태그 자체는 잘 설계되어 있습니다(H2 제품명 → H3 작동원리/특징/적용분야, GEO 청킹 구조와 부합). **문제는 그 구조가 JS 안에만 존재하고 raw HTML엔 없다는 것**입니다. 즉 기존 사이트보다 콘텐츠 설계는 우수하지만, 노출 방식(SSR 부재)에서 새로운 취약점이 생겼습니다.

### 1-3. NAP(상호·주소·전화) — 확정 정보

| 항목 | 값 |
|---|---|
| 상호 | (주)씰스타 SEALSTAR Co., Ltd. |
| 대표 | 양희승 (Hee-seung Yang) |
| 설립 | 1982년 |
| 주소 | 서울특별시 영등포구 국회대로54길 53-6, 1층 (1F, 53-6, Gukhoe-daero 54-gil, Yeongdeungpo-gu, Seoul) |
| 전화 / 팩스 | 02-2637-6200 / 02-2634-0482 |
| 이메일 | info@sealstar.com *(구 개선안의 taehwa@sealstar.com과 다름 — 신규 사이트 기준 info@ 사용, 통일 필요)* |
| 사업자등록번호 | 107-87-85067 |

이 정보는 이미 `about.html`·`contact.html`·전 페이지 footer에 일관되게 반영되어 있어 **NAP 위생 상태는 양호**합니다. 아래 JSON-LD·외부 등록 시 이 값을 그대로 사용하면 됩니다.

---

## 2. 메타 기본 정비 (a)

### 2-1. og:*, canonical 추가 — 전 페이지 공통 head에 삽입

```html
<link rel="canonical" href="https://www.sealstar.com/{페이지파일명}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SEALSTAR (주)씰스타" />
<meta property="og:title" content="{해당 페이지 title과 동일}" />
<meta property="og:description" content="{해당 페이지 description과 동일}" />
<meta property="og:url" content="https://www.sealstar.com/{페이지파일명}" />
<meta property="og:image" content="https://www.sealstar.com/images/web/og-default.jpg" />
<meta property="og:locale" content="ko_KR" />
```

- `og:image`용 1200×630 대표 이미지 1장 신규 제작 필요(**확인 필요** — 현재 저장소에 og 전용 이미지 없음).
- 도메인은 §0의 전환 계획 확정 후 실제 값으로 교체.

### 2-2. robots.txt / sitemap.xml 신규 생성

Sixshop은 자동 생성이라 "확인 필요"였지만, 신규 사이트는 저장소 루트에 파일을 직접 만들면 되므로 즉시 처리 가능합니다.

`robots.txt`:
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.sealstar.com/sitemap.xml
```

`sitemap.xml` (6개 정적 페이지 기준 — §3의 제품별 URL 분리가 완료되면 18개 제품 URL도 추가):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.sealstar.com/index.html</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.sealstar.com/about.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.sealstar.com/markets.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.sealstar.com/products.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.sealstar.com/news.html</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.sealstar.com/contact.html</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
</urlset>
```

- `wrangler.jsonc`의 `assets.directory`가 루트이므로 두 파일을 저장소 루트에 두면 별도 설정 없이 바로 서빙됩니다.
- `.assetsignore`에는 포함시키지 말 것(현재 `.assetsignore`는 `.git`·`wrangler.jsonc` 등 배포 제외용이며 robots/sitemap은 배포되어야 함).

### 2-3. favicon 누락

전 페이지 소스에 `<link rel="icon">`이 없습니다. 브라우저 탭·북마크·일부 리치 스니펫에 영향 — `images/` 폴더의 로고를 favicon.ico/png로 변환해 6개 페이지 head에 공통 삽입 권장.

---

## 3. 구조화 데이터 (b) — 그대로 붙여넣는 JSON-LD

### 3-1. Organization + LocalBusiness (전 페이지 공통 head, 1회만)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SEALSTAR",
  "alternateName": "(주)씰스타",
  "url": "https://www.sealstar.com/",
  "logo": "https://www.sealstar.com/images/logo.png",
  "foundingDate": "1982",
  "description": "1982년 설립, 유압·공압씰·오일씰·오링·가공씰·스프링에너자이즈씰 등 정밀 씰링 제품을 건설장비·산업기계·반도체·조선·우주항공 분야에 공급하는 전문 기업.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "국회대로54길 53-6, 1층",
    "addressLocality": "영등포구",
    "addressRegion": "서울특별시",
    "addressCountry": "KR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "확인 필요", "longitude": "확인 필요" },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+82-2-2637-6200",
    "faxNumber": "+82-2-2634-0482",
    "email": "info@sealstar.com",
    "contactType": "sales",
    "areaServed": "KR",
    "availableLanguage": ["ko", "en"]
  },
  "sameAs": [
    "확인 필요 (komachine 프로필 URL)",
    "확인 필요 (blog.yeogie.com/sealstar)",
    "확인 필요 (네이버 스마트플레이스 URL — §5-2 등록 후 추가)"
  ]
}
</script>
```

> geo 좌표는 네이버지도에서 "(주)씰스타" 또는 정확 주소로 검색해 실측값으로 교체(§5-2 스마트플레이스 등록과 동시 진행). `sameAs`는 실제 존재·확인된 URL만 채우고, 미확인 계정은 절대 추측 기입하지 마세요.

### 3-2. WebSite (index.html 전용, sitelinks searchbox는 검색 기능이 없으므로 제외)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SEALSTAR (주)씰스타",
  "url": "https://www.sealstar.com/"
}
</script>
```

### 3-3. Product — 18개 카테고리 공통 템플릿

`js/products.js`의 `ITEMS` 18개 항목(오링, 테프론캡슐오링, 퍼플러오링, 비규격연결오링, 쿼드링, ED링, 본드씰, 유공압씰, 스프링에너자이드씰, 테프론립씰, PEEK, 오일씰, 베어링아이솔레이터, 웨어링, 가공씰, ACM베어링, 자석필터, 메카니컬씰) 각각에 아래 템플릿 적용. `offers`는 가격 비공개(견적제)이므로 **의도적으로 생략**(부록 §8의 기각 목록 — Product/Offer 스키마가 GEO 필수라는 주장은 근거 없음, "의미 명확화" 목적으로만 사용).

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{영문명} ({국문명})",
  "description": "{제품 요약 설명 1~2문장}",
  "brand": { "@type": "Organization", "name": "SEALSTAR" },
  "material": "{주요 소재, 예: FKM, NBR, PTFE 등}",
  "url": "https://www.sealstar.com/products.html#{id}"
}
</script>
```

> ⚠️ §1-2에서 지적한 대로 현재는 18개 제품이 **하나의 URL**(해시만 다름)을 공유합니다. JSON-LD의 `url`을 해시 URL로 넣는 것은 임시방편이며, 근본 해결은 §4의 정적 서브페이지 분리입니다. 분리 전까지는 이 형태로라도 넣어 최소한의 의미 신호를 제공하세요.

### 3-4. BreadcrumbList (products.html, markets.html 등 계층 페이지)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "씰스타 산업용 씰 제조", "item": "https://www.sealstar.com/index.html" },
    { "@type": "ListItem", "position": 2, "name": "산업용 씰 제품군", "item": "https://www.sealstar.com/products.html" }
  ]
}
</script>
```

(네이버 권고에 따라 일반어 대신 설명형 name 사용 — 기존 개선안의 네-6과 동일 원칙)

### 3-5. FAQPage — §4의 FAQ 텍스트와 글자까지 동일하게

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "오일씰과 유압씰의 차이는 무엇인가요?",
      "acceptedAnswer": { "@type": "Answer", "text": "오일씰은 회전축에서 윤활유 누유·이물질 침입을 막는 회전용 씰이고, 유압씰은 실린더의 왕복운동(피스톤·로드)에서 유압을 밀폐하는 직선운동용 씰입니다. 씰스타는 두 분야 모두 NBR·FKM·우레탄 등 작동조건별 소재로 공급합니다." }
    }
  ]
}
</script>
```

> §4 전체 FAQ를 같은 형식으로 `mainEntity`에 추가. 화면 노출 텍스트와 100% 일치시킬 것(불일치 시 구글 가이드라인 위반).

---

## 4. 화면 노출 콘텐츠 — SSR/정적화 우선순위 (b-2) ★핵심

기존 사이트 개선안은 "본문 텍스트를 추가하라"가 핵심이었지만, 신규 사이트는 **텍스트 자체는 이미 잘 쓰여 있고**(`js/products.js`의 `principleKo/En`, `features`, `apps` 등) **위치가 잘못**되었습니다. 우선순위는 아래 순서를 권장합니다.

1. **1순위 — 제품 18종 정적 서브페이지 분리**: 현재 `products.html#id` 해시 라우팅을 `products/oring.html`처럼 실제 파일 단위로 분리(또는 빌드 시점에 `js/products.js`의 `ITEMS` 배열을 순회해 정적 HTML을 생성하는 간단한 Node 스크립트 추가 — Cloudflare Workers 정적 자산 배포 방식과 궁합이 좋음). 각 파일에 고유 title/description/canonical/JSON-LD(§3-3)를 갖게 하고, 기존 SPA 렌더링은 그대로 두되 정적 HTML을 "진짜 소스"로, JS는 UX 개선(탭 전환 애니메이션 등)에만 쓰도록 역할 분리.
2. **2순위 — 최소 조치(서브페이지 분리 전 임시)**: `products.html`·`markets.html`의 raw HTML `<div id="content">` 안에 **첫 번째 카테고리(오링)의 본문만이라도** 정적으로 미리 넣어두면, 최소한 그 페이지는 JS 없이도 의미 있는 텍스트를 갖게 됩니다. 완전한 해결은 아니지만 1순위 작업 전 과도기 조치로 유효.
3. **3순위 — 이미지 alt 텍스트**: `heroImgHtml()`의 `background-image` 방식을 `<img src="..." alt="{국문명} {영문명} — SEALSTAR">`로 전환. CSS 배경 이미지는 시각적으로는 동일하게 유지 가능(`<img>`에 `object-fit:cover` 적용)하면서 크롤러엔 alt 텍스트가 보이게 됨.
4. **4순위 — news.html 게시물 개별 URL화**: 현재 모달(`m-title`/`m-body`)로 뉴스 상세를 띄우는 구조라 개별 게시물이 공유 불가능한 URL입니다. 전시회 참가·신제품 소식처럼 시의성 있는 콘텐츠는 개별 인용 가치가 있으므로 `news/2026-xx.html` 형태 분리를 3개월차 로드맵(§7)에 포함.

### 4-1. 정의 콘텐츠(용어 소유) — about.html 또는 신설 용어집에 정적 텍스트로 삽입

기존 개선안의 (G-3) "정의의 소유권" 전략은 신규 사이트에도 그대로 유효합니다. 아래 5종을 `about.html` 하단 또는 `products.html` 상단(정적 영역)에 raw HTML로 배치:

```html
<h2>오일씰(Oil Seal)이란 무엇인가요?</h2>
<p>오일씰은 회전축과 하우징 사이를 밀봉하는 부품으로, 내부 윤활유의 누유를 막고 외부의 먼지·수분 침입을 차단합니다. 고무 립(lip)이 회전축에 밀착해 작동하며 회전 운동부 전용입니다. NBR·FKM·실리콘 등 매질과 온도에 따라 소재를 선정합니다.</p>

<h2>유압씰(Hydraulic Seal)이란 무엇인가요?</h2>
<p>유압씰은 유압실린더의 왕복운동(피스톤·로드)에서 작동유의 압력을 밀폐하는 직선운동용 씰입니다. 피스톤씰·로드씰·더스트씰·백업링으로 구성되며, 고압·내마모가 필요해 우레탄(PU)·PTFE를 주로 사용합니다.</p>

<h2>가공씰(Machined Seal)이란 무엇인가요?</h2>
<p>가공씰은 금형으로 성형하지 않고 소재 블록을 도면 치수대로 절삭 가공해 만드는 씰입니다. 표준 카탈로그에 없는 비표준 치수·특수 형상을 소량·신속하게 제작할 수 있어 단종 부품이나 시제품 대응에 적합합니다.</p>

<h2>스프링 에너자이즈드 씰(Spring-Energized Seal)이란 무엇인가요?</h2>
<p>스프링 에너자이즈드 씰은 PTFE 등 실링부 안에 금속 스프링을 내장해 탄성을 보강한 고성능 씰입니다. 온도가 변해도 스프링이 립을 축에 일정하게 밀착시켜 초저온·고진공·고온 등 극한 환경의 밀봉에 사용됩니다.</p>

<h2>ACM 베어링이란 무엇인가요?</h2>
<p>여기서 ACM 베어링은 회전 구름베어링이 아니라 저마찰 슬라이딩 베어링(부싱·가이드)으로, 산업기계·반도체 장비의 직선·요동 운동부에서 마찰·마모를 줄입니다.</p>
```

---

## 5. 외부 등록 체크리스트 (d)

### 검색엔진
- [ ] Google Search Console: 신규 도메인(또는 workers.dev) 등록 + sitemap.xml 제출 + §0의 301 전환 시 "주소 변경" 도구 사용
- [ ] 네이버 서치어드바이저: 사이트 등록 + `<meta name="naver-site-verification">` head 삽입(확인 필요 — 발급 코드) + sitemap 제출

### 로컬/지도
- [ ] Google Business Profile: 영등포 주소·02-2637-6200 등록
- [ ] 네이버 스마트플레이스: 업종 "제조업/산업용품", 상호·주소·전화 §1-3 NAP와 글자까지 일치

### B2B 디렉토리·백링크 — 기존 자산 이전 확인
- [ ] komachine.com 프로필의 링크된 URL을 신규 도메인으로 갱신
- [ ] tradekorea.com 영문 등록 URL 갱신
- [ ] blog.yeogie.com/sealstar 기존 링크 정합성 점검
- [ ] exhi.daara.co.kr, sealstar.bizdaara.com 등 기존 등록처 URL 점검

### NAP 일관성
- [ ] 외부에 흩어진 구버전 연락처(구 개선안에서 발견된 sealstar@naver.com, taehwa@sealstar.com, FAX 0504 등)를 **info@sealstar.com / 02-2637-6200 / 02-2634-0482**로 통일 요청

---

## 6. 우선 공략 키워드 (e) — 18개 카테고리 기준 재정리

| # | 키워드 | 연결 페이지(전환 후) |
|---:|---|---|
| 1 | 굴삭기 유압실린더 씰키트 | products/hp.html (신설) |
| 2 | 반도체 진공 오링 | products/oring.html |
| 3 | 퍼플러오링 FFKM 국내공급 | products/perfluoro.html |
| 4 | 우레탄씰 주문제작 | products/machined.html |
| 5 | 스프링 에너자이즈드 씰 국산 제작 | products/spring.html |
| 6 | PEEK 백업링 주문제작 | products/peek.html |
| 7 | 오일씰 규격표 | products/oil.html |
| 8 | 베어링아이솔레이터 BPS | products/isolator.html |
| 9 | ACM 베어링 씰 | products/acm.html |
| 10 | 산업용 자석필터 절삭유 철분제거 | products/magnetic.html |
| 11 | 메카니컬씰 제작 | products/mechanical.html |
| 12 | Kalrez 대체 국내 공급 | products/perfluoro.html#kalrez |
| 13 | 비규격 오링 제작 | products/vulc.html |
| 14 | 우주항공 씰링 부품 | markets.html (우주항공) |
| 15 | oil seal manufacturer korea | 영문 페이지·komachine |

기존 개선안의 7개 카테고리(oilseal/hpseal/basicseal 등) 기준 키워드맵을 **신규 사이트의 18개 실제 카테고리 id**에 맞춰 재매핑했습니다. §4 1순위(서브페이지 분리) 완료 전까지는 모두 `products.html#id`로 연결.

---

## 7. 단계별 로드맵

### 1주차 — 즉시 적용 (코드 몇 줄 수준)
- §0-1 도메인 전환 방식 확정
- robots.txt / sitemap.xml 신규 생성(§2-2)
- og:*, canonical 6개 페이지 공통 삽입(§2-1)
- favicon 추가(§2-3)
- Organization/WebSite JSON-LD 전역 삽입(§3-1, §3-2)
- GSC·네이버 서치어드바이저 등록(§5)

### 1개월차 — 구조 개선 (JS→정적 전환의 핵심 구간)
- §4 1순위: 제품 18종 정적 서브페이지 분리(또는 빌드 스크립트로 자동 생성)
- 각 서브페이지에 Product JSON-LD(§3-3) + BreadcrumbList(§3-4) 삽입
- 이미지 `background-image` → `<img alt="">` 전환(§4 3순위)
- 정의 콘텐츠 5종(§4-1) about.html에 정적 삽입
- FAQ 화면 노출 + FAQPage JSON-LD(§3-5)
- 301 리다이렉트 맵 적용(§0-2)

### 3개월차 — 확장
- markets.html 산업별 서브페이지 분리, news.html 게시물 개별 URL화(§4 4순위)
- 블로그 재가동, 기존 게시물 내부링크
- komachine/tradekorea 영문 등록 URL 갱신(§5)
- GBP·네이버 스마트플레이스 등록, geo 좌표 실측 반영(§3-1)
- GEO KPI 측정 시작(§8-6)

---

## 8. GEO(생성형 AI 인용) 강화 — 코드 전권을 활용한 확장 조치

기존 개선안의 (G) 섹션 방법론(청킹·원자적 답변·정의 소유·통계화·SSR)은 신규 사이트에도 동일하게 유효하며, 이미 §4에서 구체 적용안을 제시했습니다. 여기서는 **Sixshop 임차 환경에선 불가능했지만 코드 전권이 있는 신규 사이트에서는 가능한 항목**만 추가로 정리합니다.

- **llms.txt 정식 지원 가능**: 기존 개선안은 "Sixshop 임대형에선 루트 파일 제어 불가"로 대안(본문 노출)만 제시했지만, 신규 사이트는 저장소 루트에 `llms.txt`를 직접 배치할 수 있습니다. 회사 1줄 요약 + 핵심 제품 18종 + 주요 페이지 링크를 마크다운으로 작성해 `/llms.txt`에 배포 권장(단, 표준화가 진행 중인 실험적 파일이므로 '검증된 전술'이 아닌 '저비용 실험적 보완'으로 취급 — 기존 개선안 §부록의 신중한 태도 유지).
- **robots.txt AI 크롤러 Allow를 코드로 직접 관리**: §2-2에 이미 GPTBot·ClaudeBot·Google-Extended Allow를 반영. Sixshop 자동생성 robots.txt와 달리 신규 사이트는 직접 파일을 관리하므로 크롤러 정책 변경 시 즉시 대응 가능.
- **SSR 문제를 근본적으로 해결 가능**: 기존 개선안 (G-5)는 "SSR 여부 확인 필요"에 그쳤지만, 신규 사이트는 §4 1순위처럼 실제로 정적 HTML을 생성해 SSR 문제를 코드 수준에서 해결할 수 있습니다. 이는 Sixshop 사이트로는 원천적으로 불가능했던 조치입니다.

### 8-1. 진단형 인용 수리 원칙 유지
기존 개선안 부록의 "AgentGEO(진단형 수리)" 원칙에 따라, §4의 18개 제품을 한 번에 재작성하지 말고 **§9의 GEO KPI 측정에서 인용되지 않는 카테고리를 먼저 찾아 그 페이지만 표적 수리**하는 순서를 권장합니다.

### 8-2. 헤딩 위계(거시 구조) 최우선
부록 GEO-16/GEO-SFE 연구 근거(기존 개선안 부-2·부-3)에 따르면 헤딩 위계가 청킹·원자적 답변보다 기여도가 큽니다. 신규 사이트는 §4 1순위 정적화 시 H1(제품 페이지)→H2(제품명)→H3(작동원리/특징/적용분야) 3단계 위계를 그대로 유지하는 것이 최우선입니다(이미 `js/products.js` 안에 이 구조가 설계되어 있으므로, 정적화 과정에서 위계를 훼손하지 않는 것이 핵심).

### 8-3. GEO KPI 측정 (기존 개선안과 동일 방법론)
월 1회, ChatGPT/Perplexity/Gemini/Claude 분리 측정. 측정 질문 예시: "오일씰이란?", "굴삭기 유압실린더 씰 제조사 추천", "씰스타는 어떤 회사?", "퍼플러오링 국내 공급사". §4 1순위(정적 서브페이지 분리) 적용 전/후 베이스라인을 반드시 나눠 기록 — 절대 수치 목표는 세우지 않고 추세만 추적.

---

## 9. 요약 — 신규 사이트가 기존 사이트 대비 유리한 점 / 새로 생긴 위험

| 구분 | 기존 Sixshop 사이트 | 신규 코드 사이트 |
|---|---|---|
| 메타 title/description 중복 | 문제였음(공용 템플릿) | ✅ 이미 해결(6개 페이지 고유) |
| 플랫폼 제약(코드 삽입 불가 등) | Pro 등급·애드온 필요 | ✅ 전면 해제, 즉시 구현 가능 |
| JSON-LD/robots/sitemap | 플랫폼 자동 생성 의존 | 직접 생성 필요하지만 **완전한 제어권** 확보 |
| 제품 본문 텍스트 | 빈약(§원본 진단) | 텍스트 품질은 우수하나 **JS 안에 갇힘**(신규 위험) |
| 개별 제품 URL | 카테고리별 실제 URL 존재 | **해시 라우팅으로 개별 URL 부재**(신규 위험, §1-2) |
| 이미지 alt | 미확인 | **전무 확인**(background-image 구조, §1-2) |
| 도메인 연속성 | 해당 없음 | **전환 시 301/GSC 이전 필수**(§0, 신규 리스크) |

결론적으로 신규 사이트는 메타 위생과 콘텐츠 품질에서 출발선이 좋지만, **SPA 해시 라우팅으로 인한 개별 URL·SSR 부재**가 가장 시급히 고쳐야 할 구조적 리스크이며, 동시에 코드 전권 덕분에 Sixshop에서는 불가능했던 근본 해결(정적 서브페이지 분리, llms.txt, robots.txt 직접 관리)이 가능하다는 점이 가장 큰 차이입니다.
