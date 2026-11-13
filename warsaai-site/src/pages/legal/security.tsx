import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalContent from "@/components/sections/legal/legal-content";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const SecurityPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Security & Confidentiality | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/security`
    };

    return (
        <>
            <SEO
                title={`Security & Confidentiality | ${appConfig.name}`}
                description={`${appConfig.description}`}
                canonicalUrl={`/security`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title={`Security & Confidentiality`}
                    description={`Security & Confidentiality | WarsaAi - Legal`}
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

export default SecurityPage;