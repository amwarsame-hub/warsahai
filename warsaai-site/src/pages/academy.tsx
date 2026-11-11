import Layout from "@/components/layout";
import AcademyAbout from "@/components/sections/academy/about";
import Curriculum from "@/components/sections/academy/curriculum";
import PromptOfTheDay from "@/components/sections/academy/prompt-of-the-day";
import Register from "@/components/sections/academy/register";
import Sessions from "@/components/sections/academy/sessions";
import PageHero from "@/components/sections/shared/page-hero";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { academyStats } from "@/data/academy-interactive";
import { appConfig } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Academy = () => {
  const title = `Academy — From Zero to Pro with Claude AI | ${appConfig.name}`;
  const description =
    "A premium learning community for entrepreneurs: twelve structured modules, 100+ prompts and live Saturday sessions that take you from your first Claude conversation to advanced autonomous workflows.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonicalUrl="/academy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "From Zero to Pro with Claude AI",
          description,
          provider: { "@type": "Organization", name: appConfig.name, url: appConfig.url },
        }}
      />
      <Layout>
        <PageHero
          badges={["The Master Claude Collective", "Live every Saturday"]}
          title="Where Visionaries Engineer Growth"
          subtitle="Forget generic AI prompts and surface-level hacks. Master Claude AI isn't just a course — it's a premium ecosystem for the entrepreneur who views AI not as a toy, but as a force multiplier."
          footer={
            <dl className="mx-auto grid max-w-[904px] grid-cols-2 md:grid-cols-4 gap-4">
              {academyStats.map((stat) => (
                <div key={stat.label} className="glass-card px-4 py-5 text-center">
                  <dd className="h4 text-white">{stat.value}</dd>
                  <dt className="text-sm text-muted mt-1">{stat.label}</dt>
                </div>
              ))}
            </dl>
          }
        >
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <Link to="/academy#register">
                Join the Next Session
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="outline" asChild className="border-white/25 text-white hover:bg-white/10">
              <Link to="/academy#curriculum">Explore Curriculum</Link>
            </Button>
          </AnimateOnView>
        </PageHero>
        <AcademyAbout />
        <PromptOfTheDay />
        <Curriculum />
        <Sessions />
        <Register />
      </Layout>
    </>
  );
};

export default Academy;
