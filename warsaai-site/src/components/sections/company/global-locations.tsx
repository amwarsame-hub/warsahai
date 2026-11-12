import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const GlobalLocations = () => {
    const locations = [
        {
            title: "London Base",
            location: "London, UK",
            description: "Ahmed Warsame builds WarsaAi from London. Contact him to discuss your workflows and AI requirements."
        },
        {
            title: "Remote Delivery",
            location: "Connected workflows",
            description: "Custom AI strategy and implementation delivered remotely, connecting your existing apps and departments."
        },
        {
            title: "Markets Experience",
            location: "FX and Equities",
            description: "Around 20 years of front-office experience across Goldman Sachs, BNP Paribas and Rothesay, spanning multiple markets."
        },
        {
            title: "Managed File Transfer (MFT)",
            location: "Secure, governed file exchange",
            description: "A governed platform for reliably transferring files — especially large or sensitive data — between systems, users and organisations. It improves security, automation, visibility and compliance compared to traditional methods like FTP and HTTP."
        },
        {
            title: "Cloud Services & Migration",
            location: "On-prem to cloud",
            description: "Cloud services and migrations from on-premises infrastructure to the cloud, including system-to-system moves across Azure and AWS."
        },
        {
            title: "Institutional Experience",
            location: "Fixed Income and Rates",
            description: "Electronic trading, client onboarding and technology infrastructure at institutional scale."
        }
    ];

    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                <StaggerContainer className="text-center max-w-3xl mx-auto">
                    <AnimateOnView blur>
                        <Badge>
                            Where we work
                        </Badge>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <h2 className="h2 text-foreground mb-6">
                            London based. Remote delivery.
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2}>
                        <p className="max-w-[560px] mx-auto">
                            WarsaAi is Ahmed Warsame's London-based studio, with remote delivery. His background spans electronic trading across FX, Equities, Fixed Income and Rates, alongside client onboarding and technology infrastructure at institutional scale.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                {/* Location Cards Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 max-w-[822px] w-full mx-auto">
                    {locations.map((location, index) => (
                        <AnimateOnView key={index} delay={0.1 + index * 0.1} className="h-full">
                            <Card className="h-full rounded-3xl">
                                <CardHeader className="mb-6">
                                    <h3 className="h5 text-foreground mb-2">
                                        {location.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-lg font-medium mb-3">
                                        {location.location}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {location.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </AnimateOnView>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default GlobalLocations;

