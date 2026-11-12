import { getPlatform } from "@/data/platforms";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

/** A platform's logo, or its initials when no open-source logo exists. */
export const PlatformLogo = ({ name, className }: { name: string; className?: string }) => {
  const { logo } = getPlatform(name);
  return logo ? (
    <img src={logo} alt="" loading="lazy" className={cn("size-5 object-contain", className)} />
  ) : (
    <span aria-hidden="true" className={cn("flex size-5 items-center justify-center rounded-full bg-brand-sky/50 text-[11px] font-bold text-primary", className)}>
      {name
        .split(/[\s.]+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
    </span>
  );
};

interface PlatformGraphProps {
  /** Label of the hub in the middle, e.g. the department. */
  hub: string;
  icon: LucideIcon;
  apps: string[];
  className?: string;
}

/** Hub-and-spoke graph: one department wired to each SaaS / PaaS platform it uses. */
const PlatformGraph = ({ hub, icon: Icon, apps, className }: PlatformGraphProps) => {
  const nodes = apps.map((app, index) => {
    const angle = (index / apps.length) * Math.PI * 2 - Math.PI / 2;
    return { ...getPlatform(app), x: 50 + Math.cos(angle) * 38, y: 50 + Math.sin(angle) * 36 };
  });

  return (
    <figure className={cn("rounded-2xl bg-brand-frost p-4", className)}>
      <div
        className="relative mx-auto aspect-[3/4] w-full max-w-[560px] sm:aspect-[4/3]"
        role="img"
        aria-label={`${hub} connects to ${apps.join(", ")}`}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
          {nodes.map((node, index) => (
            <motion.line
              key={node.name}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              vectorEffect="non-scaling-stroke"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              className={node.kind === "PaaS" ? "stroke-brand-ink" : "stroke-brand-cobalt-glow"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full bg-primary text-primary-foreground shadow-lg sm:size-24">
          <Icon className="size-5 sm:size-6" />
          <span className="text-[9px] font-semibold uppercase tracking-wide sm:text-[10px]">AI hub</span>
        </div>

        {nodes.map((node, index) => (
          <motion.div
            key={node.name}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
          >
            <div className="flex w-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-xl border border-border bg-card px-1.5 py-2 text-center shadow-sm sm:w-[104px]">
              <PlatformLogo name={node.name} className="size-6" />
              <span className="text-[11px] font-semibold leading-tight text-foreground sm:text-xs">{node.name}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 text-[9px] font-bold uppercase tracking-wide",
                  node.kind === "PaaS" ? "bg-brand-ink text-brand-white" : "bg-brand-sky/50 text-primary",
                )}
              >
                {node.kind}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand-cobalt-glow" />
          SaaS — software apps
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand-ink" />
          PaaS — cloud &amp; automation platforms
        </span>
      </figcaption>
    </figure>
  );
};

export default PlatformGraph;
