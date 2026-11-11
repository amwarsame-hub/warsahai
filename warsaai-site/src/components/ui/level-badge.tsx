import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  Beginner: "bg-brand-frost text-brand-steel",
  "All Levels": "bg-brand-frost text-brand-steel",
  Intermediate: "bg-brand-sky text-brand-cobalt",
  Advanced: "bg-brand-ink text-brand-white",
};

const LevelBadge = ({ level, className }: { level: string; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center h-6 px-2.5 rounded-full text-xs font-medium whitespace-nowrap",
      styles[level] ?? styles.Beginner,
      className,
    )}
  >
    {level}
  </span>
);

export default LevelBadge;
