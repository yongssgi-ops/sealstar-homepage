/* ============================================================
   SEALSTAR — 홍보센터 게시글 데이터
   새 글 추가: 아래 POSTS 배열 맨 위에 { } 항목을 추가하세요.
   type: 'exhibition'(전시회) | 'press'(언론보도) | 'notice'(공지)
   이미지: images/ 폴더에 넣고 img 경로 지정 (없으면 기본 그라디언트)
   source/sourceName: 원문 기사 링크와 매체명(있으면 상세 팝업에 표시)
   ============================================================ */
var POSTS = [
  {
    type:'notice', date:'2026-01-02', img:'images/web/company-exterior.jpg',
    placeKo:'', placeEn:'',
    titleKo:'씰스타 홈페이지 리뉴얼 및 홍보센터 신설',
    titleEn:'Sealstar Website Renewal & New News Center',
    bodyKo:'정밀 씰링 솔루션 전문기업 (주)씰스타가 홈페이지를 새롭게 단장했습니다.\n\n제품 정보를 유공압씰·오링·오일씰·가공씰·스프링에너자이즈씰&PEEK·ACM베어링·자석필터 등 카테고리별로 한눈에 볼 수 있도록 정리했으며, 건설기계부터 반도체·에너지(수소·LNG·원자력)·조선해양·우주항공·식·의약품에 이르는 적용분야 페이지를 새로 구성했습니다.\n\n또한 전시회 참가와 언론보도 소식을 지속적으로 전하는 홍보센터를 신설했습니다. 1982년 설립 이래 이어온 기술력·품질·납기·신용의 가치를 바탕으로, 앞으로도 고객의 충실한 사업 동반자가 되겠습니다.',
    bodyEn:'Sealstar, a precision sealing solutions specialist, has renewed its website.\n\nProduct information is now organized by category — hydraulic/pneumatic seals, O-rings, oil seals, machined seals, spring-energized seals & PEEK, ACM bearings and magnetic filters — alongside new market pages spanning construction, semiconductor, energy (hydrogen/LNG/nuclear), marine, aerospace and food & pharma.\n\nWe have also launched this News Center to share our exhibitions and media coverage. Guided by the values of technology, quality, delivery and trust since 1982, we remain a faithful partner to our customers.'
  },
  {
    type:'exhibition', date:'2026-05-19', img:'https://www.hellot.net/data/photos/20260522/art_17797764069431_4fbef8.jpg',
    placeKo:'창원 CECO', placeEn:'CECO, Changwon',
    source:'https://www.hellot.net/news/article.html?no=112775', sourceName:'헬로티',
    titleKo:'KIMEX 2026 참가 — 유공압·오링·수소용 씰링 솔루션 대거 선보여',
    titleEn:'Exhibited at KIMEX 2026 — Hydraulic, O-Ring & Hydrogen Sealing Solutions',
    bodyKo:'씰스타가 2026년 5월 19일부터 22일까지 창원컨벤션센터(CECO)에서 열린 2026 한국국제기계박람회(KIMEX 2026)에 참가해 스프링에너자이저씰·유공압씰·오링을 중심으로 한 씰링 솔루션을 대거 선보였습니다.\n\n유공압씰 시리즈는 피스톤씰·로드씰·버퍼씰·와이퍼씰 등 각 작동 조건에 최적화된 디자인과 규격으로 구성되며, 건설장비·산업용 기계·반도체 장비·로봇·선박 부품 등 광범위한 산업에 적용됩니다. 오링 제품군은 AED 인증을 보유하고 AS568·JIS·미터 규격을 충족하며, NBR·H-NBR·실리콘·EPDM·VITON·FFKM·테프론 등 폭넓은 재질로 사용 환경에 맞춰 맞춤 설계가 가능합니다.\n\n고하중·저마찰·내화학성이 요구되는 환경을 위한 ACM 베어링과 함께, 수소·액화수소 밸브·저장탱크·압축기·펌프·충전기·파이프라인용 씰링 솔루션도 소개했습니다. 씰스타 관계자는 "유공압씰부터 수소용 씰링까지 다양한 작동 조건과 사용 환경에 맞는 최적의 솔루션을 제공하는 것이 강점"이라며 "정밀화·세분화되는 산업 기술 트렌드에 맞춰 적용 영역을 지속적으로 넓혀 나가겠다"라고 밝혔습니다.',
    bodyEn:'Sealstar exhibited at the 2026 Korea International Machinery Expo (KIMEX 2026) at Changwon Convention Center (CECO) from May 19–22, 2026, presenting sealing solutions centered on spring-energized seals, hydraulic/pneumatic seals and O-rings.\n\nThe hydraulic/pneumatic line includes piston, rod, buffer and wiper seals optimized for each operating condition, serving construction, industrial machinery, semiconductor, robotics and marine sectors. Its AED-certified O-rings meet AS568, JIS and metric standards in materials such as NBR, H-NBR, silicone, EPDM, VITON, FFKM and PTFE.\n\nSealstar also showcased ACM bearings and hydrogen/liquid-hydrogen sealing solutions for valves, storage tanks, compressors, pumps, dispensers and pipelines. "Our strength is providing the optimal solution for every operating condition, from hydraulic seals to hydrogen sealing," a company official said.'
  },
  {
    type:'exhibition', date:'2025-05-20', img:'https://file.yeogie.com/img.Editor/202505/on5HPNSV6u.jpg',
    placeKo:'부산 벡스코', placeEn:'BEXCO, Busan',
    source:'https://yeogienews.com/today/274275', sourceName:'여기에뉴스',
    titleKo:'BUTECH 2025 참가 — 정밀 유공압씰·AED 오링 솔루션 전시',
    titleEn:'Exhibited at BUTECH 2025 — Precision Hydraulic Seals & AED O-Rings',
    bodyKo:'씰스타가 2025년 5월 20일부터 23일까지 부산 벡스코에서 열린 BUTECH 2025(부산국제기계대전)에 참가해 다양한 산업 분야에 대응 가능한 유공압 씰과 고성능 오링 제품을 선보였습니다.\n\n이번 전시에서는 실린더 내외부의 누유 방지와 내구성 확보를 위한 유공압 씰 시리즈가 집중 소개됐습니다. 피스톤씰·로드씰·버퍼씰·와이퍼씰 등 작동 조건에 최적화된 디자인으로 시스템의 내구성과 효율을 동시에 확보하며, 특히 와이퍼씰은 외부 이물질 유입을 차단해 유압 시스템의 수명을 좌우하는 핵심 부품으로 주목받았습니다.\n\nAED 오링은 AS568(미국)·JIS G/P/S/V(일본)·미터 규격·고객 맞춤 규격 등 다양한 국제 표준을 충족하며 고정 및 운동용 씰링에 폭넓게 적용됩니다. 씰스타 관계자는 "기술력·품질·납기·신용을 핵심 가치로 삼고 고객의 정밀 가공 및 장비 신뢰성 확보에 기여하는 제품을 제공하고 있다"라며 "BUTECH 2025를 통해 글로벌 고객사와의 신뢰를 더욱 확대하겠다"라고 밝혔습니다.',
    bodyEn:'Sealstar exhibited at BUTECH 2025 (Busan International Machinery Fair) at BEXCO from May 20–23, 2025, presenting hydraulic/pneumatic seals and high-performance O-rings for a wide range of industries.\n\nThe booth highlighted hydraulic seal series — piston, rod, buffer and wiper seals — engineered to prevent leakage and secure durability inside and outside cylinders. AED O-rings meeting AS568, JIS G/P/S/V, metric and custom standards were also featured.\n\n"With technology, quality, delivery and trust as our core values, we provide products that help customers secure precision machining and equipment reliability," a Sealstar official said, adding that the company aims to deepen trust with global customers.'
  },
  {
    type:'press', date:'2023-09-20', img:'https://cdn.gasnews.com/news/photo/202309/112043_83168_105.jpg',
    placeKo:'', placeEn:'',
    source:'https://www.gasnews.com/news/articleView.html?idxno=112043', sourceName:'가스신문',
    titleKo:'수소용 씰링 솔루션 본격 보급 — 탄소중립 시대 수소 기밀의 핵심',
    titleEn:'Full-Scale Rollout of Hydrogen Sealing Solutions',
    bodyKo:'오링 및 씰 전문 공급기업 (주)씰스타(대표 양희승)가 탄소중립 시대의 핵심 에너지로 평가되는 수소용 실링 솔루션 보급을 본격화했습니다.\n\n씰스타가 공급하는 수소용 씰은 수소 및 액화수소용 밸브·저장탱크·압축기·펌프·충전기·자동차·파이프라인에 적합한 제품으로, 국내 수소압축기 제작사에 납품되고 있습니다. 고객 요구에 맞춰 씰 형상과 재질을 설계하며, 다양한 수지·스프링 재질을 보유해 사용 조건에 따른 최적 재질을 선정합니다. 기체수소·액화수소는 기밀 유지가 매우 까다로운 만큼 한층 높은 품질 관리를 적용합니다.\n\n양희승 대표는 "현재 기체수소는 매우 고압으로 충전되기 때문에 수소라인의 기밀 확보가 매우 중요하다"라며 "씰스타의 특화된 수소용 씰이 수소산업계의 가스안전에 기여할 것으로 확신한다"라고 강조했습니다. 씰스타의 오링은 오일·가스 분야에 필요한 AED 인증을 보유하고, NBR·H-NBR·실리콘·EPDM·네오프렌·VITON·FFKM·폴리우레탄·테프론 등 다양한 재질로 –25℃에서 최대 230℃까지 대응합니다.',
    bodyEn:'Sealstar (CEO Hee-seung Yang), a specialist in O-rings and seals, has begun a full-scale rollout of hydrogen sealing solutions — a key technology for the carbon-neutral era.\n\nIts hydrogen seals suit valves, storage tanks, compressors, pumps, dispensers, vehicles and pipelines for hydrogen and liquid hydrogen, and are already supplied to domestic hydrogen-compressor makers. Seal geometry and material are designed to customer requirements, with a broad range of resin and spring materials.\n\n"Because gaseous hydrogen is charged at very high pressure, securing tightness in the hydrogen line is critical," said CEO Yang. "We are confident Sealstar\'s specialized hydrogen seals will contribute to gas safety in the hydrogen industry." The AED-certified O-rings cover –25°C to 230°C in materials including NBR, H-NBR, silicone, EPDM, neoprene, VITON, FFKM, polyurethane and PTFE.'
  },
  {
    type:'exhibition', date:'2023-09-13', img:'https://cdn.kr.aving.net/news/photo/202309/1783676_713487_528.jpg',
    placeKo:'일산 킨텍스', placeEn:'KINTEX, Ilsan',
    source:'https://kr.aving.net/news/articleView.html?idxno=1783676', sourceName:'에이빙(AVING)',
    titleKo:'H2 MEET 2023 참가 — 스프링 에너자이즈 씰로 수소 씰링 역량 입증',
    titleEn:'Exhibited at H2 MEET 2023 — Spring-Energized Seals for Hydrogen',
    bodyKo:'씰스타가 2023년 9월 13일부터 15일까지 일산 킨텍스 제1전시장에서 열린 국내 최대 수소산업 전문 전시회 H2 MEET 2023에 참가해 스프링 에너자이즈 씰(Spring Energized Seal)을 선보였습니다.\n\n스프링 에너자이즈 씰은 고압이나 초저온 환경처럼 우레탄으로 버티기 어려운 조건에서 사용되는 고성능 씰입니다. 폭넓은 온도 범위를 가지며 다양한 유체와 고속·고압 등 열악한 환경에서도 탁월한 씰링 성능을 발휘해, 액화수소와 같이 품질이 중요한 용도에 적합합니다.\n\n씰스타는 1982년 설립 이래 축적한 경험과 지식을 바탕으로 정밀·세분화되는 산업 흐름에 맞춰 수소 분야로 사업을 확장하고 있습니다. 또한 중장비·산업현장용 우레탄 씰과 휠·롤러를 규격 및 주문 사양으로 성형 가공해 공급하며, 콘크리트 펌프카·브레이커·천공장비 등에 사용되는 제품을 폭넓게 대응합니다.',
    bodyEn:'Sealstar exhibited at H2 MEET 2023, Korea\'s largest hydrogen-industry show, at KINTEX Hall 1 from September 13–15, 2023, presenting its Spring Energized Seal.\n\nThe spring-energized seal is a high-performance solution for conditions where polyurethane cannot cope — high pressure and cryogenic temperatures. With a wide temperature range and excellent sealing across diverse fluids and high-speed/high-pressure environments, it suits demanding uses such as liquid hydrogen.\n\nBuilding on know-how accumulated since 1982, Sealstar continues to expand into hydrogen while also supplying molded polyurethane seals, wheels and rollers for heavy equipment and jobsites — including parts for concrete pump trucks, breakers and drilling rigs.'
  },
  {
    type:'exhibition', date:'2023-05-16', img:'https://file.yeogie.com/img.Editor/202305/7yTGgSLTwj.jpg',
    placeKo:'부산 벡스코', placeEn:'BEXCO, Busan',
    source:'https://robotzine.co.kr/entry/265543', sourceName:'월간로봇기술',
    titleKo:'BUTECH 2023 참가 — 유공압씰·PEEK씰·수소씰·초저온씰 등 폭넓은 라인업 소개',
    titleEn:'Exhibited at BUTECH 2023 — Wide Seal & O-Ring Line-up',
    bodyKo:'씰스타가 2023년 5월 16일부터 19일까지 부산 벡스코에서 열린 제11회 부산국제기계대전(BUTECH 2023)에 참가해 여러 종류의 씰과 오링을 소개했습니다.\n\n이번 전시에서는 유공압씰, 펌프 밸브씰, PEEK씰, 수소씰, 초저온씰을 비롯해 진공챔버용 대형 오링과 바이톤·EPDM·실리콘·아플라스(Aflas) 오링 등 폭넓은 제품군을 전시했습니다. 이는 건설·산업기계부터 반도체 진공 공정, 수소·극저온 등 특수 환경까지 아우르는 씰스타의 대응 폭을 보여줍니다.\n\n씰스타 관계자는 "1982년 설립 이래 건설장비, 산업용 기계, 반도체 장비, 선박 부품 등에 우레탄·고무제품·오링·유공압 씰·테프론 제품을 공급해왔다"라며 "축적된 노하우와 전문성을 바탕으로 정밀·세분화되는 산업기술 추이에 맞춰 사업 영역을 확대하고 전문화해 나가겠다"라고 전했습니다. BUTECH 2023에는 28개국 453개 업체가 1,742부스 규모로 참가했습니다.',
    bodyEn:'Sealstar exhibited at the 11th Busan International Machinery Fair (BUTECH 2023) at BEXCO from May 16–19, 2023, presenting a broad range of seals and O-rings.\n\nThe line-up included hydraulic/pneumatic seals, pump & valve seals, PEEK seals, hydrogen seals and cryogenic seals, plus large vacuum-chamber O-rings and VITON, EPDM, silicone and Aflas O-rings — spanning construction and machinery through semiconductor vacuum processes and hydrogen/cryogenic environments.\n\n"Since 1982 we have supplied polyurethane, rubber, O-rings, hydraulic seals and PTFE products to construction, machinery, semiconductor and marine sectors," a Sealstar official said. BUTECH 2023 drew 453 companies from 28 countries across 1,742 booths.'
  },
  {
    type:'exhibition', date:'2022-08-31', img:'https://cdn.kr.aving.net/news/photo/202209/1771489_687832_535.jpg',
    placeKo:'일산 킨텍스', placeEn:'KINTEX, Ilsan',
    source:'https://kr.aving.net/news/articleView.html?idxno=1771489', sourceName:'에이빙(AVING)',
    titleKo:'H2 MEET 2022 참가 — 수소자동차씰·액화수소 탱크씰 선보여',
    titleEn:'Exhibited at H2 MEET 2022 — Hydrogen Vehicle & LH2 Tank Seals',
    bodyKo:'씰스타가 2022년 8월 31일부터 9월 3일까지 일산 킨텍스 제2전시장에서 열린 H2 MEET 2022에 참가해 수소자동차씰과 액화수소 탱크씰 등 수소 산업용 씰링 솔루션을 선보였습니다.\n\n씰스타는 다양한 작동조건과 분야에 맞는 여러 디자인·사이즈의 유공압씰을 제공하며, 이번 전시에서는 수소자동차씰·액화수소 탱크씰·각종 수소 관련 씰을 소개했습니다. 아울러 차량·유압펌프·모터 등 회전축 및 운동부에 장착되어 내부 오일 유출과 외부 오염물질 침투를 막는 일반용·유압모터용 오일씰도 함께 선보였습니다.\n\nH2 MEET(Mobility+Energy+Environment+Technology)는 수소 생산·저장·운송·활용 전 분야를 아우르는 국내 최대 규모의 수소산업 전문 전시회로, 씰스타는 축적된 씰링 기술을 바탕으로 수소 산업에 대한 대응을 지속 강화하고 있습니다.',
    bodyEn:'Sealstar exhibited at H2 MEET 2022 at KINTEX Hall 2 from August 31 to September 3, 2022, presenting hydrogen sealing solutions including hydrogen-vehicle seals and liquid-hydrogen tank seals.\n\nThe company offers hydraulic/pneumatic seals in diverse designs and sizes, and also showcased general-purpose and hydraulic-motor oil seals that prevent oil leakage and contaminant ingress on rotating shafts and moving parts.\n\nH2 MEET is Korea\'s largest hydrogen-industry exhibition, spanning production, storage, transport and utilization. Sealstar continues to strengthen its response to the hydrogen sector on the strength of its accumulated sealing technology.'
  },
  {
    type:'exhibition', date:'2022-05-23', img:'https://pimg.daara.co.kr/kidd/photo/2022/05/23/1653276880_34.jpg',
    placeKo:'일산 킨텍스', placeEn:'KINTEX, Ilsan',
    source:'https://kidd.co.kr/news/227183', sourceName:'산업일보',
    titleKo:'SIMTOS 2022 참가 — 산업용 기계용 메카니컬 씰·오링 전시',
    titleEn:'Exhibited at SIMTOS 2022 — Mechanical Seals & O-Rings',
    bodyKo:'씰스타가 2022년 5월 23일부터 27일까지 일산 킨텍스 제1~2전시장에서 열린 서울국제생산제조기술전(SIMTOS 2022)에 참가해 메카니컬 씰과 오링 등 산업용 기계에 활용되는 정밀 씰링 제품을 선보였습니다.\n\nSIMTOS는 29개국 800여 개 업체가 참가한 국내 최대 규모의 생산제조기술 전시회로, 씰스타는 유공압 실린더 제조·보수 및 각종 산업기계에 적용되는 씰링 제품을 소개하며 국내외 바이어들과 활발히 교류했습니다.\n\n씰스타는 유공압씰·오링·오일씰·가공씰·스프링에너자이즈씰 등 폭넓은 제품군을 바탕으로, 정밀화되는 제조 현장의 요구에 대응하는 씰링 파트너로 자리매김하고 있습니다.',
    bodyEn:'Sealstar exhibited at SIMTOS 2022 (Seoul International Production & Manufacturing Technology Show) at KINTEX Halls 1–2 from May 23–27, 2022, presenting precision sealing products such as mechanical seals and O-rings for industrial machinery.\n\nSIMTOS is Korea\'s largest manufacturing-technology exhibition, drawing some 800 companies from 29 countries. Sealstar introduced sealing products for hydraulic cylinder manufacturing and maintenance and connected with buyers at home and abroad.\n\nWith a broad portfolio of hydraulic seals, O-rings, oil seals, machined seals and spring-energized seals, Sealstar continues to serve as a sealing partner for increasingly precise manufacturing.'
  },
  {
    type:'exhibition', date:'2021-09-08', img:'https://www.hellot.net/data/photos/20210834/art_16298716668099_8e0135.jpg',
    placeKo:'서울 코엑스', placeEn:'COEX, Seoul',
    source:'https://www.hellot.net/news/article.html?no=61021', sourceName:'헬로티',
    titleKo:'SF+AW 2021 참가 — 에너자이즈씰·오링·유공압씰 전시',
    titleEn:'Exhibited at SF+AW 2021 — Energized Seals, O-Rings & Hydraulic Seals',
    bodyKo:'씰스타가 2021년 9월 8일부터 10일까지 서울 코엑스에서 열린 스마트공장·자동화산업전(SF+AW 2021)에 참가해 에너자이즈씰과 오링, 유·공압씰을 선보였습니다.\n\n전시된 에너자이즈씰(Spring Energized Seal)은 폭넓은 온도 범위를 가지며 다양한 유체와 고속·고압 등 열악한 환경에서도 탁월한 씰링을 구현합니다. 오링은 고정 및 운동용으로 폭넓게 사용되며, 씰스타는 해외 제조사와 연계해 고객이 원하는 규격·재질의 오링을 국내 최대 규모로 재고 운영하고 있습니다. 이를 바탕으로 반도체 설비, 제약 부품, 자동화 로봇, 산업기계 등 다양한 산업군에 오링을 공급합니다.\n\n유·공압씰 또한 다양한 작동조건과 분야에 맞는 여러 디자인과 사이즈로 국내 유수의 실린더 제조사와 유압 부품·설비 제조 업체에 공급되며, 국내 최대 규모의 재고 운영을 통해 신속한 납기 대응이 가능합니다.',
    bodyEn:'Sealstar exhibited at Smart Factory + Automation World 2021 (SF+AW 2021) at COEX, Seoul, from September 8–10, 2021, presenting spring-energized seals, O-rings and hydraulic/pneumatic seals.\n\nThe spring-energized seal delivers excellent sealing across a wide temperature range and demanding high-speed/high-pressure conditions. Sealstar operates one of Korea\'s largest imported-O-ring inventories through overseas partnerships, supplying semiconductor equipment, pharmaceutical parts, automation robots and industrial machinery.\n\nIts hydraulic/pneumatic seals, available in many designs and sizes, are supplied to leading cylinder makers and hydraulic component manufacturers, with fast delivery backed by large in-house stock.'
  },
  {
    type:'exhibition', date:'2019-10-23', img:'https://www.hellot.net/data/photos/images/000183/20191024202245304_C41G6463.jpg',
    placeKo:'일산 킨텍스', placeEn:'KINTEX, Ilsan',
    source:'https://www.hellot.net/news/article.html?no=48357', sourceName:'헬로티',
    titleKo:'2019 머신소프트(한국산업대전) 참가 — 유공압 씰·우레탄·오링 전시',
    titleEn:'Exhibited at MachineSoft 2019 — Hydraulic Seals, Urethane & O-Rings',
    bodyKo:'씰스타가 2019 머신소프트(MachineSoft, 제조IT서비스전)에 참가해 건설장비·산업용 기계·반도체 장비·선박 부품 등에 사용되는 유공압 씰과 우레탄, 오링 제품을 선보였습니다.\n\n이번 전시에서는 Type B Polyseal, UBR Rod Seal, UNP Piston Seal 등 유공압 씰과 오링·캡슐오링 등 다양한 제품을 소개했습니다. 씰스타 관계자는 "당사 제품은 유공압 실린더 제조 및 보수, 각종 건설장비, 석유화학 및 발전소 밸브류, 선박 등에 폭넓게 이용되고 있다"라고 설명했습니다.\n\n씰스타는 유공압 씰·펌프밸브 씰·인치규격 씰·오링·ACM 베어링·각종 고무 제품을 전문 제조·공급하는 기업으로, 다양한 산업 현장의 씰링 요구에 대응하고 있습니다. 머신소프트는 산업통상자원부가 주최하고 한국기계산업진흥회가 주관하는 한국산업대전의 제조·IT 서비스 전시회입니다.',
    bodyEn:'Sealstar exhibited at MachineSoft 2019 (part of Korea Industrial Exhibition), presenting hydraulic/pneumatic seals, urethane and O-ring products used in construction equipment, industrial machinery, semiconductor equipment and marine parts.\n\nThe display featured hydraulic seals such as Type B Polyseal, UBR Rod Seal and UNP Piston Seal, plus O-rings and encapsulated O-rings. "Our products are widely used in hydraulic cylinder manufacturing and repair, construction equipment, petrochemical and power-plant valves, and ships," a company official said.\n\nSealstar specializes in hydraulic/pneumatic seals, pump & valve seals, inch-size seals, O-rings, ACM bearings and rubber products.'
  },
  {
    type:'exhibition', date:'2019-04-16', img:'https://cdn.industrynews.co.kr/news/photo/201904/31243_24242_1338.jpg',
    placeKo:'일산 킨텍스', placeEn:'KINTEX, Ilsan',
    source:'https://www.industrynews.co.kr/news/articleView.html?idxno=31243', sourceName:'인더스트리뉴스',
    titleKo:'KOREA LAB 2019 참가 — 반도체 장비 씰·AMAT 장비 씰 선보여',
    titleEn:'Exhibited at KOREA LAB 2019 — Semiconductor & AMAT Equipment Seals',
    bodyKo:'씰스타가 2019년 4월 16일부터 19일까지 경기도 고양 킨텍스에서 열린 국제연구·실험 및 첨단분석장비전(KOREA LAB 2019)에 참가해 반도체 장비 씰과 AMAT 장비 씰, 에너자이즈 씰 등을 선보였습니다.\n\n반도체 공정 장비는 미세 입자 발생과 화학물질 누출이 수율에 직접적인 영향을 미치는 만큼, 씰스타는 고내화학성·저파티클 특성을 갖춘 반도체 장비용 씰과 AMAT(Applied Materials) 장비용 씰을 공급하며 정밀 공정을 지원하고 있습니다.\n\n씰스타는 1982년 설립 이래 축적한 노하우를 바탕으로 반도체·디스플레이 분야에서 신뢰받는 씰링 파트너로 자리매김하고 있습니다.',
    bodyEn:'Sealstar exhibited at KOREA LAB 2019 (International Analysis, Scientific, Diagnostic & Lab Technology exhibition) at KINTEX, Goyang, from April 16–19, 2019, presenting semiconductor equipment seals, AMAT equipment seals and energized seals.\n\nBecause particle generation and chemical leakage directly affect semiconductor yield, Sealstar supplies chemical-resistant, low-particle seals for semiconductor tools and Applied Materials (AMAT) equipment.\n\nBuilding on know-how accumulated since 1982, Sealstar has established itself as a trusted sealing partner in the semiconductor and display sectors.'
  },
  {
    type:'exhibition', date:'2019-04-03', img:'https://cdn.industrynews.co.kr/news/photo/201904/30358_23303_5620.jpg',
    placeKo:'서울 코엑스', placeEn:'COEX, Seoul',
    source:'https://www.industrynews.co.kr/news/articleView.html?idxno=30358', sourceName:'인더스트리뉴스',
    titleKo:'오토메이션월드(AIMEX) 2019 참가 — 반도체 장비 씰 전시',
    titleEn:'Exhibited at Automation World (AIMEX) 2019 — Semiconductor Seals',
    bodyKo:'씰스타가 2019년 서울 코엑스에서 열린 스마트공장·자동화산업전 오토메이션월드(AIMEX) 2019에 참가해 반도체 장비 씰과 AMAT 장비 씰, 에너자이즈 씰 등을 전시했습니다.\n\n씰스타는 반도체 공정 장비용 고내화학성 씰과 글로벌 반도체 장비 브랜드에 대응하는 맞춤 씰을 공급하며, 자동화·반도체 분야에서 정밀 씰링 역량을 선보였습니다.\n\n오토메이션월드는 국내 대표적인 자동화·스마트팩토리 전시회로, 씰스타는 다양한 자동화 설비에 적용되는 씰링 솔루션을 통해 산업 자동화 고객과의 접점을 넓혀가고 있습니다.',
    bodyEn:'Sealstar exhibited at Automation World (AIMEX) 2019, a smart-factory and industrial-automation show at COEX, Seoul, presenting semiconductor equipment seals, AMAT equipment seals and energized seals.\n\nThe company supplies chemical-resistant seals for semiconductor process tools and custom seals compatible with global semiconductor equipment brands, showcasing its precision sealing capability in the automation and semiconductor fields.\n\nAutomation World is one of Korea\'s leading automation and smart-factory exhibitions, and Sealstar continues to broaden its reach among industrial-automation customers.'
  },
  {
    type:'exhibition', date:'2018-10-23', img:'https://img.daara.kr/exhi/photo/KIMEX2018/2C21_1.png',
    placeKo:'창원 CECO', placeEn:'CECO, Changwon',
    source:'https://exhi.daara.co.kr/2018_kimex/bbs/sub31_view.html?idx=30311', sourceName:'다아라 온라인전시관',
    titleKo:'2018 한국국제기계박람회(KIMEX) 참가 — 유공압씰 전시 (부스 2C21)',
    titleEn:'Exhibited at KIMEX 2018 (Booth 2C21)',
    bodyKo:'씰스타가 2018년 10월 23일부터 26일까지 창원컨벤션센터(CECO)에서 열린 2018 한국국제기계박람회(KIMEX)에 부스 2C21로 참가해 유공압씰을 비롯한 씰링 제품을 전시했습니다.\n\n동남권 제조업이 집적된 창원에서 열린 이번 박람회를 통해 씰스타는 건설장비·산업기계·조선 분야 고객들과 만나 유공압 실린더용 씰, 오링 등 다양한 제품을 소개했습니다.\n\n씰스타는 1982년 설립 이래 축적한 노하우를 바탕으로 전국 주요 산업 현장에 씰링 솔루션을 공급하고 있습니다.',
    bodyEn:'Sealstar exhibited at the 2018 Korea International Machinery Expo (KIMEX) at Changwon Convention Center (CECO) from October 23–26, 2018, at booth 2C21, displaying hydraulic/pneumatic seals and other sealing products.\n\nIn Changwon — a hub of southeastern Korea\'s manufacturing — Sealstar met customers across construction, machinery and shipbuilding, introducing hydraulic cylinder seals, O-rings and more.\n\nBuilding on know-how since 1982, Sealstar supplies sealing solutions to major industrial sites nationwide.'
  },
  {
    type:'exhibition', date:'2018-01-31', img:'https://www.hellot.net/data/photos/images/000074/20180202181606451_G8WY6CGC.jpg',
    placeKo:'서울 코엑스', placeEn:'COEX, Seoul',
    source:'https://www.hellot.net/news/article.html?no=39473', sourceName:'헬로티',
    titleKo:'세미콘 코리아 2018 참가 — 유공압 씰·VITON 오링·ACM 베어링 소개',
    titleEn:'Exhibited at SEMICON Korea 2018 — Seals, VITON O-Rings & ACM Bearings',
    bodyKo:'씰스타가 2018년 1월 31일부터 열린 세계 최대 반도체 산업 전시회 세미콘 코리아 2018(코엑스)에 참가해 유공압 씰과 각종 수입설비·장비 씰, 바이톤(VITON) 오링 등 다양한 산업 분야에 유용한 씰링 제품을 선보였습니다.\n\n특히 씰스타의 ACM 베어링은 특수 고분자 폴리에스테르 수지와 정밀섬유·첨가제로 구성된 고기능 복합체 특수 소재로 제작되어, 고하중·저마찰계수·내화학성이 우수한 것이 특징입니다. 이 밖에 Aflas·FFKM 오링 등 반도체 공정의 까다로운 환경에 대응하는 제품군을 소개했습니다.\n\n세미콘 코리아는 4만 명 이상의 반도체 전문 엔지니어와 국내외 리더들이 모이는 글로벌 반도체 축제로, 씰스타는 반도체 장비 씰링 분야의 기술력을 지속적으로 알려오고 있습니다.',
    bodyEn:'Sealstar exhibited at SEMICON Korea 2018 — the world\'s largest semiconductor exhibition — at COEX from January 31, 2018, presenting hydraulic/pneumatic seals, seals for imported equipment, VITON O-rings and other solutions useful across industries.\n\nSealstar\'s ACM bearings, made from a high-performance composite of special polyester resin, precision fiber and additives, offer excellent load capacity, low friction and chemical resistance. The company also showed Aflas and FFKM O-rings for demanding semiconductor processes.\n\nSEMICON Korea gathers over 40,000 semiconductor engineers and industry leaders, and Sealstar continues to demonstrate its semiconductor sealing expertise there.'
  },
  {
    type:'exhibition', date:'2015-10-28', img:'https://img.daara.kr/exhi/photo/2015_komaf/4B-068_1.png',
    placeKo:'일산 킨텍스', placeEn:'KINTEX, Ilsan',
    source:'https://exhi.daara.co.kr/2015_komaf/bbs/sub31_view.html?idx=16763', sourceName:'다아라 온라인전시관',
    titleKo:'2015 한국기계전(KOMAF) 참가 — 유공압씰 전문 기업으로 참가 (부스 4B-068)',
    titleEn:'Exhibited at KOMAF 2015 (Booth 4B-068)',
    bodyKo:'씰스타가 2015년 10월 28일부터 31일까지 일산 킨텍스에서 열린 2015 한국기계전(KOMAF)에 부스 4B-068로 참가해 유공압씰을 중심으로 다양한 씰링 제품을 선보였습니다.\n\n한국기계전은 한국기계산업진흥회가 주최하는 국내 대표 기계 전시회로, 씰스타는 유공압씰 전문 기업으로서 산업용 기계에 활용되는 정밀 씰링 제품을 소개했습니다.\n\n씰스타는 1982년 설립 이래 오랜 기간 국내 주요 기계 전시회에 꾸준히 참가하며 축적된 기술력과 신뢰를 이어오고 있습니다.',
    bodyEn:'Sealstar exhibited at the 2015 Korea Machinery Fair (KOMAF) at KINTEX, Ilsan, from October 28–31, 2015, at booth 4B-068, presenting hydraulic/pneumatic seals and other sealing products.\n\nKOMAF, hosted by the Korea Association of Machinery Industry, is a leading domestic machinery exhibition. As a hydraulic/pneumatic seal specialist, Sealstar introduced precision sealing products for industrial machinery.\n\nSince 1982, Sealstar has consistently participated in major Korean machinery exhibitions, carrying forward its accumulated technology and trust.'
  }
];

