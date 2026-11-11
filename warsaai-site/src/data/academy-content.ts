// Generated from the previous static homepage by a one-off extraction script.
// Edit freely from here on — this file is now the source of truth for this copy.

export interface CurriculumModule { num: string; title: string; level: string; items: string[] }
export interface CurriculumCard { tag?: string; icon: string; title: string; text: string }
export interface CurriculumTab { id: string; label: string; intro?: string; modules: CurriculumModule[]; cards: CurriculumCard[] }
export interface TitledText { title: string; text: string }
export interface PromptEntry { label: string; text: string }
export interface UseCaseSector { id: string; name: string; title: string; sub: string; credit: string; prompts: PromptEntry[] }

export const curriculum: CurriculumTab[] = [
  {
    "id": "foundations",
    "label": "Foundations",
    "modules": [
      {
        "num": "01",
        "title": "Introduction to Claude & Large Language Models",
        "level": "Beginner",
        "items": [
          "What Claude is and how it differs from other AI models",
          "Understanding tokens, context windows, and model versions",
          "Setting up your Claude account and API access",
          "Your first conversation — asking Claude the right questions",
          "Safety, hallucinations, and responsible AI use"
        ]
      },
      {
        "num": "02",
        "title": "Claude's Personality & How It Thinks",
        "level": "Beginner",
        "items": [
          "Constitutional AI — Claude's values and guardrails explained",
          "How Claude interprets ambiguity and fills in gaps",
          "The role of tone, context, and persona in Claude's outputs",
          "When Claude says \"no\" — and how to rephrase effectively"
        ]
      },
      {
        "num": "03",
        "title": "The Anatomy of a Great Prompt",
        "level": "Beginner",
        "items": [
          "Role, task, context, format — the four building blocks",
          "Why vague prompts produce vague results",
          "Specificity drills — comparing weak vs. strong prompts",
          "Giving Claude examples (few-shot prompting)"
        ]
      }
    ],
    "cards": []
  },
  {
    "id": "prompting",
    "label": "Prompt Engineering",
    "modules": [
      {
        "num": "04",
        "title": "Chain-of-Thought & Reasoning Prompts",
        "level": "Intermediate",
        "items": [
          "Asking Claude to \"think step by step\" and why it works",
          "Decomposing complex problems into sequential tasks",
          "Self-critique loops — making Claude check its own work",
          "Tree-of-thought prompting for strategic decisions"
        ]
      },
      {
        "num": "05",
        "title": "Role & Persona Prompting",
        "level": "Intermediate",
        "items": [
          "Assigning expert roles to unlock domain-specific depth",
          "Creating custom AI advisors for your business",
          "Maintaining persona consistency across long conversations",
          "Red-team personas for stress-testing your strategy"
        ]
      },
      {
        "num": "06",
        "title": "Formatting & Output Control",
        "level": "Intermediate",
        "items": [
          "Structuring outputs as tables, JSON, Markdown, or plain prose",
          "Length control and response density",
          "Asking Claude to produce templates you can reuse",
          "Exporting and integrating Claude outputs into your workflow"
        ]
      }
    ],
    "cards": []
  },
  {
    "id": "business",
    "label": "Business Apps",
    "modules": [],
    "cards": [
      {
        "tag": "Sales & Persuasion",
        "icon": "💼",
        "title": "Sales Copy & Outreach",
        "text": "Cold emails, LinkedIn DMs, pitch decks, follow-up sequences — Claude writes them, you close them."
      },
      {
        "tag": "Content & Marketing",
        "icon": "✍️",
        "title": "Content at Scale",
        "text": "Blog posts, newsletters, social captions, and ad copy in your brand voice, at 10× the speed."
      },
      {
        "tag": "Research & Analysis",
        "icon": "🔍",
        "title": "Competitive Intelligence",
        "text": "Summarise reports, analyse competitors, and extract insights from long documents in seconds."
      },
      {
        "tag": "Customer Service",
        "icon": "💬",
        "title": "Support Automation",
        "text": "Draft FAQ libraries, write chatbot scripts, and handle objections with Claude-powered replies."
      },
      {
        "tag": "HR & Ops",
        "icon": "📋",
        "title": "SOPs & Documentation",
        "text": "Turn meeting notes into SOPs, onboarding guides, job descriptions, and policy documents."
      },
      {
        "tag": "Finance & Strategy",
        "icon": "📈",
        "title": "Strategic Planning",
        "text": "Business plans, SWOT analyses, financial narrative summaries, and investor updates."
      }
    ]
  },
  {
    "id": "advanced",
    "label": "Advanced",
    "modules": [
      {
        "num": "10",
        "title": "System Prompts & Custom AI Assistants",
        "level": "Advanced",
        "items": [
          "Writing system prompts that shape Claude's entire behaviour",
          "Building your own branded AI assistant using the API",
          "Injecting live data into prompts with retrieval patterns",
          "Memory techniques — summarise and re-inject conversation history"
        ]
      },
      {
        "num": "11",
        "title": "Multi-Step Agent Workflows",
        "level": "Advanced",
        "items": [
          "Agentic Claude — giving it tools and letting it plan",
          "Tool use: web search, code execution, file reading",
          "Orchestrating multiple Claude calls in sequence",
          "Error handling and fallback strategies in agentic chains"
        ]
      }
    ],
    "cards": []
  },
  {
    "id": "automation",
    "label": "Automation",
    "modules": [],
    "cards": [
      {
        "icon": "⚙️",
        "title": "Zapier + Claude",
        "text": "Connect Claude to 6,000+ apps — auto-summarise emails, generate replies, create CRM notes."
      },
      {
        "icon": "🔗",
        "title": "Make (Integromat) Workflows",
        "text": "Visual automation builder with Claude at the centre of your business logic chain."
      },
      {
        "icon": "📊",
        "title": "Google Sheets + Claude API",
        "text": "Use Apps Script to call Claude directly from your spreadsheets for bulk processing."
      },
      {
        "icon": "🤖",
        "title": "Claude API Basics",
        "text": "No-code and low-code ways to call the Anthropic API for your own custom tools."
      }
    ]
  },
  {
    "id": "dickey",
    "label": "Dickey Method",
    "intro": "Adapted from Ryan Dickey's Mastering Claude AI: Practical Journey — the concise action-first companion to Halford's zero-to-pro framework.",
    "modules": [],
    "cards": [
      {
        "tag": "Core Principle",
        "icon": "🎯",
        "title": "Specificity Over Vagueness",
        "text": "Vague prompts produce vague results. Dickey's first rule: replace every generic word with a precise one before you hit send."
      },
      {
        "tag": "Core Principle",
        "icon": "🔁",
        "title": "Iterate Relentlessly",
        "text": "Your first response is raw material, not a final product. Treat Claude like a collaborator — push back, refine, redirect, and build."
      },
      {
        "tag": "Technique",
        "icon": "🏷️",
        "title": "XML Tag Structure",
        "text": "Wrap complex multi-part prompts in XML tags (<context>, <task>, <format>) so Claude can parse each element cleanly."
      },
      {
        "tag": "Technique",
        "icon": "⛓️",
        "title": "Prompt Chaining",
        "text": "Feed Claude's response back into the next prompt. Output A becomes Input B — this unlocks multi-step reasoning no single prompt can achieve."
      },
      {
        "tag": "Power Trick",
        "icon": "✍️",
        "title": "Ask Claude to Write Its Prompt",
        "text": "\"Write me the ideal prompt to get X from you.\" Claude often surfaces constraints and context you hadn't considered."
      },
      {
        "tag": "Power Trick",
        "icon": "🔍",
        "title": "Red-Team Your Own Ideas",
        "text": "\"Act as a sceptical investor and find every flaw in this business plan.\" Stress-testing with Claude saves real-world embarrassment."
      }
    ]
  },
  {
    "id": "inhouse",
    "label": "In-House Training",
    "intro": "All 12 In-House AI Training programmes — live, hands-on sessions built around your industry's real workflows.",
    "modules": [
      {
        "num": "01",
        "title": "🏪 Medium to Small Business",
        "level": "All Levels",
        "items": [
          "AI-powered customer reply and complaint handling",
          "Quote, proposal and contract generation in minutes",
          "Bookkeeping summary and cash-flow narration",
          "Marketing copy — social posts, ads, newsletters",
          "Competitor and pricing research using AI",
          "Save 15+ hours per week on manual admin tasks"
        ]
      },
      {
        "num": "02",
        "title": "🏘️ Real Estate",
        "level": "All Levels",
        "items": [
          "AI listing descriptions that convert — tailored per property",
          "Market comp research and valuation narratives in minutes",
          "Client communication drafts — follow-ups, offers, updates",
          "Lead qualification and CRM automation workflows",
          "Investment analysis and deal memo generation",
          "Investor pitch decks and property report narration"
        ]
      },
      {
        "num": "03",
        "title": "🏗️ Construction & Trades",
        "level": "All Levels",
        "items": [
          "AI-assisted bid writing and cost estimation",
          "RFP and subcontractor scope of work summaries",
          "Safety checklist and compliance draft generation",
          "Project update reports and client progress summaries",
          "Supplier communication and purchase order automation",
          "Punch list and snagging documentation in one click"
        ]
      },
      {
        "num": "04",
        "title": "📱 Social Media",
        "level": "All Levels",
        "items": [
          "30-day content calendars — posts, captions, hashtags",
          "DM and comment automation with context-aware AI replies",
          "Viral hook and headline generation across platforms",
          "Short-form video scripts for Reels, TikTok and Shorts",
          "Brand voice training — teaching AI to sound like you",
          "Trend research and competitor content analysis"
        ]
      },
      {
        "num": "05",
        "title": "💼 Freelancers",
        "level": "All Levels",
        "items": [
          "Cold outreach emails that actually get replies",
          "Tiered service package builder — Starter, Growth, Premium",
          "Client onboarding automation and welcome pack generation",
          "Project scoping and deliverable definition prompts",
          "Invoice chasing and payment reminder sequences",
          "Portfolio case study and testimonial writing"
        ]
      },
      {
        "num": "06",
        "title": "📢 Marketing & Ads",
        "level": "Intermediate",
        "items": [
          "Meta, Google and LinkedIn ad copy — headlines, body, CTA",
          "A/B creative testing framework and performance analysis",
          "Landing page copy optimisation with AI",
          "Campaign brief and creative direction documents",
          "ROI reporting — turning numbers into clear narratives",
          "Retargeting sequence and abandoned cart copy"
        ]
      },
      {
        "num": "07",
        "title": "👥 HR",
        "level": "All Levels",
        "items": [
          "Job description generation — inclusive, compelling, precise",
          "CV screening and candidate shortlisting with AI",
          "Interview question banks and scoring rubrics per role",
          "Employee survey analysis and sentiment summaries",
          "Performance review frameworks and feedback drafts",
          "HR policy drafting and employee handbook generation"
        ]
      },
      {
        "num": "08",
        "title": "🛡️ Compliance",
        "level": "Intermediate",
        "items": [
          "Policy and procedure drafting tailored to your sector",
          "Regulatory change summaries — plain English, actionable",
          "Risk assessment and control matrix generation",
          "Audit checklist creation and evidence mapping",
          "Incident report narration and root cause analysis",
          "GDPR, ISO and sector-specific compliance document drafts"
        ]
      },
      {
        "num": "09",
        "title": "📊 Finance",
        "level": "Intermediate",
        "items": [
          "Financial report narration — turning data into insight",
          "Variance and trend analysis explanations for non-finance teams",
          "Board pack and executive summary generation",
          "Budget commentary and forecast narrative drafts",
          "Cash flow monitoring summaries and alert descriptions",
          "Investor update and management accounts narration"
        ]
      },
      {
        "num": "10",
        "title": "🚀 Onboarding",
        "level": "All Levels",
        "items": [
          "New hire welcome pack generation — personalised per role",
          "First-week schedule and induction agenda creation",
          "Role-specific guide and process documentation",
          "30/60/90-day onboarding plan per department",
          "Manager checklist and buddy programme guides",
          "Automated welcome email sequence for new starters"
        ]
      },
      {
        "num": "11",
        "title": "🔄 Offboarding",
        "level": "All Levels",
        "items": [
          "Handover document generation — structured, complete, fast",
          "Exit interview analysis and insight summaries",
          "Knowledge transfer pack creation per role",
          "Process documentation from outgoing staff notes",
          "Leaver checklist and system access revocation guide",
          "Alumni communication and reference letter drafts"
        ]
      },
      {
        "num": "12",
        "title": "📚 Training & L&D",
        "level": "Intermediate",
        "items": [
          "Course and module content drafting at scale",
          "Quiz bank and assessment generation per learning objective",
          "Personalised learning path creation for different roles",
          "Facilitator guide and trainer notes generation",
          "Post-training evaluation and feedback form design",
          "Skills gap analysis and training needs assessment"
        ]
      }
    ],
    "cards": []
  }
];

