import {
  departments,
  integrationApps,
  NamedIcon,
  sampleCollaboration,
  sampleInvoiceStatuses,
  sampleWorkflows,
  sampleWorkflowTrend,
  trendMonths,
  WorkflowStatus,
} from "@/data/integrations";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { BellRing, FilePlus2, FileText, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Small coded product previews (sample data) used in place of screenshots.
 * They use the design tokens, so they follow the theme.
 */

type PanelProps = { className?: string };

const panel = "rounded-2xl border border-border bg-card p-5 text-left text-card-foreground shadow-sm";

const PanelHeader = ({ title, meta }: { title: string; meta?: string }) => (
  <div className="mb-4 flex items-center justify-between gap-3">
    <p className="font-semibold text-foreground">{title}</p>
    {meta && (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <span className="size-2 animate-pulse rounded-full bg-primary" />
        {meta}
      </span>
    )}
  </div>
);

/** Steps `count` values on a timer; stays on the first when the visitor prefers reduced motion. */
const useCycle = (count: number, interval = 2600) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), interval);
    return () => clearInterval(timer);
  }, [count, interval]);
  return [index, setIndex] as const;
};

const IconTile = ({ item, className }: { item: NamedIcon; className?: string }) => (
  <span
    className={cn(
      "flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-sky/40 text-primary",
      className,
    )}
  >
    <item.icon className="size-[18px]" />
  </span>
);

/** Labelled icon tiles, e.g. connected apps or social platforms. */
export const IconTileGrid = ({ items, className }: { items: NamedIcon[]; className?: string }) => (
  <ul className={cn("flex flex-wrap gap-3", className)}>
    {items.map((item) => (
      <li
        key={item.name}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-card py-2 pl-2 pr-4 text-sm font-semibold text-foreground"
      >
        <IconTile item={item} />
        {item.name}
      </li>
    ))}
  </ul>
);

