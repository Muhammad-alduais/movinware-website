# MovinWare — AI-Powered ERP Website

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](#)
[![Stack](https://img.shields.io/badge/React-18-61dafb)](#)
[![Stack](https://img.shields.io/badge/TypeScript-5.6-3178c6)](#)
[![Stack](https://img.shields.io/badge/Vite-5-646cff)](#)
[![Stack](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](#)

> **Smart Operations & Seamless Transformation with AI-Powered ERP Solutions**

The official MovinWare website — a high-performance, fully bilingual (Arabic / English) marketing site for MovinWare's AI-powered ERP platform. It showcases solutions across education, retail, manufacturing, and logistics, with an end-to-end implementation methodology, platform capabilities, and an integrated contact workflow.

---

## Features

- **Fully bilingual with RTL support** — Arabic is the default display language, with a one-click switch to English. Complete RTL mirroring for layout, typography (Cairo / Brockmann), and directional components.
- **Marketing sections** — Hero, Value Proposition, Professional Services, ERP Solutions, Platform Capabilities, Industries, Implementation Timeline, Testimonials, and Contact.
- **Interactive methodology & timeline** — Responsive step connectors that reflow between a horizontal line on desktop and a vertical timeline on mobile, honoring RTL direction.
- **Rich detail modals** — Click-through cards for services, ERP modules, and industries with capabilities, benefits, timeline, and process steps.
- **Contact workflow** — Client-side validation with localized toasts (sonner), EmailJS submission, and an automatic `mailto:` fallback.
- **Performance-first** — Production-grade static serving with immutable hashed assets, long-lived media caching, gzip/compression, and modern `.webp` imagery.
- **SEO ready** — Structured Open Graph / Twitter meta tags and a full `Organization` JSON-LD schema.

## Tech Stack

| Layer     | Technology                                                                 |
| --------- | -------------------------------------------------------------------------- |
| Frontend  | React 18, TypeScript 5.6, Vite 5, Tailwind CSS 3.4, shadcn/ui (Radix UI)   |
| Animation | Framer Motion, CSS-driven reveal animations                                |
| Icons     | Lucide React                                                               |
| Backend   | Node.js, Express 4, compression                                            |
| Email     | EmailJS (browser) with `mailto:` fallback                                  |
| Build     | Vite (client) + esbuild (server bundle), `tsx` for development             |

## Getting Started

### Prerequisites

- Node.js **18+** and npm
- A Git checkout of this repository

### Installation

```bash
npm install
```

### Run in development

Starts the Express server with Vite middleware (hot reload on port **5000**):

```bash
npm run dev
```

Open http://localhost:5000 — Arabic is the default; use the language switch in the navigation bar to toggle English.

### Production build & run

```bash
npm run build     # builds the client (dist/public) and bundles the server (dist)
npm start         # serves the built site + API on port 5000
```

### Type checking

```bash
npm run check
```

## Environment Variables

The contact form ships with working defaults. Set these to override EmailJS credentials:

| Variable                    | Purpose                        | Default in code        |
| --------------------------- | ------------------------------ | ---------------------- |
| `VITE_EMAILJS_SERVICE_ID`   | EmailJS service ID             | `service_2owengl`      |
| `VITE_EMAILJS_TEMPLATE_ID`  | EmailJS template ID            | `template_fsz5pvq`     |
| `VITE_EMAILJS_PUBLIC_KEY`   | EmailJS public key             | `mvNDcozrdeDRdhgJX`    |

If EmailJS is unavailable or unconfigured, the form automatically falls back to the visitor's email client via a generated `mailto:` link.

## Project Structure

```
movinware-website/
├── client/                    # React single-page application
│   ├── index.html             # SEO meta, Open Graph, JSON-LD schema
│   └── src/
│       ├── components/        # Section components (Hero, Services, Industries, ...)
│       │   └── ui/            # shadcn/ui primitives
│       ├── contexts/
│       │   └── LanguageContext.tsx  # EN/AR translation dictionary + RTL state
│       ├── pages/             # Route pages (Index, NotFound)
│       ├── hooks/             # Shared hooks
│       ├── lib/               # Utilities
│       ├── index.css          # Tailwind theme + RTL helpers
│       ├── App.tsx            # Providers, routing (wouter)
│       └── main.tsx           # Entry point
├── server/                    # Express server
│   ├── index.ts               # App bootstrap (compression, middleware, port 5000)
│   ├── routes.ts              # /api route registration
│   └── vite.ts                # Dev Vite middleware + prod static serving
├── shared/                    # Shared types/schema
├── dist/                      # Build output (gitignored)
└── package.json
```

## Scripts

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `npm run dev`      | Start development server with hot reload             |
| `npm run build`    | Production build (client + server bundle)            |
| `npm start`        | Run the production server from `dist/`               |
| `npm run check`    | TypeScript type checking                             |
| `npm run db:push`  | Push the Drizzle schema to the configured database   |

## Deployment

1. Run `npm run build`.
2. Deploy the whole repository; start with `npm start`.
3. The server serves the SPA from `dist/public` and the API on port **5000**.
4. Point your domain / reverse proxy at port 5000 (HTTPS recommended).

## License

[MIT](https://opensource.org/license/mit) — © MovinWare.

## Developer

**Eng. Muhammad Ameen Al-Duais**
