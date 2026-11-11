import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import CopyButton from "@/components/ui/copy-button";
import LevelBadge from "@/components/ui/level-badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { promptsOfTheDay } from "@/data/academy-interactive";
import { appConfig } from "@/utils/app-config";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const today = () =>
  new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short", year: "numeric" });

const PromptOfTheDay = () => {
  const [index, setIndex] = useState(0);
  const total = promptsOfTheDay.length;
  const prompt = promptsOfTheDay[index];
  const step = (by: number) => setIndex((current) => (current + by + total) % total);

  return (
    <section className="bg-black md:py-20 xl:py-28 py-12 scroll-mt-24" id="prompt">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          inverted
          eyebrow="Updated every session"
          title="Prompt of the Day"
          description={`Copy, customise, and deploy. Each prompt is battle-tested by the ${appConfig.name} community.`}
        />

        <AnimateOnView once y={40} className="glass-card p-6 md:p-10">
          <p className="text-sm text-muted mb-5">
            {today()} · Prompt {index + 1} of {total}
          </p>
          <blockquote className="h5 text-white min-h-[8rem]">{prompt.text}</blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LevelBadge level={prompt.level} />
            <span className="text-sm text-muted">{prompt.category}</span>
            <div className="ml-auto flex items-center gap-2">
              <CopyButton inverted text={prompt.text} label="Copy prompt" />
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous prompt"
                className="flex size-8 items-center justify-center rounded-full border border-white/20 text-muted transition-colors hover:border-white/50 hover:text-white"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next prompt"
                className="flex size-8 items-center justify-center rounded-full border border-white/20 text-muted transition-colors hover:border-white/50 hover:text-white"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default PromptOfTheDay;
