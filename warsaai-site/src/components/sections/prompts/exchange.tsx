import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import CopyButton from "@/components/ui/copy-button";
import PillTabs from "@/components/ui/pill-tabs";
import { promptExchange } from "@/data/academy-content";
import { useState } from "react";

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(promptExchange.map((prompt) => prompt.category)))];

const PromptExchange = () => {
  const [category, setCategory] = useState(ALL);
  const prompts = category === ALL ? promptExchange : promptExchange.filter((prompt) => prompt.category === category);

  return (
    <section className="bg-black md:py-20 xl:py-28 py-12 scroll-mt-24" id="exchange">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          inverted
          eyebrow="Shared by the community"
          title="Prompt Exchange"
          description="Real prompts from real entrepreneurs. Steal freely — that's the point."
        />

        <PillTabs
          inverted
          label="Prompt categories"
          value={category}
          onChange={setCategory}
          tabs={categories.map((name) => ({ id: name, label: name }))}
        />

        <div role="tabpanel" aria-label={category} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {prompts.map((prompt) => (
            <div key={prompt.text} className="glass-card flex flex-col gap-5 p-6">
              <p className="flex-1 text-white leading-relaxed">{prompt.text}</p>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-muted">{prompt.category}</span>
                <CopyButton inverted text={prompt.text} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PromptExchange;
