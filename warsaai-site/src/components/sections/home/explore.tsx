import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowUpRight, GraduationCap, LibraryBig, LucideIcon, Presentation, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const destinations: { href: string; icon: LucideIcon; title: string; text: string; meta: string }[] = [
  {
    href: "/academy",
    icon: GraduationCap,
    title: "Academy",
    text: "From Zero to Pro with Claude AI — twelve modules, live every Saturday.",
    meta: "12 modules",
  },
  {
    href: "/prompts",
    icon: LibraryBig,
    title: "Prompt Library",
    text: "Copy-ready prompts by industry, the CRAFT framework and ten power tips.",
    meta: "100+ prompts",
  },
  {
    href: "/workflows",
    icon: Workflow,
    title: "Reusable Workflows",
    text: "Design once, run forever. See what each department can put on autopilot.",
    meta: "7 departments",
  },
  {
    href: "/training",
    icon: Presentation,
    title: "In-House Training",
    text: "Live, hands-on sessions built around your team's real workflows.",
    meta: "12 industries",
  },
];

const Explore = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="explore">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        <SectionHeading
          eyebrow="Learn and build"
          title={
            <>
              Master Claude AI, <span className="text-muted-foreground">then put it to work</span>
            </>
          }
          description="Alongside done-for-you AI services, the Saturday community, prompt library and team training help you build the skills in-house."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <AnimateOnView key={destination.href} once y={40} delay={index * 0.1}>
              <Link to={destination.href} className="group block h-full">
                <Card className="flex h-full flex-col justify-between gap-10 rounded-lg transition-colors group-hover:bg-brand-sky/40">
                  <CardContent className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand-sky text-primary">
                      <destination.icon className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </CardContent>
                  <CardContent>
                    <p className="text-sm text-primary mb-2">{destination.meta}</p>
                    <h3 className="h5 mb-2">{destination.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{destination.text}</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Explore;
