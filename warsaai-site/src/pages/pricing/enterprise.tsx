import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const EnterprisePlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Premium | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/enterprise`
  };

  return (
    <>
      <SEO
        title={`Premium | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/enterprise"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Premium"
          description="For organisations scaling and refining custom AI systems across their operations."
        />
        <PlanDetails
          planName="Premium"
          price={{
            monthly: "Enquire",
            annually: "Enquire",
          }}
          description="For organisations scaling and refining custom AI systems across their operations."
          features={[
            "Everything in Growth",
            "Social content generation and scheduling",
            "Performance analytics and trend insights",
            "Cross-platform posting and engagement automation",
            "Optimisation and scaling",
            "Custom AI implementation",
            "Workflow and ROI review",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default EnterprisePlan;

