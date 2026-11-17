import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const linkClass = "underline underline-offset-4 hover:text-foreground";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "How does an engagement start?",
    answer: (
      <p>
        It all starts with a friendly, no-pressure conversation. We take the time to listen and understand your goals,
        your current challenges and what success looks like for you. Together, we'll shape the approach that fits your
        business best, and we'll guide you through every next step clearly and simply, with no unnecessary jargon or
        complexity.
      </p>
    ),
  },
  {
    question: "Which tools can WarsaAi connect?",
    answer: (
      <p>
        We can connect almost any tool that supports secure integration with AI and automation, always in a way that's
        safe and compliant with your business guidelines. This includes CRM, ERP and communication tools such as
        Salesforce, Monday.com, Jira, Slack and Google Workspace. Through custom integrations and cross-app logic, we
        help your tools work together seamlessly, so your team spends less time switching between systems.
      </p>
    ),
  },
  {
    question: "What services do you offer?",
    answer: (
      <>
        <p>Our core services are:</p>
        <ul className="list-disc pl-5 my-3 space-y-1">
          <li>AI Strategy &amp; Auditing</li>
          <li>Custom Implementation</li>
          <li>Optimisation &amp; Scaling</li>
          <li>Social Media Campaigns &amp; Automation</li>
        </ul>
        <p>
          You can find more details on our{" "}
          <Link to="/features" className={linkClass}>
            Services page
          </Link>
          . Don't see exactly what you need? Just let us know. We're always happy to talk through a custom solution
          built around you.
        </p>
      </>
    ),
  },
  {
    question: "Do you build agents from scratch?",
    answer: (
      <>
        <p>
          Yes, we do. WarsaAi designs and builds custom AI agents around your specific needs, made to run reliably day to
          day, with ongoing maintenance and support included. As your business grows and your needs change, we keep
          refining your agents through latency tuning, accuracy scoring and scalable architecture, so they keep up with
          you.
        </p>
        <p className="mt-3">
          Already have AI agents or automations in place? We can help with those too. We'll review what you have,
          improve how it performs, and extend or rebuild it where needed, so you get more value from the investment
          you've already made.
        </p>
      </>
    ),
  },
  {
    question: "Who is WarsaAi for?",
    answer: (
      <p>
        WarsaAi is for businesses of every size and every department. Whether you're an entrepreneur or part of a team
        in IT, Sales, Operations, Support, Legal or Finance, we help you spend less time on repetitive work and more time
        on what really matters to you and your customers.
      </p>
    ),
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        <p>Getting started is easy. Book an efficiency audit with us and we'll take it from there:</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>
            Email:{" "}
            <a href="mailto:inquiry@warsaai.com" className={linkClass}>
              inquiry@warsaai.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+447450209184" className={linkClass}>
              +44 7450 209184
            </a>
          </li>
          <li>Location: London, UK</li>
        </ul>
      </>
    ),
  },
  {
    question: "Is there training available?",
    answer: (
      <p>
        Yes! We run "From Zero to Pro with Claude AI", a 12-module course with 100+ ready-to-use prompts, live Saturday
        sessions and free videos and guides. It's designed for every level, so whether you're brand new to AI or looking
        to sharpen your skills, you'll feel right at home.
      </p>
    ),
  },
];

const FAQ = () => {

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-[507px] md:sticky static top-24 self-start">
            <AnimateOnView once blur>
              <Badge className="md:mb-4 mb-1.5">FAQs</Badge>
              <h2 className="h2 md:mb-6 mb-3">Frequently asked questions</h2>
              <Button asChild>
                <Link to="/contact">
                  Book an Efficiency Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimateOnView>
          </div>
          <div className="md:max-w-[612px]">
            <AnimateOnView once y={40}>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl p-5">
                    <AccordionTrigger className="text-left py-0">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 data-[state=closed]:pt-0 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnView>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

