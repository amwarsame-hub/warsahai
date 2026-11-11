import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { craftFramework, powerTips, promptMistakes, tipsSource } from "@/data/academy-content";
import { BookOpen, Check, X } from "lucide-react";

const Tips = () => {
  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="tips">
      <Container className="space-y-12 md:space-y-16">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Ryan Dickey · Mastering Claude AI"
            title="Practical Tips & Techniques"
            description="Battle-tested methods from Dickey's practical mastery framework — organised into the CRAFT model, 10 power tips, and common mistakes to eliminate."
          />
          <div className="flex items-start gap-3 rounded-xl bg-brand-sky/40 p-5">
            <BookOpen className="size-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-card-foreground">{tipsSource}</p>
          </div>
        </div>

        {/* CRAFT */}
        <div className="space-y-6">
          <h3 className="h5">The CRAFT Framework — your prompt blueprint</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {craftFramework.map((item, index) => (
              <AnimateOnView key={item.letter} once y={30} delay={index * 0.05}>
                <Card className="h-full rounded-lg">
                  <CardContent className="flex h-full flex-col gap-3">
                    <span className="font-heading text-[44px] font-semibold leading-none text-primary">
                      {item.letter}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground">{item.word}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </AnimateOnView>
            ))}
          </div>
        </div>

        {/* Power tips */}
        <div className="space-y-6">
          <h3 className="h5">10 Power Tips — Dickey's practitioner playbook</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {powerTips.map((tip) => (
              <Card key={tip.num} className="rounded-lg">
                <CardContent className="flex h-full flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm text-muted-foreground tabular-nums">{tip.num}</span>
                    <h4 className="text-lg font-semibold text-foreground">{tip.title}</h4>
                  </div>
                  <p className="text-sm text-card-foreground leading-relaxed">{tip.text}</p>
                  <div className="mt-auto space-y-1 rounded-xl bg-brand-frost p-4 font-mono text-[13px] leading-relaxed text-card-foreground">
                    {tip.example.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mistakes */}
        <div className="space-y-6">
          <h3 className="h5">8 mistakes that kill your Claude results</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {promptMistakes.map((mistake) => (
              <Card key={mistake.title} className="rounded-lg">
                <CardContent className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-ink text-brand-white">
                    <X className="size-4" />
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{mistake.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{mistake.text}</p>
                    <p className="flex items-start gap-2 text-sm text-primary">
                      <Check className="size-4 shrink-0 mt-0.5" />
                      {mistake.fix}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tips;