export const craftFramework: { letter: string; word: string; text: string }[] = [
  {
    "letter": "C",
    "word": "Context",
    "text": "Who you are, your background, the situation. Claude can't read your mind — front-load the facts."
  },
  {
    "letter": "R",
    "word": "Role",
    "text": "Assign Claude an expert persona. \"You are a CFO\" unlocks financial depth \"write a finance doc\" never will."
  },
  {
    "letter": "A",
    "word": "Action",
    "text": "The exact task. Use strong verbs: analyse, draft, list, rewrite, compare, critique, summarise."
  },
  {
    "letter": "F",
    "word": "Format",
    "text": "How you want the output: bullet list, table, numbered steps, JSON, one sentence, 300 words max."
  },
  {
    "letter": "T",
    "word": "Tone",
    "text": "Formal, casual, direct, empathetic, technical, persuasive. Tone shapes everything Claude writes."
  }
];

export const powerTips: { num: string; title: string; text: string; example: string[] }[] = [
  {
    "num": "01",
    "title": "Be Surgically Specific",
    "text": "Replace every vague word before you send. \"Write an email\" is hopeless. \"Write a 180-word cold email to a CFO about reducing payroll software costs\" gives Claude a target to hit.",
    "example": [
      "❌ \"Write me a proposal\"",
      "✅ \"Write a 1-page project proposal for a £15k website redesign. Audience: non-technical SME owner. Tone: confident, jargon-free.\""
    ]
  },
  {
    "num": "02",
    "title": "Always Assign a Role",
    "text": "Opening with \"You are a [specific expert]\" consistently outperforms plain instructions. The persona unlocks vocabulary, frameworks, and priorities that Claude applies automatically.",
    "example": [
      "✅ \"You are a seasoned M&A lawyer. Review this contract clause for hidden risk.\""
    ]
  },
  {
    "num": "03",
    "title": "Demand Multiple Options",
    "text": "Never accept a single answer when you can have five. Asking for variations forces Claude to explore the solution space — you pick the winner.",
    "example": [
      "✅ \"Give me 5 different subject lines for this email, each using a different psychological trigger. Label each one.\""
    ]
  },
  {
    "num": "04",
    "title": "Set Hard Constraints",
    "text": "Length, scope, and exclusion constraints act like creative guardrails. They make Claude's output tighter, more usable, and closer to your intent in one shot.",
    "example": [
      "✅ \"Summarise this report in exactly 5 bullet points. Each bullet must be under 20 words. Do not include figures from before 2023.\""
    ]
  },
  {
    "num": "05",
    "title": "Request Claude's Reasoning",
    "text": "Add \"explain your thinking\" or \"walk me through your logic\" to any analytical task. This surfaces assumptions you can challenge — and teaches you how Claude solved it.",
    "example": [
      "✅ \"Which of these two pricing strategies is stronger? Explain your reasoning step by step before giving your verdict.\""
    ]
  },
  {
    "num": "06",
    "title": "Use Prompt Chaining",
    "text": "Complex work rarely fits one prompt. Break it into stages — Claude's output from step 1 feeds step 2. This unlocks depth no single prompt achieves.",
    "example": [
      "Step 1 → Research brief",
      "Step 2 → \"Using the above research, write the executive summary\"",
      "Step 3 → \"Now critique it as a sceptical board member\""
    ]
  },
  {
    "num": "07",
    "title": "Use XML Tags for Complexity",
    "text": "When prompts have multiple moving parts, wrap each element in descriptive XML tags. Claude parses them cleanly and rarely confuses the sections.",
    "example": [
      "<context>I run a property business</context>",
      "<task>Write 3 investment case bullet points</task>",
      "<format>Max 25 words each, investor tone</format>"
    ]
  },
  {
    "num": "08",
    "title": "Ask Claude to Write Its Own Prompt",
    "text": "One of Dickey's signature moves: ask Claude \"what's the ideal prompt to get X from you?\" It surfaces constraints, context, and structure you'd never have thought to specify.",
    "example": [
      "✅ \"What prompt should I give you to get the best possible competitive analysis of a financial technology startup?\""
    ]
  },
  {
    "num": "09",
    "title": "Pre-Load Your Brand Voice",
    "text": "Start conversations by pasting 2–3 examples of your writing. Tell Claude \"match this tone and style.\" It calibrates to your voice faster than any set of adjectives.",
    "example": [
      "✅ \"Here are 3 emails I've written. [PASTE]. Now write a follow-up to [NAME] in exactly this voice.\""
    ]
  },
  {
    "num": "10",
    "title": "Make Claude Self-Critique",
    "text": "After any important output, ask: \"Now review your response and identify the 3 weakest points.\" This forces a quality check before it reaches you — and often produces a stronger second draft.",
    "example": [
      "✅ \"Review what you just wrote. What are the 3 things a critical reader would push back on? Then rewrite to address them.\""
    ]
  }
];

