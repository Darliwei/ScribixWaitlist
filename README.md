# Scribix Waitlist Landing Page

A modern, dark-mode landing page for Scribix - an AI-powered social media content generator.

## Features

- 🎨 Modern dark mode design with neon accents
- ⚡ Animated background with glowing network effects
- 📱 Fully responsive design
- 🚀 Built with React, TypeScript, and Tailwind CSS
- ✨ Smooth animations and hover effects

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── KeyFeatures.tsx
│   ├── WhoItsFor.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── WaitlistForm.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

- **Colors**: Edit `tailwind.config.js` to customize neon colors
- **Content**: Update text in component files
- **Waitlist API**: Integrate your waitlist API in `App.tsx` `handleEmailSubmit` function

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Custom animations and effects
