export const appConfig = {
    name: "WarsaAi",
    description: "WarsaAi designs, builds and integrates custom AI solutions — plus a Saturday live community that takes you from zero to pro with Claude AI.",
    url: "https://www.warsaai.com",
    logo: "/images/common/logo.png",
    favicon: "/favicon.png",
    ogImage: "/og-image.jpg",
    contact: {
        email: "ahmed@warsaai.com",
        phone: "+44 7450 209184",
        location: "London, UK",
        handle: "@warsaa_ai",
    },
    /** Calls to action. One primary action site-wide; the quick brief is the only secondary. */
    cta: {
        primary: "Book an Efficiency Audit",
        secondary: "Send a quick brief",
        briefHref: "/#start-building",
        /** Shown under the primary button in the hero and the closing banner. */
        auditNote: "Free 30-minute conversation by video, phone or in writing. No obligation. You receive a summary of your workflows, the tools to connect and an estimated return on investment.",
    },
    social: {
        instagram: "https://www.instagram.com/warsaa.ai/",
        youtube: "https://www.youtube.com/channel/UCCJi9JMH5k1wzy6HKEpmcJw",
        x: "https://x.com/warsaai",
        linkedin: "https://www.linkedin.com/in/warsaai-warsaai-5684a2452",
        tiktok: "https://www.tiktok.com/@warsaai?lang=en-GB",
        // Placeholder until a real profile link is confirmed; empty = shown greyed out.
        facebook: "",
    },
}

/** Builds a mailto: link to the site's contact address. */
export const mailto = (subject: string, body?: string) =>
    `mailto:${appConfig.contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`
