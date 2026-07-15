/* SEALSTAR — Products catalog (flat sidebar layout)
   구조: ITEMS 배열(18개 개별 카테고리)을 좌측에서 바로 클릭 → 우측에 상세 표시.
   오링(oring) 항목만 상단에 서브탭(오링설계 / 재질 / 규격표)이 추가로 표시됩니다.
*/
(function(){
  function imgs(prefix, n){ var a=[]; for(var i=1;i<=n;i++) a.push('images/web/'+prefix+i+'.jpg'); return a; }
  function imgs2(p1,n1,p2,n2){ return imgs(p1,n1).concat(imgs(p2,n2)); }

  // ---------------------------------------------------------------
  // 오링 전용 서브탭 콘텐츠 (오링설계 / 재질 / 규격표)
  // ---------------------------------------------------------------
  var ORING_TABS = {
    design:{
      ko:'오링설계', en:'O-Ring Design',
      bodyKo:'오링은 사용 조건(정적/동적, 압력, 온도, 유체 종류)에 따라 그루브(홈) 설계가 달라집니다. 씰스타는 아래 기준을 바탕으로 고객 사용 환경에 맞는 그루브 설계를 지원합니다.',
      bodyEn:'O-ring groove design changes with the operating condition — static or dynamic, pressure, temperature and fluid type. Sealstar supports groove design tailored to each customer\'s environment based on the guidelines below.',
      items:[
        {ko:'정적 실링 (Static Sealing)', en:'Static Sealing',
          dko:'플랜지·커버 등 움직임이 없는 접합부. 압축률 약 15~30%를 권장하며, 면압을 균일하게 확보하는 것이 핵심입니다.',
          den:'Flanges, covers and other fixed joints. A compression ratio of roughly 15–30% is recommended, with even contact pressure across the seal.'},
        {ko:'동적 실링 (Dynamic Sealing)', en:'Dynamic Sealing',
          dko:'로드·피스톤 등 왕복·회전 운동부. 압축률 약 10~20%로 낮추고, 마찰과 마모를 줄이기 위한 홈 폭 여유가 필요합니다.',
          den:'Rods, pistons and other reciprocating or rotating parts. Use a lower compression ratio (roughly 10–20%) with extra groove width to reduce friction and wear.'},
        {ko:'백업링 적용 (Back-up Ring)', en:'Back-up Rings',
          dko:'고압 조건에서는 오링이 틈새로 밀려나오는 압출(Extrusion)을 방지하기 위해 백업링을 함께 적용합니다. 편측 고압에는 1개, 양측 고압에는 2개를 사용합니다.',
          den:'Under high pressure, a back-up ring prevents O-ring extrusion into the clearance gap — one ring for single-direction pressure, two for bidirectional pressure.'},
        {ko:'그루브 치수 산출', en:'Groove Dimensioning',
          dko:'그루브 폭(G)·깊이(G1)·모따기(C)·표면조도(S) 등은 오링의 선경(CS)·내경(ID)과 목표 압축률을 기준으로 산출합니다. 정확한 그루브 도면은 문의 시 무상으로 제공해 드립니다.',
          den:'Groove width (G), depth (G1), chamfer (C) and surface finish (S) are calculated from the O-ring\'s cross-section (CS), inner diameter (ID) and target compression ratio. Contact us for a free groove drawing.'},
        {ko:'틈새 간격(Gap)과 압출', en:'Gap Width & Extrusion',
          dko:'상대 부품 사이 틈새가 넓을수록, 압력이 높을수록, 소재 경도가 낮을수록 오링이 틈으로 밀려나가는 압출 위험이 커집니다. 틈새가 크거나 고압인 경우 백업링 적용을 권장합니다.',
          den:'Extrusion risk rises with a wider clearance gap, higher pressure and softer material hardness. We recommend a back-up ring wherever the gap is large or pressure is high.'},
        {ko:'설치 시 유의사항', en:'Installation Guidelines'
          ,dko:'조립 전 이물질을 완전히 제거하고, 모든 리드인 모따기를 적용하며, 나사산·키홈 등 날카로운 구간은 슬리브로 보호해 오링이 손상 없이 장착되도록 합니다. 설치 중 오링을 비틀거나 굴리지 않는 것도 중요합니다.',
          den:'Before assembly, remove all debris, provide lead-in chamfers everywhere, and protect sharp features such as threads or keyways with an installation sleeve so the O-ring goes in undamaged. It is equally important not to twist or roll the O-ring during installation.'}
      ]
    },
    material:{
      ko:'재질', en:'Materials',
      bodyKo:'씰스타는 NBR·H-NBR·EPDM·VITON·실리콘·네오프렌·폴리우레탄·FFKM·테프론 등 다양한 재질의 오링을 취급하며, 사용 온도·유체·화학 조건에 맞는 최적 재질을 선정해 드립니다. 아래 온도범위는 일반적인 참고값이며, 정확한 사양은 문의 바랍니다.',
      bodyEn:'Sealstar supplies O-rings in NBR, H-NBR, EPDM, VITON, silicone, neoprene, polyurethane, FFKM and PTFE, and helps select the optimal material for your temperature, fluid and chemical conditions. The temperature ranges below are general reference values — please contact us for exact specifications.',
      rows:[
        {mat:'NBR (니트릴고무)', ko:'내유성·내마모성이 우수한 범용 소재. 유압·공압 라인에 가장 많이 사용됩니다.', en:'General-purpose material with excellent oil and abrasion resistance — the most common choice for hydraulic/pneumatic lines.', temp:'-30 ~ 100℃'},
        {mat:'H-NBR (수소첨가 니트릴)', ko:'NBR 대비 내열성·내오존성·내마모성이 강화된 소재입니다.', en:'An upgrade over NBR with improved heat, ozone and abrasion resistance.', temp:'-30 ~ 150℃'},
        {mat:'EPDM', ko:'내수성·내스팀성·내후성이 우수해 브레이크액, 스팀, 옥외 환경에 적합합니다.', en:'Excellent water, steam and weather resistance — suited to brake fluid, steam and outdoor exposure.', temp:'-45 ~ 150℃'},
        {mat:'VITON® / FKM', ko:'내열성·내화학성이 뛰어난 범용 고성능 소재로, 오일·연료·고온 환경에 널리 사용됩니다.', en:'A high-performance material with strong heat and chemical resistance — widely used for oil, fuel and high-temperature service.', temp:'-20 ~ 230℃'},
        {mat:'실리콘 (VMQ)', ko:'식품·의약품 등급 대응이 가능하며 내열성·내한성이 우수합니다.', en:'Food/pharma-grade capable, with excellent heat and cold resistance.', temp:'-55 ~ 200℃'},
        {mat:'네오프렌 (CR)', ko:'내후성·내오존성이 우수해 옥외 및 일반 산업용에 적합합니다.', en:'Good weather and ozone resistance — suited to outdoor and general industrial use.', temp:'-40 ~ 120℃'},
        {mat:'폴리우레탄 (PU)', ko:'내마모성·내압성이 뛰어나 고압 실린더용 씰에 주로 사용됩니다.', en:'Outstanding abrasion and pressure resistance — mainly used in high-pressure cylinder seals.', temp:'-30 ~ 80℃'},
        {mat:'FFKM (퍼플루오로)', ko:'거의 모든 화학물질에 대응하는 최고 수준의 내화학성을 갖춰 반도체·극한 환경에 사용됩니다.', en:'The highest level of chemical resistance, compatible with nearly all chemicals — used in semiconductor and extreme environments.', temp:'-20 ~ 330℃'},
        {mat:'테프론 (PTFE)', ko:'마찰계수가 가장 낮고 내화학성이 뛰어난 고체형 오링 소재입니다.', en:'The lowest friction coefficient and outstanding chemical resistance among solid O-ring materials.', temp:'-180 ~ 260℃'}
      ]
    },
    spec:{
      ko:'규격표', en:'Spec Table',
      bodyKo:'오링 규격은 내경(ID)과 선경(CS)의 조합으로 결정됩니다. 씰스타는 아래 국제 표준과 고객 맞춤 규격을 모두 지원하며, 공차가 포함된 전체 규격표(PDF)는 문의 시 제공해 드립니다.',
      bodyEn:'O-ring size is defined by the inner diameter (ID) and cross-section (CS). Sealstar supports the international standards below as well as custom sizes — the full dimension table with tolerances (PDF) is available on request.',
      items:[
        {ko:'AS568 (American Standard)', en:'AS568 (American Standard)', dko:'미국표준협회(AS568) 규격 — #001~#425 등 표준 사이즈를 재고로 운영합니다.', den:'U.S. AS568 standard sizes (#001–#425 and more) carried in stock.'},
        {ko:'JIS B 2401 (일본공업규격)', en:'JIS B 2401 (Japanese Standard)', dko:'G(고정용)·P(피스톤용)·S(로드용)·V(진공용) 시리즈를 모두 지원합니다.', den:'Covers the G (static), P (piston), S (rod) and V (vacuum) series.'},
        {ko:'미터 규격 (Metric / ISO 3601)', en:'Metric (ISO 3601)', dko:'mm 단위의 국제 미터 규격에 대응합니다.', den:'Supports millimeter-based international metric sizing.'},
        {ko:'고객 맞춤 규격', en:'Custom Sizes', dko:'표준 규격에 없는 비표준 ID·CS 조합, 대구경 연결오링 등 맞춤 제작이 가능합니다.', den:'Custom-made for non-catalog ID/CS combinations, large-diameter joined O-rings and more.'}
      ]
    }
  };

  // ---------------------------------------------------------------
  // 퍼플러오링 전용 서브탭 콘텐츠 (퍼플러(Evolast) / Kalrez(Dupont))
  // ---------------------------------------------------------------
  var PERFLUORO_TABS = {
    perlast:{
      ko:'퍼플러 (Evolast)', en:'Perfluoro (Evolast)',
      bodyKo:'씰스타의 퍼플러오링은 이탈리아 MCM社의 FFKM 브랜드 evolast®를 주축으로 공급합니다. FFKM(퍼플루오로 엘라스토머)은 일반 FKM보다 불소 함량이 높아 최고 약 350℃까지 견디는 내열성과 거의 모든 화학물질에 대응하는 내화학성을 동시에 갖췄습니다. evolast®는 PTFE 수준의 내화학성과 FKM 특유의 탄성·유연성을 함께 지녔으며, R&D부터 배합·성형·생산까지 자체적으로 관리해 일관된 품질을 보장합니다.',
      bodyEn:'Sealstar\'s perfluoro O-rings are supplied mainly under evolast®, the FFKM brand of Italy\'s MCM. FFKM (perfluoroelastomer) carries a higher fluorine content than standard FKM, giving it heat resistance up to roughly 350°C alongside near-universal chemical compatibility. evolast® combines PTFE-level chemical resistance with the flexibility and elasticity of a regular FKM, and MCM controls the full value chain — from R&D and compounding to moulding and production — for consistent quality.',
      grades:[
        {g:'PB694', d:'Chemical resistance, general purpose', c:'White', h:'60', t:'-20℃ ~ +270℃'},
        {g:'PB794', d:'Chemical resistance, FDA / 3A / USP Class VI', c:'White', h:'70', t:'-20℃ ~ +270℃'},
        {g:'PB795', d:'High temperature, chemical resistance', c:'White', h:'70', t:'-15℃ ~ +300℃'},
        {g:'PB7LT', d:'Excellent low temperature, chemical resistance', c:'White', h:'70', t:'-40℃ ~ +250℃'},
        {g:'PB7SC', d:'High temperature, high purity — plasma / semiconductor', c:'White', h:'75', t:'-20℃ ~ +300℃'},
        {g:'PB894', d:'Standard applications, chemical resistance', c:'White', h:'80', t:'-20℃ ~ +270℃'},
        {g:'PB895', d:'High temperature, chemical resistance', c:'White', h:'80', t:'-15℃ ~ +300℃'},
        {g:'PB8HC', d:'High temperature — hot water, steam, amine', c:'White', h:'80', t:'-20℃ ~ +260℃'},
        {g:'PN694', d:'Standard applications, chemical resistance', c:'Black', h:'60', t:'-25℃ ~ +270℃'}
      ],
      appsKo:'에너지·오일&가스·석유화학, 반도체, 화학공정 산업, 식품·음료 산업',
      appsEn:'Energy, Oil & Gas and Petrochemical; Semiconductor; Chemical process industry; Food and Beverage'
    },
    kalrez:{
      ko:'Kalrez (Dupont)', en:'Kalrez (DuPont)',
      bodyKo:'듀폰(DuPont) Kalrez는 반도체 공정별 화학·플라즈마 환경에 최적화된 등급을 제공합니다. 아래는 공정 구분별 추천 제품군을 정리한 표입니다.',
      bodyEn:'DuPont Kalrez offers grades optimized for the chemical and plasma environment of each semiconductor process step. The table below summarizes recommended grades by process group.',
      rows:[
        {grp:'Plasma', proc:'PECVD / ALD', temp:'25~200℃', env:'TMS, DEMS, TEOS, SiH4, C3H8, NH3, SiF4, O2, N2O, NF3', rec:'9100, 9500', app:'Door/Gate/Pendulum valve seals, Chamber lid, Exhaust valve, Gas inlet·outlet·mixing block, Window seals, Center rings, Wafer/FPD carrier'},
        {grp:'Plasma', proc:'HDP-CVD', temp:'25~200℃', env:'TEOS, SiH4, NH3, SiF4, O2, C2F6, N2O, NF3, CF4', rec:'9100, 9500', app:''},
        {grp:'Plasma', proc:'SACVD', temp:'25~250℃', env:'TEOS, TeP, TEBO, O3, NF3', rec:'9500, 8002', app:''},
        {grp:'Plasma', proc:'Ash / Strip', temp:'25~250℃', env:'O2, CF4, CHF3, NH3, H2O Vapor, Forming Gas', rec:'9300, 9500', app:''},
        {grp:'Plasma', proc:'Dielectric(Oxide) Etch', temp:'25~200℃', env:'CF4, C3F8, CHF3, SF6, O2, H2', rec:'9300, 9500', app:''},
        {grp:'Plasma', proc:'Conductor(Poly/Metal) Etch', temp:'25~200℃', env:'CF4, CHF3, HBr, BCl3, CCl4, Cl2', rec:'9300, 9500', app:''},
        {grp:'Thermal', proc:'Metal CVD / ALD / LPCVD', temp:'25~300℃', env:'Organic precursors, WF6, TiCl4, SiH4, HF, F2, Cl2, ClF3, NF3, H2O Vapor, O2, O3', rec:'8900, 9100', app:'Quartz chamber seal, Fittings, Center ring, Plenum seals'},
        {grp:'Thermal', proc:'Oxidation / Diffusion', temp:'150~300℃', env:'N2, O2, H2O, HCl, Cl2', rec:'8900, 8475', app:''},
        {grp:'Thermal', proc:'Lamp Anneal / RTP', temp:'150~300℃', env:'적외선(IR) 흡수 저항 요구', rec:'8475', app:''},
        {grp:'Wet', proc:'Wafer Prep', temp:'25~125℃', env:'UPDI, Piranha, SC-1, SC-2, O3, HF(49%)', rec:'6375UP', app:'Door/lid seals, Drain seals, Chemical container seals, Fittings, Filter/connector seals, Flow meters'},
        {grp:'Wet', proc:'Etching', temp:'25~180℃', env:'HNO3, HF, H2O, H3PO4', rec:'6375UP, 1050LF', app:''},
        {grp:'Wet', proc:'Photolithography', temp:'25~125℃', env:'H2SO4 + Oxidant, Organic Acids, NMP', rec:'6375UP, 1050LF', app:''},
        {grp:'Wet', proc:'Stripping', temp:'25~125℃', env:'NMP/Alkanolamine, Hydroxylamine', rec:'6375UP, 1050LF', app:''},
        {grp:'Wet', proc:'Copper Plating', temp:'25~100℃', env:'CuSO4 Solution, H2SO4, H2O2', rec:'6375UP, 1050LF', app:''}
      ],
      noteKo:'9100 — 가혹한 플라즈마 환경에서 낮은 침식률과 초저파티클 특성 / 9500 — 오존·암모니아·수증기·플라즈마 라디칼에 대한 우수한 저항성 / 9300 — 이온(물리적)과 라디칼(화학적)이 혼재된 플라즈마 공정용 / 8900 — 금속 CVD·ALD·LPCVD·산화·확산 공정 권장 제품 / 8475 — 램프 어닐·RTP 공정 권장 제품 / 6375UP — 전체 습식 공정용 범용 제품',
      noteEn:'9100 — low erosion rate & ultra-low particle generation in harsh plasma; 9500 — excellent resistance to ozone, ammonia, water vapor & plasma radicals; 9300 — for plasma combining ionic and radical species; 8900 — recommended for metal CVD/ALD/LPCVD, oxidation & diffusion; 8475 — recommended for lamp anneal & RTP; 6375UP — general-purpose grade for all wet process applications.'
    }
  };

  // ---------------------------------------------------------------
  // 전체 제품 카테고리 (좌측에서 바로 선택하는 평면 목록, 18종)
  // ---------------------------------------------------------------
  var ITEMS = [
    { id:'oring', ko:'오링', en:'O-Ring', imgs:imgs('oring',9), special:'oring',
      dko:'가장 널리 사용되는 기본 밀봉 부품으로, 그루브(홈)에 장착되어 두 부품 사이의 정적·동적 누출을 차단합니다. 다양한 재질과 AS568·JIS·미터 규격을 갖춰 고정 및 운동용으로 폭넓게 사용됩니다.',
      den:'The most widely used sealing element, fitted into a groove to block static and dynamic leakage between two parts. Available in a wide range of materials and AS568/JIS/metric sizes for both static and dynamic use.',
      mat:['NBR','H-NBR','EPDM','VITON','FFKM','실리콘','테프론'],
      principleKo:'원형 단면(코드)을 링 형태로 성형한 뒤 그루브에 압축 장착하면, 오링 자체의 탄성 복원력이 접촉면을 지속적으로 눌러 유체·기체의 통로를 막습니다. 압축률(보통 15~30%)과 그루브 치수가 정확할수록 밀봉력과 수명이 안정적으로 유지됩니다.',
      principleEn:'A round-section elastomer cord is molded into a ring and compressed into a groove; the O-ring\'s own elastic recovery keeps constant contact pressure on the mating surfaces, blocking the flow path. Accurate groove dimensions and a proper compression ratio (typically 15–30%) are what keep sealing force — and service life — stable.',
      features:[
        {ko:'단순한 형상으로 설치가 쉽고 제작 비용이 낮음', en:'Simple shape — easy to install and cost-effective to produce'},
        {ko:'정적·동적 밀봉 모두 대응 (고정부/왕복·회전 운동부)', en:'Suited to both static seals and dynamic (reciprocating/rotary) applications'},
        {ko:'고압에서는 백업링 병용으로 압출 방지', en:'Combine with a back-up ring under high pressure to prevent extrusion'},
        {ko:'국제표준(AS568, JIS B2401, ISO 3601) 및 비표준 규격 모두 대응', en:'Covers AS568, JIS B2401, ISO 3601 and non-standard custom sizes'},
        {ko:'재질별 -60~330℃ 광범위한 사용 온도 대응', en:'Material selection spans roughly -60°C to 330°C'}
      ],
      apps:[{ko:'유공압 실린더',en:'Hydraulic/pneumatic cylinders'},{ko:'배관 플랜지',en:'Pipe flanges'},{ko:'밸브',en:'Valves'},{ko:'반도체 장비',en:'Semiconductor equipment'},{ko:'펌프',en:'Pumps'},{ko:'식·의약품 설비',en:'Food & pharma equipment'}] },

    { id:'capsule', ko:'테프론캡슐오링', en:'Teflon Capsule O-Ring', imgs:imgs('capsule',13),
      dko:'FEP/PFA(테프론)로 감싼 실리콘 또는 바이톤 코어 오링으로, 테프론의 우수한 내화학성과 코어 소재의 탄성을 동시에 확보합니다. 강산·강알칼리 등 부식성 화학 환경에 적합합니다.',
      den:'A silicone or Viton core encapsulated in FEP/PFA (Teflon), combining PTFE-level chemical resistance with the elasticity of the core. Ideal for strong acids, alkalis and other corrosive environments.',
      mat:['FEP/PFA','실리콘 코어','바이톤 코어'],
      principleKo:'탄성이 좋은 실리콘 또는 바이톤 코어를 FEP/PFA 필름으로 완전히 감싸 성형합니다. 유체와 직접 접촉하는 부분은 화학적으로 거의 불활성인 테프론이 맡고, 코어는 그 안에서 압축·복원력을 제공해 일반 고무 오링만큼의 밀봉 탄성을 냅니다.',
      principleEn:'A resilient silicone or Viton core is fully jacketed in FEP/PFA film during molding. The FEP/PFA skin — chemically almost inert — is the only surface in contact with the process fluid, while the core inside supplies the compression and recovery force needed for rubber-like sealing elasticity.',
      features:[
        {ko:'테프론 표면으로 강산·강알칼리·용제에 강한 내화학성',en:'PTFE-family surface resists strong acids, alkalis and solvents'},
        {ko:'코어의 탄성으로 일반 고무 오링과 유사한 압축 복원력',en:'Core elasticity gives compression recovery similar to a solid rubber O-ring'},
        {ko:'유체 오염(고무 성분 용출) 우려가 적어 고순도 공정에 유리',en:'Low risk of media contamination from the elastomer — suited to high-purity processes'},
        {ko:'기존 오링 그루브에 규격 호환 장착 가능',en:'Drop-in compatible with standard O-ring grooves'}
      ],
      apps:[{ko:'화학 배관/밸브',en:'Chemical piping & valves'},{ko:'반도체 습식 공정',en:'Semiconductor wet process'},{ko:'제약·식품 설비',en:'Pharma & food equipment'},{ko:'열교환기',en:'Heat exchangers'}] },

    { id:'perfluoro', ko:'퍼플러오링', en:'Perfluoro O-Ring (FFKM)', imgs:imgs('oring',4), special:'perfluoro',
      dko:'FFKM(퍼플루오로 엘라스토머) 소재의 오링으로, 최대 330℃에 이르는 내열성과 거의 모든 화학물질에 대응하는 내화학성을 갖춰 반도체 공정·초고온·초극한 환경에 사용됩니다.',
      den:'O-rings made from FFKM (perfluoroelastomer), offering heat resistance up to roughly 330°C and near-universal chemical compatibility — used in semiconductor processes and other extreme environments.',
      mat:['FFKM'],
      principleKo:'FFKM은 분자 구조 내 수소를 불소로 치환한 완전 불소화 엘라스토머로, PTFE에 가까운 내화학성을 유지하면서도 고무처럼 탄성 밀봉이 가능하도록 설계된 소재입니다. 이 탄성 덕분에 일반 오링과 동일한 방식(그루브 압축)으로 장착·사용할 수 있습니다.',
      principleEn:'FFKM is a fully fluorinated elastomer in which hydrogen atoms are replaced with fluorine, giving it PTFE-like chemical resistance while still retaining the elasticity needed for conventional groove-compression sealing — so it installs and functions just like a standard O-ring.',
      features:[
        {ko:'사실상 모든 화학물질에 대응하는 최고 수준의 내화학성',en:'Near-universal chemical resistance — the highest level among elastomers'},
        {ko:'-20~330℃ 초광범위 사용 온도',en:'Extremely wide service range, roughly -20°C to 330°C'},
        {ko:'저파티클·저아웃가싱 특성으로 반도체 공정에 적합',en:'Low particle generation and low outgassing — suited to semiconductor processes'},
        {ko:'일반 오링 대비 고가이나 교체 주기 연장으로 총소유비용 절감',en:'Higher unit cost than general elastomers, offset by a much longer replacement cycle'}
      ],
      apps:[{ko:'반도체 웨이퍼 공정 챔버',en:'Semiconductor wafer process chambers'},{ko:'고온 밸브',en:'High-temperature valves'},{ko:'강산/강산화 화학 배관',en:'Strong acid & oxidizer piping'},{ko:'우주항공',en:'Aerospace'}] },

    { id:'vulc', ko:'비규격연결오링', en:'Non-Standard Vulc\'d O-Ring', imgs:imgs('oring',5),
      dko:'표준 규격에 없는 대구경·특수 단면 오링을 코드(cord) 소재로 절단·가황 접합해 제작하는 맞춤형 오링입니다. 진공 챔버, 대형 플랜지 등 비표준 치수에 대응합니다.',
      den:'Custom O-rings made by cutting and vulcanizing cord stock to non-standard diameters or cross-sections — built for vacuum chambers, large flanges and other sizes outside the standard catalog.',
      mat:['NBR','VITON','실리콘','EPDM'],
      principleKo:'금형으로 찍어내는 일반 오링과 달리, 원하는 길이만큼 자른 코드(cord) 양끝을 열과 압력으로 가황 접합해 링을 완성합니다. 대형 금형이 필요 없어 대구경·비표준 단면에도 비교적 짧은 납기와 합리적 비용으로 대응할 수 있습니다.',
      principleEn:'Rather than being molded as a single ring, a length of cord is cut to size and its two ends are vulcanized together under heat and pressure. Because no large mold is required, this approach can produce oversized diameters and non-standard cross-sections without the cost and lead time of dedicated tooling.',
      features:[
        {ko:'700mm 이상 대구경도 금형 없이 제작 가능',en:'Diameters well over 700 mm are achievable without dedicated molds'},
        {ko:'비표준 ID·CS 조합, 타원형 등 특수 형상 대응',en:'Handles non-catalog ID/CS combinations and special shapes such as ovals'},
        {ko:'접합부 강도는 몰드 성형품보다 다소 낮아 정적 씰링에 주로 사용',en:'Joint strength is somewhat lower than a molded ring, so it is best suited to static sealing'},
        {ko:'현장 실측 치수 기반 맞춤 제작',en:'Custom-made to field-measured dimensions'}
      ],
      apps:[{ko:'대형 플랜지/맨홀',en:'Large flanges & manholes'},{ko:'진공 챔버',en:'Vacuum chambers'},{ko:'수처리 설비',en:'Water treatment equipment'},{ko:'단종 설비 보수용',en:'Repair parts for discontinued equipment'}] },

    { id:'quad', ko:'쿼드링', en:'Quad-Ring / X-Ring', imgs:imgs('xring',4),
      dko:'4-로브(X) 단면 구조로 접촉면이 두 곳으로 나뉘어 낮은 마찰과 우수한 밀봉 성능을 제공하며, 뒤틀림(스파이럴 실패)이 적어 회전·왕복 운동부에 적합합니다.',
      den:'A four-lobed (X) cross-section splits the sealing contact into two zones for low friction and superior sealing, with reduced spiral failure — well suited to rotary and reciprocating motion.',
      mat:['NBR','VITON','EPDM'],
      principleKo:'단면이 원형이 아닌 X(4-로브) 형태로, 그루브에 압축되면 접촉면이 안쪽과 바깥쪽 두 지점으로 나뉘어 생깁니다. 접촉 면적은 늘고 개별 접촉압은 분산되어, 동일 압축률의 오링보다 마찰과 마모가 줄어듭니다.',
      principleEn:'The cross-section is four-lobed (X-shaped) rather than round, so once compressed in the groove it forms two separate sealing contact lines instead of one. The larger, split contact area lowers unit contact pressure and reduces friction and wear compared with a round-section O-ring under the same compression.',
      features:[
        {ko:'2중 접촉으로 오링 대비 우수한 밀봉 신뢰성',en:'Dual sealing lines give higher sealing reliability than a single-contact O-ring'},
        {ko:'단면이 홈 안에서 뒤틀리는 스파이럴 실패 위험이 낮음',en:'Lower risk of spiral twist failure inside the groove'},
        {ko:'왕복 운동 시 오링보다 마찰·마모가 적음',en:'Less friction and wear than an O-ring in reciprocating service'},
        {ko:'분리 조립이 가능해 유지보수가 간편',en:'Split-line design allows easier installation and maintenance'}
      ],
      apps:[{ko:'유압 실린더 피스톤/로드',en:'Hydraulic cylinder pistons & rods'},{ko:'회전 축 밀봉',en:'Rotary shaft sealing'},{ko:'밸브 스템',en:'Valve stems'},{ko:'농기계·건설기계',en:'Agricultural & construction machinery'}] },

    { id:'edring', ko:'ED링', en:'ED-Ring / Back-up Ring', imgs:imgs('edring',4),
      dko:'플랜지·포트 실링용 ED-링과, 오링의 압출을 방지하는 백업링을 함께 공급합니다. 고압 환경에서 오링의 밀봉 성능과 수명을 보완합니다.',
      den:'ED-rings for flange/port sealing, plus back-up rings that prevent O-ring extrusion — complementing O-ring sealing performance and service life under high pressure.',
      mat:['NBR','PTFE','POM'],
      principleKo:'고압이 걸리면 오링은 그루브와 상대 부품 사이의 미세한 틈으로 밀려나오려는 압출(extrusion) 현상이 발생합니다. ED링·백업링은 오링 바로 옆(저압측)에 함께 장착되어 이 틈을 물리적으로 막아주는 역할을 하며, 압력 방향이 한쪽이면 1개, 양방향이면 2개를 사용합니다.',
      principleEn:'Under high pressure, an O-ring can be forced into the small clearance gap between the groove and the mating part — a failure mode called extrusion. An ED-ring or back-up ring is installed directly next to the O-ring, on the low-pressure side, to physically close off that gap; single-direction pressure needs one ring, bidirectional pressure needs two.',
      features:[
        {ko:'고압 조건에서 오링의 압출 파손을 방지',en:'Prevents O-ring extrusion failure under high pressure'},
        {ko:'PTFE·POM 등 경질 소재로 낮은 압축영구줄음률',en:'Rigid materials such as PTFE and POM keep compression set low'},
        {ko:'단방향/양방향 압력에 따라 1개 또는 2개 조합 사용',en:'Used singly or in pairs depending on whether pressure is uni- or bidirectional'},
        {ko:'기존 오링 규격에 맞춘 표준 및 맞춤 치수 대응',en:'Available in standard sizes matched to common O-ring dimensions, or custom-made'}
      ],
      apps:[{ko:'고압 유압 실린더',en:'High-pressure hydraulic cylinders'},{ko:'플랜지/포트 연결부',en:'Flange & port connections'},{ko:'유압 밸브',en:'Hydraulic valves'}] },

    { id:'bond', ko:'본드씰', en:'Bonded Seal', imgs:imgs('bond',5),
      dko:'금속 와셔에 고무를 가황 접착한 본드씰로, 나사·플러그 체결부의 유체 누출을 확실하게 차단합니다.',
      den:'A rubber element vulcanized onto a metal washer, providing reliable leak-tight sealing on threaded and plug connections.',
      mat:['STEEL + NBR','STAINLESS + FKM'],
      principleKo:'금속 와셔 표면에 고무를 가황 접착해 일체화한 씰로, 볼트·플러그를 체결하면 고무 부분이 압축되며 좌우 양면을 동시에 밀봉합니다. 금속이 축 방향 하중과 형태를 지지하고, 고무가 실제 밀봉을 담당하는 구조입니다.',
      principleEn:'A rubber element is vulcanized directly onto a metal washer to form a single-piece seal. When the bolt or plug is tightened, the rubber compresses and seals both faces simultaneously — the metal carries the axial clamp load and holds its shape, while the rubber does the actual sealing.',
      features:[
        {ko:'단일 부품으로 양면 동시 밀봉 (와셔+씰 기능 통합)',en:'A single part seals both faces — combines washer and seal in one'},
        {ko:'조립이 간단하고 재사용 시에도 안정적인 밀봉력 유지',en:'Simple to assemble; retains reliable sealing force even on reuse'},
        {ko:'금속 소재(STEEL/STAINLESS)와 고무 소재(NBR/FKM) 조합 선택 가능',en:'Metal (steel/stainless) and rubber (NBR/FKM) combinations selectable to spec'},
        {ko:'좁은 체결 공간에서도 안정적 밀봉',en:'Reliable sealing even in tight fastening spaces'}
      ],
      apps:[{ko:'나사·플러그 체결부',en:'Threaded fittings & plugs'},{ko:'유압 배관 접속부',en:'Hydraulic piping connections'},{ko:'엔진/기어박스 드레인 플러그',en:'Engine & gearbox drain plugs'}] },

    { id:'hp', ko:'유공압씰', en:'Hydraulic & Pneumatic Seal', imgs:imgs2('hyd',10,'pneu',11),
      dko:'로드씰·피스톤씰·와이퍼·버퍼링 등 유압 실린더용 씰과, 저마찰·경량 설계의 공압 실린더용 씰을 함께 공급합니다. 폴리우레탄·NBR·PTFE 등 소재로 다양한 압력·속도 조건에 대응합니다.',
      den:'Rod seals, piston seals, wipers and buffer rings for hydraulic cylinders, together with low-friction, lightweight seals for pneumatic cylinders. Polyurethane, NBR and PTFE materials cover a wide range of pressure and speed conditions.',
      mat:['PU','PTFE','NBR','POM','TPU'],
      principleKo:'씰은 조립 시 그루브에 예압(preload) 상태로 장착되어 무압력 상태에서도 1차 밀봉력을 갖습니다. 시스템 압력이 걸리면 유체가 씰 배면을 밀어 접촉면 압력이 함께 높아지는 자기 보강(self-energizing) 방식으로 작동해, 압력이 커질수록 밀봉력도 함께 커집니다. 로드씰은 로드를 따라 오일이 새는 것을, 피스톤씰은 피스톤과 실린더 보어 사이를, 와이퍼는 로드 표면의 이물질 유입을, 버퍼씰은 급격한 압력 피크를 각각 담당합니다.',
      principleEn:'Seals are installed with a preload in the groove so they provide baseline sealing even before system pressure is applied. Once pressure builds, it pushes against the back of the seal and increases contact pressure in proportion — a self-energizing action, so sealing force scales with system pressure. Within a cylinder, the rod seal stops oil escaping along the rod, the piston seal blocks flow between piston and bore, the wiper keeps contaminants from riding in on the rod surface, and the buffer seal absorbs pressure spikes ahead of the rod seal.',
      features:[
        {ko:'압력에 비례해 밀봉력이 커지는 자기 보강 구조',en:'Self-energizing design — sealing force increases with pressure'},
        {ko:'폴리우레탄(내마모)·PTFE(저마찰)·NBR(범용) 등 용도별 소재 선택',en:'Material choice by duty: polyurethane for wear resistance, PTFE for low friction, NBR for general purpose'},
        {ko:'로드씰·피스톤씰·와이퍼·버퍼씰·가이드링까지 실린더 풀세트 구성',en:'Full cylinder seal set — rod seal, piston seal, wiper, buffer seal, guide ring'},
        {ko:'공압용은 저마찰·저압(최대 16bar급) 설계로 경량·고속 대응',en:'Pneumatic-specific designs use low-friction, low-pressure profiles (up to roughly 16 bar) for light, high-speed operation'}
      ],
      apps:[{ko:'건설기계 유압 실린더',en:'Construction equipment hydraulic cylinders'},{ko:'공작기계',en:'Machine tools'},{ko:'프레스',en:'Presses'},{ko:'공압 자동화 실린더',en:'Pneumatic automation cylinders'},{ko:'선박용 유압 장비',en:'Marine hydraulic equipment'}] },

    { id:'spring', ko:'스프링에너자이드씰', en:'Spring-Energized Seal', imgs:imgs('spring',9),
      dko:'PTFE 씰 내부에 금속 스프링을 삽입하여 극저온·극고온, 고진공, 강한 화학 환경에서도 일정한 밀봉력을 유지합니다. 반도체·항공우주·수소 등 극한 조건에 적합합니다.',
      den:'A metal spring energizes a PTFE jacket to maintain constant sealing force from cryogenic to high temperatures, high vacuum and aggressive chemicals — ideal for semiconductor, aerospace and hydrogen applications.',
      mat:['PTFE','FEP','SUS 스프링'],
      principleKo:'PTFE·UHMWPE 등 저마찰·고내화학성 폴리머로 립(lip) 형태의 자켓을 가공하고, 그 내부에 금속 스프링(17-4 스테인리스, 코발트-니켈, 인코넬 등)을 삽입합니다. 스프링이 립을 상대 표면 쪽으로 지속적으로 밀어주기 때문에, 폴리머 자체의 탄성만으로는 대응하기 어려운 극저온·극고온·고진공 조건에서도 밀봉 접촉이 끊기지 않습니다. 캔틸레버형은 저하중·저속에, 헬리컬 코일형은 중~고하중과 회전용에 주로 사용합니다.',
      principleEn:'A lip-shaped jacket is machined from a low-friction, chemically resistant polymer such as PTFE or UHMWPE, with a metal spring (17-4 stainless, cobalt-nickel or Inconel, among others) fitted inside it. Because the spring continuously pushes the lip against the mating surface, sealing contact is maintained even under cryogenic cold, high heat or high vacuum — conditions where the polymer\'s own elasticity alone would not be enough. Cantilever springs suit low-load, low-speed duty; helical-wound coil springs handle medium-to-high loads and rotary motion.',
      features:[
        {ko:'스프링 하중으로 극한 조건에서도 일정한 접촉압 유지',en:'Spring load keeps contact pressure constant even in extreme conditions'},
        {ko:'PTFE 자켓의 낮은 마찰계수로 장시간 무급유 작동 가능',en:'The PTFE jacket\'s low friction allows extended dry-running operation'},
        {ko:'극저온(액체수소·질소·헬륨)부터 고온까지 대응',en:'Covers cryogenic media (liquid hydrogen, nitrogen, helium) through high temperatures'},
        {ko:'스프링 합금·자켓 재질을 유체·압력 조건에 맞춰 맞춤 선정',en:'Spring alloy and jacket material are matched to the specific fluid and pressure condition'},
        {ko:'축 이동·편심에도 유연하게 추종하는 동적 밀봉 성능',en:'Flexibly follows shaft movement and misalignment in dynamic service'}
      ],
      apps:[{ko:'반도체 스퍼터/진공 챔버',en:'Semiconductor sputter & vacuum chambers'},{ko:'액화수소·LNG 극저온 설비',en:'Liquid hydrogen & LNG cryogenic equipment'},{ko:'항공기 연료·유압 계통',en:'Aircraft fuel & hydraulic systems'},{ko:'로터리 스위블 조인트',en:'Rotary swivel joints'},{ko:'밸브 스템/시트',en:'Valve stems & seats'}] },

    { id:'lip', ko:'테프론립씰', en:'PTFE Lip Seal', imgs:['images/web/lipseal1.jpg'],
      dko:'PTFE 소재를 립(lip) 형상으로 가공한 씰로, 낮은 마찰계수와 우수한 내화학성·내마모성을 갖췄습니다. 저윤활·고속 회전축이나 화학 환경에 적합합니다.',
      den:'Seals machined from PTFE into a lip profile, offering a low friction coefficient with excellent chemical and wear resistance — suited to low-lubrication, high-speed shafts and chemical environments.',
      mat:['PTFE','PTFE+SUS 스프링'],
      principleKo:'PTFE를 얇은 립(lip) 형상으로 정밀 가공하고, 회전축과 접하는 면을 챔퍼(경사)나 스크레이퍼 형상으로 다듬어 밀봉력과 이물질 배출 성능을 동시에 확보합니다. PTFE 표면조도(마찰계수 약 0.06)가 매우 낮아 무급유 상태에서도 장시간 안정적으로 미끄러질 수 있으며, 필요 시 립 내부에 스프링을 넣어 접촉압을 보강합니다.',
      principleEn:'PTFE is precision-machined into a thin lip, with the shaft-contact edge finished as a chamfered or scraper profile to balance sealing performance with the ability to shed debris. PTFE\'s very low friction coefficient (around 0.06) lets the lip slide against the shaft reliably for long periods without lubrication; a spring can be added inside the lip where extra, consistent contact force is needed.',
      features:[
        {ko:'낮은 마찰계수(약 0.06)로 무급유·고속 회전축에 적합',en:'Very low friction coefficient (~0.06) suited to dry-running, high-speed shafts'},
        {ko:'-260~260℃ 초광범위 사용 온도',en:'Extremely wide temperature capability, roughly -260°C to 260°C'},
        {ko:'카본·유리섬유·MoS2·스테인리스 등 충전재로 내마모성·내크리프성 강화',en:'Carbon, glass fiber, MoS2 and stainless-steel fillers boost wear and creep resistance as needed'},
        {ko:'거의 모든 화학물질에 반응하지 않는 화학적 불활성',en:'Chemically inert to virtually all process fluids'},
        {ko:'챔퍼립·스크레이퍼립 등 형상 선택으로 세척성·밀봉성 조절',en:'Chamfered or scraper lip profiles can be selected to balance sealing and wash-down cleanability'}
      ],
      apps:[{ko:'고속 회전축 씰링',en:'High-speed rotating shaft sealing'},{ko:'화학 펌프',en:'Chemical pumps'},{ko:'식품 세척(워시다운) 설비',en:'Food wash-down equipment'},{ko:'무급유 베어링 하우징',en:'Dry-running bearing housings'}] },

    { id:'peek', ko:'피크(PEEK)', en:'PEEK', imgs:imgs('peek',7),
      dko:'고강도·내열·내화학성 엔지니어링 플라스틱 PEEK로 제작한 백업링·부싱·씰 부품입니다. 고온·고압 환경에서 뛰어난 기계적 안정성을 제공합니다.',
      den:'Back-up rings, bushings and seal parts machined from PEEK — a high-strength, heat- and chemical-resistant engineering plastic with excellent mechanical stability under heat and pressure.',
      mat:['PEEK','PEEK-GF','PEEK-CF'],
      principleKo:'PEEK(폴리에테르에테르케톤)는 선형 방향족 반결정성 고분자로, 녹는점(약 343℃) 부근까지도 기계적 물성을 크게 잃지 않는 것이 특징입니다. 봉재·튜브 형태로 압출·사출 성형된 소재를 정밀 절삭 가공해 씰 자켓, 백업링, 스러스트 와셔, 웨어링 등으로 제작하며, 유리섬유·카본섬유·PTFE·흑연 등을 배합해 강성·내마모성·저마찰성을 목적에 맞게 조정합니다.',
      principleEn:'PEEK (polyetheretherketone) is a linear aromatic semi-crystalline polymer that retains most of its mechanical strength almost up to its melting point (around 343°C). Rod and tube stock is precision-machined into seal jackets, back-up rings, thrust washers and wear rings, with glass fiber, carbon fiber, PTFE or graphite blended in to tune stiffness, wear resistance or friction for the specific application.',
      features:[
        {ko:'480°F(약 250℃) 이상에서도 강도·강성 유지',en:'Retains strength and stiffness above 480°F (~250°C)'},
        {ko:'산·염기·스팀·탄화수소 등에 대한 우수한 내화학성',en:'Strong resistance to acids, bases, steam and hydrocarbons'},
        {ko:'유리섬유(강성↑)·카본섬유(내하중↑)·PTFE(저마찰) 등 등급별 배합 선택',en:'Grade selection — glass fiber for stiffness, carbon fiber for load capacity, PTFE-filled for low friction'},
        {ko:'낮은 흡습률로 치수 안정성이 뛰어남',en:'Very low moisture absorption gives excellent dimensional stability'},
        {ko:'금속 대비 경량이면서 고하중 베어링·씰 부품으로 사용 가능',en:'Lighter than metal while still handling high-load bearing and seal duty'}
      ],
      apps:[{ko:'고압 밸브 씰 자켓',en:'High-pressure valve seal jackets'},{ko:'동적 피스톤·로드씰 백업링',en:'Back-up rings for dynamic piston/rod seals'},{ko:'반도체 습식 공정 부품',en:'Semiconductor wet-process components'},{ko:'항공우주 구조 부품',en:'Aerospace structural components'},{ko:'극저온 밸브',en:'Cryogenic valves'}] },

    { id:'oil', ko:'오일씰', en:'Oil Seal', imgs:imgs('oil',6),
      dko:'회전축에 장착되어 내부 윤활유의 누출과 외부 이물질의 유입을 방지하는 오일씰입니다. NBR·FKM·실리콘 등 다양한 소재로 일반 산업기계부터 유압모터까지 폭넓게 적용됩니다.',
      den:'Oil seals fitted on rotating shafts to prevent internal lubricant leakage and external contaminant ingress. Available in NBR, FKM and silicone for everything from general machinery to hydraulic motors.',
      mat:['NBR','FKM','실리콘','PTFE'],
      principleKo:'금속 케이스에 고무 립을 가황 접착하고, 립 뒤에 가터 스프링(garter spring)을 둘러 축을 향한 조임력을 일정하게 유지합니다. 1차 립이 오일 누출을 막고, 보조(더스트) 립이 있는 타입은 외부의 먼지·수분 유입을 추가로 차단합니다. 케이스는 금속 단독형, 고무 피복형(러버 커버드 OD) 등으로 구분되며, 하우징 재질과 표면 상태에 맞춰 선택합니다.',
      principleEn:'A rubber lip is vulcanized to a metal case, with a garter spring wrapped behind it to maintain constant radial load against the shaft. The primary lip retains lubricant; where a secondary (dust) lip is present, it additionally excludes external dirt and moisture. Cases come in bare-metal-OD and rubber-covered-OD styles, chosen to suit the housing material and bore finish.',
      features:[
        {ko:'가터 스프링으로 축 마모·편심에도 일정한 접촉압 유지',en:'Garter spring maintains consistent contact force despite shaft wear or eccentricity'},
        {ko:'1차 립(오일 누출 방지) + 보조 립(이물질 차단) 조합 선택 가능',en:'Primary lip (oil retention) can be combined with a secondary lip (contaminant exclusion)'},
        {ko:'금속 OD / 고무 피복 OD 케이스로 하우징 재질에 맞춰 선정',en:'Metal-OD or rubber-covered-OD case options matched to housing material'},
        {ko:'표준형 기준 축속도·편심·압력에 대한 설계 한계값 보유(고속·고압은 특수설계 대응)',en:'Standard designs have defined limits for shaft speed, eccentricity and pressure — special designs cover higher-speed or higher-pressure duty'}
      ],
      apps:[{ko:'유압모터/감속기',en:'Hydraulic motors & gearboxes'},{ko:'일반 산업용 회전기계',en:'General industrial rotating machinery'},{ko:'자동차/중장비 구동축',en:'Automotive & heavy-equipment drive shafts'},{ko:'펌프 축',en:'Pump shafts'}] },

    { id:'isolator', ko:'베어링아이솔레이터', en:'Bearing Isolator (BPS)', imgs:['images/web/isolator1.jpg'],
      dko:'회전체와 고정체 사이의 미세 간극을 이용한 비접촉 방식으로 베어링을 보호하는 아이솔레이터(BPS)입니다. 접촉 마찰이 없어 반영구적으로 사용 가능하며, 오염물질 유입과 윤활유 누출을 동시에 차단합니다.',
      den:'A non-contact bearing protector/isolator (BPS) that uses a fine labyrinth gap between rotating and stationary elements. Virtually wear-free, it blocks both contamination ingress and lubricant loss.',
      mat:['NBR','PTFE'],
      principleKo:'회전환과 고정환이 서로 맞물리는 미로(labyrinth) 형태의 미세 간극을 형성하되, 두 부품이 직접 접촉하지는 않습니다. 이 좁고 구불구불한 경로가 물리적 장벽 역할을 해 오염물질의 침입과 윤활유의 유출을 억제하며, 비접촉 구조이기 때문에 마모가 거의 없어 반영구적으로 사용할 수 있습니다. 모델에 따라 O-ring 보조 실링이나 배수 홈을 추가해 밀봉 성능을 높이기도 합니다.',
      principleEn:'A rotating ring and a stationary ring interlock to form a fine labyrinth clearance without ever touching each other. That narrow, winding path acts as a physical barrier that resists contaminant ingress and lubricant loss, and because there is no rubbing contact, wear is virtually eliminated — giving the isolator a near-permanent service life. Depending on the model, an auxiliary O-ring or drainage groove can be added to further improve sealing performance.',
      features:[
        {ko:'비접촉 구조로 마모가 없어 반영구적 사용 가능',en:'Non-contact design — virtually no wear, near-permanent service life'},
        {ko:'접촉 마찰이 없어 발열·동력 손실이 최소화',en:'No contact friction, so heat generation and power loss are minimal'},
        {ko:'분당 최대 약 25m/sec 둘레속도, -40~120℃ 대응(제품군별 상이)',en:'Handles surface speeds up to roughly 25 m/sec and -40 to 120°C, depending on the series'},
        {ko:'PTFE 필터·FKM 등 O-ring 보조 실 재질 선택 가능',en:'Auxiliary O-ring materials such as PTFE-filled compounds or FKM can be specified'},
        {ko:'모터·펌프·기어박스 등 다양한 회전 장비에 규격 대응',en:'Sized to fit a wide range of rotating equipment — motors, pumps, gearboxes'}
      ],
      apps:[{ko:'전동기 베어링 보호',en:'Electric motor bearing protection'},{ko:'펌프',en:'Pumps'},{ko:'기어박스',en:'Gearboxes'},{ko:'송풍기/블로워',en:'Fans & blowers'}] },

    { id:'wearring', ko:'웨어링', en:'Wear Ring / Guide Ring', imgs:['images/web/wearring1.jpg'],
      dko:'유공압 실린더의 로드·피스톤이 금속과 직접 마찰하지 않도록 지지하는 가이드용 웨어링입니다. ACM 복합소재로 제작되어 저마찰·고내구성을 갖추며 씰의 편심 마모를 방지합니다.',
      den:'Guide wear rings that support the rod and piston in hydraulic/pneumatic cylinders, preventing metal-to-metal contact. Made from ACM composite for low friction and high durability, reducing uneven seal wear.',
      mat:['ACM 복합소재','PTFE','POM'],
      principleKo:'실린더 내부에서 로드나 피스톤의 자중·측하중을 받아내어, 금속(로드/보어)과 금속(피스톤/실린더 튜브)이 직접 맞닿지 않도록 지지하는 역할을 합니다. 웨어링이 축을 정확히 센터링해 주기 때문에 옆에 있는 씰이 한쪽으로만 눌리는 편마모를 막아, 결과적으로 씰 전체의 수명을 늘려줍니다.',
      principleEn:'Inside a cylinder, the wear ring carries the dead weight and side loads of the rod or piston, keeping metal (rod/bore) from ever touching metal (piston/tube) directly. By centering the moving part accurately, it prevents the seal next to it from being pressed unevenly to one side — which in turn extends the service life of the entire seal set.',
      features:[
        {ko:'금속 간 직접 마찰 방지로 실린더 보어 손상 예방',en:'Prevents metal-to-metal rubbing that would damage the cylinder bore'},
        {ko:'정확한 센터링으로 인접 씰의 편심 마모 방지',en:'Accurate centering prevents uneven wear on the adjacent seal'},
        {ko:'ACM 복합소재는 청동 가이드 대비 높은 하중 지지력',en:'ACM composite carries substantially higher load than a bronze guide of the same size'},
        {ko:'저흡습·저마찰·내화학성으로 다양한 유체 환경에 대응',en:'Low moisture absorption, low friction and chemical resistance suit a wide range of fluid environments'}
      ],
      apps:[{ko:'유압 실린더 피스톤/로드 가이드',en:'Hydraulic cylinder piston & rod guides'},{ko:'공압 실린더',en:'Pneumatic cylinders'},{ko:'건설/농업기계',en:'Construction & agricultural machinery'}] },

    { id:'machined', ko:'가공씰', en:'Machined Seal', imgs:imgs('machined',3),
      dko:'비표준 치수·특수 사양에 맞춰 절삭 가공으로 제작하는 씰입니다. 소량·긴급·단종 부품 대응에 유리하며 빠른 납기가 가능합니다.',
      den:'Seals produced by precision machining for non-standard dimensions and special specifications — ideal for small-lot, urgent and obsolete parts with fast lead times.',
      mat:['PU','PTFE','POM','PEEK'],
      principleKo:'사출·압축 금형으로 찍어내는 몰드 성형 씰과 달리, 봉재·판재 형태의 소재를 선반·밀링으로 절삭해 원하는 단면과 치수를 직접 깎아냅니다. 금형 제작 과정이 없기 때문에 소량이라도 비교적 짧은 기간에 제작할 수 있고, 표준 규격에 없는 치수나 단종된 설비의 부품도 도면만 있으면 대응할 수 있습니다.',
      principleEn:'Unlike molded seals produced from injection or compression tooling, machined seals are turned or milled directly from rod or sheet stock to the required cross-section and dimensions. Because no mold has to be built first, even small quantities can be produced on a relatively short lead time — and as long as a drawing or sample exists, seals for non-standard sizes or discontinued equipment can still be reproduced.',
      features:[
        {ko:'금형 없이 제작 — 소량·시제품 대응에 유리',en:'No tooling required — well suited to small lots and prototypes'},
        {ko:'단종 설비·비표준 치수 부품 재현 가능',en:'Can reproduce parts for discontinued equipment or non-catalog dimensions'},
        {ko:'PU·PTFE·POM·PEEK 등 소재를 용도에 맞게 선택',en:'Material — PU, PTFE, POM, PEEK and more — selected to suit the application'},
        {ko:'몰드품 대비 납기가 짧아 긴급 대응에 유리',en:'Faster turnaround than molded parts, useful for urgent requirements'}
      ],
      apps:[{ko:'설비 보수용 단종 부품',en:'Discontinued repair parts'},{ko:'시제품/소량 개발품',en:'Prototypes & small-batch development parts'},{ko:'특수 치수 씰',en:'Special-dimension seals'}] },

    { id:'acm', ko:'ACM베어링', en:'ACM Bearing', imgs:imgs('acm',2),
      dko:'특수 고분자 폴리에스테르 수지와 정밀섬유·첨가제로 구성된 고기능 복합체 소재의 베어링(가이드 부시)입니다. 고하중·저마찰계수·내화학성이 요구되는 환경에 적합합니다.',
      den:'A high-performance composite bearing (guide bushing) made from special polyester resin, precision fiber and additives — suited to environments demanding high load capacity, low friction and chemical resistance.',
      mat:['폴리에스테르 수지','폴리에스테르/면/노멕스 원단','흑연·MoS2·PTFE'],
      principleKo:'폴리에스테르 수지에 PTFE·흑연·MoS2 등 저마찰 첨가제를 배합한 뒤 폴리에스테르·면·노멕스 등 보강 원단과 함께 맨드릴에 감아(coiling) 성형하고, 오븐에서 경화(curing)한 뒤 맨드릴에서 압출 성형해 제작합니다. 섬유 보강층이 하중을 지지하고, 수지에 섞인 고체 윤활 성분이 표면 마찰을 낮춰줍니다.',
      principleEn:'PTFE, graphite and MoS2 low-friction additives are compounded into a polyester resin, then coiled onto a mandrel together with a reinforcing fabric — polyester, cotton or Nomex — cured in an oven, and finally pressed off the mandrel to finish the part. The fiber reinforcement carries the load, while the solid-lubricant additives blended into the resin keep surface friction low.',
      features:[
        {ko:'낮은 흡수율(물흡수 스웰 <0.15%)로 치수 안정성 우수',en:'Very low water absorption (swell <0.15%) gives excellent dimensional stability'},
        {ko:'낮은 열팽창계수(45~50×10⁻⁶/℃)로 정밀 간극 유지에 유리',en:'Low thermal expansion (45–50×10⁻⁶/°C) helps hold precise running clearances'},
        {ko:'상시 사용 온도 약 80℃, 최대 120℃까지 대응',en:'Recommended continuous use around 80°C, capable up to 120°C'},
        {ko:'경도 변화가 적어 우레탄 계열보다 내마모성이 우수',en:'Hardness stays stable over time, giving better wear resistance than urethane bearings'},
        {ko:'정적 압축강도 최대 440N/㎟급의 고하중 지지력',en:'Static compressive strength up to roughly 440 N/mm²'}
      ],
      apps:[{ko:'발전소 냉각수/해수 펌프',en:'Power-plant cooling-water & seawater pumps'},{ko:'조선·해양 설비',en:'Shipbuilding & marine equipment'},{ko:'대형 산업 펌프 축베어링',en:'Large industrial pump shaft bearings'},{ko:'식품가공 설비',en:'Food processing equipment'}] },

    { id:'magnetic', ko:'자석필터', en:'Magnetic Filter', imgs:imgs('magnetic',3),
      dko:'유압·윤활 시스템 내 금속 마모분·이물질을 강력한 자력으로 포집하여 장비 손상을 예방하고 오일 수명을 연장합니다.',
      den:'Powerful magnetic filters that capture metallic wear particles and debris in hydraulic and lubrication systems, preventing equipment damage and extending oil life.',
      mat:['희토류 자석(네오디뮴)','스테인리스'],
      principleKo:'일반 여과지·백 필터는 통상 10~40마이크론급 이물질만 걸러내기 때문에, 베어링·밸브 손상의 주원인이 되는 1마이크론 이하의 미세 철 마모분은 그대로 통과시킵니다. 자석필터는 강력한 희토류 자석의 자기장으로 이 미세 철 오염물을 직접 흡착·포집하며, 뭉쳐진 철 입자가 비철 오염물까지 함께 걸러내는 응집 효과도 냅니다. 기존 세라믹 자석과 달리 고온에서도 자력 저하가 적어 장기간 안정적으로 작동합니다.',
      principleEn:'Conventional paper or bag filters typically catch particles only down to the 10–40 micron range, letting the sub-1-micron ferrous wear particles that cause most bearing and valve damage pass straight through. A magnetic filter uses a powerful rare-earth magnetic field to directly attract and hold these fine ferrous particles; as they clump together they also help trap non-ferrous debris in the same location. Unlike older ceramic magnets, rare-earth elements retain their field strength at higher temperatures, so performance stays stable over long service intervals.',
      features:[
        {ko:'1마이크론 이하 미세 철분까지 포집',en:'Captures ferrous particles down to sub-1-micron size'},
        {ko:'기존 필터 대비 약 7배 긴 세척/교체 주기',en:'Roughly 7x longer cleaning/replacement interval than conventional filtration'},
        {ko:'세라믹 자석과 달리 고온에서도 자력 저하가 적음',en:'Unlike ceramic magnets, retains field strength at elevated temperature'},
        {ko:'세척 후 재사용 가능해 유지비 절감',en:'Cleanable and reusable, lowering long-term maintenance cost'},
        {ko:'포집된 마모분 분석으로 설비 이상을 조기 파악 가능',en:'Captured debris can be analyzed for early detection of equipment problems'}
      ],
      apps:[{ko:'유압 시스템',en:'Hydraulic systems'},{ko:'기어박스/변속기',en:'Gearboxes & transmissions'},{ko:'윤활유 순환계통',en:'Lubrication circulation systems'},{ko:'엔진 오일라인',en:'Engine oil lines'}] },

    { id:'mechanical', ko:'메카니컬씰', en:'Mechanical Seal', imgs:[],
      dko:'회전축 밀봉을 위한 메카니컬씰로, 고정환과 회전환의 정밀 랩핑 면 접촉을 통해 고압·고속 회전 조건에서도 누출 없는 밀봉을 구현합니다. 펌프·믹서 등 회전 장비에 사용됩니다.',
      den:'Mechanical seals for rotating shafts, using precision-lapped stationary and rotating faces to achieve leak-free sealing under high pressure and high-speed rotation — used in pumps, mixers and other rotating equipment.',
      mat:['카본','실리콘카바이드(SiC)','텅스텐카바이드','NBR/FKM 오링'],
      principleKo:'축에 고정되어 함께 회전하는 회전환(rotating face)과, 하우징에 고정되어 움직이지 않는 고정환(stationary face)이 스프링 하중으로 서로 밀착합니다. 두 면을 극히 매끄럽게 랩핑(정밀 연마) 가공해 두 면 사이의 미세한 유막만으로 윤활과 밀봉을 동시에 달성하며, 오링·개스킷이 회전환·고정환 각각을 축과 하우징에 2차로 밀봉합니다. 원유·해수처럼 모래·수분이 섞인 유체에는 실리콘카바이드처럼 단단한 면 소재를, 화학물질에는 내화학성 소재를 선택합니다.',
      principleEn:'A rotating face, keyed to the shaft, is pressed by spring load against a stationary face fixed to the housing. Both faces are lapped to an extremely fine, flat finish so that the microscopically thin fluid film between them provides both lubrication and sealing at once; O-rings or gaskets provide secondary sealing between each face and the shaft or housing. Face materials are chosen for the duty — very hard combinations such as silicon carbide are used where sand or water contaminate the fluid (crude oil, seawater), while chemically resistant materials are chosen for aggressive process fluids.',
      features:[
        {ko:'고정환·회전환의 정밀 랩핑 면접촉으로 고압·고속에서도 누출 최소화',en:'Precision-lapped face contact minimizes leakage even under high pressure and speed'},
        {ko:'실리콘카바이드·텅스텐카바이드 등 초경질 페이스 소재로 마모성 유체 대응',en:'Ultra-hard face materials such as silicon carbide and tungsten carbide handle abrasive fluids'},
        {ko:'API 682/ISO 21049 등 국제 표준 규격 대응 설계 가능',en:'Can be designed to international standards such as API 682 / ISO 21049'},
        {ko:'카트리지형 설계로 정렬 오차를 줄이고 교체 작업을 단순화',en:'Cartridge-style designs reduce alignment error and simplify replacement'},
        {ko:'유체·온도·회전속도에 따라 페이스·오링 소재를 맞춤 조합',en:'Face and O-ring material combinations are tailored to fluid, temperature and rotating speed'}
      ],
      apps:[{ko:'원유/파이프라인 펌프',en:'Crude oil & pipeline pumps'},{ko:'화학/석유화학 펌프',en:'Chemical & petrochemical pumps'},{ko:'발전소 보일러순환/급수 펌프',en:'Power-plant boiler circulating & feed pumps'},{ko:'믹서/교반기',en:'Mixers & agitators'},{ko:'압축기',en:'Compressors'}] }
  ];

  var T = {
    inqTitleKo:'원하는 제품 사양이 있으신가요?', inqTitleEn:'Need a specific specification?',
    inqDescKo:'치수·도면·수량을 알려주시면 담당자가 신속히 답변드립니다.',
    inqDescEn:'Send us your dimensions, drawings and quantity for a prompt reply.',
    inqBtnKo:'견적 문의', inqBtnEn:'Request a Quote',
    matKo:'적용 소재', matEn:'Materials',
    comingKo:'실물 이미지는 준비 중입니다. 자세한 사양은 문의해 주세요.',
    comingEn:'Product photos are coming soon — please contact us for detailed specifications.'
  };

  var MAP={}; ITEMS.forEach(function(it){ MAP[it.id]=it; });

  // ---- render sidebar (flat list, no accordion) ----
  var side=document.getElementById('side');
  var sideHtml='<div class="itemlist">';
  ITEMS.forEach(function(it){
    sideHtml+='<a class="item" data-item="'+it.id+'" onclick="SS.select(\''+it.id+'\')">'
      +'<span class="ko">'+it.ko+'</span><span class="en">'+it.en+'</span></a>';
  });
  sideHtml+='</div>';
  side.innerHTML=sideHtml;

  var content=document.getElementById('content');
  function esc(s){return (s||'').replace(/</g,'&lt;');}

  function heroImgHtml(it){
    if(!it.imgs || !it.imgs.length) return '';
    return '<div class="hero-img" style="background-image:url(\''+it.imgs[0]+'\')"></div>';
  }

  // Long-form body: 작동원리/구조(principle) · 특징(features) · 적용분야(applications)
  function bodyHtml(it){
    var out='';
    if(it.principleKo){
      out+='<h3><span class="ko">작동 원리 &amp; 구조</span><span class="en">Principle &amp; Structure</span></h3>'
        +'<p><span class="ko">'+it.principleKo+'</span><span class="en">'+it.principleEn+'</span></p>';
    }
    if(it.features && it.features.length){
      out+='<h3><span class="ko">주요 특징</span><span class="en">Key Features</span></h3><ul class="flist">'
        + it.features.map(function(f){ return '<li><span class="ko">'+f.ko+'</span><span class="en">'+f.en+'</span></li>'; }).join('')
        + '</ul>';
    }
    if(it.apps && it.apps.length){
      out+='<h3><span class="ko">적용 분야</span><span class="en">Applications</span></h3><div class="apps">'
        + it.apps.map(function(a){ return '<span><span class="ko">'+a.ko+'</span><span class="en">'+a.en+'</span></span>'; }).join('')
        + '</div>';
    }
    return out ? '<div class="pbody">'+out+'</div>' : '';
  }

  function baseHead(it){
    var mat=(it.mat||[]).map(function(m){return '<span>'+m+'</span>';}).join('');
    return '<div class="pc-head"><div><h2><span class="ko">'+it.ko+'</span><span class="en">'+it.en+'</span></h2></div></div>'
      +'<div class="en-title">'+it.en.toUpperCase()+'</div>'
      +'<p class="desc"><span class="ko">'+it.dko+'</span><span class="en">'+it.den+'</span></p>'
      + (mat ? '<div style="font-weight:800;color:var(--navy);font-size:13px;letter-spacing:.05em;margin-bottom:8px"><span class="ko">'+T.matKo+'</span><span class="en">'+T.matEn+'</span></div><div class="mat">'+mat+'</div>' : '');
  }

  var inquireHtml =
    '<div class="inquire"><div><h4><span class="ko">'+T.inqTitleKo+'</span><span class="en">'+T.inqTitleEn+'</span></h4>'
    +'<p><span class="ko">'+T.inqDescKo+'</span><span class="en">'+T.inqDescEn+'</span></p></div>'
    +'<a class="btn btn-primary" href="contact.html"><span class="ko">'+T.inqBtnKo+'</span><span class="en">'+T.inqBtnEn+'</span></a></div>';

  // ---- special: O-ring render with top sub-tabs ----
  var oringTab = 'design'; // remembers last opened sub-tab while browsing
  function renderOring(){
    var it = MAP['oring'];
    var tabsHtml = '<div class="subtabs">'
      + ['design','material','spec'].map(function(k){
          var t=ORING_TABS[k];
          return '<button class="'+(k===oringTab?'on':'')+'" onclick="SS.oringTab(\''+k+'\')"><span class="ko">'+t.ko+'</span><span class="en">'+t.en+'</span></button>';
        }).join('')
      + '</div>';

    var tabBody = '';
    if(oringTab==='design'){
      var t=ORING_TABS.design;
      tabBody = '<p class="desc"><span class="ko">'+t.bodyKo+'</span><span class="en">'+t.bodyEn+'</span></p><div class="dcards">'
        + t.items.map(function(x){
            return '<div class="dcard"><h5><span class="ko">'+x.ko+'</span><span class="en">'+x.en+'</span></h5>'
              +'<p><span class="ko">'+x.dko+'</span><span class="en">'+x.den+'</span></p></div>';
          }).join('') + '</div>';
    } else if(oringTab==='material'){
      var t2=ORING_TABS.material;
      var rows = t2.rows.map(function(r){
        return '<tr><td class="mname">'+r.mat+'</td><td><span class="ko">'+r.ko+'</span><span class="en">'+r.en+'</span></td><td class="mtemp">'+r.temp+'</td></tr>';
      }).join('');
      tabBody = '<p class="desc"><span class="ko">'+t2.bodyKo+'</span><span class="en">'+t2.bodyEn+'</span></p>'
        + '<table class="mtable"><thead><tr>'
        + '<th><span class="ko">재질</span><span class="en">Material</span></th>'
        + '<th><span class="ko">특징</span><span class="en">Characteristics</span></th>'
        + '<th><span class="ko">사용 온도</span><span class="en">Temp. Range</span></th>'
        + '</tr></thead><tbody>'+rows+'</tbody></table>';
    } else {
      var t3=ORING_TABS.spec;
      tabBody = '<p class="desc"><span class="ko">'+t3.bodyKo+'</span><span class="en">'+t3.bodyEn+'</span></p><div class="dcards">'
        + t3.items.map(function(x){
            return '<div class="dcard"><h5><span class="ko">'+x.ko+'</span><span class="en">'+x.en+'</span></h5>'
              +'<p><span class="ko">'+x.dko+'</span><span class="en">'+x.den+'</span></p></div>';
          }).join('') + '</div>';
    }

    content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it)
      + tabsHtml + '<div class="subtab-body">'+tabBody+'</div>' + inquireHtml;
  }

  // ---- special: 퍼플러오링 render with top sub-tabs (퍼플러 Perlast / Kalrez 반도체) ----
  var perfluoroTab = 'perlast';
  function renderPerfluoro(){
    var it = MAP['perfluoro'];
    var tabsHtml = '<div class="subtabs">'
      + ['perlast','kalrez'].map(function(k){
          var t=PERFLUORO_TABS[k];
          return '<button class="'+(k===perfluoroTab?'on':'')+'" onclick="SS.perfluoroTab(\''+k+'\')"><span class="ko">'+t.ko+'</span><span class="en">'+t.en+'</span></button>';
        }).join('')
      + '</div>';

    var tabBody='';
    if(perfluoroTab==='perlast'){
      var t=PERFLUORO_TABS.perlast;
      var grows = t.grades.map(function(r){
        return '<tr><td class="mname">'+r.g+'</td><td>'+r.d+'</td><td>'+r.c+'</td><td>'+r.h+'</td><td class="mtemp">'+r.t+'</td></tr>';
      }).join('');
      tabBody = '<p class="desc"><span class="ko">'+t.bodyKo+'</span><span class="en">'+t.bodyEn+'</span></p>'
        + '<table class="mtable"><thead><tr>'
        + '<th>GRADE</th><th><span class="ko">설명</span><span class="en">Description</span></th><th><span class="ko">색상</span><span class="en">Colour</span></th><th><span class="ko">경도</span><span class="en">Hardness</span></th><th><span class="ko">사용 온도</span><span class="en">Operating Temp.</span></th>'
        + '</tr></thead><tbody>'+grows+'</tbody></table>'
        + '<p class="desc" style="margin-top:18px"><span class="ko"><b>적용분야</b> — '+t.appsKo+'</span><span class="en"><b>Applications</b> — '+t.appsEn+'</span></p>';
    } else {
      var t2=PERFLUORO_TABS.kalrez;
      var lastGrp=null;
      var krows = t2.rows.map(function(r){
        var grpCell='';
        if(r.grp!==lastGrp){
          var span = t2.rows.filter(function(x){ return x.grp===r.grp; }).length;
          grpCell = '<td class="mname" rowspan="'+span+'" style="vertical-align:middle">'+r.grp+'</td>';
          lastGrp = r.grp;
        }
        return '<tr>'+grpCell+'<td>'+r.proc+'</td><td class="mtemp">'+r.temp+'</td><td>'+r.env+'</td><td>'+r.rec+'</td><td>'+r.app+'</td></tr>';
      }).join('');
      tabBody = '<p class="desc"><span class="ko">'+t2.bodyKo+'</span><span class="en">'+t2.bodyEn+'</span></p>'
        + '<table class="mtable"><thead><tr>'
        + '<th><span class="ko">공정구분</span><span class="en">Group</span></th><th><span class="ko">세부공정</span><span class="en">Process</span></th><th><span class="ko">온도</span><span class="en">Temp.</span></th><th><span class="ko">공정 환경</span><span class="en">Environment</span></th><th><span class="ko">추천제품</span><span class="en">Suggested</span></th><th><span class="ko">주요 용도</span><span class="en">Applications</span></th>'
        + '</tr></thead><tbody>'+krows+'</tbody></table>'
        + '<p class="desc" style="margin-top:16px;font-size:13px"><span class="ko">'+t2.noteKo+'</span><span class="en">'+t2.noteEn+'</span></p>';
    }

    content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it) + tabsHtml + '<div class="subtab-body">'+tabBody+'</div>' + inquireHtml;
  }

  function render(id){
    var it=MAP[id]; if(!it) return;
    if(it.special==='oring'){ renderOring(); }
    else if(it.special==='perfluoro'){ renderPerfluoro(); }
    else{
      content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it) + inquireHtml;
    }
    var cur=document.getElementById('crumb-cur');
    if(cur) cur.innerHTML='<span class="ko">'+it.ko+'</span><span class="en">'+it.en+'</span>';
    document.querySelectorAll('.item').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-item')===id); });
  }

  window.SS={
    select:function(id){
      render(id);
      history.replaceState(null,'','#'+id);
      if(window.innerWidth<900){ document.getElementById('content').scrollIntoView({behavior:'smooth'}); }
    },
    oringTab:function(k){ oringTab=k; renderOring(); },
    perfluoroTab:function(k){ perfluoroTab=k; renderPerfluoro(); }
  };

  // ---- deep link (#oring, #hp, #oil, ...) ----
  var hash=(location.hash||'').replace('#','');
  var startId = MAP[hash] ? hash : ITEMS[0].id;
  render(startId);
})();
