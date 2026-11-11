// Hand-maintained data behind the interactive Academy and Workflows widgets.

export const promptsOfTheDay: { text: string; level: string; category: string }[] = [
  {
    text: "You are a world-class business strategist. I'm going to describe my business in 2–3 sentences. Your job is to identify the single biggest leverage point I'm missing and explain exactly how I should act on it. Business: [INSERT]",
    level: "Intermediate",
    category: "Strategy",
  },
  {
    text: "Act as a professional copywriter. Write a cold outreach email for [PRODUCT/SERVICE] targeting [AUDIENCE]. It should have a subject line under 6 words, an opening hook, a single pain point, social proof in one sentence, and a clear call-to-action. Formal but warm tone.",
    level: "Beginner",
    category: "Sales",
  },
  {
    text: "You are a Socratic tutor. I want to understand [TOPIC] deeply. Ask me a series of probing questions, one at a time, to help me discover the answer myself. Start with the most foundational question.",
    level: "Advanced",
    category: "Learning",
  },
  {
    text: "I'm going to paste a block of text. Your job is to: 1) Summarise it in one sentence, 2) Extract the 3 most important facts, 3) Identify any assumptions the author is making, 4) Generate 2 follow-up questions I should research. Text: [PASTE]",
    level: "Beginner",
    category: "Research",
  },
  {
    text: "You are a world-class executive coach. I have a decision to make. I'll describe it. You will: a) reflect back what I said to confirm understanding, b) identify the hidden assumptions in my thinking, c) present the strongest case for each option, d) ask me one powerful question to help me decide. Decision: [INSERT]",
    level: "Advanced",
    category: "Decision Making",
  },
  {
    text: "Write 5 different versions of a LinkedIn hook (first 2 lines) for a post about [TOPIC]. Each version should use a different psychological trigger: curiosity, controversy, authority, vulnerability, and surprise. Label each one.",
    level: "Intermediate",
    category: "Content",
  },
  {
    text: "Act as a devil's advocate. I'm going to share my plan. Your job is to be critical, challenge every assumption, and find every possible flaw. Don't hold back — I want to stress-test this before I commit. Plan: [INSERT]",
    level: "Intermediate",
    category: "Critical Thinking",
  },
];

/** The Saturday running order. Dates are worked out from today, so the schedule never goes stale. */
export const sessionTopics: { module: string; topic: string; level: string }[] = [
  { module: "01", topic: "Intro to Claude & LLMs", level: "Beginner" },
  { module: "02", topic: "Anatomy of a Great Prompt", level: "Beginner" },
  { module: "03", topic: "Chain-of-Thought Prompting", level: "Intermediate" },
  { module: "04", topic: "Role & Persona Prompting", level: "Intermediate" },
  { module: "05", topic: "Sales & Content Applications", level: "Intermediate" },
  { module: "06", topic: "System Prompts & the API", level: "Advanced" },
];

export const academyStats: { value: string; label: string }[] = [
  { value: "12", label: "Modules" },
  { value: "100+", label: "Prompts" },
  { value: "Every Sat", label: "Live sessions" },
  { value: "0→Pro", label: "Framework" },
];

export const academyOutcomes: string[] = [
  "Learn the exact prompting frameworks that elite operators use daily",
  "Exchange proven prompts with a community of like-minded entrepreneurs",
  "Go from beginner to advanced through a structured, module-based curriculum",
  "Apply Claude AI to sales, content, operations, strategy, and more",
  "Get a new “Prompt of the Day” each session to build your library",
];

export interface WorkflowDepartment {
  id: string;
  title: string;
  flows: string[];
  apps: string[];
}

export const workflowDepartments: WorkflowDepartment[] = [
  {
    id: "finance",
    title: "Finance",
    flows: ["Monthly P&L report generation", "Invoice reconciliation & alerts", "Budget variance weekly digest", "Expense approval summaries"],
    apps: ["QuickBooks", "Xero", "Excel", "Sage", "Salesforce"],
  },
  {
    id: "hr",
    title: "Human Resources",
    flows: ["Employee onboarding sequence", "Leave request auto-drafting", "Performance review templates", "Job posting automation", "Exit interview summaries"],
    apps: ["BambooHR", "Slack", "LinkedIn", "Outlook", "Monday.com"],
  },
  {
    id: "ops",
    title: "Operations",
    flows: ["Supply chain exception alerts", "Vendor communication drafts", "Weekly project status reports", "KPI dashboard generation"],
    apps: ["Monday.com", "Asana", "Jira", "Notion", "Zapier"],
  },
  {
    id: "compliance",
    title: "Compliance",
    flows: ["Policy document review & flag", "Audit trail report generation", "Regulatory update digest", "Risk assessment summaries"],
    apps: ["SharePoint", "DocuSign", "Confluence", "Power BI", "Teams"],
  },
  {
    id: "training",
    title: "Training",
    flows: ["Course content generation", "Quiz & assessment creation", "Progress tracking emails", "Certificate & badge generation"],
    apps: ["Moodle", "Zoom", "Notion", "Google Drive", "Confluence"],
  },
  {
    id: "admin",
    title: "Admin",
    flows: ["Meeting agenda & minutes", "Email triage & draft replies", "Document filing & labelling", "Calendar scheduling assistant", "Weekly team digest"],
    apps: ["Google Workspace", "Outlook", "Calendly", "Salesforce", "Notion"],
  },
  {
    id: "security",
    title: "Security",
    flows: ["Incident report drafting", "Access request processing", "Weekly security briefings", "Threat analysis summaries"],
    apps: ["Microsoft 365", "Jira", "ServiceNow", "Confluence", "Sentinel"],
  },
];

