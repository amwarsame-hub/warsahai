import Container from "@/components/container";
import { WorkflowStatusBoard } from "@/components/illustrations/dashboards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const MobileApp = () => {
  const features = [
    {
      title: "Manage Anywhere, Anytime",
      description: "Track automated workflows, review agent output, and check reports as they happen.",
    },
    {
      title: "Run Forever",
      description: "Latency tuning, accuracy scoring, and scale architecture as your requirements evolve.",
    },
  ];

  return (
    <section className="md:py-20 xl:py-32 py-12 bg-black" id="mobile-app">
      <Container className="flex flex-col md:flex-row justify-between md:gap-10 xl:gap-2xl gap-8">
        <StaggerContainer
          className="flex flex-col lg:max-w-[507px] pg-[120px]"
        >
          {/* Badge */}
          <AnimateOnView
            once
            blur
            className="md:mb-4 mb-1.5"
          >
            <Badge variant="secondary">
              Always On
            </Badge>
          </AnimateOnView>

          {/* Headline */}
          <AnimateOnView
            once
            blur
            delay={0.2}
            className="md:mb-6 mb-3"
          >
            <h2 className="h2 text-white">
              Your workflows, always in reach.
            </h2>
          </AnimateOnView>

          {/* Description */}
          <AnimateOnView
            once
            blur
            delay={0.4}
            className="md:mb-6 mb-3"
          >
            <p className="text-lg text-white">Monitor the agents WarsaAi builds for you, from anywhere.</p>
          </AnimateOnView>

          {/* Features List */}
          <StaggerContainer
            className="flex flex-col md:gap-6 gap-4 md:mb-10 mb-8 max-w-[459px]"
          >
            {features.map((feature, index) => (
              <AnimateOnView
                once
                blur
                delay={0.5 + index * 0.1}
                key={feature.title}
                className="flex flex-col md:flex-row md:gap-2 lg:gap-4 gap-1"
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnView>
            ))}
          </StaggerContainer>

          {/* CTA Button */}
          <AnimateOnView
            once
            delay={0.6}
            className="mb-6"
          >
            <Button asChild>
              <Link to="/features">
                Explore AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimateOnView>
        </StaggerContainer>

        {/* Right Section - Smartphone Mockup */}
        <AnimateOnView
          once
          blur
          delay={0.6}
          className="flex w-full items-center justify-center lg:justify-end"
        >
          <WorkflowStatusBoard className="w-full max-w-[434px]" />

        </AnimateOnView>
      </Container>
    </section>
  );
};

export default MobileApp;





