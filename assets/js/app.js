/* ── data ─────────────────────────────────────────────── */
const PRODUCTS=[
 {n:"Broken Dreams Tee",p:2450,r:4.8,c:120,bg:"linear-gradient(160deg,#26262F,#0B0B10)",ink:"#EDEDF2",sw:["#1B1B22","#F4F4F6","#D9C7A8"],g:"skull"},
 {n:"Chaos Club Tee",p:2350,r:4.9,c:98,bg:"linear-gradient(160deg,#F1F1F4,#C8C8D1)",ink:"#141418",sw:["#F4F4F6","#D9C7A8","#1B1B22"],g:"lion"},
 {n:"Ronin Series 7 Tee",p:2450,r:4.8,c:76,bg:"linear-gradient(160deg,#212129,#0B0B10)",ink:"#EDEDF2",sw:["#1B1B22","#2B2B31"],g:"blade"},
 {n:"Butterfly Effect Tee",p:2550,r:4.9,c:112,bg:"linear-gradient(160deg,#EFEFF2,#CFCFD8)",ink:"#141418",sw:["#F4F4F6","#D9C7A8","#1B1B22"],g:"fly"},
 {n:"Good Vibes Tee",p:2250,r:4.7,c:63,bg:"linear-gradient(160deg,#2A1330,#0B0B10)",ink:"#F0A8D8",sw:["#1B1B22","#2F5248"],g:"fly"},
 {n:"Unstoppable Tee",p:2350,r:4.8,c:85,bg:"linear-gradient(160deg,#F1F1F4,#C8C8D1)",ink:"#141418",sw:["#F4F4F6","#1B1B22"],g:"skull"}
];

const GRAPHIC={
 skull:i=>`<circle cx="24" cy="21" r="11" fill="none" stroke="${i}" stroke-width="2"/><circle cx="20" cy="20" r="2.6" fill="${i}"/><circle cx="28" cy="20" r="2.6" fill="${i}"/><path d="M20 28h8M22 32v5M26 32v5" stroke="${i}" stroke-width="2" stroke-linecap="round"/>`,
 lion:i=>`<circle cx="24" cy="24" r="13" fill="none" stroke="${i}" stroke-width="2"/><path d="M17 21c1.5 2 3 2 3 2M31 21c-1.5 2-3 2-3 2" stroke="${i}" stroke-width="2" stroke-linecap="round"/><path d="M24 26l-3 4h6Z" fill="${i}"/><path d="M24 30v4" stroke="${i}" stroke-width="2" stroke-linecap="round"/>`,
 blade:i=>`<path d="M14 12h20l-7 12 7 12H14" fill="none" stroke="${i}" stroke-width="2.2" stroke-linejoin="round"/><path d="M20 24h9" stroke="${i}" stroke-width="2.2" stroke-linecap="round"/>`,
 fly:i=>`<path d="M24 30c-6 8-16 6-16-2s10-14 16-6c6-8 16-2 16 6s-10 10-16 2Z" fill="none" stroke="${i}" stroke-width="2.2" stroke-linejoin="round"/><path d="M24 22v12" stroke="${i}" stroke-width="2" stroke-linecap="round"/>`
};

const REVIEWS=[
 {n:"Hassan Raza",i:"H",g:"linear-gradient(135deg,#4C1D95,#8B5CF6)",t:"The print quality is insane. Exactly what I wanted — highly recommended!"},
 {n:"Ayesha Khan",i:"A",g:"linear-gradient(135deg,#7C3AED,#A78BFA)",t:"Fabric is so comfortable and the fit is just perfect. Love it! ❤️"},
 {n:"Muhammad Ali",i:"M",g:"linear-gradient(135deg,#312E81,#6D28D9)",t:"Best custom printing experience in Pakistan. Will definitely order again."},
 {n:"Sana Iqbal",i:"S",g:"linear-gradient(135deg,#5B21B6,#8B5CF6)",t:"Ordered 40 shirts for our office. Delivered on time and the branding is crisp."},
 {n:"Bilal Ahmed",i:"B",g:"linear-gradient(135deg,#1E1B4B,#7C3AED)",t:"Uploaded my own artwork and it came out sharper than I expected."}
];

