import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { cn } from "@/lib/utils";
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Clock,
  FileCheck,
  Filter,
  Globe,
  History,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Plus,
  Send,
  ShieldCheck,
  Smartphone,
  UserCheck,
  UserPlus,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Link } from "react-router-dom";
import { appConfig } from "@/utils/app-config";

/* ------------------------------------------------------------------ */
/* Motion helpers                                                      */
/* ------------------------------------------------------------------ */

/** Animations only run while the demo is on screen and the visitor allows motion. */
function useActive<T extends Element>(): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  return [ref, inView && !reduce];
}

/** A counter that ticks every `ms` while active. */
function useTick(active: boolean, ms: number) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setTick((t) => t + 1), ms);
    return () => window.clearInterval(id);
  }, [active, ms]);
  return [tick, setTick] as const;
}

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Shared visual pieces                                                */
/* ------------------------------------------------------------------ */

const Frame = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      "relative rounded-2xl border-[1.5px] border-transparent p-5 shadow-[0_6px_18px_rgba(15,23,42,0.06)]",
      "[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(120deg,rgb(var(--brand-sky)),rgb(var(--brand-cobalt))_50%,rgb(var(--brand-ink)))_border-box]",
      className,
    )}
  >
    {children}
  </div>
);

const Chip = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-border bg-brand-frost px-3 py-1 text-xs text-brand-slate",
      className,
    )}
  >
    {children}
  </span>
);

const Label = ({ children }: { children: ReactNode }) => (
  <p className="mb-2 text-sm font-semibold text-brand-ink">{children}</p>
);

/* ------------------------------------------------------------------ */
/* 01 Brief: typewriter                                                */
/* ------------------------------------------------------------------ */

const BRIEF =
  "Build a client onboarding portal for our practice: an intake form, document upload, a task checklist, partner sign-off, and a dashboard so the team can see where every client is.";

