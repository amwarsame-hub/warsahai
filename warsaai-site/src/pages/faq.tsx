import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import FAQ, { faqJsonLd } from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const FaqPage = () => {
  const title = `FAQs | ${appConfig.name}`;
  const description = `Answers to common questions about ${appConfig.name}: people-first AI, automation, Claude training, responsible AI and how to get started.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
        url: `${appConfig.url}/faq`,
      },
      faqJsonLd,
    ],
  };

  return (
    <>
      <SEO title={title} description={description} canonicalUrl="/faq" ogType="website" jsonLd={jsonLd} />
      <Layout>
        <LegalHero
          title="FAQs"
          description={`Everything you need to know about working with ${appConfig.name}, from people-first AI to getting started.`}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default FaqPage;