export const promptMistakes: { title: string; text: string; fix: string }[] = [
  {
    "title": "Treating Claude Like Google",
    "text": "Claude isn't a search engine. Keyword queries return shallow answers. Use full sentences and context.",
    "fix": "Write prompts as if briefing a smart human colleague."
  },
  {
    "title": "Accepting the First Response",
    "text": "First responses are starting points. The magic is in the iteration — push, refine, redirect.",
    "fix": "Always follow up with \"make this stronger\" or a specific critique."
  },
  {
    "title": "No Output Format Specified",
    "text": "Without a format instruction, Claude guesses. You get prose when you wanted a table, or paragraphs when you needed bullets.",
    "fix": "End every prompt with \"Format: [table / numbered list / JSON / one sentence].\""
  },
  {
    "title": "Zero Context About You",
    "text": "Claude tailors responses to the persona it perceives. If you give no context, it picks one for you — often wrong.",
    "fix": "Open with: \"I'm a [role] working on [project] for [audience].\""
  },
  {
    "title": "Giant Single-Shot Prompts",
    "text": "Cramming a 10-step task into one prompt overwhelms the model. Quality degrades as complexity rises.",
    "fix": "Break into a chain: 3 focused prompts beats one sprawling one every time."
  },
  {
    "title": "Ignoring Tone Instructions",
    "text": "Claude defaults to a helpful, slightly formal tone. If your audience needs something different, you must say so explicitly.",
    "fix": "\"Write this in a punchy, direct tone. Short sentences. No corporate jargon.\""
  },
  {
    "title": "Not Building a Prompt Library",
    "text": "Recreating prompts from scratch every time is a tax on your time. Your best prompts should live in a reusable template library.",
    "fix": "Save every great prompt. That's what the WarsaAi Prompt Exchange is for."
  },
  {
    "title": "Forgetting Claude Has No Memory",
    "text": "Each new conversation starts fresh. Claude doesn't remember last session's context — you must re-supply it.",
    "fix": "Start important sessions with a context paragraph or use a saved system prompt."
  }
];

export const tipsSource = "All tips below are drawn from multiple open source and free resources including self taught Mastering Claude AI: Practical Journey from First Prompts to Pro — the practitioner's handbook used throughout WarsaAi sessions. Free content; Claude subscription required to build.";