const BriefDemo = () => {
  const [ref, active] = useActive<HTMLDivElement>();
  const [chars, setChars] = useState(BRIEF.length);

  useEffect(() => {
    if (!active) {
      setChars(BRIEF.length);
      return;
    }
    let n = 0;
    let hold = 0;
    setChars(0);
    const id = window.setInterval(() => {
      if (n < BRIEF.length) {
        n += 2;
        setChars(Math.min(n, BRIEF.length));
      } else if (++hold > 90) {
        n = 0;
        hold = 0;
        setChars(0);
      }
    }, 30);
    return () => window.clearInterval(id);
  }, [active]);

  const done = chars >= BRIEF.length;

  return (
    <div ref={ref}>
      <Frame>
        <p className="mb-4 min-h-[6.5rem] font-medium leading-relaxed text-brand-ink sm:min-h-[5rem]">
          "{BRIEF.slice(0, chars)}
          {!done && <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-brand-cobalt align-middle" />}
          {done && '"'}
        </p>
        <div className="flex items-center justify-between">
          <Plus className="size-5 text-brand-steel" aria-hidden="true" />
          <motion.span
            aria-hidden="true"
            animate={done && active ? { scale: [1, 1.06, 1], boxShadow: ["0 0 0 0 rgba(37,99,235,0)", "0 0 0 6px rgba(37,99,235,0.18)", "0 0 0 0 rgba(37,99,235,0)"] } : {}}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-4 py-2 text-xs font-medium text-white"
          >
            Send a quick brief <Send className="size-3.5" />
          </motion.span>
        </div>
      </Frame>
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip>Event check-in app</Chip>
        <Chip>Staff training portal</Chip>
        <Chip>Field-service checklist</Chip>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 04 Automate: live workflow pipeline (centrepiece)                   */
/* ------------------------------------------------------------------ */

type Flow = { name: string; steps: { icon: LucideIcon; kind: string; text: string }[]; result: string };

const FLOWS: Flow[] = [
  {
    name: "Chase overdue documents",
    steps: [
      { icon: Clock, kind: "Trigger", text: "Documents overdue 3 days" },
      { icon: Filter, kind: "Check", text: "Client hasn't replied" },
      { icon: Mail, kind: "Action", text: "Send reminder, alert owner" },
    ],
    result: "Reminder sent to Northfield Builders",
  },
  {
    name: "Welcome new clients",
    steps: [
      { icon: UserPlus, kind: "Trigger", text: "New client signs up" },
      { icon: FileCheck, kind: "Check", text: "Intake form complete" },
      { icon: Send, kind: "Action", text: "Send welcome pack" },
    ],
    result: "Welcome pack sent to Bloom Florists",
  },
  {
    name: "Friday status digest",
    steps: [
      { icon: CalendarClock, kind: "Trigger", text: "Every Friday, 16:00" },
      { icon: BarChart3, kind: "Check", text: "Collect open tasks" },
      { icon: MessageSquare, kind: "Action", text: "Post digest to Slack" },
    ],
    result: "Digest posted to #client-ops",
  },
];

const PHASES = 8; // 0 idle, 1-3 steps run, 4-7 result shown

const AutomateDemo = () => {
  const [ref, active] = useActive<HTMLDivElement>();
  const [tick, setTick] = useTick(active, 850);
  const flowIndex = active ? Math.floor(tick / PHASES) % FLOWS.length : 0;
  const phase = active ? tick % PHASES : PHASES - 1;
  const flow = FLOWS[flowIndex];
  const runs = 126 + Math.floor(tick / PHASES);

  return (
    <div ref={ref}>
      <Frame className="p-4 md:p-6">
        {/* Automation picker */}
        <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Example automations">
          {FLOWS.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              aria-selected={i === flowIndex}
              onClick={() => setTick(i * PHASES)}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                i === flowIndex ? "text-white" : "bg-brand-frost text-brand-slate hover:text-brand-ink",
              )}
            >
              {i === flowIndex && <motion.span layoutId="hwb-flow-tab" className="absolute inset-0 rounded-full bg-brand-ink" transition={{ duration: 0.35, ease }} />}
              <span className="relative">{f.name}</span>
            </button>
          ))}
        </div>

        {/* Pipeline */}
        <div className="flex flex-col items-stretch md:flex-row md:items-center">
          {flow.steps.map((step, i) => {
            const state = phase > i + 1 ? "done" : phase === i + 1 ? "running" : "idle";
            const Icon = step.icon;
            return (
              <div key={flow.name + step.kind} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease }}
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl border bg-white p-3 transition-all duration-500 md:w-[30%] md:flex-col md:items-start",
                    state === "idle" && "border-border",
                    state === "running" && "border-brand-cobalt shadow-[0_0_0_4px_rgba(37,99,235,0.12)]",
                    state === "done" && "border-brand-cobalt/40",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-lg transition-colors duration-500",
                      state === "idle" ? "bg-brand-frost text-brand-steel" : "bg-brand-cobalt text-white",
                    )}
                  >
                    {state === "running" ? <Loader2 className="size-4 animate-spin" /> : state === "done" ? <CheckCircle2 className="size-4" /> : <Icon className="size-4" />}
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-brand-cobalt">{step.kind}</span>
                    <span className="block text-sm font-medium text-brand-ink">{step.text}</span>
                  </span>
                </motion.div>

                {i < flow.steps.length - 1 && (
                  <div className="relative mx-auto h-6 w-0.5 bg-border md:mx-0 md:h-0.5 md:w-auto md:flex-1" aria-hidden="true">
                    <div
                      className={cn(
                        "absolute inset-0 origin-top bg-brand-cobalt transition-transform duration-700 md:origin-left",
                        phase > i + 1 ? "scale-x-100 scale-y-100" : "scale-y-0 md:scale-x-0 md:scale-y-100",
                      )}
                    />
                    {phase === i + 2 && (
                      <motion.span
                        className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cobalt shadow-[0_0_10px_rgba(37,99,235,0.8)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8 }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Result + counter */}
        <div className="mt-5 flex min-h-[44px] flex-wrap items-center justify-between gap-3">
          <AnimatePresence mode="wait">
            {phase >= 4 && (
              <motion.div
                key={flow.result}
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease }}
                className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-800"
                role="status"
              >
                <CheckCircle2 className="size-4" />
                {flow.result}
                <span className="font-normal text-green-700/70">· just now</span>
              </motion.div>
            )}
          </AnimatePresence>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Zap className="size-3.5 text-brand-cobalt" />
            Runs this week:{" "}
            <motion.b key={runs} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="tabular-nums text-brand-ink">
              {runs}
            </motion.b>
          </span>
        </div>
      </Frame>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 05 Connect: data flowing between tools and the hub                  */
/* ------------------------------------------------------------------ */

const NODES = [
  { name: "Claude", x: 50, y: 10 },
  { name: "Microsoft 365", x: 82, y: 30 },
  { name: "Salesforce", x: 82, y: 70 },
  { name: "Slack", x: 50, y: 90 },
  { name: "HubSpot", x: 18, y: 70 },
  { name: "Google", x: 18, y: 30 },
];

const ConnectDemo = () => {
  const [ref, active] = useActive<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Frame className="p-3">
        <div className="relative h-64">
          <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {NODES.map((n) => (
              <line
                key={n.name}
                x1={n.x}
                y1={n.y}
                x2={50}
                y2={50}
                stroke="rgb(var(--brand-sky))"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
                className={active ? "animate-[hwb-dash_1.2s_linear_infinite]" : undefined}
              />
            ))}
          </svg>

          {active &&
            NODES.map((n, i) => {
              const inbound = i % 2 === 0;
              return (
                <motion.span
                  key={n.name + "-packet"}
                  className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cobalt shadow-[0_0_8px_rgba(37,99,235,0.7)]"
                  initial={{ left: `${inbound ? n.x : 50}%`, top: `${inbound ? n.y : 50}%`, opacity: 0 }}
                  animate={{
                    left: inbound ? [`${n.x}%`, "50%"] : ["50%", `${n.x}%`],
                    top: inbound ? [`${n.y}%`, "50%"] : ["50%", `${n.y}%`],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, delay: i * 0.45, ease: "easeInOut" }}
                />
              );
            })}

          {/* Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {active && (
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-brand-cobalt"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <span className="relative grid size-16 place-items-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-border">
              <img src="/images/common/logo.png" alt="WarsaAi" className="h-10 w-auto" />
            </span>
          </div>

          {/* Tools */}
          {NODES.map((n) => (
            <span
              key={n.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-brand-slate shadow-sm"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              {n.name}
            </span>
          ))}
        </div>
        <p className="pb-1 text-center text-[11px] text-muted-foreground">Also Monday.com, Jira, your databases and APIs</p>
      </Frame>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 09 Launch: channels go live in turn                                 */
/* ------------------------------------------------------------------ */

const CHANNELS = [
  { icon: Globe, name: "Web app", detail: "portal.yourcompany.co.uk" },
  { icon: Lock, name: "Private staff link", detail: "Sign-in required" },
  { icon: Smartphone, name: "iPhone & Android", detail: "App Store · Google Play" },
];

const LaunchDemo = () => {
  const [ref, active] = useActive<HTMLDivElement>();
  const [tick] = useTick(active, 750);
  const phase = active ? tick % 10 : 9;

  return (
    <div ref={ref}>
      <Frame>
        <Label>Release 1.0</Label>
        <ul className="divide-y divide-border">
          {CHANNELS.map(({ icon: Icon, name, detail }, i) => {
            const status = phase < 2 * i + 1 ? "Queued" : phase === 2 * i + 1 ? "Publishing" : "Live";
            return (
              <li key={name} className="flex items-center gap-3 py-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-brand-frost text-brand-slate">
                  <Icon className="size-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium text-brand-ink">{name}</span>
                  <span className="block text-[11px] text-muted-foreground">{detail}</span>
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium transition-colors duration-300",
                    status === "Queued" && "bg-brand-frost text-brand-steel",
                    status === "Publishing" && "bg-blue-50 text-brand-cobalt",
                    status === "Live" && "bg-green-50 text-green-700",
                  )}
                >
                  {status === "Publishing" && <Loader2 className="size-3 animate-spin" />}
                  {status === "Live" && <CheckCircle2 className="size-3" />}
                  {status}
                </span>
              </li>
            );
          })}
        </ul>
      </Frame>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 10 Usage: count-up numbers, growing bars, drawn trend line          */
/* ------------------------------------------------------------------ */

const CountUp = ({ to, run }: { to: number; run: boolean }) => {
  const [value, setValue] = useState(run ? 0 : to);
  useEffect(() => {
    if (!run) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration: 1.4, ease, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [run, to]);
  return <>{value}</>;
};

const STATS = [
  { label: "Weekly active users", value: 48, width: "72%" },
  { label: "Onboardings completed", value: 31, width: "62%" },
  { label: "Hours of admin saved", value: 26, width: "52%" },
];

const UsageDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const run = inView && !reduce;

  return (
    <div ref={ref}>
      <Frame>
        <div className="mb-1 flex items-start justify-between">
          <Label>This month</Label>
          <span className="rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-700">▲ 18%</span>
        </div>
        <svg viewBox="0 0 200 40" className="mb-3 h-10 w-full" aria-hidden="true">
          <motion.path
            d="M0 34 L25 30 L50 32 L75 24 L100 26 L125 17 L150 19 L175 9 L200 6"
            fill="none"
            stroke="rgb(var(--brand-cobalt))"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: inView || reduce ? 1 : 0 }}
            transition={{ duration: 1.6, ease }}
          />
        </svg>
        {STATS.map(({ label, value, width }, i) => (
          <div key={label} className="mb-2.5 text-xs text-card-foreground last:mb-0">
            <div className="flex justify-between">
              <span>{label}</span>
              <b className="tabular-nums text-brand-ink">
                <CountUp to={value} run={run} />
              </b>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-brand-frost">
              <motion.div
                className="h-full rounded-full [background:var(--gradient-brand)]"
                initial={{ width: reduce ? width : 0 }}
                animate={{ width: inView || reduce ? width : 0 }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease }}
              />
            </div>
          </div>
        ))}
      </Frame>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const steps: { title: string; body: string; demo: ReactNode; wide?: boolean }[] = [
  {
    title: "Start from a brief",
    body: "Describe the problem in your own words and get a working first version, in your brand, within days. Then change it in plain English: no tickets, no jargon.",
    demo: <BriefDemo />,
  },
  {
    title: "Plugs into the tools you already use",
    body: "We connect to the systems, data and APIs the business already runs on, so nobody re-types anything.",
    demo: <ConnectDemo />,
  },
  {
    title: "Automate the busywork",
    body: "Approvals, reminders and follow-ups fire on their own, around the clock. Anything that needs judgement still comes to a person first.",
    wide: true,
    demo: <AutomateDemo />,
  },
  {
    title: "Launch on web and mobile",
    body: "Go live as a website, a private staff link or a phone app. It's real code you own, and every change is tracked so it can be rolled back.",
    demo: <LaunchDemo />,
  },
  {
    title: "See how it's used",
    body: "Usage numbers show what people rely on and where they get stuck, so each version is built on evidence.",
    demo: <UsageDemo />,
  },
];

const security = [
  { icon: UserCheck, title: "Access by role", body: "Staff, clients and managers only see what they should." },
  { icon: ShieldCheck, title: "Human sign-off", body: "Decisions that matter are approved by a person before anything goes out." },
  { icon: History, title: "A clear audit trail", body: "A record of who changed what, and when." },
];

const HowWeBuild = () => {
  return (
    <section id="how-we-build" className="bg-brand-light pb-12 pt-12 md:pb-20 md:pt-20 xl:pb-32 xl:pt-32">
      <style>{"@keyframes hwb-dash { to { stroke-dashoffset: -16; } }"}</style>
      <Container className="space-y-8 md:space-y-12">
        <div className="mx-auto max-w-[720px] text-center">
          <AnimateOnView once blur className="mb-1.5 flex justify-center md:mb-4">
            <Badge>How We Build</Badge>
          </AnimateOnView>
          <AnimateOnView once blur delay={0.1} className="h2">
            From a plain-English brief to software your team actually uses
          </AnimateOnView>
          <AnimateOnView once delay={0.2}>
            <p className="mt-4 text-card-foreground">
              You tell us what the business needs. We build it with Claude, shape it with you in short review rounds, and
              hand over something your team can run on its own.
            </p>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <AnimateOnView
              key={step.title}
              once
              delay={(i % 2) * 0.1}
              className={cn(
                "group flex flex-col gap-6 rounded-3xl border border-border bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-8",
                step.wide && "md:col-span-2 lg:grid lg:grid-cols-[1fr_1.6fr] lg:items-center",
              )}
            >
              <div>
                <span className="text-xs font-semibold tracking-widest text-brand-cobalt">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h5 mb-1.5 mt-1.5">{step.title}</h3>
                <p className="text-card-foreground">{step.body}</p>
              </div>
              {step.demo}
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView once className="grid gap-8 rounded-3xl bg-brand-ink p-6 text-white md:grid-cols-2 md:p-10">
          <div>
            <Badge className="mb-3">Security and governance</Badge>
            <h3 className="h4 mb-3 text-white">Control built in from the start</h3>
            <p className="text-muted">
              Security is part of every build review, not a hurdle at the end. You decide who sees what, and every important
              step leaves a record.
            </p>
          </div>
          <ul className="divide-y divide-white/10">
            {security.map(({ icon: Icon, title, body }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease }}
                className="flex gap-3 py-3"
              >
                <Icon className="mt-0.5 size-5 shrink-0 text-brand-cobalt-glow" aria-hidden="true" />
                <p className="text-muted">
                  <b className="font-semibold text-white">{title}.</b> {body}
                </p>
              </motion.li>
            ))}
          </ul>
        </AnimateOnView>

        <AnimateOnView once className="text-center">
          <p className="h5 mb-2">See what WarsaAi could build for your team</p>
          <p className="mx-auto mb-6 max-w-[620px] text-card-foreground">
            Book a free 30-minute Efficiency Audit. We'll walk through your workflow, the tools it needs to connect to, your
            governance requirements and how you'd roll it out.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <Link to="/contact">
                {appConfig.cta.primary}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <Link to={appConfig.cta.briefHref}>{appConfig.cta.secondary}</Link>
            </Button>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default HowWeBuild;