/* ---------------- render logic ---------------- */
(function(){
  var TAG = {
    exhibition:{ko:'전시회',en:'Exhibition'},
    press:{ko:'언론보도',en:'Press'},
    notice:{ko:'공지',en:'Notice'}
  };
  var grid=document.getElementById('ngrid');
  if(!grid) return; // POSTS is still available globally on pages without the news board (e.g. homepage preview)
  var current='all';

  function esc(s){return (s||'').replace(/</g,'&lt;');}

  function draw(){
    var list=POSTS.filter(function(p){return current==='all'||p.type===current;});
    if(!list.length){ grid.innerHTML='<div class="empty"><span class="ko">게시글이 없습니다.</span><span class="en">No posts.</span></div>'; return; }
    grid.innerHTML=list.map(function(p){
      var idx=POSTS.indexOf(p);
      var bg=p.img?("background-image:url('"+p.img+"')"):"background:linear-gradient(135deg,var(--navy-2),var(--sky-d))";
      var place=(p.placeKo||p.placeEn)?('<span class="place"><span class="ko">'+esc(p.placeKo)+'</span><span class="en">'+esc(p.placeEn)+'</span></span>'):'<span></span>';
      return '<div class="ncard" onclick="NB.open('+idx+')">'
        +'<div class="nh" style="'+bg+'"></div>'
        +'<div class="nb"><span class="tag '+p.type+'"><span class="ko">'+TAG[p.type].ko+'</span><span class="en">'+TAG[p.type].en+'</span></span>'
        +'<h4><span class="ko">'+esc(p.titleKo)+'</span><span class="en">'+esc(p.titleEn)+'</span></h4>'
        +'<div class="ex"><span class="ko">'+esc(p.bodyKo.split('\n')[0])+'</span><span class="en">'+esc(p.bodyEn.split('\n')[0])+'</span></div>'
        +'<div class="date"><span>'+p.date+'</span>'+place+'</div></div></div>';
    }).join('');
  }

  window.NB={
    filter:function(f,btn){
      current=f;
      document.querySelectorAll('#filters button').forEach(function(b){b.classList.remove('on');});
      btn.classList.add('on');
      draw();
    },
    open:function(idx){
      var p=POSTS[idx];
      document.getElementById('m-img').style.cssText = p.img?("background-image:url('"+p.img+"')"):"background:linear-gradient(135deg,var(--navy-2),var(--sky-d))";
      var tag=document.getElementById('m-tag'); tag.className='tag '+p.type;
      tag.innerHTML='<span class="ko">'+TAG[p.type].ko+'</span><span class="en">'+TAG[p.type].en+'</span>';
      document.getElementById('m-title').innerHTML='<span class="ko">'+esc(p.titleKo)+'</span><span class="en">'+esc(p.titleEn)+'</span>';
      var place=(p.placeKo||p.placeEn)?(' · <span class="ko">'+esc(p.placeKo)+'</span><span class="en">'+esc(p.placeEn)+'</span>'):'';
      document.getElementById('m-meta').innerHTML=p.date+place;
      var body='<span class="ko">'+esc(p.bodyKo)+'</span><span class="en">'+esc(p.bodyEn)+'</span>';
      if(p.source){
        body+='<div class="src"><a href="'+p.source+'" target="_blank" rel="noopener">'
          +'<span class="ko">원문 기사 보기'+(p.sourceName?' — '+esc(p.sourceName):'')+' ↗</span>'
          +'<span class="en">Read the original'+(p.sourceName?' — '+esc(p.sourceName):'')+' ↗</span></a></div>';
      }
      document.getElementById('m-body').innerHTML=body;
      document.getElementById('modal').classList.add('show');
    }
  };
  draw();
})();
