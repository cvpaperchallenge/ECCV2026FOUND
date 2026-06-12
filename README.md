# FOUND Workshop @ ECCV 2026

**FOUND: Foundation Data for Industrial Tech Transfer**
*Bridging Academic Progress and Practical Impact through Domain-Grounded Data*

ECCV 2026 Workshop | September 8–9, 2026 (TBD) | Malmö, Sweden

- Website: https://eccv2026-found-workshop.limitlab.xyz/
- Contact: gatheluck[at]gmail.com

## About

Foundation models have pushed computer vision forward, but their reliability often drops in real-world, domain-specific deployments due to long-tail distributions, domain shift, and operational constraints (privacy, safety, cost). Closing this "last-mile" gap requires not only better models, but domain-tailored datasets that capture rare yet critical corner cases and realistic variability. This workshop refers to this missing piece as Foundation Data: fine-grained, domain-grounded data designed to bridge academic progress and practical impact.

### Topics

- Foundation Data creation: collection, curation, and labeling for non-Internet and domain-specific settings
- Self-supervised, semi-supervised, and weakly-supervised learning for domain-grounded data
- Synthetic and simulation data for bridging domain gaps and covering rare corner cases
- Robustness under domain shift, OOD conditions, and long-tail distributions in industrial deployments
- Physical AI and World Models: data and transfer strategies for embodied and interactive systems
- Deployment-aligned evaluation protocols and responsible data governance for real-world AI

### Past Workshops

| Year | Conference | URL |
|------|-----------|-----|
| 2025 | ICCV | https://iccv2025-found-workshop.limitlab.xyz/ |

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 22 LTS or later (or use [mise](https://mise.jdx.dev/) — configured via `.mise.toml`)
- [Yarn](https://yarnpkg.com/) package manager

### Setup

```bash
git clone git@github.com:cvpaperchallenge/ECCV2026FOUND.git
cd ECCV2026FOUND
yarn install
```

### Dev Server

```bash
yarn dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
yarn build
```

The production output is generated in `build/client/`. This is a fully static site (SPA mode) that can be hosted on any static file server.

### Lint & Format

```bash
yarn lint      # ESLint + Prettier check
yarn format    # Auto-format
```

### Docker

Docker Compose configurations are provided in `environments/`.

```bash
# Development
cd environments/dev
docker compose up

# CI / Production build
cd environments/ci
docker compose up
```

## Deployment

The site is automatically deployed to GitHub Pages on every push to the `develop` branch via GitHub Actions (`.github/workflows/deploy.yaml`). The custom domain `eccv2026-found-workshop.limitlab.xyz` is configured to point to this deployment.

Manual deployment is also possible — run `yarn build` and serve the `build/client/` directory with any static hosting service.

## Project Structure

```
ECCV2026FOUND/
├── src/
│   ├── app/
│   │   ├── routes/Home.tsx   # Main page (all sections)
│   │   ├── layout.tsx        # Site layout
│   │   ├── root.tsx          # App root
│   │   └── app.css           # Global styles and color palette
│   ├── components/
│   │   ├── ui/               # UI component library (shadcn/ui)
│   │   ├── header.tsx        # Navigation header
│   │   ├── footer.tsx        # Page footer
│   │   └── Orb.tsx           # WebGL animated background
│   ├── data/
│   │   ├── workshop.json     # Workshop content (title, dates, CFP, schedule, contact)
│   │   ├── people.json       # Organizers and speakers
│   │   └── extras.json       # Past events, awards, supporters
│   └── lib/
│       ├── seo.ts            # SEO metadata and OGP settings
│       ├── structured-data.ts # JSON-LD structured data
│       └── calendar.ts       # Date utilities and ICS generation
├── public/
│   ├── organizers/           # Organizer photos (302x302px recommended)
│   ├── program/              # Speaker photos (512x512px recommended)
│   ├── eccv-navbar-logo.svg  # ECCV 2026 conference logo
│   ├── favicon.ico           # Browser tab icon
│   ├── sitemap.xml           # Sitemap
│   └── robots.txt            # Robots configuration
├── environments/             # Docker Compose configs
├── .github/workflows/        # CI/CD (lint, build, deploy)
└── package.json
```

## How to Edit Content

Most content updates only require editing JSON files in `src/data/` — no code changes needed.

| What to update | File |
|---------------|------|
| Title, dates, overview, CFP, schedule, contact | `src/data/workshop.json` |
| Organizers, invited speakers | `src/data/people.json` |
| Past events, awards, supporters | `src/data/extras.json` |
| SEO metadata, OGP | `src/lib/seo.ts` |
| Color palette | `src/app/app.css` |
| Navigation links | `src/components/header.tsx` |
| Footer links | `src/components/footer.tsx` |

To show/hide sections (e.g., Program, Invited Speakers), comment out or uncomment the corresponding blocks in `src/app/routes/Home.tsx`.

## Tech Stack

- **Framework**: [React Router 7](https://reactrouter.com/) (SPA mode)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives (via shadcn/ui)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **3D Graphics**: [OGL](https://oframe.github.io/ogl/) (WebGL)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Linting**: ESLint + Prettier
