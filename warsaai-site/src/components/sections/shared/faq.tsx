import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const linkClass = "underline underline-offset-4 hover:text-foreground";
const brand = appConfig.name;

// `text` is the plain answer used for the FAQPage schema; `body` is the on-page version
// when it needs lists or links. Keep the two saying the same thing.
type Faq = { question: string; text: string; body?: ReactNode };

const faqs: Faq[] = [
  {
    question: `What is ${brand}?`,
    text: `${brand} is a London-based AI studio. We help businesses save time by automating manual work, building custom AI agents and connecting the tools you already use.`,
  },
  {
    question: `What does "people first AI" mean at ${brand}?`,
    text: `${brand} AI implementation can help your business build AI around your people. We learn how your teams work and what they need, then set up Claude with custom skills, connected tools and simple workflows that fit naturally into each team's day.`,
  },
  {
    question: `Who is ${brand} for?`,
    text: `${brand} is for businesses of every size and every department. Whether you're an entrepreneur or part of a team in IT, Sales, Operations, Support, Legal or Finance, we help you spend less time on repetitive work and more time on what really matters to you and your customers.`,
  },
  {
    question: "What services do you offer?",
    text: "Our core services are AI Strategy & Auditing, Custom Implementation, Optimisation & Scaling, and Social Media Campaigns & Automation. You can find more details on our Services page. Don't see exactly what you need? Just let us know. We're always happy to talk through a custom solution built around you.",
    body: (
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
    question: "How can AI and automation help my business work more efficiently?",
    text: `${brand} AI implementation can help your teams cut the time they spend on routine tasks like updating systems, preparing reports and moving information between tools. We build Claude skills and automations that handle these steps reliably in the background, so work moves faster and stays consistent.`,
  },
  {
    question: "How does AI help teams collaborate better?",
    text: `${brand} AI implementation can help your teams stay connected and work from the same information. We connect Claude to tools like Jira, Confluence, ServiceNow and Salesforce, so it can summarise meetings, keep documents and tickets up to date and share updates with the right people across every team.`,
  },
  {
    question: `Which tools can ${brand} connect?`,
    text: "We can connect almost any tool that supports secure integration with AI and automation, always in a way that's safe and compliant with your business guidelines. This includes CRM, ERP and communication tools such as Salesforce, Monday.com, Jira, Slack and Google Workspace. Through custom integrations and cross-app logic, we help your tools work together seamlessly, so your team spends less time switching between systems.",
  },
  {
    question: "Do you build agents from scratch?",
    text: `Yes, we do. ${brand} designs and builds custom AI agents around your specific needs, made to run reliably day to day, with ongoing maintenance and support included. As your business grows and your needs change, we keep refining your agents through latency tuning, accuracy scoring and scalable architecture, so they keep up with you. Already have AI agents or automations in place? We can help with those too. We'll review what you have, improve how it performs, and extend or rebuild it where needed, so you get more value from the investment you've already made.`,
    body: (
      <>
        <p>
          Yes, we do. {brand} designs and builds custom AI agents around your specific needs, made to run reliably day
          to day, with ongoing maintenance and support included. As your business grows and your needs change, we keep
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
    question: "How do you make sure AI is used responsibly?",
    text: `${brand} AI implementation can help your business use AI safely and with confidence. Every Claude workflow we build keeps people in control, with clear checks on AI output, protection for client and company data, and approval steps for the tasks that need them. This draws on nearly 20 years of technology support in financial services.`,
  },
  {
    question: "How will AI help my team grow?",
    text: `${brand} AI implementation can help your people build new skills and confidence with AI. Through hands-on Claude training on real tasks, teams learn to create their own prompts, skills and workflows. Staff who learn and become confident using and working with AI become more valuable to the business.`,
  },
  {
    question: "Is there training available?",
    text: `Yes! We run "From Zero to Pro with Claude AI", a 12-module course with 100+ ready-to-use prompts, live Saturday sessions and free videos and guides. It's designed for every level, so whether you're brand new to AI or looking to sharpen your skills, you'll feel right at home.`,
  },
  {
    question: "Is the training suitable for everyone?",
    text: `${brand} AI implementation can help every member of your team, whatever their experience. Our Claude training is practical and friendly, from first steps with AI to advanced automation for IT and support specialists, with ongoing support at each stage.`,
  },
  {
    question: "How do we get started?",
    text: `${brand} AI implementation can help your business from the very first conversation. Book a free 30-minute call with us to talk about your business, your teams and the goals you're working towards. We'll listen, get to know how you work today and explore together where Claude could make the biggest difference for everyone. There's no obligation to sign up. It's simply a friendly, open conversation so you can decide what's right for your business. Email: ${appConfig.contact.email}. Phone: ${appConfig.contact.phone}. Location: London, UK.`,
    body: (
      <>
        <p>
          {brand} AI implementation can help your business from the very first conversation. Book a free 30-minute call
          with us to talk about your business, your teams and the goals you're working towards. We'll listen, get to
          know how you work today and explore together where Claude could make the biggest difference for everyone.
          There's no obligation to sign up. It's simply a friendly, open conversation so you can decide what's right for
          your business.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>
            Email:{" "}
            <a href={`mailto:${appConfig.contact.email}`} className={linkClass}>
              {appConfig.contact.email}
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href={`tel:${appConfig.contact.phone.replace(/\s+/g, "")}`} className={linkClass}>
              {appConfig.contact.phone}
            </a>
          </li>
          <li>Location: London, UK</li>
        </ul>
      </>
    ),
  },
];

// FAQPage structured data built from the same list the page renders. Attach it to one page only
// (currently /faq): the FAQ section also appears on the pricing pages, and Google expects a
// repeated FAQ to be marked up once across the site.
export const faqJsonLd = {
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.text },
  })),
};

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
                      {faq.body ?? <p>{faq.text}</p>}
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