export const useCases: UseCaseSector[] = [
  {
    "id": "realestate",
    "name": "Real Estate",
    "title": "Real Estate & Property",
    "sub": "Listings, client comms, investment analysis & more",
    "credit": "Source: 1000 Claude AI Prompts — Eslam Wahba · Real Estate chapter prompts adapted for UK market",
    "prompts": [
      {
        "label": "Property Listing",
        "text": "Write a compelling property listing for a [PROPERTY TYPE] in [LOCATION]. It has [BEDROOMS] bedrooms, [BATHROOMS] bathrooms, [KEY FEATURE 1] and [KEY FEATURE 2]. Target buyers: [BUYER PROFILE]. Tone: aspirational but honest. Under 180 words."
      },
      {
        "label": "Neighbourhood Description",
        "text": "Write an engaging neighbourhood overview for [AREA NAME] aimed at [TARGET BUYER]. Include lifestyle appeal, proximity to [AMENITY], transport links, and why now is a good time to buy. Keep it under 150 words, warm and informative."
      },
      {
        "label": "Buyer Follow-Up Email",
        "text": "Write a follow-up email to a prospective buyer who viewed [PROPERTY ADDRESS] on [DATE]. Reference what they said they liked: [POSITIVE FEEDBACK]. Address their concern about [CONCERN]. End with a soft call to action for a second viewing."
      },
      {
        "label": "Investment Analysis Summary",
        "text": "Summarise the investment case for a buy-to-let property at [ADDRESS] priced at £[PRICE]. Estimated rental income: £[RENT]/month. Key risks: [RISK 1], [RISK 2]. Format as: Yield Calculation, Pros, Cons, Verdict. Audience: first-time landlord."
      },
      {
        "label": "Vendor Instruction Letter",
        "text": "Draft a professional letter to a homeowner instructing them on how to prepare their property for sale. Include: decluttering, kerb appeal, minor repairs, and staging tips. Tone: friendly expert advisor. Length: 250 words."
      },
      {
        "label": "Social Caption — New Listing",
        "text": "Write 3 Instagram captions for a new property listing at [ADDRESS]. Include the key selling points: [FEATURE 1], [FEATURE 2], price £[PRICE]. Each caption must use a different hook style: question, statement, and storytelling. Include relevant hashtags."
      },
      {
        "label": "Offer Negotiation Script",
        "text": "Write a negotiation script for an estate agent presenting an offer of £[OFFER] on a property listed at £[ASKING PRICE]. The buyer's justification is [REASON]. Help the agent present this respectfully and keep the deal alive if the vendor declines."
      },
      {
        "label": "Tenant Welcome Pack",
        "text": "Create a welcome pack introduction letter for new tenants moving into [PROPERTY ADDRESS]. Include: move-in checklist, key contacts, bin collection day, meter locations, Wi-Fi details placeholder, and emergency numbers. Friendly, clear, bullet-pointed."
      }
    ]
  },
  {
    "id": "construction",
    "name": "Construction & Trades",
    "title": "Construction & Trades",
    "sub": "Proposals, safety docs, client comms & project management",
    "credit": "Source: 1000 Claude AI Prompts — Eslam Wahba · Construction & Operations chapter",
    "prompts": [
      {
        "label": "Project Proposal",
        "text": "Write a professional project proposal for a [TYPE OF WORK] at [CLIENT ADDRESS]. Scope: [SCOPE SUMMARY]. Timeline: [X weeks]. Quote: £[AMOUNT]. Include: overview, what's included, what's excluded, payment terms, and a call to action. Client name: [NAME]."
      },
      {
        "label": "Site Safety Briefing",
        "text": "Write a daily site safety briefing for a [TYPE OF PROJECT] site. Include: PPE requirements, hazards for today ([HAZARD 1], [HAZARD 2]), emergency procedures, and a reminder of the welfare facilities. Short, clear, suitable for reading aloud at 7am."
      },
      {
        "label": "Delay Notification Letter",
        "text": "Draft a professional letter to a client explaining a project delay caused by [REASON]. Original completion date: [DATE]. New estimated date: [DATE]. Include an apology, the cause, what we're doing to recover, and a commitment to keep them updated weekly."
      },
      {
        "label": "Subcontractor Brief",
        "text": "Write a clear subcontractor work brief for [TRADE] on site at [ADDRESS]. Their scope: [TASK]. Start date: [DATE]. Key contacts: [NAME/ROLE]. Site rules: [RULE 1], [RULE 2]. Deliverables and sign-off process. Professional, no jargon."
      },
      {
        "label": "Client Progress Update",
        "text": "Write a weekly client progress update for [PROJECT NAME]. Completed this week: [TASKS]. In progress: [TASKS]. Issues encountered: [ISSUE] — resolved by [SOLUTION]. Next week's plan: [PLAN]. Reassure the client that the project is on track. Friendly, professional."
      },
      {
        "label": "Google Review Response",
        "text": "Write a professional reply to a [POSITIVE / NEGATIVE] Google review left by [CUSTOMER NAME] about our [TRADE] services. Their comment: \"[REVIEW TEXT]\". Thank them, address any concerns raised, and invite them to contact us directly at [PHONE/EMAIL]."
      },
      {
        "label": "Quote Follow-Up",
        "text": "Write a follow-up email to a client who received our quote for [JOB TYPE] 5 days ago and hasn't responded. Politely check in, reiterate our key differentiators ([DIFFERENTIATOR 1], [DIFFERENTIATOR 2]), and offer to answer any questions. Keep it under 120 words."
      },
      {
        "label": "Method Statement",
        "text": "Write a basic method statement for [TASK, e.g. flat roof replacement] at [ADDRESS]. Include: sequence of work, plant and equipment needed, hazards and controls, competency requirements, and waste disposal plan. Plain English, structured with numbered steps."
      }
    ]
  },
  {
    "id": "smallbiz",
    "name": "Small Business",
    "title": "Small Business",
    "sub": "Operations, customer service, sales & growth prompts",
    "credit": "Source: 1000 Claude AI Prompts — Eslam Wahba · Small Business & Operations chapter",
    "prompts": [
      {
        "label": "Business Plan Executive Summary",
        "text": "Write a 300-word executive summary for a business plan for [BUSINESS NAME], a [BUSINESS TYPE] based in [LOCATION]. We serve [TARGET CUSTOMER]. Revenue model: [MODEL]. Our key differentiator is [USP]. Current stage: [STAGE]. Seeking £[AMOUNT] in funding for [PURPOSE]."
      },
      {
        "label": "Customer Complaint Response",
        "text": "Write a professional email response to a customer complaint about [ISSUE]. Customer name: [NAME]. Their complaint: [COMPLAINT SUMMARY]. Our position: [RESPONSE]. Resolution offered: [RESOLUTION]. Tone: empathetic, calm, solution-focused. End with a retention offer if appropriate."
      },
      {
        "label": "FAQ Page Content",
        "text": "Create 10 FAQs and clear answers for a [BUSINESS TYPE] business. Topics to cover: pricing, delivery/turnaround time, refund policy, how to get started, and what makes us different from [COMPETITOR TYPE]. Write in a friendly, conversational tone. Format: Q&A pairs."
      },
      {
        "label": "Product / Service Description",
        "text": "Write a persuasive product description for [PRODUCT/SERVICE NAME] priced at £[PRICE]. Key benefits: [BENEFIT 1], [BENEFIT 2], [BENEFIT 3]. Target customer: [PROFILE]. Include a headline, 3-sentence body, and a call-to-action. Tone: confident and benefit-led."
      },
      {
        "label": "Referral Programme Script",
        "text": "Write an email to existing customers introducing our new referral programme. For every friend they refer who makes a purchase, they get [REWARD]. Their friend gets [FRIEND REWARD]. Include: how it works in 3 steps, the incentive, and a referral link placeholder. Warm, enthusiastic tone."
      },
      {
        "label": "SOP Template",
        "text": "Write a standard operating procedure (SOP) for [TASK, e.g. handling a new customer enquiry]. Format: Purpose, Who This Applies To, Step-by-Step Process (numbered), Common Mistakes, and a Checklist. Plain English. Suitable for onboarding a new staff member with no experience."
      },
      {
        "label": "Pricing Increase Announcement",
        "text": "Write a customer email announcing a price increase from £[OLD PRICE] to £[NEW PRICE] for [PRODUCT/SERVICE], effective [DATE]. Explain the reason (rising costs, investment in quality). Offer a grace period for existing customers to lock in current pricing until [DATE]. Honest, respectful tone."
      },
      {
        "label": "Competitor Comparison",
        "text": "I run a [BUSINESS TYPE]. My three main competitors are [COMPETITOR 1], [COMPETITOR 2], [COMPETITOR 3]. Analyse their likely strengths and weaknesses, then identify 3 specific gaps in the market I could exploit. Format as a table followed by 3 strategic recommendations."
      },
      {
        "label": "Job Description",
        "text": "Write a job description for a [JOB TITLE] at [COMPANY NAME], a [BUSINESS TYPE]. Salary: £[RANGE]. Location: [LOCATION / Remote]. Key responsibilities: [3-5 bullet points]. Requirements: [SKILLS/EXPERIENCE]. Include a short company culture paragraph. Tone: welcoming and professional."
      },
      {
        "label": "Newsletter — Monthly Roundup",
        "text": "Write a monthly email newsletter for [BUSINESS NAME]. This month's news: [UPDATE 1], [UPDATE 2]. Featured product/service: [NAME]. Customer spotlight: [BRIEF]. Upcoming offer: [OFFER]. Sign-off from [OWNER NAME]. Friendly, 300 words, with a clear CTA button text."
      }
    ]
  },
  {
    "id": "socialmedia",
    "name": "Social Media",
    "title": "Social Media & Content",
    "sub": "Captions, strategies, hooks, calendars & engagement",
    "credit": "Source: 1000 Claude AI Prompts — Eslam Wahba · Social Media & Content Marketing chapter",
    "prompts": [
      {
        "label": "LinkedIn Post — Thought Leadership",
        "text": "Write a LinkedIn thought leadership post from the perspective of a [JOB TITLE] in [INDUSTRY] on the topic of [TOPIC]. Hook: a bold or surprising statement. Body: 3 short insights. Ending: a question to drive comments. 200 words max. No hashtag spam — max 3 relevant tags."
      },
      {
        "label": "30-Day Content Calendar",
        "text": "Create a 30-day social media content calendar for a [BUSINESS TYPE] on [PLATFORM]. Mix of content types: educational (40%), promotional (20%), behind-the-scenes (20%), testimonials (10%), personal/story (10%). Format as a table: Day | Content Type | Caption Idea | Hashtag Theme."
      },
      {
        "label": "Instagram Caption — Product Launch",
        "text": "Write 3 Instagram captions for the launch of [PRODUCT/SERVICE NAME] by [BRAND NAME]. Each caption uses a different style: 1) storytelling, 2) problem-solution, 3) social proof. Include relevant emojis, a CTA, and 5 targeted hashtags per caption."
      },
      {
        "label": "Comment Reply Templates",
        "text": "Write 10 short, friendly reply templates for common social media comments on a [BUSINESS TYPE] page. Cover: thank you, question about price, complaint, compliment, asking for DM, off-topic comment, competitor mention, spam, delivery question, and a general enquiry. Keep each under 40 words."
      },
      {
        "label": "Viral Hook Generator",
        "text": "Generate 10 scroll-stopping opening hooks for social media posts about [TOPIC] aimed at [AUDIENCE]. Use a different format for each: question, bold claim, statistic, controversy, personal story opener, \"most people don't know...\", \"here's what [X] won't tell you...\", and three more."
      },
      {
        "label": "Bio Rewrite",
        "text": "Rewrite my [PLATFORM] bio for maximum impact. Current bio: [PASTE CURRENT BIO]. My audience is [TARGET AUDIENCE]. My main goal from this platform is [GOAL]. Make it clear what I do, who I help, and end with a CTA. Keep it under [CHARACTER LIMIT] characters."
      },
      {
        "label": "Reel / TikTok Script",
        "text": "Write a 60-second script for a [PLATFORM] video on the topic [TOPIC] for [AUDIENCE]. Structure: hook (0–5s), main content with 3 quick points (5–50s), CTA (50–60s). Include on-screen text suggestions and speaking notes separately. Energy: [TONE — e.g. energetic / calm / funny]."
      },
      {
        "label": "Hashtag Strategy",
        "text": "Build a hashtag strategy for a [BUSINESS TYPE] on [PLATFORM]. Provide: 5 broad awareness hashtags, 10 niche community hashtags, 5 branded hashtag ideas, and 5 location-specific hashtags for [CITY/REGION]. Explain the mix strategy and recommended hashtags per post."
      },
      {
        "label": "DM Outreach — Collaboration",
        "text": "Write a DM to [INFLUENCER/BRAND] proposing a collaboration. Our brand: [BRAND NAME], [BRIEF DESCRIPTION]. What we're offering: [OFFER]. What we'd like from them: [ASK]. Keep it under 100 words, genuine and specific — not a copy-paste blast. Make them feel it's personal."
      },
      {
        "label": "Weekly Analytics Review",
        "text": "Act as a social media analyst. I'll give you last week's metrics: [PASTE METRICS]. Identify: top performing content and why, underperforming content and why, 3 actionable improvements for next week, and whether I'm on track for my goal of [GOAL]. Format as a concise report."
      }
    ]
  },
  {
    "id": "freelance",
    "name": "Freelancers",
    "title": "Freelancers & Consultants",
    "sub": "Proposals, pricing, client comms & positioning",
    "credit": "Source: 1000 Claude AI Prompts — Eslam Wahba · Freelance & Consulting chapter",
    "prompts": [
      {
        "label": "Project Proposal",
        "text": "Write a freelance project proposal for [CLIENT NAME] for [PROJECT TYPE]. Scope: [SCOPE]. Timeline: [DURATION]. Rate: £[AMOUNT] — [FIXED / HOURLY]. Deliverables: [LIST]. Include: my approach, why I'm the right fit, payment milestones, and a clear acceptance call-to-action."
      },
      {
        "label": "Rate Increase Email",
        "text": "Write a professional email to an existing client informing them my rate is increasing from £[OLD] to £[NEW] per [hour/day/project] from [DATE]. Give a clear rationale, acknowledge the relationship, offer them a transition arrangement, and keep the tone warm and confident — not apologetic."
      },
      {
        "label": "Difficult Client Boundary Email",
        "text": "Write a professional email setting a boundary with a client who has been [ISSUE: e.g. requesting work outside the agreed scope / contacting me outside working hours / delaying approvals causing project overruns]. Firm but relationship-preserving. No blame, just clarity and a path forward."
      },
      {
        "label": "Case Study",
        "text": "Write a freelance case study for my portfolio about a project for [CLIENT TYPE] in [INDUSTRY]. The challenge was [PROBLEM]. My approach: [APPROACH]. The outcome: [RESULT]. Format: Challenge → Approach → Result → Testimonial placeholder. 250 words, confident and specific."
      },
      {
        "label": "Cold Outreach — New Lead",
        "text": "Write a cold outreach email to [COMPANY TYPE] offering my [SERVICE] freelance services. My specialism: [NICHE]. One relevant result I've achieved: [PROOF]. I've noticed they might need help with [SPECIFIC OBSERVATION]. CTA: a 20-min call. Under 120 words. Personalised, not salesy."
      },
      {
        "label": "Service Package Builder",
        "text": "Help me build 3 tiered service packages for a freelance [SERVICE TYPE] business. Target client: [CLIENT PROFILE]. Create Starter, Growth, and Premium packages. For each: name, price point, what's included, who it's for, and a one-line value statement. Make the middle tier the most attractive."
      },
      {
        "label": "LinkedIn About Section",
        "text": "Rewrite my LinkedIn About section as a freelance [JOB TITLE]. My specialism: [NICHE]. Clients I've worked with: [CLIENT TYPES]. A key result: [RESULT]. What I'm looking for now: [GOAL]. Write in first person, conversational but professional. End with a clear CTA. Under 300 words."
      },
      {
        "label": "Testimonial Request Email",
        "text": "Write a short, friendly email to a happy client asking for a LinkedIn recommendation or Google review. Project: [PROJECT NAME]. Reference what they said they were pleased with: [FEEDBACK]. Keep it easy for them — offer a draft or bullet points they can edit. Under 80 words."
      }
    ]
  },
  {
    "id": "marketing",
    "name": "Marketing & Ads",
    "title": "Marketing & Advertising",
    "sub": "Ad copy, email campaigns, landing pages & brand voice",
    "credit": "Source: 1000 Claude AI Prompts — Eslam Wahba · Marketing, Copywriting & Advertising chapter",
    "prompts": [
      {
        "label": "Google Ad Copy",
        "text": "Write 5 Google Search ad variations for [PRODUCT/SERVICE] targeting the keyword \"[KEYWORD]\". For each ad: Headline 1 (30 chars), Headline 2 (30 chars), Headline 3 (30 chars), Description 1 (90 chars), Description 2 (90 chars). Include at least one with a price, one with urgency, one with social proof."
      },
      {
        "label": "Email Campaign Sequence",
        "text": "Write a 5-email welcome sequence for new subscribers of [BRAND NAME], a [BUSINESS TYPE]. Email 1: Welcome + what to expect. Email 2: Brand story. Email 3: Most popular product/service + social proof. Email 4: Overcome top objection. Email 5: Limited offer CTA. Friendly, value-first tone throughout."
      },
      {
        "label": "Landing Page Copy",
        "text": "Write a high-converting landing page for [PRODUCT/SERVICE] aimed at [TARGET AUDIENCE]. Structure: Hero headline + subheadline, Problem statement, Solution overview, 3 key benefits, Social proof section (placeholder), FAQ (3 questions), and CTA. Conversion-focused, clear hierarchy, no fluff."
      },
      {
        "label": "Brand Voice Guide",
        "text": "Create a brand voice guide for [BRAND NAME]. Audience: [AUDIENCE]. What we are: [3 adjectives]. What we are not: [3 adjectives]. Tone examples: take [PHRASE] and rewrite it in our voice. Include: do's, don'ts, 5 example phrases, and guidance on emoji and punctuation use."
      },
      {
        "label": "Meta / Facebook Ad",
        "text": "Write 3 Facebook/Instagram ad variations for [PRODUCT/SERVICE] with a budget of £[DAILY BUDGET]. Target audience: [AUDIENCE DESCRIPTION]. For each: Primary text (125 chars), Headline (40 chars), Description (30 chars), and a recommended CTA button. Use pain point, benefit, and curiosity angles respectively."
      },
      {
        "label": "Abandoned Cart Email",
        "text": "Write an abandoned cart recovery email for [BRAND NAME]. The customer left [PRODUCT NAME] in their cart. Include: a friendly subject line, acknowledgement of what they left behind, a compelling reason to return (value reminder), a limited-time incentive: [OFFER], and a clear CTA. 150 words max."
      },
      {
        "label": "Press Release",
        "text": "Write a press release for [COMPANY NAME] announcing [NEWS: product launch / partnership / award / milestone]. Include: headline, dateline, opening paragraph (who, what, where, when, why), quote from [SPOKESPERSON NAME, TITLE], supporting detail, boilerplate about the company, and contact info placeholder."
      },
      {
        "label": "Offer / Promotion Copy",
        "text": "Write promotional copy for a [% or £ DISCOUNT] offer on [PRODUCT/SERVICE] running from [START DATE] to [END DATE]. Create: 1 email subject line, 1 SMS (under 160 chars), 1 social media caption, and 1 website banner headline. Use urgency, value, and clarity. Brand tone: [TONE]."
      }
    ]
  }
];

