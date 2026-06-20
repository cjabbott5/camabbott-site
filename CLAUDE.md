# The Lost Records — Project Context

## What this is
A public archive + evidence base for mental healthcare reform. Collects real
experiences from patients, providers, and advocates to surface systemic patterns
and push for change. Tone is direct, dignity-centered, trauma-informed.

## Where the code lives
- Repo: cjabbott5/camabbott-site
- The app is in `TheLostRecords/` (the repo also contains
  `CamAbbottWebsite New2026/` and `CamAbbottWebsite Old/` — ignore those unless told).
- Deployed via Vercel at camabbott.vercel.app

## Stack
React + Vite + Tailwind + Framer Motion.

## Token palette — STRICT
Use semantic tokens only. Never hardcode colors or guess hex values.
Defined in `tailwind.config.js` and `styles/index.css`:
- Surfaces: base, surface, raised, hairline
- Accent: accent, accent-soft, accent-strong, accent-ink
- Text: ink, muted, faint
- Secondary: ember
If a token doesn't exist for what you need, ask before inventing one.

## Conventions
- All animation must respect prefers-reduced-motion.
- Reuse existing components: AnimatedThreads, CrisisResources (full/compact variants).
- Legal/utility pages exist: PrivacyPolicy.jsx, TermsOfUse.jsx, NotFound.jsx.
  Routes (/privacy, /terms, *) are wired in App.jsx.

## Content & policy rules (non-negotiable)
- 18+ for direct submissions, by design. Youth experiences come *through* adults
  (recounting their own minor care, or as parents/guardians/providers). This avoids
  COPPA/consent complexity — do not add youth-facing submission flows.
- This is an archive/advocacy project, NOT a crisis service or treatment provider.
  Crisis resources (988, Crisis Text Line, 911) should remain easy to surface.
- Stories: under 500 words, at least one tag. Don't name individuals — describe
  roles and settings ("the attending psychiatrist," "the adolescent unit").

## Before declaring done
Syntax-check changed files with esbuild. Don't leave a broken build.