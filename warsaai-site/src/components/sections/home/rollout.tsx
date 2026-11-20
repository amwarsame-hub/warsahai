import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import PillTabs from "@/components/ui/pill-tabs";
import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

/* Inline link in card copy. */
const A = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  >
    {children}
  </Link>
);

/* Visible keyboard focus for the section's buttons (WCAG 2.1 AA). */
const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const BRIEF = "/#start-building";

/* Copy: "WarsaAi Website: Consolidated Recommendations", section 4 (20 Nov 2026). */
const steps: { title: string; body: ReactNode }[] = [
  {
    title: "Audit & Governance Scope",
    body: (
      <>
        <p>
          <strong className="font-semibold text-foreground">Book an Efficiency Audit.</strong> We map your manual
          workflows, estimate return on investment, list the systems to connect and agree your governance requirements,
          then set a practical automation roadmap before anything is built.
        </p>
        <p className="italic">
          Not ready to talk? <A to={BRIEF}>Send a quick brief</A> instead.
        </p>
      </>
    ),
  },
  {
    title: "Connect Your Stack & Automate",
    body: (
      <>
        <p>
          Describe the solution in plain English and connect the tools you already use: Salesforce, Monday.com, Jira,
          Confluence, ServiceNow, Slack, Google Workspace, Microsoft 365, HubSpot, email, databases and APIs.
        </p>
        <p>
          Launch on the web, through private staff links, or on mobile (iPhone & Android). Role-based access, human
          sign-off and audit trails are built in. See <A to="/#how-we-build">How We Build</A>.
        </p>
      </>
    ),
  },
  {
    title: "Train Teams & Scale",
    body: (
      <>
        <p>
          Book <A to="/training">In-House Training</A> built around your team's real workflows, or join the{" "}
          <A to="/academy">Academy</A> and <A to="/academy#sessions">Saturday Sessions</A>.
        </p>
        <p>
          Standardise work across departments with the <A to="/prompts">Prompt Library</A> and{" "}
          <A to="/workflows">Reusable Workflows</A>, and read the <A to="/blog">Blog</A>, starting with{" "}
          <A to="/blog/ai-strategy-vs-reality-top-10-best-practices">
            The Gap Between AI Strategy and Reality: Top 10 Best Practices
          </A>
          .
        </p>
      </>
    ),
  },
];

const useCases = [
  {
    department: "Operations & IT",
    text: "Ticket triage and routing, client onboarding portals, field-service checklists, weekly KPI reporting",
  },
  {
    department: "Finance",
    text: "Invoice drafting and requests, overdue invoice reminders, live payment status tracking (paid, pending, outstanding, aged)",
  },
  {
    department: "Compliance & Security",
    text: "Policy audit trails, role-based access control, human sign-off before external actions, full action logging",
  },
];

const tabs = [
  { id: "all", label: "All Businesses" },
  { id: "mid", label: "Mid-Market" },
];

const intro: Record<string, string> = {
  all: "Three steps from first conversation to a team that runs its own automation.",
  mid: "The same three steps, with examples for Operations, Finance, IT and Compliance & Security.",
};

/** Recommended next steps. Home page, directly after "How WarsaAi Works". */
const Rollout = () => {
  const [tab, setTab] = useState("all");

  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="next-steps" aria-labelledby="next-steps-title">
      <Container className="space-y-8 md:space-y-10">
        <SectionHeading
          eyebrow="Next steps"
          title={<span id="next-steps-title">Recommended Next Steps</span>}
          description={intro[tab]}
        />

        <PillTabs label="Choose your audience" tabs={tabs} value={tab} onChange={setTab} />

        <div role="tabpanel" aria-label={tab === "mid" ? "Mid-Market" : "All Businesses"} className="space-y-6">
          <ol className="grid list-none gap-4 p-0 md:grid-cols-3">
            {steps.map(({ title, body }, index) => (
              <AnimateOnView key={title} asChild once y={20} delay={index * 0.05}>
                <li className="h-full rounded-lg border border-border border-t-4 border-t-primary bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="h6 mt-2 text-foreground">{title}</h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">{body}</div>
                </li>
              </AnimateOnView>
            ))}
          </ol>

          {tab === "mid" && (
            <div className="rounded-lg bg-brand-frost p-6 md:p-8">
              <h3 className="h6 text-foreground">Examples by department</h3>
              <dl className="mt-4 grid gap-4 md:grid-cols-3">
                {useCases.map(({ department, text }) => (
                  <div key={department}>
                    <dt className="text-sm font-semibold text-foreground">{department}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-brand-slate">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild className={focusRing}>
            <Link to="/contact">
              Book an Efficiency Audit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="white" className={focusRing}>
            <Link to={BRIEF}>Send a quick brief</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Rollout;
