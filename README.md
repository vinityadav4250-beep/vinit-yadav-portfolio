# Vinit Yadav — Portfolio Website

A modern, premium, recruiter-focused portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8) ![Vite](https://img.shields.io/badge/Vite-6-646cff)

## Features

- Dark mode premium design with glassmorphism effects
- Smooth scroll navigation and page transitions
- Animated typing effect in hero section
- Fully responsive layout for all devices
- SEO optimized with meta tags
- Reusable component architecture
- Loading screen animation
- GitHub contribution graph integration
- Contact form with mailto integration

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** React Icons

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, BackgroundEffects
│   ├── sections/        # Hero, About, Skills, Experience, etc.
│   └── ui/              # Reusable UI components (Button, GlassCard, etc.)
├── data/
│   └── portfolio.ts     # All portfolio content and configuration
├── hooks/               # Custom React hooks
├── utils/               # Animation variants and utilities
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vinityadav/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Name, title, location, and contact details
- Skills and technologies
- Work experience
- Projects
- Certifications and achievements
- Social media links

### Add Resume

Place your resume PDF at:
```
public/resume/Vinit_Yadav_Resume.pdf
```

### Update GitHub Username

In `src/data/portfolio.ts`, update the `githubStats.username` and `personalInfo.github` fields with your actual GitHub username.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **New Project** and import your repository
4. Vercel auto-detects Vite — use these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` base path if your repo name differs from `MyPortfolio`

2. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "cross-env GITHUB_PAGES=true npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Install cross-env (for Windows compatibility):

```bash
npm install --save-dev cross-env gh-pages
```

5. Deploy:

```bash
npm run deploy
```

6. Enable GitHub Pages in your repo settings:
   - Go to **Settings → Pages**
   - Source: **Deploy from branch**
   - Branch: **gh-pages** / **root**

Your site will be live at `https://<username>.github.io/MyPortfolio/`

## Environment Notes

- For GitHub Pages, the `base` path is set via `GITHUB_PAGES=true` environment variable
- For Vercel and other hosts, no environment variables are needed
- Update placeholder links (email, GitHub, LinkedIn) in `portfolio.ts` before deploying

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Designed and Developed by Vinit Yadav**
