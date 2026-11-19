# Vinit Yadav — Portfolio

Personal portfolio of **Vinit Yadav**, Full-Stack Software Engineer (.NET Core · C# · React).
Live: https://vinit-yadav-portfolio.vercel.app

## Stack

- React 18 + TypeScript, Vite 6
- Tailwind CSS 3 (custom dark design tokens in `tailwind.config.js` and `src/index.css`)
- Framer Motion 11 for reveals, split-text, magnetic buttons, timeline and parallax
- Lenis for smooth scrolling (off for touch devices and `prefers-reduced-motion`)
- react-icons

## Structure

```
src/
├── data/portfolio.ts          # ALL content: profile, metrics, stack, experience, projects, certifications
├── components/
│   ├── layout/                # Navbar, Footer, BackgroundEffects (grid, glow, cursor light)
│   ├── sections/              # Hero, About, Impact, Stack, Experience, Projects, Certifications, Contact
│   └── ui/                    # Button (magnetic), SplitText, SectionHeading, CountUp, LoadingScreen
├── hooks/                     # useSmoothScroll, useScrollSpy, useSpotlight
└── utils/                     # animation variants, scrollToSection
public/
├── resume/Vinit_Yadav_Resume.pdf   # served by every "Download Resume" button
├── og-image.png                    # 1200×630 social preview
├── robots.txt, sitemap.xml, favicon.svg
```

## Editing content

Everything shown on the page comes from `src/data/portfolio.ts`.

- **Add a certification:** append to `certifications` (title, issuer, date, skills, url).
- **Update the resume:** replace `public/resume/Vinit_Yadav_Resume.pdf` (keep the file name), or run `copy-resume.bat`.
- **Metrics:** only resume-backed numbers live in `metrics` — keep it that way.

## Contact form

There is no backend. The form validates input and opens the visitor's email app with a pre-filled
message (`mailto:`), plus "Copy email" and direct email/LinkedIn CTAs.

## Scripts

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview
npm run lint
```

Deployed on Vercel (`vercel.json`); pushes to `main` redeploy automatically.

> Note: if the project sits in a OneDrive folder and Vite fails with `EPERM … node_modules\.vite\deps`,
> delete `node_modules/.vite` and start again.
