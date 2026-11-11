import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LevelBadge from "@/components/ui/level-badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import PillTabs from "@/components/ui/pill-tabs";
import { curriculum } from "@/data/academy-content";
import { ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const [tabId, setTabId] = useState(curriculum[0].id);
  const tab = curriculum.find((item) => item.id === tabId) ?? curriculum[0];

  return (
    <section className="md:py-20 xl:py-28 py-12 scroll-mt-24" id="curriculum">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="What you'll learn"
          title="Full Curriculum"
          description="Twelve structured modules taking you from your very first Claude conversation to advanced autonomous workflows."
        />

        <PillTabs
          label="Curriculum tracks"
          tabs={curriculum.map(({ id, label }) => ({ id, label }))}
          value={tab.id}
          onChange={setTabId}
        />

        <div role="tabpanel" aria-label={tab.label} className="space-y-6">
          {tab.intro && (
            <div className="flex items-start gap-3 rounded-xl bg-brand-sky/40 p-5">
              <BookOpen className="size-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-card-foreground">{tab.intro}</p>
            </div>
          )}

          {tab.modules.length > 0 && (
            <Accordion
              key={tab.id}
              type="single"
              collapsible
              defaultValue={tab.modules[0].num}
              className="w-full space-y-3"
            >
              {tab.modules.map((module) => (
                <AccordionItem key={module.num} value={module.num} className="bg-card rounded-xl border-b-0 px-5 py-4">
                  <AccordionTrigger className="py-0 text-left gap-4">
                    <span className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="font-heading text-sm text-muted-foreground tabular-nums">{module.num}</span>
                      <span className="flex-1 min-w-[12rem] text-foreground">{module.title}</span>
                      <LevelBadge level={module.level} />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-4">
                    <ul className="grid gap-2 sm:grid-cols-2 text-card-foreground">
                      {module.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {tab.cards.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tab.cards.map((card, index) => (
                <AnimateOnView key={`${tab.id}-${card.title}`} once y={30} delay={index * 0.05}>
                  <Card className="h-full rounded-lg">
                    <CardContent className="flex h-full flex-col gap-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-2xl" aria-hidden="true">{card.icon}</span>
                        {card.tag && <span className="text-xs font-medium text-primary">{card.tag}</span>}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                    </CardContent>
                  </Card>
                </AnimateOnView>
              ))}
            </div>
          )}

          {tab.id === "inhouse" && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl bg-brand-frost p-6">
              <div>
                <p className="text-lg text-foreground">Ready to train your team?</p>
                <p className="text-sm text-muted-foreground">
                  Book a free 30-minute discovery call — we'll build a session around your exact workflows.
                </p>
              </div>
              <Button asChild>
                <Link to="/training">
                  See In-House Training
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Curriculum;
