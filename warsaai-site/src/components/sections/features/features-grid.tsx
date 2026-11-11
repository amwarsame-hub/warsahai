import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const chartData = [
  {
    icon: "/images/icons/shield-green.svg",
    title: "AI Strategy & Auditing",
    description: "Map workflows, analyse ROI and build a clear automation roadmap.",
    image: "/images/features/chart-1.webp"
  },
  {
    icon: "/images/icons/timeline.svg",
    title: "Custom Implementation",
    description: "Build AI agents, integrate APIs and connect cross-app logic.",
    image: "/images/features/chart-2.webp"
  },
  {
    icon: "/images/icons/growth.svg",
    title: "Optimisation & Scaling",
    description: "Tune latency, score accuracy and design for scale.",
    image: "/images/features/chart-3.webp"
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
            chartData.map((item, index) => (
              <AnimateOnView once y={40} delay={0.2}>
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
                    <div className="flex justify-end">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="aspect-[379/352] max-w-[379px] w-full h-full object-cover" />
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

