import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight, SquareCheck } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: {
      monthly: "Enquire",
      annually: "Enquire",
    },
    description: "A focused starting point for workflow mapping, ROI analysis and an automation roadmap.",
    features: [
      "Workflow mapping and automation roadmap",
      "ROI analysis",
      "AI opportunity review",
      "Custom implementation planning",
      "Scope-led recommendations",
    ],
    buttonVariant: "white",
    buttonLink: "/pricing/starter",
  },
  {
    name: "Growth",
    price: {
      monthly: "Enquire",
      annually: "Enquire",
    },
    description: "For teams ready to implement AI agents, API integrations and cross-app logic.",
    features: [
      "Everything in Starter",
      "AI agents and API integration",
      "Cross-app logic",
      "Latency tuning and accuracy scoring",
      "Scale architecture",
    ],
    buttonVariant: "default",
    highlighted: true,
    buttonLink: "/pricing/pro",
  },
  {
    name: "Premium",
    price: {
      monthly: "Enquire",
      annually: "Enquire",
    },
    description: "For organisations scaling and refining custom AI systems across their operations.",
    features: [
      "Everything in Growth",
      "Social content generation and scheduling",
      "Performance analytics and trend insights",
      "Cross-platform posting and engagement automation",
      "Optimisation and scaling",
      "Custom AI implementation",
      "Workflow and ROI review",
    ],
    buttonVariant: "white",
    buttonLink: "/pricing/enterprise",
  },
];

const PricingPlans = () => {



  return (
    <section className="relative mt-[-383px] z-20 md:pb-20 xl:pb-32 pb-12">
      <Container>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <AnimateOnView
              key={plan.name}
              once
              y={40}
              delay={index * 0.1}
            >
              <Card className={`h-full flex flex-col transition-all bg-white p-0 ${plan.highlighted ? "border-primary border-2 shadow-lg" : "md:border-0 border border-border"}`}>
                <CardHeader className="space-y-4 px-6 pt-6 pb-[30px]">
                  <CardTitle className="h4">{plan.name}</CardTitle>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-1">
                      <span className="h4 text-foreground">Enquire</span>
                      <span className="text-sm text-foreground">Tell us your scope</span>
                    </div>
                    <CardDescription className="">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="bg-card p-6 flex-1 flex flex-col justify-between md:rounded-sm rounded">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Features</h3>
                    <ul className="space-y-[14px] flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2.5">
                          <SquareCheck className="w-5 h-5 mt-1 text-primary shrink-0" />
                          <span className="md:text-lg text-base text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant={plan.buttonVariant as "default" | "white"}
                    className="w-full"
                    asChild
                  >
                    <Link to={plan.buttonLink}>
                      Book an Efficiency Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;

