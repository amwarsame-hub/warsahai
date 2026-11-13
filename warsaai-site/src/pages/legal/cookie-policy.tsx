import Container from "@/components/container";
import Layout from "@/components/layout";
import CookieContent from "@/components/sections/legal/cookie-content";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const CookiePolicyPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Cookie Policy | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/legal/cookie-policy`
    };

    return (
        <>
            <SEO
                title={`Cookie Policy | ${appConfig.name}`}
                description={`${appConfig.description}`}
                canonicalUrl={`/legal/cookie-policy`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title={`Cookie Policy`}
                    description={`${appConfig.description}`}
                />
                <section>
                    <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
                        {/* Main Content Column */}
                        <article className="max-w-[1030px] prose prose-lg">
                            <CookieContent />
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default CookiePolicyPage;