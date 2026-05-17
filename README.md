# Portfolio Website — Zefanya Kharisma Nugroho

Personal portfolio website for Zefanya Kharisma Nugroho, International Partnership Specialist at PCU & Universitas Airlangga, Surabaya.

## Overview

A single-page application showcasing professional work across four areas:

- **About Me** — Overview, expertise, experience, and skillset
- **Project Management** — AMERTA, ACI, and AERO program documentation
- **Student Services** — Student onboarding/orientation and engagement initiatives
- **Global Partnerships** — International partnership work
- **Creative Services** — Creative project portfolio
- **Contact** — Contact information

## Tech Stack

- HTML5, CSS3
- [Tailwind CSS](https://tailwindcss.com/) v3.4 (CDN)
- [Lucide Icons](https://lucide.dev/) v0.263 (CDN)
- Vanilla JavaScript (no framework)
- Google Fonts: Sora, DM Sans

## Project Structure

```
├── index.html          # Entry point and nav
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── main.js         # Page routing and shared logic
│   └── pages/          # Page-specific JS modules
│       ├── about-me/
│       ├── contact-me/
│       ├── creative-services/
│       ├── global-partnership/
│       ├── project-management/
│       └── student-services/
└── assets/
    ├── images/         # Section images
    └── data/           # Program data files (XLSX, DOCX)
```

## Running Locally

Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```
