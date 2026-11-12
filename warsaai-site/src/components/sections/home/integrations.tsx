import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { integrationApps, NamedIcon } from "@/data/integrations";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

interface LogoItem {
  app: NamedIcon;
  x: number;
  y: number;
  scrollThreshold: number;
}

// Centre points (in % of the viewport) for each app tile, kept clear of the heading.
const desktopPositions = [
  [18, 16], [50, 14], [82, 16], [32, 30], [68, 30],
  [32, 72], [68, 72], [18, 86], [50, 88], [82, 86],
];
const mobilePositions = [
  [27, 12], [73, 12], [27, 22], [73, 22], [50, 32],
  [50, 68], [27, 78], [73, 78], [27, 88], [73, 88],
];

const Logo = ({ logo, scrollYProgress }: { logo: LogoItem; scrollYProgress: MotionValue<number> }) => {
  const range = [logo.scrollThreshold - 0.15, logo.scrollThreshold];
  const opacity = useTransform(scrollYProgress, range, [0, 1], { clamp: true });
  const scale = useTransform(scrollYProgress, range, [0.8, 1], { clamp: true });
  const Icon = logo.app.icon;

  return (
    <motion.div className="absolute" style={{ left: `${logo.x}%`, top: `${logo.y}%`, opacity, scale }}>
      <div className="flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background py-1.5 pl-1.5 pr-3 text-xs font-semibold text-foreground shadow-sm sm:text-sm md:gap-3 md:py-2 md:pl-2 md:pr-6 md:text-lg">
        <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground md:size-11">
          <Icon className="size-4 md:size-5" />
        </span>
        {logo.app.name}
      </div>
    </motion.div>
  );
};

const Integrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logos = useMemo<LogoItem[]>(() => {
    const positions = isMobile ? mobilePositions : desktopPositions;
    // Reveal order is shuffled so the tiles appear scattered rather than row by row.
    const order = integrationApps.map((_, index) => index).sort(() => Math.random() - 0.5);
    return integrationApps.map((app, index) => ({
      app,
      x: positions[index % positions.length][0],
      y: positions[index % positions.length][1],
      scrollThreshold: 0.15 + (order[index] / integrationApps.length) * 0.65,
    }));
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative bg-card" id="integrations" style={{ height: "300vh" }}>
      {/* Sticky centered text container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <Container className="relative z-10">
          <AnimateOnView>
            <h2 className="h2 text-center max-w-[644px] mx-auto mb-4">
              Connect <span className="text-muted-foreground">any app you already use</span>
            </h2>
          </AnimateOnView>
        </Container>

        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {logos.map((logo) => (
            <Logo key={logo.app.name} logo={logo} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
