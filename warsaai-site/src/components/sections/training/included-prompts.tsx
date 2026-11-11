import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { trainingPrompts } from "@/data/academy-content";

const IncludedPrompts = () => {
  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="prompts">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow={`${trainingPrompts.length} prompts included`}
          title="Templates your team keeps"
          description="Every Full Day Workshop includes these curated, industry-tested prompt templates — ready to use the morning after training."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {trainingPrompts.map((prompt, index) => (
            <Card key={prompt.title} className="rounded-lg">
              <CardContent className="flex h-full flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">{prompt.icon}</span>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground tabular-nums">Prompt {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="text-lg font-semibold text-foreground">{prompt.title}</h3>
                  </div>
                  <CopyButton text={prompt.prompt} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{prompt.text}</p>
                <p className="mt-auto rounded-xl bg-brand-frost p-4 font-mono text-[13px] leading-relaxed text-card-foreground">
                  {prompt.prompt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IncludedPrompts;
