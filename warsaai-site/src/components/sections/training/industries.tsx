import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { trainingIndustries } from "@/data/academy-content";

const Industries = () => {
  return (
    <section className="bg-black md:py-20 xl:py-28 py-12 scroll-mt-24" id="industries">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          inverted
          eyebrow={`${trainingIndustries.length} industries`}
          title="Industries we train"
          description="Every programme is built around the work your team already does, so people leave with tools they can use the next morning."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingIndustries.map((industry, index) => (
            <AnimateOnView key={industry.name} once y={30} delay={(index % 3) * 0.05} className="glass-card flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{industry.icon}</span>
                <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
              </div>
              <p className="font-medium text-brand-cobalt-glow">{industry.tagline}</p>
              <p className="text-sm text-muted leading-relaxed">{industry.text}</p>
              <ul className="mt-auto space-y-1.5 border-t border-white/10 pt-4 text-sm text-white">
                {industry.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span aria-hidden="true" className="text-brand-cobalt-glow">→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Industries;
