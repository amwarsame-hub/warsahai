import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import {
  dashboardChart,
  dashboardContentEngine,
  dashboardFunnel,
  dashboardHighlights,
  DashboardKpi,
  dashboardViews,
} from "@/data/academy-interactive";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const WIDTH = 560;
const HEIGHT = 140;
const PAD = 20;

const formatKpi = (kpi: DashboardKpi, value: number) => {
  const { prefix = "", suffix = "" } = kpi;
  if (kpi.compact && value >= 1000) return `${prefix}${Math.round(value / 1000)}k${suffix}`;
  if (Number.isInteger(kpi.value)) return `${prefix}${Math.round(value).toLocaleString("en-GB")}${suffix}`;
  return `${prefix}${value.toFixed(1)}${suffix}`;
};

/** Eases from 0 to 1 over `duration` ms each time `trigger` changes. */
const useProgress = (trigger: string, duration = 900) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [trigger, duration]);
  return progress;
};

const DashboardPreview = () => {
  const [viewId, setViewId] = useState(dashboardViews[0].id);
  const [period, setPeriod] = useState("90d");
  const view = dashboardViews.find((item) => item.id === viewId) ?? dashboardViews[0];
  const progress = useProgress(view.id);

  const paths = useMemo(() => {
    const { current, prior } = dashboardChart[period];
    const max = Math.max(...current, ...prior);
    const points = (series: number[]) =>
      series.map((value, index) => [
        PAD + (index / (series.length - 1)) * (WIDTH - PAD * 2),
        HEIGHT - (value / max) * (HEIGHT - 20),
      ]);
    const line = (pts: number[][]) => pts.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const area = (pts: number[][]) => `${line(pts)} L${pts[pts.length - 1][0]},${HEIGHT} L${pts[0][0]},${HEIGHT} Z`;
    const cur = points(current);
    return { line: line(cur), area: area(cur), prior: line(points(prior)) };
  }, [period]);

  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="dashboard">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="Live business intelligence"
          title="Your Business Dashboard"
          description="See revenue trends, pipeline value, lead flow, and campaign performance at a glance. Know exactly where your business stands — every morning."
        />

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {dashboardHighlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-sm text-card-foreground">
              <Check className="size-4 text-primary" />
              {highlight}
            </li>
          ))}
        </ul>

        <AnimateOnView once y={40} className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-border bg-brand-frost px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-muted" />
              <span className="size-2.5 rounded-full bg-muted" />
              <span className="size-2.5 rounded-full bg-muted" />
            </div>
            <span className="text-sm text-muted-foreground">Dashboard preview · sample data</span>
          </div>

          <div className="space-y-6 p-4 md:p-6">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div role="tablist" aria-label="Dashboard views" className="flex flex-wrap gap-1.5">
                {dashboardViews.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={item.id === view.id}
                    onClick={() => setViewId(item.id)}
                    className={cn(
                      "h-9 rounded-full px-3.5 text-sm font-medium transition-colors",
                      item.id === view.id
                        ? "bg-foreground text-brand-white"
                        : "text-muted-foreground hover:bg-brand-frost hover:text-foreground",
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {view.kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl bg-brand-frost p-4">
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                  <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground tabular-nums mt-1">
                    {formatKpi(kpi, kpi.value * progress)}
                  </p>
                  <p className={cn("text-xs mt-1", kpi.up ? "text-primary" : "text-muted-foreground")}>{kpi.delta}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
              {/* Revenue chart */}
              <div className="rounded-xl border border-border p-4">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Rolling revenue</h3>
                    <p className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1.5">
                        <span className="h-0.5 w-4 rounded-full bg-primary" /> This period
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-0.5 w-4 rounded-full bg-muted" /> Previous period
                      </span>
                    </p>
                  </div>
                  <div role="group" aria-label="Chart period" className="flex rounded-full border border-border p-0.5">
                    {Object.entries(dashboardChart).map(([id, { label }]) => (
                      <button
                        key={id}
                        type="button"
                        aria-pressed={id === period}
                        onClick={() => setPeriod(id)}
                        className={cn(
                          "h-7 rounded-full px-3 text-xs font-medium transition-colors",
                          id === period ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <svg
                  viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                  preserveAspectRatio="none"
                  role="img"
                  aria-label={`Sample revenue trend for the last ${period}, rising above the previous period`}
                  className="h-40 w-full md:h-52"
                >
                  <defs>
                    <linearGradient id="dashboard-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(var(--brand-cobalt))" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="rgb(var(--brand-cobalt))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0.25, 0.5, 0.75].map((ratio) => (
                    <line
                      key={ratio}
                      x1={PAD}
                      x2={WIDTH - PAD}
                      y1={HEIGHT * ratio}
                      y2={HEIGHT * ratio}
                      stroke="rgb(var(--border))"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                  <path d={paths.prior} fill="none" stroke="rgb(var(--muted))" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path d={paths.area} fill="url(#dashboard-area)" />
                  <path d={paths.line} fill="none" stroke="rgb(var(--brand-cobalt))" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              {/* Funnel + content engine */}
              <div className="space-y-4">
                <div className="rounded-xl border border-border p-4">
                  <h3 className="font-semibold text-foreground mb-3">Conversion funnel</h3>
                  <ul className="space-y-2.5">
                    {dashboardFunnel.map((stage) => (
                      <li key={stage.label} className="grid grid-cols-[76px_1fr_40px] items-center gap-2 text-sm">
                        <span className="text-card-foreground">{stage.label}</span>
                        <span className="h-2 overflow-hidden rounded-full bg-brand-frost">
                          <span
                            className="block h-full rounded-full bg-primary"
                            style={{ width: `${stage.pct * progress}%` }}
                          />
                        </span>
                        <span className="text-right text-muted-foreground tabular-nums">{stage.pct}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <h3 className="font-semibold text-foreground mb-3">Content engine</h3>
                  <dl className="grid grid-cols-2 gap-3">
                    {dashboardContentEngine.map((stat) => (
                      <div key={stat.label}>
                        <dd className="font-heading text-xl font-semibold text-foreground tabular-nums">{stat.value}</dd>
                        <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default DashboardPreview;
