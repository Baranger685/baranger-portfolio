# Baranger Benjamin — Portfolio

Modern, creative personal portfolio built with **React + Tailwind CSS + Framer Motion**.

## Features

- Dark theme with vibrant purple / cyan gradients
- Smooth scroll animations (Framer Motion)
- Fully responsive (mobile → desktop)
- Glassmorphism cards
- Sections: Hero, About, Experience, Skills, Projects, Education, Contact
- Contact form (opens email client)
- Profile photo included

## Quick Start

```bash
# 1. Go into the project
cd baranger-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder. You can deploy this folder to:

- **Vercel** (recommended) — just connect the GitHub repo
- **Netlify**
- **GitHub Pages**
- Any static host

## Project Structure

```
baranger-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── profile.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization Tips

1. **Update projects** → edit `src/components/Projects.jsx` and add real GitHub / live links when ready.
2. **Change colors** → edit `tailwind.config.js` (primary & accent colors).
3. **Replace photo** → replace `src/assets/profile.png`.
4. **Add more sections** → create a new component and import it in `App.jsx`.

## Contact

- Email: baranger369@gmail.com
- LinkedIn: linkedin.com/in/baranger-benjamin
- GitHub: github.com/Baranger685

---

Made with ❤️ for Baranger Benjamin
