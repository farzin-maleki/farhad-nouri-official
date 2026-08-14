# Farhad Nouri — Official Website

> Official website of **Farhad Nouri**, professional wrestler and fitness athlete. European Championship Bronze Medalist.

🌐 **Live Site:** [farhad-nouri.com](https://farhad-nouri.com)

---

## ✨ Features

- **Home** — Hero section, stats, and page previews
- **Life Story** — Timeline of Farhad's journey from Tehran to international podiums
- **Achievements** — Medal wall with filtering by discipline
- **Gallery** — Photo gallery with lightbox viewer
- **Videos** — YouTube match highlights and training videos
- **Book a Session** — Cal.com integration for 1-on-1 wrestling and fitness sessions
- **Contact** — EmailJS-powered contact form
- **Payments** — Stripe integration for secure session payments
- **Automation** — Make.com workflows for booking and notification automation

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [React Router DOM](https://reactrouter.com) | Client-side routing |
| [EmailJS](https://www.emailjs.com) | Contact form emails |
| [Cal.com](https://cal.com) | Session booking |
| [Radix UI](https://www.radix-ui.com) | Accessible UI primitives |
| [Lucide React](https://lucide.dev) | Icons |
| [Vercel](https://vercel.com) | Hosting & deployment |
| [Make.com](https://make.com) | Automation & workflows |
| [Stripe](https://stripe.com) | Payment processing |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/farzin-maleki/farhad-nouri-official.git

# Navigate into the project
cd farhad-nouri-official

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Shared components (SiteNav, SiteFooter, UI)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
│   ├── Home.tsx
│   ├── LifeStory.tsx
│   ├── Achievements.tsx
│   ├── Gallery.tsx
│   ├── Videos.tsx
│   ├── Book.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── App.tsx          # Route definitions
├── main.tsx         # App entry point
└── styles.css       # Global styles & Tailwind config
```

---

## 🌍 Deployment

The site is deployed on **Vercel** with automatic deployments on every push to `main`.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework:** Vite

---

## 👨‍💻 Developer

Designed & built by [Farzin Maleki](https://www.farzin-maleki.com) — Freelance Web Developer based in London, UK.

---

## 📄 License

This project is private. All rights reserved © 2026 Farhad Nouri.
