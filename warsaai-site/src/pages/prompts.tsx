import Layout from "@/components/layout";
import PromptExchange from "@/components/sections/prompts/exchange";
import Tips from "@/components/sections/prompts/tips";
import UseCases from "@/components/sections/prompts/use-cases";
import PageHero from "@/components/sections/shared/page-hero";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Prompts = () => {
  const description =
    "Copy-ready Claude AI prompts organised by industry, the community prompt exchange, the CRAFT framework, ten power tips and the mistakes to avoid.";

  return (
    <>
      <SEO title={`Prompt Library | ${appConfig.name}`} description={description} canonicalUrl="/prompts" />
      <Layout>
        <PageHero
          badges={["Copy, customise, deploy", "Free to use"]}
          title="The Prompt Library"
          subtitle="Real prompts organised by industry, the techniques behind them, and the community exchange. Pick one, fill in the brackets, and put it to work today."
        >
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <Link to="/prompts#usecases">
                Browse by Industry
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="outline" asChild className="border-white/25 text-white hover:bg-white/10">
              <Link to="/prompts#tips">Tips &amp; Techniques</Link>
            </Button>
          </AnimateOnView>
        </PageHero>
        <UseCases />
        <PromptExchange />
        <Tips />
      </Layout>
    </>
  );
};

export default Prompts;
