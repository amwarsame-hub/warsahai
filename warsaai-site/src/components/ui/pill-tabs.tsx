import { cn } from "@/lib/utils";

interface PillTabsProps {
  /** Accessible name for the tab list. */
  label: string;
  tabs: { id: string; label: React.ReactNode }[];
  value: string;
  onChange: (id: string) => void;
  inverted?: boolean;
  className?: string;
}

const PillTabs = ({ label, tabs, value, onChange, inverted, className }: PillTabsProps) => {
  return (
    <div role="tablist" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {tabs.map((tab) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={cn(
              "inline-flex items-center gap-2 h-10 px-4 rounded-full border text-sm font-medium transition-colors",
              active
                ? "bg-primary border-primary text-primary-foreground"
                : inverted
                  ? "border-white/20 text-muted hover:border-white/50 hover:text-white"
                  : "bg-card border-border text-card-foreground hover:border-primary hover:text-primary",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default PillTabs;
