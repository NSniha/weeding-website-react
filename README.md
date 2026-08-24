# Wedding Photography — React Website

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18-CA4245?logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success)

A multi-page wedding photography studio website built with React, React Router, and Tailwind CSS. The project includes a full marketing site — home, about, services, portfolio, blog, and contact — with reusable UI components and client-side routing.

## Preview
<img width="1280" height="800" alt="Linkedin-Feature" src="https://github.com/user-attachments/assets/494eaebe-41c5-48b1-b867-006734e31b18" />


## Features

- Multi-page routing with React Router (Home, About, Services, Portfolio, Blog, Contact)
- Dynamic detail pages for individual portfolio items and blog posts (`/portfolio/:slug`, `/blog/:slug`)
- Component-based architecture: Header, Hero, About, Services, Stats, Testimonials, Footer, and more
- Scroll-reveal animation hook for section entrance effects
- Responsive layout styled with Tailwind CSS v4
- Clean 404 handling — unknown routes redirect to the home page

## Tech Stack

| Category   | Technology                     |
|------------|---------------------------------|
| Library    | React 19                       |
| Routing    | React Router 7                 |
| Styling    | Tailwind CSS 4                 |
| Build Tool | Vite 8                         |
| Linting    | ESLint                         |

## Project Structure

```
src/
├── assets/          # Icons and images
├── components/      # Reusable UI sections (Header, Hero, About, Services, Stats, Testimonials, Footer, etc.)
├── hooks/           # Custom hooks (useRevealOnScroll)
├── pages/           # Route-level pages (About, Services, Portfolio, Blog, Contact + detail views)
├── App.jsx          # Route definitions
└── main.jsx         # App entry point
```

## Pages & Routes

| Route              | Description                     |
|---------------------|----------------------------------|
| `/`                 | Home — hero, about, services, stories, testimonials, stats, contact |
| `/about`            | About page                      |
| `/services`         | Services page                   |
| `/portfolio`        | Portfolio listing                |
| `/portfolio/:slug`  | Portfolio item detail            |
| `/blog`             | Blog listing                    |
| `/blog/:slug`       | Blog post detail                 |
| `/contact`          | Contact page                    |

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/NSniha/weeding-website-react.git
cd weeding-website-react
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## License

No license specified. Add a `LICENSE` file if you want to define usage terms for this repository.
