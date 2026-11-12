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
    social: {
        instagram: "https://www.instagram.com/warsaa.ai/",
        youtube: "https://www.youtube.com/@warsaa.ai",
    },
}

/** Builds a mailto: link to the site's contact address. */
export const mailto = (subject: string, body?: string) =>
    `mailto:${appConfig.contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`
