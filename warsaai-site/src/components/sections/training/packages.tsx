import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { trainingPackages } from "@/data/academy-content";
import { appConfig, mailto } from "@/utils/app-config";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

/** The package highlighted as the most popular choice. */
const FEATURED = "Full Day Workshop";

const Packages = () => {
  return (
    <section className="md:pb-20 xl:pb-28 pb-12 scroll-mt-24" id="packages">
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading
          eyebrow="Training packages"
          title="Pick the format that fits your team"
          description="Tell us your team size and goals and we'll confirm scope and pricing."
        />

        <AnimateOnView once y={40}>
          <ul className="overflow-hidden rounded-lg bg-card divide-y divide-border">
            {trainingPackages.map((item) => {
              const featured = item.name === FEATURED;
              return (
                <li
                  key={item.name}
                  className={cn(
                    "flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5",
                    featured && "bg-brand-sky/40",
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                      {featured && (
                        <span className="inline-flex h-6 items-center rounded-full bg-primary px-2.5 text-xs font-medium text-primary-foreground">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.text}</p>
                  </div>
                  <Button asChild variant={featured ? "default" : "white"} className="self-start sm:self-auto">
                    <a href={mailto(`Training Enquiry - ${item.name}`)}>
                      Enquire
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </li>
              );
            })}
          </ul>
        </AnimateOnView>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link to="/contact">
              Book a Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <a
            href={mailto("AI Training Enquiry")}
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" />
            {appConfig.contact.email}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Packages;
