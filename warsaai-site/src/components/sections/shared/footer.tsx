import Container from "@/components/container";
import NewsletterForm from "@/components/newsletter-form";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Link } from "react-router-dom";

const pagesLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Company", href: "/company" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const learnLinks = [
  { title: "Academy", href: "/academy" },
  { title: "Curriculum", href: "/academy#curriculum" },
  { title: "Saturday Sessions", href: "/academy#sessions" },
  { title: "Prompt Library", href: "/prompts" },
  { title: "Reusable Workflows", href: "/workflows" },
  { title: "In-House Training", href: "/training" },
];

const Footer = () => {

  return (
    <footer className="relative bg-black text-white pt-36 pb-8 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute bottom-0 left-0 pointer-events-none w-[533px] h-[601px] z-10">
        <img src="/images/common/footer-pattern.svg" alt="" />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div
            className="space-y-[60px] max-w-[310px]"
          >

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
          </div>

          <div className="max-w-[537px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 2: Pages */}
            <AnimateOnView
              once
              delay={0.1}
            >
              <h3 className="text-lg font-semibold mb-6">Pages</h3>
              <ul className="space-y-3">
                {pagesLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-muted hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnView>

            {/* Column 3: Utility & Newsletter */}
            <AnimateOnView
              once
              delay={0.2}
              className="space-y-8 lg:col-span-2"
            >
              {/* Utility Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Learn</h3>
                <ul className="space-y-3">
                  {learnLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-muted hover:text-white">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Stay Updated with WarsaAi
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights on AI strategy and implementation.
                </p>
                <NewsletterForm
                  buttonVariant="secondary"
                  buttonClassName="bg-white text-black hover:bg-white/90 px-4 h-10"
                  inputClassName="bg-foreground"
                  formClassName="flex"
                  gap="gap-1"
                />
              </div>
            </AnimateOnView>

          </div>

        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <AnimateOnView
          once
          delay={0.3}
          className="border-t border-[#2a2a2a] pt-8 mt-8"
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

