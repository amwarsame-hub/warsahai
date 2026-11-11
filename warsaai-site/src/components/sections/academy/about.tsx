import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { academyOutcomes } from "@/data/academy-interactive";
import { appConfig } from "@/utils/app-config";
import { Check, PlayCircle } from "lucide-react";

const AcademyAbout = () => {
  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="about">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <SectionHeading
            eyebrow={`About the ${appConfig.name} Academy`}
            title="From Zero to Pro with Claude AI"
            description={
              <>
                Based on the framework in Marcus J. Halford's <em>From Zero to Pro with Claude AI</em>, our Saturday
                sessions are designed specifically for entrepreneurs who want to integrate AI into their business —
                not just experiment with it.
              </>
            }
          />
          <AnimateOnView once delay={0.3} className="mt-8 flex items-start gap-3 rounded-xl bg-brand-sky/40 p-5">
            <PlayCircle className="size-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-card-foreground">
              <strong className="text-foreground">Getting started:</strong> all videos and guides are 100% free. To
              follow along and build apps yourself, you will need a Claude AI subscription.
            </p>
          </AnimateOnView>
        </div>

        <AnimateOnView once y={40} delay={0.2}>
          <Card className="rounded-lg p-6 md:p-8">
            <CardContent>
              <h3 className="h5 mb-6">What you get from the sessions</h3>
              <ul className="space-y-4">
                {academyOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-sky text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-card-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default AcademyAbout;
