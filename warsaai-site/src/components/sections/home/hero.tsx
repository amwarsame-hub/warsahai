import { CollaborationFeed, IntegrationsBoard } from "@/components/illustrations/dashboards";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { useIsMobile } from "@/hooks/use-mobile";
import { appConfig } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../container";
import { Badge } from "../../ui/badge";

/* Visible keyboard focus (WCAG 2.1 AA). */
const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const Hero = ({ heroRef }: {
  heroRef?: React.RefObject<HTMLElement> | null
}) => {
  const isMobile = useIsMobile();
  
  return (
    <section ref={heroRef} className="relative min-h-screen bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px]">
      <Container className="relative z-10">
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-8">
          <AnimateOnView>
            <Badge variant="color">AI Strategy & Implementation · London</Badge>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Badge variant="color">
              <span>Built by <span className="text-white">{appConfig.name}</span></span>
            </Badge>
          </AnimateOnView>
        </StaggerContainer>

        <AnimateOnView blur className="text-center max-w-3xl mx-auto md:mb-6 mb-4" delay={0.2}>
          <h1 className="h1 text-white">
            Intelligent Ecosystems for 24/7 Operational Continuity
          </h1>
        </AnimateOnView>

        <AnimateOnView className="text-center max-w-2xl mx-auto lg:mb-10 md:mb-8 mb-6" delay={0.3}>
          <p className="text-lg text-muted">
            We design and build custom AI agents that connect the tools you already use, from CRM to finance to support, so routine work runs as governed, monitored workflows with a measurable return on investment (ROI).
          </p>
        </AnimateOnView>

        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimateOnView delay={0.4}>
            <Button asChild className={focusRing}>
              <Link to="/contact">
                {appConfig.cta.primary}
                <ArrowRight className="w-5 h-5 ml-1" aria-hidden="true" />
              </Link>
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="outline" asChild className={`border-white/25 text-white hover:bg-white/10 ${focusRing}`}>
              <Link to={appConfig.cta.briefHref}>{appConfig.cta.secondary}</Link>
            </Button>
          </AnimateOnView>
        </StaggerContainer>

        <AnimateOnView delay={0.55} className="mx-auto mt-4 mb-10 max-w-[560px] text-center">
          <p className="text-sm text-muted">{appConfig.cta.auditNote}</p>
          <Link
            to="/pricing"
            className={`mt-3 inline-block text-sm font-medium text-white underline underline-offset-4 hover:text-brand-sky ${focusRing}`}
          >
            See Services &amp; Pricing
          </Link>
        </AnimateOnView>

        {/* Product previews */}
        <div data-logo-anchor className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:items-start xl:gap-10 mt-8 xl:mt-10 max-w-[904px] mx-auto">
          <AnimateOnView delay={0.6} className={`relative z-10 w-full max-w-[330px] ${isMobile ? "" : "animate-float"}`}>
            <IntegrationsBoard limit={6} />
          </AnimateOnView>
          <AnimateOnView delay={0.7} className={`relative z-10 w-full max-w-[300px] ${isMobile ? "" : "animate-float-slow"}`}>
            <CollaborationFeed />
          </AnimateOnView>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
