import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight, SquareCheck } from "lucide-react";
import { Link } from "react-router-dom";

const allPlansFeatures = [
  "Workflow mapping and ROI analysis",
  "Custom AI agents",
  "API integration",
  "Performance analytics",
  "Cross-app logic",
  "CRM, ERP and communications integrations",
  "Automation roadmap",
  "AI content generation and scheduling",
  "Latency tuning and accuracy scoring",
  "Scale architecture",
  "Hashtag and trend analysis",
  "DM and comment automation",
  "Cross-platform posting",
  "Workflow optimisation",
];

const customPlanFeatures = [
  "Scope-led service design",
  "Combine strategy, implementation and optimisation",
  "Flexible app integration",
];

const AllPlansWithCustom = () => {

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        <div className="flex flex-col items-center">
          <AnimateOnView once blur>
            <h2 className="h5">All plans</h2>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: Feature List */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {allPlansFeatures.map((feature, index) => (
                <AnimateOnView
                  key={index}
                  once
                  delay={index * 0.03}
                  className="flex items-center gap-2.5 py-5 border-b border-border/40 last:border-0 md:last:border-b"
                >
                  <SquareCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-lg">
                    {feature}
                  </span>
                </AnimateOnView>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Plan Card */}
          <div className="lg:col-span-4">
            <AnimateOnView once y={20} className="h-full">
              <Card className="h-full flex flex-col justify-between gap-2">
                <div>
                  <CardHeader className="space-y-4 pb-[30px]">
                    <p className="font-medium">
                      Premium
                    </p>
                    <h3 className="h4">
                      Let's Build Together
                    </h3>
                    <p className="">
                      Tell us your scope and we will shape an approach around your workflows and priorities.
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <p className="text-lg font-medium">
                        What's included
                      </p>
                      <ul className="space-y-3">
                        {customPlanFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <SquareCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                            <span className="text-lg">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="p-0">
                  <Button
                    variant="white"
                    asChild
                    className="w-full"
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimateOnView>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllPlansWithCustom;