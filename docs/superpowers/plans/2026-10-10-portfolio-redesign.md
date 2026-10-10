# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a routed, animated, responsive portfolio that clearly presents Ajay's current work and recent client projects to hiring managers and freelance clients.

**Architecture:** A shared application shell owns navigation, route transitions, and the footer. Focused page components consume structured portfolio data, while small motion primitives provide consistent animation and reduced-motion behavior.

**Tech Stack:** React 19, React Router, Framer Motion, Tailwind CSS, Vitest, React DOM server rendering

**Spec:** `docs/superpowers/specs/2026-10-10-portfolio-redesign-design.md`

## Global Constraints

- Do not use em dash characters in interface copy.
- Use `/`, `/work`, `/about`, and `/contact` routes.
- Respect `prefers-reduced-motion`.
- Preserve the existing resume and social links.
- Do not invent project metrics or undisclosed client details.

## Review Focus

- A direct visit to every route renders the correct page.
- An unknown route provides a useful path back home.
- Mobile navigation closes after route selection.
- Reduced-motion users do not receive large animated transitions.
- External links and the downloadable resume retain correct attributes.

---

### Task 1: Portfolio content model

**Files:**
- Modify: `src/data/mockData.js`
- Create: `src/data/mockData.test.js`

**Interfaces:**
- Produces: `profile`, `navigation`, `workDomains`, `featuredWork`, `experience`, `capabilities`, and `principles` exports

- [ ] Write data contract tests for navigation, AEIRC Tech, Victory Developers, the confidential project, and forbidden em dash characters.
- [ ] Run `npm test -- --run src/data/mockData.test.js` and verify it fails against the old data model.
- [ ] Replace the old data with the new factual content model.
- [ ] Run the focused test and verify it passes.

### Task 2: Routed application and motion system

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`
- Create: `src/components/SiteShell.jsx`
- Create: `src/components/Motion.jsx`
- Create: `src/pages/HomePage.jsx`
- Create: `src/pages/WorkPage.jsx`
- Create: `src/pages/AboutPage.jsx`
- Create: `src/pages/ContactPage.jsx`
- Create: `src/pages/NotFoundPage.jsx`
- Create: `src/App.test.jsx`
- Delete: `src/components/Portfolio.jsx`

**Interfaces:**
- Consumes: the Task 1 data exports
- Produces: route components rendered by `App`, shared `Reveal`, `PageTransition`, and `Pressable` motion primitives

- [ ] Write server-rendering route tests for home, work, about, contact, and not-found content.
- [ ] Run `npm test -- --run src/App.test.jsx` and verify it fails before route implementation.
- [ ] Implement the shell, routes, page content, route transitions, workstream animation, and scroll reset.
- [ ] Run the focused test and verify it passes.

### Task 3: Responsive visual system and metadata

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`
- Modify: `index.html`

**Interfaces:**
- Consumes: semantic class names from Task 2
- Produces: responsive styling, accessible focus states, reduced-motion styles, and updated document metadata

- [ ] Extend `src/App.test.jsx` with semantic landmarks, resume, and external link assertions.
- [ ] Run the focused test and verify the new assertions fail.
- [ ] Implement the design tokens, typography, responsive layouts, component states, and metadata.
- [ ] Run the focused tests, full suite, lint, and production build.

## Execution ruling

Work stays in the current checkout at the user's request. Commits are deferred because the checkout is on `main` and contains a pre-existing `package-lock.json` change that must not be silently absorbed into implementation history.
