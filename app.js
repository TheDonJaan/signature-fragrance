const products = [
{id:1,brand:'Afnan',name:'Supremacy Not Only Intense',short:'SNOI',conc:'Extrait de Parfum',tier:'value',tags:['Value','Dark'],notes:'Smoky fruit · moss · woods',family:'Smoky fruity chypre',season:'Fall / Winter',occasion:'Social · Evening',profile:'A darker, louder fruit-and-moss profile with a smoky woody finish.',image:'assets/products/01-afnan-supremacy-not-only-intense.webp',prices:{2:7,5:13,10:20}},
{id:2,brand:'Nishane',name:'Hacivat',short:'Hacivat',conc:'Extrait de Parfum',tier:'premium',tags:['Niche','Fresh'],notes:'Pineapple · citrus · oakmoss',family:'Dry fruity chypre',season:'Spring / Fall',occasion:'Smart casual · Formal',profile:'Bright fruit over a dry mossy structure with a polished niche character.',image:'assets/products/02-nishane-hacivat.webp',imageFallback:'',prices:{2:16,5:32,10:56}},
{id:3,brand:'Nishane',name:'Wulong Cha',short:'Wulong Cha',conc:'Extrait de Parfum',tier:'premium',tags:['Niche','Fresh'],notes:'Citrus · oolong tea · fig',family:'Citrus tea',season:'Spring / Summer',occasion:'Daily · Office',profile:'Transparent citrus and tea with a clean, airy character built for repeat wear.',image:'assets/products/03-nishane-wulong-cha.webp',imageFallback:'',prices:{2:16,5:34,10:56}},
{id:4,brand:'Hermès',name:'Terre d’Hermès Eau Intense Vétiver',short:'Terre EIV',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Citrus · pepper · vetiver',family:'Dry citrus vetiver',season:'Spring / Fall',occasion:'Office · Formal',profile:'Dry, rooted vetiver sharpened by citrus and pepper for a tailored finish.',image:'assets/products/04-hermes-terre-dhermes-eau-intense-vetiver.webp',prices:{2:11,5:20,10:32}},
{id:5,brand:'Hermès',name:'Terre d’Hermès Eau Givrée',short:'Eau Givrée',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Citron · juniper · mineral woods',family:'Cold citrus woods',season:'Spring / Summer',occasion:'Daily · Warm weather',profile:'A colder Terre interpretation built around citron, juniper and mineral tension.',image:'assets/products/05-hermes-terre-dhermes-eau-givree.webp',prices:{2:10,5:20,10:34}},
{id:6,brand:'Chanel',name:'BLEU DE CHANEL L’EXCLUSIF',short:'L’Exclusif',conc:'Parfum Spray',tier:'reserve',tags:['Designer','Dark'],notes:'Aromatic woods · sandalwood · labdanum',family:'Woody aromatic amber',season:'Fall / Winter',occasion:'Evening · Formal',profile:'Dense polished woods, sandalwood and resinous depth in a luxury blue framework.',image:'assets/products/06-chanel-bleu-de-chanel-lexclusif.webp',imageFallback:'',prices:{2:20,5:46}},
{id:7,brand:'Dior',name:'Sauvage Eau de Parfum',short:'Sauvage EDP',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Bergamot · spice · amber woods',family:'Aromatic amber',season:'All season',occasion:'Daily · Social',profile:'A bright aromatic designer signature with spice, amber woods and easy reach.',image:'assets/products/07-dior-sauvage-eau-de-parfum.webp',prices:{2:10,5:20,10:35}},
{id:8,brand:'Dior',name:'Sauvage Elixir',short:'Sauvage Elixir',conc:'Elixir',tier:'reserve',tags:['Designer','Dark'],notes:'Spice · lavender · dark woods',family:'Spicy aromatic',season:'Fall / Winter',occasion:'Night · Formal',profile:'Concentrated spice and lavender with a dark, forceful woody base.',image:'assets/products/08-dior-sauvage-elixir.webp',prices:{2:13,5:27,10:49}},
{id:9,brand:'Burberry',name:'Touch for Men',short:'Touch',conc:'Eau de Toilette',tier:'value',tags:['Designer','Value'],notes:'Violet leaf · cedar · soft musk',family:'Soft woody musk',season:'Spring / Fall',occasion:'Office · Casual',profile:'Soft, clean and tactile with violet leaf, cedar and an easy musky drydown.',image:'assets/products/09-burberry-touch-for-men.webp',imageFallback:'',prices:{2:5,5:10,10:18}},
{id:10,brand:'Yves Saint Laurent',name:'La Nuit de L’Homme',short:'La Nuit',conc:'Eau de Toilette',tier:'select',tags:['Designer','Dark'],notes:'Cardamom · lavender · cedar',family:'Spicy aromatic',season:'Fall / Winter',occasion:'Date · Evening',profile:'Cardamom-led intimacy with soft aromatics and a smooth woody backbone.',image:'assets/products/10-yves-saint-laurent-la-nuit-de-lhomme.webp',prices:{2:9,5:18,10:32}},
{id:11,brand:'Bvlgari',name:'Man Wood Neroli',short:'Wood Neroli',conc:'Eau de Parfum',tier:'value',tags:['Designer','Fresh'],notes:'Neroli · citrus · woods',family:'Citrus floral woods',season:'Spring / Summer',occasion:'Day · Resort',profile:'Bright neroli and citrus over warm woods for a sunny, clean profile.',image:'assets/products/11-bvlgari-man-wood-neroli.webp',prices:{2:8,5:14,10:25}},
{id:12,brand:'Rasasi',name:'Hawas Black',short:'Hawas Black',conc:'Eau de Parfum',tier:'value',tags:['Value','Fresh'],notes:'Citrus fruit · moss · earthy woods',family:'Mossy citrus woods',season:'Spring / Fall',occasion:'Daily · Social',profile:'Citrus and fruit pulled into a mossy, earthy woody direction.',image:'assets/products/12-rasasi-hawas-black.webp',prices:{2:6,5:12,10:21}},
{id:13,brand:'Lattafa',name:'Khamrah',short:'Khamrah',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Warm spice · dates · vanilla amber',family:'Spiced gourmand amber',season:'Fall / Winter',occasion:'Night · Cozy',profile:'Sweet spice, dates and vanilla-amber warmth with a rich gourmand body.',image:'assets/products/13-lattafa-khamrah.webp',prices:{2:7,5:14,10:20}},
{id:14,brand:'Mercedes-Benz',name:'Club Black',short:'Club Black',conc:'Eau de Toilette',tier:'value',tags:['Value','Dark'],notes:'Vanilla · amber · resinous woods',family:'Vanilla amber',season:'Fall / Winter',occasion:'Date · Evening',profile:'Resinous vanilla and amber with a dark, smooth and highly wearable profile.',image:'assets/products/14-mercedes-benz-club-black.webp',imageFallback:'',prices:{2:6,5:12,10:20}},
{id:15,brand:'Armaf',name:'Club de Nuit Untold',short:'Untold',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Saffron · jasmine · amber woods',family:'Saffron amber floral',season:'Fall / Winter',occasion:'Social · Night',profile:'Radiant saffron-jasmine amber with a bright, diffusive woody trail.',image:'assets/products/15-armaf-club-de-nuit-untold.webp',prices:{2:7,5:13,10:20}},
{id:16,brand:'Lattafa',name:'Bade’e Al Oud Amethyst',short:'Amethyst',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Rose · spice · dark oud',family:'Rose oud',season:'Fall / Winter',occasion:'Statement · Evening',profile:'A dark rose center with spice and oud for a rich, dramatic profile.',image:'assets/products/16-lattafa-badee-al-oud-amethyst.webp',prices:{2:6,5:12,10:20}},
{id:17,brand:'Lattafa',name:'Bade’e Al Oud Oud for Glory',short:'Oud for Glory',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Saffron · oud · patchouli',family:'Dry oud woods',season:'Fall / Winter',occasion:'Statement · Formal',profile:'Dry, dark oud with saffron and patchouli giving it a structured woody weight.',image:'assets/products/17-lattafa-badee-al-oud-oud-for-glory.webp',imageFallback:'',prices:{2:6,5:12,10:20}},
{id:18,brand:'Jean Paul Gaultier',name:'Le Beau Paradise Garden',short:'Paradise Garden',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Green coconut · tropical woods',family:'Tropical green',season:'Spring / Summer',occasion:'Resort · Social',profile:'Green tropical body with coconut and woods, balancing freshness and sweetness.',image:'assets/products/18-jean-paul-gaultier-le-beau-paradise-garden.webp',prices:{2:10,5:20,10:32}},
{id:19,brand:'Mancera',name:'French Riviera',short:'French Riviera',conc:'Eau de Parfum',tier:'premium',tags:['Niche','Fresh'],notes:'Marine air · salt · pine · vetiver',family:'Marine aromatic woods',season:'Spring / Summer',occasion:'Coastal · Day',profile:'Salty marine air, pine and vetiver creating a distinct Mediterranean-place effect.',image:'assets/products/19-mancera-french-riviera.webp',prices:{2:9,5:18,10:32}},
{id:20,brand:'Hermès',name:'H24 Herbes Vives',short:'Herbes Vives',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Fresh herbs · pear · rainy green',family:'Green aromatic',season:'Spring / Summer',occasion:'Daily · Rainy day',profile:'Fresh herbs and pear with a wet-green, after-rain character.',image:'assets/products/20-hermes-h24-herbes-vives.webp',prices:{2:10,5:20,10:34}},
{id:21,brand:'Giorgio Armani',name:'Armani Code Parfum',short:'Code Parfum',conc:'Parfum',tier:'select',tags:['Designer','Dark'],notes:'Bergamot · iris · sage · tonka',family:'Iris aromatic woods',season:'Fall / Winter',occasion:'Formal · Date',profile:'Iris and sage tailored over tonka and woods for a clean formal profile.',image:'assets/products/21-giorgio-armani-armani-code-parfum.webp',prices:{2:10,5:20,10:36}},
{id:22,brand:'Tom Ford',name:'Oud Minérale',short:'Oud Minérale',conc:'Eau de Parfum',tier:'premium',tags:['Designer','Niche','Fresh'],notes:'Mineral marine · smoky woods · oud',family:'Mineral marine woods',season:'Spring / Fall',occasion:'Coastal · Formal',profile:'Mineral marine air meeting smoky woods and oud for a cool, unusual signature.',image:'assets/products/22-tom-ford-oud-minerale.webp',prices:{2:12,5:27,10:48}},
{id:23,brand:'French Avenue',name:'Liquid Brun Limited Edition',short:'Liquid Brun LE',conc:'Extrait de Parfum',tier:'value',tags:['Value','Dark'],notes:'Aromatic vanilla · amber · spice',family:'Vanilla amber spice',season:'Fall / Winter',occasion:'Night · Social',profile:'Aromatic vanilla-amber body with spice and a dense, modern sweet profile.',image:'assets/products/23-french-avenue-liquid-brun-limited-edition.webp',prices:{2:7,5:14,10:24}},
{id:24,brand:'Maison Margiela',name:'REPLICA From the Garden',short:'From the Garden',conc:'Eau de Toilette',tier:'select',tags:['Designer','Fresh'],notes:'Tomato leaf · green garden · earth',family:'Green vegetal',season:'Spring / Summer',occasion:'Day · Creative',profile:'Tomato leaf, green vegetation and earth for an intentionally realistic garden effect.',image:'assets/products/24-maison-margiela-replica-from-the-garden.webp',prices:{2:9,5:19,10:33}},
{id:25,brand:'Azzaro',name:'The Most Wanted Eau de Parfum Intense',short:'The Most Wanted',conc:'Eau de Parfum Intense',tier:'select',tags:['Designer','Dark'],notes:'Cardamom · caramel · amber woods',family:'Sweet spicy amber',season:'Fall / Winter',occasion:'Date · Night',profile:'Cardamom and caramel over amber woods for a sweet, seductive evening profile.',image:'assets/products/25-azzaro-the-most-wanted-eau-de-parfum-intense.webp',prices:{2:9,5:18,10:30}},
{id:26,brand:'Xerjoff',name:'Torino23',short:'Torino23',conc:'Eau de Parfum',tier:'reserve',tags:['Niche','Fresh'],notes:'White florals · spice · soft woods',family:'Spiced white floral',season:'Spring / Summer',occasion:'Special · Formal',profile:'A full white-floral heart with spice, cashmere-soft woods and niche polish.',image:'assets/products/26-xerjoff-torino23.webp',prices:{2:19,5:43,10:76}},
{id:27,brand:'Givenchy',name:'Gentleman Society Eau de Parfum Extrême',short:'Society Extrême',conc:'Eau de Parfum',tier:'select',tags:['Designer','Dark'],notes:'Coffee · iris · narcissus · woods',family:'Coffee iris woods',season:'Fall / Winter',occasion:'Formal · Evening',profile:'Coffee, iris and narcissus shaped into a dark tailored woody profile.',image:'assets/products/27-givenchy-gentleman-society-eau-de-parfum-extreme.webp',prices:{2:10,5:22,10:40}},
{id:28,brand:'Moschino',name:'Toy Boy',short:'Toy Boy',conc:'Eau de Parfum',tier:'select',tags:['Designer','Dark'],notes:'Pink pepper · rose · vetiver woods',family:'Peppered rose woods',season:'Spring / Fall',occasion:'Creative · Evening',profile:'Peppered rose with green floral texture and a woody vetiver base.',image:'assets/products/28-moschino-toy-boy.webp',prices:{2:8,5:16,10:29}}
];

// v5 audited storefront logic — public-preview safe, no external libraries.
const tierNames={value:'Core',select:'Select',premium:'Premium',reserve:'Reserve'};
const segmentFor=p=>{
  if(['Afnan','Rasasi','Lattafa','Armaf','French Avenue'].includes(p.brand)) return 'Middle Eastern';
  if(['Nishane','Mancera','Xerjoff'].includes(p.brand)) return 'Niche';
  if(['Chanel','Tom Ford'].includes(p.brand)) return 'Luxury';
  return 'Designer';
};
const sizeCopy={2:{name:'Test',sprays:'~20–30 sprays'},5:{name:'Rotation',sprays:'~50–75 sprays'},10:{name:'Travel',sprays:'~100–150 sprays'}};
const filterOptions=['All','Saved','Fresh','Date Night','Office','Warm Weather','Niche','Middle Eastern','Under $15'];
const setDefs=[
  {id:'discovery-trio',size:2,slots:3,name:'Discovery Trio',cadence:'ONE-TIME',headline:'Three 2 mL scents for a focused first pass.',discounts:{value:.06,select:.06,premium:.04,reserve:.02},benefits:['6 mL total','Choose all 3 scents','Up to 6% bundle savings'],recurring:false},
  {id:'signature-flight',size:2,slots:5,name:'Signature Flight',cadence:'ONE-TIME',headline:'Five 2 mL scents when you want to explore properly.',discounts:{value:.10,select:.10,premium:.06,reserve:.03},benefits:['10 mL total','Choose all 5 scents','Up to 10% bundle savings'],recurring:false},
  {id:'signature-duo',size:5,slots:2,name:'Signature Duo',cadence:'ONE-TIME',headline:'Two 5 mL scents with enough juice for real rotation.',discounts:{value:.08,select:.08,premium:.05,reserve:.02},benefits:['10 mL total','Two rotation-ready scents','Up to 8% bundle savings'],recurring:false},
  {id:'signature-rotation',size:5,slots:3,name:'Signature Rotation',cadence:'MONTHLY',headline:'Three 5 mL scents for a changing monthly wardrobe.',discounts:{value:.10,select:.10,premium:.06,reserve:.03},benefits:['15 mL each month','Change all 3 scents','Up to 10% member savings'],recurring:true},
  {id:'travel-duo',size:10,slots:2,name:'Travel Duo',cadence:'ONE-TIME',headline:'Two 10 mL scents for travel, work bags and repeat wear.',discounts:{value:.04,select:.01,premium:.01,reserve:0},benefits:['20 mL total','Choose both scents','Up to 4% bundle savings'],recurring:false},
  {id:'wardrobe-trio',size:10,slots:3,name:'Wardrobe Trio',cadence:'ONE-TIME',headline:'Three 10 mL scents for a compact working wardrobe.',discounts:{value:.06,select:.01,premium:.01,reserve:0},benefits:['30 mL total','Choose all 3 scents','Up to 6% bundle savings'],recurring:false}
];
const LOCAL_DELIVERY=9.95;

const policies={
  authenticity:{title:'Authenticity & independence',body:`<p>Signature Fragrance is an independent decant shop concept. Each decant is intended to contain authentic fragrance transferred from a genuine original bottle into a new atomizer.</p><p>Signature Fragrance is not affiliated with, sponsored by, approved by or endorsed by the fragrance houses shown. Brand names, bottle designs and trademarks remain the property of their respective owners.</p><p>Retail bottle photography identifies the fragrance. A decant order receives a Signature Fragrance atomizer, not the manufacturer’s retail bottle or box.</p>`},
  fulfillment:{title:'Pickup & delivery',body:`<p>The launch model prioritizes free GTA pickup and paid GTA local delivery. Canada-wide fulfillment will be enabled only after the production store has a compliant ground-carrier workflow for alcohol-based fragrance.</p><p>Exact pickup instructions and delivery coverage will be shown during live checkout when the Shopify store launches.</p>`},
  returns:{title:'Returns, leakage & damage',body:`<p>Filled-to-order decants are intended to be final sale for change-of-mind returns. Leakage, transit damage, incorrect items and fulfillment errors will be handled separately.</p><p>The production policy will be finalized against applicable Ontario consumer-protection and cosmetic requirements before payment is enabled.</p>`},
  privacy:{title:'Privacy in this preview',body:`<p>This showcase does not send checkout information to a server. Bag contents are stored locally in the browser so the preview can behave like a store without creating an account or database record.</p><p>The production Shopify store will publish the final privacy policy covering checkout data, analytics, marketing choices and retention.</p>`},
  terms:{title:'Preview terms',body:`<p>This is a public storefront preview. Prices and availability shown here are pre-launch planning prices and may change before commercial launch.</p><p>No order is created and no payment is accepted in this GitHub Pages version. The customer journey intentionally stops immediately before payment.</p>`}
};

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(Number(n)||0);
const uid=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(16).slice(2)}`;
function retryProductImage(img){const fb=img.dataset.fallback;if(fb){img.dataset.fallback='';img.src=fb;return;}img.hidden=true;const next=img.nextElementSibling;if(next?.classList?.contains('image-fallback'))next.hidden=false;}
window.retryProductImage=retryProductImage;
function safeCart(){try{const raw=JSON.parse(localStorage.getItem('sf_cart')||'[]');return Array.isArray(raw)?raw.map(x=>({...x,qty:Math.max(1,Number(x.qty)||1)})):[]}catch{return []}}
function safeFavorites(){try{const raw=JSON.parse(localStorage.getItem('sf_favorites')||'[]');return new Set(Array.isArray(raw)?raw.map(Number):[])}catch{return new Set()}}
let cart=safeCart(),favorites=safeFavorites(),activeFilter='All',sortMode='featured',activeSetSize=2,selectedSet=setDefs.find(x=>x.size===2),selections=Array(3).fill(''),checkoutStep=1;
function toast(message,actionLabel='',actionFn=null){
  const el=$('#toast');
  el.innerHTML=`<span>${message}</span>${actionLabel?`<button type="button">${actionLabel}</button>`:''}`;
  if(actionLabel&&actionFn){const b=el.querySelector('button');if(b)b.onclick=()=>{actionFn();el.classList.remove('show')}}
  el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2200)
}
function pulseBag(){
  const bag=$('#openCart'),count=$('#cartCount');
  bag.classList.remove('cart-bump');count.classList.remove('count-pop');
  void bag.offsetWidth;bag.classList.add('cart-bump');count.classList.add('count-pop');
  setTimeout(()=>{bag.classList.remove('cart-bump');count.classList.remove('count-pop')},700)
}
function flyToBag(sourceEl){
  if(!sourceEl||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const host=sourceEl.closest?.('.product-card,.product-modal-inner');
  const img=host?.querySelector?.('.product-photo:not([hidden])');
  const target=$('#openCart');
  if(!img||!target)return;
  const r=img.getBoundingClientRect(),t=target.getBoundingClientRect();
  if(!r.width||!r.height)return;
  const clone=img.cloneNode(true);clone.removeAttribute('loading');clone.removeAttribute('onerror');clone.className='cart-fly-clone';
  Object.assign(clone.style,{left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`});document.body.appendChild(clone);
  const dx=t.left+t.width/2-(r.left+r.width/2),dy=t.top+t.height/2-(r.top+r.height/2);
  const anim=clone.animate([
    {transform:'translate(0,0) scale(.42)',opacity:.88,filter:'drop-shadow(0 14px 24px rgba(0,0,0,.28))'},
    {transform:`translate(${dx*.55}px,${dy*.4-38}px) scale(.28) rotate(-4deg)`,opacity:.78,offset:.55},
    {transform:`translate(${dx}px,${dy}px) scale(.08) rotate(6deg)`,opacity:0}
  ],{duration:620,easing:'cubic-bezier(.22,.78,.2,1)',fill:'forwards'});
  anim.onfinish=()=>clone.remove();anim.oncancel=()=>clone.remove();
}
function addedToBag(message,sourceEl){flyToBag(sourceEl);pulseBag();toast(message,'View bag',openCart)}
function save(){localStorage.setItem('sf_cart',JSON.stringify(cart));renderCart()}
function saveFavorites(){localStorage.setItem('sf_favorites',JSON.stringify([...favorites]));}
function toggleFavorite(id){favorites.has(id)?favorites.delete(id):favorites.add(id);saveFavorites();renderProducts();toast(favorites.has(id)?'Saved to your shelf':'Removed from saved scents')}
window.toggleFavorite=toggleFavorite;
function minPrice(p){return Math.min(...Object.values(p.prices))}
function matchesFilter(p,f){
  if(f==='All')return true;
  if(f==='Saved')return favorites.has(p.id);
  if(f==='Fresh')return p.tags.includes('Fresh');
  if(f==='Date Night')return /Date|Evening|Night|Statement/.test(p.occasion);
  if(f==='Office')return /Office|Formal/.test(p.occasion);
  if(f==='Warm Weather')return /Spring|Summer|All season/.test(p.season);
  if(f==='Niche')return segmentFor(p)==='Niche';
  if(f==='Middle Eastern')return segmentFor(p)==='Middle Eastern';
  if(f==='Under $15')return minPrice(p)<15;
  return true;
}
function sortedProducts(list){
  const a=[...list];
  if(sortMode==='low')a.sort((x,y)=>minPrice(x)-minPrice(y));
  if(sortMode==='high')a.sort((x,y)=>minPrice(y)-minPrice(x));
  if(sortMode==='az')a.sort((x,y)=>`${x.brand} ${x.name}`.localeCompare(`${y.brand} ${y.name}`));
  return a;
}
function renderFilters(){
  $('#filters').innerHTML=filterOptions.map(f=>`<button class="filter-btn ${activeFilter===f?'active':''}" data-filter="${f}">${f}</button>`).join('');
  $$('.filter-btn').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;renderFilters();renderProducts()});
}
function renderProducts(){
  const q=$('#searchInput').value.toLowerCase().trim();
  let list=products.filter(p=>matchesFilter(p,activeFilter)&&(!q||`${p.brand} ${p.name} ${p.notes} ${p.family} ${p.occasion} ${p.season}`.toLowerCase().includes(q)));
  list=sortedProducts(list); $('#resultCount').textContent=`${list.length} scent${list.length===1?'':'s'}`;
  $('#productGrid').innerHTML=list.map(p=>`<article class="product-card">
    <button class="favorite-btn ${favorites.has(p.id)?'saved':''}" onclick="toggleFavorite(${p.id})" aria-label="${favorites.has(p.id)?'Remove':'Save'} ${p.brand} ${p.name}" title="${favorites.has(p.id)?'Saved':'Save scent'}">${favorites.has(p.id)?'♥':'♡'}</button>
    <button class="product-art" data-product="${p.id}" onclick="showProduct(${p.id})" aria-label="View ${p.brand} ${p.name}">
      <span class="product-segment">${segmentFor(p)}</span>
      <img class="product-photo" src="${p.image}" alt="${p.brand} ${p.name} retail bottle" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-fallback="${p.imageFallback||''}" onerror="retryProductImage(this)">
      <div class="image-fallback" hidden><b>${p.brand}</b><span>${p.short}</span></div>
    </button>
    <div class="product-info">
      <div class="product-house">${p.brand} · ${p.conc}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-notes">${p.notes}</p>
      <div class="product-meta"><span>${p.season}</span><span>${p.occasion.split(' · ')[0]}</span></div>
      <div class="sizes compact-sizes">${[2,5,10].map(s=>p.prices[s]?`<button class="size-btn" onclick="addProduct(${p.id},${s},this)"><b>${s} mL</b><span>${money(p.prices[s])}</span></button>`:'').join('')}</div>
      <div class="card-foot"><span class="from">From <strong>${money(minPrice(p))}</strong></span><button class="quick-view" onclick="showProduct(${p.id})">View scent</button></div>
    </div>
  </article>`).join('')||'<p class="empty">No scents match that search.</p>';
}
function addProduct(id,size,sourceEl=null){
  const p=products.find(x=>x.id===id);if(!p?.prices[size])return;
  const existing=cart.find(x=>x.type==='decant'&&x.productId===id&&x.size===size);
  if(existing)existing.qty=(existing.qty||1)+1;else cart.push({key:uid(),type:'decant',productId:id,size,qty:1,name:`${p.brand} — ${p.name}`,meta:`${size} mL decant`,price:p.prices[size]});
  save();addedToBag(`${p.short} · ${size} mL added`,sourceEl);
}
window.addProduct=addProduct;
function showProduct(id){
  const p=products.find(x=>x.id===id);
  $('#productModalContent').innerHTML=`<div class="product-modal-inner">
    <div class="modal-art" data-product="${p.id}"><img class="product-photo modal-photo" src="${p.image}" alt="${p.brand} ${p.name} retail bottle" referrerpolicy="no-referrer" data-fallback="${p.imageFallback||''}" onerror="retryProductImage(this)"><div class="image-fallback" hidden><b>${p.brand}</b><span>${p.short}</span></div><div class="decant-vial" aria-hidden="true"><i></i><span>SIGNATURE</span><b>5 mL</b></div></div>
    <div class="modal-copy"><button class="modal-close" onclick="document.querySelector('#productModal').close()" aria-label="Close">×</button>
      <p class="eyebrow">${segmentFor(p)} · ${p.conc}</p><h2>${p.name}</h2><p class="modal-brand">${p.brand}</p>
      <div class="modal-tags"><span>${p.family}</span><span>${p.season}</span><span>${p.occasion}</span></div>
      <p class="modal-profile">${p.profile}</p>
      <div class="scent-facts"><div><small>Key notes</small><strong>${p.notes}</strong></div><div><small>What you receive</small><strong>Labelled glass spray atomizer</strong></div></div>
      <p class="fineprint">Retail bottle image is for fragrance identification. Signature Fragrance is an independent decanter and is not affiliated with the fragrance house.</p>
      <div class="size-choice-grid">${[2,5,10].map(s=>p.prices[s]?`<button onclick="addProduct(${p.id},${s},this);document.querySelector('#productModal').close()"><span><b>${s} mL</b><small>${sizeCopy[s].name} · ${sizeCopy[s].sprays}</small></span><strong>${money(p.prices[s])}</strong></button>`:'').join('')}</div>
    </div></div>`;
  $('#productModal').showModal();
}
window.showProduct=showProduct;

function discountFor(p,setDef){return setDef.discounts[p.tier]||0}
function bundlePrice(p,setDef){return +(p.prices[setDef.size]*(1-discountFor(p,setDef))).toFixed(2)}
function setFrom(setDef){return products.filter(p=>p.prices[setDef.size]).map(p=>bundlePrice(p,setDef)).sort((a,b)=>a-b).slice(0,setDef.slots).reduce((a,b)=>a+b,0)}
function renderSetModes(){
  $('#setSizeTabs').innerHTML=[2,5,10].map(size=>`<button class="set-size-tab ${activeSetSize===size?'active':''}" data-set-size="${size}" aria-pressed="${activeSetSize===size}"><b>${size} mL</b><small>${sizeCopy[size].name}</small></button>`).join('');
  $$('.set-size-tab').forEach(btn=>btn.onclick=()=>switchSetSize(+btn.dataset.setSize));
}
function switchSetSize(size){
  activeSetSize=size;
  selectedSet=setDefs.find(x=>x.size===size);
  selections=Array(selectedSet.slots).fill('');
  renderSetModes();renderSets();renderSetBuilder();
}
function renderSets(){
  const defs=setDefs.filter(x=>x.size===activeSetSize);
  $('#sets').innerHTML=defs.map(d=>`<article class="plan ${selectedSet?.id===d.id?'active':''}" data-set="${d.id}"><div class="plan-kicker">${d.cadence}</div><div class="plan-top"><h3>${d.name}</h3><div class="price">from ${money(setFrom(d))}${d.recurring?'<small>/ month</small>':'<small>set total</small>'}</div></div><p>${d.headline}</p><ul>${d.benefits.map(x=>`<li>${x}</li>`).join('')}</ul><button class="plan-select">${selectedSet?.id===d.id?'Selected':'Choose set'}</button></article>`).join('');
  $$('#sets .plan').forEach(el=>el.onclick=()=>selectSet(el.dataset.set));
}
function selectSet(id){
  selectedSet=setDefs.find(x=>x.id===id);
  activeSetSize=selectedSet.size;
  selections=Array(selectedSet.slots).fill('');
  renderSetModes();renderSets();renderSetBuilder();
  $('#setBuilder').scrollIntoView({behavior:'smooth',block:'center'});
}
function renderSetBuilder(){
  const title=$('#builderTitle'),slots=$('#setSlots'),btn=$('#addSet'),note=$('#builderNote');
  if(!selectedSet){title.textContent='Choose a set';slots.innerHTML='<div class="builder-empty">Pick a size and set above, then choose your fragrances.</div>';$('#builderTotal').textContent='—';$('#builderSavings').textContent='';btn.disabled=true;return}
  title.textContent=`${selectedSet.name} · ${selectedSet.slots} × ${selectedSet.size} mL`;
  slots.innerHTML=selections.map((val,i)=>`<div class="slot"><label>Scent ${i+1}</label><select data-slot="${i}"><option value="">Choose a fragrance</option>${products.filter(p=>p.prices[selectedSet.size]).map(p=>{const chosenElsewhere=selections.some((x,j)=>j!==i&&String(x)===String(p.id));const save=p.prices[selectedSet.size]-bundlePrice(p,selectedSet);return `<option value="${p.id}" ${String(p.id)===String(val)?'selected':''} ${chosenElsewhere?'disabled':''}>${p.brand} — ${p.short} · ${money(bundlePrice(p,selectedSet))}${save>.01?` (save ${money(save)})`:''}</option>`}).join('')}</select></div>`).join('');
  slots.querySelectorAll('select').forEach(sel=>sel.onchange=e=>{selections[+e.target.dataset.slot]=e.target.value;renderSetBuilder()});
  const chosen=selections.filter(Boolean).map(id=>products.find(x=>x.id===+id));
  const retail=chosen.reduce((sum,p)=>sum+p.prices[selectedSet.size],0),total=chosen.reduce((sum,p)=>sum+bundlePrice(p,selectedSet),0);
  $('#builderTotal').textContent=chosen.length?`${money(total)}${selectedSet.recurring?' / mo':''}`:'—';
  $('#builderSavings').textContent=chosen.length?`You save ${money(retail-total)}${selectedSet.recurring?' each month':''}`:'';
  btn.textContent=selectedSet.recurring?'Add monthly rotation to bag':'Add set to bag';
  note.textContent=selectedSet.recurring?'Monthly billing is disabled in this preview. The live Shopify store will provide secure recurring billing and subscription management.':'One-time set. No subscription or account required.';
  btn.disabled=chosen.length!==selectedSet.slots||new Set(selections).size!==selections.length;
  btn.onclick=()=>{
    const names=chosen.map(p=>p.short);
    cart.push({key:uid(),type:'set',qty:1,recurring:selectedSet.recurring,name:selectedSet.name,meta:`${selectedSet.slots} × ${selectedSet.size} mL · ${names.join(' / ')}`,price:+total.toFixed(2)});
    save();addedToBag(`${selectedSet.name} added`,btn);
  };
}

function lineTotal(x){return (Number(x.price)||0)*(Number(x.qty)||1)}
function renderCart(){
  const count=cart.reduce((s,x)=>s+(Number(x.qty)||1),0);$('#cartCount').textContent=count;
  $('#cartItems').innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-item"><div class="cart-copy"><span class="cart-type">${x.type==='set'?(x.recurring?'Monthly set':'Signature set'):'Decant'}</span><strong>${x.name}</strong><small>${x.meta}${x.recurring?' · renews monthly':''}</small>${x.type==='decant'?`<div class="qty"><button onclick="changeQty(${i},-1)" aria-label="Decrease quantity">−</button><span>${x.qty}</span><button onclick="changeQty(${i},1)" aria-label="Increase quantity">+</button></div>`:''}</div><div class="cart-price"><strong>${money(lineTotal(x))}</strong><button onclick="removeCart(${i})">Remove</button></div></div>`).join(''):'<div class="empty"><b>Your bag is empty.</b><span>Start with a decant or build a Signature Set.</span></div>';
  $('#cartSubtotal').textContent=money(cart.reduce((s,x)=>s+lineTotal(x),0));$('#checkoutBtn').disabled=!cart.length;
}
function changeQty(i,d){const x=cart[i];if(!x||x.type!=='decant')return;x.qty=Math.max(1,(x.qty||1)+d);save()}window.changeQty=changeQty;
function removeCart(i){cart.splice(i,1);save()}window.removeCart=removeCart;
function openCart(){$('#cartDrawer').classList.add('open');$('#scrim').classList.add('show');$('#cartDrawer').setAttribute('aria-hidden','false');document.body.classList.add('no-scroll')}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#scrim').classList.remove('show');$('#cartDrawer').setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}

function setCheckoutStep(step){checkoutStep=step;$$('.checkout-step').forEach(s=>s.hidden=Number(s.dataset.step)!==step);const labels=['Contact','Fulfillment','Review','Payment'];$('#checkoutProgress').innerHTML=labels.map((label,i)=>`<div class="progress-node ${i+1===step?'active':''} ${i+1<step?'done':''}"><span>${i+1<step?'✓':i+1}</span><small>${label}</small></div>`).join('')}
function validContact(){const first=$('#firstName').value.trim(),last=$('#lastName').value.trim(),email=$('#email').value.trim();if(!first||!last||!/^\S+@\S+\.\S+$/.test(email)){toast('Enter your name and a valid email');return false}return true}
function currentFulfillment(){return document.querySelector('input[name="fulfillment"]:checked')?.value||'pickup'}
function validFulfillment(){if(currentFulfillment()==='delivery'){const postal=$('#postalCode').value.trim();if(!$('#address1').value.trim()||!$('#city').value.trim()||!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postal)){toast('Complete a valid GTA delivery address');return false}}return true}
function orderMath(){const subtotal=cart.reduce((s,x)=>s+lineTotal(x),0),recurring=cart.filter(x=>x.recurring).reduce((s,x)=>s+lineTotal(x),0),delivery=currentFulfillment()==='delivery'?LOCAL_DELIVERY:0,tax=(subtotal+delivery)*.13,total=subtotal+delivery+tax;return{subtotal,recurring,delivery,tax,total}}
function renderReview(){const f=currentFulfillment(),m=orderMath();const address=f==='delivery'?`${$('#address1').value.trim()}${$('#address2').value.trim()?`, ${$('#address2').value.trim()}`:''}, ${$('#city').value.trim()}, ON ${$('#postalCode').value.trim().toUpperCase()}`:'Free GTA pickup · final pickup instructions provided with a live order';$('#reviewContact').innerHTML=`<div><small>Contact</small><strong>${$('#firstName').value.trim()} ${$('#lastName').value.trim()}</strong><span>${$('#email').value.trim()}${$('#phone').value.trim()?` · ${$('#phone').value.trim()}`:''}</span></div><div><small>Fulfillment</small><strong>${f==='delivery'?'GTA local delivery':'GTA pickup'}</strong><span>${address}</span></div>`;$('#reviewItems').innerHTML=cart.map(x=>`<div class="review-line"><div><strong>${x.name}${x.qty>1?` × ${x.qty}`:''}</strong><span>${x.meta}${x.recurring?' · renews monthly':''}</span></div><b>${money(lineTotal(x))}</b></div>`).join('');$('#reviewTotals').innerHTML=`<div><span>Merchandise</span><b>${money(m.subtotal)}</b></div><div><span>${f==='delivery'?'GTA local delivery':'Pickup'}</span><b>${money(m.delivery)}</b></div><div><span>Estimated Ontario HST (13%)</span><b>${money(m.tax)}</b></div><div class="total"><span>Due at first payment</span><b>${money(m.total)}</b></div>${m.recurring?`<div class="renewal"><span>Monthly merchandise renewal</span><b>${money(m.recurring)}</b></div>`:''}<small>Tax and fulfillment are estimates in this preview. The live Shopify checkout will calculate final amounts.</small>`}
function orderSummary(){const m=orderMath(),f=currentFulfillment();return `SIGNATURE FRAGRANCE — preview order\nCustomer: ${$('#firstName').value.trim()} ${$('#lastName').value.trim()}\nEmail: ${$('#email').value.trim()}\nFulfillment: ${f}\n\n${cart.map(x=>`- ${x.name}${x.qty>1?` x${x.qty}`:''} | ${x.meta} | ${money(lineTotal(x))}`).join('\n')}\n\nMerchandise: ${money(m.subtotal)}\nDelivery: ${money(m.delivery)}\nEstimated HST: ${money(m.tax)}\nDue at first payment: ${money(m.total)}${m.recurring?`\nMonthly merchandise renewal: ${money(m.recurring)}`:''}\n\nNo payment was collected.`}
function openCheckout(){if(!cart.length)return;closeCart();setCheckoutStep(1);$('#checkoutModal').showModal()}
function showPolicy(key){const p=policies[key];if(!p)return;$('#policyContent').innerHTML=`<p class="eyebrow">SIGNATURE FRAGRANCE</p><h2>${p.title}</h2>${p.body}`;$('#policyModal').showModal()}

$('#openCart').onclick=openCart;$('#closeCart').onclick=closeCart;$('#scrim').onclick=closeCart;$('#clearCart').onclick=()=>{cart=[];save();toast('Bag cleared')};
$('#searchInput').oninput=renderProducts;$('#sortSelect').onchange=e=>{sortMode=e.target.value;renderProducts()};$('#checkoutBtn').onclick=openCheckout;$('#closeCheckout').onclick=()=>$('#checkoutModal').close();
$('#toFulfillment').onclick=()=>{if(validContact())setCheckoutStep(2)};$$('input[name="fulfillment"]').forEach(r=>r.onchange=()=>{$('#deliveryFields').hidden=currentFulfillment()!=='delivery'});$('#toReview').onclick=()=>{if(validFulfillment()){renderReview();setCheckoutStep(3)}};$$('[data-back]').forEach(b=>b.onclick=()=>setCheckoutStep(Number(b.dataset.back)));
$('#toPaymentStop').onclick=()=>{const m=orderMath();$('#paymentSummary').innerHTML=`<span>Ready for secure checkout</span><strong>${money(m.total)}</strong><small>No charge has been made in this preview.</small>`;setCheckoutStep(4)};
$('#copyOrderBtn').onclick=async()=>{const text=orderSummary();try{await navigator.clipboard.writeText(text);toast('Order summary copied')}catch{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast('Order summary copied')}};
$('#restartCheckout').onclick=()=>{$('#checkoutModal').close();window.scrollTo({top:0,behavior:'smooth'})};$$('[data-policy]').forEach(b=>b.onclick=()=>showPolicy(b.dataset.policy));$('#closePolicy').onclick=()=>$('#policyModal').close();

renderFilters();renderProducts();renderSetModes();renderSets();renderSetBuilder();renderCart();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}
