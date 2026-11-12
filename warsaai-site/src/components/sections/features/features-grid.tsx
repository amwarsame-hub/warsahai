import Container from "@/components/container";
import { AuditTrailArt, BuildOnceArt, ConnectAnyAppArt } from "@/components/illustrations/pillars";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const chartData = [
  {
    icon: "/images/icons/shield-green.svg",
    title: "AI Strategy & Auditing",
    description: "Map workflows, analyse ROI and build a clear automation roadmap.",
    Art: AuditTrailArt
  },
  {
    icon: "/images/icons/timeline.svg",
    title: "Custom Implementation",
    description: "Build AI agents, integrate APIs and connect cross-app logic.",
    Art: ConnectAnyAppArt
  },
  {
    icon: "/images/icons/growth.svg",
    title: "Optimisation & Scaling",
    description: "Tune latency, score accuracy and design for scale.",
    Art: BuildOnceArt
  }
]

const FeaturesGrid = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">

        <AnimateOnView once blur className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2">
            Four services to connect your tools, automate work and scale with confidence.
          </h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            chartData.map((item) => (
              <AnimateOnView key={item.title} once y={40} delay={0.2}>
                <Card className="h-full border-border border overflow-hidden shadow-sm p-0">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-10 h-10 object-cover mb-4"
                        loading="lazy" />
                      <h3 className="h5 mb-[14px]">
                        {item.title}
                      </h3>
                      <p className="">
                        {item.description}
                      </p>
                    </div>
                    <div className="mx-6 mb-6 flex h-56 items-center justify-center rounded-2xl bg-brand-sky/30 p-6">
                      <item.Art />
                    </div>

                  </CardContent>
                </Card>
              </AnimateOnView>
            ))
          }
        </div>
      </Container>
    </section>
  );
};

export default FeaturesGrid;

