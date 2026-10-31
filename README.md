# THE BUILDER'S LAB ✦

> **Where Curiosity Becomes Capability.**  
> Developer Portfolio of **Tanush Kasetty** — Student Developer  
> Built for the **AWS Student Builder Challenge 2026**

[![AWS Amplify](https://img.shields.io/badge/Deploy-AWS_Amplify_Hosting-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 🏛️ Project Overview

**THE BUILDER'S LAB** is an original, premium developer portfolio engineered for the **AWS Student Builder Challenge 2026**. It embodies an aesthetic synthesis of a **Futuristic Digital Laboratory** and **Editorial Minimalism**, rejecting generic AI design clichés (such as neon-on-dark glow cards, glassmorphic blur, and repetitive identical card grids) in favor of purposeful typography, OKLCH perceptual color tokens, and rigorous engineering honesty.

### Owner Profile
- **Developer:** Tanush Kasetty
- **Title:** Student Developer
- **Education:** B.Tech Computer Science and Engineering (2025–2029)  
  *CSI Wesley Institute of Technology and Science, Hyderabad*
- **Technical Foundations:** DCAP (Diploma in Computer Applications — MS Office, Word, C, C++)
- **GitHub:** [github.com/tanush326k](https://github.com/tanush326k)
- **LinkedIn:** [linkedin.com/in/tanush701321](https://www.linkedin.com/in/tanush701321/)
- **GeeksforGeeks:** [geeksforgeeks.org/profile/tanush326k](https://www.geeksforgeeks.org/profile/tanush326k)
- **DEV Community:** [dev.to/tanush_326k](https://dev.to/tanush_326k)
- **Credly:** [credly.com/users/tanush-kasetty](https://www.credly.com/users/tanush-kasetty)
- **AWS Builder Center:** `@tanush326`

---

## ⚡ Signature Feature: Builder's Quest (Discover Your Builder DNA)

An interactive laboratory instrument situated at `#lab` (with direct discovery cues from the hero section and navigation header):

1. **Stage 1 — Choose Your Challenge:** Visitors select a technology challenge or problem-solving interest (AI & Agents, Cloud & Infrastructure, Product & Interfaces, Developer Tools, Data & Analytics, Systems & Reliability).
2. **Stage 2 — Make Your Move:** A contextual, decision-based engineering scenario presented based on the chosen challenge.
3. **Stage 3 — Reveal Your Builder DNA:** Real-time computation of developer archetype, matching strengths, working style, and recommended project from Tanush's actual shipped systems.
4. **Stage 4 — The Builder Card:** An interactive, shareable builder card summarizing the visitor's identified archetype, tagline, and engineering mission.
5. **Accessibility & Rigor:**
   - Full keyboard navigation (`Tab`, `Space`, `Enter` tag selection).
   - ARIA live announcements (`role="region"`, `aria-live="polite"`).
   - "Skip sequence animation" control for immediate access.
   - Respects `prefers-reduced-motion` settings.
   - Deterministic calculations — zero paid API or external backend required.

---

## 🧪 Ten Standalone Systems & Architectures

All ten standalone projects reflect genuine, independently verified software:

| # | Project | Subtitle / Domain | Stack | Verified Status |
|---|---|---|---|---|
| 1 | **ProductivityOS AI** | All-in-One GenAI Workspace | Next.js 16, React 19, Tailwind v4, Groq SDK, Gemini | 🟢 **Live on AWS Amplify** |
| 2 | **PulseOps** | AI Incident Commander | Python, FastAPI, Strands SDK, boto3, Amazon Bedrock | 🟡 **Local Setup** (Optional Bedrock via boto3) |
| 3 | **ClauseLens** | Legal Contract Intelligence | Next.js 15, React 19, Gemini Flash, Zod, Vitest | 🟢 **Live on Render** (97 Tests Documented) |
| 4 | **Planora AI** | Intelligent Event Planning Assistant | Next.js 16, React 19, Gemini 2.5 Flash, Zod, TypeScript | 🟢 **Live on Vercel** |
| 5 | **MatchOps AI** | Smart Stadium Mission Control | React 19, Vite, FastAPI, Python, Docker, Gemini | 🟢 **Live on Render** |
| 6 | **CarbonTrack** | Carbon Footprint Analytics | Python, FastAPI, JavaScript, Docker, SQLite | 🟢 **Live on Cloud Run** (32 Tests Documented) |
| 7 | **Smart Notes** | AI-Powered Contextual Notebook | Vite, React 19, Tailwind v4, Framer Motion, TS, Gemini | 🟢 **Live on Vercel** |
| 8 | **Election Guide** | Interactive Civic Education App | HTML5, CSS3, JavaScript, Docker | 🟡 **Local / Container Setup** |
| 9 | **Daily Routine Analyser** | Productivity Pattern Analyzer | C, CLI, Terminal | 🟡 **Local CLI Project** |
| 10 | **Hermes Agent Assistant** | Autonomous Workflow Agent | Python, FastAPI, Uvicorn, Pydantic v2 | 🟡 **Local Setup Required** |

*Note: MoneyBuddy was an experimental voice agent created within project branches during the Murf AI challenge and is documented as a hackathon experiment rather than an eleventh standalone project card.*

---

## ☁️ AWS Architecture & Continuous Deployment

This portfolio is configured for automated continuous deployment on **AWS Amplify Hosting**:

- **Build Pipeline:** [`amplify.yml`](./amplify.yml) triggered on GitHub pushes.
- **Client Distribution:** Zero-SSR static client architecture (`dist/`) distributed globally across AWS edge points of presence.
- **AWS Bedrock Integration:** Integrated in PulseOps via Python AWS SDK (`boto3`) for automated incident post-mortem generation.

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install -g pnpm
        - pnpm install
    build:
      commands:
        - pnpm build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js `v20+` or `v22+`
- pnpm `v10+` / `v11+` or npm

### Installation
```bash
# Clone the repository
git clone https://github.com/tanush326k/the-builders-lab.git
cd the-builders-lab

# Install dependencies
pnpm install

# Start local development server
pnpm dev
```

### Production Build & Verification
```bash
# Type check and build bundle
pnpm build

# Preview production build locally
pnpm preview
```

---

*© 2026 Tanush Kasetty. Built for the AWS Student Builder Challenge 2026.*