/** Every integration with its connection status. */
export const IntegrationsBoard = ({ className, limit }: PanelProps & { limit?: number }) => {
  const apps = limit ? integrationApps.slice(0, limit) : integrationApps;
  return (
    <div className={cn(panel, className)}>
      <PanelHeader title="Integrations" meta={`${integrationApps.length} connected`} />
      <ul className="grid grid-cols-2 gap-2">
        {apps.map((app) => (
          <li key={app.name} className="flex items-center gap-2 rounded-xl bg-secondary p-2 text-xs font-medium text-foreground">
            <IconTile item={app} className="size-7 rounded-lg bg-card" />
            <span className="truncate">{app.name}</span>
            <span className="ml-auto size-2 shrink-0 rounded-full bg-primary" title="Connected" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const statusStyles: Record<WorkflowStatus, string> = {
  Running: "bg-primary text-primary-foreground",
  Scheduled: "bg-brand-sky/50 text-primary",
  "Needs review": "bg-brand-ink text-brand-white",
};

/** All automation workflows by department, with their status. */
export const WorkflowStatusBoard = ({ className }: PanelProps) => (
  <div className={cn(panel, className)}>
    <PanelHeader title="Automation workflows" meta="Live" />
    <ul className="divide-y divide-border">
      {sampleWorkflows.map((workflow) => (
        <li key={workflow.name} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
          <IconTile item={workflow} />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">{workflow.department}</p>
            <p className="truncate text-sm font-medium text-foreground">{workflow.name}</p>
          </div>
          <span className={cn("ml-auto shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold", statusStyles[workflow.status])}>
            {workflow.status}
          </span>
        </li>
      ))}
    </ul>
    <p className="mt-4 text-xs text-muted-foreground">Sample data</p>
  </div>
);

/** Monthly workflow runs, cycling through departments. */
export const WorkflowTrendChart = ({ className }: PanelProps) => {
  const [active, setActive] = useCycle(sampleWorkflowTrend.length);
  const max = Math.max(...sampleWorkflowTrend.flatMap((series) => series.runs));
  const { department, runs } = sampleWorkflowTrend[active];

  return (
    <div className={cn(panel, "w-full max-w-[460px]", className)}>
      <PanelHeader title="Workflows automated" meta="Sample data" />
      <div className="mb-5 flex flex-wrap gap-2">
        {sampleWorkflowTrend.map((series, index) => (
          <button
            key={series.department}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              index === active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
            )}
          >
            {series.department}
          </button>
        ))}
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        <span className="h4 mr-2 text-foreground">{runs[runs.length - 1]}</span>
        {department} runs this month
      </p>
      <div className="flex h-40 items-end gap-3" role="img" aria-label={`${department} workflow runs per month, rising`}>
        {runs.map((value, index) => (
          <div key={trendMonths[index]} className="flex h-full flex-1 flex-col justify-end gap-2">
            <motion.div
              className={cn("rounded-t-lg", index === runs.length - 1 ? "bg-primary" : "bg-brand-sky")}
              initial={false}
              animate={{ height: `${(value / max) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <span className="text-center text-xs text-muted-foreground">{trendMonths[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Departments handing work to each other through the AI layer. */
export const CollaborationFeed = ({ className }: PanelProps) => {
  const [active] = useCycle(sampleCollaboration.length, 3000);
  const message = sampleCollaboration[active];

  return (
    <div className={cn(panel, className)}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <ul className="flex -space-x-2">
          {departments.map((department) => (
            <li key={department.name} title={department.name}>
              <IconTile item={department} className="rounded-full bg-brand-sky ring-2 ring-card" />
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" />
          Working together
        </span>
      </div>
      <div className="min-h-[52px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={message.text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-secondary px-3 py-2"
          >
            <p className="text-xs font-semibold text-primary">{message.from}</p>
            <p className="text-sm text-foreground">{message.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const invoiceActions = [
  { icon: FilePlus2, title: "Create an invoice", text: "Drafted from the job, ready to send" },
  { icon: FileText, title: "Request for invoice", text: "Ask a supplier or colleague to raise one" },
  { icon: BellRing, title: "Send a reminder", text: "Chase overdue invoices automatically" },
];

export const InvoiceActions = ({ className }: PanelProps) => (
  <ul className={cn(panel, "w-full max-w-[320px] space-y-2 p-3", className)}>
    {invoiceActions.map(({ icon: Icon, title, text }, index) => (
      <li
        key={title}
        className={cn(
          "flex items-center gap-3 rounded-xl border p-3",
          index === 0 ? "border-primary bg-brand-sky/30" : "border-transparent",
        )}
      >
        <Icon className={cn("size-5 shrink-0", index === 0 ? "text-primary" : "text-foreground")} />
        <div>
          <p className="font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{text}</p>
        </div>
      </li>
    ))}
  </ul>
);

const invoiceBars = ["bg-primary", "bg-brand-cobalt-glow", "bg-brand-steel", "bg-brand-ink"];

export const InvoiceStatuses = ({ className }: PanelProps) => {
  const total = sampleInvoiceStatuses.reduce((sum, status) => sum + status.count, 0);
  return (
    <div className={cn(panel, "w-full max-w-[360px]", className)}>
      <PanelHeader title="Invoice status" meta="Sample data" />
      <div className="mb-5 flex h-3 overflow-hidden rounded-full" aria-hidden="true">
        {sampleInvoiceStatuses.map((status, index) => (
          <motion.span
            key={status.label}
            className={invoiceBars[index]}
            initial={{ width: 0 }}
            whileInView={{ width: `${(status.count / total) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        ))}
      </div>
      <ul className="space-y-3">
        {sampleInvoiceStatuses.map((status, index) => (
          <li key={status.label} className="flex items-center gap-3 text-sm">
            <span className={cn("size-2.5 shrink-0 rounded-full", invoiceBars[index])} />
            <span className="font-semibold text-foreground">{status.label}</span>
            <span className="truncate text-xs text-muted-foreground">{status.note}</span>
            <span className="ml-auto font-semibold text-foreground">{status.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/** Department icons joined to one AI core. */
export const DepartmentHub = ({ className }: PanelProps) => (
  <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
    {departments.map((department, index) => (
      <div key={department.name} className="contents">
        {index === Math.ceil(departments.length / 2) && (
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-sm">
            AI
          </span>
        )}
        <span className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground">
          <IconTile item={department} />
          {department.name}
        </span>
      </div>
    ))}
  </div>
);
