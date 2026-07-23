/* SEALSTAR — shared site scripts */
function setLang(l){
  document.documentElement.lang = l;
  var ko=document.getElementById('ko-btn'), en=document.getElementById('en-btn');
  if(ko) ko.classList.toggle('on', l==='ko');
  if(en) en.classList.toggle('on', l==='en');
  try{ localStorage.setItem('ss_lang', l); }catch(e){}
}
(function(){
  // restore language
  try{ var l=localStorage.getItem('ss_lang'); if(l) setLang(l); }catch(e){}

  // years of experience since founding (1982) — auto-updates each year
  var yearsEl = document.getElementById('yearsExp');
  if(yearsEl){
    var years = new Date().getFullYear() - 1982;
    yearsEl.innerHTML = years + '<span>+</span>';
  }
  // scroll reveal
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{threshold:.15});
    els.forEach(function(el){io.observe(el);});
  } else { els.forEach(function(el){el.classList.add('in');}); }

  // photo rotator: <div class="photo-rotator" data-photos='[{"img":"...","ko":"...","en":"..."}]' data-interval="4500">
  document.querySelectorAll('.photo-rotator').forEach(function(box){
    var data;
    try{ data = JSON.parse(box.getAttribute('data-photos')); }catch(e){ data = null; }
    if(!data || !data.length) return;
    box.innerHTML = data.map(function(d,i){
      return '<div class="pr-slide'+(i===0?' on':'')+'" style="background-image:url(\''+d.img+'\')"></div>';
    }).join('');
    if(data.length<2) return;
    var dots=document.createElement('div'); dots.className='pr-dots';
    data.forEach(function(_,i){ var s=document.createElement('span'); if(i===0)s.className='on'; dots.appendChild(s); });
    box.appendChild(dots);
    var slides=box.querySelectorAll('.pr-slide'), dotEls=dots.querySelectorAll('span'), idx=0;
    setInterval(function(){
      slides[idx].classList.remove('on'); dotEls[idx].classList.remove('on');
      idx=(idx+1)%slides.length;
      slides[idx].classList.add('on'); dotEls[idx].classList.add('on');
    }, parseInt(box.getAttribute('data-interval'),10) || 4500);
  });

  // Back to top button (bottom-right, appears after scrolling down)
  var backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'back-to-top';
  backBtn.setAttribute('aria-label', '맨 위로 이동 / Scroll to top');
  backBtn.title = '맨 위로';
  backBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(backBtn);
  function toggleBackBtn(){
    if(window.scrollY > 480){ backBtn.classList.add('show'); } else { backBtn.classList.remove('show'); }
  }
  window.addEventListener('scroll', toggleBackBtn, {passive:true});
  toggleBackBtn();
  backBtn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });
})();

// ---------- 규격/코드 검색 (오링·유압씰형상·퍼플러오링·베어링아이솔레이터) ----------
(function(){
  var input = document.getElementById('gsearch-input');
  var panel = document.getElementById('gsearch-results');
  if(!input || !panel || typeof SEARCH_INDEX === 'undefined') return;

  // 현재 페이지가 하위 폴더(products/markets/news)에 있는지에 따라 상대경로 접두어를 계산
  var inSubfolder = /^\/(products|markets|news)\//.test(location.pathname);
  var prefix = inSubfolder ? '../' : '';
  var curPage = location.pathname.split('/').filter(Boolean).slice(-2).join('/');

  function norm(s){ return (s||'').toString().toLowerCase().replace(/\s+/g,''); }

  function search(q){
    q = norm(q);
    if(!q) return [];
    var exact=[], starts=[], contains=[];
    for(var i=0;i<SEARCH_INDEX.length;i++){
      var e = SEARCH_INDEX[i], code = norm(e.c);
      if(code === q){ exact.push(e); }
      else if(code.indexOf(q) === 0){ starts.push(e); }
      else if(code.indexOf(q) !== -1){ contains.push(e); }
    }
    return exact.concat(starts, contains).slice(0, 8);
  }

  function render(list, query){
    if(!query){ panel.classList.remove('show'); panel.innerHTML=''; return; }
    if(!list.length){
      panel.innerHTML = '<div class="gsearch-empty"><span class="ko">검색 결과가 없습니다</span><span class="en">No matches</span></div>';
      panel.classList.add('show');
      return;
    }
    panel.innerHTML = list.map(function(e,i){
      return '<a class="gsearch-item'+(i===0?' active':'')+'" href="'+prefix+e.p+'#'+e.i+'" data-p="'+e.p+'" data-i="'+e.i+'">'+e.l+'</a>';
    }).join('');
    panel.classList.add('show');
  }

  function hide(){ panel.classList.remove('show'); }

  function jumpTo(id){
    var el = document.getElementById(id);
    if(!el) return;
    el.scrollIntoView({behavior:'smooth', block:'center'});
    el.classList.remove('jump-flash'); void el.offsetWidth; el.classList.add('jump-flash');
  }

  function go(entry){
    hide(); input.value=''; input.blur();
    if(entry.p === curPage){ jumpTo(entry.i); }
    else { location.href = prefix + entry.p + '#' + entry.i; }
  }

  input.addEventListener('input', function(){ render(search(input.value), input.value.trim()); });
  input.addEventListener('focus', function(){ if(input.value.trim()) render(search(input.value), input.value.trim()); });
  input.addEventListener('keydown', function(ev){
    if(ev.key === 'Enter'){
      ev.preventDefault();
      var results = search(input.value);
      if(results.length) go(results[0]);
    } else if(ev.key === 'Escape'){ hide(); input.blur(); }
  });
  document.addEventListener('click', function(ev){
    if(!ev.target.closest('.gsearch')) hide();
  });
  panel.addEventListener('click', function(ev){
    var a = ev.target.closest('.gsearch-item');
    if(!a) return;
    ev.preventDefault();
    go({p:a.getAttribute('data-p'), i:a.getAttribute('data-i')});
  });

  // 검색 결과를 타고 넘어온 경우(#or-P50 등) 로딩 후 자동 스크롤 + 하이라이트
  if(location.hash.length > 1){
    var hashId = location.hash.slice(1);
    if(document.getElementById(hashId)){
      setTimeout(function(){ jumpTo(hashId); }, 250);
    }
  }
})();
