import Container from "@/components/container";
import { AuditTrailArt, BuildOnceArt, ConnectAnyAppArt, CrossDepartmentArt } from "@/components/illustrations/pillars";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    Art: BuildOnceArt,
    tag: "Set & forget",
    title: "Build Once, Run Forever",
    kicker: "Sustainable automation",
    text: "Custom AI agents designed with “set-it-and-forget-it” reliability. Deploy once — your system runs, adapts, and delivers results 24/7 without manual intervention.",
  },
  {
    Art: CrossDepartmentArt,
    tag: "Unified",
    title: "Cross-Department AI",
    kicker: "Break down silos",
    text: "Connect Sales, Ops, Support, Legal and Finance through a single intelligence layer. One AI brain that speaks every department’s language simultaneously.",
  },
  {
    Art: ConnectAnyAppArt,
    tag: "Native",
    title: "Connect Any App",
    kicker: "Universal stack integration",
    text: "Native integrations with your existing CRM, ERP, and communication tools. Salesforce, Monday.com, Jira, Slack, Google Workspace — if your business uses it, we can connect it.",
  },
  {
    Art: AuditTrailArt,
    tag: "Compliant",
    title: "Audit Trail Built-In",
    kicker: "Full transparency",
    text: "See every decision your AI makes in real time. No black boxes, no surprises. Every action logged, auditable, and explainable.",
  },
];

const Pillars = () => {
  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="pillars">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="How it works"
          title="The core pillars"
          description="Stop trading time for money. We build the connective tissue — custom AI agents that bridge every department and carry the operational load."
          action={
            <Button asChild>
              <Link to="/contact">
                Book an Efficiency Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Art, tag, title, kicker, text }, index) => (
            <AnimateOnView
              key={title}
              once
              y={30}
              delay={index * 0.05}
              className="group overflow-hidden rounded-lg bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative flex h-44 items-center justify-center bg-brand-sky/30 p-5">
                <Art className="transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute right-3 top-3 rounded-full bg-card px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mb-3 mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{kicker}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pillars;
