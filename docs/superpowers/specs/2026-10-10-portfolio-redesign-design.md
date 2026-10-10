# Portfolio Redesign Design

## Intent

Create a cleaner, more human portfolio that speaks equally well to hiring managers and freelance clients. The site should show Ajay as a working software developer who builds practical systems with experienced teammates, not as a collection of technologies or demo projects.

## Audience and outcomes

- Hiring managers should quickly understand Ajay's current role, growth, collaboration, and full-stack capability.
- Freelance clients should see credible experience with restaurant systems, government websites, billing platforms, and delivered client work.
- Visitors should be able to move between focused pages instead of navigating one long page.
- Contact and resume actions should remain easy to find on every screen size.

## Content

- Present Ajay as a Software Developer at AEIRC Tech.
- Describe his work on restaurant systems, government websites, and billing systems.
- Explain that he works closely with senior engineers and is actively strengthening his engineering practice.
- Present `victorydeveloper.com` as a recent public client project without inventing metrics or implementation details.
- Present the other recent outsourced project as a confidential client platform.
- Keep portfolio claims factual and use plain, conversational language.

## Visual direction

The visual idea is "working software, made human." The interface should feel like an editorial product notebook rather than a terminal, developer dashboard, or generic card grid.

### Tokens

- Midnight: `#101828`
- Paper: `#F7F5F0`
- Cobalt: `#3157D5`
- Persimmon: `#F16B4A`
- Mist: `#DCE5F2`
- Leaf: `#237A57`
- Display type: Fraunces
- Body type: Manrope

### Layout

Use a left-aligned, asymmetric layout with generous whitespace. The hero contains the memorable visual: a workstream connecting three real operational domains.

```text
+---------------------------------------------------+
| name        Work  About  Contact           Resume |
+---------------------------------------------------+
| Software that keeps a business moving. | workstream
| Short human introduction                 |  o--o--o
| View work    Start a conversation        | domains
+---------------------------------------------------+
| current role and proof of practice                  |
+---------------------------------------------------+
```

## Navigation and motion

- Use React Router with dedicated `/`, `/work`, `/about`, and `/contact` routes.
- Use Framer Motion for one orchestrated opening sequence, route transitions, the hero workstream, and interaction feedback.
- Avoid repeated automatic section reveals and decorative floating effects.
- Respect `prefers-reduced-motion`.
- Keep keyboard focus visible and navigation usable without motion.

## Constraints

- Do not use em dash characters in interface copy.
- Preserve the existing resume, contact address, GitHub profile, and LinkedIn profile.
- Remain responsive on mobile and desktop.
- Do not claim private details, performance metrics, or technical implementation that Ajay did not supply.

## Builder calls

- Use a light paper surface instead of the existing dark terminal treatment to make the work feel approachable.
- Use the current year in the footer based on the user environment.
- Label the private outsourced project "Confidential client platform."
- Treat route changes as scroll resets so each page begins at the top.
