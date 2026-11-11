import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { appConfig, mailto } from "@/utils/app-config";
import { ArrowRight } from "lucide-react";

const Register = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    window.location.href = mailto(
      `${appConfig.name} — Workshop Registration`,
      `Hi,\n\nI would like to register for the next available ${appConfig.name} Saturday session.\n\nEmail: ${email}\n\nPlease send me the registration details.\n\nThank you.`,
    );
  };

  return (
    <section className="md:pb-20 xl:pb-28 pb-12 scroll-mt-24" id="register">
      <Container>
        <AnimateOnView once y={40} className="rounded-lg bg-brand-frost px-6 py-10 md:px-12 md:py-14 text-center">
          <h2 className="h3">Secure Your Spot</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-[560px] mx-auto">
            Classes fill up fast. Enter your email and we'll send you a registration link for the next available
            Saturday session.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 mx-auto flex max-w-[480px] flex-col sm:flex-row gap-2">
            <label htmlFor="register-email" className="sr-only">
              Your email address
            </label>
            <Input
              id="register-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="h-[46px] bg-card"
            />
            <Button type="submit">
              Register
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-5">
            Every Saturday · Limited to 20 seats · Free intro session available
          </p>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default Register;
