/**
 * Blog posts shipped with the site code instead of the database.
 *
 * Articles shipped with the code (reviewed on www.test.warsaai.com first) rather than
 * stored in the Supabase blog table. Database posts are shown alongside them.
 *
 * ROLLBACK: set LOCAL_POSTS_ENABLED to false (or empty LOCAL_POSTS) and rebuild.
 * The blog then shows database posts only, exactly as before.
 */
import type { BlogPost } from "@/lib/services/blog-service";

export const LOCAL_POSTS_ENABLED = true;

const AI_STRATEGY_GAP_HTML = `
<p><em>Lessons from Goldman Sachs, JPMorgan, Deloitte, McKinsey, MIT, OpenAI and Anthropic.</em></p>

<h2>The gap, in numbers</h2>
<ul>
  <li><strong>Deloitte (2026):</strong> only about a quarter of organisations have moved 40% or more of their AI pilots into production. 84% have not redesigned jobs, and only 21% have mature oversight for autonomous systems.</li>
  <li><strong>McKinsey (2025):</strong> 88% of organisations now use AI regularly, but two-thirds are still stuck in experimentation or pilots. Only about 6% are "high performers", defined as companies where AI drives 5% or more of EBIT.</li>
  <li><strong>MIT NANDA (2025):</strong> 95% of organisations see no measurable business return, despite $30–40 billion in enterprise spending on generative AI.</li>
</ul>

<h2>Top 10 practices for closing the gap</h2>

<h3>1. Make AI part of the operating model, not a side project (Goldman Sachs)</h3>
<p>OneGS 3.0 is a multi-year transformation that embeds AI as a core operating capability rather than a standalone tool. It is built around six named workstreams, starting with client onboarding and KYC and enterprise risk.</p>

<h3>2. Fund AI like core infrastructure (JPMorgan)</h3>
<p>In January 2026 JPMorgan reclassified AI spending as core infrastructure. Jamie Dimon has said the bank spends about $2 billion a year on AI and books roughly $2 billion in measurable benefits, so the programme effectively pays for itself.</p>

<h3>3. Give everyone secure tools, then measure use (JPMorgan, Goldman Sachs)</h3>
<p>JPMorgan's internal LLM Suite is used by roughly 150,000 employees weekly, with users estimating about four hours saved per week.</p>

<h3>4. Redesign the workflow instead of bolting AI onto it (McKinsey)</h3>
<p>High performers are nearly three times as likely as others to fundamentally redesign their workflows when they deploy AI.</p>

<h3>5. Aim for growth, not just cost cutting (McKinsey)</h3>
<p>80% of respondents name efficiency as a goal, but high performers are much more likely to also target growth and innovation.</p>

<h3>6. Fix the data first (Goldman Sachs)</h3>
<p>Goldman says that getting the full benefit of AI requires not just new tools, but timely, accurate and complete data across the organisation.</p>

<h3>7. Start with evals before you scale (OpenAI)</h3>
<p>OpenAI's first lesson for enterprise adoption is to use a systematic evaluation process to measure how models perform against your use cases. Evals gave Morgan Stanley the confidence to move its use cases into production.</p>

<h3>8. Start simple: workflows before autonomous agents (Anthropic)</h3>
<p>Anthropic found the most successful implementations used simple, composable patterns rather than complex frameworks. Workflows give predictability and consistency for well-defined tasks; agents are the better choice when flexibility and model-driven decisions are needed at scale.</p>

<h3>9. Put governance in place before agents spread (Deloitte)</h3>
<p>Nearly 3 in 4 (74%) companies plan to deploy agentic AI within two years, but only about 1 in 5 have a mature governance model for agents.</p>

<h3>10. Plan the people side: redeploy and empower (JPMorgan, MIT)</h3>
<p>Dimon says JPMorgan already has "huge redeployment plans" for staff affected by AI. MIT concludes that bridging the divide means shifting from building to buying, from central labs to empowered teams, and from static tools to adaptive systems.</p>

<h2>Insights on AI strategy and implementation</h2>
<p>The AI models aren't what's holding companies back. The gap comes from how the work is organised: how workflows are designed, the state of the data, whether results are measured, and who owns the work. MIT's lead author made the same point: failures were less about model quality and more about how organisations try to use them.</p>
`;

const AI_STRATEGY_GAP_SOURCES = [
  { title: "Deloitte – State of AI in the Enterprise 2026", url: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html" },
  { title: "McKinsey – The State of AI in 2025", url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-2025" },
  { title: "MIT NANDA – The GenAI Divide (coverage, Virtualization Review)", url: "https://virtualizationreview.com/Articles/2025/08/19/MIT-Report-Finds-Most-AI-Business-Investments-Fail-Reveals-GenAI-Divide.aspx" },
  { title: "Goldman Sachs OneGS 3.0 (Banking Exchange)", url: "https://www.bankingexchange.com/news-feed/item/10579-goldman-sachs-puts-ai-at-core-of-new-strategy?Itemid=620" },
  { title: "JPMorgan reclassifies AI as core infrastructure", url: "https://www.beri.net/article/jpmorgan-reclassifies-ai-core-infrastructure-2026" },
  { title: "JPMorgan AI pays for itself (Dimon, Bloomberg TV)", url: "https://ai2.work/blog/how-jpmorgan-s-ai-now-pays-for-itself-inside-the-2b-bet" },
  { title: "Dimon on redeployment (Business Today)", url: "https://www.businesstoday.in/amp/latest/trends/story/have-huge-redeployment-plans-jamie-dimon-lays-out-jpmorgan-chases-ambitious-ai-rewire-strategy-518242-2026-02-26" },
  { title: "OpenAI – AI in the Enterprise", url: "https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf" },
  { title: "Anthropic – Building effective agents", url: "https://anthropic.com/engineering/building-effective-agents" },
];

export const LOCAL_POSTS: BlogPost[] = [
  {
    id: "local-ai-strategy-gap-2026-11",
    title: "The Gap Between AI Strategy and Reality: Top 10 Best Practices",
    slug: "ai-strategy-vs-reality-top-10-best-practices",
    category: "AI Strategy",
    author: "Ahmed Warsame",
    author_image: "/images/company/ahmed-warsame-avatar.jpg",
    status: "published",
    date: "Nov 19, 2026",
    read_time: "4 min read",
    image: "/images/blog/ai-strategy-gap.svg",
    content: AI_STRATEGY_GAP_HTML,
    sources: AI_STRATEGY_GAP_SOURCES,
    created_at: "2026-11-19T12:00:00.000Z",
    updated_at: "2026-11-19T12:00:00.000Z",
  },
];

/** Published local posts, optionally filtered by category. */
export const getLocalPosts = (category?: string): BlogPost[] =>
  LOCAL_POSTS_ENABLED
    ? LOCAL_POSTS.filter((p) => p.status === "published" && (!category || p.category === category))
    : [];
