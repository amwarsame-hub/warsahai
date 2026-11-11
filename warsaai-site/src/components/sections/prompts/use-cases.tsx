import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import PillTabs from "@/components/ui/pill-tabs";
import { useCases } from "@/data/academy-content";
import { Briefcase, HardHat, Home, LucideIcon, Megaphone, Share2, Store } from "lucide-react";
import { useState } from "react";

const sectorIcons: Record<string, LucideIcon> = {
  realestate: Home,
  construction: HardHat,
  smallbiz: Store,
  socialmedia: Share2,
  freelance: Briefcase,
  marketing: Megaphone,
};

const UseCases = () => {
  const [sectorId, setSectorId] = useState(useCases[0].id);
  const sector = useCases.find((item) => item.id === sectorId) ?? useCases[0];

  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="usecases">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="Eslam Wahba · 1000 Claude AI Prompts"
          title="Claude for Every Business"
          description="Real prompts organised by industry. Pick your sector, copy the prompt, customise the brackets, and put it to work today."
        />

        <PillTabs
          label="Industry sectors"
          value={sector.id}
          onChange={setSectorId}
          tabs={useCases.map(({ id, name, prompts }) => {
            const Icon = sectorIcons[id] ?? Briefcase;
            return {
              id,
              label: (
                <>
                  <Icon className="size-4" />
                  {name}
                  <span className="opacity-60 tabular-nums">{prompts.length}</span>
                </>
              ),
            };
          })}
        />

        <div role="tabpanel" aria-label={sector.name} className="space-y-6">
          <div>
            <h3 className="h5">{sector.title}</h3>
            <p className="text-muted-foreground">{sector.sub}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {sector.prompts.map((prompt) => (
              <Card key={`${sector.id}-${prompt.label}`} className="rounded-lg">
                <CardContent className="flex h-full flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-foreground">{prompt.label}</h4>
                    <CopyButton text={prompt.text} />
                  </div>
                  <p className="text-sm text-card-foreground leading-relaxed">{prompt.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">{sector.credit}</p>
        </div>
      </Container>
    </section>
  );
};

export default UseCases;
