import Container from "@/components/container";
import Layout from "@/components/layout";
import PrivacyContent from "@/components/sections/legal/privacy-content";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const PrivacyPolicyPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Privacy & Policy | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/legal/privacy-&-policy`
    };

    return (
        <>
            <SEO
                title={`Privacy & Policy | ${appConfig.name}`}
                description={`${appConfig.description}`}
                canonicalUrl={`/legal/privacy-&-policy`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title={`Privacy & Policy`}
                    description={`Privacy & Policy | WarsaAi - Legal`}
                />
                <section>
                    <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
                        {/* Main Content Column */}
                        <article className="max-w-[1030px] prose prose-lg">
                            <PrivacyContent />
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default PrivacyPolicyPage;