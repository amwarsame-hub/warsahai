import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {

    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                {/* Section Title */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
                    <StaggerContainer className="flex-1 max-w-[683px]">
                        <AnimateOnView
                            once
                            blur
                            className="flex items-center gap-2 md:mb-4 mb-1.5"
                        >
                            <Badge>
                                Our Vision
                            </Badge>
                        </AnimateOnView>

                        <AnimateOnView
                            once
                            blur
                            delay={0.2}
                            className="h2"
                        >
                            Let AI carry the operational load
                        </AnimateOnView>
                    </StaggerContainer>

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
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <AnimateOnView
                        once
                        blur
                        className="max-w-[465px] w-full md:sticky static top-[60px] self-start"
                    >
                        <img
                            src="/images/company/vision.webp"
                            alt="Our Vision"
                            loading="lazy" />
                    </AnimateOnView>
                    <AnimateOnView className="space-y-8 max-w-[715px] w-full">
                        <div className="space-y-4">
                            <h3 className="h5">
                                Build Once, Run Forever
                            </h3>
                            <p>
                                Business growth should not mean more manual work. WarsaAi builds custom AI agents designed to run, adapt and deliver results without constant babysitting. Set-it-and-forget-it reliability is the design goal.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="h5">
                                Cross-Department AI
                            </h3>
                            <p>
                                Disconnected apps and data silos slow work down. WarsaAi builds the connective tissue: one intelligence layer connecting Sales, Ops, Support, Legal and Finance.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Connect Any App
                            </h3>
                            <p>
                                Your existing tools should work together. WarsaAi connects CRM, ERP and comms tools, including Salesforce, Monday.com, Jira, Slack and Google Workspace, through custom integrations and cross-app logic.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Make Space for Growth
                            </h3>
                            <p>
                                Stop trading time for money. Let AI carry the operational load. Automate repetitive workflows so entrepreneurs and departments can focus on work that needs human judgement.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Map Before Building
                            </h3>
                            <p>
                                Start with workflow mapping, ROI analysis and an automation roadmap. Identify where manual handoffs and disconnected systems create unnecessary work before choosing what to build.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Optimise with Purpose
                            </h3>
                            <p>
                                Implementation is the starting point. Latency tuning, accuracy scoring and scale architecture help refine how your AI systems work as your requirements evolve.
                            </p>
                        </div>
                    </AnimateOnView>
                </div>
            </Container>
        </section>
    );
};

export default Vision;