import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const ProPlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Growth | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/pro`
  };

  return (
    <>
      <SEO
        title={`Growth | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/pro"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Growth"
          description="For teams ready to implement AI agents, API integrations and cross-app logic."
        />
        <PlanDetails
          planName="Growth"
          price={{
            monthly: "Enquire",
            annually: "Enquire",
          }}
          description="For teams ready to implement AI agents, API integrations and cross-app logic."
          features={[
            "Everything in Starter",
            "AI agents and API integration",
            "Cross-app logic",
            "Latency tuning and accuracy scoring",
            "Scale architecture",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default ProPlan;

