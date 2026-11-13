import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalContent from "@/components/sections/legal/legal-content";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const TermsAndConditionPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Terms & Conditions | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/legal/terms-&-condition`
    };

    return (
        <>
            <SEO
                title={`Terms & Conditions | ${appConfig.name}`}
                description={appConfig.description}
                canonicalUrl={`/legal/terms-&-condition`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title={`Terms & Conditions`}
                    description={`Terms & Conditions | WarsaAi - Legal`}
                />
                <section>

                    <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
                        {/* Main Content Column */}
                        <article className="max-w-[1030px] prose prose-lg">
                            <LegalContent />
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default TermsAndConditionPage;