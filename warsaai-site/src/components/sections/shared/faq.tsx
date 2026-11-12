import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is WarsaAi?",
    answer: "WarsaAi is Ahmed Warsame's AI studio in London. It maps manual workflows, builds custom AI agents and integrations, and connects your existing apps so AI carries the operational load across departments.",
  },
  {
    question: "How does an engagement start?",
    answer: "With an efficiency audit. WarsaAi maps the manual work, assesses ROI, and agrees a practical automation roadmap before anything is built.",
  },
  {
    question: "Which tools can WarsaAi connect?",
    answer: "CRM, ERP and comms tools including Salesforce, Monday.com, Jira, Slack and Google Workspace, through custom integrations and cross-app logic.",
  },
  {
    question: "What are the service offerings?",
    answer: "AI Strategy & Auditing, Custom Implementation, Optimisation & Scaling, and Social Media Campaign & Automation.",
  },
  {
    question: "Do you build agents from scratch?",
    answer: "WarsaAi builds custom AI agents designed for set-it-and-forget-it reliability, then refines them with latency tuning, accuracy scoring and scale architecture as your requirements evolve.",
  },
  {
    question: "Who is WarsaAi for?",
    answer: "All businesses and all departments. Entrepreneurs and connected departments - IT, Sales, Ops, Support, Legal and Finance - that want to stop trading time for money.",
  },
  {
    question: "How do I get started?",
    answer: "Book an efficiency audit with Ahmed directly: ahmed@warsaai.com, +44 7450 209184, London, UK.",
  },
  {
    question: "Is there training?",
    answer: "Yes. WarsaAi runs 'From Zero to Pro with Claude AI', a 12-module course with 100+ prompts, live Saturday sessions, and free videos and guides.",
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

