// ナビのスクロール変化
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>40);});

// ハンバーガーメニュー
const toggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
toggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
function closeMenu(){navLinks.classList.remove('open');}

// スクロールで出現
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay=(i%4)*0.08+'s';
  io.observe(el);
});

// FAQ アコーディオン
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    const a=item.querySelector('.faq-a');
    const open=item.classList.toggle('open');
    a.style.maxHeight=open?a.scrollHeight+'px':0;
  });
});
