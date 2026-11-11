import Layout from "@/components/layout";
import CoreFeatures from "@/components/sections/features/core-features";
import FeaturesGrid from "@/components/sections/features/features-grid";
import FeaturesHero from "@/components/sections/features/hero";
import FeatureList from "@/components/sections/shared/feature-list";
import SEO from "@/components/seo";
import { emailService, peaceOfMind, socialService } from "@/data/academy-content";
import { appConfig } from "@/utils/app-config";

const Features = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Features | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/features`
  };

  return (
    <>
      <SEO
        title={`Features | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/features"
        ogType="website"
        jsonLd={jsonLd}
      />

      <Layout>
        <FeaturesHero />
        <FeaturesGrid />
        <CoreFeatures />
        <FeatureList
          id="social-media"
          eyebrow="Social media"
          title={socialService.intro.title}
          description={socialService.intro.text}
          items={socialService.features}
          columns={4}
        />
        <FeatureList
          inverted
          id="email-outreach"
          eyebrow="Email outreach"
          title={emailService.intro.title}
          description={emailService.intro.text}
          items={emailService.features}
          columns={4}
        />
        <FeatureList
          id="peace-of-mind"
          eyebrow="Technical peace of mind"
          title="No black boxes"
          description="Businesses are often wary of AI because it feels like a black box. Every system we build addresses this head-on — full transparency, precision logic, and humans always in control."
          items={peaceOfMind}
        />
      </Layout>
    </>
  );
};

export default Features;

