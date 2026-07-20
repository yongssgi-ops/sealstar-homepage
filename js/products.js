/* SEALSTAR — Products catalog (flat sidebar layout)
   구조: ITEMS 배열(20개 개별 카테고리)을 좌측에서 바로 클릭 → 우측에 상세 표시.
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
          dko:'그루브 폭(G)·깊이(G1)·모따기(C)·표면조도(S) 등은 오링의 선경(CS)·내경(ID)과 목표 압축률을 기준으로 산출합니다.',
          den:'Groove width (G), depth (G1), chamfer (C) and surface finish (S) are calculated from the O-ring\'s cross-section (CS), inner diameter (ID) and target compression ratio.'},
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
      bodyKo:'씰스타는 NBR·H-NBR·EPDM·실리콘·네오프렌·VITON(FKM)·AFLAS·FFKM·폴리우레탄·테프론 등 10종의 재질로 오링을 공급하며, 사용 온도·유체·화학 조건에 맞는 최적 재질을 선정해 드립니다. 아래 특성·취약 매체·온도범위는 일반적인 참고값이며, 정확한 사양은 문의 바랍니다.',
      bodyEn:'Sealstar supplies O-rings in 10 material families — NBR, H-NBR, EPDM, silicone, neoprene (CR), VITON (FKM), AFLAS, FFKM, polyurethane and PTFE — and helps select the optimal material for your temperature, fluid and chemical conditions. The characteristics, incompatible media and temperature ranges below are general reference values — please contact us for exact specifications.',
      rows:[
        {mat:'NBR', sub:'Nitrile · 부타디엔', subEn:'Nitrile · Butadiene',
          advKo:'표준 씰 최다 사용 · 내유·내마모·저가스투과 · 광유계 오일·그리스·유압유 우수', advEn:'Most widely used standard seal material — excellent oil/abrasion resistance and low gas permeability; strong with petroleum oils, greases and hydraulic fluid',
          cauKo:'방향족 탄화수소·연료·오존·HFD유엔 취약 (특수 -50℃)', cauEn:'Poor resistance to aromatic hydrocarbons, fuels, ozone and HFD fluids (special grade to -50°C)', temp:'-30 ~ +100℃'},
        {mat:'HNBR', sub:'Hydrogenated NBR', subEn:'Hydrogenated NBR',
          advKo:'NBR 수소화 → 내열·내오존·기계강도 향상 · 매체 저항은 NBR과 동등 · 신냉매', advEn:'Hydrogenated NBR — improved heat/ozone resistance and mechanical strength; media resistance on par with NBR; compatible with new refrigerants',
          cauKo:'고온 아민·강산엔 제한 (특수 -50℃)', cauEn:'Limited resistance to hot amines and strong acids (special grade to -50°C)', temp:'-30 ~ +150℃'},
        {mat:'EPDM', sub:'Ethylene Propylene', subEn:'Ethylene Propylene',
          advKo:'온수·스팀·극성용제(알코올·케톤)·글리콜 브레이크액 · 내오존·내후·내약품', advEn:'Suited to hot water, steam, polar solvents (alcohols, ketones) and glycol brake fluid; excellent ozone, weather and chemical resistance',
          cauKo:'광유계(오일·그리스·연료) 전반 부적합', cauEn:'Not suitable for petroleum-based oils, greases or fuels', temp:'-45 ~ +150℃'},
        {mat:'SILICONE', sub:'VMQ · 실리콘', subEn:'VMQ · Silicone',
          advKo:'내열·내한 폭넓음 · 식품·의료 위생·전기절연 · 오존·내후 우수', advEn:'Wide heat/cold range · food and medical hygiene grade, electrical insulation · excellent ozone and weather resistance',
          cauKo:'강도 약해 정적용 · 연료·방향족유·120℃↑스팀 취약 (특수 +230℃)', cauEn:'Low mechanical strength — static use only; poor with fuels, aromatic oils and steam above 120°C (special grade to +230°C)', temp:'-60 ~ +200℃'},
        {mat:'CR', sub:'Chloroprene · 네오프렌', subEn:'Chloroprene · Neoprene',
          advKo:'내후·내오존·내노화 우수 · 냉매(암모니아·프레온) · 옥외·벨로우즈', advEn:'Excellent weather, ozone and aging resistance · compatible with refrigerants (ammonia, Freon) · outdoor use, bellows',
          cauKo:'일반 광유·연료엔 제한적', cauEn:'Limited resistance to general petroleum oils and fuels', temp:'-40 ~ +100℃'},
        {mat:'FKM', sub:'Fluoro · Viton®', subEn:'Fluoro · Viton®',
          advKo:'내열·내화학 광범위 · 오존·내후·저가스투과(진공) · 광유·연료·방향족', advEn:'Broad heat and chemical resistance · ozone/weather resistant, low gas permeability (vacuum) · compatible with petroleum oils, fuels, aromatics',
          cauKo:'글리콜 브레이크액·아세톤·아민·과열스팀 취약 (특수 -61 ~ +260℃)', cauEn:'Poor resistance to glycol brake fluid, acetone, amines and superheated steam (special grade -61 to +260°C)', temp:'-15 ~ +200℃'},
        {mat:'AFLAS', sub:'FEPM · TFE/P', subEn:'FEPM · TFE/P',
          advKo:'강염기·아민·H₂S 30%·스팀·오일 · 석유화학·오일&가스(NORSOK·API 6A)', advEn:'Resists strong bases, amines, 30% H₂S, steam and oil · suited to petrochemical and oil & gas service (NORSOK, API 6A)',
          cauKo:'저온 유연성 제한 · 탄화수소·방향족 제한적', cauEn:'Limited low-temperature flexibility · limited resistance to hydrocarbons and aromatics', temp:'-20 ~ +230℃'},
        {mat:'FFKM', sub:'Perfluoro · evolast®', subEn:'Perfluoro · evolast®',
          advKo:'최고 내화학·내열 · PTFE급 내약품 + 탄성체 복원력 · 반도체·초고온·강산·케톤', advEn:'Highest chemical and heat resistance · PTFE-level chemical inertness with elastomeric recovery · semiconductor, extreme heat, strong acids, ketones',
          cauKo:'불소화합물엔 취약 · 고가 (특수 -40 ~ +340℃)', cauEn:'Vulnerable to fluorinated compounds · higher cost (special grade -40 to +340°C)', temp:'-25 ~ +270℃'},
        {mat:'PU', sub:'Polyurethane', subEn:'Polyurethane',
          advKo:'고압·내마모·인장·인열 우수 · 동적 고하중 · 압출 저항', advEn:'Excellent under high pressure — strong abrasion, tensile and tear resistance · suited to dynamic, high-load service · good extrusion resistance',
          cauKo:'온수·스팀·산·알칼리·케톤·방향족엔 취약', cauEn:'Poor resistance to hot water, steam, acids, alkalis, ketones and aromatics', temp:'-40 ~ +100℃'},
        {mat:'PTFE', sub:'Poly-Tetra-Fluoro-Ethylene', subEn:'Poly-Tetra-Fluoro-Ethylene',
          advKo:'전 화학 내성 · 내열·저마찰·비점착 · 고체 오링·백업링·초고순도', advEn:'Resists virtually all chemicals · heat resistant, low friction, non-stick · used for solid O-rings, back-up rings, ultra-high-purity service',
          cauKo:'비탄성(복원력 없음) · 정적·백업 용도 위주', cauEn:'Non-elastic (no recovery) · mainly static or back-up applications', temp:'-180 ~ +260℃'}
      ],
      certsKo:'국제 인증 · 위생 · 안전', certsEn:'Approvals & Compliance',
      certs:[
        {code:'FDA', name:'U.S. Food & Drug Admin.', subKo:'식품 접촉 · 미국', subEn:'Food contact · USA', detail:'CFR 21 §177.2600 / §177.2400 · 반복 사용 고무'},
        {code:'KIWA', name:'KIWA · 네덜란드', subKo:'음용수 (냉·온수)', subEn:'Drinking water (cold/hot)', detail:'BRL-K17504 · DVGW·WA 인증연계'},
        {code:'NSF', name:"Nat'l Sanitary Foundation", subKo:'음용수·식품 · 미국', subEn:'Drinking water & food · USA', detail:'NSF 61 (~82℃) · NSF 51 식품 (~100℃)'},
        {code:'WRAS', name:'Water Reg. Advisory · 영국', subKo:'음용수', subEn:'Drinking water', detail:'BS 6920-1:2000 냉·온수 (~85℃)'},
        {code:'UL', name:'Underwriter Lab. · 미국', subKo:'난연·안전', subEn:'Flame resistance & safety', detail:'UL 94 난연 등급 대응'},
        {code:'USP', name:'U.S. Pharmacopeia', subKo:'의료·제약', subEn:'Medical & pharmaceutical', detail:'Class VI 〈87〉In-Vitro · 〈88〉In-Vivo (121℃)'}
      ]
    },
    spec:{
      ko:'규격표', en:'Spec Table',
      bodyKo:'오링 규격은 내경(ID)과 선경(CS)의 조합으로 결정됩니다. 씰스타는 아래 국제 표준과 고객 맞춤 규격을 모두 지원합니다.',
      bodyEn:'O-ring size is defined by the inner diameter (ID) and cross-section (CS). Sealstar supports the international standards below as well as custom sizes.',
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
      bodyKo:'evolast®는 PTFE 열가소성 수지의 우수한 내화학성·내열성과 엘라스토머 특유의 탄성 및 뛰어난 압축영구줄음률을 동시에 갖춘 FFKM으로, 고무를 밀봉 분야에서 이전에 없던 수준으로 끌어올린 소재입니다. 화학·의약품·식품 산업은 물론 오일·가스 생산 및 정제 공정 등 매우 엄격한 기준이 요구되는 분야에 사용됩니다. 초기 단가는 일반 엘라스토머보다 높지만, 긴 수명과 유지보수 비용 절감으로 총소유비용을 상쇄하는 경우가 많습니다. evolast® FFKM 오링은 기존 툴로 소형부터 최대 지름 2,000mm까지 약 10,000종의 규격을 보유하고 있으며, 고객 도면에 따른 맞춤 제작도 가능합니다.',
      bodyEn:'evolast® is an FFKM that combines the excellent chemical and thermal properties of PTFE thermoplastics with the elasticity and superior compression-set resistance of an elastomer — raising rubber to a previously unknown peak in sealing applications. It is used in the chemical, pharmaceutical and food industries as well as in oil & gas production and processing, wherever seals must meet highly exacting standards. Its higher initial cost compared to standard elastomers is often offset by a longer service life and reduced maintenance. evolast® FFKM O-rings are available in roughly 10,000 sizes from existing tooling — from small parts up to 2,000mm in diameter — with custom parts also produced to customer drawings.',
      grades:[
        {g:'B794', dKo:'FDA 21CFR177.2400, USP Class VI, 3A-Sanitary Standard, EC 1935/2004, DM 21/03/1973, BfR XXI 인증', dEn:'FDA 21CFR177.2400, USP Class VI, 3A-Sanitary Standard, EC 1935/2004, DM 21/03/1973, BfR XXI', cKo:'화이트', cEn:'White', h:'70', t:'-20℃ ~ +270℃'},
        {g:'B894', dKo:'FDA, USP Class VI, 3A-Sanitary Standard 기준 충족', dEn:'According to FDA, USP Class VI, 3A-Sanitary Standard', cKo:'화이트', cEn:'White', h:'80', t:'-20℃ ~ +270℃'},
        {g:'B895', dKo:'고온용 — FDA, USP Class VI, 3A-Sanitary Standard 기준 충족', dEn:'High temperature — according to FDA, USP Class VI, 3A-Sanitary Standard', cKo:'화이트', cEn:'White', h:'80', t:'-15℃ ~ +300℃'},
        {g:'N694', dKo:'표준 용도', dEn:'Standard applications', cKo:'블랙', cEn:'Black', h:'60', t:'-25℃ ~ +270℃'},
        {g:'N775', dKo:'우수한 내열 안정성 — 스팀·아민 환경에는 부적합', dEn:'Outstanding thermal stability — not suitable for steam/amine', cKo:'블랙', cEn:'Black', h:'75', t:'-15℃ ~ +340℃'},
        {g:'N794', dKo:'표준 용도, 고온용 — FDA 21 CFR 177.2600, 3A-Sanitary Standard, USP Class VI', dEn:'Standard applications, high temperature — FDA 21 CFR 177.2600, 3A-Sanitary Standard, USP Class VI', cKo:'블랙', cEn:'Black', h:'70', t:'-25℃ ~ +270℃'},
        {g:'N7LT', dKo:'초저온용', dEn:'Ultra low temperature', cKo:'블랙', cEn:'Black', h:'75', t:'-46℃ ~ +250℃'},
        {g:'N894', dKo:'표준 용도, 재고 보유 권장 등급', dEn:'Standard applications, preferably stored', cKo:'블랙', cEn:'Black', h:'75', t:'-25℃ ~ +270℃'},
        {g:'N896', dKo:'고온용', dEn:'High temperature', cKo:'블랙', cEn:'Black', h:'75', t:'-15℃ ~ +330℃'},
        {g:'N8LT', dKo:'초저온용', dEn:'Ultra low temperature', cKo:'블랙', cEn:'Black', h:'75', t:'-46℃ ~ +260℃'},
        {g:'N8SR', dKo:'스팀·고온수 저항', dEn:'Steam, hot water resistance', cKo:'블랙', cEn:'Black', h:'75', t:'-15℃ ~ +330℃'},
        {g:'N993', dKo:'표준 용도', dEn:'Standard applications', cKo:'블랙', cEn:'Black', h:'90', t:'-20℃ ~ +270℃'},
        {g:'N994', dKo:'저온용', dEn:'Low temperature', cKo:'블랙', cEn:'Black', h:'90', t:'-30℃ ~ +260℃'},
        {g:'N9ED', dKo:'사우어가스 환경용 — AED NORSOK M710(5.33mm), API6A(사우어가스 10% H2S), NACE TM0187(사우어가스 5~20% H2S), Arrhenius ISO 23936-2/NORSOK M710-3 사우어 유체 테스트', dEn:'AED NORSOK M710 (5.33mm), API6A sour gas (10% H2S), NACE TM0187 sour gas (5–20% H2S), Arrhenius ISO 23936-2/NORSOK M710-3 sour fluid test', cKo:'블랙', cEn:'Black', h:'90', t:'-15℃ ~ +260℃'},
        {g:'N9EX', dKo:'고온용 — AED Norsok M710', dEn:'High temperature — AED Norsok M710', cKo:'블랙', cEn:'Black', h:'90', t:'-15℃ ~ +320℃'},
        {g:'N9LT', dKo:'저온용 — AED Norsok M710, BS EN ISO 23936-2', dEn:'Low temperature — AED Norsok M710, BS EN ISO 23936-2', cKo:'블랙', cEn:'Black', h:'90', t:'-46℃ ~ +250℃'},
        {g:'V7FD', dKo:'표준 용도 — FDA, USP Class VI, 3A-Sanitary Standard 기준 충족', dEn:'Standard applications — according to FDA, USP Class VI, 3A-Sanitary Standard', cKo:'그린', cEn:'Green', h:'70', t:'-15℃ ~ +270℃'},
        {g:'V895', dKo:'고온용', dEn:'High temperature', cKo:'그린', cEn:'Green', h:'80', t:'-15℃ ~ +310℃'}
      ],
      gradeNoteKo:'모든 evolast® 컴파운드는 우수한 내화학성을 갖추고 있습니다.',
      gradeNoteEn:'All evolast® compounds offer outstanding chemical resistance performance.',
      supplyNoteKo:'(주)씰스타는 상기 외 국산 및 수입 퍼플러를 재고 운영 및 공급하고 있사오니 관련하여 문의주시기 바랍니다.',
      supplyNoteEn:'Sealstar Co., Ltd. also stocks and supplies additional domestic and imported perfluoroelastomer (FFKM) products beyond those listed above — please contact us for details.',
      appsKo:'화학 산업, 의약품, 식품 산업, 오일·가스 생산 및 정제 공정, 그 밖에 정밀 밀봉 성능이 요구되는 특수 산업',
      appsEn:'Chemical industry, pharmaceutical/medical, food industry, oil & gas production and processing, and other applications requiring highly exacting sealing performance'
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
      gradesKo:'등급별 특성', gradesEn:'Grade Characteristics',
      grades:[
        {code:'9100', ko:'가혹한 플라즈마 환경에서 낮은 침식률과 초저파티클 특성을 가진 등급입니다.', en:'Low erosion rate and ultra-low particle generation in harsh plasma environments.'},
        {code:'9500', ko:'오존·암모니아·수증기·플라즈마 라디칼에 대한 저항성이 우수한 등급입니다.', en:'Excellent resistance to ozone, ammonia, water vapor and plasma radicals.'},
        {code:'9300', ko:'이온(물리적)과 라디칼(화학적)이 혼재된 플라즈마 공정에 사용하는 등급입니다.', en:'Suited to plasma processes that combine ionic (physical) and radical (chemical) species.'},
        {code:'8900', ko:'금속 CVD·ALD·LPCVD 및 산화·확산 공정에 권장하는 등급입니다.', en:'Recommended for metal CVD/ALD/LPCVD and oxidation/diffusion processes.'},
        {code:'8475', ko:'램프 어닐·RTP 공정에 권장하는 등급입니다.', en:'Recommended for lamp anneal and RTP (rapid thermal processing) steps.'},
        {code:'6375UP', ko:'전체 습식(Wet) 공정에 사용 가능한 범용 등급입니다.', en:'A general-purpose grade suitable across the full range of wet process steps.'}
      ]
    }
  };

  var ORING_SIZES = {
    as568: [{n:'001',i:'0.74',c:'1.02'},{n:'002',i:'1.07',c:'1.27'},{n:'003',i:'1.42',c:'1.52'},{n:'004',i:'1.78',c:'1.78'},{n:'005',i:'2.57',c:'1.78'},{n:'006',i:'2.90',c:'1.78'},{n:'007',i:'3.68',c:'1.78'},{n:'008',i:'4.47',c:'1.78'},{n:'009',i:'5.28',c:'1.78'},{n:'010',i:'6.07',c:'1.78'},{n:'011',i:'7.65',c:'1.78'},{n:'012',i:'9.25',c:'1.78'},{n:'013',i:'10.82',c:'1.78'},{n:'014',i:'12.42',c:'1.78'},{n:'015',i:'14.00',c:'1.78'},{n:'016',i:'15.60',c:'1.78'},{n:'017',i:'17.17',c:'1.78'},{n:'018',i:'18.77',c:'1.78'},{n:'019',i:'20.35',c:'1.78'},{n:'020',i:'21.95',c:'1.78'},{n:'021',i:'23.52',c:'1.78'},{n:'022',i:'25.12',c:'1.78'},{n:'023',i:'26.70',c:'1.78'},{n:'024',i:'28.30',c:'1.78'},{n:'025',i:'29.87',c:'1.78'},{n:'026',i:'31.47',c:'1.78'},{n:'027',i:'33.05',c:'1.78'},{n:'028',i:'34.65',c:'1.78'},{n:'029',i:'37.82',c:'1.78'},{n:'030',i:'41.00',c:'1.78'},{n:'031',i:'44.17',c:'1.78'},{n:'032',i:'47.35',c:'1.78'},{n:'033',i:'50.52',c:'1.78'},{n:'034',i:'53.70',c:'1.78'},{n:'035',i:'56.87',c:'1.78'},{n:'036',i:'60.05',c:'1.78'},{n:'037',i:'63.22',c:'1.78'},{n:'038',i:'66.40',c:'1.78'},{n:'039',i:'69.57',c:'1.78'},{n:'040',i:'72.75',c:'1.78'},{n:'041',i:'75.92',c:'1.78'},{n:'042',i:'82.27',c:'1.78'},{n:'043',i:'88.62',c:'1.78'},{n:'044',i:'94.97',c:'1.78'},{n:'045',i:'101.32',c:'1.78'},{n:'046',i:'107.67',c:'1.78'},{n:'047',i:'114.02',c:'1.78'},{n:'048',i:'120.37',c:'1.78'},{n:'049',i:'126.72',c:'1.78'},{n:'050',i:'133.07',c:'1.78'},{n:'102',i:'1.27',c:'2.62'},{n:'103',i:'2.06',c:'2.62'},{n:'104',i:'2.84',c:'2.62'},{n:'105',i:'3.63',c:'2.62'},{n:'106',i:'4.42',c:'2.62'},{n:'107',i:'5.23',c:'2.62'},{n:'108',i:'6.02',c:'2.62'},{n:'109',i:'7.59',c:'2.62'},{n:'110',i:'9.19',c:'2.62'},{n:'111',i:'10.77',c:'2.62'},{n:'112',i:'12.37',c:'2.62'},{n:'113',i:'13.94',c:'2.62'},{n:'114',i:'15.54',c:'2.62'},{n:'115',i:'17.12',c:'2.62'},{n:'116',i:'18.72',c:'2.62'},{n:'117',i:'20.29',c:'2.62'},{n:'118',i:'21.89',c:'2.62'},{n:'119',i:'23.47',c:'2.62'},{n:'120',i:'25.07',c:'2.62'},{n:'121',i:'26.64',c:'2.62'},{n:'122',i:'28.24',c:'2.62'},{n:'123',i:'29.82',c:'2.62'},{n:'124',i:'31.42',c:'2.62'},{n:'125',i:'32.99',c:'2.62'},{n:'126',i:'34.59',c:'2.62'},{n:'127',i:'36.17',c:'2.62'},{n:'128',i:'37.77',c:'2.62'},{n:'129',i:'39.34',c:'2.62'},{n:'130',i:'40.94',c:'2.62'},{n:'131',i:'42.52',c:'2.62'},{n:'132',i:'44.12',c:'2.62'},{n:'133',i:'45.69',c:'2.62'},{n:'134',i:'47.29',c:'2.62'},{n:'135',i:'48.90',c:'2.62'},{n:'136',i:'50.47',c:'2.62'},{n:'137',i:'52.07',c:'2.62'},{n:'138',i:'53.64',c:'2.62'},{n:'139',i:'55.25',c:'2.62'},{n:'140',i:'56.82',c:'2.62'},{n:'141',i:'58.42',c:'2.62'},{n:'142',i:'59.99',c:'2.62'},{n:'143',i:'61.60',c:'2.62'},{n:'144',i:'63.17',c:'2.62'},{n:'145',i:'64.77',c:'2.62'},{n:'146',i:'66.34',c:'2.62'},{n:'147',i:'67.95',c:'2.62'},{n:'148',i:'69.52',c:'2.62'},{n:'149',i:'71.12',c:'2.62'},{n:'150',i:'72.69',c:'2.62'},{n:'151',i:'75.87',c:'2.62'},{n:'152',i:'82.22',c:'2.62'},{n:'153',i:'88.57',c:'2.62'},{n:'154',i:'94.92',c:'2.62'},{n:'155',i:'101.27',c:'2.62'},{n:'156',i:'107.62',c:'2.62'},{n:'157',i:'113.97',c:'2.62'},{n:'158',i:'120.32',c:'2.62'},{n:'159',i:'126.67',c:'2.62'},{n:'160',i:'133.02',c:'2.62'},{n:'161',i:'139.37',c:'2.62'},{n:'162',i:'145.72',c:'2.62'},{n:'163',i:'152.07',c:'2.62'},{n:'164',i:'158.42',c:'2.62'},{n:'165',i:'164.77',c:'2.62'},{n:'166',i:'171.12',c:'2.62'},{n:'167',i:'177.47',c:'2.62'},{n:'168',i:'183.82',c:'2.62'},{n:'169',i:'190.17',c:'2.62'},{n:'170',i:'196.52',c:'2.62'},{n:'171',i:'202.87',c:'2.62'},{n:'172',i:'209.22',c:'2.62'},{n:'173',i:'215.57',c:'2.62'},{n:'174',i:'221.92',c:'2.62'},{n:'175',i:'228.27',c:'2.62'},{n:'176',i:'234.62',c:'2.62'},{n:'177',i:'240.97',c:'2.62'},{n:'178',i:'247.32',c:'2.62'},{n:'201',i:'4.34',c:'3.53'},{n:'202',i:'5.94',c:'3.53'},{n:'203',i:'7.52',c:'3.53'},{n:'204',i:'9.12',c:'3.53'},{n:'205',i:'10.69',c:'3.53'},{n:'206',i:'12.29',c:'3.53'},{n:'207',i:'13.87',c:'3.53'},{n:'208',i:'15.47',c:'3.53'},{n:'209',i:'17.04',c:'3.53'},{n:'210',i:'18.64',c:'3.53'},{n:'211',i:'20.22',c:'3.53'},{n:'212',i:'21.82',c:'3.53'},{n:'213',i:'23.39',c:'3.53'},{n:'214',i:'24.99',c:'3.53'},{n:'215',i:'26.57',c:'3.53'},{n:'216',i:'28.17',c:'3.53'},{n:'217',i:'29.74',c:'3.53'},{n:'218',i:'31.34',c:'3.53'},{n:'219',i:'32.92',c:'3.53'},{n:'220',i:'34.52',c:'3.53'},{n:'221',i:'36.09',c:'3.53'},{n:'222',i:'37.69',c:'3.53'},{n:'223',i:'40.87',c:'3.53'},{n:'224',i:'44.04',c:'3.53'},{n:'225',i:'47.22',c:'3.53'},{n:'226',i:'50.39',c:'3.53'},{n:'227',i:'53.57',c:'3.53'},{n:'228',i:'56.74',c:'3.53'},{n:'229',i:'59.92',c:'3.53'},{n:'230',i:'63.09',c:'3.53'},{n:'231',i:'66.27',c:'3.53'},{n:'232',i:'69.44',c:'3.53'},{n:'233',i:'72.62',c:'3.53'},{n:'234',i:'75.79',c:'3.53'},{n:'235',i:'78.97',c:'3.53'},{n:'236',i:'82.14',c:'3.53'},{n:'237',i:'85.32',c:'3.53'},{n:'238',i:'88.49',c:'3.53'},{n:'239',i:'91.67',c:'3.53'},{n:'240',i:'94.84',c:'3.53'},{n:'241',i:'98.02',c:'3.53'},{n:'242',i:'101.19',c:'3.53'},{n:'243',i:'104.37',c:'3.53'},{n:'244',i:'107.54',c:'3.53'},{n:'245',i:'110.72',c:'3.53'},{n:'246',i:'113.89',c:'3.53'},{n:'247',i:'117.07',c:'3.53'},{n:'248',i:'120.24',c:'3.53'},{n:'249',i:'123.42',c:'3.53'},{n:'250',i:'126.59',c:'3.53'},{n:'251',i:'129.77',c:'3.53'},{n:'252',i:'132.94',c:'3.53'},{n:'253',i:'136.12',c:'3.53'},{n:'254',i:'139.29',c:'3.53'},{n:'255',i:'142.47',c:'3.53'},{n:'256',i:'145.64',c:'3.53'},{n:'257',i:'148.82',c:'3.53'},{n:'258',i:'151.99',c:'3.53'},{n:'259',i:'158.34',c:'3.53'},{n:'260',i:'164.69',c:'3.53'},{n:'261',i:'171.04',c:'3.53'},{n:'262',i:'177.39',c:'3.53'},{n:'263',i:'183.74',c:'3.53'},{n:'264',i:'190.09',c:'3.53'},{n:'265',i:'196.44',c:'3.53'},{n:'266',i:'202.79',c:'3.53'},{n:'267',i:'209.14',c:'3.53'},{n:'268',i:'215.49',c:'3.53'},{n:'269',i:'221.84',c:'3.53'},{n:'270',i:'228.19',c:'3.53'},{n:'271',i:'234.54',c:'3.53'},{n:'272',i:'240.89',c:'3.53'},{n:'273',i:'247.24',c:'3.53'},{n:'274',i:'253.59',c:'3.53'},{n:'275',i:'266.29',c:'3.53'},{n:'276',i:'278.99',c:'3.53'},{n:'277',i:'291.69',c:'3.53'},{n:'278',i:'304.39',c:'3.53'},{n:'279',i:'329.79',c:'3.53'},{n:'280',i:'355.19',c:'3.53'},{n:'281',i:'380.59',c:'3.53'},{n:'282',i:'405.26',c:'3.53'},{n:'283',i:'430.66',c:'3.53'},{n:'284',i:'456.06',c:'3.53'},{n:'309',i:'10.46',c:'5.33'},{n:'310',i:'12.07',c:'5.33'},{n:'311',i:'13.64',c:'5.33'},{n:'312',i:'15.24',c:'5.33'},{n:'313',i:'16.81',c:'5.33'},{n:'314',i:'18.42',c:'5.33'},{n:'315',i:'19.99',c:'5.33'},{n:'316',i:'21.59',c:'5.33'},{n:'317',i:'23.16',c:'5.33'},{n:'318',i:'24.77',c:'5.33'},{n:'319',i:'26.34',c:'5.33'},{n:'320',i:'27.94',c:'5.33'},{n:'321',i:'29.51',c:'5.33'},{n:'322',i:'31.12',c:'5.33'},{n:'323',i:'32.69',c:'5.33'},{n:'324',i:'34.29',c:'5.33'},{n:'325',i:'37.47',c:'5.33'},{n:'326',i:'40.64',c:'5.33'},{n:'327',i:'43.82',c:'5.33'},{n:'328',i:'46.99',c:'5.33'},{n:'329',i:'50.17',c:'5.33'},{n:'330',i:'53.34',c:'5.33'},{n:'331',i:'56.52',c:'5.33'},{n:'332',i:'59.69',c:'5.33'},{n:'333',i:'62.87',c:'5.33'},{n:'334',i:'66.04',c:'5.33'},{n:'335',i:'69.22',c:'5.33'},{n:'336',i:'72.39',c:'5.33'},{n:'337',i:'75.57',c:'5.33'},{n:'338',i:'78.74',c:'5.33'},{n:'339',i:'81.92',c:'5.33'},{n:'340',i:'85.09',c:'5.33'},{n:'341',i:'88.27',c:'5.33'},{n:'342',i:'91.44',c:'5.33'},{n:'343',i:'94.62',c:'5.33'},{n:'344',i:'97.79',c:'5.33'},{n:'345',i:'100.97',c:'5.33'},{n:'346',i:'104.14',c:'5.33'},{n:'347',i:'107.32',c:'5.33'},{n:'348',i:'110.49',c:'5.33'},{n:'349',i:'113.67',c:'5.33'},{n:'350',i:'116.84',c:'5.33'},{n:'351',i:'120.02',c:'5.33'},{n:'352',i:'123.19',c:'5.33'},{n:'353',i:'126.37',c:'5.33'},{n:'354',i:'129.54',c:'5.33'},{n:'355',i:'132.72',c:'5.33'},{n:'356',i:'135.89',c:'5.33'},{n:'357',i:'139.07',c:'5.33'},{n:'358',i:'142.24',c:'5.33'},{n:'359',i:'145.42',c:'5.33'},{n:'360',i:'148.59',c:'5.33'},{n:'361',i:'151.77',c:'5.33'},{n:'362',i:'158.42',c:'5.33'},{n:'363',i:'164.47',c:'5.33'},{n:'364',i:'170.82',c:'5.33'},{n:'365',i:'177.17',c:'5.33'},{n:'366',i:'183.52',c:'5.33'},{n:'367',i:'189.97',c:'5.33'},{n:'368',i:'196.22',c:'5.33'},{n:'369',i:'202.57',c:'5.33'},{n:'370',i:'208.92',c:'5.33'},{n:'371',i:'215.27',c:'5.33'},{n:'372',i:'221.62',c:'5.33'},{n:'373',i:'227.97',c:'5.33'},{n:'374',i:'234.32',c:'5.33'},{n:'375',i:'240.67',c:'5.33'},{n:'376',i:'247.02',c:'5.33'},{n:'377',i:'253.37',c:'5.33'},{n:'378',i:'266.37',c:'5.33'},{n:'379',i:'278.77',c:'5.33'},{n:'380',i:'291.47',c:'5.33'},{n:'381',i:'304.17',c:'5.33'},{n:'382',i:'329.57',c:'5.33'},{n:'383',i:'354.97',c:'5.33'},{n:'384',i:'380.37',c:'5.33'},{n:'385',i:'405.26',c:'5.33'},{n:'386',i:'430.65',c:'5.33'},{n:'387',i:'456.06',c:'5.33'},{n:'388',i:'481.41',c:'5.33'},{n:'389',i:'506.81',c:'5.33'},{n:'390',i:'532.28',c:'5.33'},{n:'391',i:'557.68',c:'5.33'},{n:'392',i:'582.68',c:'5.33'},{n:'393',i:'608.38',c:'5.33'},{n:'394',i:'633.48',c:'5.33'},{n:'395',i:'658.88',c:'5.33'},{n:'425',i:'113.67',c:'6.99'},{n:'426',i:'116.84',c:'6.99'},{n:'427',i:'120.02',c:'6.99'},{n:'428',i:'123.19',c:'6.99'},{n:'429',i:'126.37',c:'6.99'},{n:'430',i:'129.54',c:'6.99'},{n:'431',i:'132.72',c:'6.99'},{n:'432',i:'135.89',c:'6.99'},{n:'433',i:'139.07',c:'6.99'},{n:'434',i:'142.24',c:'6.99'},{n:'435',i:'145.42',c:'6.99'},{n:'436',i:'148.59',c:'6.99'},{n:'437',i:'151.77',c:'6.99'},{n:'438',i:'158.12',c:'6.99'},{n:'439',i:'164.47',c:'6.99'},{n:'440',i:'170.82',c:'6.99'},{n:'441',i:'177.17',c:'6.99'},{n:'442',i:'183.52',c:'6.99'},{n:'443',i:'189.87',c:'6.99'},{n:'444',i:'196.22',c:'6.99'},{n:'445',i:'202.57',c:'6.99'},{n:'446',i:'215.27',c:'6.99'},{n:'447',i:'227.97',c:'6.99'},{n:'448',i:'240.67',c:'6.99'},{n:'449',i:'253.37',c:'6.99'},{n:'450',i:'266.07',c:'6.99'},{n:'451',i:'278.77',c:'6.99'},{n:'452',i:'291.47',c:'6.99'},{n:'453',i:'304.17',c:'6.99'},{n:'454',i:'316.87',c:'6.99'},{n:'455',i:'329.57',c:'6.99'},{n:'456',i:'342.27',c:'6.99'},{n:'457',i:'354.97',c:'6.99'},{n:'458',i:'367.67',c:'6.99'},{n:'459',i:'380.37',c:'6.99'},{n:'460',i:'393.07',c:'6.99'},{n:'461',i:'405.26',c:'6.99'},{n:'462',i:'417.96',c:'6.99'},{n:'463',i:'430.66',c:'6.99'},{n:'464',i:'443.36',c:'6.99'},{n:'465',i:'456.06',c:'6.99'},{n:'466',i:'468.76',c:'6.99'},{n:'467',i:'481.46',c:'6.99'},{n:'468',i:'494.16',c:'6.99'},{n:'469',i:'506.86',c:'6.99'},{n:'470',i:'532.26',c:'6.99'},{n:'471',i:'557.66',c:'6.99'},{n:'472',i:'582.68',c:'6.99'},{n:'473',i:'608.08',c:'6.99'},{n:'474',i:'633.48',c:'6.99'},{n:'475',i:'658.88',c:'6.99'},{n:'901',i:'4.07',c:'1.42'},{n:'902',i:'6.07',c:'1.63'},{n:'903',i:'7.65',c:'1.63'},{n:'904',i:'8.92',c:'1.83'},{n:'905',i:'10.52',c:'1.83'},{n:'906',i:'11.89',c:'1.98'},{n:'907',i:'13.46',c:'2.08'},{n:'908',i:'16.36',c:'2.21'},{n:'909',i:'17.94',c:'2.46'},{n:'910',i:'19.18',c:'2.46'},{n:'911',i:'21.92',c:'2.95'},{n:'912',i:'23.47',c:'2.95'},{n:'913',i:'25.04',c:'2.95'},{n:'914',i:'26.60',c:'2.95'},{n:'916',i:'29.75',c:'2.95'},{n:'918',i:'34.42',c:'2.95'},{n:'920',i:'37.46',c:'3.00'},{n:'924',i:'43.68',c:'3.00'},{n:'928',i:'53.09',c:'3.00'},{n:'932',i:'59.36',c:'3.00'}],
    jis: {
      P: [{n:'P3',i:'2.80',c:'1.90'},{n:'P4',i:'3.80',c:'1.90'},{n:'P5',i:'4.80',c:'1.90'},{n:'P6',i:'5.80',c:'1.90'},{n:'P7',i:'6.80',c:'1.90'},{n:'P8',i:'7.80',c:'1.90'},{n:'P9',i:'8.80',c:'1.90'},{n:'P10',i:'9.80',c:'1.90'},{n:'P10A',i:'9.80',c:'2.40'},{n:'P11',i:'10.80',c:'2.40'},{n:'P11.2',i:'11.00',c:'2.40'},{n:'P12',i:'11.80',c:'2.40'},{n:'P12.5',i:'12.30',c:'2.40'},{n:'P14',i:'13.80',c:'2.40'},{n:'P15',i:'14.80',c:'2.40'},{n:'P16',i:'15.80',c:'2.40'},{n:'P18',i:'17.80',c:'2.40'},{n:'P20',i:'19.80',c:'2.40'},{n:'P21',i:'20.80',c:'2.40'},{n:'P22',i:'21.80',c:'2.40'},{n:'P22A',i:'21.70',c:'3.50'},{n:'P22.4',i:'22.70',c:'3.50'},{n:'P24',i:'23.70',c:'3.50'},{n:'P25',i:'24.70',c:'3.50'},{n:'P25.5',i:'25.20',c:'3.50'},{n:'P26',i:'25.70',c:'3.50'},{n:'P28',i:'27.70',c:'3.50'},{n:'P29',i:'28.70',c:'3.50'},{n:'P29.5',i:'29.20',c:'3.50'},{n:'P30',i:'29.70',c:'3.50'},{n:'P31',i:'30.70',c:'3.50'},{n:'P31.5',i:'31.20',c:'3.50'},{n:'P32',i:'31.70',c:'3.50'},{n:'P34',i:'33.70',c:'3.50'},{n:'P35',i:'34.70',c:'3.50'},{n:'P35.5',i:'35.20',c:'3.50'},{n:'P36',i:'35.70',c:'3.50'},{n:'P38',i:'37.70',c:'3.50'},{n:'P39',i:'38.70',c:'3.50'},{n:'P40',i:'39.70',c:'3.50'},{n:'P41',i:'40.70',c:'3.50'},{n:'P42',i:'41.70',c:'3.50'},{n:'P44',i:'43.70',c:'3.50'},{n:'P45',i:'44.70',c:'3.50'},{n:'P46',i:'45.70',c:'3.50'},{n:'P48',i:'47.70',c:'3.50'},{n:'P48A',i:'47.60',c:'5.70'},{n:'P49',i:'48.70',c:'3.50'},{n:'P50',i:'49.70',c:'3.50'},{n:'P50A',i:'49.60',c:'5.70'},{n:'P52',i:'51.60',c:'5.70'},{n:'P53',i:'52.60',c:'5.70'},{n:'P55',i:'54.60',c:'5.70'},{n:'P56',i:'55.60',c:'5.70'},{n:'P58',i:'57.60',c:'5.70'},{n:'P60',i:'59.60',c:'5.70'},{n:'P62',i:'61.60',c:'5.70'},{n:'P63',i:'62.60',c:'5.70'},{n:'P65',i:'64.60',c:'5.70'},{n:'P67',i:'66.60',c:'5.70'},{n:'P70',i:'69.60',c:'5.70'},{n:'P71',i:'70.60',c:'5.70'},{n:'P75',i:'74.60',c:'5.70'},{n:'P80',i:'79.60',c:'5.70'},{n:'P85',i:'84.60',c:'5.70'},{n:'P90',i:'89.60',c:'5.70'},{n:'P95',i:'94.60',c:'5.70'},{n:'P100',i:'99.60',c:'5.70'},{n:'P102',i:'101.60',c:'5.70'},{n:'P105',i:'104.60',c:'5.70'},{n:'P110',i:'109.60',c:'5.70'},{n:'P112',i:'111.60',c:'5.70'},{n:'P115',i:'114.60',c:'5.70'},{n:'P120',i:'119.60',c:'5.70'},{n:'P125',i:'124.60',c:'5.70'},{n:'P130',i:'129.60',c:'5.70'},{n:'P132',i:'131.60',c:'5.70'},{n:'P135',i:'134.60',c:'5.70'},{n:'P140',i:'139.60',c:'5.70'},{n:'P145',i:'144.60',c:'5.70'},{n:'P150',i:'149.60',c:'5.70'},{n:'P150A',i:'149.50',c:'8.40'},{n:'P155',i:'154.50',c:'8.40'},{n:'P160',i:'159.50',c:'8.40'},{n:'P165',i:'164.50',c:'8.40'},{n:'P170',i:'169.50',c:'8.40'},{n:'P175',i:'174.50',c:'8.40'},{n:'P180',i:'179.50',c:'8.40'},{n:'P185',i:'184.50',c:'8.40'},{n:'P190',i:'189.50',c:'8.40'},{n:'P195',i:'194.50',c:'8.40'},{n:'P200',i:'199.50',c:'8.40'},{n:'P205',i:'204.50',c:'8.40'},{n:'P209',i:'208.50',c:'8.40'},{n:'P210',i:'209.50',c:'8.40'},{n:'P215',i:'214.50',c:'8.40'},{n:'P220',i:'219.50',c:'8.40'},{n:'P225',i:'224.50',c:'8.40'},{n:'P230',i:'229.50',c:'8.40'},{n:'P235',i:'234.50',c:'8.40'},{n:'P240',i:'239.50',c:'8.40'},{n:'P245',i:'244.50',c:'8.40'},{n:'P250',i:'249.50',c:'8.40'},{n:'P255',i:'254.50',c:'8.40'},{n:'P260',i:'259.50',c:'8.40'},{n:'P265',i:'264.50',c:'8.40'},{n:'P270',i:'269.50',c:'8.40'},{n:'P275',i:'274.50',c:'8.40'},{n:'P280',i:'279.50',c:'8.40'},{n:'P285',i:'284.50',c:'8.40'},{n:'P290',i:'289.50',c:'8.40'},{n:'P295',i:'294.50',c:'8.40'},{n:'P300',i:'299.50',c:'8.40'},{n:'P315',i:'314.50',c:'8.40'},{n:'P320',i:'319.50',c:'8.40'},{n:'P335',i:'329.50',c:'8.40'},{n:'P340',i:'339.50',c:'8.40'},{n:'P355',i:'354.50',c:'8.40'},{n:'P360',i:'359.50',c:'8.40'},{n:'P375',i:'374.50',c:'8.40'},{n:'P385',i:'384.50',c:'8.40'},{n:'P400',i:'399.50',c:'8.40'}],
      G: [{n:'G25',i:'24.40',c:'3.10'},{n:'G30',i:'29.40',c:'3.10'},{n:'G35',i:'34.40',c:'3.10'},{n:'G40',i:'39.40',c:'3.10'},{n:'G45',i:'44.40',c:'3.10'},{n:'G50',i:'49.40',c:'3.10'},{n:'G55',i:'54.40',c:'3.10'},{n:'G60',i:'59.40',c:'3.10'},{n:'G65',i:'64.40',c:'3.10'},{n:'G70',i:'69.40',c:'3.10'},{n:'G75',i:'74.40',c:'3.10'},{n:'G80',i:'79.40',c:'3.10'},{n:'G85',i:'84.40',c:'3.10'},{n:'G90',i:'89.40',c:'3.10'},{n:'G95',i:'94.40',c:'3.10'},{n:'G100',i:'99.40',c:'3.10'},{n:'G105',i:'104.40',c:'3.10'},{n:'G110',i:'109.40',c:'3.10'},{n:'G115',i:'114.40',c:'3.10'},{n:'G120',i:'119.40',c:'3.10'},{n:'G125',i:'124.40',c:'3.10'},{n:'G130',i:'129.40',c:'3.10'},{n:'G135',i:'134.40',c:'3.10'},{n:'G140',i:'139.40',c:'3.10'},{n:'G145',i:'144.40',c:'3.10'},{n:'G150',i:'149.40',c:'5.70'},{n:'G155',i:'154.30',c:'5.70'},{n:'G160',i:'159.30',c:'5.70'},{n:'G165',i:'164.30',c:'5.70'},{n:'G170',i:'169.30',c:'5.70'},{n:'G175',i:'174.30',c:'5.70'},{n:'G180',i:'179.30',c:'5.70'},{n:'G185',i:'184.30',c:'5.70'},{n:'G190',i:'189.30',c:'5.70'},{n:'G195',i:'194.30',c:'5.70'},{n:'G200',i:'199.30',c:'5.70'},{n:'G210',i:'209.30',c:'5.70'},{n:'G220',i:'219.30',c:'5.70'},{n:'G230',i:'229.30',c:'5.70'},{n:'G240',i:'239.30',c:'5.70'},{n:'G250',i:'249.30',c:'5.70'},{n:'G260',i:'259.30',c:'5.70'},{n:'G270',i:'269.30',c:'5.70'},{n:'G280',i:'279.30',c:'5.70'},{n:'G290',i:'289.30',c:'5.70'},{n:'G300',i:'299.30',c:'5.70'}],
      S: [{n:'S-2',i:'1.5',c:'1.5'},{n:'S-3',i:'2.5',c:'1.5'},{n:'S-4',i:'3.5',c:'1.5'},{n:'S-5',i:'4.5',c:'1.5'},{n:'S-6',i:'5.5',c:'1.5'},{n:'S-7',i:'6.5',c:'1.5'},{n:'S-8',i:'7.5',c:'1.5'},{n:'S-9',i:'8.5',c:'1.5'},{n:'S-10',i:'9.5',c:'1.5'},{n:'S-11.2',i:'10.7',c:'1.5'},{n:'S-12',i:'11.5',c:'1.5'},{n:'S-12.5',i:'12.0',c:'1.5'},{n:'S-14',i:'13.5',c:'1.5'},{n:'S-15',i:'14.5',c:'1.5'},{n:'S-16',i:'15.5',c:'1.5'},{n:'S-18',i:'17.5',c:'1.5'},{n:'S-19',i:'18.5',c:'1.5'},{n:'S-20',i:'19.5',c:'1.5'},{n:'S-22',i:'21.5',c:'1.5'},{n:'S-22.4',i:'21.9',c:'2.0'},{n:'S-24',i:'23.5',c:'2.0'},{n:'S-25',i:'24.5',c:'2.0'},{n:'S-26',i:'25.5',c:'2.0'},{n:'S-28',i:'27.5',c:'2.0'},{n:'S-29',i:'28.5',c:'2.0'},{n:'S-30',i:'29.5',c:'2.0'},{n:'S-31.5',i:'31.0',c:'2.0'},{n:'S-32',i:'31.5',c:'2.0'},{n:'S-32.5',i:'32.0',c:'2.0'},{n:'S-34',i:'33.5',c:'2.0'},{n:'S-35',i:'34.5',c:'2.0'},{n:'S-35.5',i:'35.0',c:'2.0'},{n:'S-36',i:'35.5',c:'2.0'},{n:'S-38',i:'37.5',c:'2.0'},{n:'S-38.5',i:'38.0',c:'2.0'},{n:'S-39',i:'38.5',c:'2.0'},{n:'S-40',i:'39.5',c:'2.0'},{n:'S-42',i:'41.5',c:'2.0'},{n:'S-44',i:'43.5',c:'2.0'},{n:'S-45',i:'44.5',c:'2.0'},{n:'S-46',i:'45.5',c:'2.0'},{n:'S-48',i:'47.5',c:'2.0'},{n:'S-50',i:'49.5',c:'2.0'},{n:'S-53',i:'52.5',c:'2.0'},{n:'S-55',i:'54.5',c:'2.0'},{n:'S-56',i:'55.5',c:'2.0'},{n:'S-60',i:'59.5',c:'2.0'},{n:'S-63',i:'62.5',c:'2.0'},{n:'S-65',i:'64.5',c:'2.0'},{n:'S-67',i:'66.5',c:'2.0'},{n:'S-70',i:'69.5',c:'2.0'},{n:'S-71',i:'70.5',c:'2.0'},{n:'S-75',i:'74.5',c:'2.0'},{n:'S-80',i:'79.5',c:'2.0'},{n:'S-85',i:'84.5',c:'2.0'},{n:'S-90',i:'89.5',c:'2.0'},{n:'S-95',i:'94.5',c:'2.0'},{n:'S-100',i:'99.5',c:'2.0'},{n:'S-105',i:'104.5',c:'2.0'},{n:'S-110',i:'119.5',c:'2.0'},{n:'S-112',i:'111.5',c:'2.0'},{n:'S-115',i:'114.5',c:'2.0'},{n:'S-120',i:'119.5',c:'2.0'},{n:'S-125',i:'124.5',c:'2.0'},{n:'S-130',i:'129.5',c:'2.0'},{n:'S-132',i:'131.5',c:'2.0'},{n:'S-135',i:'134.5',c:'2.0'},{n:'S-140',i:'139.5',c:'2.0'},{n:'S-145',i:'144.5',c:'2.0'},{n:'S-150',i:'149.5',c:'2.0'},{n:'S-160',i:'159.5',c:'2.0'}],
      V: [{n:'V-9.5',i:'9.0',c:'4'},{n:'V-10',i:'9.5',c:'4'},{n:'V-15',i:'14.5',c:'4'},{n:'V-20',i:'19.5',c:'4'},{n:'V-24',i:'23.5',c:'4'},{n:'V-25',i:'24.5',c:'4'},{n:'V-27.5',i:'27.0',c:'4'},{n:'V-28.5',i:'28.0',c:'4'},{n:'V-30',i:'29.5',c:'4'},{n:'V-34',i:'33.5',c:'4'},{n:'V-35',i:'34.5',c:'4'},{n:'V-36',i:'35.5',c:'4'},{n:'V-40',i:'39.5',c:'4'},{n:'V-45',i:'44.5',c:'4'},{n:'V-48.5',i:'48.0',c:'4'},{n:'V-50',i:'49.5',c:'4'},{n:'V-55',i:'54.5',c:'4'},{n:'V-57.5',i:'57.0',c:'4'},{n:'V-60',i:'59.5',c:'4'},{n:'V-65',i:'64.5',c:'4'},{n:'V-70',i:'69.0',c:'4'},{n:'V-75',i:'74.0',c:'4'},{n:'V-80',i:'79.0',c:'4'},{n:'V-85',i:'84.0',c:'4'},{n:'V-90',i:'89.0',c:'4'},{n:'V-95',i:'94.0',c:'4'},{n:'V-100',i:'99.0',c:'4'},{n:'V-105',i:'104.0',c:'4'},{n:'V-110',i:'109.0',c:'4'},{n:'V-115',i:'114.0',c:'4'},{n:'V-120',i:'119.0',c:'4'},{n:'V-125',i:'124.0',c:'4'},{n:'V-130',i:'129.0',c:'4'},{n:'V-135',i:'134.0',c:'4'},{n:'V-140',i:'137.0',c:'4'},{n:'V-150',i:'149.0',c:'4'},{n:'V-160',i:'159.0',c:'4'},{n:'V-170',i:'169.0',c:'4'},{n:'V-180',i:'179.0',c:'4'},{n:'V-190',i:'189.0',c:'4'},{n:'V-200',i:'199.0',c:'4'}]
    }
  };

  // ---------------------------------------------------------------
  // 피스톤링 세부 기술자료 (조인트 형식별 / 소재별) — 클릭 시 상세 표 노출
  // ---------------------------------------------------------------
  var PISTON_DETAIL = {
    cards: [
      { key:'joint', ko:'조인트 형식별 상세', en:'Joint Design Details',
        dko:'인터록·스텝컷·버트컷·앵글버트컷·후크 조인트 등 조인트 형상별 구조와 대응 직경을 도식과 함께 확인하세요.',
        den:'Review the structure and diameter range of interlock, step-cut, butt-cut, angle-butt-cut and hook joint geometries, with diagrams.' },
      { key:'material', ko:'소재별 상세', en:'Material Details',
        dko:'표준 재질인 고강도 주철(구상흑연주철)을 비롯해 주철·브론즈·니켈 레지스트·스테인리스 등 소재별 특성과 기계적 물성을 확인하세요.',
        den:'Review the properties of each ring material, from the standard high-strength ductile iron to cast iron, bronze, Ni-Resist and stainless steel.' }
    ],
    joint: {
      ko:'조인트 형식별 상세', en:'Joint Design Details',
      bodyKo:'피스톤 링의 조인트(절개) 형상은 밀봉·배유 성능과 조립 방식을 좌우합니다. 대표적인 조인트 형식은 다음과 같습니다.',
      bodyEn:'The ring joint (cut) geometry determines sealing/drainage behavior and how the ring is assembled. Representative joint types are listed below.',
      rows:[
        {img:'images/web/joint-interlock.jpg',ko:'인터록 조인트',en:'Interlock Joint',dko:'양방향 밀봉이 가능하며 개구부를 접합부 손상 없이 통과할 수 있어 유압 부품에 널리 쓰입니다.',den:'A bi-directional joint that can pass over open ports without damaging the joint tips — widely used in hydraulic components.',dia:'약 38~1,830mm (1.5"~72")'},
        {img:'images/web/joint-stepcut.jpg',ko:'스텝 컷 조인트',en:'Step Cut Joint',dko:'일정 수준의 누설이 허용되는 조건에서 사용하는 양방향 조인트입니다.',den:'A bi-directional joint used where a controlled amount of leakage is acceptable.',dia:'약 16~1,830mm (0.62"~72")'},
        {img:'images/web/joint-buttcut.jpg',ko:'버트 컷 조인트',en:'Butt Cut Joint',dko:'가장 널리 쓰이는 기본형 조인트입니다.',den:'The most common, basic joint style.',dia:'약 9.5~1,830mm (0.375"~72")'},
        {img:'images/web/joint-anglebuttcut.jpg',ko:'앵글 버트 컷 조인트',en:'Angle Butt Cut Joint',dko:'보어 내벽에 접합선 마모 자국이 남는 것을 방지하기 위해 사용합니다.',den:'Used to prevent the joint line from wearing a visible mark into the bore wall.',dia:'약 9.5~1,830mm (0.375"~72")'},
        {img:'images/web/joint-hook.jpg',ko:'후크 조인트',en:'Hook Joint',dko:'링이 압축된 상태로 최종 작동 내경에 도달해야 하는 카운터보어·블라인드 조립 등에 사용되며 SAE J281 규격을 따릅니다.',den:'Used where the ring must stay compressed to reach its final working bore diameter — e.g. counterbore or blind assembly — and follows the SAE J281 standard.',dia:'약 16~1,830mm (0.62"~72")'}
      ]
    },
    material: {
      ko:'소재별 상세', en:'Material Details',
      bodyKo:'표준 재질은 고강도 주철(구상흑연주철)이며, 사용 환경에 따라 아래 대안 소재를 지정할 수 있습니다.',
      bodyEn:'The standard material is high-strength ductile (nodular graphite) iron; the alternatives below can be specified to suit the operating environment.',
      rows:[
        {mat:'고강도 주철 (표준)',matEn:'Ductile Iron (Standard)',ko:'전체 생산량의 대부분을 차지하는 기본 재질로, 페라이트 기지에 흑연이 고르게 분포합니다. ASTM A-536 기준 인장강도 약 448MPa(65,000psi)·항복강도 약 310MPa(45,000psi)·연신율 약 12%·경도 브리넬 131~220 수준입니다.',en:'The default material for most production, with graphite evenly dispersed in a ferritic matrix. Per ASTM A-536: tensile strength ≈448MPa (65,000psi), yield strength ≈310MPa (45,000psi), elongation ≈12%, hardness 131–220 Brinell.'},
        {mat:'주철',matEn:'Cast Iron',ko:'Class 30/40급으로 대응 가능합니다.',en:'Available in Class 30/40 grades.'},
        {mat:'브론즈 합금',matEn:'Bronze Alloy',ko:'증기·해수·합성유 등 철·강을 부식시킬 수 있는 유체 환경에 적합합니다.',en:'Suited to fluid environments — steam, seawater, synthetic fluids — that would corrode iron or steel.'},
        {mat:'니켈 레지스트 주철',matEn:'Ni-Resist Cast Iron',ko:'내식성·내마모성이 우수하며 중~고온 환경에서도 물성을 유지합니다.',en:'Offers strong corrosion and wear resistance and retains its properties at moderate-to-high temperatures.'},
        {mat:'스테인리스강 · 특수합금',matEn:'Stainless Steel & Super Alloys',ko:'고강도가 필요하거나 극고온에서도 물성 유지가 필요한 용도에 사용합니다.',en:'Used where higher strength is required, or where properties must hold up under extremely high temperatures.'},
        {mat:'플라스틱 (PTFE 등)',matEn:'Plastics / PTFE',ko:'저마찰·내화학 등 특수 용도에 맞춰 다양한 컴파운드로 대응합니다.',en:'A range of compounds available for special low-friction or chemically resistant applications.'}
      ]
    }
  };

  // ---------------------------------------------------------------
  // 스프링에너자이드씰 전용: 설계 / 자켓재질 / 금속재질 서브탭 콘텐츠
  // ---------------------------------------------------------------
  var SPRING_TABS = {
    design:{
      ko:'설계', en:'Design',
      bodyKo:'스프링에너자이드씰은 적용 형태(정적·동적)와 운동 방향(반경방향·축방향)에 따라 적합한 스프링 형태와 씰 구조가 달라집니다. 아래는 용도별 선정 가이드와, 마찰·압출 간극·표면 조도 등 설계 시 참고할 기준입니다.',
      bodyEn:'The best spring geometry and seal structure for a spring-energized seal depends on the application type (static or dynamic) and direction of motion (radial or axial). Below is a selection guide by application, along with friction, extrusion-gap and surface-finish reference data for design.',
      items:[
        {ko:'정적 페이스씰',en:'Static Face Seals',
          dko:'볼트 체결 커버·플랜지 등 상대 운동이 거의 없는 면씰 적용입니다. 헬리컬 와운드 스프링은 중~고하중을 형성해 넓은 압력·온도 범위에 대응하며, 고진공·초저온·화학 환경처럼 누설 허용치가 엄격한 경우에는 갭이 없는(gap-less) 스프링 구조로 높은 접촉하중을 내는 타입이 유리합니다. 하중이 낮고 하우징 변형이 큰 경우에는 캔틸레버형이 적합합니다.',
          den:'Face-seal applications with essentially no relative motion, such as bolted covers and flanges. Helical-wound springs generate moderate-to-high loads across a wide pressure and temperature range; for tight-leakage duty in high vacuum, cryogenic or aggressive-chemical service, a gap-less spring geometry with high, uniform contact load is preferred. Where loads must stay low or the housing is prone to distortion, a cantilever-spring design fits better.'},
        {ko:'동적 반경방향씰 — 왕복운동',en:'Dynamic Radial Seals — Reciprocating',
          dko:'로드·피스톤 씰링에 가장 널리 쓰이는 형태입니다. 캔틸레버 스프링은 저~중하중으로 마찰이 낮고 수명이 길며, U자형 스프링 형상은 에지 접촉과 스크레이핑 작용에 유리해 이물질 배출 성능이 좋습니다. 더 가혹한 조건(항공기 유압 등)에는 헬리컬 와운드형이 적합하고, 대형 씰 홈(약 3.2mm 이상)에는 처짐량이 크고 내마모성이 뛰어난 더블 와운드형을 사용합니다. 고압 조건에서는 백업링을 병행 적용합니다.',
          den:'The most common configuration for rod and piston seals. Cantilever springs give low-to-moderate load, low friction and long life; a U-shaped spring geometry provides edge contact with a scraping action that sheds contaminants well. Helical-wound springs suit more demanding duty such as aircraft hydraulics, while double-wrapped springs — with high deflection capacity and excellent wear resistance — are used in larger glands (roughly 3.2mm and up). Back-up rings are added for high-pressure service.'},
        {ko:'동적 반경방향씰 — 회전운동',en:'Dynamic Radial Seals — Rotary',
          dko:'회전·요동 운동에서는 마모가 진행되며 씰이 샤프트와 함께 회전하려는 경향이 생길 수 있어, 필요 시 씰 자켓을 홈에 고정하는 플랜지 구조를 적용합니다. 캔틸레버형은 에지 접촉으로 유체·이물질 제어와 저마찰 특성이 우수하며, 소단면(약 3.2mm 미만)의 유니디렉셔널 와이어 스프링형은 큰 변형 허용량으로 편심·진동에 강합니다. 저속·고압 조건에는 더블 와운드형이나 헬리컬 와운드형이 적합하며, 헬리컬 와운드형은 극저온 등 온도 변화가 큰 밸브·챔버 액추에이터 샤프트 씰링에 특히 우수합니다.',
          den:'In rotary or oscillating motion, wear can cause the seal to gradually rotate with the shaft; where this matters, a flanged jacket design locks the seal into the gland. Cantilever springs give edge contact for good fluid/debris control and low friction. Unidirectional wire springs, used mainly in small cross-sections (under about 3.2mm), offer high deflection capacity that tolerates runout and misalignment well. Double-wrapped or helical-wound springs suit slower, higher-pressure duty, and helical-wound springs are especially well suited to actuator shaft sealing in valves and chambers exposed to wide temperature swings such as cryogenic service.'},
        {ko:'극한 환경(초저온·고진공) 고려사항',en:'Extreme Environment Considerations',
          dko:'초저온(약 -60℉/-51℃ 이하) 환경에서는 폴리머 자켓의 열수축이 금속 하드웨어보다 훨씬 크게 나타나므로 일반 조건과 다른 설계 여유가 필요합니다. 면씰은 반경방향씰보다 저온 영향을 덜 받으며, 반경방향씰은 별도의 저온용 설계와 백업링 형상(간극 또는 경사 절단)이 필요할 수 있습니다. 극저온·고진공·특수 화학 환경의 씰 설계는 사전 문의를 권장합니다.',
          den:'Below roughly -60°F (-51°C), the polymer jacket\'s thermal shrinkage becomes much larger than that of the surrounding metal hardware, so cryogenic designs need different clearances than standard conditions. Face seals are less affected by cold than radial seals; radial seals in cryogenic service often need a dedicated low-temperature design, sometimes including a gapped or angle-cut back-up ring. For cryogenic, high-vacuum or specialty-chemical service, we recommend consulting us during the design stage.'}
      ],
      frictionKo:'마찰력은 씰 접촉면과 상대 하드웨어(평면·구면·샤프트) 사이에서 발생하는 저항으로, 표면 조도·온도·매체·압력의 영향을 받습니다. 신품 씰은 접촉폭이 좁아 초기 마찰이 다소 높으며, 짧은 초기 마모(러닝인) 기간 후 안정됩니다. 매체 압력이 커질수록 스프링 하중에 압력 하중이 더해져 마찰과 구동 저항이 함께 증가합니다. 대략적인 회전 토크와 직선 마찰력은 아래 식으로 근사할 수 있습니다.',
      frictionEn:'Friction is the resistance generated between the seal\'s contact face and the mating hardware — a flat surface, a sphere, or a shaft — and is influenced by surface finish, temperature, media and pressure. A new seal has a narrower contact width and slightly higher initial friction, which settles down after a short break-in period. As media pressure rises, it adds to the spring load and increases friction and drag together. Rotating torque and linear friction can be roughly approximated with the formulas below.',
      formulas:[
        {ko:'회전 토크(in·lbf) = (S+P) × D × μ × R × π', en:'Rotating Torque (in·lbf) = (S+P) × D × μ × R × π'},
        {ko:'직선 마찰력(lbf) = (S+P) × D × μ × π', en:'Linear Friction (lbf) = (S+P) × D × μ × π'}
      ],
      formulaNoteKo:'S = 스프링 하중, P = 매체 압력에 의한 하중, μ = 소재 마찰계수, D = 동적 접촉면 직경, R = D/2',
      formulaNoteEn:'S = spring load, P = pressure-induced load, μ = material coefficient of friction, D = diameter of the dynamic surface, R = D/2',
      extrusionTitleKo:'압출 간극(Extrusion Gap) 기준', extrusionTitleEn:'Seal Extrusion Gap Guidelines',
      extrusionKo:'고압·고온 조건에서는 씰 배후(하류측)의 압출 간극 — 하우징과 샤프트/보어 사이의 틈새 — 이 씰 수명을 크게 좌우합니다. 간극이 과도하면 씰 소재가 틈새로 밀려나가 조기 파손으로 이어지므로 간극은 항상 최소로 유지하고, 힐(heel) 두께를 늘리거나 별도 백업링을 적용해 내압출성을 높입니다. 백업링은 씰보다 경도가 높은 소재를 사용하며, 대표적으로 PEEK(무충전/유리섬유/그라파이트-PTFE 충전)와 PTFE(고카본/고유리섬유/브론즈 충전) 계열이 있습니다. 아래는 압력 구간별 허용 압출 간극(직경 기준)의 대략적인 기준입니다.',
      extrusionEn:'At high pressures and temperatures, the extrusion gap behind the seal — the clearance between the housing and the shaft or bore — becomes critical to service life. Excessive clearance lets the seal material extrude into the gap and fail prematurely, so the gap should always be kept to a minimum; increasing the seal\'s heel thickness or adding a separate back-up ring improves extrusion resistance. Back-up rings use a material harder than the seal itself — typically PEEK (unfilled, glass-fiber or graphite/PTFE filled) or PTFE (high-carbon, high-glass-fiber or bronze filled). The table below gives approximate allowable extrusion gaps (diametral) by pressure range.',
      extrusionCols:[
        {ko:'씰 구성',en:'Configuration'},
        {ko:'~2,000 psi (~138 bar)',en:'~2,000 psi (~138 bar)',short:true},
        {ko:'~4,000 psi (~276 bar)',en:'~4,000 psi (~276 bar)',short:true},
        {ko:'~6,000 psi (~414 bar)',en:'~6,000 psi (~414 bar)',short:true},
        {ko:'~15,000 psi (~1,034 bar)',en:'~15,000 psi (~1,034 bar)',short:true}
      ],
      extrusionRows:[
        [{ko:'표준 씰',en:'Standard Seal'}, '0.004″ (0.10mm)', '0.003″ (0.08mm)', '0.002″ (0.05mm)', '0.0015″ (0.04mm)'],
        [{ko:'확장 힐 씰',en:'Extended Heel'}, '0.007″ (0.18mm)', '0.005″ (0.13mm)', '0.003″ (0.08mm)', '0.002″ (0.05mm)'],
        [{ko:'싱글 백업링 적용',en:'Single Back-up Ring'}, '0.009″ (0.23mm)', '0.007″ (0.18mm)', '0.005″ (0.13mm)', '0.0025″ (0.06mm)'],
        [{ko:'확장/캠드 백업링 적용',en:'Extended / Cammed Back-up'}, '0.012″ (0.30mm)', '0.009″ (0.23mm)', '0.007″ (0.18mm)', '0.003″ (0.08mm)']
      ],
      surfaceTitleKo:'표면 조도(Surface Finish) 기준', surfaceTitleEn:'Surface Finish Guidelines',
      surfaceKo:'씰 홈(gland)도 밀봉 시스템의 절반을 차지하므로, 표면 조도·경도·다공성이 누설률과 마모 수명에 직접 영향을 줍니다. 동적 씰링 면은 로크웰 C43 이상의 경도를 권장하며, 경도가 높을수록 정밀 다듬질이 오래 유지되어 씰 성능과 수명이 향상됩니다. 무급유 동적 조건에서는 8~12 RMS 마이크로인치 조도에서 수명이 가장 길게 나타나는 경향이 있고(마모 입자가 미세 표면 구조에 자리잡아 윤활 역할), 습윤(윤활) 조건에서는 더 정밀한 조도가 유리합니다. 면씰은 하드웨어 중심선과 동심을 이루는 원형 가공 흔적(circular lay)이 되도록 합니다. 아래는 매체·용도별 권장 표면 조도 기준입니다.',
      surfaceEn:'The seal gland is effectively half of the sealing system, so surface finish, hardness and porosity directly affect leak rate and wear life. Dynamic sealing surfaces should be Rockwell C43 or harder — a harder surface holds its fine finish longer, which improves both sealing performance and service life. Dry dynamic applications tend to last longest around 8–12 RMS micro-inch (worn material settles into the micro-surface structure and adds lubrication at the contact interface), while wetted/lubricated applications benefit from a finer finish. Face-seal finishes should have a circular lay, concentric with the hardware centerline. The table below gives recommended surface-finish ranges by media and application.',
      surfaceCols:[
        {ko:'매체군',en:'Media Group'},
        {ko:'동적 적용 (RMS ㎲in)',en:'Dynamic Applications (RMS µin)',short:true},
        {ko:'정적 적용 (RMS ㎲in)',en:'Static Applications (RMS µin)',short:true}
      ],
      surfaceRows:[
        [{ko:'극저온·고진공·헬륨·수소',en:'Cryogenics, deep vacuum, helium, hydrogen'}, '2 ~ 6', '4 ~ 8'],
        [{ko:'공기·메탄올·에탄올·아르곤·질소가스·암모니아·독성가스·액화메탄',en:'Air, methanol/ethanol, argon, nitrogen gas, ammonia, toxic gases, liquid methane'}, '4 ~ 12', '8 ~ 16'],
        [{ko:'원유·물·경질 석유연료·유압유·가스상 메탄·이산화탄소',en:'Crude oil, water, light petroleum fuels, hydraulic fluids, gaseous methane, carbon dioxide'}, '8 ~ 16', '8 ~ 32']
      ]
    },
    jacket:{
      ko:'자켓재질', en:'Jacket Material',
      bodyKo:'씰의 자켓(밀봉 접촉부)은 매체·온도·상대속도·상대재 경도에 맞춰 PTFE·UHMWPE·PEEK 계열의 다양한 충전 컴파운드 중에서 선정합니다. 아래는 대표적인 자켓 소재 그레이드와 특징입니다.',
      bodyEn:'The seal jacket (the part that contacts the mating surface) is selected from a range of filled PTFE, UHMWPE and PEEK compounds to match the media, temperature, relative speed and mating-surface hardness. Representative jacket material grades and characteristics are listed below.',
      cols:[
        {ko:'코드',en:'Code',short:true},
        {ko:'소재',en:'Material'},
        {ko:'설명',en:'Description'},
        {ko:'사용 온도',en:'Temp. Range',short:true}
      ],
      rows:[
        ['01', {ko:'순수 PTFE',en:'Virgin PTFE'}, {ko:'정적 씰링·화학약품·심냉 극저온(LOX, LH2, LHe, N2O4, H2O2, UDMH, LCH4) 등 화학공정 전반에 사용. FDA 적합, 가스투과율 낮음, 고진공 씰링에 적합.',en:'Static seals, chemicals, deep cryogenics (LOX, LH2, LHe, N2O4, H2O2, UDMH, LCH4) and general chemical-plant use. FDA compliant, low gas permeability, suited to hard-vacuum sealing.'}, '-268 ~ 288℃ (-450~550°F)'],
        ['01S', {ko:'개질 PTFE (TFM)',en:'Virgin TFM Modified PTFE'}, {ko:'일반 PTFE보다 단단하고 가스투과율이 낮음. 기체 또는 극저온의 저분자량 화학물질에 적합. FDA 적합, PTFE와 유사한 내약품성에 마모는 더 느림.',en:'Harder than standard PTFE with lower gas permeability. Suited to gaseous or cryogenic low-molecular-weight chemicals. FDA compliant, near-PTFE chemical inertness with slower wear.'}, '-268 ~ 288℃ (-450~550°F)'],
        ['02', {ko:'카본·PPS 충전 PTFE',en:'Carbon/PPS Filled PTFE'}, {ko:'저온·고온 모두에서 저마모 동적 용도에 우수. 경질유·수용액·건식 사용 가능. 연질 금속 상대재에는 마모를 유발할 수 있음.',en:'Excellent low-wear performance in dynamic service, hot or cold. Usable in light oils, aqueous solutions or dry. Can be abrasive against soft-metal mating surfaces.'}, '-268 ~ 260℃ (-450~500°F)'],
        ['03', {ko:'폴리이미드 충전 PTFE',en:'Polyimide Filled PTFE'}, {ko:'고속·고압 유압 용도에 최적. 건식·윤활 모두 마모 우수, 연질~경질 금속 상대재에 사용. 내열성 우수, 고온 건식·윤활 용도에 적합.',en:'Best suited to high-speed, high-pressure hydraulic service. Wears well dry or lubricated, against soft-to-hard metal. Heat resistant, good for hot dry or lubricated duty.'}, '-129 ~ 316℃ (-200~600°F)'],
        ['04', {ko:'에코놀 충전 PTFE',en:'Ekonol Filled PTFE'}, {ko:'고온 PTFE 블렌드로 고온 합성유에 강함. 연질금속을 손상시키지 않으며 건식·오일 모두 고속 사용 가능. 터빈엔진·베어링 커버·고온 가스 액추에이터 등에 사용.',en:'A high-temperature PTFE blend that holds up well in hot synthetic oils. Runs at high speed dry or on oil without damaging soft metals. Used in turbine engines, bearing covers and hot-gas actuators.'}, '-212 ~ 316℃ (-350~600°F)'],
        ['05', {ko:'그라파이트 충전 PTFE',en:'Graphite Filled PTFE'}, {ko:'건식·수계·스팀 용도에 우수. 건식 또는 오일/그리스 윤활 조건 모두 사용 가능.',en:'Excellent for dry, water and steam service. Usable dry or with oil/grease lubrication.'}, '-268 ~ 316℃ (-450~600°F)'],
        ['06', {ko:'브론즈 충전 PTFE',en:'Bronze Filled PTFE'}, {ko:'저~중속 유압 용도에 주로 사용. 액추에이터 샤프트의 웨어밴드·씰링에 적합, 윤활 시 중경도 강 실린더 보어에 무리 없음.',en:'Used mainly in low-to-medium-speed hydraulic service. Suited to actuator-shaft wear bands and seal rings; gentle on medium-hardness steel cylinder bores when lubricated.'}, '-46 ~ 288℃ (-50~550°F)'],
        ['07', {ko:'미네랄(FDA) 충전 PTFE',en:'Mineral FDA Filled PTFE'}, {ko:'소모품(식품 등) 고온·저온 겸용 FDA 적합 소재. 백색이며 대부분 매체에 불활성. 중속 씰·립씰·슬링거 용도.',en:'FDA-compliant material for hot or cold consumable-contact use. White in color and inert to most media. Used for moderate-speed seals, lip seals and slingers.'}, '-268 ~ 316℃ (-450~600°F)'],
        ['08', {ko:'유리섬유·MoS₂ 충전 PTFE',en:'Glass/MoS₂ (Moly) Filled PTFE'}, {ko:'고속 씰·립씰·링·베어링·오일 용도에 우수. 고온·저온 모두 사용 가능하며 내마모성이 매우 뛰어남. 중경도 이상(로크웰 C42+) 금속과 함께, 가급적 윤활 상태로 사용 권장.',en:'Excellent for high-speed seals, lip seals, rings, bearings and oil service. Usable hot or cold with very high wear resistance. Best used against medium-hard-or-harder metal (Rockwell C42+), preferably lubricated.'}, '-268 ~ 316℃ (-450~600°F)'],
        ['09', {ko:'브론즈·MoS₂ 충전 PTFE',en:'Bronze/MoS₂ (Moly) Filled PTFE'}, {ko:'06번의 몰리 윤활 버전으로 건식·습식 모두 내마모성 향상. 유압용 씰·웨어밴드·백업링에 우수, 06번보다 마찰이 낮고 강재 상대재·넓은 온도범위에 적합.',en:'A moly-lubricated version of grade 06 with improved wear resistance dry or wet. Excellent for hydraulic seals, wear bands and back-up rings — lower friction than 06, suited to steel mating surfaces over a wider temperature range.'}, '-184 ~ 316℃ (-300~600°F)'],
        ['10', {ko:'순수 UHMWPE',en:'Virgin UHMWPE'}, {ko:'수계·유압 용도의 내마모 소재로 질기고 충격에 강함. 연질 상대면을 손상시키지 않음. FDA 적합.',en:'A tough, impact-resistant wear material for water and hydraulic service. Does not damage soft mating surfaces. FDA compliant.'}, '-268 ~ 82℃ (-450~180°F)'],
        ['10H', {ko:'고온형 UHMWPE',en:'UHMWPE High Temp'}, {ko:'10번의 고온 버전. 연질 상대면에도 사용 가능하며 충격·내마모성 우수. FDA 적합.',en:'A higher-temperature version of grade 10. Usable against soft mating surfaces with good impact and wear resistance. FDA compliant.'}, '-196 ~ 93℃ (-320~200°F)'],
        ['11', {ko:'순수 PEEK/PEK',en:'Virgin PEEK/PEK'}, {ko:'내열·내마모성이 뛰어나고 강도가 높은 소재. 백업링, 정밀 씰, 구조 부품에 적합. 핫멜트 접착, 밸브 시트 등 고온 용도에 사용.',en:'A strong, heat- and wear-resistant material suited to back-up rings, precision seals and structural parts. Used in hot-melt adhesive equipment, valve seats and other high-temperature duty.'}, '-129 ~ 288℃ (-200~550°F)'],
        ['12', {ko:'유리섬유 충전 PEEK/PEK',en:'Glass Filled PEEK/PEK'}, {ko:'백업링·랜턴링용 강화 소재. 고온 구조 부품용 엔지니어링 복합재. 연질금속에는 마모를 유발할 수 있어(윤활 시 로크웰 C47+, 건식 로크웰 C55+ 권장) 상대재 경도에 유의합니다.',en:'A reinforced material for back-up and lantern rings — an engineering composite for hot structural parts. Can be abrasive against soft metal, so a Rockwell C47+ (lubricated) or C55+ (dry) mating surface is recommended.'}, '-73 ~ 288℃ (-100~550°F)'],
        ['13', {ko:'카본파이버 충전 PEEK/PEK',en:'Carbon Fiber PEEK/PEK'}, {ko:'백업링·랜턴링용 프리미엄 강화 소재("블랙 스틸"로도 불림). 고난도 고온 구조 부품에 사용. 연질금속에는 마모를 유발할 수 있어(윤활 시 로크웰 C47+, 건식 로크웰 C55+ 권장) 상대재 경도에 유의합니다.',en:'A premium reinforced material for back-up and lantern rings, sometimes called "black steel." Used for demanding hot structural parts. Can be abrasive against soft metal, so a Rockwell C47+ (lubricated) or C55+ (dry) mating surface is recommended.'}, '-101 ~ 288℃ (-150~550°F)']
      ]
    },
    spring:{
      ko:'금속재질', en:'Spring Alloys',
      bodyKo:'스프링 자체의 하중 특성은 형태(타입)에 따라 달라지며, 합금은 매체의 화학적 환경(부식성)에 맞춰 선정합니다. 아래는 하중 특성별 스프링 6종과, 대표 금속 합금의 스프링 형태별 적용 가능 여부·특성입니다.',
      bodyEn:'A spring\'s load characteristics depend on its geometry (type), while the alloy is selected to suit the chemical environment (corrosivity) of the media. Below are six spring types by load characteristic, along with which spring geometries each representative alloy supports and its general characteristics.',
      types:[
        {img:'images/web/spring-type-cantilever.png', ko:'캔틸레버 스프링', en:'Cantilever Spring',
          descKo:'낮으면서 선형적으로 증가하는 하중 곡선. 매우 동적인 조건에 사용되며 씰·하드웨어 수명을 극대화하는 가장 널리 쓰이는 형태입니다.',
          descEn:'A low, linearly increasing load curve. Used in highly dynamic conditions and the most widely used geometry for maximizing seal and hardware life.'},
        {img:'images/web/spring-type-helical.png', ko:'헬리컬 와운드 스프링', en:'Helical Wound Spring',
          descKo:'길이 변형 당 부하가 상당히 높습니다. 주로 정적이거나 저속 운동 조건, 가벼운 가스 등 엄격한 씰링이 요구되는 조건에 적합합니다.',
          descEn:'Load per unit deflection is considerably higher. Best suited to static or low-speed motion and demanding sealing duty such as light gases.'},
        {img:'images/web/spring-type-unidirectional.png', ko:'유니디렉셔널 스프링', en:'Uni-directional Spring',
          descKo:'변형이 증가해도 거의 일정한 하중을 제공해 마모 허용량이 크며, 넓은 변형 범위에서 거의 일정한 마찰을 유지합니다.',
          descEn:'Provides a nearly constant load as deflection increases, giving a large wear allowance and keeping friction nearly constant over a wide deflection range.'},
        {img:'images/web/spring-type-doublewrapped.png', ko:'더블 와운드(리본) 스프링', en:'Double Wrapped (Ribbon) Spring',
          descKo:'리본 스프링을 감아 형성한 가장 견고한 씰 구조 중 하나로, 왕복·정지·회전 운동 조건에 모두 사용할 수 있습니다.',
          descEn:'One of the most robust seal structures, wound from ribbon spring stock. Can be used in reciprocating, static and rotary applications alike.'},
        {img:'images/web/spring-type-solidcontact.png', ko:'솔리드 콘택트 스프링', en:'Solid Contact Spring',
          descKo:'초저온 적용 분야용으로 높은 하중을 제공하며, 스프링 형상이 수축되지 않아 극한 온도 변화와 고진공 유지에 이상적입니다.',
          descEn:'Delivers high load for cryogenic applications; the spring geometry does not collapse, making it ideal for extreme temperature swings and holding high vacuum.'},
        {img:'images/web/spring-type-etched.png', ko:'에칭 스프링', en:'Etched Spring',
          descKo:'화학적으로 에칭한 소형 스프링으로 내경 0.5mm까지 초소형 제작이 가능해, 고압 조건 및 소형 단면 운동 조건에 추천됩니다.',
          descEn:'A small, chemically etched spring that can be produced down to a 0.5mm bore — recommended for high-pressure duty and small-cross-section dynamic seals.'}
      ],
      compatTitleKo:'합금별 적용 가능 스프링 타입', compatTitleEn:'Spring Types Supported by Alloy',
      compatCols:[
        {ko:'스프링 합금',en:'Spring Alloy'},
        {ko:'에칭 캔틸레버',en:'Etched Cantilever',short:true},
        {ko:'캔틸레버',en:'Cantilever',short:true},
        {ko:'헬리컬 와운드',en:'Helical Wound',short:true},
        {ko:'유니디렉셔널',en:'Uni-directional',short:true},
        {ko:'더블 와운드',en:'Double Wrapped',short:true},
        {ko:'솔리드 콘택트',en:'Solid Contact',short:true},
        {ko:'립씰 가터',en:'Lip Seal Garter',short:true}
      ],
      compatRows:(function(){
        var DOT='<span style="display:block;text-align:center">●</span>';
        var alloys=[
          ['17-7 PH 스테인리스강 (7S)','17-7 PH Stainless Steel (7S)',[0,0,1,0,0,0,0]],
          ['301 스테인리스강 (1S)','301 Stainless Steel (1S)',[1,1,0,0,1,1,0]],
          ['302 스테인리스강 (2S)','302 Stainless Steel (2S)',[0,0,0,1,0,0,1]],
          ['304 스테인리스강 (4S)','304 Stainless Steel (4S)',[1,1,1,0,1,1,0]],
          ['316 스테인리스강 (6S)','316 Stainless Steel (6S)',[1,1,1,1,0,1,1]],
          ['Elgiloy® (EL)','Elgiloy® (EL)',[1,1,1,0,0,1,0]],
          ['Hastelloy® (HA)','Hastelloy® (HA)',[1,1,1,1,1,1,0]],
          ['Inconel® (IN)','Inconel® (IN)',[1,1,1,1,1,1,0]],
          ['Titanium (TI)','Titanium (TI)',[1,1,0,1,1,1,0]]
        ];
        return alloys.map(function(a){
          return [{ko:a[0],en:a[1]}].concat(a[2].map(function(v){ return v ? DOT : ''; }));
        });
      })(),
      compatNoteKo:'씰 형태·단면 크기에 따라 실제 적용 가능 여부가 달라질 수 있습니다. 구체적인 조합은 문의 바랍니다.',
      compatNoteEn:'Actual applicability can vary with seal geometry and cross-section size — please contact us for specific combinations.',
      charTitleKo:'합금별 특성', charTitleEn:'Alloy Characteristics',
      charCols:[{ko:'합금',en:'Alloy'},{ko:'특성',en:'Characteristics'}],
      charRows:[
        [{ko:'301 스테인리스강',en:'301 Stainless Steel'}, {ko:'일반 용도에 적합하나 극도로 부식성이 강한 물질에는 권장하지 않습니다.',en:'Suitable for general use; not recommended for extremely corrosive substances.'}],
        [{ko:'304 스테인리스강',en:'304 Stainless Steel'}, {ko:'대부분의 환경에서 내식성이 우수하며, 습기·경미한 화학물질이 있는 일반 용도에 적합합니다.',en:'Resists corrosion in most environments — general application with moisture and mild chemicals.'}],
        [{ko:'316 스테인리스강',en:'316 Stainless Steel'}, {ko:'일반 용도에 사용하며, 저온에서 내식성이 한층 향상됩니다.',en:'General applications, with enhanced corrosion resistance at lower temperatures.'}],
        [{ko:'17-7 스테인리스강',en:'17-7 Stainless Steel'}, {ko:'고온에서도 기계적 물성을 잘 유지합니다.',en:'Enhanced retention of mechanical properties under elevated temperatures.'}],
        [{ko:'Inconel 625®',en:'Inconel 625®'}, {ko:'석유화학 분야에서 널리 사용되며 내식성이 우수합니다.',en:'Widely used in petrochemical applications, with excellent corrosion resistance.'}],
        [{ko:'Elgiloy®',en:'Elgiloy®'}, {ko:'원유·사우어가스 환경에서 널리 사용되는 내식성이 뛰어난 합금입니다.',en:'Widely used in crude oil and sour-gas environments — an excellent corrosion-resistant alloy.'}],
        [{ko:'Hastelloy®',en:'Hastelloy®'}, {ko:'고온 무기산, 용제, 염소 오염 산에 대한 내식성이 우수합니다.',en:'Excellent resistance to hot mineral acids, solvents and chlorine-contaminated acids.'}],
        [{ko:'Titanium',en:'Titanium'}, {ko:'경량이면서 내식성이 우수해 경량화·특수 저온 조건에 사용됩니다.',en:'Lightweight with good corrosion resistance — used for weight-sensitive and special low-temperature conditions.'}]
      ]
    }
  };

  // ---------------------------------------------------------------
  // 유공압씰 전용: 유압씰 / 공압씰 그룹 콘텐츠 (품번별 상세 규격표)
  // ---------------------------------------------------------------
  var HP_COLS = [
    {ko:'품번',en:'Part No.'},
    {ko:'제품명',en:'Product'},
    {ko:'적용부위',en:'Application'},
    {ko:'재질',en:'Material'},
    {ko:'압력(bar)',en:'Pressure (bar)',short:true},
    {ko:'온도(℃)',en:'Temp. (℃)',short:true},
    {ko:'속도(m/s)',en:'Speed (m/s)',short:true}
  ];

  var HP_GROUPS = {
    hyd:{
      ko:'유압씰', en:'Hydraulic Seals',
      bodyKo:'유압 실린더용 로드씰·피스톤씰·스태틱씰 등을 KASTAS(튀르키예)·SKF(스웨덴) 두 브랜드로 공급합니다. 아래 항목을 클릭하면 품번별 재질·압력·온도·속도 사양을 확인할 수 있습니다.',
      bodyEn:'Rod seals, piston seals and static seals for hydraulic cylinders, supplied under both the KASTAS (Turkey) and SKF (Sweden) brands. Click any category below to see material, pressure, temperature and speed specs by part number.',
      cats:[
        { key:'rod', ko:'로드씰', en:'Rod Seals', brand:'KASTAS', dko:'실린더 로드(축) 외경을 따라 오일이 누출되지 않도록 막는 1차 밀봉 부품입니다.', den:'The primary seal that prevents oil from leaking along the cylinder rod (shaft) surface.',
          rows:[
            ['FR200',{ko:'저마찰 로드씰',en:'Low Friction Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-35 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/fr200-low-friction-rod-seal'],
            ['XT200',{ko:'내압출 로드씰',en:'Extrusion Resistant Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-35 / +125','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/xt200-extrusion-resistant-rod-seal-1-'],
            ['K01',{ko:'로드 패킹',en:'Rod Packing'},{ko:'로드',en:'Rod'},'NBR','≤400','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k01-rod-packing-1'],
            ['K22',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤150','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k22-rod-seal-1'],
            ['K29',{ko:'버퍼씰',en:'Buffer Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k29-buffer-seal-1'],
            ['K31',{ko:'고하중 로드씰',en:'Heavy Duty Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤630','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k31-heavy-duty-rod-seal-1'],
            ['K32',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k32-rod-seal-1'],
            ['K33',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k33-rod-seal-1'],
            ['K34',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤700','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k34-rod-seal-1'],
            ['K35',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤400','-30 / +105','5.0','https://www.kastas.com/en/products/hydraulic-rod-seals/k35-rod-seal-1'],
            ['K37',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤400','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k37-rod-seal-1'],
            ['K38',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k38-rod-seal-1'],
            ['K97',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'HNBR','≤250','-30 / +150','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k97-rod-seal-1'],
            ['K39',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤250','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-rod-seals/k39-rod-seal-1']
          ] },
        { key:'piston', ko:'피스톤씰', en:'Piston Seals', brand:'KASTAS', dko:'피스톤과 실린더 보어 사이를 밀봉해 양쪽 챔버의 압력을 분리합니다.', den:'Seals the gap between piston and cylinder bore, separating pressure between the two chambers.',
          rows:[
            ['XT300',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤400','-35 / +125','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/xt300-piston-seal-1'],
            ['K03',{ko:'피스톤 패킹',en:'Piston Packing'},{ko:'피스톤',en:'Piston'},'NBR','≤400','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k03-piston-packing'],
            ['K15',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤250','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k15-piston-seal-1'],
            ['K16',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤400','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k16-compact-piston-seal-1'],
            ['K17',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤400','-30 / +105','5.0','https://www.kastas.com/en/products/hydraulic-piston-seals/k17-piston-seal-1'],
            ['K19',{ko:'고하중 피스톤씰',en:'Heavy Duty Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤400','-30 / +105','1.50','https://www.kastas.com/en/products/hydraulic-piston-seals/k19-double-acting-compact-piston-seal-1'],
            ['K23',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤150','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k23-piston-seal-1'],
            ['K26',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤60','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k26-piston-seal-1'],
            ['K49',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU·NBR','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k49-piston-seal-1'],
            ['K41',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤400','-30 / +105','5.0','https://www.kastas.com/en/products/hydraulic-piston-seals/k41-piston-seal-1'],
            ['K42',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤700','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k42-compact-piston-seal-1'],
            ['K48',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·TPE·POM','≤700','-30 / +100','0.3','https://www.kastas.com/en/products/hydraulic-piston-seals/k48-heavy-duty-piston-seal-1'],
            ['K501',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PA·NBR','≤500','-30 / +105','1.0','https://www.kastas.com/en/products/hydraulic-piston-seals/k501-piston-seal-1'],
            ['K502',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·FABRIC·POM','≤500','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k502-compact-piston-seal-1'],
            ['K503',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·TPE·POM','≤500','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k503-compact-piston-seal-1'],
            ['K504',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·FABRIC·POM','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k504-compact-piston-seal-1'],
            ['K505',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·FABRIC·POM','≤500','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k505-compact-piston-seal-1'],
            ['K518',{ko:'콤팩트 피스톤씰',en:'Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·TPE·POM','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k518-k518x-compact-piston-seals-1'],
            ['K518X',{ko:'고압 콤팩트 피스톤씰',en:'HP Compact Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·TPE·PA','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k518-k518x-compact-piston-seals-1'],
            ['K753',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE·NBR','≤400','-30 / +105','2.0','https://www.kastas.com/en/products/hydraulic-piston-seals/k753-piston-seal-1'],
            ['K757',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE·NBR','≤400','-30 / +105','2.0','https://www.kastas.com/en/products/hydraulic-piston-seals/k757-piston-seal-1'],
            ['K515',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU·NBR','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-seals/k515-hydraulic-piston-seals-en']
          ] },
        { key:'pistonrod', ko:'로드·피스톤 겸용', en:'Piston-Rod Seals', brand:'KASTAS', dko:'피스톤씰과 로드씰 기능을 하나의 프로파일로 겸하는 콤팩트 설계입니다.', den:'A compact profile that combines piston-seal and rod-seal function in a single part.',
          rows:[
            ['K21',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'NBR','≤150','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-rod-seals/k21-piston-rod-seal'],
            ['K98',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU·NBR','≤400','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-rod-seals/k98-piston-rod-seal-1'],
            ['K114',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU·NBR','≤400','-30 / +105','0.5','https://www.kastas.com/en/products/hydraulic-piston-rod-seals/k114-piston-rod-seal-1'],
            ['K920',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU·NBR','≤350','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-rod-seals/k920-piston-rod-seal'],
            ['K921',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU·NBR','≤350','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-rod-seals/k921-piston-rod-seal'],
            ['K922',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU·NBR','≤350','-30 / +100','0.5','https://www.kastas.com/en/products/hydraulic-piston-rod-seals/k922-piston-rod-seal']
          ] },
        { key:'skfrod', ko:'로드씰', en:'Rod Seals', brand:'SKF', dko:'실린더 로드(축) 외경을 따라 오일이 누출되지 않도록 막는 1차 밀봉 부품입니다.', den:'The primary seal that prevents oil from leaking along the cylinder rod (shaft) surface.',
          rows:[
            ['S1S',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/polyurethane-u-cup-rod-seals/s1s'],
            ['ZBR',{ko:'버퍼 로드씰',en:'Buffer Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/polyurethane-u-cup-rod-seals/zbr'],
            ['DZR',{ko:'양방향 로드씰',en:'Double-acting Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/hybrid-rod-seals/dzr'],
            ['RBB',{ko:'로드 버퍼씰',en:'Rod Buffer Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/polyurethane-u-cup-buffer-seals/rbb'],
            ['S9B',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/buffer-seals-incorporating-slide-rings/s9b'],
            ['RSB',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/buffer-seals-incorporating-slide-rings/rsb']
          ] },
        { key:'skfpiston', ko:'피스톤씰', en:'Piston Seals', brand:'SKF', dko:'피스톤과 실린더 보어 사이를 밀봉해 양쪽 챔버의 압력을 분리합니다. 로드·피스톤 겸용 프로파일도 포함합니다.', den:'Seals the gap between piston and cylinder bore. Includes combined piston-rod profiles.',
          rows:[
            ['MPV',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/polyurethane-slide-rings/mpv'],
            ['CPV',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/polyurethane-slide-rings/cpv'],
            ['GH',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE','≤400','-30 / +110','2.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/ptfe-slide-rings/gh'],
            ['APR',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE','≤400','-30 / +110','2.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/ptfe-slide-rings/apr'],
            ['LCP',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE','≤400','-30 / +110','2.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/anti-extrusion-rings/lcp'],
            ['LTP',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/anti-extrusion-rings/ltp'],
            ['CUT',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/rigid-split-slide-rings/cut'],
            ['UNP',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/piston-seals/single-acting-piston-seals/unp-profile-data'],
            ['PTB',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PTFE','≤400','-30 / +110','2.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/energized-u-cup-rod-seals/ptb'],
            ['STD',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/energized-u-cup-rod-seals/std'],
            ['DZ',{ko:'로드·피스톤씰',en:'Piston-Rod Seal'},{ko:'로드·피스톤',en:'Piston Rod'},'PU','≤400','-30 / +110','0.5','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/rod-and-buffer-seals/hybrid-rod-seals/dz']
          ] },
        { key:'static', ko:'스태틱 씰', en:'Static Seals', brand:'KASTAS', dko:'고정부(포트·커넥터 등)에 사용하는 정적 밀봉·백업링입니다.', den:'Static seals and back-up rings used at fixed connections such as ports and fittings.',
          rows:[
            ['K800',{ko:'백업링',en:'Back-up Ring'},{ko:'로드',en:'Rod'},'X-Tone','≤600','-30 / +120','1.0','https://www.kastas.com/en/products/static-sealing-elements/k800-back-up-ring'],
            ['K81',{ko:'백업링',en:'Back-up Ring'},{ko:'로드·피스톤',en:'Piston Rod'},'TPE','≤300','-40 / +100','1.0','https://www.kastas.com/en/products/static-sealing-elements/k81-back-up-ring-1'],
            ['K82',{ko:'스태틱씰',en:'Static Seal'},{ko:'—',en:'—'},'PU','≤600','-35 / +110','—','https://www.kastas.com/en/products/static-sealing-elements/k82-static-seal-1'],
            ['K83',{ko:'스태틱씰',en:'Static Seal'},{ko:'—',en:'—'},'PU','≤600','-35 / +110','—','https://www.kastas.com/en/products/static-sealing-elements/k83-static-seal-1'],
            ['K84',{ko:'스태틱씰',en:'Static Seal'},{ko:'—',en:'—'},'PU','≤600','-35 / +110','—','https://www.kastas.com/en/products/static-sealing-elements/k84-static-seal-1'],
            ['K85',{ko:'스태틱씰',en:'Static Seal'},{ko:'—',en:'—'},'PU','≤500','-35 / +110','—','https://www.kastas.com/en/products/static-sealing-elements/k85-static-seal-1'],
            ['K86',{ko:'스태틱씰',en:'Static Seal'},{ko:'—',en:'—'},'PU','≤500','-40 / +100','—','https://www.kastas.com/en/products/static-sealing-elements/k86-static-seal-1'],
            ['KO',{ko:'오링',en:'O-Ring'},{ko:'로드·피스톤',en:'Piston Rod'},'NBR','≤63','-30 / +105','0.5','https://www.kastas.com/en/products/static-sealing-elements/ko-o-ring'],
            ['K87',{ko:'유체 커넥터 씰',en:'Fluid Connector Seal'},{ko:'—',en:'—'},'NBR','≤400','-30 / +105','—','https://www.kastas.com/en/products/static-sealing-elements/k87-fluid-connector-seal-1'],
            ['K88',{ko:'유체 커넥터 씰',en:'Fluid Connector Seal'},{ko:'—',en:'—'},'NBR','≤400','-30 / +105','—','https://www.kastas.com/en/products/static-sealing-elements/k88-fluid-connector-seal-1'],
            ['K89',{ko:'스태틱씰',en:'Static Seal'},{ko:'—',en:'—'},'PU','≤600','-35 / +110','—','https://www.kastas.com/en/products/static-sealing-elements/k89-static-seal-1']
          ] },
        { key:'special', ko:'특수 씰', en:'Special Sealing Elements', brand:'KASTAS', dko:'PTFE 복합소재 로드·피스톤씰, V-링, 쉐브론씰 등 특수 조건용 씰입니다.', den:'PTFE-composite rod/piston seals, V-rings, chevron seals and other seals for special duty conditions.',
          rows:[
            ['K702',{ko:'로드씰',en:'Rod Seal'},{ko:'로드',en:'Rod'},'PTFE·NBR','≤300','-30 / +105','5.0','https://www.kastas.com/en/products/rotary-seals/k702-rod-seal'],
            ['K752',{ko:'피스톤씰',en:'Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE·NBR','≤300','-30 / +105','5.0','https://www.kastas.com/en/products/rotary-seals/k752-piston-seal-1'],
            ['K14',{ko:'V링',en:'V-Ring'},{ko:'—',en:'—'},'NBR','≤0.3','-30 / +105','12.0','https://www.kastas.com/en/products/rotary-seals/k14-v-ring-en'],
            ['K150',{ko:'쉐브론 링',en:'Chevron Ring'},{ko:'로드',en:'Rod'},'Fabric NBR','≤250','-30 / +80','2.0','https://www.kastas.com/en/products/other-sealing-elements/k150-chevron-ring'],
            ['K151',{ko:'고압 쉐브론씰',en:'HP Chevron Seal'},{ko:'로드',en:'Rod'},'Fabric NBR·POM·PTFE','≤400','-30 / +80','2.0','https://www.kastas.com/en/products/other-sealing-elements/k151-high-pressure-chevron-seal-1'],
            ['K152',{ko:'저압 쉐브론씰',en:'LP Chevron Seal'},{ko:'로드',en:'Rod'},'Fabric NBR·POM','≤80','-30 / +80','2.0','https://www.kastas.com/en/products/other-sealing-elements/k152-low-pressure-chevron-seal-1'],
            ['K154',{ko:'저압 쉐브론씰',en:'LP Chevron Seal'},{ko:'로드',en:'Rod'},'NBR·Fabric NBR','≤80','-30 / +80','2.0','https://www.kastas.com/en/products/other-sealing-elements/k154-low-pressure-chevron-seal-1'],
            ['K155',{ko:'고압 쉐브론씰',en:'HP Chevron Seal'},{ko:'로드',en:'Rod'},'POM·Fabric NBR·PA','≤400','-30 / +80','2.0','https://www.kastas.com/en/products/other-sealing-elements/k155-high-pressure-chevron-seal-1']
          ] }
      ]
    },
    pneu:{
      ko:'공압씰', en:'Pneumatic Seals',
      bodyKo:'공압 실린더·자동화 기기에 쓰이는 저마찰·저압 설계의 로드씰·피스톤씰을 KASTAS 브랜드로 공급합니다. 아래 항목을 클릭하면 품번별 사양을 확인할 수 있습니다.',
      bodyEn:'Low-friction, low-pressure rod and piston seals for pneumatic cylinders and automation equipment, supplied under the KASTAS brand. Click a category below to see specs by part number.',
      cats:[
        { key:'pneurod', ko:'로드씰', en:'Rod Seals', brand:'KASTAS', dko:'공압 실린더 로드용 저마찰 씰입니다.', den:'Low-friction rod seals for pneumatic cylinders.',
          rows:[
            ['K64',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤16','-30 / +100','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k64-pneumatic-rod-seal-1'],
            ['K51',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'PU','≤16','-30 / +80','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k51-pneumatic-rod-seal-1'],
            ['K106',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k106-pneumatic-rod-seal-1'],
            ['K130',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k130-pneumatic-rod-seal-1'],
            ['K30',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤16','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k30-pneumatic-rod-seal'],
            ['K52',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k52-pneumatic-rod-seal-1'],
            ['K53',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k53-pneumatic-cushioning-seal-1'],
            ['K56',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤16','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k56-pneumatic-rod-seal-1'],
            ['K67',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤10','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k67-pneumatic-rod-seal-1'],
            ['K109',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤16','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k109-pneumatic-rod-seal-1'],
            ['K131',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'NBR','≤16','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k131-pneumatic-rod-seal-1'],
            ['K715',{ko:'공압 로드씰',en:'Pneumatic Rod Seal'},{ko:'로드',en:'Rod'},'PTFE·NBR','≤16','-30 / +105','4.0','https://www.kastas.com/en/products/pneumatic-rod-seals/k715-pneumatic-rod-seal-1']
          ] },
        { key:'pneupiston', ko:'피스톤씰', en:'Piston Seals', brand:'KASTAS', dko:'공압 실린더 피스톤용 저마찰 씰입니다.', den:'Low-friction piston seals for pneumatic cylinders.',
          rows:[
            ['K59',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k59-pneumatic-piston-seal-1'],
            ['K50',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k50-pneumatic-piston-seal-1'],
            ['K162',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤16','-30 / +100','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k162-pneumatic-piston-seal'],
            ['K25',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤16','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k25-pneumatic-piston-seal'],
            ['K54',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k54-pneumatic-piston-seal-1'],
            ['K55',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k55-pneumatic-piston-seal-1'],
            ['K57',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k57-pneumatic-piston-seal-1'],
            ['K58',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤12','-30 / +80','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k58-pneumatic-piston-seal-1'],
            ['K61',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR·POM·ALU','≤12','-30 / +100','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k61-pneumatic-piston-seal-1'],
            ['K62',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k62-pneumatic-piston-seal-1'],
            ['K63',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k63-pneumatic-piston-seal-1'],
            ['K65',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k65-pneumatic-piston-seal-1'],
            ['K66',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k66-pneumatic-piston-seal-1'],
            ['K160',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤16','-30 / +100','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k160-pneumatic-piston-seal-1'],
            ['K161',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'PU','≤16','-30 / +100','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k161-pneumatic-piston-seal-1'],
            ['K506',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'NBR','≤12','-30 / +105','1.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k506-pneumatic-piston-seal-1'],
            ['K761',{ko:'공압 피스톤씰',en:'Pneumatic Piston Seal'},{ko:'피스톤',en:'Piston'},'PTFE·NBR','≤16','-30 / +105','4.0','https://www.kastas.com/en/products/pneumatic-piston-seals/k761-pneumatic-piston-seal-1']
          ] }
      ]
    },
    wiper:{
      ko:'와이퍼', en:'Wipers',
      bodyKo:'로드 표면의 이물질·수분이 실린더 내부로 유입되는 것을 차단하는 와이퍼입니다. KASTAS(튀르키예)·SKF(스웨덴) 두 브랜드로 공급합니다. 아래 항목을 클릭하면 품번별 재질·온도·속도 사양을 확인할 수 있습니다.',
      bodyEn:'Wipers that keep dirt and moisture on the rod surface from being drawn into the cylinder, supplied under both the KASTAS (Turkey) and SKF (Sweden) brands. Click a category below to see material, temperature and speed specs by part number.',
      cats:[
        { key:'wiper', ko:'와이퍼', en:'Wipers', brand:'KASTAS', dko:'로드 표면의 이물질·수분이 실린더 내부로 유입되는 것을 차단합니다.', den:'Keeps dirt and moisture on the rod surface from being drawn into the cylinder.',
          rows:[
            ['K05',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +100','1.0','https://www.kastas.com/en/products/wipers/k05-wiper'],
            ['K06',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers/k06-wiper-1'],
            ['K060',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers'],
            ['K07',{ko:'메탈 케이스 와이퍼',en:'Metal Case Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers/k07-metal-case-wiper-1'],
            ['K09',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers/k09-wiper-1'],
            ['K10',{ko:'더블 와이퍼',en:'Double Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers/k10-double-wiper-1'],
            ['K11',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'TPE','—','-40 / +120','2.0','https://www.kastas.com/en/products/wipers/k11-wiper-1'],
            ['K12',{ko:'메탈 케이스 와이퍼',en:'Metal Case Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +100','1.0','https://www.kastas.com/en/products/wipers/k12-metal-case-wiper-1'],
            ['K13',{ko:'메탈 케이스 와이퍼',en:'Metal Case Wiper'},{ko:'로드',en:'Rod'},'PU·STEEL','—','-30 / +100','1.0','https://www.kastas.com/en/products/wipers/k13-metal-case-wiper-1'],
            ['K27',{ko:'더블 와이퍼',en:'Double Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers/k27-double-wiper-1'],
            ['K94',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-35 / +100','1.0','https://www.kastas.com/en/products/wipers/k94-wiper-1'],
            ['K103',{ko:'더블 와이퍼',en:'Double Wiper'},{ko:'로드',en:'Rod'},'PU·NBR','—','-40 / +100','1.0','https://www.kastas.com/en/products/wipers/k103-double-wiper-1'],
            ['K107',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-40 / +100','1.0','https://www.kastas.com/en/products/wipers/k107-double-wiper-1'],
            ['K703',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','5.0','https://www.kastas.com/en/products/wipers/k703-wiper-1'],
            ['K716',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +105','5.0','https://www.kastas.com/en/products/wipers/k716-wiper-1'],
            ['K92',{ko:'메탈 케이스 와이퍼',en:'Metal Case Wiper'},{ko:'로드',en:'Rod'},'NBR','—','-30 / +105','1.0','https://www.kastas.com/en/products/wipers/k92-metal-case-wiper-1'],
            ['K101',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-40 / +100','1.0','https://www.kastas.com/en/products/wipers/k101-external-wiper-1'],
            ['K102',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-35 / +100','1.0','https://www.kastas.com/en/products/wipers/k102-wiper-1'],
            ['K705',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +105','5.0','https://www.kastas.com/en/products/wipers/k705-wiper-1'],
            ['K706',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +105','5.0','https://www.kastas.com/en/products/wipers/k706-wiper-1'],
            ['K606',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +100','1.0','https://www.kastas.com/en/products/wipers/k606-wiper']
          ] },
        { key:'skfwiper', ko:'와이퍼', en:'Wipers', brand:'SKF', dko:'로드 표면의 이물질·수분이 실린더 내부로 유입되는 것을 차단합니다.', den:'Keeps dirt and moisture on the rod surface from being drawn into the cylinder.',
          rows:[
            ['PA',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/press-in/pa'],
            ['MCW',{ko:'메탈 케이스 와이퍼',en:'Metal Case Wiper'},{ko:'로드',en:'Rod'},'NBR·STEEL','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/press-in/mcw'],
            ['PAD',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/press-in/pad-padv'],
            ['PADV',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/press-in/pad-padv'],
            ['DTW',{ko:'더블 와이퍼',en:'Double Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/snap-in/dtw'],
            ['DX',{ko:'와이퍼',en:'Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/snap-in/dx'],
            ['HW',{ko:'스냅인 와이퍼',en:'Snap-in Wiper'},{ko:'로드',en:'Rod'},'PU','—','-30 / +110','1.0','https://www.skf.com/us/products/industrial-seals/hydraulic-seals/wiper-seals/snap-in/hw']
          ] }
      ]
    },
    guide:{
      ko:'가이드', en:'Guide Elements',
      bodyKo:'로드·피스톤이 금속과 직접 마찰하지 않도록 지지하는 저마찰 가이드 부품입니다. 씰스타가 실제로 취급하는 품번만 정리했습니다.',
      bodyEn:'Low-friction guide elements that support the rod/piston so it never contacts bare metal. Listed here are only the part numbers Sealstar actually carries.',
      cats:[
        { key:'guide', ko:'가이드', en:'Guide Elements', brand:'KASTAS', dko:'로드·피스톤이 금속과 직접 마찰하지 않도록 지지하는 저마찰 가이드 부품입니다.', den:'Low-friction guide elements that support the rod/piston so it never contacts bare metal.',
          rows:[
            ['K68',{ko:'로드 가이드 링',en:'Rod Guide Ring'},{ko:'로드',en:'Rod'},'POM','—','-40 / +110','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k68-rod-guide-ring'],
            ['K69',{ko:'피스톤 가이드 링',en:'Piston Guide Ring'},{ko:'피스톤',en:'Piston'},'POM','—','-40 / +110','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k69-piston-guide-ring-1'],
            ['K73',{ko:'로드·피스톤 가이드 링',en:'Piston-Rod Guide Ring'},{ko:'로드·피스톤',en:'Piston Rod'},'Polyester Resin','—','-40 / +120','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k73-piston-rod-guide-ring-1'],
            ['K75',{ko:'로드·피스톤 가이드 링',en:'Piston-Rod Guide Ring'},{ko:'로드·피스톤',en:'Piston Rod'},'Phenolic + PTFE','—','-40 / +130','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k75-piston-rod-guide-ring-1'],
            ['K78',{ko:'로드·피스톤 가이드 링',en:'Piston-Rod Guide Ring'},{ko:'로드·피스톤',en:'Piston Rod'},'Phenolic Aramid','—','-40 / +200','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k78-piston-rod-guide-ring-1'],
            ['K79',{ko:'로드·피스톤 가이드 링',en:'Piston-Rod Guide Ring'},{ko:'로드·피스톤',en:'Piston Rod'},'Polyester·Phenolic·Graphite','—','-40 / +120','5.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k79-piston-rod-guide-ring-1'],
            ['KBT',{ko:'PTFE 브론즈 가이드 스트립',en:'PTFE Bronze Guide Strip'},{ko:'로드·피스톤',en:'Piston Rod'},'PTFE·Bronze','—','-200 / +260','15.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/kbt-ptfe-bronze-guide-tape-1'],
            ['KKT',{ko:'카본 PTFE 가이드 스트립',en:'Carbon PTFE Guide Strip'},{ko:'로드·피스톤',en:'Piston Rod'},'PTFE·Carbon','—','-200 / +200','15.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/kkt-carbon-ptfe-guide-tape-1'],
            ['KPB',{ko:'폴리에스터 가이드 스트립',en:'Polyester Guide Strip'},{ko:'로드·피스톤',en:'Piston Rod'},'Polyester Resin','—','-40 / +120','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/kpb-polyester-resin-guide-tape-1'],
            ['KSB',{ko:'로드·피스톤 가이드 스트립',en:'Piston-Rod Guide Strip'},{ko:'로드·피스톤',en:'Piston Rod'},'Polyester·Phenolic','—','-40 / +120','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/ksb-piston-rod-guide-tape-1'],
            ['K71',{ko:'로드 가이드 링',en:'Rod Guide Ring'},{ko:'로드',en:'Rod'},'POM','—','-40 / +100','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k71-rod-guide-ring-1'],
            ['K77',{ko:'로드 가이드 링',en:'Rod Guide Ring'},{ko:'로드',en:'Rod'},'POM','—','-40 / +100','1.0','https://www.kastas.com/en/products/hydraulic-guiding-elements/k77-rod-guide-ring-1']
          ] }
      ]
    }
  };

  // ---------------------------------------------------------------
  // 전체 제품 카테고리 (좌측에서 바로 선택하는 평면 목록, 20종)
  // ---------------------------------------------------------------
  var ITEMS = [
    { id:'oring', ko:'오링', en:'O-Ring', imgs:imgs('oring',9), special:'oring',
      dko:'가장 널리 사용되는 기본 밀봉 부품으로, 그루브(홈)에 장착되어 두 부품 사이의 정적·동적 누출을 차단합니다. 다양한 재질과 AS568·JIS·미터 규격을 갖춰 고정 및 운동용으로 폭넓게 사용됩니다.',
      den:'The most widely used sealing element, fitted into a groove to block static and dynamic leakage between two parts. Available in a wide range of materials and AS568/JIS/metric sizes for both static and dynamic use.',
      mat:['NBR','H-NBR','EPDM','실리콘','CR','VITON','AFLAS','FFKM','PU','테프론'],
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

    { id:'perfluoro', ko:'퍼플러오링', en:'Perfluoro O-Ring (FFKM)', imgs:['images/web/perfluoro1.jpg'], special:'perfluoro',
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

    { id:'vulc', ko:'비규격연결오링', en:'Non-Standard Vulc\'d O-Ring', imgs:['images/web/vulc1.jpg'],
      dko:'표준 규격에 없는 대구경·특수 단면 오링을 코드(cord) 소재로 절단·가황 접합해 제작하는 맞춤형 오링입니다. 진공 챔버, 대형 플랜지 등 비표준 치수에 대응합니다.',
      den:'Custom O-rings made by cutting and vulcanizing cord stock to non-standard diameters or cross-sections — built for vacuum chambers, large flanges and other sizes outside the standard catalog.',
      mat:['NBR','VITON','실리콘','EPDM','FFKM'],
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

    { id:'edring', ko:'ED링', en:'ED-Ring', imgs:imgs('edring',4),
      dko:'나사산 체결부에 보조로 장착되는 정적(Static) 씰입니다. 나사산만으로는 완전한 밀봉이 어려운 피팅·포트 연결부에서 1차 씰을 보완해 누유를 막으며, 주로 NBR 재질로 표준 재고를 운영합니다.',
      den:'A static seal fitted alongside a threaded connection. Where threads alone cannot fully seal a fitting or port joint, the ED-ring backs up the primary seal to prevent leakage — mainly stocked in NBR.',
      mat:['NBR','FKM'],
      principleKo:'유압·공압 피팅이나 포트를 나사로 체결할 때, 나사산 사이의 미세한 틈만으로는 완전한 밀봉을 보장하기 어렵습니다. ED링은 체결부에 함께 장착되어 이 틈을 보조적으로 막아주는 정적 씰로, 진동이나 압력 변화가 있는 체결부에서도 안정적인 밀봉을 유지하도록 돕습니다.',
      principleEn:'When a hydraulic or pneumatic fitting or port is joined by threads alone, the fine clearance within the thread engagement often cannot guarantee a complete seal. The ED-ring is fitted alongside the joint as a static seal that backs up that gap, helping maintain reliable sealing even where vibration or pressure fluctuation is present.',
      features:[
        {ko:'나사산 체결부의 정적 밀봉을 보조',en:'Backs up static sealing at threaded connections'},
        {ko:'주로 NBR 재질로 표준 규격 재고 운영',en:'Mainly stocked in NBR standard sizes'},
        {ko:'1차 씰(오링 등)과 함께 사용되어 누유 방지',en:'Used alongside a primary seal (such as an O-ring) to prevent leakage'},
        {ko:'필요 시 타 재질 주문 제작 가능',en:'Other materials available to order on request'}
      ],
      apps:[{ko:'유공압 피팅·포트 연결부',en:'Hydraulic/pneumatic fittings & port connections'},{ko:'플랜지 체결부',en:'Flange joints'},{ko:'배관 나사 체결부',en:'Threaded pipe connections'}] },

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

    { id:'hp', ko:'유공압씰', en:'Hydraulic & Pneumatic Seal', imgs:imgs2('hyd',10,'pneu',11), special:'hp',
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

    { id:'spring', ko:'스프링에너자이드씰', en:'Spring-Energized Seal', imgs:imgs('spring',9), special:'spring',
      dko:'PTFE 씰 내부에 금속 스프링을 삽입하여 극저온·극고온, 고진공, 강한 화학 환경에서도 일정한 밀봉력을 유지합니다. 반도체·항공우주·수소 등 극한 조건에 적합합니다.',
      den:'A metal spring energizes a PTFE jacket to maintain constant sealing force from cryogenic to high temperatures, high vacuum and aggressive chemicals — ideal for semiconductor, aerospace and hydrogen applications.',
      mat:['PTFE','FEP','SUS 스프링'],
      principleKo:'PTFE·UHMWPE 등 저마찰·고내화학성 폴리머로 립(lip) 형태의 자켓을 가공하고, 그 내부에 금속 스프링(17-4 스테인리스, 코발트-니켈, 인코넬 등)을 삽입합니다. 스프링이 립을 상대 표면 쪽으로 지속적으로 밀어주기 때문에, 폴리머 자체의 탄성만으로는 대응하기 어려운 극저온·극고온·고진공 조건에서도 밀봉 접촉이 끊기지 않습니다. 캔틸레버형은 저하중·저속에, 헬리컬 코일형은 중~고하중과 회전용에 주로 사용합니다.',
      principleEn:'A lip-shaped jacket is machined from a low-friction, chemically resistant polymer such as PTFE or UHMWPE, with a metal spring (17-4 stainless, cobalt-nickel or Inconel, among others) fitted inside it. Because the spring continuously pushes the lip against the mating surface, sealing contact is maintained even under cryogenic cold, high heat or high vacuum — conditions where the polymer\'s own elasticity alone would not be enough. Cantilever springs suit low-load, low-speed duty; helical-wound coil springs handle medium-to-high loads and rotary motion.',
      funcMotion:{
        titleKo:'씰 작동 및 모션', titleEn:'Seal Function and Motion',
        paragraphs:[
          {ko:'밀봉이 이루어지는 두 접촉면의 상대 운동 여부에 따라 씰링은 정적(static)과 동적(dynamic) 방식으로 나뉩니다. 정적 방식은 두 면 사이에 상대 운동이 거의 없는 경우로, 볼트로 체결되는 플랜지 이음이 대표적이며 이때는 축방향(면) 씰이 사용됩니다. 동적 방식은 두 면 중 하나가 상대적으로 움직이는 경우로, 샤프트와 보어로 구성된 유압 실린더가 대표적입니다. 동적 적용은 다시 왕복(직선) 운동과 회전(요동 포함) 운동으로 나뉘며, 이러한 조건에는 반경방향 씰(로드씰·피스톤씰)이 사용됩니다.',
           en:'Sealing applications fall into two basic types depending on whether the two contacting surfaces move relative to one another: static and dynamic. In static applications there is essentially no relative motion between the surfaces — a bolted flange joint is a typical example, and axial (face) seals are used here. In dynamic applications, at least one surface moves relative to the other, as in a hydraulic cylinder with a shaft and bore. Dynamic applications are further divided into reciprocating (linear) motion and rotary (including oscillating) motion, both of which call for radial seals such as rod seals and piston seals.'},
          {ko:'씰이 장착되는 홈(gland)의 위치와 하우징 형상에 따라 밀봉 방식은 반경방향(radial) 씰링과 축방향(axial, 면) 씰링으로 구분됩니다. 반경방향 씰링은 씰을 반경 방향으로 압축하는 홈 구조로, 샤프트에 가공되는 수(male) 홈과 보어에 가공되는 암(female) 홈이 있으며 대부분(항상은 아님) 동적 적용에 사용되어 로드씰·피스톤씰로 활용됩니다. 축방향 씰링은 씰의 축 방향으로 압축이 이루어지는 홈 구조로, 부품의 접합면에 가공되며 대부분(항상은 아님) 정적 적용에 사용되어 내측·외측 면씰로 활용됩니다.',
           en:'Depending on the location of the seal gland and the shape of the hardware, sealing can be classified as radial or axial (face) sealing. Radial sealing uses glands that compress the seal in the radial direction — male glands machined into the shaft and female glands machined into the bore — and is usually, though not always, used in dynamic applications as rod seals and piston seals. Axial sealing uses glands that compress the seal parallel to its axis, machined into the mating face of the hardware, and is usually, though not always, used in static applications as inside and outside face seals.'}
        ],
        diagrams:[
          {img:'images/web/spring-motion-dynamic-radial.png', labelKo:'동적 반경방향 씰링', labelEn:'Dynamic Radial Seal'},
          {img:'images/web/spring-motion-static-inside-face.png', labelKo:'정적 내측 축방향 씰링', labelEn:'Static Inside Face Seal'},
          {img:'images/web/spring-motion-static-outside-face.png', labelKo:'정적 외측 축방향 씰링', labelEn:'Static Outside Face Seal'}
        ]
      },
      features:[
        {ko:'스프링 하중으로 극한 조건에서도 일정한 접촉압 유지',en:'Spring load keeps contact pressure constant even in extreme conditions'},
        {ko:'PTFE 자켓의 낮은 마찰계수로 장시간 무급유 작동 가능',en:'The PTFE jacket\'s low friction allows extended dry-running operation'},
        {ko:'극저온(액체수소·질소·헬륨)부터 고온까지 대응',en:'Covers cryogenic media (liquid hydrogen, nitrogen, helium) through high temperatures'},
        {ko:'스프링 합금·자켓 재질을 유체·압력 조건에 맞춰 맞춤 선정',en:'Spring alloy and jacket material are matched to the specific fluid and pressure condition'},
        {ko:'축 이동·편심에도 유연하게 추종하는 동적 밀봉 성능',en:'Flexibly follows shaft movement and misalignment in dynamic service'}
      ],
      apps:[{ko:'반도체 스퍼터/진공 챔버',en:'Semiconductor sputter & vacuum chambers'},{ko:'액화수소·LNG 극저온 설비',en:'Liquid hydrogen & LNG cryogenic equipment'},{ko:'항공기 연료·유압 계통',en:'Aircraft fuel & hydraulic systems'},{ko:'로터리 스위블 조인트',en:'Rotary swivel joints'},{ko:'밸브 스템/시트',en:'Valve stems & seats'}] },

    { id:'lip', ko:'립씰', en:'Lip Seal', imgs:['images/web/lipseal1.jpg'],
      dko:'PTFE 소재를 립(lip) 형상으로 가공한 씰로, 낮은 마찰계수와 우수한 내화학성·내마모성을 갖췄습니다. 립 바깥을 금속(스틸) 케이스로 감싸 지지력을 보강한 타입도 함께 공급하며, 저윤활·고속 회전축이나 화학 환경에 적합합니다.',
      den:'Seals machined from PTFE into a lip profile, offering a low friction coefficient with excellent chemical and wear resistance. A version with an outer steel case reinforcing the lip is also available — suited to low-lubrication, high-speed shafts and chemical environments.',
      mat:['PTFE','PTFE+SUS 스프링','PTFE+스틸케이스'],
      principleKo:'PTFE를 얇은 립(lip) 형상으로 정밀 가공하고, 회전축과 접하는 면을 챔퍼(경사)나 스크레이퍼 형상으로 다듬어 밀봉력과 이물질 배출 성능을 동시에 확보합니다. PTFE 표면조도(마찰계수 약 0.06)가 매우 낮아 무급유 상태에서도 장시간 안정적으로 미끄러질 수 있으며, 필요 시 립 내부에 스프링을 넣어 접촉압을 보강합니다.',
      principleEn:'PTFE is precision-machined into a thin lip, with the shaft-contact edge finished as a chamfered or scraper profile to balance sealing performance with the ability to shed debris. PTFE\'s very low friction coefficient (around 0.06) lets the lip slide against the shaft reliably for long periods without lubrication; a spring can be added inside the lip where extra, consistent contact force is needed.',
      features:[
        {ko:'낮은 마찰계수(약 0.06)로 무급유·고속 회전축에 적합',en:'Very low friction coefficient (~0.06) suited to dry-running, high-speed shafts'},
        {ko:'-260~260℃ 초광범위 사용 온도',en:'Extremely wide temperature capability, roughly -260°C to 260°C'},
        {ko:'카본·유리섬유·MoS2·스테인리스 등 충전재로 내마모성·내크리프성 강화',en:'Carbon, glass fiber, MoS2 and stainless-steel fillers boost wear and creep resistance as needed'},
        {ko:'거의 모든 화학물질에 반응하지 않는 화학적 불활성',en:'Chemically inert to virtually all process fluids'},
        {ko:'챔퍼립·스크레이퍼립 등 형상 선택으로 세척성·밀봉성 조절',en:'Chamfered or scraper lip profiles can be selected to balance sealing and wash-down cleanability'},
        {ko:'금속 케이스로 립 바깥을 보강한 타입은 하우징 압입 시 강성이 필요한 경우에 적합',en:'The steel-cased variant adds rigidity for press-fit installation into a housing'}
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
      dko:'회전축에 장착되어 내부 윤활유의 누출과 외부 이물질의 유입을 방지하는 오일씰입니다. NBR·FKM 소재로 일반 산업기계부터 유압모터까지 폭넓게 적용됩니다.',
      den:'Oil seals fitted on rotating shafts to prevent internal lubricant leakage and external contaminant ingress. Available in NBR and FKM for everything from general machinery to hydraulic motors.',
      mat:['NBR','FKM'],
      principleKo:'금속 케이스에 고무 립을 가황 접착하고, 립 뒤에 가터 스프링(garter spring)을 둘러 축을 향한 조임력을 일정하게 유지합니다. 1차 립이 오일 누출을 막고, 보조(더스트) 립이 있는 타입은 외부의 먼지·수분 유입을 추가로 차단합니다. 케이스는 금속 단독형, 고무 피복형(러버 커버드 OD) 등으로 구분되며, 하우징 재질과 표면 상태에 맞춰 선택합니다.',
      principleEn:'A rubber lip is vulcanized to a metal case, with a garter spring wrapped behind it to maintain constant radial load against the shaft. The primary lip retains lubricant; where a secondary (dust) lip is present, it additionally excludes external dirt and moisture. Cases come in bare-metal-OD and rubber-covered-OD styles, chosen to suit the housing material and bore finish.',
      features:[
        {ko:'가터 스프링으로 축 마모·편심에도 일정한 접촉압 유지',en:'Garter spring maintains consistent contact force despite shaft wear or eccentricity'},
        {ko:'1차 립(오일 누출 방지) + 보조 립(이물질 차단) 조합 선택 가능',en:'Primary lip (oil retention) can be combined with a secondary lip (contaminant exclusion)'},
        {ko:'금속 OD / 고무 피복 OD 케이스로 하우징 재질에 맞춰 선정',en:'Metal-OD or rubber-covered-OD case options matched to housing material'},
        {ko:'표준형 기준 축속도·편심·압력에 대한 설계 한계값 보유(고속·고압은 특수설계 대응)',en:'Standard designs have defined limits for shaft speed, eccentricity and pressure — special designs cover higher-speed or higher-pressure duty'}
      ],
      shapeTable:{
        titleKo:'형상별 종류 &amp; 용도', titleEn:'Shape Types &amp; Applications',
        cols:[{ko:'형상',en:'Shape'},{ko:'용도',en:'Use'},{ko:'최대압력',en:'Max Pressure',short:true},{ko:'특징',en:'Features'}],
        rows:[
          [{img:'images/web/oilseal-shapes/tcsc.jpg',alt:'TC, SC 단면도'}, {ko:'기름·물',en:'Oil & water'}, '0.3 kg/cm²', {ko:'립(LIP)에 스프링이 들어있는 가장 많이 사용되는 형식. TC는 더스트립이 있는 노출형, SC는 더스트립이 없는 밀봉형입니다.',en:'The most widely used type, with a spring built into the lip. TC is exposed with a dust lip; SC is enclosed without one.'}],
          [{img:'images/web/oilseal-shapes/tbsb.jpg',alt:'TB, SB 단면도'}, {ko:'기름·물',en:'Oil & water'}, '0.3 kg/cm²', {ko:'립에 스프링이 들어있으며, 립 사이에 그리스를 충전하면 무윤활유 상태에서도 사용이 가능합니다.',en:'Spring-loaded lip; packing grease between the lips allows operation even without lubricating oil.'}],
          [{img:'images/web/oilseal-shapes/kckb.jpg',alt:'KC, KB 단면도'}, {ko:'그리스·더스트씰',en:'Grease & dust seal'}, {ko:'압력부 사용불가',en:'Not for pressurized use'}, {ko:'스프링이 없는 형식으로 먼지·토사 유입 방지용 더스트립이 부착되어 있습니다.',en:'No spring; fitted with a dust lip to block dirt and sand ingress.'}],
          [{img:'images/web/oilseal-shapes/vcvb.jpg',alt:'VC, VB 단면도'}, {ko:'그리스·더스트씰',en:'Grease & dust seal'}, {ko:'압력부 사용불가',en:'Not for pressurized use'}, {ko:'스프링이 없는 씰 립 형식으로 TC·TB형 등과 조립해 사용하기도 합니다. 주속·편심이 지나치게 큰 경우엔 부적합합니다.',en:'Springless seal lip, sometimes assembled together with TC/TB types. Not suitable for excessive peripheral speed or eccentricity.'}],
          [{img:'images/web/oilseal-shapes/tasa.jpg',alt:'TA, SA 단면도'}, {ko:'기름·물 등',en:'Oil, water, etc.'}, {ko:'압력 상승가능',en:'Some pressure rise possible'}, {ko:'립에 스프링이 들어있고, 립 변형을 줄이는 보강환을 갖춘 구조입니다. TA는 더스트립 부착, SA는 미부착입니다.',en:'Spring-loaded lip with a reinforcing ring that reduces lip deformation. TA has a dust lip, SA does not.'}],
          [{img:'images/web/oilseal-shapes/dcdb.jpg',alt:'DC, DB 단면도'}, {ko:'2가지 액 분리',en:'Separates two fluids'}, '0.3 kg/cm²', {ko:'스프링이 들어있고 씰 립 2개를 반대방향으로 배치해 서로 다른 유체를 분리합니다.',en:'Spring-loaded with two seal lips facing opposite directions to separate two different fluids.'}],
          [{img:'images/web/oilseal-shapes/tcv.jpg',alt:'TCV 단면도'}, {ko:'기름·물',en:'Oil & water'}, '3 kg/cm²', {ko:'립 길이가 짧고 강성이 높아 접촉압력 과다 상승을 방지합니다. 스프링을 축 방향으로 배치해 립을 더 효과적으로 지지하는 고압 사양입니다.',en:'Shorter, stiffer lip that prevents excessive contact pressure buildup; a high-pressure design with the spring positioned axially for stronger lip support.'}]
        ]
      },
      matTable:{
        titleKo:'재질', titleEn:'Materials',
        cols:[{ko:'재질',en:'Material'},{ko:'용도',en:'Use'},{ko:'사용 온도',en:'Temp. Range',short:true}],
        rows:[
          [{ko:'NBR',en:'NBR'}, {ko:'표준 재질 · 내유·내마모성 우수, 일반 산업기계·유압라인에 적합',en:'Standard material — excellent oil/abrasion resistance, suited to general industrial machinery and hydraulic lines'}, '-30 ~ +100℃'],
          [{ko:'FKM',en:'FKM'}, {ko:'옵션 재질 · 내열성·내화학성이 필요한 고온 환경에 적합',en:'Optional material — for high-temperature environments requiring heat and chemical resistance'}, '-15 ~ +200℃']
        ]
      },
      apps:[{ko:'유압모터/감속기',en:'Hydraulic motors & gearboxes'},{ko:'일반 산업용 회전기계',en:'General industrial rotating machinery'},{ko:'자동차/중장비 구동축',en:'Automotive & heavy-equipment drive shafts'},{ko:'펌프 축',en:'Pump shafts'}] },

    { id:'piston', ko:'피스톤링', en:'Piston Ring', imgs:imgs('piston',1), special:'piston',
      dko:'유압 변속기·클러치·토크컨버터 등 회전·동력전달 장치에 사용되는 피스톤 링입니다. 조인트(컷) 형상별로 씰링 성능과 조립성을 최적화해 제작합니다. 문의 시 실린더 최소 내경, 링 폭, 반경방향 두께, 조인트 형식, 재질을 알려주시면 규격 검토를 도와드립니다.',
      den:'Piston rings used in hydraulic transmissions, clutches and torque converters. Joint/cut geometry is optimized per application for sealing performance and ease of assembly. For a quote, please provide the minimum cylinder diameter, ring width, radial wall thickness, joint style and material.',
      mat:['고강도 주철','브론즈 합금'],
      principleKo:'링이 실린더 벽에 면압을 형성해 오일 흐름과 밀봉을 제어하며, 조인트(컷) 형상에 따라 밀봉·배유 성능이 달라집니다. 테이퍼 페이스는 실린더 벽 면압이 높아 빠르게 안착되고, 벤티드 오일링은 슬롯을 통해 배유 경로를 형성하며, 후크 조인트는 카운터보어·블라인드 조립 등 링 구속이 필요한 유압 변속기·클러치·토크컨버터에 가장 많이 사용됩니다.',
      principleEn:'The ring forms a sealing contact pressure against the cylinder wall to control oil flow; sealing and drainage behavior differ by joint/cut geometry. A taper face seats quickly with high wall pressure, a vented oil ring uses slots to form a drainage path, and a hook joint — the most common type for hydraulic transmissions, clutches and torque converters — suits applications needing ring retention such as counterbore or blind assembly.',
      features:[
        {ko:'테이퍼 페이스·앵글 컷·벤티드 오일링·스텝 컷·인터록 조인트·버트 컷·후크 조인트 등 다양한 조인트 형상 대응',en:'Wide range of joint/cut types available — taper face, angle cut, vented oil ring, step cut, interlock joint, butt cut, hook joint and more'},
        {ko:'후크 조인트 링은 SAE J281 규격 준수 — 조립 용이·우수한 씰링·긴 수명',en:'Hook joint rings comply with SAE J281 — easy assembly, strong sealing, long service life'},
        {ko:'좌측각(Left-hand) 컷이 업계 표준',en:'Left-hand cut is the industry-standard orientation'},
        {ko:'표준 코팅은 인산망간(마찰 저항 감소·방청, 초기 길들임에 유리)이며, 용도에 따라 크롬·주석 등 특수 도금도 대응 가능',en:'Standard coating is manganese phosphate — reduces friction, prevents rust and aids break-in; chrome, tin and other special platings are available for specific applications'},
        {ko:'홈 폭은 링 최대 폭보다 여유를 두고 반경방향 간극도 열팽창을 고려해 설계 — 문의 시 사양에 맞는 그루브(홈) 치수 설계를 지원해 드립니다',en:'Groove width should exceed the ring’s maximum width, and radial clearance should allow for thermal expansion — contact us for groove-dimension design support matched to your specification'},
        {ko:'비표준 조인트 치수 주문 제작 가능, 재질은 고강도 주철·브론즈 합금 외 니켈 레지스트 주철·스테인리스강 등으로 대안 지정 가능',en:'Non-standard joint dimensions available to order; alternative materials such as Ni-Resist cast iron or stainless steel can be specified in addition to high-strength cast iron and bronze alloy'}
      ],
      apps:[{ko:'유압 변속기',en:'Hydraulic transmissions'},{ko:'클러치',en:'Clutches'},{ko:'토크컨버터',en:'Torque converters'},{ko:'유정압 변속기',en:'Hydrostatic transmissions'}] },

    { id:'isolator', ko:'베어링아이솔레이터', en:'Bearing Isolator (BPS)', imgs:['images/web/isolator1.jpg'],
      dko:'회전체와 고정체 사이의 미세 간극을 이용한 비접촉 방식으로 베어링을 보호하는 아이솔레이터(BPS)입니다. 접촉 마찰이 없어 마모 없이 사용 가능하며, 오염물질 유입과 윤활유 누출을 동시에 차단합니다.',
      den:'A non-contact bearing protector/isolator (BPS) that uses a fine labyrinth gap between rotating and stationary elements. Virtually wear-free, it blocks both contamination ingress and lubricant loss.',
      mat:['PTFE','FKM'],
      principleKo:'회전환과 고정환이 서로 맞물리는 미로(labyrinth) 형태의 미세 간극을 형성하되, 두 부품이 직접 접촉하지는 않습니다. 이 좁고 구불구불한 경로가 물리적 장벽 역할을 해 오염물질의 침입과 윤활유의 유출을 억제하며, 비접촉 구조이기 때문에 마모가 거의 없어 오랜 기간 안정적으로 사용할 수 있습니다. 모델에 따라 O-ring 보조 실링이나 배수 홈을 추가해 밀봉 성능을 높이기도 합니다.',
      principleEn:'A rotating ring and a stationary ring interlock to form a fine labyrinth clearance without ever touching each other. That narrow, winding path acts as a physical barrier that resists contaminant ingress and lubricant loss, and because there is no rubbing contact, wear is virtually eliminated — giving the isolator a long, stable service life. Depending on the model, an auxiliary O-ring or drainage groove can be added to further improve sealing performance.',
      features:[
        {ko:'비접촉 구조로 마모가 없어 안정적으로 장기간 사용 가능',en:'Non-contact design — virtually no wear, stable long-term service life'},
        {ko:'접촉 마찰이 없어 발열·동력 손실이 최소화',en:'No contact friction, so heat generation and power loss are minimal'},
        {ko:'분당 최대 약 25m/sec 둘레속도, -40~120℃ 대응(제품군별 상이)',en:'Handles surface speeds up to roughly 25 m/sec and -40 to 120°C, depending on the series'},
        {ko:'씰은 PTFE 충전재, 보조 오링은 FKM(Viton®)이 표준이며 용도에 따라 FDA·NBR·실리콘·FFKM 등으로 대안 지정 가능',en:'Standard materials are PTFE filler (seal) and FKM/Viton® (auxiliary O-ring); FDA-grade, NBR, silicone or FFKM alternatives can be specified as needed'},
        {ko:'모터·펌프·기어박스 등 다양한 회전 장비에 규격 대응',en:'Sized to fit a wide range of rotating equipment — motors, pumps, gearboxes'}
      ],
      matTable:{
        titleKo:'재질', titleEn:'Materials',
        cols:[{ko:'구성',en:'Component'},{ko:'표준 재질',en:'Standard Material'},{ko:'옵션',en:'Option'}],
        rows:[
          [{ko:'씰 (Seal)',en:'Seal'}, {ko:'PTFE 충전재 (PTFE filler)',en:'PTFE filler'}, {ko:'FDA 대응 가능',en:'FDA-grade available'}],
          [{ko:'오링 (O-ring)',en:'O-ring'}, {ko:'FKM (Viton®)',en:'FKM (Viton®)'}, {ko:'NBR, FDA, 실리콘, FFKM 가능',en:'NBR, FDA-grade, Silicone, FFKM available'}]
        ]
      },
      typeCards:{
        titleKo:'타입별 재질 &amp; 작동 범위', titleEn:'Type-by-Type Materials &amp; Operating Range',
        cards:[
          { type:'THBI-01', img:'images/web/thbi01.jpg', alt:'THBI-01 구조도',
            specs:[[{ko:'재질',en:'Material'},'PTFE/FKM'],[{ko:'압력',en:'Pressure'},'0 bar'],[{ko:'온도',en:'Temp.'},'-40 ~ 120℃'],[{ko:'속도',en:'Speed'},'25 m/sec 이하'],[{ko:'변위',en:'Displacement'},'0.3mm']],
            descKo:'주로 수평 구조 장비에 사용됩니다.', descEn:'Mainly used in horizontal-structure equipment.' },
          { type:'THBI-02', img:'images/web/thbi02.jpg', alt:'THBI-02 구조도',
            specs:[[{ko:'재질',en:'Material'},'PTFE/FKM'],[{ko:'압력',en:'Pressure'},'0 bar'],[{ko:'온도',en:'Temp.'},'-40 ~ 120℃'],[{ko:'속도',en:'Speed'},'25 m/sec 이하'],[{ko:'변위',en:'Displacement'},'0.3mm']],
            descKo:'수평 구조 장비에 사용되며, 수직 구조 장비 상단부에도 적극 추천됩니다.', descEn:'Used in horizontal-structure equipment; also strongly recommended for the top of vertical-structure equipment.' },
          { type:'THBI-03', img:'images/web/thbi03.jpg', alt:'THBI-03 구조도',
            specs:[[{ko:'재질',en:'Material'},'PTFE/FKM'],[{ko:'압력',en:'Pressure'},'0 bar'],[{ko:'온도',en:'Temp.'},'-40 ~ 120℃'],[{ko:'속도',en:'Speed'},'25 m/sec 이하'],[{ko:'변위',en:'Displacement'},'0.3mm']],
            descKo:'내장 플랜지 타입으로 기존 립씰을 대체하며 제한된 공간에 사용 가능합니다. 수직 구조 상단부 사용은 권장하지 않습니다.', descEn:'A built-in flange type that can replace conventional lip seals in tight spaces; not recommended for the top of vertical-structure equipment.' },
          { type:'THBI-04', img:'images/web/thbi04.jpg', alt:'THBI-04 구조도',
            specs:[[{ko:'재질',en:'Material'},'PTFE/SUS/FKM'],[{ko:'압력',en:'Pressure'},'0.3 bar'],[{ko:'온도',en:'Temp.'},'-40 ~ 120℃'],[{ko:'속도',en:'Speed'},'25 m/sec 이하'],[{ko:'변위',en:'Displacement'},'0.3mm']],
            descKo:'립씰 기술이 적용되어 액체가 가득 찬 수평 구조 장비나 수직 구조 하단부에 사용됩니다.', descEn:'Uses lip-seal technology; suited to horizontal equipment or the lower section of vertical equipment fully filled with liquid.' }
        ],
        noteKo:'규격(축경) Ø20~200mm 대응, 상세 치수 규격표는 문의 바랍니다.',
        noteEn:'Shaft sizes span Ø20–200mm — contact us for detailed dimensional charts.'
      },
      apps:[{ko:'전동기 베어링 보호',en:'Electric motor bearing protection'},{ko:'펌프',en:'Pumps'},{ko:'기어박스',en:'Gearboxes'},{ko:'송풍기/블로워',en:'Fans & blowers'}] },

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

    { id:'molded', ko:'금형제작품', en:'Molded Rubber & Urethane Products', imgs:imgs('molded',1),
      dko:'도면을 기반으로 금형을 제작해 우레탄 및 각종 고무 제품을 성형 양산합니다. 완충재·롤러·휠부터 범퍼·시트·다이어프램까지 다양한 형상에 대응합니다.',
      den:'We build molds from customer drawings to produce urethane and rubber parts — cushions, rollers, wheels, bumpers, sheets, diaphragms and more — in production quantities.',
      mat:['우레탄(PU)','NBR','FKM(Viton)','천연고무(NR)'],
      principleKo:'도면 또는 샘플을 기반으로 제품 형상에 맞는 금형을 제작한 뒤, 우레탄이나 고무를 그 금형에 사출·압축 성형해 동일한 형상의 제품을 반복 생산합니다. 금형 초기 제작 비용은 발생하지만, 이후로는 절삭 가공 대비 빠르고 일관된 품질로 양산할 수 있습니다.',
      principleEn:'A mold is built to match the required shape based on a drawing or sample, then urethane or rubber is injection- or compression-molded into it to reproduce the part consistently at volume. There is an upfront tooling cost, but once the mold exists, production is faster and more consistent than machining each part individually.',
      features:[
        {ko:'콘크리트펌프카·브레이커·천공장비용 우레탄 쿠션·롤러·휠',en:'Urethane cushions, rollers and wheels for concrete pump trucks, breakers and drilling equipment'},
        {ko:'고무 범퍼·시트·다이어프램 등 형상 대응',en:'Rubber bumpers, sheets, diaphragms and other shapes'},
        {ko:'우레탄(PU)부터 NBR~FKM 등 고무까지 소재 선택',en:'Material choice spans polyurethane through NBR–FKM rubber compounds'},
        {ko:'도면·샘플 기반 금형 제작 후 양산 대응',en:'Mold built from drawing or sample, then produced at volume'}
      ],
      apps:[{ko:'건설장비(콘크리트펌프카·브레이커·천공장비)',en:'Construction equipment (concrete pump trucks, breakers, drilling rigs)'},{ko:'산업기계 완충·방진 부품',en:'Industrial machinery cushioning & vibration-damping parts'},{ko:'맞춤 고무 성형품',en:'Custom molded rubber parts'}] },

    { id:'acm', ko:'ACM베어링', en:'ACM Bearing', imgs:imgs('acm',2),
      dko:'특수 고분자 폴리에스테르 수지와 정밀섬유·첨가제로 된 화합물을 겹겹이 적층해 만든 고기능 복합체 베어링(슬라이딩 부싱·가이드링)입니다. 금속보다 가볍고 경제적이면서 고하중·저마찰계수·내화학성이 뛰어나 청동 부시를 대체합니다. ISO 9001:2015 및 KR·DNV·ABS·BV·CCS 등 5대 선급 인증을 획득한 소재로, 선박·교량·원자력·화력발전소·펌프·자동차·건설장비 등에 폭넓게 적용됩니다.',
      den:'A high-performance composite bearing (sliding bushing/guide ring) built by layering a compound of special polyester resin, precision fiber and additives. Lighter and more economical than metal, with excellent load capacity, low friction and chemical resistance, it replaces bronze bushings. Certified to ISO 9001:2015 and by five major classification societies — KR, DNV, ABS, BV and CCS — it is widely used in ships, bridges, nuclear/thermal power plants, pumps, automotive and construction equipment.',
      mat:['TRIBOTEX 7 (표준형)','TRIBOTEMP 10 (고온형)','TRIBOCHEM 11 (내화학형)'],
      principleKo:'폴리에스테르 수지에 PTFE·흑연·MoS2 등 저마찰 첨가제를 배합한 뒤 폴리에스테르·면·노멕스 등 보강 원단과 함께 맨드릴에 감아(coiling) 성형하고, 오븐에서 경화(curing)한 뒤 맨드릴에서 압출 성형해 제작합니다. 섬유 보강층이 하중을 지지하고, 수지에 섞인 고체 윤활 성분이 표면 마찰을 낮춰줍니다.',
      principleEn:'PTFE, graphite and MoS2 low-friction additives are compounded into a polyester resin, then coiled onto a mandrel together with a reinforcing fabric — polyester, cotton or Nomex — cured in an oven, and finally pressed off the mandrel to finish the part. The fiber reinforcement carries the load, while the solid-lubricant additives blended into the resin keep surface friction low.',
      features:[
        {ko:'고하중 대응 — 정적 압축강도 최대 375N/㎟, 동적 100N/㎟급으로 청동 부시를 대체',en:'High load capacity — static compressive strength up to 375 N/mm², dynamic 100 N/mm², replacing bronze bushings'},
        {ko:'저마찰·자기윤활 — 건식 마찰계수 0.13~0.15로 무급유 운전이 가능',en:'Low friction & self-lubricating — dry friction coefficient of 0.13–0.15 enables oil-free operation'},
        {ko:'낮은 마모·장수명 — 열 전이가 적어 경도를 유지해 우수한 내마모성을 발휘',en:'Low wear, long life — minimal heat transfer keeps hardness stable, giving excellent wear resistance'},
        {ko:'저흡수·저팽창 — 물 흡수율 0.15% 미만으로 높은 치수 안정성과 정밀 공차 확보',en:'Low absorption & swell — water absorption under 0.15% ensures high dimensional stability and precise tolerances'},
        {ko:'낮은 열팽창 — 정밀 공차 설계가 가능해 축 진동을 저감',en:'Low thermal expansion — enables precise tolerance design and reduces shaft vibration'},
        {ko:'다중 유체 윤활 — 건식·그리스·오일·수중 등 모든 윤활 조건에서 사용 가능',en:'Multi-lubrication compatible — usable dry or with grease, oil, or submerged in water'},
        {ko:'내충격·내식·무오염 — Charpy 충격강도 100kJ/㎡, 우수한 내식성으로 환경친화적 운전',en:'Impact & corrosion resistant, non-contaminating — Charpy impact strength of 100 kJ/m² with strong corrosion resistance for clean operation'},
        {ko:'저소음·신속 대응 — 저진동·저소음 운전이 가능하며, 재고 운영 및 긴급 제작 대응이 신속',en:'Low noise, fast turnaround — low-vibration, low-noise operation, with stock inventory and rapid custom production'}
      ],
      matTable:{
        titleKo:'재질 그레이드', titleEn:'Material Grades',
        cols:[{ko:'물성',en:'Property'},{ko:'표준형 TRIBOTEX 7',en:'Standard TRIBOTEX 7',short:true},{ko:'고온형 TRIBOTEMP 10',en:'High-Temp TRIBOTEMP 10',short:true},{ko:'내화학형 TRIBOCHEM 11',en:'Chem-Resistant TRIBOCHEM 11',short:true}],
        rows:[
          [{ko:'압축강도',en:'Compressive Strength'}, '375 MPa', '375 MPa', '375 MPa'],
          [{ko:'압축 탄성률',en:'Compressive Modulus'}, '2,750 MPa', '3,400 MPa', '2,750 MPa'],
          [{ko:'충격강도',en:'Impact Strength'}, '100 kJ/㎡', '100 kJ/㎡', '100 kJ/㎡'],
          [{ko:'밀도',en:'Density'}, '1.30 g/㎤', '1.30 g/㎤', '1.25 g/㎤'],
          [{ko:'경도 (Rockwell M)',en:'Hardness (Rockwell M)'}, '100', '100', '70'],
          [{ko:'마찰계수 (건식)',en:'Friction Coefficient (Dry)'}, '0.13', '0.18', '0.04'],
          [{ko:'최대 사용온도',en:'Max. Operating Temp.'}, '130℃', '200℃', '130℃'],
          [{ko:'최소 사용온도',en:'Min. Operating Temp.'}, '-40℃', '-40℃', '-40℃'],
          [{ko:'물 팽창률',en:'Water Swell'}, '<0.15%', '<0.50%', '<0.15%']
        ]
      },
      apps:[
        {ko:'선박 (러더·프로펠러 샤프트 베어링)',en:'Shipbuilding (rudder & propeller-shaft bearings)'},
        {ko:'오프쇼어 (크레인·윈치 베어링, 무어링)',en:'Offshore (crane/winch bearings, mooring)'},
        {ko:'수력발전 (터빈·가이드베인 베어링)',en:'Hydropower (turbine & guide-vane bearings)'},
        {ko:'인쇼어 (록게이트·피시로크 베어링)',en:'Inshore (lock-gate & fish-lock bearings)'},
        {ko:'유체동력 (로드·피스톤 가이드/웨어링)',en:'Fluid power (rod/piston guides & wear rings)'},
        {ko:'건설장비 (붐 슬라이드 패드, 크러셔)',en:'Construction equipment (boom slide pads, crushers)'},
        {ko:'기계·공정설비 (펌프 베어링, 사출성형기)',en:'Machinery & process equipment (pump bearings, injection molders)'},
        {ko:'철도 (트러니언 베어링, 웨어패드)',en:'Railway (trunnion bearings, wear pads)'}
      ] },

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

    { id:'mechanical', ko:'메카니컬씰', en:'Mechanical Seal', imgs:['images/web/mechanical1.jpg'],
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
  // href points to the static, individually-crawlable product page (products/{id}.html);
  // onclick keeps the fast in-page SPA switch for JS-enabled visitors.
  var side=document.getElementById('side');
  var sideHtml='<div class="itemlist">';
  ITEMS.forEach(function(it){
    sideHtml+='<a class="item" data-item="'+it.id+'" href="products/'+it.id+'.html" onclick="SS.select(\''+it.id+'\');return false;">'
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
  // Generic data-table renderer reused by any item's matTable/specTable (재질/규격표 sections)
  // cols: [{ko,en}, ...]   rows: [ [cellOrSpan, cellOrSpan, ...], ... ] — a cell is either a plain
  // string (shown as-is, language-agnostic — numbers/codes), {ko,en} (bilingual span pair),
  // or {img,alt} (a small centered thumbnail, e.g. a shape/structure diagram).
  // cols may mark a column {short:true} (e.g. a temp range or numeric spec) to get the
  // bold, no-wrap "mtemp" treatment; anything else just wraps normally.
  function renderDataTable(cols, rows){
    var thead = '<tr>' + cols.map(function(c){ return '<th><span class="ko">'+c.ko+'</span><span class="en">'+c.en+'</span></th>'; }).join('') + '</tr>';
    var tbody = rows.map(function(r){
      return '<tr>' + r.map(function(cell,i){
        var cls = i===0 ? ' class="mname"' : ((cols[i] && cols[i].short) ? ' class="mtemp"' : '');
        if(typeof cell === 'string') return '<td'+cls+'>'+cell+'</td>';
        if(cell && cell.img) return '<td class="mimg"><img src="'+cell.img+'" alt="'+(cell.alt||'')+'" loading="lazy"></td>';
        return '<td'+cls+'><span class="ko">'+cell.ko+'</span><span class="en">'+cell.en+'</span></td>';
      }).join('') + '</tr>';
    }).join('');
    return '<table class="mtable"><thead>'+thead+'</thead><tbody>'+tbody+'</tbody></table>';
  }

  // Card-grid renderer for a small set of product "types" that each need a sizeable
  // labeled diagram/photo plus a short spec list — used where a dense multi-column
  // table would squeeze the image down to unreadable size (e.g. bearing isolator types).
  // t: {titleKo,titleEn, cards:[{type,img,alt,specs:[[{ko,en},val],...],descKo,descEn}], noteKo,noteEn}
  function typeCardsHtml(t){
    var cards = t.cards.map(function(c){
      var specsHtml = (c.specs||[]).map(function(s){
        return '<tr><td><span class="ko">'+s[0].ko+'</span><span class="en">'+s[0].en+'</span></td><td>'+s[1]+'</td></tr>';
      }).join('');
      var label = (c.type && typeof c.type === 'object') ? '<span class="ko">'+c.type.ko+'</span><span class="en">'+c.type.en+'</span>' : c.type;
      return '<div class="typecard">'
        + '<div class="tcimgwrap"><img src="'+c.img+'" alt="'+(c.alt||'')+'" loading="lazy">'+(label ? '<span class="tclabel">'+label+'</span>' : '')+'</div>'
        + (c.specs && c.specs.length ? '<table class="tcspecs"><tbody>'+specsHtml+'</tbody></table>' : '')
        + (c.descKo ? '<p class="desc" style="margin-top:10px;font-size:13px"><span class="ko">'+c.descKo+'</span><span class="en">'+c.descEn+'</span></p>' : '')
        + '</div>';
    }).join('');
    return '<h3><span class="ko">'+t.titleKo+'</span><span class="en">'+t.titleEn+'</span></h3><div class="typecards">'+cards+'</div>'
      + (t.noteKo ? '<p class="desc" style="margin-top:12px;font-size:13px"><span class="ko">'+t.noteKo+'</span><span class="en">'+t.noteEn+'</span></p>' : '');
  }

  // Prose sub-sections (e.g. static/dynamic, radial/axial) plus a row of captioned
  // reference diagrams — used for topics that need explanation beyond a single
  // principle paragraph but aren't a spec table. fm:{titleKo,titleEn,paragraphs:[{ko,en}],diagrams:[{img,labelKo,labelEn}]}
  function funcMotionHtml(fm){
    var paras = fm.paragraphs.map(function(p){ return '<p><span class="ko">'+p.ko+'</span><span class="en">'+p.en+'</span></p>'; }).join('');
    var diagrams = fm.diagrams.map(function(d){
      return '<div class="motiondiag"><img src="'+d.img+'" alt="'+(d.labelEn||'')+'" loading="lazy"><span class="motiondiaglabel"><span class="ko">'+d.labelKo+'</span><span class="en">'+d.labelEn+'</span></span></div>';
    }).join('');
    return '<h3><span class="ko">'+fm.titleKo+'</span><span class="en">'+fm.titleEn+'</span></h3>'
      + paras
      + '<div class="motiondiags">'+diagrams+'</div>';
  }

  function bodyHtml(it){
    var out='';
    if(it.principleKo){
      out+='<h3><span class="ko">작동 원리 &amp; 구조</span><span class="en">Principle &amp; Structure</span></h3>'
        +'<p><span class="ko">'+it.principleKo+'</span><span class="en">'+it.principleEn+'</span></p>';
    }
    if(it.funcMotion){ out+=funcMotionHtml(it.funcMotion); }
    if(it.features && it.features.length){
      out+='<h3><span class="ko">주요 특징</span><span class="en">Key Features</span></h3><ul class="flist">'
        + it.features.map(function(f){ return '<li><span class="ko">'+f.ko+'</span><span class="en">'+f.en+'</span></li>'; }).join('')
        + '</ul>';
    }
    function tableSection(t){
      return '<h3><span class="ko">'+t.titleKo+'</span><span class="en">'+t.titleEn+'</span></h3>'
        + renderDataTable(t.cols, t.rows)
        + (t.noteKo ? '<p class="desc" style="margin-top:12px;font-size:13px"><span class="ko">'+t.noteKo+'</span><span class="en">'+t.noteEn+'</span></p>' : '');
    }
    if(it.shapeTable){ out+=tableSection(it.shapeTable); }
    if(it.matTable){ out+=tableSection(it.matTable); }
    if(it.specTable){ out+=tableSection(it.specTable); }
    if(it.typeCards){ out+=typeCardsHtml(it.typeCards); }
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
  var oringSizeView = null; // null | 'as568' | 'jis' — detailed size-chart drill-down within the spec tab

  function sizeColsHtml(rows){
    return '<div class="sizecol">' + rows.map(function(r){
      return '<div class="sizerow"><b>'+r.n+'</b><span>ID '+r.i+'</span><span>CS '+r.c+'</span></div>';
    }).join('') + '</div>';
  }

  function renderOringSpecBody(){
    var t3 = ORING_TABS.spec;
    if(oringSizeView==='as568'){
      return '<button class="backlink" onclick="SS.oringSize(null)">← <span class="ko">규격 목록으로</span><span class="en">Back to list</span></button>'
        + '<h4 class="sizeh"><span class="ko">AS568 규격표 · 001~932</span><span class="en">AS568 Size Chart</span></h4>'
        + '<p class="desc" style="margin-bottom:14px"><span class="ko">번호(Dash No.) · 내경(ID) · 두께(CS) 단위 mm. 대표 치수이며 상세·특수 규격은 문의 바랍니다.</span><span class="en">Dash No. · Inner Diameter (ID) · Cross-Section (CS) in mm. Representative sizes — contact us for detailed or special specifications.</span></p>'
        + sizeColsHtml(ORING_SIZES.as568);
    }
    if(oringSizeView==='jis'){
      var secs=[['P','P 계열','P Series'],['G','G 계열','G Series'],['S','S 계열','S Series'],['V','V 계열','V Series']];
      return '<button class="backlink" onclick="SS.oringSize(null)">← <span class="ko">규격 목록으로</span><span class="en">Back to list</span></button>'
        + '<h4 class="sizeh"><span class="ko">JIS B 2401 규격표 · P·G·S·V</span><span class="en">JIS B 2401 Size Chart — P/G/S/V</span></h4>'
        + '<p class="desc" style="margin-bottom:14px"><span class="ko">번호(Dash No.) · 내경(ID) · 두께(CS) 단위 mm. 대표 치수이며 상세·특수 규격은 문의 바랍니다.</span><span class="en">Dash No. · Inner Diameter (ID) · Cross-Section (CS) in mm. Representative sizes — contact us for detailed or special specifications.</span></p>'
        + secs.map(function(s){
            return '<h5 class="sizesub"><span class="ko">'+s[1]+'</span><span class="en">'+s[2]+'</span></h5>'
              + sizeColsHtml(ORING_SIZES.jis[s[0]]);
          }).join('');
    }
    return '<p class="desc"><span class="ko">'+t3.bodyKo+'</span><span class="en">'+t3.bodyEn+'</span></p><div class="dcards">'
      + t3.items.map(function(x,i){
          var key = i===0 ? 'as568' : (i===1 ? 'jis' : null);
          var cls = key ? ' class="dcard clickable" onclick="SS.oringSize(\''+key+'\')"' : ' class="dcard"';
          var more = key ? '<span class="more"><span class="ko">전체 규격표 보기 →</span><span class="en">View full chart →</span></span>' : '';
          return '<div'+cls+'><h5><span class="ko">'+x.ko+'</span><span class="en">'+x.en+'</span></h5>'
            +'<p><span class="ko">'+x.dko+'</span><span class="en">'+x.den+'</span></p>'+more+'</div>';
        }).join('') + '</div>';
  }

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
        return '<tr><td class="mname">'+r.mat+'<br><span style="font-weight:400;color:var(--muted);font-size:12px"><span class="ko">'+r.sub+'</span><span class="en">'+r.subEn+'</span></span></td>'
          +'<td><span class="ko">'+r.advKo+'</span><span class="en">'+r.advEn+'</span></td>'
          +'<td class="mcau"><span class="ko">'+r.cauKo+'</span><span class="en">'+r.cauEn+'</span></td>'
          +'<td class="mtemp">'+r.temp+'</td></tr>';
      }).join('');
      var certCards = t2.certs.map(function(c){
        return '<div class="certcard"><span class="certbadge">'+c.code+'</span><div><h5>'+c.name+'</h5>'
          +'<p class="csub"><span class="ko">'+c.subKo+'</span><span class="en">'+c.subEn+'</span></p>'
          +'<p class="cdetail">'+c.detail+'</p></div></div>';
      }).join('');
      tabBody = '<p class="desc"><span class="ko">'+t2.bodyKo+'</span><span class="en">'+t2.bodyEn+'</span></p>'
        + '<table class="mtable"><thead><tr>'
        + '<th><span class="ko">재질</span><span class="en">Material</span></th>'
        + '<th><span class="ko">주요 특성·장점</span><span class="en">Key Characteristics</span></th>'
        + '<th><span class="ko">주의·취약 매체</span><span class="en">Cautions</span></th>'
        + '<th><span class="ko">사용 온도</span><span class="en">Temp. Range</span></th>'
        + '</tr></thead><tbody>'+rows+'</tbody></table>'
        + '<h4 class="sizeh" style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">'+t2.certsKo+'</span><span class="en">'+t2.certsEn+'</span></h4>'
        + '<div class="certs">'+certCards+'</div>';
    } else {
      tabBody = renderOringSpecBody();
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
        return '<tr><td class="mname">'+r.g+'</td>'
          +'<td><span class="ko">'+r.cKo+'</span><span class="en">'+r.cEn+'</span></td>'
          +'<td>'+r.h+'</td><td class="mtemp">'+r.t+'</td>'
          +'<td class="mwrap"><span class="ko">'+r.dKo+'</span><span class="en">'+r.dEn+'</span></td></tr>';
      }).join('');
      tabBody = '<p class="desc"><span class="ko">'+t.bodyKo+'</span><span class="en">'+t.bodyEn+'</span></p>'
        + '<table class="mtable gradetable"><thead><tr>'
        + '<th>GRADE</th><th><span class="ko">색상</span><span class="en">Colour</span></th><th><span class="ko">경도</span><span class="en">Hardness</span></th><th><span class="ko">사용 온도</span><span class="en">Operating Temp.</span></th><th><span class="ko">설명·인증</span><span class="en">Remarks / Approvals</span></th>'
        + '</tr></thead><tbody>'+grows+'</tbody></table>'
        + '<p class="desc" style="margin-top:12px;font-size:13px"><span class="ko">'+t.gradeNoteKo+'</span><span class="en">'+t.gradeNoteEn+'</span></p>'
        + '<p class="desc" style="margin-top:8px;font-size:13px"><span class="ko">'+t.supplyNoteKo+'</span><span class="en">'+t.supplyNoteEn+'</span></p>'
        + '<p class="desc" style="margin-top:18px"><span class="ko"><b>적용분야</b> — '+t.appsKo+'</span><span class="en"><b>Applications</b> — '+t.appsEn+'</span></p>';
    } else {
      var t2=PERFLUORO_TABS.kalrez;
      var lastGrp=null;
      var krows = t2.rows.map(function(r){
        var grpCell='', appCell='';
        if(r.grp!==lastGrp){
          var span = t2.rows.filter(function(x){ return x.grp===r.grp; }).length;
          grpCell = '<td class="mname" rowspan="'+span+'" style="vertical-align:middle">'+r.grp+'</td>';
          appCell = '<td rowspan="'+span+'" style="vertical-align:middle">'+r.app+'</td>';
          lastGrp = r.grp;
        }
        return '<tr>'+grpCell+'<td>'+r.proc+'</td><td class="mtemp">'+r.temp+'</td><td>'+r.env+'</td><td>'+r.rec+'</td>'+appCell+'</tr>';
      }).join('');
      var gradeCards = t2.grades.map(function(g){
        return '<div class="certcard"><span class="certbadge">'+g.code+'</span><div>'
          + '<h5>Kalrez '+g.code+'</h5>'
          + '<p class="cdetail"><span class="ko">'+g.ko+'</span><span class="en">'+g.en+'</span></p>'
          + '</div></div>';
      }).join('');
      tabBody = '<p class="desc"><span class="ko">'+t2.bodyKo+'</span><span class="en">'+t2.bodyEn+'</span></p>'
        + '<table class="mtable"><thead><tr>'
        + '<th><span class="ko">공정구분</span><span class="en">Group</span></th><th><span class="ko">세부공정</span><span class="en">Process</span></th><th><span class="ko">온도</span><span class="en">Temp.</span></th><th><span class="ko">공정 환경</span><span class="en">Environment</span></th><th><span class="ko">추천제품</span><span class="en">Suggested</span></th><th><span class="ko">주요 용도</span><span class="en">Applications</span></th>'
        + '</tr></thead><tbody>'+krows+'</tbody></table>'
        + '<h4 class="sizeh" style="margin-top:26px"><span class="ko">'+t2.gradesKo+'</span><span class="en">'+t2.gradesEn+'</span></h4>'
        + '<div class="certs">'+gradeCards+'</div>';
    }

    content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it) + tabsHtml + '<div class="subtab-body">'+tabBody+'</div>' + inquireHtml;
  }

  // ---- special: 피스톤링 render — 조인트 형식 / 소재 세부 카드 클릭 시 상세표 노출 ----
  var pistonDetailView = null; // null | 'joint' | 'material'

  function pistonDetailTableHtml(key){
    var d = PISTON_DETAIL[key];
    var backBtn = '<button class="backlink" onclick="SS.pistonDetail(null)">← <span class="ko">목록으로</span><span class="en">Back to list</span></button>';
    var head = '<h4 class="sizeh"><span class="ko">'+d.ko+'</span><span class="en">'+d.en+'</span></h4>'
      + '<p class="desc" style="margin-bottom:14px"><span class="ko">'+d.bodyKo+'</span><span class="en">'+d.bodyEn+'</span></p>';
    var table;
    if(key==='joint'){
      var jrows = d.rows.map(function(r){
        return '<tr><td style="width:120px"><img src="'+r.img+'" alt="'+esc(r.en)+'" style="width:108px;height:76px;object-fit:contain;display:block;background:var(--bg-soft);border-radius:6px;padding:4px;box-sizing:border-box" /></td>'
          +'<td class="mname"><span class="ko">'+r.ko+'</span><span class="en">'+r.en+'</span></td>'
          +'<td><span class="ko">'+r.dko+'</span><span class="en">'+r.den+'</span></td>'
          +'<td class="mtemp">'+r.dia+'</td></tr>';
      }).join('');
      table = '<table class="mtable"><thead><tr>'
        + '<th><span class="ko">도식</span><span class="en">Diagram</span></th>'
        + '<th><span class="ko">조인트 형식</span><span class="en">Joint Type</span></th>'
        + '<th><span class="ko">설명</span><span class="en">Description</span></th>'
        + '<th><span class="ko">대응 직경</span><span class="en">Diameter Range</span></th>'
        + '</tr></thead><tbody>'+jrows+'</tbody></table>';
    } else {
      var mrows = d.rows.map(function(r){
        return '<tr><td class="mname">'+r.mat+'<br><span style="font-weight:400;color:var(--muted);font-size:12px">'+r.matEn+'</span></td>'
          +'<td><span class="ko">'+r.ko+'</span><span class="en">'+r.en+'</span></td></tr>';
      }).join('');
      table = '<table class="mtable"><thead><tr>'
        + '<th><span class="ko">재질</span><span class="en">Material</span></th>'
        + '<th><span class="ko">설명</span><span class="en">Description</span></th>'
        + '</tr></thead><tbody>'+mrows+'</tbody></table>';
    }
    return backBtn + head + table;
  }

  function pistonOverviewHtml(){
    return '<p class="desc"><span class="ko">아래 항목을 클릭하면 조인트 형식·소재별 세부 사양을 확인할 수 있습니다.</span><span class="en">Click either item below for detailed specifications on joint types and materials.</span></p>'
      + '<div class="dcards">' + PISTON_DETAIL.cards.map(function(c){
          return '<div class="dcard clickable" onclick="SS.pistonDetail(\''+c.key+'\')"><h5><span class="ko">'+c.ko+'</span><span class="en">'+c.en+'</span></h5>'
            +'<p><span class="ko">'+c.dko+'</span><span class="en">'+c.den+'</span></p>'
            +'<span class="more"><span class="ko">전체 내용 보기 →</span><span class="en">View details →</span></span></div>';
        }).join('') + '</div>';
  }

  function renderPiston(){
    var it = MAP['piston'];
    var body = pistonDetailView ? pistonDetailTableHtml(pistonDetailView) : pistonOverviewHtml();
    content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it)
      + '<div class="pbody"><h3><span class="ko">세부 기술자료</span><span class="en">Detailed Technical Data</span></h3>' + body + '</div>'
      + inquireHtml;
  }

  // ---- special: 유공압씰 render — 유압씰/공압씰 상단 서브탭 + 항목 클릭 시 품번별 상세표 ----
  var hpGroup = 'hyd'; // 'hyd' | 'pneu'
  var hpDetailView = null; // null | category key (e.g. 'rod','piston','skfrod', ...)

  function hpCategoryCardsHtml(group){
    var g = HP_GROUPS[group];
    return '<p class="desc"><span class="ko">'+g.bodyKo+'</span><span class="en">'+g.bodyEn+'</span></p><div class="dcards">'
      + g.cats.map(function(c){
          return '<div class="dcard clickable" onclick="SS.hpDetail(\''+c.key+'\')"><h5><span class="ko">'+c.ko+'</span><span class="en">'+c.en+'</span> '
            + '<small style="font-weight:700;color:var(--muted);font-size:11px">'+c.brand+'</small></h5>'
            +'<p><span class="ko">'+c.dko+'</span><span class="en">'+c.den+'</span></p>'
            +'<span class="more"><span class="ko">품번 보기 →</span><span class="en">View part numbers →</span></span></div>';
        }).join('') + '</div>';
  }

  // HP part-number rows carry an 8th field (official KASTAS/SKF product-page URL) on top of
  // the shared 7-column HP_COLS shape, plus a per-code cross-section icon extracted from the
  // Sealstar catalog PDF (images/web/hp-shapes/{code-lowercase}.png) — so hp tables use this
  // dedicated renderer instead of the generic renderDataTable.
  function hpRowsTableHtml(rows){
    var thead = '<tr>' + HP_COLS.map(function(c){ return '<th><span class="ko">'+c.ko+'</span><span class="en">'+c.en+'</span></th>'; }).join('') + '</tr>';
    var tbody = rows.map(function(r){
      var code=r[0], name=r[1], app=r[2], mat=r[3], pres=r[4], temp=r[5], speed=r[6], url=r[7];
      var codeInner = '<img class="hpshape" src="images/web/hp-shapes/'+code.toLowerCase()+'.png" alt="'+code+' cross-section" loading="lazy">'
        + (url ? '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+code+'</a>' : '<span>'+code+'</span>');
      return '<tr>'
        + '<td class="mname"><span class="hprow">'+codeInner+'</span></td>'
        + '<td><span class="ko">'+name.ko+'</span><span class="en">'+name.en+'</span></td>'
        + '<td><span class="ko">'+app.ko+'</span><span class="en">'+app.en+'</span></td>'
        + '<td>'+mat+'</td>'
        + '<td class="mtemp">'+pres+'</td>'
        + '<td class="mtemp">'+temp+'</td>'
        + '<td class="mtemp">'+speed+'</td>'
        + '</tr>';
    }).join('');
    return '<table class="mtable"><thead>'+thead+'</thead><tbody>'+tbody+'</tbody></table>';
  }

  function hpDetailTableHtml(group, key){
    var g = HP_GROUPS[group];
    var cat = null;
    for(var i=0;i<g.cats.length;i++){ if(g.cats[i].key===key){ cat=g.cats[i]; break; } }
    if(!cat) return hpCategoryCardsHtml(group);
    var backBtn = '<button class="backlink" onclick="SS.hpDetail(null)">← <span class="ko">목록으로</span><span class="en">Back to list</span></button>';
    var head = '<h4 class="sizeh"><span class="ko">'+cat.ko+'</span><span class="en">'+cat.en+'</span> '
      + '<small style="font-weight:700;color:var(--muted);font-size:12px">'+cat.brand+'</small></h4>'
      + '<p class="desc" style="margin-bottom:14px"><span class="ko">'+cat.dko+'</span><span class="en">'+cat.den+'</span></p>';
    var note = cat.noteKo ? '<p class="desc" style="margin-top:12px;font-size:13px"><span class="ko">'+cat.noteKo+'</span><span class="en">'+cat.noteEn+'</span></p>' : '';
    return backBtn + head + hpRowsTableHtml(cat.rows) + note;
  }

  function renderHp(){
    var it = MAP['hp'];
    var tabsHtml = '<div class="subtabs">'
      + ['hyd','pneu','wiper','guide'].map(function(k){
          var g=HP_GROUPS[k];
          return '<button class="'+(k===hpGroup?'on':'')+'" onclick="SS.hpGroup(\''+k+'\')"><span class="ko">'+g.ko+'</span><span class="en">'+g.en+'</span></button>';
        }).join('')
      + '</div>';
    var tabBody = hpDetailView ? hpDetailTableHtml(hpGroup, hpDetailView) : hpCategoryCardsHtml(hpGroup);
    content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it)
      + tabsHtml + '<div class="subtab-body">'+tabBody+'</div>' + inquireHtml;
  }

  // ---- special: 스프링에너자이드씰 render — 설계 / 자켓재질 / 금속재질 상단 서브탭 ----
  var springTab = 'design';

  function renderSpring(){
    var it = MAP['spring'];
    var tabsHtml = '<div class="subtabs">'
      + ['design','jacket','spring'].map(function(k){
          var t=SPRING_TABS[k];
          return '<button class="'+(k===springTab?'on':'')+'" onclick="SS.springTab(\''+k+'\')"><span class="ko">'+t.ko+'</span><span class="en">'+t.en+'</span></button>';
        }).join('')
      + '</div>';

    var tabBody = '';
    if(springTab==='design'){
      var t=SPRING_TABS.design;
      var dcards = t.items.map(function(x){
        return '<div class="dcard"><h5><span class="ko">'+x.ko+'</span><span class="en">'+x.en+'</span></h5>'
          +'<p><span class="ko">'+x.dko+'</span><span class="en">'+x.den+'</span></p></div>';
      }).join('');
      var formulaHtml = '<div class="desc" style="margin-top:12px;background:var(--bg-soft);border:1px solid var(--line);border-radius:10px;padding:16px 18px;font-size:13.5px">'
        + t.formulas.map(function(f){ return '<div style="font-weight:700;color:var(--navy);margin-bottom:4px"><span class="ko">'+f.ko+'</span><span class="en">'+f.en+'</span></div>'; }).join('')
        + '<div style="margin-top:8px;color:var(--muted);font-size:12.5px"><span class="ko">'+t.formulaNoteKo+'</span><span class="en">'+t.formulaNoteEn+'</span></div>'
        + '</div>';
      tabBody = '<p class="desc"><span class="ko">'+t.bodyKo+'</span><span class="en">'+t.bodyEn+'</span></p>'
        + '<div class="dcards">'+dcards+'</div>'
        + '<h4 class="sizeh" style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">마찰력 산정</span><span class="en">Estimating Friction</span></h4>'
        + '<p class="desc"><span class="ko">'+t.frictionKo+'</span><span class="en">'+t.frictionEn+'</span></p>'
        + formulaHtml
        + '<h4 class="sizeh" style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">'+t.extrusionTitleKo+'</span><span class="en">'+t.extrusionTitleEn+'</span></h4>'
        + '<p class="desc"><span class="ko">'+t.extrusionKo+'</span><span class="en">'+t.extrusionEn+'</span></p>'
        + renderDataTable(t.extrusionCols, t.extrusionRows)
        + '<h4 class="sizeh" style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">'+t.surfaceTitleKo+'</span><span class="en">'+t.surfaceTitleEn+'</span></h4>'
        + '<p class="desc"><span class="ko">'+t.surfaceKo+'</span><span class="en">'+t.surfaceEn+'</span></p>'
        + renderDataTable(t.surfaceCols, t.surfaceRows);
    } else if(springTab==='jacket'){
      var t2=SPRING_TABS.jacket;
      tabBody = '<p class="desc"><span class="ko">'+t2.bodyKo+'</span><span class="en">'+t2.bodyEn+'</span></p>'
        + renderDataTable(t2.cols, t2.rows);
    } else {
      var t3=SPRING_TABS.spring;
      var typeCardsBlock = typeCardsHtml({
        titleKo:'스프링 타입 (하중 특성별 6종)', titleEn:'Spring Types by Load Characteristic',
        cards: t3.types.map(function(x){ return { type:{ko:x.ko,en:x.en}, img:x.img, alt:x.en, descKo:x.descKo, descEn:x.descEn }; })
      });
      tabBody = '<p class="desc"><span class="ko">'+t3.bodyKo+'</span><span class="en">'+t3.bodyEn+'</span></p>'
        + typeCardsBlock
        + '<h4 class="sizeh" style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">'+t3.compatTitleKo+'</span><span class="en">'+t3.compatTitleEn+'</span></h4>'
        + renderDataTable(t3.compatCols, t3.compatRows)
        + '<p class="desc" style="margin-top:12px;font-size:13px"><span class="ko">'+t3.compatNoteKo+'</span><span class="en">'+t3.compatNoteEn+'</span></p>'
        + '<h4 class="sizeh" style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="ko">'+t3.charTitleKo+'</span><span class="en">'+t3.charTitleEn+'</span></h4>'
        + renderDataTable(t3.charCols, t3.charRows);
    }

    content.innerHTML = baseHead(it) + heroImgHtml(it) + bodyHtml(it)
      + tabsHtml + '<div class="subtab-body">'+tabBody+'</div>' + inquireHtml;
  }

  function render(id){
    var it=MAP[id]; if(!it) return;
    if(it.special==='oring'){ renderOring(); }
    else if(it.special==='perfluoro'){ renderPerfluoro(); }
    else if(it.special==='piston'){ renderPiston(); }
    else if(it.special==='hp'){ renderHp(); }
    else if(it.special==='spring'){ renderSpring(); }
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
    oringTab:function(k){ oringTab=k; if(k!=='spec'){ oringSizeView=null; } renderOring(); },
    oringSize:function(k){ oringSizeView=k; renderOring(); if(k && window.innerWidth<900 && content.scrollIntoView){ content.scrollIntoView({behavior:'smooth'}); } },
    perfluoroTab:function(k){ perfluoroTab=k; renderPerfluoro(); },
    pistonDetail:function(k){ pistonDetailView=k; renderPiston(); if(k && window.innerWidth<900 && content.scrollIntoView){ content.scrollIntoView({behavior:'smooth'}); } },
    hpGroup:function(k){ hpGroup=k; hpDetailView=null; renderHp(); },
    hpDetail:function(k){ hpDetailView=k; renderHp(); if(k && window.innerWidth<900 && content.scrollIntoView){ content.scrollIntoView({behavior:'smooth'}); } },
    springTab:function(k){ springTab=k; renderSpring(); }
  };

  // ---- deep link (#oring, #hp, #oil, ...) ----
  var hash=(location.hash||'').replace('#','');
  var startId = MAP[hash] ? hash : ITEMS[0].id;
  render(startId);
})();
