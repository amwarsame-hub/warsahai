# AGENTS.md

## Rules
- Keep the app exportable as a standalone template: no demo/sample routes, no seeded fake people or fake posts, and no hardcoded brand strings — all site copy comes from one config source so the template can be re-skipped for another site.
- Brand identity (name, copy, contact details) lives in `src/utils/app-config.ts` and `index.html`; components read from there rather than repeating the name inline.
- Colors and fonts are design tokens in `src/index.css` + `tailwind.config.ts`; components use semantic token classes, never hardcoded color utilities.
