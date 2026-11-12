import {
  Banknote,
  BookOpen,
  Bot,
  Cloud,
  Facebook,
  Hash,
  Headphones,
  Inbox,
  Instagram,
  LayoutGrid,
  LayoutList,
  LucideIcon,
  Mail,
  MailCheck,
  Monitor,
  Music2,
  Scale,
  Settings,
  ShieldCheck,
  SquareKanban,
  TrendingUp,
  X,
  Users,
} from "lucide-react";

export type NamedIcon = { name: string; icon: LucideIcon };

/** Business apps the agents connect to. */
export const businessApps: NamedIcon[] = [
  { name: "Salesforce", icon: Cloud },
  { name: "Monday.com", icon: LayoutList },
  { name: "Jira", icon: SquareKanban },
  { name: "Confluence", icon: BookOpen },
  { name: "ServiceNow", icon: Bot },
  { name: "Slack", icon: Hash },
  { name: "Google Workspace", icon: LayoutGrid },
];

export const emailApps: NamedIcon[] = [
  { name: "Outlook", icon: Mail },
  { name: "Gmail", icon: Inbox },
  { name: "Proton Mail", icon: MailCheck },
];

export const integrationApps: NamedIcon[] = [...businessApps, ...emailApps];

export const socialPlatforms: NamedIcon[] = [
  { name: "Instagram", icon: Instagram },
  { name: "Facebook", icon: Facebook },
  { name: "TikTok", icon: Music2 },
  { name: "X", icon: X },
];

export const departments: NamedIcon[] = [
  { name: "Sales", icon: TrendingUp },
  { name: "Ops", icon: Settings },
  { name: "Support", icon: Headphones },
  { name: "Legal", icon: Scale },
  { name: "Finance", icon: Banknote },
];

export type WorkflowStatus = "Running" | "Scheduled" | "Needs review";

/** Sample rows for the workflow status dashboard preview. */
export const sampleWorkflows: { department: string; icon: LucideIcon; name: string; status: WorkflowStatus }[] = [
  { department: "IT Operations", icon: Monitor, name: "Ticket triage & routing", status: "Running" },
  { department: "Finance", icon: Banknote, name: "Invoice matching", status: "Running" },
  { department: "HR", icon: Users, name: "New-starter onboarding", status: "Scheduled" },
  { department: "Compliance", icon: ShieldCheck, name: "Policy audit trail", status: "Running" },
  { department: "Operations", icon: Settings, name: "Weekly KPI report", status: "Scheduled" },
  { department: "Sales", icon: TrendingUp, name: "Lead follow-up drafts", status: "Needs review" },
];

/** Sample monthly workflow runs per department for the trend graph. */
export const sampleWorkflowTrend: { department: string; runs: number[] }[] = [
  { department: "IT Operations", runs: [18, 26, 31, 44, 52, 68] },
  { department: "Finance", runs: [10, 14, 25, 29, 41, 47] },
  { department: "HR", runs: [6, 9, 12, 20, 24, 33] },
];
export const trendMonths = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

/** Sample invoice pipeline for the invoice status preview. */
export const sampleInvoiceStatuses: { label: string; count: number; note: string }[] = [
  { label: "Paid", count: 42, note: "Settled and reconciled" },
  { label: "Pending", count: 9, note: "Sent, awaiting payment" },
  { label: "Outstanding", count: 5, note: "Past due date" },
  { label: "Aged", count: 2, note: "30+ days overdue" },
];

export const sampleCollaboration: { from: string; text: string }[] = [
  { from: "Finance", text: "Invoice batch approved — passing to Ops" },
  { from: "HR", text: "New starter added — IT access requested" },
  { from: "Sales", text: "Deal closed — onboarding workflow started" },
  { from: "Support", text: "Ticket resolved — knowledge base updated" },
];