export interface DashboardKpi {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: string;
  up: boolean;
  /** Show thousands as "84k". */
  compact?: boolean;
}

/** Illustrative figures for the dashboard preview — not live client data. */
export const dashboardViews: { id: string; title: string; kpis: DashboardKpi[] }[] = [
  {
    id: "overview",
    title: "Business Overview",
    kpis: [
      { label: "Contacts", value: 1847, delta: "▲ 12% vs prev period", up: true },
      { label: "New Leads", value: 243, delta: "▲ 24% vs prev period", up: true },
      { label: "Pipeline", value: 84200, prefix: "£", delta: "▲ 8% vs prev period", up: true, compact: true },
      { label: "Revenue", value: 32400, prefix: "£", delta: "▲ 31% vs prev period", up: true },
    ],
  },
  {
    id: "analytics",
    title: "Revenue Analytics",
    kpis: [
      { label: "Total Revenue", value: 96200, prefix: "£", delta: "▲ 31% YTD", up: true },
      { label: "Avg Deal Size", value: 2840, prefix: "£", delta: "▲ 18% vs Q3", up: true },
      { label: "Win Rate", value: 68, suffix: "%", delta: "▲ 5% vs prev", up: true },
      { label: "Churn Rate", value: 2.1, suffix: "%", delta: "▼ 0.4% improved", up: false },
    ],
  },
  {
    id: "crm",
    title: "Client CRM",
    kpis: [
      { label: "Total Contacts", value: 1847, delta: "▲ 89 this month", up: true },
      { label: "Active Clients", value: 312, delta: "▲ 14% vs prev", up: true },
      { label: "Follow-ups Due", value: 47, delta: "▼ 12 vs last week", up: false },
      { label: "Proposals Out", value: 23, delta: "▲ 8 new", up: true },
    ],
  },
  {
    id: "email",
    title: "Email Campaigns",
    kpis: [
      { label: "Emails Sent", value: 1240, delta: "▲ 22% this month", up: true },
      { label: "Open Rate", value: 41, suffix: "%", delta: "▲ 8% vs prev", up: true },
      { label: "Click Rate", value: 8.3, suffix: "%", delta: "▲ 2.1% vs prev", up: true },
      { label: "Conversions", value: 94, delta: "▲ 37% this month", up: true },
    ],
  },
  {
    id: "automations",
    title: "Automations",
    kpis: [
      { label: "Active Bots", value: 12, delta: "▲ 3 added", up: true },
      { label: "Tasks Run", value: 8420, delta: "▲ 1.2k this week", up: true },
      { label: "Time Saved", value: 94, suffix: "h", delta: "▲ 22h vs prev", up: true },
      { label: "Error Rate", value: 0.3, suffix: "%", delta: "▼ 0.1% improved", up: false },
    ],
  },
];

export const dashboardChart: Record<string, { label: string; current: number[]; prior: number[] }> = {
  "30d": {
    label: "30d",
    current: [55, 62, 59, 68, 72, 65, 70, 75, 78, 72],
    prior: [38, 42, 40, 45, 47, 43, 46, 49, 51, 48],
  },
  "90d": {
    label: "90d",
    current: [18, 22, 19, 31, 28, 25, 34, 30, 38, 35, 42, 39, 48, 45, 52, 49, 58, 55, 62, 59, 68, 72, 65, 70, 75, 78, 72, 80, 85, 82],
    prior: [12, 15, 13, 18, 17, 16, 20, 19, 23, 22, 26, 25, 29, 27, 32, 31, 36, 33, 38, 37, 42, 44, 40, 43, 47, 49, 45, 50, 53, 51],
  },
  "1y": {
    label: "1y",
    current: [10, 14, 12, 18, 16, 22, 20, 28, 26, 34, 38, 45, 42, 50, 55, 60, 58, 66, 70, 75, 73, 82, 85, 90, 88, 95, 100, 105, 102, 110, 115, 112, 120, 118, 125, 130, 128, 135, 140, 138, 145, 150, 148, 155, 160, 158, 165, 170, 168, 175, 180, 178, 185, 190, 188, 195, 200, 198, 205, 210],
    prior: [8, 10, 9, 13, 12, 16, 15, 20, 19, 24, 27, 32, 30, 36, 40, 44, 42, 48, 52, 55, 53, 60, 63, 67, 65, 71, 74, 78, 76, 82, 86, 83, 89, 87, 93, 97, 95, 101, 105, 103, 109, 113, 111, 117, 121, 119, 125, 129, 127, 133, 137, 135, 141, 145, 143, 149, 153, 151, 157, 161],
  },
};

export const dashboardFunnel: { label: string; pct: number }[] = [
  { label: "Visitors", pct: 100 },
  { label: "Leads", pct: 38 },
  { label: "Qualified", pct: 21 },
  { label: "Proposals", pct: 14 },
  { label: "Closed", pct: 7 },
];

export const dashboardContentEngine: { label: string; value: string }[] = [
  { label: "Posts published", value: "94" },
  { label: "Emails sent", value: "1,240" },
  { label: "Open rate", value: "41%" },
  { label: "Click rate", value: "8.3%" },
];

export const dashboardHighlights: string[] = [
  "Rolling 90-day revenue chart with period comparison",
  "KPI cards: contacts, leads, pipeline, revenue",
  "Content engine stats and conversion funnel",
];
