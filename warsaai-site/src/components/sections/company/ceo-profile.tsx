import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const CEOProfile = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="flex sm:flex-row flex-col gap-10 md:gap-20 justify-center sm:items-start items-center">
                {/* Left Column - CEO Image */}
                <AnimateOnView delay={0.2} className="w-full max-w-[444px]">
                    <div className="w-full aspect-[406/417] max-w-[444px] mx-auto lg:mx-0 rounded-3xl overflow-hidden relative bg-gradient-to-br from-primary/20 to-primary/5">
                        {/* The source file has a transparent margin around the portrait; these offsets crop to the photo itself. */}
                        <img
                            src="/images/company/ahmed-warsame.png"
                            alt="Ahmed Warsame, founder of WarsaAi"
                            className="absolute max-w-none w-[247.54%] left-[-65.52%] top-[-19.66%]"
                        />
                    </div>
                </AnimateOnView>

                {/* Right Column - CEO Information */}
                <StaggerContainer className="max-w-[507px] w-full sm:text-left text-center">
                    <AnimateOnView blur>
                        <Badge className="mb-[14px]">
                            Founder
                        </Badge>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <h2 className="h5 text-foreground mb-4">
                            Ahmed Warsame — Founder & AI Specialist
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2}>
                        <div className="space-y-4 md:mb-[30px] mb-6">
                            <p>
                                Ahmed Warsame is the founder of WarsaAi, an AI studio based in London, UK. He brings around 20 years of front-office experience at Goldman Sachs, BNP Paribas and Rothesay, supporting electronic trading across FX, Equities, Fixed Income and Rates.
                            </p>
                            <p>
                                Ahmed led client onboarding and technology infrastructure at institutional scale. Now a certified AI Implementation Specialist (2026), he builds custom AI agents and integrations that connect departments and reduce manual work.
                            </p>
                            <p>
                                Contact Ahmed: ahmed@warsaai.com · +44 7450 209184 · London, UK · @warsaa_ai
                            </p>
                        </div>
                        <div className="max-w-[191px] w-full sm:mx-0 mx-auto">
                            <img
                                src="/images/company/signature.svg"
                                alt="Decorative signature illustration"
                                className="w-full h-full object-contain"
                                loading="lazy" />
                        </div>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default CEOProfile;

