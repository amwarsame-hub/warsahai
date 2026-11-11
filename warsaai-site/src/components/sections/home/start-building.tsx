import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig, mailto } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const starters: { label: string; prefill: string }[] = [
  { label: "Startup", prefill: "Startup idea: " },
  { label: "Marketing", prefill: "Marketing plan: " },
  { label: "Automation", prefill: "Automation workflow: " },
  { label: "AI Agents", prefill: "AI Agent for: " },
];

const StartBuilding = () => {
  const [idea, setIdea] = useState("");
  const input = useRef<HTMLTextAreaElement>(null);

  const prefill = (text: string) => {
    setIdea(text);
    input.current?.focus();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = mailto(
      `${appConfig.name} — Start Building`,
      idea.trim() || "Hi Ahmed, I want to start building with AI.",
    );
  };

  return (
    <section className="bg-black md:py-20 xl:py-28 py-12" id="start-building">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <AnimateOnView once blur>
            <h2 className="h3 text-white">What are you building?</h2>
          </AnimateOnView>
          <AnimateOnView once delay={0.1}>
            <p className="text-lg text-muted mt-4">
              Describe it in a sentence or two and it goes straight to Ahmed's inbox.
            </p>
          </AnimateOnView>

          <AnimateOnView once y={40} delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card mt-8 p-4 md:p-5 text-left">
              <label htmlFor="start-building-idea" className="sr-only">
                What are you building?
              </label>
              <textarea
                id="start-building-idea"
                ref={input}
                rows={3}
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                placeholder="A support agent that answers from our help centre and logs tickets in Jira…"
                className="w-full resize-none bg-transparent text-white placeholder:text-muted-foreground focus:outline-none"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {starters.map((starter) => (
                    <button
                      key={starter.label}
                      type="button"
                      onClick={() => prefill(starter.prefill)}
                      className="h-8 rounded-full border border-white/20 px-3 text-sm text-muted transition-colors hover:border-white/50 hover:text-white"
                    >
                      {starter.label}
                    </button>
                  ))}
                </div>
                <Button type="submit">
                  Start Building
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </AnimateOnView>

          <p className="text-sm text-muted-foreground mt-5">
            Built by Ahmed Warsame · 20 years in financial technology and operations
          </p>
        </div>
      </Container>
    </section>
  );
};

export default StartBuilding;