export const promptExchange: { text: string; category: string }[] = [
  {
    "text": "You are a world-class copywriter. Rewrite the following email subject line 10 different ways, ranging from curiosity-driven to direct-benefit. Output as a numbered list. Subject: [INSERT]",
    "category": "Sales"
  },
  {
    "text": "Act as a strategic business advisor. I will give you a business challenge. Analyse it using the SWOT framework, then give me three specific, actionable recommendations. Challenge: [INSERT]",
    "category": "Strategy"
  },
  {
    "text": "You are a LinkedIn ghostwriter. Write a personal story post for a founder in [INDUSTRY] about [TOPIC]. Make it vulnerable, insightful, and end with a strong call-to-comment. 250 words max.",
    "category": "Content"
  },
  {
    "text": "Create a standard operating procedure (SOP) for [TASK]. Format it as: Overview, Tools Needed, Step-by-Step Instructions (numbered), Common Mistakes, and a Checklist at the end.",
    "category": "Operations"
  },
  {
    "text": "You are a world-class sales trainer. I'm going to give you a sales objection. For each objection, give me: 1) Why the prospect really means it, 2) An empathy bridge, 3) A reframe, 4) A close. Objection: [INSERT]",
    "category": "Sales"
  },
  {
    "text": "Summarise the following document and extract: 1) Key decisions made, 2) Action items with owners, 3) Open questions, 4) Next steps. Keep each section to 3–5 bullet points. Document: [PASTE]",
    "category": "Operations"
  }
];

