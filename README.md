# Sathkrith Gaur — Game Developer Portfolio

A high-performance, interactive 3D portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and React Three Fiber. Features 8 custom UI components from vengenceui.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev
# Opens http://localhost:3000

# Production build
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei, three.js)
- **Icons**: react-icons, lucide-react

## 🎨 Components (vengenceui)

| Component | Location | Description |
|-----------|----------|-------------|
| `SocialFlipButton` | `src/components/ui/social-flip-button.tsx` | 3D flip cards for social links (GitHub, LinkedIn, Email) |
| `PerspectiveGrid` | `src/components/ui/perspective-grid.tsx` | 3D perspective grid background for hero |
| `CreepyButton` | `src/components/ui/creepy-button.tsx` | Interactive button with eye-tracking pupils |
| `FlipText` | `src/components/ui/flip-text.tsx` | Character-by-character flip animation |
| `AsciiGlitchRipple` | `src/components/ui/ascii-glitch-ripple.tsx` | Text glitch effect on hover |
| `ScrollDissolveReveal` | `src/components/ui/scroll-dissolve-reveal.tsx` | WebGL dissolve transition on scroll |
| `SolarSystem` | `src/components/ui/solar-system.tsx` | Orbiting skill nodes around central core |
| `AnimatedTooltip` | `src/components/ui/animated-tooltip.tsx` | Playful SVG tooltip variants |

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout with fonts
│   ├── globals.css              # Global styles & CSS variables
│   └── work/[slug]/page.tsx     # Dynamic project detail pages
├── components/
│   ├── ui/                      # 8 vengenceui components
│   └── site/                    # Page sections
│       ├── site-header.tsx
│       ├── hero-section.tsx
│       ├── philosophy-section.tsx
│       ├── projects-section.tsx
│       ├── skills-section.tsx
│       ├── about-section.tsx
│       ├── contact-section.tsx
│       ├── site-footer.tsx
│       ├── role-flip-text.tsx
│       └── lazy-mount.tsx
├── data/
│   └── projects.ts              # Project data (4 projects)
├── lib/
│   └── utils.ts                 # cn() utility
└── public/
    ├── projects/                # Project cover images
    └── resume.pdf               # Resume (add your own)
```

## 🛠️ Customization

### Adding/Editing Projects
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    slug: "my-project",
    number: "05",
    title: "My New Project",
    category: "GAMEPLAY / AI",
    year: "2026",
    engine: "Unreal Engine",
    description: "Short description for project cards",
    longDescription: "Full description for detail page",
    technologies: ["Unreal Engine 5", "C++", "Blueprints"],
    disciplines: ["Gameplay Systems", "AI", "Animation"],
    cover: "/projects/my-project.jpg",
    technicalDetails: {
      overview: "...",
      problem: "...",
      approach: "...",
      implementation: "...",
      result: "...",
      lessons: "..."
    }
  }
]
```

### Adding Project Images
Place cover images in `public/projects/` as `{slug}.jpg` (1600×1000 recommended).

### Customizing Skills (SolarSystem)
Edit `src/components/site/skills-section.tsx` - modify the `gameDevOrbits` array with your skills.

### Social Links
Edit `src/components/site/contact-section.tsx` - update `SOCIAL_ITEMS` array.

### Resume
Add your `resume.pdf` to `public/resume.pdf` (linked in header).

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Or connect your repo at [vercel.com](https://vercel.com) — zero config.

### Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export (if needed)
Add to `next.config.ts`:
```typescript
output: 'export',
images: { unoptimized: true }
```
Then `npm run build` outputs to `out/`.

## ⚡ Performance Notes

- **Lazy-mounted WebGL**: Projects section uses `LazyMount` to only initialize WebGL canvases when near viewport
- **Static Generation**: All routes pre-rendered at build time (SSG)
- **Font Loading**: Google Fonts via `<link>` (not `next/font`) for build reliability
- **Image Optimization**: Next.js Image component for project covers

## 🎯 Known Tradeoffs

- Each `ScrollDissolveReveal` creates a WebGL context. On low-end devices, rapid scrolling past multiple projects may cause brief stutter.
- `SolarSystem` uses CSS animations (not WebGL) for broad compatibility.
- `AsciiGlitchRipple` locks element width during animation to prevent layout shift.

## 📄 License

MIT — feel free to use as a template for your own portfolio.