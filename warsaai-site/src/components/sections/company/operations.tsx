import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";

const css = `
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
  .wa-card__head{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:20px}
  .wa-card__head h3{margin:0}
  .wa-sample{font-size:12px;font-weight:600;line-height:1;color:var(--wa-slate);background:#fff;border:1px solid var(--wa-line);
    padding:6px 10px;border-radius:999px;white-space:nowrap}
  .wa-swap .wa-note{font-size:12px;line-height:1.5;color:var(--wa-slate);margin:4px 2px}

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
`;

/** Inline style carrying CSS custom properties (and optional position). */
const vars = (v: Record<string, string>) => v as CSSProperties;

const nodes = [
  { name: "ServiceNow", left: "17%", top: "18%", color: "#2563eb" },
  { name: "Jira", left: "83%", top: "18%", color: "#6142ff" },
  { name: "Salesforce", left: "17%", top: "74%", color: "#0ea5e9" },
  { name: "Slack", left: "83%", top: "74%", color: "#0f172a" },
  { name: "Outlook", left: "50%", top: "90%", color: "#14b8a6" },
];

const Operations = () => {
  const rootRef = useRef<HTMLElement>(null);

  // Scroll reveal and count-up, started once each card is in view.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    root.classList.add("wa-js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];

    const countUp = (el: HTMLElement) => {
      if (reduce) return;
      const end = Number(el.dataset.count);
      const duration = 1600;
      let start: number | null = null;
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased).toLocaleString("en-GB");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const cards = Array.from(root.querySelectorAll<HTMLElement>(".wa-card"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          timers.push(
            window.setTimeout(() => {
              card.classList.add("is-in");
              card.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
            }, cards.indexOf(card) * 140),
          );
          io.unobserve(card);
        });
      },
      { threshold: 0.25 },
    );
    cards.forEach((card) => io.observe(card));

    return () => {
      io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      <section className="wa-ops" id="operations" ref={rootRef}>
        <div className="wa-ops__head">
          <div className="wa-eyebrow"><i />Operational efficiency</div>
          <h2>Build Once, <span>Run Forever</span></h2>
          <p>Let AI carry the operational load</p>
        </div>

        <div className="wa-ops__grid">
          {/* Card 1 */}
          <article className="wa-card">
            <h3>Connected Intelligence</h3>
            <div className="wa-visual wa-net">
              <svg viewBox="0 0 360 250" aria-hidden="true">
                <defs>
                  <linearGradient id="waLine" x1="0" x2="1">
                    <stop offset="0" stopColor="#2563eb" />
                    <stop offset="1" stopColor="#6142ff" />
                  </linearGradient>
                </defs>
                <path id="waP1" className="wa-line" d="M62 45 Q110 50 180 110" />
                <path id="waP2" className="wa-line" d="M298 45 Q250 50 180 110" />
                <path id="waP3" className="wa-line" d="M62 185 Q90 130 180 110" />
                <path id="waP4" className="wa-line" d="M298 185 Q270 130 180 110" />
                <path id="waP5" className="wa-line" d="M180 225 Q190 170 180 110" />
                <circle r="3.2" className="wa-packet"><animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#waP1" /></animateMotion></circle>
                <circle r="3.2" className="wa-packet v"><animateMotion dur="2.6s" begin="-.7s" repeatCount="indefinite"><mpath href="#waP2" /></animateMotion></circle>
                <circle r="3.2" className="wa-packet v"><animateMotion dur="2.4s" begin="-1.3s" repeatCount="indefinite"><mpath href="#waP3" /></animateMotion></circle>
                <circle r="3.2" className="wa-packet"><animateMotion dur="2.8s" begin="-.4s" repeatCount="indefinite"><mpath href="#waP4" /></animateMotion></circle>
                <circle r="3.2" className="wa-packet"><animateMotion dur="2s" begin="-1s" repeatCount="indefinite"><mpath href="#waP5" /></animateMotion></circle>
              </svg>
              <div className="wa-hub" role="img" aria-label="AI">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
                  <path d="M19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z" opacity=".75" />
                </svg>
              </div>
              {nodes.map((node) => (
                <span key={node.name} className="wa-node" style={{ left: node.left, top: node.top }}>
                  <i style={vars({ "--c": node.color })} />
                  {node.name}
                </span>
              ))}
            </div>
            <p>One AI layer that plugs into the tools your teams already use, so work moves between systems without anyone copying it across.</p>
          </article>

          {/* Card 2 */}
          <article className="wa-card">
            <div className="wa-card__head">
              <h3>Manual → Automated</h3>
              <span className="wa-sample">Sample data</span>
            </div>
            <div className="wa-visual wa-swap">
              <div className="wa-row">
                <div className="wa-row__top">
                  <div><span>Manual tasks</span><strong><b data-count="1240">1,240</b> / month*</strong></div>
                  <div className="wa-right"><span>Reduced</span><em className="wa-pill down">↓ <b data-count="82">82</b>%</em></div>
                </div>
                <div className="wa-bar slate"><b style={vars({ "--w": "18%" })} /></div>
              </div>
              <div className="wa-swap__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4v16M4 16l4 4 4-4M16 20V4M12 8l4-4 4 4" />
                </svg>
              </div>
              <div className="wa-row">
                <div className="wa-row__top">
                  <div><span>Hours saved</span><strong><b data-count="310">310</b> hrs / month*</strong></div>
                  <div className="wa-right"><span>Time freed</span><em className="wa-pill up">~25%</em></div>
                </div>
                <div className="wa-bar"><b style={vars({ "--w": "82%" })} /></div>
              </div>
              <p className="wa-note">
                *Illustrative figures only, not results from a real client. Your savings will depend on your processes, volumes and systems.
              </p>
              <Link className="wa-btn" to="/contact">Automate a workflow</Link>
            </div>
            <p>Turn repetitive admin like triage, routing, updates and reporting into workflows that run on their own.</p>
          </article>

          {/* Card 3 */}
          <article className="wa-card">
            <h3>Always-On, Everywhere</h3>
            <div className="wa-visual wa-globe">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <radialGradient id="waGlobe" cx="35%" cy="30%" r="75%">
                    <stop offset="0" stopColor="#eff6ff" />
                    <stop offset="1" stopColor="#dbe4ff" stopOpacity=".35" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="96" fill="url(#waGlobe)" stroke="#2563eb" strokeWidth="1.2" opacity=".9" />
                {/* rotating meridians */}
                <ellipse className="g" cx="100" cy="100" rx="96" ry="96"><animate attributeName="rx" values="96;0;96" dur="8s" repeatCount="indefinite" /></ellipse>
                <ellipse className="g" cx="100" cy="100" rx="64" ry="96"><animate attributeName="rx" values="64;0;64;96;64" keyTimes="0;.25;.5;.75;1" dur="8s" begin="-1.33s" repeatCount="indefinite" /></ellipse>
                <ellipse className="g" cx="100" cy="100" rx="32" ry="96"><animate attributeName="rx" values="96;0;96" dur="8s" begin="-2.67s" repeatCount="indefinite" /></ellipse>
                <ellipse className="g" cx="100" cy="100" rx="0" ry="96"><animate attributeName="rx" values="96;0;96" dur="8s" begin="-5.33s" repeatCount="indefinite" /></ellipse>
                {/* latitudes */}
                <ellipse className="g" cx="100" cy="100" rx="96" ry="18" />
                <ellipse className="g" cx="100" cy="58" rx="80" ry="12" />
                <ellipse className="g" cx="100" cy="142" rx="80" ry="12" />
                {/* orbit */}
                <g transform="rotate(-18 100 100)">
                  <ellipse className="orbit" cx="100" cy="100" rx="122" ry="38" />
                  <circle r="4" fill="#6142ff" style={{ filter: "drop-shadow(0 0 4px rgba(97,66,255,.8))" }}>
                    <animateMotion dur="7s" repeatCount="indefinite" path="M-22 100 A122 38 0 1 0 222 100 A122 38 0 1 0 -22 100" />
                  </circle>
                </g>
                {/* live locations */}
                <g transform="translate(92 62)"><circle className="ping" r="4" /><circle className="city" r="2.6" /></g>
                <g transform="translate(52 88)"><circle className="ping" r="4" style={{ animationDelay: "-.8s" }} /><circle className="city" r="2.6" /></g>
                <g transform="translate(150 118)"><circle className="ping" r="4" style={{ animationDelay: "-1.6s" }} /><circle className="city" r="2.6" /></g>
              </svg>
              <span className="wa-tag wa-tag--a"><i />24/7 AI agents</span>
              <span className="wa-tag wa-tag--b"><i />Multi-language support</span>
              <span className="wa-tag wa-tag--c"><i />Follow-the-sun ops</span>
            </div>
            <p>AI agents that work across time zones and languages, so operations keep running while your team is offline.</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Operations;
