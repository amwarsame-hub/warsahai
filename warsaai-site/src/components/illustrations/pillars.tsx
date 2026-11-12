import { cn } from "@/lib/utils";

/**
 * The four "core pillar" diagrams from the original site, redrawn with the
 * design tokens so they follow the theme.
 */
type ArtProps = { className?: string };

const base = (className?: string) => ({
  viewBox: "0 0 120 100",
  fill: "none",
  "aria-hidden": true,
  className: cn("h-full w-auto", className),
});

const dashed = { strokeWidth: 1.5, strokeDasharray: "4 2", opacity: 0.7 };
const label = { fontSize: 7, fontWeight: 700, textAnchor: "middle" as const, fontFamily: "inherit" };

/** Two meshed gears: build once, run forever. */
export const BuildOnceArt = ({ className }: ArtProps) => (
  <svg {...base(className)}>
    <circle cx="45" cy="50" r="22" className="stroke-primary" strokeWidth="3" opacity="0.2" />
    <circle cx="45" cy="50" r="14" className="stroke-primary fill-primary/10" strokeWidth="2" />
    <circle cx="45" cy="50" r="5" className="fill-primary" opacity="0.8" />
    <g className="fill-primary" opacity="0.6">
      <rect x="41" y="22" width="8" height="10" rx="3" />
      <rect x="41" y="68" width="8" height="10" rx="3" />
      <rect x="22" y="46" width="10" height="8" rx="3" />
      <rect x="68" y="46" width="10" height="8" rx="3" />
    </g>
    <g className="fill-primary" opacity="0.4">
      <rect x="31" y="31" width="8" height="8" rx="2" transform="rotate(45 35 35)" />
      <rect x="53" y="57" width="8" height="8" rx="2" transform="rotate(45 57 61)" />
    </g>
    <circle cx="82" cy="38" r="14" className="stroke-brand-cobalt-glow fill-brand-cobalt-glow/10" strokeWidth="2" />
    <circle cx="82" cy="38" r="8" className="stroke-brand-cobalt-glow" strokeWidth="1.5" />
    <circle cx="82" cy="38" r="3" className="fill-brand-cobalt-glow" />
    <line x1="67" y1="48" x2="59" y2="52" className="stroke-primary" {...dashed} />
  </svg>
);

/** Departments wired into one AI hub. */
export const CrossDepartmentArt = ({ className }: ArtProps) => {
  const nodes = [
    { x: 20, y: 25, name: "Sales" },
    { x: 100, y: 25, name: "Ops" },
    { x: 20, y: 75, name: "Legal" },
    { x: 100, y: 75, name: "Support" },
  ];
  return (
    <svg {...base(className)}>
      {nodes.map(({ x, y }) => (
        <line key={`${x}-${y}`} x1={x} y1={y} x2="60" y2="50" className="stroke-brand-cobalt-glow" {...dashed} />
      ))}
      <circle cx="60" cy="50" r="12" className="fill-primary" />
      <text x="60" y="53.5" className="fill-primary-foreground" {...label} fontSize={10}>
        AI
      </text>
      {nodes.map(({ x, y, name }) => (
        <g key={name}>
          <circle cx={x} cy={y} r="11" className="fill-card stroke-primary" strokeWidth="1.5" />
          <text x={x} y={y + 2} className="fill-primary" {...label} fontSize={name.length > 5 ? 4.6 : 5.5}>
            {name}
          </text>
        </g>
      ))}
    </svg>
  );
};

/** Apps on both sides routed through a central core. */
export const ConnectAnyAppArt = ({ className }: ArtProps) => {
  const apps = [
    { x: 8, y: 15, name: "CRM" },
    { x: 8, y: 42, name: "ERP" },
    { x: 8, y: 69, name: "SLACK" },
    { x: 88, y: 15, name: "EMAIL" },
    { x: 88, y: 42, name: "DRIVE" },
    { x: 88, y: 69, name: "JIRA" },
  ];
  return (
    <svg {...base(className)}>
      {apps.map(({ x, y, name }) => (
        <g key={name}>
          <line
            x1={x < 60 ? x + 24 : x}
            y1={y + 9}
            x2={x < 60 ? 46 : 74}
            y2="50"
            className="stroke-brand-cobalt-glow"
            {...dashed}
            strokeWidth={1}
          />
          <rect x={x} y={y} width="24" height="18" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
          <text x={x + 12} y={y + 11.5} className="fill-primary" {...label} fontSize={6}>
            {name}
          </text>
        </g>
      ))}
      <rect x="46" y="38" width="28" height="24" rx="8" className="fill-brand-ink" />
      <text x="60" y="53" className="fill-brand-white" {...label} fontSize={8}>
        CORE
      </text>
    </svg>
  );
};

/** A log of AI decisions with pass / flag markers. */
export const AuditTrailArt = ({ className }: ArtProps) => (
  <svg {...base(className)}>
    <rect x="22" y="13" width="76" height="74" rx="8" className="fill-card stroke-brand-sky" strokeWidth="1.5" />
    {[28, 42, 56, 70].map((y, index) => (
      <g key={y}>
        <circle cx="32" cy={y} r="3" className={index === 2 ? "fill-brand-steel" : "fill-primary"} />
        <line
          x1="39"
          y1={y}
          x2={[62, 74, 58, 70][index]}
          y2={y}
          className="stroke-brand-steel"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>
    ))}
    <rect x="66" y="22" width="28" height="12" rx="4" className="fill-primary" />
    <text x="80" y="30.5" className="fill-primary-foreground" {...label} fontSize={6}>
      PASSED
    </text>
    <rect x="62" y="50" width="32" height="12" rx="4" className="fill-brand-ink" />
    <text x="78" y="58.5" className="fill-brand-white" {...label} fontSize={6}>
      FLAGGED
    </text>
  </svg>
);