export const workflowBadges: string[] = [
  "Build Once · Run Forever",
  "Schedule & Trigger",
  "Connect Any App",
  "Cross-Department AI",
  "Audit Trail Built-in"
];

export const connectedPlatforms: { name: string; href: string }[] = [
  {
    "name": "Salesforce",
    "href": "https://www.salesforce.com"
  },
  {
    "name": "Monday.com",
    "href": "https://monday.com"
  },
  {
    "name": "Jira",
    "href": "https://www.atlassian.com/software/jira"
  },
  {
    "name": "Confluence",
    "href": "https://www.atlassian.com/software/confluence"
  },
  {
    "name": "ServiceNow AI Agents",
    "href": "https://www.servicenow.com/products/ai-agents.html"
  }
];

export const workflowSchedules: { label: string; text: string }[] = [
  {
    "label": "Time-Based",
    "text": "Daily · Weekly · Monthly · Custom cron"
  },
  {
    "label": "Event-Triggered",
    "text": "New file · Form submitted · Email received"
  },
  {
    "label": "Data Threshold",
    "text": "KPI alert · Budget limit · Volume spike"
  },
  {
    "label": "Chained Workflows",
    "text": "Output from one feeds the next automatically"
  }
];

export const serviceNowCallout: TitledText = {
  "title": "ServiceNow AI Agents",
  "text": "Let ServiceNow AI Agents sweat the small stuff so your people can focus on what matters most. Automate IT requests, HR cases, and operational workflows — Claude AI orchestrates the intelligence, ServiceNow executes the action. From incident triage to change approvals, the two platforms work in lockstep so nothing falls through the cracks."
};