const svgArt=(g,ink)=>`<svg width="62" height="62" viewBox="0 0 48 48" fill="none">${GRAPHIC[g](ink)}</svg>`;

/* ── best selling rail ────────────────────────────────── */
document.getElementById('rail').innerHTML=PRODUCTS.map(p=>`
 <article class="pcard">
   <div class="p-art" style="background:${p.bg}">
     <span class="p-tag">Best seller</span>
     <button class="p-fav" aria-label="Save ${p.n}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20s-7-4.6-7-9.6A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7 3.4c0 5-7 9.6-7 9.6Z"/></svg></button>
     ${svgArt(p.g,p.ink)}
   </div>
   <div class="p-info">
     <div class="p-row">
       <span class="p-nm">${p.n}</span>
       <span class="p-rt"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9L6.7 19.6l1.1-6L3.4 9.4l6-.8Z"/></svg>${p.r} (${p.c})</span>
     </div>
     <div class="p-price"><span>PKR</span>${p.p.toLocaleString('en-PK')}</div>
     <div class="p-sws">${p.sw.map(c=>`<span class="p-sw" style="background:${c}"></span>`).join('')}</div>
   </div>
 </article>`).join('');

/* ── instagram tiles ──────────────────────────────────── */
const IG=[
 {bg:"linear-gradient(160deg,#EFEFF2,#C4C4CE)",ink:"#141418",g:"skull"},
 {bg:"linear-gradient(160deg,#22222B,#0B0B10)",ink:"#EDEDF2",g:"blade"},
 {bg:"linear-gradient(160deg,#F1EAE0,#CFC3B2)",ink:"#141418",g:"fly"},
 {bg:"linear-gradient(160deg,#2B1220,#0B0B10)",ink:"#F0A8D8",g:"lion"},
 {bg:"linear-gradient(160deg,#EDEDF2,#C8C8D1)",ink:"#141418",g:"skull",play:true}
];
document.getElementById('igGrid').innerHTML=IG.map(t=>`
 <a class="ig-c" href="https://www.instagram.com/aks._officiall/" style="background:${t.bg}">
   ${svgArt(t.g,t.ink)}
   ${t.play?`<span class="ig-play"><svg width="9" height="9" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7Z"/></svg></span>`:''}
 </a>`).join('');

/* ── reviews + dots ───────────────────────────────────── */
const track=document.getElementById('rvTrack');
track.innerHTML=REVIEWS.map(r=>`
 <article class="rv">
   <div class="rv-top">
     <span class="rv-av" style="background:${r.g}">${r.i}</span>
     <div><div class="rv-nm">${r.n}</div><div class="rv-vf"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Verified purchase</div></div>
   </div>
   <div class="rv-st">★★★★★</div>
   <p class="rv-tx">${r.t}</p>
 </article>`).join('');

const dots=document.getElementById('dots');
dots.innerHTML=REVIEWS.map((_,i)=>`<span class="dot${i?'':' on'}"></span>`).join('');
track.addEventListener('scroll',()=>{
  const i=Math.round(track.scrollLeft/(track.scrollWidth/REVIEWS.length));
  [...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));
},{passive:true});

/* ── cart ─────────────────────────────────────────────── */
const cartN=document.getElementById('cartN');
let cart=2;
const toast=document.getElementById('toast'),toastT=document.getElementById('toastT');
let tTimer;
function say(msg){
  toastT.textContent=msg;toast.classList.add('up');
  clearTimeout(tTimer);tTimer=setTimeout(()=>toast.classList.remove('up'),2600);
}
function bump(n=1){cart+=n;cartN.textContent=cart}

/* ── wishlist toggles ─────────────────────────────────── */
document.addEventListener('click',e=>{
  const f=e.target.closest('.p-fav');
  if(f){f.classList.toggle('on');say(f.classList.contains('on')?'Saved to your wishlist':'Removed from wishlist');}
  const w=e.target.closest('[data-wish]');
  if(w){w.classList.toggle('liked');say(w.classList.contains('liked')?'Wishlist opened':'Wishlist closed');}
});
document.querySelector('[data-cart]').addEventListener('click',()=>say(`${cart} item${cart===1?'':'s'} in your cart`));

/* ── mobile drawer ────────────────────────────────────── */
const drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim'),burger=document.getElementById('burger');
const setMenu=o=>{drawer.classList.toggle('open',o);scrim.classList.toggle('on',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
burger.onclick=()=>setMenu(true);
scrim.onclick=()=>setMenu(false);
document.getElementById('drawerX').onclick=()=>setMenu(false);
drawer.querySelectorAll('a').forEach(a=>a.onclick=()=>setMenu(false));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});

/* ── product rail arrows ──────────────────────────────── */
const rail=document.getElementById('rail');
document.getElementById('railL').onclick=()=>rail.scrollBy({left:-rail.clientWidth*.7,behavior:'smooth'});
document.getElementById('railR').onclick=()=>rail.scrollBy({left: rail.clientWidth*.7,behavior:'smooth'});

/* ── DTF builder ──────────────────────────────────────── */
const drop=document.getElementById('drop'),file=document.getElementById('file'),dropT=document.getElementById('dropT');
const artF=document.getElementById('artF'),artB=document.getElementById('artB');
const slotF=document.getElementById('slotFront'),slotB=document.getElementById('slotBack');
let side='front';

document.getElementById('pick').onclick=()=>file.click();
drop.addEventListener('dragover',e=>{e.preventDefault();drop.classList.add('hot')});
drop.addEventListener('dragleave',()=>drop.classList.remove('hot'));
drop.addEventListener('drop',e=>{e.preventDefault();drop.classList.remove('hot');if(e.dataTransfer.files[0])loadArt(e.dataTransfer.files[0])});
file.onchange=()=>{if(file.files[0])loadArt(file.files[0])};

function loadArt(f){
  if(f.size>20*1024*1024){dropT.textContent='That file is over 20 MB. Try a smaller export.';dropT.classList.add('drop-ok');return}
  dropT.className='drop-ok';dropT.textContent=`✓ ${f.name}`;
  if(!f.type.startsWith('image/')){say('File received — we\u2019ll preview it after upload');return}
  const url=URL.createObjectURL(f);
  const target=side==='front'?artF:artB;
  target.src=url;target.hidden=false;
  say('Design added to your preview');
}

document.querySelectorAll('[data-side]').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('[data-side]').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');side=b.dataset.side;
  slotF.classList.toggle('dim',side!=='front');
  slotB.classList.toggle('dim',side!=='back');
});

let colour='Black';
document.getElementById('sws').addEventListener('click',e=>{
  const s=e.target.closest('.sw');if(!s)return;
  document.querySelectorAll('.sw').forEach(x=>x.classList.remove('on'));
  s.classList.add('on');colour=s.dataset.nm;
  document.getElementById('teeF').setAttribute('fill',s.dataset.hex);
  document.getElementById('teeB').setAttribute('fill',s.dataset.hex);
});

let q=1;const qOut=document.getElementById('qty');
document.getElementById('plus').onclick=()=>{q++;qOut.textContent=q};
document.getElementById('minus').onclick=()=>{if(q>1){q--;qOut.textContent=q}};

document.getElementById('addCustom').onclick=()=>{
  const size=document.getElementById('size').value;
  if(!size){say('Pick a size to continue');document.getElementById('size').focus();return}
  bump(q);
  say(`${q} × ${colour} ${size} added to your cart`);
};

/* ── newsletter ───────────────────────────────────────── */
const mail=document.getElementById('nlMail'),nlMsg=document.getElementById('nlMsg');
document.getElementById('nlGo').onclick=()=>{
  const v=mail.value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){nlMsg.textContent='Enter a valid email address.';return}
  nlMsg.textContent='Subscribed — watch your inbox for the next drop.';mail.value='';
};
mail.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('nlGo').click()});

/* ── misc ─────────────────────────────────────────────── */
document.getElementById('yr').textContent=new Date().getFullYear();

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
}),{threshold:.08,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.rv-anim').forEach(el=>io.observe(el));
