import Container from "@/components/container";
import { IntegrationsBoard, WorkflowStatusBoard, WorkflowTrendChart } from "@/components/illustrations/dashboards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BusinessAccount = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: "/images/icons/bank.svg",
      title: "AI Strategy & Auditing",
      badge: "Strategy",
      heading: "Start with the workflow",
      description: "Map manual work, assess ROI, and agree a practical automation roadmap.",
      visual: <WorkflowTrendChart />,
      link: "/contact",
    },
    {
      icon: "/images/icons/growth-arrow.svg",
      title: "Custom Implementation",
      badge: "Implementation",
      heading: "Build once, run forever",
      description: "Custom AI agents and integrations designed for set-it-and-forget-it reliability.",
      visual: <WorkflowStatusBoard className="w-full max-w-[460px]" />,
      link: "/contact",
    },
    {
      icon: "/images/icons/globe.svg",
      title: "Optimisation & Scaling",
      badge: "Scaling",
      heading: "Connect any app you already use",
      description: "Bridge CRM, ERP and comms tools, then tune latency, accuracy and scale.",
      visual: <IntegrationsBoard className="w-full max-w-[460px]" />,
      link: "/contact",
    },
  ];

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="business-account">
      <Container className="space-y-2xl">
        {/* Top Tabs Section */}
        <div className="flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 p-1 bg-[#F5F5F7] rounded-[16px]"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex items-center gap-4 p-[10px] rounded-[12px] transition-all duration-300 w-full justify-start
                    ${isActive
                      ? "bg-white shadow-sm text-foreground"
                      : "bg-transparent text-muted-foreground hover:bg-white/50"
                    }
                  `}
                >
                  <div className="shrink-0 w-10 h-10">
                    <img
                      src={tab.icon}
                      alt={tab.title}
                      width="40"
                      height="40"
                      loading="lazy" />
                  </div>
                  <span className="font-medium">{tab.title}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex flex-col md:max-w-[366px]">
            <AnimatePresence mode="wait">
              <StaggerContainer
                key={activeTab}
                className="flex flex-col"
              >
                <AnimateOnView
                  once
                  blur
                  className="md:mb-4 mb-1.5">
                  <Badge variant="default" className="text-sm">
                    {tabs[activeTab].badge}
                  </Badge>
                </AnimateOnView>

                <AnimateOnView
                  once
                  blur
                  delay={0.2}
                >
                  <h2 className="h4 md:mb-5 mb-3">
                    {tabs[activeTab].heading}
                  </h2>
                </AnimateOnView>

                <AnimateOnView
                  once
                  blur
                  delay={0.4}
                >
                  <p className="text-lg md:mb-10 mb-4">
                    {tabs[activeTab].description}
                  </p>
                </AnimateOnView>

                <AnimateOnView
                  once
                  delay={0.6}
                >
                  <Button asChild>
                    <Link to={tabs[activeTab].link}>
                      Book an Efficiency Audit
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </AnimateOnView>
              </StaggerContainer>
            </AnimatePresence>
          </div>

          {/* Right Side - Card Illustration */}
          <div className="relative flex items-center justify-center md:min-h-[524px] p-4 max-w-[691px] w-full bg-card rounded-4xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="flex w-full justify-center md:p-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {tabs[activeTab].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessAccount;