export const socialService = { intro: {
  "title": "Social Media Campaign & Automation",
  "text": "AI writes, schedules, and analyses — you just approve and grow."
}, features: [
  {
    "title": "AI Content Generation",
    "text": "Claude writes captions, hooks, and carousel copy tailored to your brand voice — batch-produced in minutes, not hours."
  },
  {
    "title": "Auto-Scheduling",
    "text": "Posts go out at peak engagement windows automatically — no manual publishing, no missed slots, no social media fatigue."
  },
  {
    "title": "Performance Analytics",
    "text": "Reach, engagement, follower growth, and best-performing content — summarised by AI weekly so you know exactly what to double down on."
  },
  {
    "title": "Hashtag & Trend AI",
    "text": "Real-time hashtag optimisation and trend-riding suggestions so your posts get discovered by the right audience, every time."
  },
  {
    "title": "Cross-Platform Posting",
    "text": "One piece of content, auto-reformatted for Instagram, LinkedIn, TikTok, and YouTube Shorts — each platform gets its native format."
  },
  {
    "title": "DM & Comment Automation",
    "text": "Auto-respond to common DMs and comments with context-aware AI replies — audience stays engaged without you lifting a finger."
  },
  {
    "title": "Audience Growth Agent",
    "text": "AI identifies and engages with your ideal followers — growing your presence organically across every platform."
  }
] as TitledText[] };

export const emailService = { intro: {
  "title": "Email Campaign & Client Outreach",
  "text": "Hyper-personalised sequences that land in inboxes, not spam — and follow up automatically until they respond."
}, features: [
  {
    "title": "Hyper-Personalisation",
    "text": "Every email addressed by first name, company, and specific pain point — Claude pulls CRM data and writes each email as if drafted by hand."
  },
  {
    "title": "Drip Sequences",
    "text": "Multi-step outreach that triggers automatically — intro, follow-up day 3, value day 7, close day 14. All on autopilot."
  },
  {
    "title": "A/B Subject Testing",
    "text": "AI tests subject lines, send times, and CTAs — automatically promotes the winner to the full list for maximum open rates."
  },
  {
    "title": "CRM Integration",
    "text": "Syncs with Salesforce, HubSpot, or Monday.com — new leads auto-enter the sequence, replies update pipeline stage automatically."
  },
  {
    "title": "Deliverability Optimisation",
    "text": "AI monitors bounce rates and spam scores — warming domains and rotating senders to keep you out of the junk folder."
  },
  {
    "title": "Smart Follow-Up Timing",
    "text": "AI reads open signals to trigger follow-ups at exactly the right moment — when the prospect is most likely to reply."
  },
  {
    "title": "Conversion Reporting",
    "text": "Open, click, reply, and booked-call rates — all tracked weekly. Claude summarises what worked and rewrites underperformers automatically."
  }
] as TitledText[] };

export const trainingStats: { value: string; label: string }[] = [
  {
    "value": "12",
    "label": "Industries"
  },
  {
    "value": "8",
    "label": "Prompts / Session"
  },
  {
    "value": "10×",
    "label": "Faster Workflows"
  },
  {
    "value": "100%",
    "label": "Hands-On"
  }
];

export const trainingSteps: { num: string; title: string; meta: string; text: string }[] = [
  {
    "num": "01",
    "title": "Discovery Call",
    "meta": "30 minutes · Free",
    "text": "We learn your business, your team's tech comfort, and where you're losing the most time. No pitch — just listening."
  },
  {
    "num": "02",
    "title": "Custom Curriculum",
    "meta": "Built around your workflows",
    "text": "We build a training day using your real documents, your actual processes — not generic demos. Every example is yours."
  },
  {
    "num": "03",
    "title": "Live Training Day",
    "meta": "On-site or virtual · Hands-on",
    "text": "Every attendee walks away with AI tools they can use the next morning. No theory-only slides — real outputs, real results."
  },
  {
    "num": "04",
    "title": "Follow-Up System",
    "meta": "30-day prompt library included",
    "text": "30-day prompt library + check-in call included. We measure what changed and outline what to tackle next."
  }
];

export const trainingFormats: TitledText[] = [
  {
    "title": "On-Site",
    "text": "We come to you"
  },
  {
    "title": "Virtual",
    "text": "Zoom / Teams / Meet"
  },
  {
    "title": "4–8 Hours",
    "text": "Half day or full day"
  },
  {
    "title": "1–20 People",
    "text": "Individual to full team"
  }
];

