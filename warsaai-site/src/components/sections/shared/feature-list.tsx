import Container from "@/components/container";
import SectionHeading from "@/components/sections/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { cn } from "@/lib/utils";

interface FeatureListProps {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  items: { title: string; text: string }[];
  /** Render on a black band instead of the page background. */
  inverted?: boolean;
  columns?: 3 | 4;
}

/** A titled grid of short "capability" cards. */
const FeatureList = ({ id, eyebrow, title, description, action, items, inverted, columns = 3 }: FeatureListProps) => {
  return (
    <section className={cn("md:py-20 xl:py-28 py-12 scroll-mt-24", inverted && "bg-black")} id={id}>
      <Container className="space-y-8 md:space-y-12">
        <SectionHeading inverted={inverted} eyebrow={eyebrow} title={title} description={description} action={action} />

        <div className={cn("grid gap-4 sm:grid-cols-2", columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          {items.map((item, index) => (
            <AnimateOnView key={item.title} once y={30} delay={(index % columns) * 0.05}>
              {inverted ? (
                <div className="glass-card h-full p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              ) : (
                <Card className="h-full rounded-lg">
                  <CardContent>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              )}
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureList;
