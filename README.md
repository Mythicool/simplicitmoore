# SimplicIT Website

A premium React + Vite website for SimplicIT, a computer repair and business IT support company in Moore, Oklahoma.

## Features

- **Apple LiquidGlass Aesthetic**: Ultra-modern UI with frosted glass effects, neon accents, and fluid animations
- **Fully Responsive**: Optimized for all devices
- **SEO Optimized**: Local SEO for Moore, OKC, and Norman areas
- **Premium Components**: Reusable LiquidGlass cards, sections, CTAs, and more
- **7 Complete Pages**:
  - Home (epic hero with CTAs)
  - Computer Repairs & Upgrades (priority revenue driver)
  - Business IT / MSP Services
  - Services Overview
  - About
  - Pricing (transparent repair and MSP pricing)
  - Contact (with form)

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **TailwindCSS** for styling
- **React Router** for navigation
- **No UI frameworks** - custom components built from scratch

## Design System

The site features a comprehensive custom design system with:

- **Colors**: Obsidian gradients, steel grays, neon cyan/blue accents
- **Effects**: LiquidGlass panels, micro-glows, edge highlights
- **Typography**: Inter, Sora, and Manrope fonts
- **Animations**: Smooth fades, slides, and hover effects

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The dev server runs at `http://localhost:5173`

Project structure:
```
src/
  ├── components/     # Reusable LiquidGlass components
  │   ├── LiquidGlassCard.tsx
  │   ├── LiquidGlassSection.tsx
  │   ├── Navigation.tsx
  │   ├── Footer.tsx
  │   ├── PrimaryCTA.tsx
  │   ├── ServiceCard.tsx
  │   └── PricingCard.tsx
  ├── pages/          # Page components
  │   ├── Home.tsx
  │   ├── ComputerRepairs.tsx
  │   ├── BusinessIT.tsx
  │   ├── Services.tsx
  │   ├── About.tsx
  │   ├── Pricing.tsx
  │   └── Contact.tsx
  ├── App.tsx         # Main app with routing
  ├── main.tsx        # Entry point
  └── index.css       # Global styles & Tailwind
```

## Deployment

This site can be deployed to:
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- Any static hosting service

### Netlify Deploy (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## SEO & Performance

- Semantic HTML5 markup
- Optimized meta tags for local search (Moore, OKC, Norman)
- Google Fonts preconnect for faster loading
- TailwindCSS purging for minimal CSS bundle
- Fast page load times
- Mobile-first responsive design

## License

© 2024 SimplicIT. All rights reserved.
