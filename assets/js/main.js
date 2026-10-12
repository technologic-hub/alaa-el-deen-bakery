/* ===== إعدادات المحتوى: الحقل الفارغ لا يظهر ===== */
const CONFIG={phone:"03 754 841",phoneIntl:"+9613754841",whatsapp:"9613754841",address:"حارة حريك – شارع واكد – خلف محمصة الحلباوي",mapsUrl:"",hours:"",instagram:"",facebook:""};
document.documentElement.classList.add('js');
const wa=CONFIG.whatsapp?`https://wa.me/${CONFIG.whatsapp}`:"",tel=CONFIG.phoneIntl?`tel:${CONFIG.phoneIntl}`:"#contact";
document.querySelectorAll('.js-wa').forEach(a=>{if(wa){a.href=wa;a.target="_blank";a.rel="noopener"}});
["heroNum","bigNum"].forEach(i=>{const e=document.getElementById(i);e.href=tel;e.textContent=CONFIG.phone});
["callBtn","callBtn2"].forEach(i=>document.getElementById(i).href=tel);
const inf=[];
if(CONFIG.address)inf.push(['العنوان',CONFIG.address+(CONFIG.mapsUrl?` · <a href="${CONFIG.mapsUrl}" target="_blank" rel="noopener">الاتجاهات</a>`:'')]);
if(CONFIG.hours)inf.push(['ساعات العمل',CONFIG.hours]);
if(CONFIG.instagram)inf.push(['إنستغرام',`<a href="${CONFIG.instagram}" target="_blank" rel="noopener">تابعونا</a>`]);
if(CONFIG.facebook)inf.push(['فيسبوك',`<a href="${CONFIG.facebook}" target="_blank" rel="noopener">تابعونا</a>`]);
document.getElementById('info').innerHTML=inf.map(([k,v])=>`<div><b>${k}</b>${v}</div>`).join('');
const nav=document.getElementById('nav'),mb=document.getElementById('menu');
mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');mb.setAttribute('aria-expanded','false')});
const lb=document.getElementById('lb'),li=document.getElementById('lbImg');
document.querySelectorAll('.open').forEach(b=>b.onclick=()=>{li.src=b.dataset.src;li.alt=b.dataset.alt;lb.showModal()});
lb.querySelector('.x').onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

/* ===== بيانات الأصناف: n الاسم، p الأسعار بالترتيب (رقم بالليرة اللبنانية: 70000 = 70,000 ل.ل.، أو نص جاهز)، cols عناوين الأعمدة، note توضيح، hidden:true يخفي الصنف عن الزوار حتى يُؤكَّد اسمه ===== */
const PRODUCTS=[
{cat:"المناقيش",note:"الأسعار بالليرة اللبنانية — عادي ومشروحة",cols:["عادي","مشروحة"],items:[{n:"زعتر",p:[70000,100000]},{n:"جبنة",p:[200000,270000]},{n:"جبنة مع مرتديلا",p:[250000,300000]},{n:"لحمة بعجين",p:[200000,270000]},{n:"كشك",p:[150000,200000]},{n:"كوكتيل",p:[150000,200000]},{n:"بندورة وبصل",p:[140000,200000]},{n:"بندورة وبصل مع جبنة",p:[200000,270000]},{n:"بندورة وبصل مع موزاريلا",p:[200000,270000]},{n:"سجق",p:[200000,250000]},{n:"سجق مع جبنة",p:[250000,300000]},{n:"كفتة",p:[240000,300000]}]},
{cat:"المعجنات",note:"الدزينة = 12 قطعة. سعر كيلو لحم بعجين 25 دولاراً أميركياً وليس بالليرة اللبنانية.",items:[{n:"دزينة بيتزا",p:[400000]},{n:"دزينة سبانخ",p:[250000]},{n:"دزينة زعتر",p:[250000]},
/* بانتظار تأكيد الاسمين (سفحة بعلبكية، سمبوسك): */{n:"دزينة سفحة بعلبكية",hidden:true,p:[400000]},{n:"دزينة سمبوسك",hidden:true,p:[400000]},{n:"سفيحة بعلبكية",hidden:true,p:[]},{n:"سمبوسك",hidden:true,p:[]},
{n:"دزينة لحم بعجين",p:[600000]},{n:"كيلو لحم بعجين",p:["25 دولاراً أميركياً"]}]},
{cat:"البيتزا",items:[{n:"بيتزا",p:[400000]},{n:"بيتزا مع مرتديلا",p:[450000]}]},
{cat:"المشروبات",items:[{n:"المشروبات الغازية",p:[100000]},{n:"لبن",p:[100000]}]}];
const pv=v=>typeof v==="number"?`<bdi dir="ltr">${v.toLocaleString("en-US")}</bdi> <small>ل.ل.</small>`:v;
const blk=c=>`<h3>${c.cat}</h3>${c.note?`<p class="cn">${c.note}</p>`:''}<ul class="${c.cols?'two':''}">${c.cols?`<li class="hd"><span></span>${c.cols.map(x=>`<b>${x}</b>`).join('')}</li>`:''}${c.items.filter(i=>!i.hidden).map(i=>`<li><span>${i.n}</span>${i.p.map(v=>`<b class="pr">${pv(v)}</b>`).join('')}</li>`).join('')}</ul>`;
document.getElementById('c1').innerHTML=blk(PRODUCTS[0]);
document.getElementById('c2').innerHTML=PRODUCTS.slice(1).map((c,k)=>`<div${k?' style="margin-top:2rem"':''}>${blk(c)}</div>`).join('');
const trk=document.getElementById('trk'),sl=[...trk.children],dots=document.getElementById('dots');let cur=0;
const go=i=>{cur=(i+sl.length)%sl.length;sl[cur].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})};
sl.forEach((s,i)=>{const b=document.createElement('button');b.className='d'+(i?'':' on');b.setAttribute('aria-label','الصورة '+(i+1));b.onclick=()=>go(i);dots.append(b)});
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cur=sl.indexOf(e.target);[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===cur))}}),{root:trk,threshold:.6});sl.forEach(s=>io2.observe(s));
document.querySelector('.nx').onclick=()=>go(cur+1);document.querySelector('.pv').onclick=()=>go(cur-1);
trk.onkeydown=e=>{if(e.key==='ArrowLeft')go(cur+1);if(e.key==='ArrowRight')go(cur-1)};