export const trainingPrompts: { icon: string; title: string; text: string; prompt: string }[] = [
  {
    "icon": "✉️",
    "title": "Customer Reply",
    "text": "Professional, on-brand responses to any customer message — complaints, enquiries, or reviews.",
    "prompt": "Write a professional reply to [NAME] who [SITUATION]. Tone: [friendly/formal]. Business: [TYPE]. Address: [KEY POINT]."
  },
  {
    "icon": "📄",
    "title": "Proposal Generator",
    "text": "Full client proposals including scope, timeline and investment — generated in under 2 minutes.",
    "prompt": "Create a proposal for [CLIENT] for [SERVICE]. Include: overview, scope, timeline, investment. Budget: [RANGE]."
  },
  {
    "icon": "🔍",
    "title": "Market Research",
    "text": "Competitor analysis and market positioning — formatted as a comparison table, ready to share.",
    "prompt": "Summarise the top 5 competitors for [BUSINESS] in [LOCATION]. For each: strengths, weaknesses, pricing. Table format."
  },
  {
    "icon": "📱",
    "title": "Content Calendar",
    "text": "A full 30-day social media plan with post ideas, captions, hashtags and optimal posting times.",
    "prompt": "Build a 30-day social plan for [BRAND]. Platforms: [LIST]. Goal: [AWARENESS/LEADS]. Voice: [TONE]. [X] posts/week."
  },
  {
    "icon": "📧",
    "title": "Email Sequence",
    "text": "5-email welcome or nurture sequence that converts — intro, story, value, objection, close.",
    "prompt": "Write a 5-email welcome sequence for [BUSINESS]. Email 1: welcome. 2: story. 3: value. 4: objection. 5: offer."
  },
  {
    "icon": "📝",
    "title": "Meeting Summary",
    "text": "Turns raw meeting notes into structured action items, decisions, and next steps in seconds.",
    "prompt": "Summarise these notes: [PASTE]. Output: key decisions, action items with owners, next steps, open questions."
  },
  {
    "icon": "👤",
    "title": "Job Description",
    "text": "Compelling, bias-aware job descriptions that attract the right candidates and reflect your culture.",
    "prompt": "Write a job description for a [ROLE] at [COMPANY TYPE]. Responsibilities: [LIST]. Salary: [RANGE]. Culture: [DESC]."
  },
  {
    "icon": "📊",
    "title": "Report Narration",
    "text": "Turns raw numbers and data into a clear executive summary — insights, concerns, and one recommendation.",
    "prompt": "Turn these numbers into an executive summary: [DATA]. Focus: month-on-month change, highlights, 3 concerns, 1 action."
  }
];

export const trainingIndustries: { icon: string; name: string; tagline: string; text: string; outcomes: string[] }[] = [
  {
    "icon": "🏪",
    "name": "Medium to Small Business",
    "tagline": "Stop Doing Everything Manually",
    "text": "AI-powered replies, proposals, bookkeeping summaries & marketing copy — save 15+ hours every week.",
    "outcomes": [
      "Customer reply automation",
      "Quote & contract generation",
      "Competitor research in minutes"
    ]
  },
  {
    "icon": "🏘️",
    "name": "Real Estate",
    "tagline": "Close Faster. Research Smarter.",
    "text": "Listings, client comms, investment analysis & more — agents who use AI correctly win more deals, faster.",
    "outcomes": [
      "AI listing descriptions",
      "Market comp research",
      "Investor pitch decks & deal memos"
    ]
  },
  {
    "icon": "🏗️",
    "name": "Construction & Trades",
    "tagline": "Win More Bids. Waste Less Time.",
    "text": "AI-assisted bids, RFP summaries, safety checklists & project reports — built around your real projects.",
    "outcomes": [
      "Bid writing & estimation",
      "Subcontractor scope summaries",
      "Safety & compliance drafts"
    ]
  },
  {
    "icon": "📱",
    "name": "Social Media",
    "tagline": "Content That Converts, Automatically",
    "text": "AI-generated posts, captions, DM automation & trend-aligned content calendars across every platform.",
    "outcomes": [
      "30-day content calendars",
      "DM & comment automation",
      "Viral hook generation"
    ]
  },
  {
    "icon": "💼",
    "name": "Freelancers",
    "tagline": "Charge More. Deliver Faster.",
    "text": "Build service packages, automate client onboarding, write cold outreach & deliver higher-quality work in less time.",
    "outcomes": [
      "Cold outreach that gets replies",
      "Tiered service package builder",
      "Client onboarding automation"
    ]
  },
  {
    "icon": "📢",
    "name": "Marketing & Ads",
    "tagline": "Ad Copy That Actually Converts",
    "text": "Meta, Google & LinkedIn ad copy, A/B testing frameworks, landing page optimisation & campaign analysis.",
    "outcomes": [
      "Multi-platform ad copy",
      "A/B creative testing system",
      "Campaign ROI reporting"
    ]
  },
  {
    "icon": "👥",
    "name": "HR",
    "tagline": "Hire Smarter. Retain Better.",
    "text": "AI-powered job descriptions, CV screening, interview question generation & employee feedback drafting at scale.",
    "outcomes": [
      "Job description generation",
      "CV screening & shortlisting",
      "Interview prep & scoring rubrics"
    ]
  },
  {
    "icon": "🛡️",
    "name": "Compliance",
    "tagline": "Stay Audit-Ready, Always.",
    "text": "AI-drafted policies, regulatory summaries, risk assessments & audit checklists tailored to your sector.",
    "outcomes": [
      "Policy & procedure drafting",
      "Regulatory change summaries",
      "Risk assessment generation"
    ]
  },
  {
    "icon": "📊",
    "name": "Finance",
    "tagline": "Analyse Faster. Report Smarter.",
    "text": "AI-generated financial summaries, variance analysis, board reports & forecasting narratives in minutes.",
    "outcomes": [
      "Financial report narration",
      "Variance & trend analysis",
      "Budget summary generation"
    ]
  },
  {
    "icon": "🚀",
    "name": "Onboarding",
    "tagline": "First Day Ready, Every Time.",
    "text": "Automate new hire packs, welcome sequences, role guides & first-week schedules — personalised per role.",
    "outcomes": [
      "New hire welcome packs",
      "Role-specific induction guides",
      "30/60/90-day plan generation"
    ]
  },
  {
    "icon": "🔄",
    "name": "Offboarding",
    "tagline": "Clean Exits. Zero Knowledge Loss.",
    "text": "AI-generated handover documents, exit interview summaries & knowledge transfer packs — nothing falls through the cracks.",
    "outcomes": [
      "Handover doc generation",
      "Exit interview analysis",
      "Knowledge transfer packs"
    ]
  },
  {
    "icon": "📚",
    "name": "Training",
    "tagline": "Build Skills at Scale.",
    "text": "AI-generated training materials, quiz banks, learning paths & post-training assessments — for any skill level.",
    "outcomes": [
      "Course & module drafting",
      "Quiz & assessment generation",
      "Personalised learning paths"
    ]
  }
];

export const trainingPackages: { name: string; text: string }[] = [
  {
    "name": "Starter Session",
    "text": "1–5 people · 4 hours"
  },
  {
    "name": "Full Day Workshop",
    "text": "Up to 20 people · 8 hours · 8 curated industry prompts included"
  },
  {
    "name": "Monthly Retainer",
    "text": "Ongoing AI strategy · Monthly sessions"
  },
  {
    "name": "Enterprise Custom",
    "text": "Multi-location · Custom curriculum"
  }
];

export const peaceOfMind: TitledText[] = [
  {
    "title": "Security First",
    "text": "Enterprise-grade encryption for all data handling. Your workflows, credentials, and client data are protected at every layer of the stack."
  },
  {
    "title": "Trigger-Based Logic",
    "text": "High-precision scheduling so AI only fires when needed. Event-driven intelligence — no wasted compute, no false triggers, no runaway automation."
  },
  {
    "title": "Human-in-the-Loop",
    "text": "Systems flag complex cases for human review, ensuring 100% accuracy on decisions that matter. AI handles volume; humans handle judgement."
  }
];
