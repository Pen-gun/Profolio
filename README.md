# Paras Limbu Portfolio
https://profolio-neon-nine.vercel.app/

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It highlights projects, skills, and contact details with dark mode support and smooth in-page navigation.

## Features
- Responsive layout with smooth section scrolling and mobile navigation
- Dark/light theme toggle
- Projects grid with tech badges and outbound links
- Skills grouped by category
- Contact section with form UI and social/email links

## Tech Stack
- React 19, TypeScript, Vite 7
- Tailwind CSS 3, class-variance-authority, tailwind-merge
- Lucide icons

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:5173
```

### Production build
```bash
npm run build
npm run preview
```

### Lint
```bash
npm run lint
```

## Key Files
- Main page content: [src/Pages/landing.page.tsx](src/Pages/landing.page.tsx)
- UI primitives: [src/components/ui](src/components/ui)
- Tailwind config: [tailwind.config.js](tailwind.config.js)
- Global styles: [src/index.css](src/index.css)

## Customize
- Update hero, about, and contact text in [src/Pages/landing.page.tsx](src/Pages/landing.page.tsx)
- Edit the `skills` and `projects` arrays in the same file to change badges and links
- Swap contact links (email, GitHub, LinkedIn) in the contact section

## Projects Showcased
- GraphGeneration – AI learning assistant with chat-style UI and Mermaid diagram generation
- Wizards Bookstore – React + Firebase e-commerce for books
- YouTube Clone Backend – Express API with JWT auth, uploads, and Cloudinary
- SoftechAI – Full-stack AI app with React/TypeScript frontend and Python backend

## License
This project is licensed under the MIT License.
