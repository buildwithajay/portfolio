export const navigation = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

export const profile = {
  name: "Ajay Paudel",
  role: "Software Developer",
  intro: "I build practical software for the people who keep businesses and public services moving.",
  location: "Nepal",
  availability: "Open to software roles and selected freelance projects",
  email: "poudelajay547@gmail.com",
  github: "https://github.com/buildwithajay",
  linkedin: "https://linkedin.com/in/ajaypaudel/",
  resume: "/Resume.pdf",
}

export const workDomains = [
  { name: "Restaurant systems", detail: "Tools that make daily ordering, operations, and service easier to manage.", tone: "persimmon" },
  { name: "Government websites", detail: "Clear and accessible digital experiences for public information and services.", tone: "cobalt" },
  { name: "Billing systems", detail: "Reliable workflows that turn detailed transactions into understandable records.", tone: "leaf" },
]

export const featuredWork = [
  {
    title: "Victory Developers",
    confidentiality: "Public",
    category: "Outsourced web project",
    description: "A public-facing digital presence delivered for a recent client engagement, with a focus on clarity, trust, and a smooth experience across screen sizes.",
    contribution: "Contributed to turning the client brief into a polished, production-ready web experience.",
    href: "https://victorydeveloper.com",
    linkLabel: "Visit live website",
    tone: "cobalt",
  },
  {
    title: "Confidential client platform",
    confidentiality: "Private",
    category: "Outsourced software project",
    description: "A recent client build that cannot be shown publicly. The work involved translating operational needs into a clear and dependable software solution.",
    contribution: "Worked within client constraints while keeping the implementation maintainable and the experience straightforward.",
    href: null,
    linkLabel: null,
    tone: "persimmon",
  },
  {
    title: "AEIRC product work",
    confidentiality: "Company",
    category: "Current role",
    description: "Software for restaurant operations, government websites, and billing workflows, developed as part of a collaborative engineering team.",
    contribution: "Build features across the stack, learn through close collaboration with senior engineers, and improve the quality of each release.",
    href: null,
    linkLabel: null,
    tone: "leaf",
  },
]

export const experience = [
  {
    company: "AEIRC Tech",
    role: "Software Developer",
    period: "Present",
    summary: "Developing software solutions with senior engineers while growing stronger in product thinking, implementation, and delivery.",
    work: ["Restaurant systems", "Government websites", "Billing systems"],
  },
  {
    company: "The Quality SEO Pvt. Ltd.",
    role: "Frontend Developer Intern",
    period: "May 2024 to July 2024",
    summary: "Built responsive React interfaces, translated Figma designs into working pages, and improved web performance.",
    work: ["React interfaces", "Responsive delivery", "Performance improvements"],
  },
]

export const capabilities = [
  { title: "Product-minded frontend", detail: "React interfaces designed around the task a person needs to complete.", tools: ["React", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { title: "Dependable backend", detail: "APIs, authentication, and data flows with understandable boundaries.", tools: ["C#", "ASP.NET Core", "Node.js", "REST APIs"] },
  { title: "Data and delivery", detail: "Relational data, containerized services, and repeatable release workflows.", tools: ["SQL Server", "PostgreSQL", "Docker", "GitHub Actions"] },
]

export const principles = [
  "Understand the real workflow before writing the interface.",
  "Make complex operations feel clear to the person using them.",
  "Learn openly, ask better questions, and improve with every review.",
]
