import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight, SquareCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanDetailsProps {
  planName: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
}

const PlanDetails = ({ planName, price, description, features }: PlanDetailsProps) => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container className="flex flex-col md:flex-row justify-between gap-12">
        {/* Pricing Card */}
        <div className="max-w-[402px] w-full md:sticky static top-24 self-start">
          <AnimateOnView once y={40} className="space-y-4">
            <Card className="p-0">
              <CardHeader className="space-y-4 px-6 pt-6 pb-[30px]">
                <CardTitle className="h4">{planName}</CardTitle>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-1">
                    <span className="h4 text-foreground">Enquire</span>
                    <span className="text-sm text-foreground">Tell us your scope</span>
                  </div>
                  <CardDescription className="">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="white"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    Book an Efficiency Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimateOnView>
        </div>

        {/* Plan Details */}
        <div className="max-w-[612px] w-full space-y-8">
          <AnimateOnView once blur>
            <div>
              <h2 className="h4 mb-4">About the {planName.toLowerCase()}</h2>
              <p className="text-lg text-foreground leading-relaxed">
                The {planName} brings together the services that fit your scope, from workflow mapping and AI implementation to optimisation and scaling.
              </p>
            </div>
          </AnimateOnView>

          {/* Features */}
          <AnimateOnView once blur delay={0.1}>
            <div>
              <h2 className="h4 mb-4">Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <SquareCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnView>

          {/* Why choose the plan */}
          <AnimateOnView once blur delay={0.2}>
            <div>
              <h2 className="h4 mb-4">Why choose the plan?</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Choose the {planName} to connect workflows and apps, automate cross-departmental work, and refine performance as your needs grow.
              </p>
            </div>
          </AnimateOnView>

          {/* Benefits of the plan */}
          <AnimateOnView once blur delay={0.3}>
            <div>
              <h2 className="h4 mb-4">Benefits of the plan</h2>
              <p className="text-lg text-foreground leading-relaxed">
                The {planName} combines practical AI strategy, custom implementation and ongoing optimisation to reduce manual work and connect your operations.
              </p>
            </div>
          </AnimateOnView>
        </div>
      </Container>
    </section>
  );
};

export default PlanDetails;

