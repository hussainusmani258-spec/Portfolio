/* ====== PINNED PROJECTS: yahan edit karein ======
   Har project ek {...} hai. name = GitHub repo ka exact naam (link khud ban jata hai).
   Naya project add/delete karne ke liye pura {...}, wali line copy/delete karein. */
const PROJECTS=[
  {icon:"youtube", lang:"HTML", name:"Youtube-website",
   desc:"A responsive YouTube Home Page clone built using semantic HTML5 and CSS3 (Flexbox & Grid).",
   tags:["HTML5", "CSS3", "Flexbox", "Grid"]},
  {icon:"building", lang:"CSS", name:"Buildream-website-template",
   desc:"A fully responsive, clean and modern single-page template for construction companies, architectural firms and building contractors.",
   tags:["HTML5", "CSS3"]},
  {icon:"facebook", lang:"CSS", name:"Facebook-login-page",
   desc:"A clean and modern Sign In / Sign Up Facebook page layout built using HTML5, CSS Flexbox and Font Awesome icons.",
   tags:["HTML5", "Flexbox", "Font Awesome"]},
  {icon:"login", lang:"CSS", name:"signin-login-page",
   desc:"A clean and modern Sign In / Sign Up split-screen layout built using HTML5, CSS Flexbox and Font Awesome icons.",
   tags:["HTML5", "Flexbox", "Template"]},
  {icon:"food", lang:"HTML", name:"food-website",
   desc:"A clean, responsive food website built with HTML5 and CSS3, styled using custom form components.",
   tags:["HTML5", "CSS3", "Forms"]},
  {icon:"factory", lang:"CSS", name:"Industry-website",
   desc:"Industry & Engineering Services website, a modern, fully responsive web application with HTML5, CSS3, Flexbox and FontAwesome.",
   tags:["HTML5", "CSS3", "Flexbox"]},
];
/* ====== end ====== */
/* Icons: icon:"youtube" | "building" | "facebook" | "login" | "food" | "factory" | "code" */
const ICONS={youtube:`<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>`, building:`<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>`, facebook:`<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`, login:`<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/>`, food:`<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>`, factory:`<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/>`, code:`<path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>`};
const IC=k=>ICONS[k]?`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`:k;
const $=s=>document.querySelector(s),GH="https://github.com/hussainusmani258-spec/",D={
nav:["Home","About","Skills","Projects","Education","Contact"],
skills:[["</>","Core Skills",["HTML5","CSS3","JavaScript"]],["#","Frameworks &amp; Styling",["Tailwind CSS","Bootstrap"]],["*","Tools &amp; Workflow",["Visual Studio Code","Git","GitHub","Figma","CapCut","Clipchamp"]]],
projects:PROJECTS.map(p=>[p.icon,p.lang,p.name,p.desc,p.tags,p.name]),
edu:[["Now","Intermediate in Computer Science","Sindh Board, Karachi","Currently pursuing my Intermediate in Computer Science."],["Completed","Matriculation (SSC Part II)","ASF Public School, Karachi","Completed my Matriculation from ASF Public School, Karachi."]],
};
const H=(a,f)=>a.map(f).join("");
$("#links").innerHTML=H(D.nav,n=>`<a href="#${n.toLowerCase()}">${n}</a>`);
$("#fl").innerHTML=H(D.nav,n=>`<a href="#${n.toLowerCase()}">${n}</a>`);
$("#skg").innerHTML=H(D.skills,s=>`<div class="card"><div class="ico">${s[0]}</div><h3 style="margin:0 0 6px">${s[1]}</h3><div class="tg" style="margin-top:14px">${H(s[2],k=>`<span style="font-size:14px;padding:6px 14px;color:var(--tx)">${k}</span>`)}</div></div>`);
$("#prg").innerHTML=H(D.projects,p=>`<div class="card pr"><div class="top">${IC(p[0])}</div><div class="bd"><span class="lbl">${p[1]}</span><h3>${p[2]}</h3><p>${p[3]}</p><div class="tg">${H(p[4],t=>`<span>${t}</span>`)}</div><div class="row" style="margin:12px 0 0"><a class="btn p" target="_blank" rel="noopener" href="${GH}${p[5]}">View on GitHub</a></div></div></div>`);
const T=$("#prg"),N=D.projects.length;let hov=0;
const stp=()=>T.firstElementChild.offsetWidth+20,per=()=>Math.max(1,Math.round(T.clientWidth/stp()));
$("#dots").innerHTML=H(D.projects,(p,i)=>`<i data-i="${i}"></i>`);
function go(d){const m=T.scrollWidth-T.clientWidth;if(d>0&&T.scrollLeft>=m-4)T.scrollTo({left:0,behavior:"smooth"});else if(d<0&&T.scrollLeft<=4)T.scrollTo({left:m,behavior:"smooth"});else T.scrollBy({left:d*stp(),behavior:"smooth"})}
$("#nx").onclick=()=>go(1);$("#pv").onclick=()=>go(-1);
$("#dots").onclick=e=>{if(e.target.dataset.i!=null)T.scrollTo({left:e.target.dataset.i*stp(),behavior:"smooth"})};
T.addEventListener("scroll",()=>{const i=Math.round(T.scrollLeft/stp());document.querySelectorAll("#dots i").forEach((d,j)=>d.classList.toggle("on",j==i))},{passive:true});
$("#sl").onmouseenter=()=>hov=1;$("#sl").onmouseleave=()=>hov=0;$("#sl").addEventListener("touchstart",()=>hov=1,{passive:true});$("#sl").addEventListener("touchend",()=>setTimeout(()=>hov=0,3000));
setInterval(()=>{if(!hov)go(1)},3500);T.dispatchEvent(new Event("scroll"));
$("#tl").innerHTML=H(D.edu,e=>`<div class="card"><span class="tag">${e[0]}</span><h3>${e[1]}</h3><span class="org">${e[2]}</span><p>${e[3]}</p></div>`);
/* typing */
const R=["Frontend Web Developer","HTML5 &amp; CSS3 Specialist","UI/UX Responsive Design Enthusiast"];let ri=0,ci=0,del=0;
(function t(){const w=R[ri];ci+=del?-1:1;$("#ty").textContent=w.slice(0,ci);let d=del?40:90;
if(!del&&ci==w.length){del=1;d=1400}else if(del&&ci==0){del=0;ri=(ri+1)%R.length;d=300}setTimeout(t,d)})();
const EM="mmunirhussainusmani@gmail.com";
function cpy(b){const ok=()=>{const o=b.textContent;b.textContent="Copied!";setTimeout(()=>b.textContent=o,1600)};
const fb=()=>{const t=document.createElement("textarea");t.value=EM;document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(e){}t.remove();ok()};
try{navigator.clipboard.writeText(EM).then(ok,fb)}catch(e){fb()}}
$("#cp").onclick=e=>cpy(e.currentTarget);$("#ec").onclick=()=>cpy($("#cp"));
/* theme */
const rt=document.documentElement;function st(m){rt.dataset.theme=m;$("#th").textContent=m=="dark"?"☀️":"🌙";try{localStorage.setItem("th",m)}catch(e){}}
let sv=null;try{sv=localStorage.getItem("th")}catch(e){}
st(sv||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
$("#th").onclick=()=>st(rt.dataset.theme=="dark"?"light":"dark");
$("#mb").onclick=()=>$("#links").classList.toggle("o");$("#links").onclick=()=>$("#links").classList.remove("o");
/* scroll */
const secs=D.nav.map(n=>$("#"+n.toLowerCase()));
addEventListener("scroll",()=>{const y=scrollY,h=document.body.scrollHeight-innerHeight;$("#bar").style.width=(y/h*100)+"%";$("#up").classList.toggle("s",y>500);
let cur=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<150)cur=i});
document.querySelectorAll("#links a").forEach((a,i)=>a.classList.toggle("on",i==cur))},{passive:true});
$("#up").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-w]").forEach(i=>i.style.width=i.dataset.w+"%")}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
dispatchEvent(new Event("scroll"));