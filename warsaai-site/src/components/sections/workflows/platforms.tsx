import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { connectedPlatforms, serviceNowCallout, workflowSchedules } from "@/data/academy-content";
import { ArrowUpRight, BarChart3, Bot, Clock, LucideIcon, Repeat, Zap } from "lucide-react";

const scheduleIcons: LucideIcon[] = [Clock, Zap, BarChart3, Repeat];

const Platforms = () => {
  return (
    <section className="bg-black md:py-20 xl:py-28 py-12 scroll-mt-24" id="platforms">
      <Container className="space-y-12 md:space-y-16">
        <div className="space-y-8">
          <SectionHeading
            inverted
            eyebrow="Connected platforms"
            title="Works with the stack you already run"
          />

          <ul className="flex flex-wrap gap-3">
            {connectedPlatforms.map((platform) => (
              <li key={platform.name}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-white transition-colors hover:border-white/60"
                >
                  {platform.name}
                  <ArrowUpRight className="size-4 text-muted" />
                </a>
              </li>
            ))}
          </ul>

          <AnimateOnView once y={30} className="glass-card flex flex-col sm:flex-row gap-5 p-6 md:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Bot className="size-6" />
            </span>
            <div>
              <h3 className="h5 text-white mb-2">{serviceNowCallout.title}</h3>
              <p className="text-muted leading-relaxed">{serviceNowCallout.text}</p>
            </div>
          </AnimateOnView>
        </div>

        <div className="space-y-8">
          <SectionHeading
            inverted
            size="h3"
            title="Schedule your workflows"
            description="Set it once — Claude handles the rest. Trigger workflows by time, event, or data threshold."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSchedules.map((schedule, index) => {
              const Icon = scheduleIcons[index % scheduleIcons.length];
              return (
                <AnimateOnView key={schedule.label} once y={30} delay={index * 0.05} className="glass-card p-6">
                  <Icon className="size-6 text-brand-cobalt-glow mb-5" />
                  <h4 className="text-lg font-semibold text-white mb-2">{schedule.label}</h4>
                  <p className="text-sm text-muted">{schedule.text}</p>
                </AnimateOnView>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Platforms;
