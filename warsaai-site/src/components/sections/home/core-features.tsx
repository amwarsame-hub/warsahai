import Container from "@/components/container";
import { InvoiceActions, InvoiceStatuses } from "@/components/illustrations/dashboards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CoreFeatures = () => {

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="core-features">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
          <div className="flex-1 max-w-[683px]">
            <AnimateOnView
              once
              blur
              className="md:mb-4 mb-1.5"
            >
              <Badge>
                Core Features
              </Badge>
            </AnimateOnView>

            <AnimateOnView
              once
              blur
              delay={0.2}
              className="h2 md:mb-6 mb-3"
            >
              Intelligent Ecosystems That Work While You Sleep.
            </AnimateOnView>

            <AnimateOnView
              once
              delay={0.3}
              className="text-lg"
            >
              Custom AI agents that connect your apps, automate cross-departmental workflows, and let AI carry the operational load.
            </AnimateOnView>
          </div>

          <AnimateOnView
            once
            delay={0.4}
          >
            <Button asChild>
              <Link to="/contact">
                Book an Efficiency Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimateOnView>
        </div>

        <div>
          {/* Big Card */}
          <AnimateOnView
            once
            y={40}
            delay={0.5}
            className="rounded-2xl md:rounded-4xl p-6 md:p-12 lg:p-16 mb-4 overflow-hidden bg-[url('/images/homepage/core-feature.webp')] bg-cover bg-center md:min-h-[597px] relative grid"
          >
            <div className="flex flex-col justify-between items-start h-full max-w-[427px]">
              <StaggerContainer>
                <AnimateOnView
                  once
                  blur
                  delay={0.3}
                >
                  <h4 className="h4 text-white mb-3 max-w-[400px]">
                    Build Once, Run Forever.
                  </h4>
                </AnimateOnView>
                <AnimateOnView
                  once
                  delay={0.4}
                  blur
                >
                  <p className="text-muted mb-8 leading-relaxed">
                    Custom AI agents designed for set-it-and-forget-it reliability, without constant babysitting.
                  </p>
                </AnimateOnView>
              </StaggerContainer>
              <AnimateOnView
                once
                delay={0.5}
              >
                <Button asChild>
                  <Link to="/features">
                    Explore AI Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </AnimateOnView>
            </div>
            <AnimateOnView
              once
              delay={0.6}
              className="max-w-[300px] md:max-w-[414px] w-full aspect-[414/309] md:absolute right-10 bottom-10 mt-10 md:mt-0">
              <img
                src="/images/homepage/core-feature-stat.webp"
                alt="Automation preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </AnimateOnView>
          </AnimateOnView>

          {/* Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

            <AnimateOnView
              once
              y={40}
              delay={0.6}
              className="lg:col-span-7 col-span-1"
            >
              <Card className="h-full">
                <CardHeader className="flex justify-center items-center md:py-16 py-4 md:px-8 px-4">
                  <InvoiceActions />
                </CardHeader>
                <CardContent className="mt-6 p-2 max-w-[420px]">
                  <h3 className="h5 mb-2">
                    Smart Invoice Controls
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create an invoice, send a request for invoice, and chase reminders — drafted, routed and tracked by your AI agents.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnView>

            <AnimateOnView
              once
              y={40}
              delay={0.7}
              className="lg:col-span-5 col-span-1"
            >
              <Card className="h-full p-0">
                <CardHeader className="flex justify-center items-center md:py-16 py-4 md:px-8 px-4">
                  <InvoiceStatuses />
                </CardHeader>
                <CardContent className="pt-6 pb-10 px-6 max-w-[420px]">
                  <h3 className="h5 mb-2">
                    Seamless Invoice Statuses
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    See every invoice at a glance — paid, pending, outstanding and aged — updated automatically as payments land.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnView>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreFeatures;

