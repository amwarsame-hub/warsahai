import global from "@/assets/lottie/global-accessibility.json";
import security from "@/assets/lottie/security-first.json";
import payment from "@/assets/lottie/swap-your-payment.json";
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import LottieComponent from "lottie-react";

// The dev server's prebundled build hands back the module namespace instead of
// the component, so unwrap it before rendering.
type LottieType = typeof LottieComponent;
const Lottie: LottieType =
  (LottieComponent as unknown as { default?: LottieType }).default ?? LottieComponent;

const Values = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                {/* Section Header */}
                <AnimateOnView className="text-center">
                    <h2 className="h2">
                        Build Once, Run Forever<br />Let AI carry the operational load
                    </h2>
                </AnimateOnView>

                {/* Values Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

                    <AnimateOnView delay={0.1} className="h-full">
                        <div aria-hidden="true">
                            <Lottie animationData={security} loop={true} />
                        </div>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2} className="h-full">
                        <div aria-hidden="true">
                            <Lottie animationData={payment} loop={true} />
                        </div>
                    </AnimateOnView>

                    <AnimateOnView delay={0.3} className="h-full">
                        <div aria-hidden="true">
                            <Lottie animationData={global} loop={true} />
                        </div>
                    </AnimateOnView>

                </StaggerContainer>
            </Container>
        </section>
    );
};

export default Values;
