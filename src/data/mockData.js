export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
]

export const profile = {
  name: "Ajay Paudel",
  title: "Full-Stack Software Engineer",
  location: "Available for full-time roles & freelance",
  email: "poudelajay547@gmail.com",
  github: "https://github.com/buildwithajay",
  linkedin: "https://linkedin.com/in/ajaypaudel/",
  resume: "/Resume.pdf",
}

export const heroTech = ["React", "TypeScript", "ASP.NET Core", "PostgreSQL", "Docker", "Azure"]

// Grouped for capability, not a logo wall.
export const techStack = [
  {
    group: "Frontend",
    blurb: "Interfaces that stay fast and predictable as they scale.",
    items: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    group: "Backend",
    blurb: "Services built around clear contracts and typed boundaries.",
    items: ["C#", "ASP.NET Core", "REST APIs", "Node.js / Express"],
  },
  {
    group: "Database",
    blurb: "Schema design that holds up under real write load.",
    items: ["SQL Server", "PostgreSQL", "SQLite", "Entity Framework Core"],
  },
  {
    group: "DevOps / Cloud",
    blurb: "Shipping pipelines that make deploys boring, on purpose.",
    items: ["Docker", "Azure", "GitHub Actions", "CI/CD"],
  },
]

export const projects = [
  {
    featured: true,
    title: "Real-Time Order Tracking System",
    status: "In production",
    problem:
      "Dispatch teams had no live visibility into fleet status, so customers were fielded stale ETAs and support tickets piled up.",
    description:
      "A logistics platform with live geographic tracking, automated status notifications, and an admin dashboard for fleet management — built to replace a manual, phone-call-driven dispatch process.",
    build: [
      "Real-time position and status broadcasts over SignalR websockets, replacing client-side polling.",
      "Role-based admin dashboard for dispatchers to reassign routes and monitor fleet load.",
      "Automated notification pipeline that alerts customers on status change without manual input.",
    ],
    tags: ["ASP.NET Core", "SignalR", "React", "SQL Server"],
    image:
      "https://res.cloudinary.com/dkc0tn86f/image/upload/v1783165222/Screenshot_2026-07-04_at_5.25.15_PM_l0d46s.png",
    link: "https://github.com/buildwithajay/order-tracking",
    demo: null,
  },
  {
    featured: true,
    title: "StockWise",
    status: "Case study",
    problem:
      "Small retailers were still forecasting stock by gut feeling, leading to overstock on slow items and stockouts on their best sellers.",
    description:
      "An inventory management system with predictive analytics for stock forecasting, purpose-built for small to medium retail businesses that can't afford enterprise tooling.",
    build: [
      "Forecasting layer that flags reorder points from historical sales velocity.",
      "Normalized relational schema in SQL Server, accessed through Entity Framework Core.",
      "Separate backend service (stock-backend) exposing a REST API consumed by the dashboard.",
    ],
    tags: ["Entity Framework Core", "SQL Server", "ASP.NET Core"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbFraRL65Ckde-v-H_c6QV6dqzwQwEECEE8x-SxxaqhUzfzNP0WjtA3OJfh7KtcmJSXuTRJeH-avCuoPRBOspCvysrXe1XLyLym0KhuPnb54mMHHTKSJFhwnaXABvQ82jOTbnOMcljmS9saiDTZul0Kz_sJ3zvrTQu_DlEQ7AQ6s5iRAk3gAZP95LWMvzCRQg5qJOZ-QYjLLGu-tlq_N4EfG8zaT2yjgkxWarjBtJ9TG3bqrYSyRQwDakH7tJ4oGGaue07f53ZSZA",
    link: "https://github.com/buildwithajay/stock-backend",
    demo: null,
  },
  {
    featured: false,
    title: "Appointly",
    status: "In production",
    description: "End-to-end, multi-tenant appointment scheduling platform for service providers.",
    tags: ["ASP.NET Core", "Azure SQL Database", "React"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoawsyIHzh27xTDh1BHb5k5R8925biiEG8K_wcb7Pn0HJJZfACbL2BsOUqBifbhwF5BKNPLnYAkOQBp3bILnRvvrcIdnbZ9kevvAoJYUOMiJdRP2i-ojXtkifKUn5C1og834sSXojspEFjWpD3QMyiM-FP3FjY2mbVcrVFFR_8iHtb8j89zkUmQm5aI-kWEDZ23s3FZ1fAvAsakIXL7lkZsS6KUycdqCKpYLlHboHjgLJW3Md87djtmw_EXGqRtikG7kSDpTev2Xk",
    link: "https://github.com/buildwithajay/Multi-tenant-Appointment-Booking",
    demo: null,
  },
]

export const engineeringDepth = [
  {
    icon: "ShieldCheck",
    title: "Auth & Authorization",
    detail: "JWT-based authentication with role-based authorization guarding API and UI routes alike.",
  },
  {
    icon: "Radio",
    title: "Real-Time Systems",
    detail: "SignalR websocket channels for live state — status updates pushed, not polled.",
  },
  {
    icon: "Database",
    title: "Data Layer",
    detail: "Entity Framework Core over SQL Server / PostgreSQL, with schemas designed for write-heavy paths.",
  },
  {
    icon: "Server",
    title: "API Architecture",
    detail: "REST services with clear contracts, separated concerns, and predictable error handling.",
  },
  {
    icon: "Boxes",
    title: "Containerization",
    detail: "Docker images for consistent environments from local dev through to deployment.",
  },
  {
    icon: "GitBranch",
    title: "CI/CD",
    detail: "GitHub Actions pipelines that build, test, and deploy on merge — no manual release steps.",
  },
  {
    icon: "Cloud",
    title: "Cloud Deployment",
    detail: "Azure-hosted services and managed SQL, configured for zero-downtime releases.",
  },
]

export const journey = [
  {
    type: "work",
    date: "May 2024 — Jul 2024",
    title: "Frontend Developer Intern",
    org: "The Quality SEO Pvt. Ltd.",
    bullets: [
      "Built responsive, SEO-optimized landing pages using React and Tailwind CSS.",
      "Collaborated with design teams to translate Figma wireframes into functional code.",
      "Optimized web performance, achieving a 20% improvement in Core Web Vitals.",
    ],
  },
  {
    type: "education",
    date: "2020 — 2024",
    title: "B.Tech in Computer Science & Engineering",
    org: "Maharishi Markandeshwar University",
    bullets: ["Major in Software Engineering."],
  },
]

export const images = {
  hero:
    "https://res.cloudinary.com/dkc0tn86f/image/upload/v1783165077/Screenshot_2026-07-04_at_5.22.30_PM_fydkk1.png",
}
