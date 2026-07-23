import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
function loadPage(file, extraScripts){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'file://'+root+'/'+file});
  const {window}=dom;
  global.window=window; global.document=window.document;
  try{ Object.defineProperty(window,'localStorage',{value:{getItem:()=>null,setItem:()=>{}},configurable:true}); }catch(e){}
  global.localStorage=window.localStorage;
  window.IntersectionObserver=class{observe(){}unobserve(){}};
  window.history.replaceState=()=>{};
  window.matchMedia=window.matchMedia||(()=>({matches:false}));
  const errors=[];
  window.addEventListener('error',e=>errors.push(e.error?.message||e.message));
  for(const s of extraScripts){
    const code=fs.readFileSync(path.join(root,s),'utf8');
    try{ window.eval(code); }catch(e){ errors.push(s+': '+e.message); }
  }
  return {window,errors};
}

function checkImgs(win){
  const missing=new Set();
  win.document.querySelectorAll('img').forEach(im=>{
    const s=im.getAttribute('src'); if(s && !s.startsWith('data:')) chk(s,missing);
  });
  win.document.querySelectorAll('[style]').forEach(el=>{
    const m=[...el.getAttribute('style').matchAll(/url\((['"]?)([^'")]+)\1\)/g)];
    m.forEach(x=>{ const u=x[2]; if(u.startsWith('images/')) chk(u,missing); });
  });
  return missing;
}
function chk(s,missing){
  if(s.startsWith('http')||s.startsWith('data:')) return;
  const p=path.join(root,s.split('#')[0]);
  if(!fs.existsSync(p)) missing.add(s);
}

// PRODUCTS
{
  const {window,errors}=loadPage('products.html',['js/site.js','js/products.js']);
  let itemCount=window.document.querySelectorAll('.item').length;
  let figs=window.document.querySelectorAll('.gal figure').length;
  console.log('PRODUCTS errors:',errors.length?errors:'none');
  console.log('PRODUCTS sidebar items:',itemCount,' | first-render gallery figures:',figs);
  const allMiss=new Set();
  const ids=[];
  window.document.querySelectorAll('.item').forEach(a=>{
    const id=a.getAttribute('data-item'); ids.push(id);
    window.SS.select(id);
    checkImgs(window).forEach(m=>allMiss.add(m));
  });
  console.log('PRODUCTS category ids ('+ids.length+'):',ids.join(', '));
  console.log('PRODUCTS missing gallery imgs:',[...allMiss].length?[...allMiss]:'none');
  window.SS.select('oring');
  ['design','spec','material'].forEach(k=>window.SS.oringTab(k));
  const mtableRows=window.document.querySelectorAll('.mtable tbody tr').length;
  console.log('PRODUCTS o-ring material rows (after switching tabs):',mtableRows);
  window.SS.select('mechanical');
  console.log('PRODUCTS mechanical-seal placeholder shown:',!!window.document.querySelector('.gal-empty'));
  window.SS.select('piston');
  window.SS.pistonDetail('joint');
  const jointRows=window.document.querySelectorAll('.mtable tbody tr').length;
  window.SS.pistonDetail('material');
  const materialRows=window.document.querySelectorAll('.mtable tbody tr').length;
  window.SS.pistonDetail(null);
  const backToOverview=window.document.querySelectorAll('.dcard.clickable').length;
  console.log('PRODUCTS piston joint/material detail rows:',jointRows,'/',materialRows,'| overview cards after back:',backToOverview);
}

// INDEX
{
  const {window,errors}=loadPage('index.html',['js/news.js','js/site.js']);
  const miss=checkImgs(window);
  console.log('INDEX errors:',errors.length?errors:'none');
  console.log('INDEX missing local imgs:',[...miss].length?[...miss]:'none');
}

// ABOUT
{
  const {window,errors}=loadPage('about.html',['js/site.js']);
  const miss=checkImgs(window);
  console.log('ABOUT errors:',errors.length?errors:'none');
  console.log('ABOUT missing local imgs:',[...miss].length?[...miss]:'none');
}

// NEWS
{
  const {window,errors}=loadPage('news.html',['js/site.js','js/news.js']);
  const cards=window.document.querySelectorAll('.ncard').length;
  console.log('NEWS errors:',errors.length?errors:'none');
  console.log('NEWS cards rendered:',cards);
  window.NB.filter('exhibition',window.document.querySelector('[data-f="exhibition"]'));
  console.log('NEWS exhibition filter cards:',window.document.querySelectorAll('.ncard').length);
  window.NB.open(0);
  console.log('NEWS modal opens:',window.document.getElementById('modal').classList.contains('show'));
}

process.exit(0);
