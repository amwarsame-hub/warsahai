# WarsaAi — Exportable Web Design Template

A marketing site template: landing page, services, pricing, company, blog with a
dashboard-based editor, contact and legal pages. Built with React + Vite + TypeScript +
Tailwind CSS + shadcn/ui.

## Run it locally

```sh
npm install
npm run dev
```

Build for production with `npm run build` — output lands in `dist/`.

## What's in it

| Route | Page |
| --- | --- |
| `/` | Home — hero, pillars, services, credibility, integrations, curriculum, blog |
| `/features` | The four service offerings |
| `/academy` | From Zero to Pro with Claude AI — prompt of the day, curriculum, Saturday sessions, register |
| `/prompts` | Prompt library — prompts by industry, prompt exchange, CRAFT framework and tips |
| `/workflows` | Reusable workflows by department, connected platforms, dashboard preview |
| `/training` | In-house AI training — process, industries, included prompts, packages |
| `/pricing` | Starter / Growth / Premium + plan detail pages |
| `/company` | Founder profile, mission, vision, credentials |
| `/blog`, `/blog/:slug` | Blog list and post pages |
| `/contact` | Enquiry form and contact details |
| `/legal/*` | Terms, privacy, cookie policy |
| `/login`, `/signup`, `/forgot-password` | Account pages |
| `/dashboard/*` | Profile settings and the blog editor (admin only) |

## Rebranding it for another site

Everything brand-specific lives in four places. Change these and the site re-skins.

1. **`src/utils/app-config.ts`** — name, one-line description, site URL, and the contact
   block (email, phone, location, social handle). The SEO component reads from here.
2. **`index.html`** — `<title>`, meta description, Open Graph and Twitter tags, and the
   Google Fonts link.
3. **`src/index.css`** — the colour tokens under `:root`. They are plain RGB triplets,
   e.g. `--primary: 37 99 235;` is `#2563EB`. The `--brand-*` tokens are the palette.
4. **`tailwind.config.ts`** — the `brand` colour namespace maps those tokens to utility
   classes like `bg-brand-cobalt`, and `fontFamily` sets heading vs body fonts.

Components use semantic classes (`bg-primary`, `text-muted-foreground`, `bg-brand-ink`)
rather than hardcoded colours, so changing a token updates every page at once.

## Blog content

Posts are stored in the `blog_posts` table and edited in the dashboard at
`/dashboard/blog`. Only rows with `status = "published"` appear on the public site.
The table ships empty — publish your first post from the dashboard.

## Logo and favicon

The logo slot is `public/images/common/logo.svg` (used by the navbar and footer) and
`/logo.svg` in `app-config.ts`. Drop your own file over those names and the whole site
picks it up. The browser tab icon is `public/favicon.ico`.

## Notes

- No prices are shown anywhere. The pricing tiers read "Enquire" — add real figures in
  `src/components/sections/pricing/` when you have them.
- The contact and newsletter forms currently confirm submission on screen but do not
  store the message. Wire them to a table or an email service before relying on them.
- Demo/sample pages and seeded fake profiles have been removed.
