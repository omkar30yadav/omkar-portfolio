# Omkar Yadav — Portfolio

Personal portfolio website built with **React + Vite**.

## Project Structure

```
omkar-portfolio/
├── public/
│   └── favicon.svg            # Browser tab icon
├── src/
│   ├── components/
│   │   ├── data.js            # ← Edit your projects, skills & info here
│   │   ├── styles.js          # All inline style objects
│   │   └── Portfolio.jsx      # Main portfolio component
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles & animations
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

## Customisation

All your content lives in **`src/components/data.js`** — you only need to edit that one file:

- **`PERSONAL`** — your name, email, phone, location, bio, and social links
- **`EDUCATION`** — your degrees and institutions
- **`PROJECTS`** — add/edit/remove projects (update `link` with live URLs)
- **`SKILLS`** — adjust skill names and percentages
- **`TYPEWRITER_ROLES`** — the roles that cycle in the hero section

## Deployment

You can deploy the `dist/` folder (after `npm run build`) to:
- **Netlify** — drag and drop the `dist` folder
- **Vercel** — connect your GitHub repo
- **GitHub Pages** — use the `vite-plugin-gh-pages` package
