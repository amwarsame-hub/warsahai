import Layout from "@/components/layout";
import PageHero from "@/components/sections/shared/page-hero";
import DashboardPreview from "@/components/sections/workflows/dashboard-preview";
import WorkflowHub from "@/components/sections/workflows/hub";
import Platforms from "@/components/sections/workflows/platforms";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Workflows = () => {
  const description =
    "Design once, run forever. Connect every department to Claude AI — schedule automations, trigger actions, and let AI handle the repetitive work across your organisation.";

  return (
    <>
      <SEO title={`Reusable AI Workflows | ${appConfig.name}`} description={description} canonicalUrl="/workflows" />
      <Layout>
        <PageHero
          badges={["Claude AI · Workflow Automation", "Build once, run forever"]}
          title="Build Reusable Workflows"
          subtitle={description}
        >
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <Link to="/contact">
                Book an Efficiency Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="outline" asChild className="border-white/25 text-white hover:bg-white/10">
              <Link to="/workflows#hub">Explore Departments</Link>
            </Button>
          </AnimateOnView>
        </PageHero>
        <WorkflowHub />
        <Platforms />
        <DashboardPreview />
      </Layout>
    </>
  );
};

export default Workflows;
