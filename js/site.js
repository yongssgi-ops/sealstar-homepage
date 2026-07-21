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
