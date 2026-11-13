import{j as a}from"./ui-vendor-CmYvOr62.js";import{r as f,L as g}from"./react-vendor-BUQoG55y.js";const u=`
  .wa-ops{
    --wa-navy:#0f172a; --wa-slate:#334155; --wa-muted:#64748b; --wa-line:#e2e8f0;
    --wa-soft:#f8fafc; --wa-blue:#2563eb; --wa-blue-200:#bfdbfe; --wa-blue-50:#eff6ff;
    --wa-violet:#6142ff; --wa-violet-50:#f1eeff; --wa-mint:#ccfef0;
    --wa-grad:linear-gradient(135deg,#2563eb 0%,#6142ff 100%);
    font-family:"DM Sans",system-ui,sans-serif;color:var(--wa-navy);
    max-width:1240px;margin:0 auto;padding:80px 16px;box-sizing:border-box}
  .wa-ops *{box-sizing:border-box}

  .wa-ops__head{text-align:center;margin-bottom:48px}
  .wa-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:var(--wa-blue);
    background:var(--wa-blue-50);border:1px solid var(--wa-blue-200);padding:6px 14px;border-radius:999px;margin-bottom:18px}
  .wa-eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--wa-blue);animation:wa-blink 2s ease-in-out infinite}
  .wa-ops__head h2{font-family:"Space Grotesk","DM Sans",sans-serif;font-size:clamp(30px,4.4vw,52px);font-weight:600;
    letter-spacing:-.025em;line-height:1.08;margin:0 0 12px}
  .wa-ops__head h2 span{background:var(--wa-grad);-webkit-background-clip:text;background-clip:text;color:transparent}
  .wa-ops__head p{font-size:18px;color:var(--wa-muted);margin:0}

  .wa-ops__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
  .wa-card{position:relative;background:var(--wa-soft);border:1px solid var(--wa-line);border-radius:20px;padding:28px 24px 30px;
    display:flex;flex-direction:column;overflow:hidden;transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s,border-color .45s}
  .wa-card::before{content:"";position:absolute;inset:0 0 auto;height:3px;background:var(--wa-grad);transform:scaleX(0);
    transform-origin:left;transition:transform .6s cubic-bezier(.2,.8,.2,1)}
  .wa-card::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;pointer-events:none;
    background:linear-gradient(100deg,transparent,rgba(255,255,255,.65),transparent);transform:skewX(-18deg)}
  .wa-card:hover{transform:translateY(-8px);border-color:var(--wa-blue-200);
    box-shadow:0 24px 48px -18px rgba(15,23,42,.22),0 0 0 1px rgba(37,99,235,.06)}
  .wa-card:hover::before{transform:scaleX(1)}
  .wa-card:hover::after{animation:wa-shine 1s ease}
  .wa-card h3{font-family:"Space Grotesk","DM Sans",sans-serif;font-size:21px;font-weight:600;letter-spacing:-.01em;margin:0 0 20px}
  .wa-card>p{font-size:15px;line-height:1.6;color:var(--wa-slate);margin:auto 0 0}
  .wa-visual{position:relative;height:250px;margin-bottom:26px}

  .wa-js .wa-card{opacity:0;transform:translateY(36px)}
  .wa-js .wa-card.is-in{opacity:1;transform:none;transition:opacity .8s ease,transform .8s cubic-bezier(.2,.8,.2,1),box-shadow .45s,border-color .45s}
  .wa-js .wa-card.is-in:hover{transform:translateY(-8px)}

  .wa-net{height:auto;aspect-ratio:360/250}
  .wa-net>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
  .wa-net .wa-line{fill:none;stroke:url(#waLine);stroke-width:1.5;stroke-dasharray:4 6;animation:wa-flow 1.4s linear infinite}
  .wa-net .wa-packet{fill:var(--wa-blue);filter:drop-shadow(0 0 4px rgba(37,99,235,.8))}
  .wa-net .wa-packet.v{fill:var(--wa-violet);filter:drop-shadow(0 0 4px rgba(97,66,255,.8))}
  .wa-hub{position:absolute;left:50%;top:44%;width:66px;height:66px;margin:-33px 0 0 -33px;border-radius:18px;
    background:linear-gradient(145deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%);display:grid;place-items:center;
    box-shadow:0 14px 30px -8px rgba(37,99,235,.55),inset 0 1px 0 rgba(255,255,255,.15);animation:wa-breathe 3.2s ease-in-out infinite}
  .wa-hub svg{animation:wa-spin 9s linear infinite}
  .wa-hub::before,.wa-hub::after{content:"";position:absolute;inset:-8px;border-radius:24px;border:1.5px solid rgba(37,99,235,.45);
    animation:wa-ring 2.8s ease-out infinite}
  .wa-hub::after{border-color:rgba(97,66,255,.4);animation-delay:1.4s}
  .wa-node{position:absolute;transform:translate(-50%,-50%);display:flex;align-items:center;gap:7px;background:#fff;border:1px solid var(--wa-line);
    border-radius:10px;padding:7px 11px;font-size:12px;font-weight:500;color:var(--wa-navy);white-space:nowrap;
    box-shadow:0 6px 16px -6px rgba(15,23,42,.14);animation:wa-bob 4s ease-in-out infinite}
  .wa-node i{width:8px;height:8px;border-radius:3px;background:var(--c,var(--wa-blue))}
  .wa-node:nth-of-type(2){animation-delay:-.8s}.wa-node:nth-of-type(3){animation-delay:-1.6s}
  .wa-node:nth-of-type(4){animation-delay:-2.4s}.wa-node:nth-of-type(5){animation-delay:-3.2s}

  .wa-swap{display:flex;flex-direction:column;gap:8px;height:auto}
  .wa-row{background:#fff;border:1px solid var(--wa-line);border-radius:12px;padding:14px 16px 12px}
  .wa-row__top{display:flex;justify-content:space-between;align-items:flex-start}
  .wa-row span{display:block;font-size:14px;color:var(--wa-slate);margin-bottom:2px}
  .wa-row strong{font-family:"Space Grotesk",sans-serif;font-size:19px;font-weight:600;color:var(--wa-navy);font-variant-numeric:tabular-nums}
  .wa-row .wa-right{text-align:right}
  .wa-pill{font-style:normal;display:inline-block;font-size:13px;font-weight:600;padding:3px 9px;border-radius:999px;font-variant-numeric:tabular-nums}
  .wa-pill.down{background:var(--wa-blue-50);color:var(--wa-blue)}
  .wa-pill.up{background:var(--wa-violet-50);color:var(--wa-violet)}
  .wa-bar{height:5px;border-radius:5px;background:#eef2f7;margin-top:10px;overflow:hidden}
  .wa-bar b{display:block;height:100%;width:var(--w);border-radius:5px;background:var(--wa-grad);transform-origin:left;transition:transform 1.6s cubic-bezier(.2,.8,.2,1)}
  .wa-bar.slate b{background:linear-gradient(90deg,#94a3b8,#cbd5e1)}
  .wa-js .wa-card:not(.is-in) .wa-bar b{transform:scaleX(0)}
  .wa-swap__icon{position:absolute;left:50%;top:76px;width:40px;height:40px;margin-left:-20px;border-radius:50%;
    background:var(--wa-grad);display:grid;place-items:center;z-index:1;box-shadow:0 0 0 5px var(--wa-soft),0 8px 18px -4px rgba(97,66,255,.55)}
  .wa-swap__icon svg{animation:wa-flip 3.2s cubic-bezier(.65,0,.35,1) infinite}
  .wa-btn{position:relative;overflow:hidden;display:block;text-align:center;background:var(--wa-navy);color:#fff;text-decoration:none;
    font-size:15px;font-weight:500;padding:12px;border-radius:10px;transition:box-shadow .3s,transform .3s}
  .wa-btn::after{content:"";position:absolute;top:0;left:-50%;width:35%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.28),transparent);
    transform:skewX(-20deg);animation:wa-sweep 3.5s ease-in-out infinite}
  .wa-btn:hover{box-shadow:0 10px 24px -8px rgba(37,99,235,.7);transform:translateY(-1px)}
  .wa-swap small{font-size:11px;color:#94a3b8;text-align:center}

  .wa-globe svg{position:absolute;left:50%;top:50%;width:178px;height:178px;transform:translate(-42%,-50%);overflow:visible}
  .wa-globe .g{fill:none;stroke:var(--wa-blue);stroke-width:.9;opacity:.75}
  .wa-globe .orbit{fill:none;stroke:var(--wa-violet);stroke-width:1;stroke-dasharray:3 5;opacity:.55}
  .wa-globe .city{fill:var(--wa-blue)}
  .wa-globe .ping{fill:none;stroke:var(--wa-blue);stroke-width:1.5;transform-box:fill-box;transform-origin:center;animation:wa-ping 2.4s ease-out infinite}
  .wa-tag{position:absolute;display:flex;align-items:center;gap:7px;font-size:12.5px;font-weight:500;padding:9px 12px;border-radius:9px;
    white-space:nowrap;box-shadow:0 8px 18px -8px rgba(15,23,42,.2);animation:wa-float 5s ease-in-out infinite}
  .wa-tag i{width:7px;height:7px;border-radius:50%;background:currentColor;animation:wa-blink 1.8s ease-in-out infinite}
  .wa-tag--a{background:var(--wa-blue-50);color:var(--wa-blue);border:1px solid var(--wa-blue-200);right:2%;top:12%}
  .wa-tag--b{background:var(--wa-violet-50);color:var(--wa-violet);border:1px solid #d9d0ff;left:0;top:41%;animation-delay:-1.7s}
  .wa-tag--c{background:var(--wa-navy);color:#fff;right:6%;top:69%;animation-delay:-3.3s}
  .wa-tag--c i{background:#5eead4}

  @keyframes wa-flow{to{stroke-dashoffset:-20}}
  @keyframes wa-ring{from{transform:scale(1);opacity:1}to{transform:scale(1.55);opacity:0}}
  @keyframes wa-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  @keyframes wa-spin{to{transform:rotate(360deg)}}
  @keyframes wa-bob{0%,100%{margin-top:0}50%{margin-top:-5px}}
  @keyframes wa-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  @keyframes wa-blink{0%,100%{opacity:1}50%{opacity:.35}}
  @keyframes wa-ping{0%{transform:scale(.6);opacity:1}100%{transform:scale(2.6);opacity:0}}
  @keyframes wa-flip{0%,40%{transform:rotate(0)}55%,100%{transform:rotate(180deg)}}
  @keyframes wa-sweep{0%,60%{left:-50%}100%{left:130%}}
  @keyframes wa-shine{from{left:-60%}to{left:130%}}

  @media (max-width:900px){.wa-ops__grid{grid-template-columns:1fr;max-width:460px;margin:0 auto}}
  @media (prefers-reduced-motion:reduce){
    .wa-ops *,.wa-ops *::before,.wa-ops *::after{animation:none!important;transition:none!important}
    .wa-js .wa-card{opacity:1;transform:none}
  }
`,l=t=>t,j=[{name:"ServiceNow",left:"17%",top:"18%",color:"#2563eb"},{name:"Jira",left:"83%",top:"18%",color:"#6142ff"},{name:"Salesforce",left:"17%",top:"74%",color:"#0ea5e9"},{name:"Slack",left:"83%",top:"74%",color:"#0f172a"},{name:"Outlook",left:"50%",top:"90%",color:"#14b8a6"}],k=()=>{const t=f.useRef(null);return f.useEffect(()=>{const e=t.current;if(!e||!("IntersectionObserver"in window))return;e.classList.add("wa-js");const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=[],m=r=>{if(h)return;const i=Number(r.dataset.count),s=1600;let o=null;const p=w=>{o===null&&(o=w);const x=Math.min((w-o)/s,1),b=1-Math.pow(1-x,3);r.textContent=Math.round(i*b).toLocaleString("en-GB"),x<1&&requestAnimationFrame(p)};requestAnimationFrame(p)},c=Array.from(e.querySelectorAll(".wa-card")),n=new IntersectionObserver(r=>{r.forEach(i=>{if(!i.isIntersecting)return;const s=i.target;d.push(window.setTimeout(()=>{s.classList.add("is-in"),s.querySelectorAll("[data-count]").forEach(m)},c.indexOf(s)*140)),n.unobserve(s)})},{threshold:.25});return c.forEach(r=>n.observe(r)),()=>{n.disconnect(),d.forEach(r=>window.clearTimeout(r))}},[]),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:u}),a.jsxs("section",{className:"wa-ops",id:"operations",ref:t,children:[a.jsxs("div",{className:"wa-ops__head",children:[a.jsxs("div",{className:"wa-eyebrow",children:[a.jsx("i",{}),"Operational efficiency"]}),a.jsxs("h2",{children:["Build Once, ",a.jsx("span",{children:"Run Forever"})]}),a.jsx("p",{children:"Let AI carry the operational load"})]}),a.jsxs("div",{className:"wa-ops__grid",children:[a.jsxs("article",{className:"wa-card",children:[a.jsx("h3",{children:"Connected Intelligence"}),a.jsxs("div",{className:"wa-visual wa-net",children:[a.jsxs("svg",{viewBox:"0 0 360 250","aria-hidden":"true",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"waLine",x1:"0",x2:"1",children:[a.jsx("stop",{offset:"0",stopColor:"#2563eb"}),a.jsx("stop",{offset:"1",stopColor:"#6142ff"})]})}),a.jsx("path",{id:"waP1",className:"wa-line",d:"M62 45 Q110 50 180 110"}),a.jsx("path",{id:"waP2",className:"wa-line",d:"M298 45 Q250 50 180 110"}),a.jsx("path",{id:"waP3",className:"wa-line",d:"M62 185 Q90 130 180 110"}),a.jsx("path",{id:"waP4",className:"wa-line",d:"M298 185 Q270 130 180 110"}),a.jsx("path",{id:"waP5",className:"wa-line",d:"M180 225 Q190 170 180 110"}),a.jsx("circle",{r:"3.2",className:"wa-packet",children:a.jsx("animateMotion",{dur:"2.2s",repeatCount:"indefinite",children:a.jsx("mpath",{href:"#waP1"})})}),a.jsx("circle",{r:"3.2",className:"wa-packet v",children:a.jsx("animateMotion",{dur:"2.6s",begin:"-.7s",repeatCount:"indefinite",children:a.jsx("mpath",{href:"#waP2"})})}),a.jsx("circle",{r:"3.2",className:"wa-packet v",children:a.jsx("animateMotion",{dur:"2.4s",begin:"-1.3s",repeatCount:"indefinite",children:a.jsx("mpath",{href:"#waP3"})})}),a.jsx("circle",{r:"3.2",className:"wa-packet",children:a.jsx("animateMotion",{dur:"2.8s",begin:"-.4s",repeatCount:"indefinite",children:a.jsx("mpath",{href:"#waP4"})})}),a.jsx("circle",{r:"3.2",className:"wa-packet",children:a.jsx("animateMotion",{dur:"2s",begin:"-1s",repeatCount:"indefinite",children:a.jsx("mpath",{href:"#waP5"})})})]}),a.jsx("div",{className:"wa-hub",role:"img","aria-label":"AI",children:a.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"#fff","aria-hidden":"true",children:[a.jsx("path",{d:"M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z"}),a.jsx("path",{d:"M19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z",opacity:".75"})]})}),j.map(e=>a.jsxs("span",{className:"wa-node",style:{left:e.left,top:e.top},children:[a.jsx("i",{style:l({"--c":e.color})}),e.name]},e.name))]}),a.jsx("p",{children:"One AI layer that plugs into the tools your teams already use, so work moves between systems without anyone copying it across."})]}),a.jsxs("article",{className:"wa-card",children:[a.jsx("h3",{children:"Manual → Automated"}),a.jsxs("div",{className:"wa-visual wa-swap",children:[a.jsxs("div",{className:"wa-row",children:[a.jsxs("div",{className:"wa-row__top",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Manual tasks"}),a.jsxs("strong",{children:[a.jsx("b",{"data-count":"1240",children:"1,240"})," / month"]})]}),a.jsxs("div",{className:"wa-right",children:[a.jsx("span",{children:"Reduced"}),a.jsxs("em",{className:"wa-pill down",children:["↓ ",a.jsx("b",{"data-count":"82",children:"82"}),"%"]})]})]}),a.jsx("div",{className:"wa-bar slate",children:a.jsx("b",{style:l({"--w":"18%"})})})]}),a.jsx("div",{className:"wa-swap__icon","aria-hidden":"true",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M8 4v16M4 16l4 4 4-4M16 20V4M12 8l4-4 4 4"})})}),a.jsxs("div",{className:"wa-row",children:[a.jsxs("div",{className:"wa-row__top",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Hours saved"}),a.jsxs("strong",{children:[a.jsx("b",{"data-count":"310",children:"310"})," hrs / month"]})]}),a.jsxs("div",{className:"wa-right",children:[a.jsx("span",{children:"Increase"}),a.jsxs("em",{className:"wa-pill up",children:["↑ ",a.jsx("b",{"data-count":"38",children:"38"}),"%"]})]})]}),a.jsx("div",{className:"wa-bar",children:a.jsx("b",{style:l({"--w":"82%"})})})]}),a.jsx(g,{className:"wa-btn",to:"/contact",children:"Automate a workflow"}),a.jsx("small",{children:"Example results"})]}),a.jsx("p",{children:"Turn repetitive admin like triage, routing, updates and reporting into workflows that run on their own."})]}),a.jsxs("article",{className:"wa-card",children:[a.jsx("h3",{children:"Always-On, Everywhere"}),a.jsxs("div",{className:"wa-visual wa-globe",children:[a.jsxs("svg",{viewBox:"0 0 200 200","aria-hidden":"true",children:[a.jsx("defs",{children:a.jsxs("radialGradient",{id:"waGlobe",cx:"35%",cy:"30%",r:"75%",children:[a.jsx("stop",{offset:"0",stopColor:"#eff6ff"}),a.jsx("stop",{offset:"1",stopColor:"#dbe4ff",stopOpacity:".35"})]})}),a.jsx("circle",{cx:"100",cy:"100",r:"96",fill:"url(#waGlobe)",stroke:"#2563eb",strokeWidth:"1.2",opacity:".9"}),a.jsx("ellipse",{className:"g",cx:"100",cy:"100",rx:"96",ry:"96",children:a.jsx("animate",{attributeName:"rx",values:"96;0;96",dur:"8s",repeatCount:"indefinite"})}),a.jsx("ellipse",{className:"g",cx:"100",cy:"100",rx:"64",ry:"96",children:a.jsx("animate",{attributeName:"rx",values:"64;0;64;96;64",keyTimes:"0;.25;.5;.75;1",dur:"8s",begin:"-1.33s",repeatCount:"indefinite"})}),a.jsx("ellipse",{className:"g",cx:"100",cy:"100",rx:"32",ry:"96",children:a.jsx("animate",{attributeName:"rx",values:"96;0;96",dur:"8s",begin:"-2.67s",repeatCount:"indefinite"})}),a.jsx("ellipse",{className:"g",cx:"100",cy:"100",rx:"0",ry:"96",children:a.jsx("animate",{attributeName:"rx",values:"96;0;96",dur:"8s",begin:"-5.33s",repeatCount:"indefinite"})}),a.jsx("ellipse",{className:"g",cx:"100",cy:"100",rx:"96",ry:"18"}),a.jsx("ellipse",{className:"g",cx:"100",cy:"58",rx:"80",ry:"12"}),a.jsx("ellipse",{className:"g",cx:"100",cy:"142",rx:"80",ry:"12"}),a.jsxs("g",{transform:"rotate(-18 100 100)",children:[a.jsx("ellipse",{className:"orbit",cx:"100",cy:"100",rx:"122",ry:"38"}),a.jsx("circle",{r:"4",fill:"#6142ff",style:{filter:"drop-shadow(0 0 4px rgba(97,66,255,.8))"},children:a.jsx("animateMotion",{dur:"7s",repeatCount:"indefinite",path:"M-22 100 A122 38 0 1 0 222 100 A122 38 0 1 0 -22 100"})})]}),a.jsxs("g",{transform:"translate(92 62)",children:[a.jsx("circle",{className:"ping",r:"4"}),a.jsx("circle",{className:"city",r:"2.6"})]}),a.jsxs("g",{transform:"translate(52 88)",children:[a.jsx("circle",{className:"ping",r:"4",style:{animationDelay:"-.8s"}}),a.jsx("circle",{className:"city",r:"2.6"})]}),a.jsxs("g",{transform:"translate(150 118)",children:[a.jsx("circle",{className:"ping",r:"4",style:{animationDelay:"-1.6s"}}),a.jsx("circle",{className:"city",r:"2.6"})]})]}),a.jsxs("span",{className:"wa-tag wa-tag--a",children:[a.jsx("i",{}),"24/7 AI agents"]}),a.jsxs("span",{className:"wa-tag wa-tag--b",children:[a.jsx("i",{}),"Multi-language support"]}),a.jsxs("span",{className:"wa-tag wa-tag--c",children:[a.jsx("i",{}),"Follow-the-sun ops"]})]}),a.jsx("p",{children:"AI agents that work across time zones and languages, so operations keep running while your team is offline."})]})]})]})]})};export{k as default};
