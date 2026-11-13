import Layout from "@/components/layout";
import Features from "@/components/sections/home/features";
import Hero from "@/components/sections/home/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { lazy, Suspense, useRef } from "react";

// Lazy load below-the-fold components for code splitting
const Blog = lazy(() => import("@/components/sections/home/blog"));
const BusinessAccount = lazy(() => import("@/components/sections/home/business-account"));
const CEOProfile = lazy(() => import("@/components/sections/company/ceo-profile"));
const CoreFeatures = lazy(() => import("@/components/sections/home/core-features"));
const Explore = lazy(() => import("@/components/sections/home/explore"));
const Integrations = lazy(() => import("@/components/sections/home/integrations"));
const MobileApp = lazy(() => import("@/components/sections/home/mobile-app"));
const Operations = lazy(() => import("@/components/sections/home/operations"));
const Pillars = lazy(() => import("@/components/sections/home/pillars"));
const SecurityCompliance = lazy(() => import("@/components/sections/home/security-compliance"));
const StartBuilding = lazy(() => import("@/components/sections/home/start-building"));

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const metaTitle = "WarsaAi | Intelligent Ecosystems That Work While You Sleep";
  const metaDescription = "WarsaAi builds custom AI agents and integrations that connect your apps, automate cross-departmental workflows, and let AI carry the operational load.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": appConfig.name,
    "description": appConfig.description,
    "url": appConfig.url,
    "logo": `${appConfig.url}${appConfig.logo}`,
    "image": appConfig.ogImage,
    "areaServed": "Worldwide",
    "serviceType": "AI Strategy and Implementation",
    "knowsAbout": [
      "AI Strategy & Auditing",
      "Custom AI Implementation",
      "Optimisation & Scaling",
      "Social Media Campaign & Automation",
      "Claude AI Training"
    ]
  };

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalUrl="/"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <Hero heroRef={heroRef} />
        <Features heroRef={heroRef} />
        <Suspense fallback={null}>
          <Pillars />
        </Suspense>
        <Suspense fallback={null}>
          <CEOProfile />
        </Suspense>
        <Suspense fallback={null}>
          <Operations />
        </Suspense>
        <Suspense fallback={null}>
          <CoreFeatures />
        </Suspense>
        <Suspense fallback={null}>
          <MobileApp />
        </Suspense>
        <Suspense fallback={null}>
          <BusinessAccount />
        </Suspense>
        <Suspense fallback={null}>
          <Integrations />
        </Suspense>
        <Suspense fallback={null}>
          <SecurityCompliance />
        </Suspense>
        <Suspense fallback={null}>
          <Explore />
        </Suspense>
        <Suspense fallback={null}>
          <StartBuilding />
        </Suspense>
        <Suspense fallback={null}>
          <Blog />
        </Suspense>
      </Layout>
    </>
  );
};

export default Home;
