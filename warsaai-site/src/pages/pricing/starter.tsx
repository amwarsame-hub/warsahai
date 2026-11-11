import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const StarterPlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Starter | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/starter`
  };

  return (
    <>
      <SEO
        title={`Starter | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/starter"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Starter"
          description="A focused start with workflow mapping, ROI analysis and an automation roadmap."
        />
        <PlanDetails
          planName="Starter"
          price={{
            monthly: "Enquire",
            annually: "Enquire",
          }}
          description="A focused start with workflow mapping, ROI analysis and an automation roadmap."
          features={[
            "Workflow mapping",
            "ROI analysis",
            "Automation roadmap",
            "AI opportunity review",
            "Scope-led recommendations",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default StarterPlan;

