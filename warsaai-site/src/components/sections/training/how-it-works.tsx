import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { trainingFormats, trainingStats, trainingSteps } from "@/data/academy-content";
import { LucideIcon, MapPin, Timer, Users, Video } from "lucide-react";

const formatIcons: LucideIcon[] = [MapPin, Video, Timer, Users];

const HowItWorks = () => {
  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="how-it-works">
      <Container className="space-y-10 md:space-y-14">
        <AnimateOnView once y={30}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-lg bg-card">
            {trainingStats.map((stat) => (
              <div key={stat.label} className="border-border p-6 text-center odd:border-r lg:border-r lg:last:border-r-0">
                <dd className="h3 text-primary">{stat.value}</dd>
                <dt className="text-sm text-muted-foreground mt-1">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </AnimateOnView>

        <SectionHeading
          eyebrow="The process"
          title="How a training session works"
          description="Built around your real workflows, documents, and industry — not generic demos."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainingSteps.map((step, index) => (
            <li key={step.num}>
              <AnimateOnView once y={30} delay={index * 0.05} className="h-full">
                <Card className="h-full rounded-lg">
                  <CardContent className="flex h-full flex-col gap-3">
                    <span className="font-heading text-[44px] font-semibold leading-none text-brand-sky">{step.num}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm font-medium text-primary">{step.meta}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </CardContent>
                </Card>
              </AnimateOnView>
            </li>
          ))}
        </ol>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingFormats.map((format, index) => {
            const Icon = formatIcons[index % formatIcons.length];
            return (
              <li key={format.title} className="flex items-center gap-3 rounded-xl bg-brand-frost p-4">
                <Icon className="size-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{format.title}</p>
                  <p className="text-sm text-muted-foreground">{format.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default HowItWorks;
