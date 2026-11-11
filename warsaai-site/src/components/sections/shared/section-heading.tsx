import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional button or link shown beside the heading on wide screens. */
  action?: React.ReactNode;
  /** Use on dark (black) sections. */
  inverted?: boolean;
  size?: "h2" | "h3";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, action, inverted, size = "h2", className }: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 md:gap-8", className)}>
      <div className="max-w-[760px]">
        {eyebrow && (
          <AnimateOnView once blur className="md:mb-4 mb-1.5">
            <Badge variant={inverted ? "color" : "default"}>{eyebrow}</Badge>
          </AnimateOnView>
        )}
        <AnimateOnView once blur delay={0.1}>
          <h2 className={cn(size, inverted && "text-white")}>{title}</h2>
        </AnimateOnView>
        {description && (
          <AnimateOnView once delay={0.2}>
            <p className={cn("text-lg mt-4 max-w-[640px]", inverted ? "text-muted" : "text-muted-foreground")}>
              {description}
            </p>
          </AnimateOnView>
        )}
      </div>
      {action && (
        <AnimateOnView once delay={0.3} className="shrink-0">
          {action}
        </AnimateOnView>
      )}
    </div>
  );
};

export default SectionHeading;
