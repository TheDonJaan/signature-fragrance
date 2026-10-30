const products = [
{id:1,brand:'Afnan',name:'Supremacy Not Only Intense',short:'SNOI',conc:'Extrait de Parfum',tier:'value',tags:['Value','Dark'],notes:'Smoky fruit · moss · woods',family:'Smoky fruity chypre',season:'Fall / Winter',occasion:'Social · Evening',profile:'A darker, louder fruit-and-moss profile with a smoky woody finish.',prices:{2:6,5:12,10:21}},
{id:2,brand:'Nishane',name:'Hacivat',short:'Hacivat',conc:'Extrait de Parfum',tier:'premium',tags:['Niche','Fresh'],notes:'Pineapple · citrus · oakmoss',family:'Dry fruity chypre',season:'Spring / Fall',occasion:'Smart casual · Formal',profile:'Bright fruit over a dry mossy structure with a polished niche character.',prices:{2:16,5:32,10:57}},
{id:3,brand:'Nishane',name:'Wulong Cha',short:'Wulong Cha',conc:'Extrait de Parfum',tier:'premium',tags:['Niche','Fresh'],notes:'Citrus · oolong tea · fig',family:'Citrus tea',season:'Spring / Summer',occasion:'Daily · Office',profile:'Transparent citrus and tea with a clean, airy character built for repeat wear.',prices:{2:16,5:34,10:59}},
{id:4,brand:'Hermès',name:'Terre d’Hermès Eau Intense Vétiver',short:'Terre EIV',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Citrus · pepper · vetiver',family:'Dry citrus vetiver',season:'Spring / Fall',occasion:'Office · Formal',profile:'Dry, rooted vetiver sharpened by citrus and pepper for a tailored finish.',prices:{2:9,5:18,10:32}},
{id:5,brand:'Hermès',name:'Terre d’Hermès Eau Givrée',short:'Eau Givrée',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Citron · juniper · mineral woods',family:'Cold citrus woods',season:'Spring / Summer',occasion:'Daily · Warm weather',profile:'A colder Terre interpretation built around citron, juniper and mineral tension.',prices:{2:10,5:20,10:36}},
{id:6,brand:'Chanel',name:'BLEU DE CHANEL L’EXCLUSIF',short:'L’Exclusif',conc:'Parfum Spray',tier:'reserve',tags:['Designer','Dark'],notes:'Aromatic woods · sandalwood · labdanum',family:'Woody aromatic amber',season:'Fall / Winter',occasion:'Evening · Formal',profile:'Dense polished woods, sandalwood and resinous depth in a luxury blue framework.',prices:{2:19,5:45}},
{id:7,brand:'Dior',name:'Sauvage Eau de Parfum',short:'Sauvage EDP',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Bergamot · spice · amber woods',family:'Aromatic amber',season:'All season',occasion:'Daily · Social',profile:'A bright aromatic designer signature with spice, amber woods and easy reach.',prices:{2:10,5:20,10:35}},
{id:8,brand:'Dior',name:'Sauvage Elixir',short:'Sauvage Elixir',conc:'Elixir',tier:'reserve',tags:['Designer','Dark'],notes:'Spice · lavender · dark woods',family:'Spicy aromatic',season:'Fall / Winter',occasion:'Night · Formal',profile:'Concentrated spice and lavender with a dark, forceful woody base.',prices:{2:15,5:31,10:55}},
{id:9,brand:'Burberry',name:'Touch for Men',short:'Touch',conc:'Eau de Toilette',tier:'value',tags:['Designer','Value'],notes:'Violet leaf · cedar · soft musk',family:'Soft woody musk',season:'Spring / Fall',occasion:'Office · Casual',profile:'Soft, clean and tactile with violet leaf, cedar and an easy musky drydown.',prices:{2:5,5:10,10:18}},
{id:10,brand:'Yves Saint Laurent',name:'La Nuit de L’Homme',short:'La Nuit',conc:'Eau de Toilette',tier:'select',tags:['Designer','Dark'],notes:'Cardamom · lavender · cedar',family:'Spicy aromatic',season:'Fall / Winter',occasion:'Date · Evening',profile:'Cardamom-led intimacy with soft aromatics and a smooth woody backbone.',prices:{2:9,5:18,10:32}},
{id:11,brand:'Bvlgari',name:'Man Wood Neroli',short:'Wood Neroli',conc:'Eau de Parfum',tier:'value',tags:['Designer','Fresh'],notes:'Neroli · citrus · woods',family:'Citrus floral woods',season:'Spring / Summer',occasion:'Day · Resort',profile:'Bright neroli and citrus over warm woods for a sunny, clean profile.',prices:{2:6,5:12,10:21}},
{id:12,brand:'Rasasi',name:'Hawas Black',short:'Hawas Black',conc:'Eau de Parfum',tier:'value',tags:['Value','Fresh'],notes:'Citrus fruit · moss · earthy woods',family:'Mossy citrus woods',season:'Spring / Fall',occasion:'Daily · Social',profile:'Citrus and fruit pulled into a mossy, earthy woody direction.',prices:{2:6,5:12,10:21}},
{id:13,brand:'Lattafa',name:'Khamrah',short:'Khamrah',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Warm spice · dates · vanilla amber',family:'Spiced gourmand amber',season:'Fall / Winter',occasion:'Night · Cozy',profile:'Sweet spice, dates and vanilla-amber warmth with a rich gourmand body.',prices:{2:5,5:10,10:18}},
{id:14,brand:'Mercedes-Benz',name:'Club Black',short:'Club Black',conc:'Eau de Toilette',tier:'value',tags:['Value','Dark'],notes:'Vanilla · amber · resinous woods',family:'Vanilla amber',season:'Fall / Winter',occasion:'Date · Evening',profile:'Resinous vanilla and amber with a dark, smooth and highly wearable profile.',prices:{2:5,5:10,10:18}},
{id:15,brand:'Armaf',name:'Club de Nuit Untold',short:'Untold',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Saffron · jasmine · amber woods',family:'Saffron amber floral',season:'Fall / Winter',occasion:'Social · Night',profile:'Radiant saffron-jasmine amber with a bright, diffusive woody trail.',prices:{2:6,5:12,10:21}},
{id:16,brand:'Lattafa',name:'Bade’e Al Oud Amethyst',short:'Amethyst',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Rose · spice · dark oud',family:'Rose oud',season:'Fall / Winter',occasion:'Statement · Evening',profile:'A dark rose center with spice and oud for a rich, dramatic profile.',prices:{2:5,5:10,10:18}},
{id:17,brand:'Lattafa',name:'Bade’e Al Oud Oud for Glory',short:'Oud for Glory',conc:'Eau de Parfum',tier:'value',tags:['Value','Dark'],notes:'Saffron · oud · patchouli',family:'Dry oud woods',season:'Fall / Winter',occasion:'Statement · Formal',profile:'Dry, dark oud with saffron and patchouli giving it a structured woody weight.',prices:{2:5,5:10,10:18}},
{id:18,brand:'Jean Paul Gaultier',name:'Le Beau Paradise Garden',short:'Paradise Garden',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Green coconut · tropical woods',family:'Tropical green',season:'Spring / Summer',occasion:'Resort · Social',profile:'Green tropical body with coconut and woods, balancing freshness and sweetness.',prices:{2:10,5:20,10:36}},
{id:19,brand:'Mancera',name:'French Riviera',short:'French Riviera',conc:'Eau de Parfum',tier:'premium',tags:['Niche','Fresh'],notes:'Marine air · salt · pine · vetiver',family:'Marine aromatic woods',season:'Spring / Summer',occasion:'Coastal · Day',profile:'Salty marine air, pine and vetiver creating a distinct Mediterranean-place effect.',prices:{2:11,5:22,10:39}},
{id:20,brand:'Hermès',name:'H24 Herbes Vives',short:'Herbes Vives',conc:'Eau de Parfum',tier:'select',tags:['Designer','Fresh'],notes:'Fresh herbs · pear · rainy green',family:'Green aromatic',season:'Spring / Summer',occasion:'Daily · Rainy day',profile:'Fresh herbs and pear with a wet-green, after-rain character.',prices:{2:10,5:20,10:36}},
{id:21,brand:'Giorgio Armani',name:'Armani Code Parfum',short:'Code Parfum',conc:'Parfum',tier:'select',tags:['Designer','Dark'],notes:'Bergamot · iris · sage · tonka',family:'Iris aromatic woods',season:'Fall / Winter',occasion:'Formal · Date',profile:'Iris and sage tailored over tonka and woods for a clean formal profile.',prices:{2:10,5:20,10:36}},
{id:22,brand:'Tom Ford',name:'Oud Minérale',short:'Oud Minérale',conc:'Eau de Parfum',tier:'premium',tags:['Designer','Niche','Fresh'],notes:'Mineral marine · smoky woods · oud',family:'Mineral marine woods',season:'Spring / Fall',occasion:'Coastal · Formal',profile:'Mineral marine air meeting smoky woods and oud for a cool, unusual signature.',prices:{2:15,5:30,10:54}},
{id:23,brand:'French Avenue',name:'Liquid Brun Limited Edition',short:'Liquid Brun LE',conc:'Extrait de Parfum',tier:'value',tags:['Value','Dark'],notes:'Aromatic vanilla · amber · spice',family:'Vanilla amber spice',season:'Fall / Winter',occasion:'Night · Social',profile:'Aromatic vanilla-amber body with spice and a dense, modern sweet profile.',prices:{2:6,5:12,10:21}},
{id:24,brand:'Maison Margiela',name:'REPLICA From the Garden',short:'From the Garden',conc:'Eau de Toilette',tier:'select',tags:['Designer','Fresh'],notes:'Tomato leaf · green garden · earth',family:'Green vegetal',season:'Spring / Summer',occasion:'Day · Creative',profile:'Tomato leaf, green vegetation and earth for an intentionally realistic garden effect.',prices:{2:10,5:20,10:35}},
{id:25,brand:'Azzaro',name:'The Most Wanted Eau de Parfum Intense',short:'The Most Wanted',conc:'Eau de Parfum Intense',tier:'select',tags:['Designer','Dark'],notes:'Cardamom · caramel · amber woods',family:'Sweet spicy amber',season:'Fall / Winter',occasion:'Date · Night',profile:'Cardamom and caramel over amber woods for a sweet, seductive evening profile.',prices:{2:9,5:18,10:32}},
{id:26,brand:'Xerjoff',name:'Torino23',short:'Torino23',conc:'Eau de Parfum',tier:'reserve',tags:['Niche','Fresh'],notes:'White florals · spice · soft woods',family:'Spiced white floral',season:'Spring / Summer',occasion:'Special · Formal',profile:'A full white-floral heart with spice, cashmere-soft woods and niche polish.',prices:{2:22,5:47,10:84}},
{id:27,brand:'Givenchy',name:'Gentleman Society Eau de Parfum Extrême',short:'Society Extrême',conc:'Eau de Parfum',tier:'select',tags:['Designer','Dark'],notes:'Coffee · iris · narcissus · woods',family:'Coffee iris woods',season:'Fall / Winter',occasion:'Formal · Evening',profile:'Coffee, iris and narcissus shaped into a dark tailored woody profile.',prices:{2:11,5:22,10:39}},
{id:28,brand:'Moschino',name:'Toy Boy',short:'Toy Boy',conc:'Eau de Parfum',tier:'select',tags:['Designer','Dark'],notes:'Pink pepper · rose · vetiver woods',family:'Peppered rose woods',season:'Spring / Fall',occasion:'Creative · Evening',profile:'Peppered rose with green floral texture and a woody vetiver base.',prices:{2:8,5:16,10:28}}
];

const tierNames={value:'Core',select:'Select',premium:'Premium',reserve:'Reserve'};
const surchargeFor=(tier,size)=>{const map5={value:0,select:2,premium:6,reserve:11};const map10={value:0,select:6,premium:18,reserve:null};return (size===10?map10:map5)[tier]};
const plans=[
{id:'explorer',name:'Explorer',price:36,slots:2,size:5,desc:'Two 5 mL sprays every month.',bullets:['10 mL total','Core scents included','Premium upgrades available']},
{id:'rotation',name:'Rotation',price:49,slots:3,size:5,desc:'The sweet spot for discovery.',bullets:['15 mL total','Three different wears','Best prototype value']},
{id:'travel',name:'Travel Duo',price:58,slots:2,size:10,desc:'Two larger travel sprays.',bullets:['20 mL total','For scents you already know','Reserve 10 mL excluded']}
];

const policies={
  authenticity:{title:'Authenticity & brand independence',body:`<p>Signature Fragrance is designed as an independent decant shop. The product is authentic fragrance transferred from an original retail bottle into a smaller atomizer.</p><p>Signature Fragrance is not affiliated with, sponsored by, approved by or endorsed by the fragrance brands represented. Brand names and trademarks remain the property of their respective owners.</p><p>This prototype uses stylized bottle artwork rather than implying that the original brand manufactured the decant atomizer.</p>`},
  fulfillment:{title:'Pickup, delivery & shipping',body:`<p>The prototype prioritizes free GTA pickup and a local-delivery option. Broader shipping is intentionally not promised until a compliant carrier workflow for alcohol-based fragrance is finalized.</p><p>Final launch timing, pickup location, local-delivery boundaries, dangerous-goods handling and shipping rates will be configured in Shopify before payment is enabled.</p>`},
  returns:{title:'Returns, leakage & damage',body:`<p>Prototype policy: filled-to-order decants are intended to be final sale for change-of-mind returns. Leakage, transit damage, incorrect items and fulfillment errors would be handled separately.</p><p>Final policy wording must be reviewed for applicable Ontario consumer-protection requirements before launch.</p>`},
  privacy:{title:'Privacy',body:`<p>This GitHub prototype does not send the checkout form anywhere. The shopping bag is stored only in your browser's local storage.</p><p>At launch, Shopify will own checkout data, payment processing and the production privacy flow. A final privacy policy will identify the store operator, service providers, analytics tools, marketing choices and data-retention practices.</p>`},
  terms:{title:'Terms of use',body:`<p>This is a non-transactional prototype. Prices, availability, fulfillment terms, subscription rules and tax estimates can change before launch.</p><p>No order is created and no payment is accepted through this GitHub Pages version.</p>`},
  contact:{title:'Contact',body:`<p>Contact channels have intentionally not been published in the prototype yet.</p><p>Before launch, add a support email, response-time expectation and—if desired—an Instagram or other customer-service channel. Shopify can then use the same contact details on order notifications and policy pages.</p>`}
};

let cart=JSON.parse(localStorage.getItem('sf_cart')||'[]');
let activeFilter='All', selectedPlan=null, selections=[], flightSelections=Array(5).fill(''), checkoutStep=1;
const money=n=>new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(Number(n)||0);
const uid=()=>crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(16).slice(2)}`;
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),1800)}
function save(){localStorage.setItem('sf_cart',JSON.stringify(cart));renderCart()}

function renderFilters(){
  const tags=['All','Fresh','Dark','Niche','Designer','Value'];
  $('#filters').innerHTML=tags.map(t=>`<button class="filter-btn ${activeFilter===t?'active':''}" data-filter="${t}">${t}</button>`).join('');
  $$('.filter-btn').forEach(b=>b.onclick=()=>{activeFilter=b.dataset.filter;renderFilters();renderProducts()});
}

function renderProducts(){
  const q=$('#searchInput').value.toLowerCase().trim();
  const list=products.filter(p=>(activeFilter==='All'||p.tags.includes(activeFilter))&&(!q||`${p.brand} ${p.name} ${p.notes} ${p.family} ${p.occasion}`.toLowerCase().includes(q)));
  $('#productGrid').innerHTML=list.map(p=>`<article class="product-card">
    <button class="product-art ${p.tier}" onclick="showProduct(${p.id})" aria-label="View ${p.brand} ${p.name}">
      <span class="tier-badge">${tierNames[p.tier]}</span><div class="mini-bottle">${p.short}</div>
    </button>
    <div class="product-info">
      <div class="product-house">${p.brand} · ${p.conc}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-notes">${p.notes}</div>
      <div class="product-meta"><span>${p.season}</span><span>${p.occasion.split(' · ')[0]}</span></div>
      <div class="sizes">${[2,5,10].map(s=>p.prices[s]?`<button class="size-btn" onclick="addProduct(${p.id},${s})">${s} mL · ${money(p.prices[s])}</button>`:`<button class="size-btn disabled" disabled>${s} mL · —</button>`).join('')}</div>
      <div class="card-foot"><span class="from">from <strong>${money(Math.min(...Object.values(p.prices)))}</strong></span><button class="quick-view" onclick="showProduct(${p.id})">Details</button></div>
    </div>
  </article>`).join('')||'<p class="empty">No scents match that filter.</p>';
}

function addProduct(id,size){
  const p=products.find(x=>x.id===id); if(!p?.prices[size])return;
  cart.push({key:uid(),type:'decant',productId:id,size,name:`${p.brand} — ${p.name}`,meta:`${size} mL · ${tierNames[p.tier]}`,price:p.prices[size]});
  save(); toast(`${p.short} added to bag`); openCart();
}
window.addProduct=addProduct;

function showProduct(id){
  const p=products.find(x=>x.id===id);
  $('#productModalContent').innerHTML=`<div class="product-modal-inner">
    <div class="modal-art ${p.tier}"><div class="mini-bottle">${p.short}</div></div>
    <div class="modal-copy">
      <button class="modal-close" onclick="document.querySelector('#productModal').close()" aria-label="Close">×</button>
      <p class="eyebrow">${tierNames[p.tier]} · Bottle ${String(p.id).padStart(2,'0')}</p>
      <h2>${p.name}</h2><p><b>${p.brand}</b> · ${p.conc}</p>
      <div class="modal-tags"><span>${p.family}</span><span>${p.season}</span><span>${p.occasion}</span></div>
      <p class="modal-profile">${p.profile}</p>
      <dl class="note-list"><div><dt>Profile</dt><dd>${p.notes}</dd></div><div><dt>Decant</dt><dd>Glass atomizer · independently rebottled</dd></div></dl>
      <p class="fineprint">Signature Fragrance is independent and is not affiliated with the fragrance house.</p>
      <div class="sizes">${[2,5,10].map(s=>p.prices[s]?`<button class="size-btn" onclick="addProduct(${p.id},${s});document.querySelector('#productModal').close()">${s} mL · ${money(p.prices[s])}</button>`:'').join('')}</div>
    </div>
  </div>`;
  $('#productModal').showModal();
}
window.showProduct=showProduct;

function renderPlans(){
  $('#plans').innerHTML=plans.map(p=>`<article class="plan ${selectedPlan?.id===p.id?'active':''}" data-plan="${p.id}"><div class="plan-top"><h3>${p.name}</h3><div class="price">${money(p.price)} <small>/ mo</small></div></div><p>${p.desc}</p><ul>${p.bullets.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
  $$('.plan').forEach(el=>el.onclick=()=>selectPlan(el.dataset.plan));
}
function selectPlan(id){selectedPlan=plans.find(p=>p.id===id);selections=Array(selectedPlan.slots).fill('');renderPlans();renderBuilder()}
function renderBuilder(){
  const title=$('#builderTitle'), slots=$('#subscriptionSlots'),btn=$('#addSubscription');
  if(!selectedPlan){title.textContent='Select a plan above';slots.innerHTML='';$('#builderTotal').textContent='—';btn.disabled=true;return}
  title.textContent=`${selectedPlan.name} · ${selectedPlan.slots} × ${selectedPlan.size} mL`;
  slots.innerHTML=selections.map((val,i)=>`<div class="slot"><label>Scent ${i+1}</label><select data-slot="${i}"><option value="">Choose a fragrance</option>${products.filter(p=>p.prices[selectedPlan.size] && surchargeFor(p.tier,selectedPlan.size)!==null).map(p=>`<option value="${p.id}" ${String(p.id)===String(val)?'selected':''}>${p.brand} — ${p.short} ${surchargeFor(p.tier,selectedPlan.size)?`(+${money(surchargeFor(p.tier,selectedPlan.size))})`:''}</option>`).join('')}</select></div>`).join('');
  slots.querySelectorAll('select').forEach(sel=>sel.onchange=e=>{selections[+e.target.dataset.slot]=e.target.value;renderBuilder()});
  const upgrades=selections.filter(Boolean).reduce((sum,id)=>{const p=products.find(x=>x.id===+id);return sum+surchargeFor(p.tier,selectedPlan.size)},0);
  $('#builderTotal').textContent=`${money(selectedPlan.price+upgrades)} / mo`;
  btn.disabled=selections.some(x=>!x);
  btn.onclick=()=>{const names=selections.map(id=>products.find(x=>x.id===+id).short);cart.push({key:uid(),type:'subscription',name:`Monthly ${selectedPlan.name}`,meta:`${selectedPlan.slots} × ${selectedPlan.size} mL · ${names.join(' / ')}`,price:selectedPlan.price+upgrades});save();toast('Monthly box added');openCart()};
}

function renderFlight(){
  const eligible=products.filter(p=>['value','select'].includes(p.tier) && p.prices[2]);
  $('#flightSlots').innerHTML=flightSelections.map((val,i)=>`<div class="slot"><label>Flight ${i+1}</label><select data-flight-slot="${i}"><option value="">Choose a fragrance</option>${eligible.map(p=>`<option value="${p.id}" ${String(p.id)===String(val)?'selected':''}>${p.brand} — ${p.short}</option>`).join('')}</select></div>`).join('');
  $$('#flightSlots select').forEach(sel=>sel.onchange=e=>{flightSelections[+e.target.dataset.flightSlot]=e.target.value;renderFlight()});
  const filled=flightSelections.filter(Boolean);
  $('#addFlight').disabled=filled.length!==5 || new Set(filled).size!==5;
}
function openFlight(){flightSelections=Array(5).fill('');renderFlight();$('#flightModal').showModal()}
function addFlight(){
  const names=flightSelections.map(id=>products.find(p=>p.id===+id).short);
  cart.push({key:uid(),type:'flight',name:'The Toronto Flight',meta:`5 × 2 mL · ${names.join(' / ')}`,price:49});save();$('#flightModal').close();toast('Toronto Flight added');openCart();
}

function renderCart(){
  $('#cartCount').textContent=cart.length;
  $('#cartItems').innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-item"><div><span class="cart-type">${x.type==='subscription'?'Monthly':x.type==='flight'?'Flight':'Decant'}</span><strong>${x.name}</strong><small>${x.meta}</small></div><div><strong>${money(x.price)}</strong><button onclick="removeCart(${i})">remove</button></div></div>`).join(''):'<div class="empty">Your bag is empty.</div>';
  $('#cartSubtotal').textContent=money(cart.reduce((s,x)=>s+x.price,0));
  $('#checkoutBtn').disabled=!cart.length;
}
function removeCart(i){cart.splice(i,1);save()} window.removeCart=removeCart;
function openCart(){$('#cartDrawer').classList.add('open');$('#scrim').classList.add('show');$('#cartDrawer').setAttribute('aria-hidden','false')}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#scrim').classList.remove('show');$('#cartDrawer').setAttribute('aria-hidden','true')}

function setCheckoutStep(step){
  checkoutStep=step;
  $$('.checkout-step').forEach(s=>s.hidden=Number(s.dataset.step)!==step);
  const labels=['Contact','Fulfillment','Review','Payment'];
  $('#checkoutProgress').innerHTML=labels.map((label,i)=>`<div class="progress-node ${i+1===step?'active':''} ${i+1<step?'done':''}"><span>${i+1<step?'✓':i+1}</span><small>${label}</small></div>`).join('');
}
function validContact(){
  const first=$('#firstName').value.trim(), last=$('#lastName').value.trim(), email=$('#email').value.trim();
  if(!first||!last||!/^\S+@\S+\.\S+$/.test(email)){toast('Enter your name and a valid email');return false} return true;
}
function currentFulfillment(){return document.querySelector('input[name="fulfillment"]:checked')?.value||'pickup'}
function validFulfillment(){
  if(currentFulfillment()==='delivery'){
    if(!$('#address1').value.trim()||!$('#city').value.trim()||!$('#postalCode').value.trim()){toast('Complete the delivery address');return false}
  } return true;
}
function orderMath(){
  const subtotal=cart.reduce((s,x)=>s+x.price,0), delivery=currentFulfillment()==='delivery'?9.95:0, taxable=subtotal+delivery, tax=taxable*0.13, total=taxable+tax;
  return{subtotal,delivery,tax,total};
}
function renderReview(){
  const f=currentFulfillment(), m=orderMath();
  const address=f==='delivery'?`${$('#address1').value.trim()}${$('#address2').value.trim()?`, ${$('#address2').value.trim()}`:''}, ${$('#city').value.trim()}, ON ${$('#postalCode').value.trim()}`:'GTA pickup · final pickup details provided by the live store';
  $('#reviewContact').innerHTML=`<div><small>Contact</small><strong>${$('#firstName').value.trim()} ${$('#lastName').value.trim()}</strong><span>${$('#email').value.trim()}${$('#phone').value.trim()?` · ${$('#phone').value.trim()}`:''}</span></div><div><small>Fulfillment</small><strong>${f==='delivery'?'GTA local delivery':'GTA pickup'}</strong><span>${address}</span></div>`;
  $('#reviewItems').innerHTML=cart.map(x=>`<div class="review-line"><div><strong>${x.name}</strong><span>${x.meta}${x.type==='subscription'?' · recurring monthly':''}</span></div><b>${money(x.price)}</b></div>`).join('');
  $('#reviewTotals').innerHTML=`<div><span>Subtotal</span><b>${money(m.subtotal)}</b></div><div><span>${f==='delivery'?'Local delivery estimate':'Pickup'}</span><b>${money(m.delivery)}</b></div><div><span>Estimated Ontario HST (13%)</span><b>${money(m.tax)}</b></div><div class="total"><span>Prototype total</span><b>${money(m.total)}</b></div><small>Shopify will calculate the authoritative tax and fulfillment amounts at launch.</small>`;
}
function orderSummary(){
  const m=orderMath(), f=currentFulfillment();
  return `SIGNATURE FRAGRANCE — prototype order\nCustomer: ${$('#firstName').value.trim()} ${$('#lastName').value.trim()}\nEmail: ${$('#email').value.trim()}\nFulfillment: ${f}\n\n${cart.map(x=>`- ${x.name} | ${x.meta} | ${money(x.price)}`).join('\n')}\n\nSubtotal: ${money(m.subtotal)}\nDelivery: ${money(m.delivery)}\nEstimated HST: ${money(m.tax)}\nPrototype total: ${money(m.total)}\n\nNo payment was collected.`;
}
function openCheckout(){if(!cart.length)return;closeCart();setCheckoutStep(1);$('#checkoutModal').showModal()}

function showPolicy(key){const p=policies[key];if(!p)return;$('#policyContent').innerHTML=`<p class="eyebrow">SIGNATURE FRAGRANCE</p><h2>${p.title}</h2>${p.body}<p class="fineprint">Prototype copy only. Final production policy language will be reviewed before launch.</p>`;$('#policyModal').showModal()}

$('#openCart').onclick=openCart;
$('#closeCart').onclick=closeCart;
$('#scrim').onclick=closeCart;
$('#clearCart').onclick=()=>{cart=[];save();toast('Bag cleared')};
$('#searchInput').oninput=renderProducts;
$('#checkoutBtn').onclick=openCheckout;
$('#flightBtn').onclick=openFlight;
$('#closeFlight').onclick=()=>$('#flightModal').close();
$('#addFlight').onclick=addFlight;
$('#closeCheckout').onclick=()=>$('#checkoutModal').close();
$('#toFulfillment').onclick=()=>{if(validContact())setCheckoutStep(2)};
$$('input[name="fulfillment"]').forEach(r=>r.onchange=()=>{$('#deliveryFields').hidden=currentFulfillment()!=='delivery'});
$('#toReview').onclick=()=>{if(validFulfillment()){renderReview();setCheckoutStep(3)}};
$$('[data-back]').forEach(b=>b.onclick=()=>setCheckoutStep(Number(b.dataset.back)));
$('#toPaymentStop').onclick=()=>{const m=orderMath();$('#paymentSummary').innerHTML=`<span>Prototype order total</span><strong>${money(m.total)}</strong><small>No charge has been made.</small>`;setCheckoutStep(4)};
$('#copyOrderBtn').onclick=async()=>{try{await navigator.clipboard.writeText(orderSummary());toast('Prototype order copied');$('#copyOrderBtn').textContent='Copied';setTimeout(()=>$('#copyOrderBtn').textContent='Copy prototype order summary',1500)}catch{toast('Copy unavailable in this browser')}};
$('#restartCheckout').onclick=()=>{$('#checkoutModal').close();window.scrollTo({top:0,behavior:'smooth'})};
$$('[data-policy]').forEach(b=>b.onclick=()=>showPolicy(b.dataset.policy));
$('#closePolicy').onclick=()=>$('#policyModal').close();

renderFilters();renderProducts();renderPlans();renderBuilder();renderCart();renderFlight();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}
