/**
 * Platforms the workflows connect to. Logos are the CC0 Simple Icons set
 * (public/images/brands); platforms without one fall back to their initials.
 */
export type PlatformKind = "SaaS" | "PaaS";

const logo = (slug: string) => `/images/brands/${slug}.svg`;

const platforms: Record<string, { kind: PlatformKind; logo?: string }> = {
  Asana: { kind: "SaaS", logo: logo("asana") },
  AWS: { kind: "PaaS", logo: logo("amazonaws") },
  Azure: { kind: "PaaS", logo: logo("microsoftazure") },
  BambooHR: { kind: "SaaS", logo: logo("bamboo") },
  Calendly: { kind: "SaaS", logo: logo("calendly") },
  "Claude AI": { kind: "PaaS", logo: logo("claude") },
  Confluence: { kind: "SaaS", logo: logo("confluence") },
  DocuSign: { kind: "SaaS", logo: logo("docusign") },
  Excel: { kind: "SaaS", logo: logo("microsoftexcel") },
  Facebook: { kind: "SaaS", logo: logo("facebook") },
  Gmail: { kind: "SaaS", logo: logo("gmail") },
  "Google Drive": { kind: "SaaS", logo: logo("googledrive") },
  "Google Workspace": { kind: "SaaS", logo: logo("google") },
  Instagram: { kind: "SaaS", logo: logo("instagram") },
  Intercom: { kind: "SaaS", logo: logo("intercom") },
  Jira: { kind: "SaaS", logo: logo("jira") },
  LinkedIn: { kind: "SaaS", logo: logo("linkedin") },
  "Microsoft 365": { kind: "SaaS", logo: logo("microsoft") },
  "Monday.com": { kind: "SaaS" },
  Moodle: { kind: "SaaS", logo: logo("moodle") },
  Notion: { kind: "SaaS", logo: logo("notion") },
  Okta: { kind: "SaaS", logo: logo("okta") },
  Outlook: { kind: "SaaS", logo: logo("microsoftoutlook") },
  "Power BI": { kind: "SaaS", logo: logo("powerbi") },
  "Proton Mail": { kind: "SaaS", logo: logo("protonmail") },
  QuickBooks: { kind: "SaaS", logo: logo("quickbooks") },
  Sage: { kind: "SaaS", logo: logo("sage") },
  Salesforce: { kind: "SaaS", logo: logo("salesforce") },
  Sentinel: { kind: "SaaS" },
  ServiceNow: { kind: "PaaS" },
  SharePoint: { kind: "SaaS", logo: logo("microsoftsharepoint") },
  Slack: { kind: "SaaS", logo: logo("slack") },
  Teams: { kind: "SaaS", logo: logo("microsoftteams") },
  TikTok: { kind: "SaaS", logo: logo("tiktok") },
  WhatsApp: { kind: "SaaS", logo: logo("whatsapp") },
  X: { kind: "SaaS", logo: logo("x") },
  Xero: { kind: "SaaS", logo: logo("xero") },
  Zapier: { kind: "PaaS", logo: logo("zapier") },
  Zendesk: { kind: "SaaS", logo: logo("zendesk") },
  Zoom: { kind: "SaaS", logo: logo("zoom") },
};

export const getPlatform = (name: string) => ({
  name,
  kind: platforms[name]?.kind ?? ("SaaS" as PlatformKind),
  logo: platforms[name]?.logo,
});
