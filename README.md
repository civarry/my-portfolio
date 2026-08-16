# My Portfolio

Personal developer portfolio site, built as a single-page React app. It's a scroll-driven landing page with a preloader, a fixed navbar that smooth-scrolls to sections, and a dark, teal-accented design.

## Sections

- **Home** — intro/hero
- **About** — background story and a "Tech Stack I Use" strip of icons (HTML, CSS, JavaScript, Tailwind CSS, React, Git, Python, Bootstrap, Figma)
- **Projects** — cards for recent work (title, description, tech tags, and links to source/live demo), including this developer's other repos like Pocket API, Unsaid Project, and Food Crib
- **Contact** and **Footer**

## Stack

- **React 18** + **Vite** for the build tooling
- **Tailwind CSS** for styling
- **react-scroll** for smooth in-page navigation between sections (`Navbar` holds refs to each section and scrolls to them on click)
- **react-icons** for tech-stack and social icons
- A `Preloader` component that gates rendering behind a short simulated load before the page appears

## Running locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`; lint with `npm run lint`.
