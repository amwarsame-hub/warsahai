import Container from "@/components/container";
import PlatformGraph from "@/components/illustrations/platform-graph";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { workflowBadges } from "@/data/academy-content";
import { workflowDepartments } from "@/data/academy-interactive";
import { cn } from "@/lib/utils";
import {
  Banknote,
  ClipboardCheck,
  FolderOpen,
  GraduationCap,
  Headset,
  Monitor,
  LucideIcon,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

const departmentIcons: Record<string, LucideIcon> = {
  it: Monitor,
  "customer-service": Headset,
  finance: Banknote,
  hr: Users,
  ops: Settings,
  compliance: ClipboardCheck,
  training: GraduationCap,
  admin: FolderOpen,
  security: ShieldCheck,
};

const totalFlows = workflowDepartments.reduce((sum, department) => sum + department.flows.length, 0);

const WorkflowHub = () => {
  const [departmentId, setDepartmentId] = useState(workflowDepartments[0].id);
  const department = workflowDepartments.find((item) => item.id === departmentId) ?? workflowDepartments[0];
  const ActiveIcon = departmentIcons[department.id] ?? Settings;

  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="hub">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="AI Workflow Hub"
          title="One hub, every department"
          description={`${workflowDepartments.length} departments and ${totalFlows} ready-made workflows. Pick a department to see what runs on autopilot and which apps it connects.`}
        />

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {workflowBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-2 text-sm text-card-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              {badge}
            </li>
          ))}
        </ul>

        <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Departments" className="flex flex-row flex-wrap lg:flex-col gap-2">
            {workflowDepartments.map((item) => {
              const Icon = departmentIcons[item.id] ?? Settings;
              const active = item.id === department.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setDepartmentId(item.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-4 py-3 text-left font-medium transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-card-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  <span className="flex-1">{item.title}</span>
                  <span className="text-sm opacity-70 tabular-nums">{item.flows.length}</span>
                </button>
              );
            })}
          </div>

          <AnimateOnView key={department.id} y={16} role="tabpanel" aria-label={department.title}>
            <Card className="h-full rounded-lg p-6 md:p-8">
              <CardContent className="flex h-full flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-sky text-primary">
                    <ActiveIcon className="size-6" />
                  </span>
                  <div>
                    <h3 className="h5">{department.title}</h3>
                    <p className="text-sm text-muted-foreground">{department.flows.length} reusable workflows</p>
                  </div>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {department.flows.map((flow) => (
                    <li key={flow} className="flex items-start gap-2.5 rounded-xl bg-brand-frost px-4 py-3 text-card-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {flow}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-sm text-muted-foreground mb-3">
                    Connects with {department.apps.length} SaaS / PaaS platforms
                  </p>
                  <PlatformGraph hub={department.title} icon={ActiveIcon} apps={department.apps} />
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>
        </div>
      </Container>
    </section>
  );
};

export default WorkflowHub;
