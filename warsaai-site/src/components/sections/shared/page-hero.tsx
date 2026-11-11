import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

interface PageHeroProps {
  badges?: string[];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Call-to-action buttons, laid out in a row under the headline. */
  children?: React.ReactNode;
  /** Extra content under the buttons (stats strip, prompt box…). */
  footer?: React.ReactNode;
}

const PageHero = ({ badges = [], title, subtitle, children, footer }: PageHeroProps) => {
  return (
    <section className="relative bg-black overflow-hidden banner-top-padding pb-16 md:pb-20 lg:pb-24">
      <Container className="relative z-10">
        {badges.length > 0 && (
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6 md:mb-8">
            {badges.map((badge, index) => (
              <AnimateOnView key={badge} blur delay={index * 0.1}>
                <Badge variant="color">{badge}</Badge>
              </AnimateOnView>
            ))}
          </StaggerContainer>
        )}

        <AnimateOnView blur delay={0.2} className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="h1 text-white">{title}</h1>
        </AnimateOnView>

        {subtitle && (
          <AnimateOnView delay={0.3} className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-lg text-muted">{subtitle}</p>
          </AnimateOnView>
        )}

        {children && (
          <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {children}
          </StaggerContainer>
        )}

        {footer && (
          <AnimateOnView delay={0.5} className="mt-12 md:mt-16">
            {footer}
          </AnimateOnView>
        )}
      </Container>
    </section>
  );
};

export default PageHero;
