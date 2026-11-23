import Container from "@/components/container";
import NewsletterForm from "@/components/newsletter-form";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig } from "@/utils/app-config";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "X", href: appConfig.social.x, icon: Twitter },
  { label: "LinkedIn", href: appConfig.social.linkedin, icon: Linkedin },
  { label: "YouTube", href: appConfig.social.youtube, icon: Youtube },
  { label: "Facebook", href: appConfig.social.facebook, icon: Facebook },
  { label: "Instagram", href: appConfig.social.instagram, icon: Instagram },
];

type FooterLink = { title: string; href?: string; external?: boolean; badge?: string };
type FooterGroup = { heading: string; links: FooterLink[]; more?: FooterLink };

const linkGroups: FooterGroup[] = [
  {
    heading: "Product",
    links: [
      { title: "Services", href: "/features" },
      { title: "How We Build", href: "/#how-we-build" },
      { title: "Pricing", href: "/pricing" },
      { title: "Book an Efficiency Audit", href: "/contact" },
    ],
    more: { title: "Explore more", href: "/#explore" },
  },
  {
    heading: "Training",
    links: [
      { title: "Curriculum", href: "/academy#curriculum" },
      { title: "Saturday Sessions", href: "/academy#sessions" },
      { title: "In-House Training", href: "/training" },
    ],
  },
  {
    heading: "Automation",
    links: [
      { title: "Reusable Workflows", href: "/workflows" },
      { title: "Prompt Library", href: "/prompts" },
      { title: "Integrations", href: "/#integrations" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "FAQ", href: "/faq" },
      { title: "Academy", href: "/academy" },
      // Placeholder until the community space launches.
      { title: "Community", href: "/coming-soon", badge: "Coming soon" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "About us", href: "/company" },
      { title: "Security", href: "/security" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms-&-condition" },
    ],
  },
  {
    heading: "Contacts",
    links: [
      { title: "Contact us", href: "/contact" },
      { title: appConfig.contact.email, href: `mailto:${appConfig.contact.email}`, external: true },
      { title: appConfig.contact.phone, href: `tel:${appConfig.contact.phone.replace(/\s+/g, "")}`, external: true },
      { title: "London, UK" },
    ],
  },
];

const linkClass = "text-muted hover:text-white transition-colors [overflow-wrap:anywhere]";

const FooterItem = ({ link }: { link: FooterLink }) => {
  const label = (
    <>
      {link.title}
      {link.badge && (
        <span className="ml-1.5 inline-block rounded-full bg-primary/20 px-2 py-px align-[2px] text-[11px] font-medium text-primary">
          {link.badge}
        </span>
      )}
    </>
  );
  if (!link.href) return <span className="text-muted">{label}</span>;
  if (link.external) return <a href={link.href} className={linkClass}>{label}</a>;
  return <Link to={link.href} className={linkClass}>{label}</Link>;
};

const Footer = () => {

  return (
    <footer className="relative bg-black text-white pt-36 pb-8 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute bottom-0 left-0 pointer-events-none w-[533px] h-[601px] z-10">
        <img src="/images/common/footer-pattern.svg" alt="" />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-12">
          <div className="space-y-12 max-w-[310px] shrink-0">
            <div>
              <Link to="/">
                <img className="mb-6 h-16 w-auto" src="/images/common/logo.png" alt="WarsaAi" />
              </Link>
              <p className="text-muted">
                Custom AI agents and integrations for entrepreneurs and connected departments.
              </p>
            </div>

            <div className="space-y-2.5">
              <p className="text-white">
                Headquarters:
              </p>
              <p className="text-muted">
                London, <br />United Kingdom
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-white">Follow us on</p>
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WarsaAi on ${label}`}
                      className="grid size-9 place-items-center rounded-lg bg-[#2a2a2a] text-white transition-colors hover:bg-[#3a3a3a]"
                    >
                      <Icon className="size-4" />
                    </a>
                  ) : (
                    <span
                      key={label}
                      title={`${label} link coming soon`}
                      aria-hidden="true"
                      className="grid size-9 place-items-center rounded-lg bg-[#2a2a2a] text-white/40"
                    >
                      <Icon className="size-4" />
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Grouped link columns */}
          <AnimateOnView once delay={0.1} className="flex-1 lg:max-w-[860px]">
            <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
              {linkGroups.map((group) => (
                <div key={group.heading} className="min-w-0">
                  <h3 className="text-lg font-bold text-white mb-5">{group.heading}</h3>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.title}>
                        <FooterItem link={link} />
                      </li>
                    ))}
                  </ul>
                  {group.more?.href && (
                    <Link
                      to={group.more.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-white transition-colors"
                    >
                      {group.more.title} <ArrowRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </AnimateOnView>
        </div>

        {/* Newsletter strip */}
        <AnimateOnView
          once
          delay={0.2}
          className="border-t border-[#2a2a2a] py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-semibold mb-1">
              Stay Updated with WarsaAi
            </h3>
            <p className="text-sm text-muted-foreground">
              Get the latest insights on AI strategy and implementation.
            </p>
          </div>
          <div className="w-full md:max-w-[380px]">
            <NewsletterForm
              buttonVariant="secondary"
              buttonClassName="bg-white text-black hover:bg-white/90 px-4 h-10"
              inputClassName="bg-foreground"
              formClassName="flex"
              gap="gap-1"
            />
          </div>
        </AnimateOnView>

        {/* Bottom Bar: Copyright and Legal Links */}
        <AnimateOnView
          once
          delay={0.3}
          className="border-t border-[#2a2a2a] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} WarsaAi. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-&-condition"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/security"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Security &amp; Confidentiality
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </footer>
  );
};

export default Footer;
