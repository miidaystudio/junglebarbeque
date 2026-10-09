# 🍪 KOOKY KIND — Premium Artisan Cookie Web App

> **"Cookies That Don't Follow The Recipe"** — A playful, high-energy, retro-editorial landing page and ordering experience crafted for modern food lovers.

---

## ✨ Overview

**KOOKY KIND** is a direct-to-consumer artisanal cookie brand web application built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. Featuring a distinctive scrapbook & retro-pop design system, bold typography, tactile micro-interactions, an interactive cart slideover, real-time box builders, and bakehouse stories.

---

## 🚀 Key Features

- 🍪 **Interactive Flavor Showcase**: Filter through wild flavor drops, gooey molten centers, and dietary badges (Gluten-Free, Vegan, High Protein).
- 🛍️ **Slideover Cart Drawer & Box Builder**:
  - Live cookie counter and dynamic order summary.
  - Free shipping progress threshold unlocking ("Add X more for free express shipping").
  - Instant floating toast notifications on item addition.
- 🎨 **Scrapbook & Retro-Pop Aesthetic**:
  - Washi-tape accents, organic cutouts, sticker badges, and tactile drop shadows.
  - Curated typography pairing **Dela Gothic One** (bold display), **Caveat** (handwritten notes), and **Outfit / Plus Jakarta Sans** (clean modern body).
- 📍 **IRL Bakehouse Locator & Stockists**: Interactive city-switcher and opening hours guide for physical pick-up points.
- 🗞️ **The Crumb Dispatch**: Editorial journal & behind-the-oven recipes.
- 💌 **Secret Drop VIP Newsletter**: Interactive club subscription widget with promo-code reward system.
- ⚡ **Optimized Performance**: Zero heavy external animation dependencies, native CSS keyframes, automatic Next.js image optimization, and full static rendering.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design System |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Google Fonts (`Dela Gothic One`, `Caveat`, `Outfit`, `Plus Jakarta Sans`) via `next/font` |

---

## 🎨 Design System & Color Palette

| Token Name | Hex Code | Purpose | Preview |
|---|---|---|---|
| **Cream (Primary Bg)** | `#FBF6EE` | Canvas / Warm Paper background | ![#FBF6EE](https://via.placeholder.com/15/FBF6EE/000000?text=+) |
| **Coral Red (Accent)** | `#EB4823` | High-impact buttons, CTAs, stickers | ![#EB4823](https://via.placeholder.com/15/EB4823/000000?text=+) |
| **Sunshine Yellow** | `#FFD233` | Highlight boxes, badges, newsletter | ![#FFD233](https://via.placeholder.com/15/FFD233/000000?text=+) |
| **Matcha Green** | `#68A843` | Success states, sustainability tags | ![#68A843](https://via.placeholder.com/15/68A843/000000?text=+) |
| **Cobalt Blue** | `#1D5BB6` | Editorial badges, flavor pill accents | ![#1D5BB6](https://via.placeholder.com/15/1D5BB6/000000?text=+) |
| **Dark Ink** | `#191817` | Text, brutalist 2px/3px borders | ![#191817](https://via.placeholder.com/15/191817/000000?text=+) |

---

## 📂 Project Structure

```text
├── app/
│   ├── favicon.ico          # Dynamic / Static icon route
│   ├── globals.css          # Design tokens, keyframe animations, scrapbook utilities
│   ├── icon.svg             # Custom SVG brand favicon
│   ├── layout.js            # Root layout with Google font variables & SEO metadata
│   └── page.js              # Main single-page application & cart state coordinator
├── components/
│   ├── AboutStorySection.jsx  # Brand manifesto & the "Non-Recipe" journey
│   ├── CookiesSection.jsx     # Flavor catalogue, dietary tags & add-to-box actions
│   ├── FindUsSection.jsx      # Physical bakery locations & stockist guide
│   ├── GoodStuffSection.jsx   # Sustainability, real butter & ingredient pledge
│   ├── JournalSection.jsx     # Editorial blog cards & newsletter lead-gen
│   ├── KookyFooter.jsx        # Retro collage footer, quick links & socials
│   └── KookyHeroSection.jsx   # Hero banner, marquees, flavor highlight & navbar
├── public/
│   ├── favicon.svg          # Standalone SVG brand icon
│   └── images/              # High-res optimized brand photography
└── package.json             # Project dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** 18.17 or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/kooky-kind.git
cd kooky-kind
npm install
```

### 3. Run Locally in Development Mode
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
Create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📱 Responsive & Accessible Design

- Fully responsive from mobile devices (360px+) to ultra-wide displays (1440px+).
- Accessible color contrasts on interactive buttons and text.
- Semantic HTML5 structure (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
