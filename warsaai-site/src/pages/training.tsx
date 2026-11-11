import Layout from "@/components/layout";
import PageHero from "@/components/sections/shared/page-hero";
import HowItWorks from "@/components/sections/training/how-it-works";
import IncludedPrompts from "@/components/sections/training/included-prompts";
import Industries from "@/components/sections/training/industries";
import Packages from "@/components/sections/training/packages";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig, mailto } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const bookingLink = mailto(
  "Book a Live AI Training Session",
  "Hi Ahmed,\n\nI'd like to book a live AI training session for my team.\n\nIndustry: [YOUR INDUSTRY]\nTeam size: [NUMBER OF PEOPLE]\nPreferred format: [ON-SITE / VIRTUAL]\n\nThank you.",
);

const Training = () => {
  const description =
    "Live, hands-on AI training brought to your team — sessions built around your real workflows, documents and industry, with a prompt library and follow-up included.";

  return (
    <>
      <SEO title={`In-House AI Training | ${appConfig.name}`} description={description} canonicalUrl="/training" />
      <Layout>
        <PageHero
          badges={["Live, hands-on sessions", "On-site or virtual"]}
          title="In-House AI Training"
          subtitle="Wall Street-grade AI training brought to your team — built around your real workflows, documents, and industry. Get there smartly and compliantly, and see what your business looks like with AI built in."
        >
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <a href={bookingLink}>
                Book a Live Session
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="outline" asChild className="border-white/25 text-white hover:bg-white/10">
              <Link to="/training#packages">See Packages</Link>
            </Button>
          </AnimateOnView>
        </PageHero>
        <HowItWorks />
        <Industries />
        <IncludedPrompts />
        <Packages />
      </Layout>
    </>
  );
};

export default Training;
