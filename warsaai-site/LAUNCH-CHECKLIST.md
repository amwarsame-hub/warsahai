# WarsaAi Launch Checklist

Tick each item before going live. To replace a photo, save your new image under the **same file name** in the folder shown and it will update everywhere.

## 1. Legal pages (must fix — these still contain old payments-app wording)
- [ ] Terms & Conditions: `src/pages/legal/terms-&-condition.tsx` (page `/terms-&-condition`)
- [ ] Privacy Policy: `src/pages/legal/privacy-&-policy.tsx` (page `/privacy-policy`). Needs to be UK GDPR compliant and cover contact forms, newsletter and sign-in
- [ ] Cookie Policy: `src/pages/legal/cookie-policy.tsx` (page `/cookie-policy`)
- [ ] Get a solicitor or a UK legal template service to review all three

## 2. Template photos to replace
### Homepage (`public/images/homepage/`)
- [ ] `credit-card.webp`: credit card image (not relevant to AI services)
- [ ] `phone.webp`: phone mock-up from the old app
- [ ] `hero-stat.webp`, `core-feature*.webp` (4 files): finance dashboard screenshots
- [ ] `avatar-1..4.png`, `testimonial-1..2.webp`: stock faces. Use real clients only, with their permission
- [ ] `logo-1..5.svg`, `integration-1..5.svg`: other companies' logos. Remove them or use tools you actually work with

### Company page (`public/images/company/`)
- [x] Founder photo: now uses `ahmed-warsame.png` (your real photo). `ceo.webp` is no longer used and can be deleted
- [ ] `signature.svg`: replace with your own signature, or remove it
- [ ] `hero-1..3.webp`, `mission.webp`, `vision.webp`: stock office photos
- [ ] `team/team-1..27.png`: stock faces
- [ ] `investors/brand-1..12.svg`: other companies' logos

### Features & shared
- [ ] `public/images/features/chart-*.webp`, `tab-*.webp`: finance charts
- [ ] `public/images/common/blog-1..3.webp`: placeholder blog covers
- [ ] `public/images/common/revio-signup.svg`, `revio-download.svg`: old brand artwork
- [ ] App store badges on the homepage: remove them unless you have an app

## 3. Content
- [ ] Testimonials: replace the sample quotes with real ones (`src/components/sections/home/testimonials.tsx`)
- [ ] Publish at least 2–3 blog posts from the dashboard
- [ ] Confirm the email, phone and London address in `src/utils/app-config.ts`
- [ ] Set `url` in `src/utils/app-config.ts` to the live address (it feeds canonical links and share previews)
- [ ] Academy: check the Saturday session topics in `src/data/academy-interactive.ts` (dates are generated automatically)
- [ ] Workflows page: the dashboard preview shows sample figures. Keep the "sample data" label or swap in real numbers

## 4. Functionality
- [ ] Contact form: it currently **shows "sent" but saves nothing**. Connect it before launch
- [ ] Newsletter signup: same issue
- [ ] Create your admin account for the blog dashboard
- [ ] Academy register, session sign-up and training enquiry buttons open the visitor's email app. Confirm that is what you want, or connect them to a form

## 5. Go-live
- [ ] Netlify: add `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` and `VITE_SUPABASE_PROJECT_ID` under Site configuration > Environment variables (values are in your local `.env`). The build stops with a clear message if they are missing
- [ ] Push to the `test` branch; Netlify builds `warsaai-site` and publishes `dist/` (see `netlify.toml` in the repo root). Or run `npm install && npm run build` and upload `dist/` yourself
- [ ] Point `warsaai.com` at your hosting
- [ ] Test every page on mobile and desktop
- [ ] Share a link and check that the preview shows your logo
