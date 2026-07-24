/* SEALSTAR — Markets (적용분야), sidebar-driven. Content adapted for Sealstar. */
(function(){
  var PX='https://images.pexels.com/photos/';
  function img(id){ return PX+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w=1500'; }

  var MARKETS = [
    {
      id:'construction', ko:'건설기계 & 중장비', en:'Construction & Heavy Machinery', img:img('34334647'),
      introKo:'굴삭기, 로더, 크레인 등 건설·중장비는 진흙, 분진, 수분 유입과 반복되는 고하중·충격이 공존하는 가혹한 환경에서 작동합니다. 씰스타는 이러한 환경에서도 안정적인 실링 성능을 제공하는 유압·공압씰, 오일씰, 웨어링 등을 공급합니다.',
      introEn:'Excavators, loaders and cranes operate in harsh environments where mud, dust and water ingress meet repeated heavy loads and impact. Sealstar supplies hydraulic/pneumatic seals, oil seals and wear rings that deliver reliable sealing under these conditions.',
      areasKo:['굴삭기 붐·암·버킷 실린더','로더 리프트 실린더','크레인 아웃트리거','유압 펌프·모터','주행 감속기'],
      areasEn:['Excavator boom/arm/bucket cylinders','Loader lift cylinders','Crane outriggers','Hydraulic pumps & motors','Travel reduction gears'],
      perf:[
        {ko:'내마모성 & 내충격성',en:'Wear & Impact Resistance',dko:'반복되는 고하중과 충격에도 마모를 최소화하는 소재 설계.',den:'Material design that minimizes wear under repeated heavy loads and impact.'},
        {ko:'오염물질 차단',en:'Contaminant Exclusion',dko:'진흙, 분진, 수분의 침투를 막아 내부 오일 오염을 방지.',den:'Blocks mud, dust and water to prevent internal oil contamination.'},
        {ko:'광범위한 온도범위 대응',en:'Wide Temperature Range',dko:'혹한부터 고온까지 안정적으로 작동하는 소재 적용.',den:'Materials that operate reliably from extreme cold to high heat.'},
        {ko:'장수명 설계',en:'Long Service Life',dko:'유지보수 주기를 늘려 장비 가동률(Uptime)을 높입니다.',den:'Extends maintenance intervals to raise equipment uptime.'}
      ],
      prod:[{ko:'유압 & 공압씰',en:'Hydraulic & Pneumatic',href:'products/hp.html'},{ko:'오일씰',en:'Oil Seal',href:'products/oil.html'},{ko:'피스톤링',en:'Piston Ring',href:'products/piston.html'}]
    },
    {
      id:'semiconductor', ko:'반도체 & 디스플레이', en:'Semiconductor & Display', img:img('14887614'),
      introKo:'반도체·디스플레이 공정은 초정밀 클린룸 환경에서 이루어지며, 미세한 입자 발생이나 화학물질 누출이 수율에 직접적인 영향을 미칩니다. 씰스타는 우수한 화학 내성과 저파티클 특성을 갖춘 퍼플러오링, 스프링에너자이즈씰, PEEK 소재 씰 등으로 정밀 공정을 지원합니다.',
      introEn:'Semiconductor and display processes run in ultra-precise cleanrooms, where particle generation or chemical leakage directly affects yield. Sealstar supports these processes with perfluoro O-rings, spring-energized seals and PEEK seals offering excellent chemical resistance and low-particle characteristics.',
      areasKo:['웨이퍼 이송·척(Chuck) 장비','식각(Etch)·증착(CVD/PVD) 챔버','가스 배관 밸브','초순수(UPW) 배관'],
      areasEn:['Wafer transfer & chuck equipment','Etch / deposition (CVD·PVD) chambers','Gas line valves','Ultra-pure water (UPW) lines'],
      perf:[
        {ko:'초저파티클',en:'Ultra-Low Particle',dko:'클린룸 오염을 최소화하는 저발진(Low-Outgassing) 소재.',den:'Low-outgassing materials that minimize cleanroom contamination.'},
        {ko:'우수한 화학 내성',en:'Chemical Resistance',dko:'강산, 강염기, 플라즈마 환경에서도 변형 없는 내구성.',den:'Durability without deformation under strong acids, bases and plasma.'},
        {ko:'정밀 치수 관리',en:'Precise Tolerances',dko:'수 마이크론 단위의 정밀 공차로 미세 누설을 방지.',den:'Micron-level tolerances that prevent micro-leakage.'},
        {ko:'고온·고진공 대응',en:'High-Temp / High-Vacuum',dko:'공정 온도·압력 변화에도 안정적인 밀봉 성능 유지.',den:'Stable sealing through process temperature and pressure changes.'}
      ],
      prod:[{ko:'퍼플러오링',en:'Perfluoro O-Ring (FFKM)',href:'products/perfluoro.html'},{ko:'스프링에너자이즈씰 & PEEK',en:'Spring-Energized & PEEK',href:'products/spring.html'},{ko:'테프론캡슐오링',en:'Teflon Capsule O-Ring',href:'products/capsule.html'}]
    },
    {
      id:'powerplant', ko:'발전소 (화력·수력·원자력)', en:'Power Plants (Thermal·Hydro·Nuclear)', img:img('3044473'),
      introKo:'화력·수력·원자력 발전소는 고온·고압 증기, 대유량 냉각수, 방사선 등 극한 환경 속에서 장기간 무정지 운전이 요구되는 대표적인 국가 기간 인프라입니다. 씰스타는 터빈·보일러·냉각계통의 밸브와 펌프에 적용되는 내열·내압·내방사선 씰링 솔루션으로 발전 설비의 안정적인 운전을 지원합니다.',
      introEn:'Thermal, hydro and nuclear power plants are critical national infrastructure requiring long-term, uninterrupted operation under extreme conditions — high-temperature/high-pressure steam, large-volume cooling water and radiation exposure. Sealstar supports stable plant operation with heat-, pressure- and radiation-resistant sealing solutions for turbine, boiler and cooling-system valves and pumps.',
      areasKo:['터빈·보일러 스팀 밸브','냉각수 순환 펌프','수차·발전기 축씰(화력·수력)','원자로 냉각재 계통 밸브'],
      areasEn:['Turbine & boiler steam valves','Cooling-water circulation pumps','Turbine/generator shaft seals (thermal & hydro)','Reactor coolant system valves'],
      perf:[
        {ko:'고온·고압 증기 대응',en:'High-Temp Steam Resistance',dko:'터빈·보일러의 고온·고압 증기 환경에서도 안정적인 밀봉 성능을 유지.',den:'Reliable sealing under the high-temperature, high-pressure steam of turbines and boilers.'},
        {ko:'대유량 냉각수 내구성',en:'Cooling-Water Durability',dko:'대용량 냉각수 순환 계통에서 장기간 마모 없이 작동.',den:'Long-term, wear-free operation in large-volume cooling-water circuits.'},
        {ko:'방사선 내성 (원자력)',en:'Radiation Resistance (Nuclear)',dko:'원자력 환경의 방사선 노출에도 물성 저하를 최소화.',den:'Minimizes property loss under nuclear radiation exposure.'},
        {ko:'장기 무정지 운전 신뢰성',en:'Long-Term Uptime Reliability',dko:'정비 주기가 긴 발전설비 특성에 맞춘 장수명 설계.',den:'Long-service-life design suited to power plants\' extended maintenance intervals.'}
      ],
      prod:[{ko:'비규격연결오링',en:'Non-Standard Vulc\'d O-Ring',href:'products/vulc.html'},{ko:'메카니컬씰',en:'Mechanical Seal',href:'products/mechanical.html'},{ko:'ACM 베어링',en:'ACM Bearing',href:'products/acm.html'},{ko:'유압 & 공압씰',en:'Hydraulic & Pneumatic',href:'products/hp.html'},{ko:'스프링에너자이즈씰',en:'Spring-Energized Seal',href:'products/spring.html'}]
    },
    {
      id:'energy', ko:'에너지 (수소·LNG)', en:'Energy (Hydrogen·LNG)', img:'images/web/markets/energy.jpg',
      introKo:'수소·LNG 밀봉은 극저온(-162℃), 고압, 수소취성(Hydrogen Embrittlement) 등 기존 산업과는 차원이 다른 고난이도 기술을 요구합니다. 씰스타는 규격화된 기성품이 아닌 고객사의 실제 작동 환경(압력·온도·유체)에 맞춘 맞춤 설계로 최적의 밀봉 조건을 구현하며, 국내 수소·LNG 씰링 분야에서 최대 수준의 적용 실적과 기술력을 보유하고 있습니다.',
      introEn:'Hydrogen and LNG sealing demands technology of a fundamentally different order — cryogenic temperatures (-162°C), high pressure and hydrogen embrittlement. Rather than off-the-shelf parts, Sealstar custom-engineers each seal around the customer\'s actual operating environment — pressure, temperature and fluid — to achieve optimal sealing conditions, backed by the largest track record and technical expertise in hydrogen/LNG sealing in Korea.',
      areasKo:['수소 충전소·저장탱크 밸브','수전해·연료전지 스택','LNG 이송배관 및 저장설비','LNG 기화기(Vaporizer)'],
      areasEn:['Hydrogen station & storage-tank valves','Water electrolysis & fuel-cell stacks','LNG transfer piping & storage','LNG vaporizers'],
      perf:[
        {ko:'수소취성 저항',en:'Hydrogen-Embrittlement Resistance',dko:'수소 침투에 의한 재질 열화를 최소화하는 소재 선정.',den:'Material selection that minimizes degradation from hydrogen ingress.'},
        {ko:'극저온 대응 (Cryogenic)',en:'Cryogenic Capability',dko:'LNG(-162°C) 등 초저온 환경에서도 탄성을 유지.',den:'Retains elasticity in cryogenic environments such as LNG (-162°C).'},
        {ko:'고객 맞춤 설계 대응력',en:'Custom Engineering Capability',dko:'기성품이 아닌 고객사의 작동 환경(압력·온도·유체)에 맞춘 맞춤 설계로 최적의 밀봉 조건을 구현합니다.',den:'Not an off-the-shelf part — every seal is custom-engineered around the customer\'s operating pressure, temperature and fluid for optimal sealing.'},
        {ko:'국내 최대 실적·기술력',en:'Korea\'s Largest Track Record',dko:'수소·LNG 밀봉 분야에서 국내 최대 수준의 적용 실적과 기술 노하우를 보유하고 있습니다.',den:'Holds the largest domestic track record and technical know-how in hydrogen/LNG sealing.'}
      ],
      prod:[{ko:'스프링에너자이즈씰',en:'Spring-Energized Seal',href:'products/spring.html'},{ko:'PEEK',en:'PEEK',href:'products/peek.html'}]
    },
    {
      id:'oilgas', ko:'석유가스화학', en:'Oil, Gas & Petrochemical', img:img('15970032'),
      introKo:'석유·가스·화학 플랜트는 고압, 고온, 부식성 유체(Sour Gas 등)가 동시에 작용하는 대표적인 가혹 환경입니다. 씰스타는 API·NORSOK 등 국제 규격에 대응 가능한 내화학성 오링과 유압씰로 플랜트 설비의 안전한 운전을 지원합니다.',
      introEn:'Oil, gas and chemical plants are archetypal harsh environments where high pressure, high temperature and corrosive fluids (such as sour gas) act at once. Sealstar supports safe plant operation with chemical-resistant O-rings and hydraulic seals meeting international standards like API and NORSOK.',
      areasKo:['시추·생산 설비 밸브','파이프라인 플랜지','펌프·컴프레서','저장탱크'],
      areasEn:['Drilling / production valves','Pipeline flanges','Pumps & compressors','Storage tanks'],
      perf:[
        {ko:'내화학성 & 내부식성',en:'Chemical & Corrosion Resistance',dko:'황화수소(H₂S) 등 부식성 유체에 대한 저항성.',den:'Resistance to corrosive fluids such as hydrogen sulfide (H₂S).'},
        {ko:'AED(급속감압) 저항성',en:'Explosive-Decompression Resistance',dko:'급격한 압력 변화에도 팽윤·파열 없는 내구성.',den:'Durability without swelling or rupture under rapid pressure change.'},
        {ko:'고온·고압 밀봉',en:'High-Temp / High-Pressure',dko:'플랜트 운전 조건에 맞춘 안정적 실링 성능.',den:'Stable sealing performance matched to plant operating conditions.'},
        {ko:'국제 인증 대응',en:'International Standards',dko:'API, NORSOK M710, NACE 등 규격에 대응하는 소재.',den:'Materials compliant with API, NORSOK M710 and NACE standards.'}
      ],
      prod:[{ko:'AED(급속감압) 저항 오링',en:'AED / RGD-Resistant O-Ring',href:'products/oring.html'},{ko:'테프론캡슐오링',en:'Teflon Capsule O-Ring',href:'products/capsule.html'},{ko:'퍼플러오링',en:'Perfluoro O-Ring (FFKM)',href:'products/perfluoro.html'},{ko:'베어링아이솔레이터',en:'Bearing Isolator',href:'products/isolator.html'},{ko:'스프링에너자이즈씰',en:'Spring-Energized Seal',href:'products/spring.html'},{ko:'메카니컬씰',en:'Mechanical Seal',href:'products/mechanical.html'}]
    },
    {
      id:'shipbuilding', ko:'조선해양', en:'Shipbuilding & Marine', img:'images/web/markets/shipbuilding.jpg',
      introKo:'조선해양 산업은 해상이라는 특수한 환경에서 요구되는 제품 성능과 신뢰성에 대한 기대치가 매우 높은 분야입니다. 씰스타는 해수 부식, 염분, 진동, 장기간의 하중에도 견디는 내구성 높은 씰링 솔루션으로 선박 및 해양플랜트 설비의 안정적인 운용을 지원합니다.',
      introEn:'Shipbuilding and marine is a field with very high expectations for performance and reliability in the demanding offshore environment. Sealstar supports the stable operation of vessels and offshore facilities with durable sealing solutions that withstand seawater corrosion, salinity, vibration and long-term loading.',
      areasKo:['선박 추진축 실링(스턴튜브)','데크 크레인·윈치','해양플랜트 밸브·배관','스러스터·방향타 구동부','밸러스트 시스템 펌프'],
      areasEn:['Propeller shaft seals (stern tube)','Deck cranes & winches','Offshore valves & piping','Thruster / rudder drives','Ballast system pumps'],
      perf:[
        {ko:'내해수 부식성',en:'Seawater Corrosion Resistance',dko:'장기간의 해수·염분 노출에도 변형과 부식이 없는 내구성.',den:'Durability without deformation or corrosion under prolonged seawater and salt exposure.'},
        {ko:'내마모성 & 저마찰',en:'Wear Resistance & Low Friction',dko:'반복되는 축 회전과 진동에도 안정적인 밀봉 성능을 유지.',den:'Stable sealing under repeated shaft rotation and vibration.'},
        {ko:'저온·고습 환경 대응',en:'Low-Temp / High-Humidity',dko:'혹한의 해상 환경에서도 탄성을 잃지 않는 소재 설계.',den:'Materials that retain elasticity in cold, humid marine conditions.'},
        {ko:'국제 선급 인증 대응',en:'Class-Society Compliance',dko:'DNV, ABS 등 주요 선급 규격에 부합하는 소재.',den:'Materials compliant with major class societies such as DNV and ABS.'}
      ],
      prod:[{ko:'오일씰',en:'Oil Seal',href:'products/oil.html'},{ko:'유압 & 공압씰',en:'Hydraulic & Pneumatic',href:'products/hp.html'},{ko:'ACM 베어링',en:'ACM Bearing',href:'products/acm.html'}]
    },
    {
      id:'aerospace', ko:'우주항공', en:'Aerospace', img:'images/web/markets/aerospace.jpg',
      introKo:'항공우주 산업은 극한의 온도 변화, 진동, 경량화 요구가 공존하는 최고 수준의 정밀 산업입니다. 씰스타는 글로벌 우주항공 분야를 이끄는 미국 S社에 씰을 공급하는 최대 협력사의 한국 공식대리점으로 함께하며, 검증된 고신뢰성 씰 제품과 PEEK 등 고기능 엔지니어링 플라스틱을 기반으로 항공우주 부품의 신뢰성을 뒷받침합니다.',
      introEn:'Aerospace is a top-tier precision industry where extreme temperature swings, vibration and weight-reduction demands coexist. Sealstar partners as the official Korean agent for the largest seal supplier to a leading U.S. aerospace company, delivering proven high-reliability seals and high-performance engineering plastics such as PEEK to underpin the reliability of aerospace components.',
      areasKo:['랜딩기어 유압 시스템','연료 시스템 밸브','엔진 주변 실링','유압 액추에이터'],
      areasEn:['Landing-gear hydraulic systems','Fuel-system valves','Engine-area sealing','Hydraulic actuators'],
      perf:[
        {ko:'극한 온도 대응',en:'Extreme Temperature',dko:'초고온부터 초저온까지 안정적인 물성을 유지.',den:'Maintains stable properties from extreme heat to extreme cold.'},
        {ko:'경량화 & 정밀 가공',en:'Lightweight & Precision',dko:'항공 규격에 맞춘 정밀 치수와 경량 설계.',den:'Precise dimensions and lightweight design to aerospace standards.'},
        {ko:'내진동·내피로성',en:'Vibration & Fatigue Resistance',dko:'반복되는 진동과 하중에도 성능을 유지.',den:'Sustains performance under repeated vibration and loading.'},
        {ko:'엄격한 품질 추적',en:'Strict Traceability',dko:'항공 산업 표준에 부합하는 품질관리 체계.',den:'Quality control aligned with aerospace industry standards.'}
      ],
      prod:[{ko:'가공씰',en:'Machined Seals',href:'products/machined.html'},{ko:'스프링에너자이즈씰 & PEEK',en:'Spring-Energized & PEEK',href:'products/spring.html'},{ko:'AED(급속감압) 저항 오링',en:'AED / RGD-Resistant O-Ring',href:'products/oring.html'}]
    },
    {
      id:'food-pharma', ko:'식·의약품', en:'Food & Pharmaceutical', img:img('9259963'),
      introKo:'식품·의약품 산업은 위생과 안전이 최우선이며, 씰링 제품 또한 엄격한 위생 기준과 인증을 충족해야 합니다. 씰스타는 FDA, NSF 등 국제 위생 인증에 대응하는 실리콘·EPDM 소재 오링으로 식품·의약품 설비의 위생적인 밀봉을 지원합니다.',
      introEn:'In food and pharmaceutical industries, hygiene and safety come first, and sealing products must meet strict hygienic standards and certifications. Sealstar supports hygienic sealing of food and pharma equipment with silicone and EPDM O-rings that address international hygiene certifications such as FDA and NSF.',
      areasKo:['충전·포장 설비','배관 밸브 및 피팅','믹서·교반기','살균(CIP/SIP) 설비'],
      areasEn:['Filling & packaging equipment','Piping valves & fittings','Mixers & agitators','Sterilization (CIP/SIP) systems'],
      perf:[
        {ko:'위생 인증',en:'Hygiene Certification',dko:'FDA, NSF, KIWA 등 국제 위생 규격을 충족.',den:'Meets international hygiene standards such as FDA, NSF and KIWA.'},
        {ko:'세척성 (CIP/SIP 대응)',en:'Cleanability (CIP/SIP)',dko:'반복되는 스팀 살균, 세척에도 변형 없는 내구성.',den:'Durability without deformation under repeated steam sterilization and washing.'},
        {ko:'무독성·무취 소재',en:'Non-Toxic & Odorless',dko:'식품·의약품과 직접 접촉해도 안전한 소재.',den:'Materials safe for direct contact with food and pharmaceuticals.'},
        {ko:'넓은 온도 대응',en:'Wide Temperature Range',dko:'저온 보관부터 고온 살균까지 폭넓게 대응.',den:'Covers cold storage through high-temperature sterilization.'}
      ],
      prod:[{ko:'FDA·NSF·USP Class VI 인증오링',en:'FDA/NSF/USP Class VI Certified O-Ring',href:'products/oring.html'},{ko:'오일씰',en:'Oil Seal',href:'products/oil.html'},{ko:'메카니컬씰',en:'Mechanical Seal',href:'products/mechanical.html'}]
    }
  ];

  var T={ areasKo:'주요 적용 부위',areasEn:'Key Applications', perfKo:'요구 성능',perfEn:'Required Performance',
    prodKo:'관련 제품',prodEn:'Related Products', inqTitleKo:'해당 산업 적용 사양이 궁금하신가요?',inqTitleEn:'Need specs for this industry?',
    inqDescKo:'도면이나 사용 조건을 알려주시면 담당자가 확인 후 신속히 답변드립니다.',inqDescEn:'Send us your drawings or operating conditions and we will respond promptly.',
    inqBtnKo:'문의하기',inqBtnEn:'Contact Us' };

  var MAP={}; MARKETS.forEach(function(m){MAP[m.id]=m;});

  // sidebar
  var side=document.getElementById('side');
  var sh='<div class="side-h"><span class="ko">적용 산업</span><span class="en">Industries</span></div>';
  MARKETS.forEach(function(m){
    sh+='<button class="mitem" data-id="'+m.id+'" onclick="MK.select(\''+m.id+'\')"><span><span class="ko">'+m.ko+'</span><span class="en">'+m.en+'</span></span><span class="arw">›</span></button>';
  });
  side.innerHTML=sh;

  var content=document.getElementById('content');
  function render(id){
    var m=MAP[id]; if(!m) return;
    var areas=(function(){var a='';m.areasKo.forEach(function(k,i){a+='<span><span class="ko">'+k+'</span><span class="en">'+m.areasEn[i]+'</span></span>';});return a;})();
    var perf=(function(){var a='';m.perf.forEach(function(p,i){a+='<div class="pc"><div class="no">'+(i+1)+'</div><h4><span class="ko">'+p.ko+'</span><span class="en">'+p.en+'</span></h4><p><span class="ko">'+p.dko+'</span><span class="en">'+p.den+'</span></p></div>';});return a;})();
    var prod=m.prod.map(function(p){return '<a href="'+p.href+'"><span class="ko">'+p.ko+'</span><span class="en">'+p.en+'</span> →</a>';}).join('');
    content.innerHTML=
      '<div class="mhero" style="background-image:url(\''+m.img+'\')"><div class="cap"><div class="en-t">'+m.en.toUpperCase()+'</div><h2><span class="ko">'+m.ko+'</span><span class="en">'+m.en+'</span></h2></div></div>'
      +'<p class="intro"><span class="ko">'+m.introKo+'</span><span class="en">'+m.introEn+'</span></p>'
      +'<div class="blk-t"><span class="ko">'+T.areasKo+'</span><span class="en">'+T.areasEn+'</span></div><div class="areas">'+areas+'</div>'
      +'<div class="blk-t"><span class="ko">'+T.perfKo+'</span><span class="en">'+T.perfEn+'</span></div><div class="perf">'+perf+'</div>'
      +'<div class="blk-t"><span class="ko">'+T.prodKo+'</span><span class="en">'+T.prodEn+'</span></div><div class="relprod">'+prod+'</div>'
      +'<div class="inquire"><div><h4><span class="ko">'+T.inqTitleKo+'</span><span class="en">'+T.inqTitleEn+'</span></h4><p><span class="ko">'+T.inqDescKo+'</span><span class="en">'+T.inqDescEn+'</span></p></div>'
      +'<a class="btn btn-primary" href="contact.html"><span class="ko">'+T.inqBtnKo+'</span><span class="en">'+T.inqBtnEn+'</span></a></div>';
    document.getElementById('crumb-cur').innerHTML='<span class="ko">'+m.ko+'</span><span class="en">'+m.en+'</span>';
    document.querySelectorAll('.mitem').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-id')===id);});
  }

  window.MK={ select:function(id){ render(id); history.replaceState(null,'','#'+id);
    if(window.innerWidth<900) document.getElementById('content').scrollIntoView({behavior:'smooth'}); } };


  var hash=(location.hash||'').replace('#','');
  render(MAP[hash]?hash:MARKETS[0].id);
})();
