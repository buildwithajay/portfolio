import { useEffect, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cloud,
  Database,
  Download,
  GitBranch,
  Github,
  GraduationCap,
  Briefcase,
  Linkedin,
  Mail,
  Menu,
  Radio,
  Server,
  ShieldCheck,
  X,
} from "lucide-react"
import {
  engineeringDepth,
  heroTech,
  images,
  journey,
  navItems,
  profile,
  projects,
  techStack,
} from "../data/mockData"

const ICONS = { ShieldCheck, Radio, Database, Server, Boxes, GitBranch, Cloud }

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-wider text-signal">{children}</span>
      <span className="h-px flex-1 max-w-[48px] bg-line" />
    </div>
  )
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-dim border border-line rounded-full px-3 py-1.5 bg-panel">
      <span className="status-dot" />
      Open to opportunities
    </span>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/85 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter flex items-center justify-between h-16">
        <a href="#home" className="font-display text-lg font-semibold text-ink tracking-tight">
          Ajay<span className="text-signal">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-wide text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.resume}
            download="Ajay_Paudel_Resume.pdf"
            className="inline-flex items-center gap-2 border border-line rounded-md px-4 py-2 font-mono text-xs text-ink-dim hover:border-signal hover:text-signal transition-colors"
          >
            <Download size={14} strokeWidth={2} />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-canvas">
          <nav className="flex flex-col px-gutter py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-sm text-ink-dim hover:text-signal transition-colors border-b border-line-soft last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download="Ajay_Paudel_Resume.pdf"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-signal text-canvas rounded-md px-4 py-3 font-mono text-xs font-medium"
            >
              <Download size={14} strokeWidth={2} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-texture pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-container-max mx-auto px-gutter pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 reveal">
            <StatusBadge />
            <h1 className="mt-6 font-display text-display-sm md:text-display-lg text-ink">
              {profile.name}
              <span className="block text-muted font-normal text-2xl md:text-3xl mt-3">
                Full-stack engineer, React &amp; ASP.NET Core
              </span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-ink-dim max-w-xl leading-relaxed">
              I build production systems end to end — typed APIs, real-time features, and interfaces that don't
              fall apart under real usage. Recent work spans live logistics tracking, multi-tenant scheduling, and
              inventory forecasting.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroTech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-pulse border border-pulse-soft bg-pulse-soft/40 rounded px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-signal text-canvas font-medium rounded-md px-6 py-3.5 text-sm hover:bg-[#ffc247] transition-colors"
              >
                View Projects
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-line rounded-md px-6 py-3.5 text-sm text-ink-dim hover:border-signal hover:text-ink transition-colors"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  <Github size={19} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  <Linkedin size={19} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 reveal" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="rounded-xl border border-line bg-panel overflow-hidden shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-panel-raised">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 font-mono text-[11px] text-faint">status.json</span>
                </div>
                <div className="aspect-[4/3] bg-panel-raised overflow-hidden">
                  <img
                    src={images.hero}
                    alt="Preview of Ajay Paudel's resume and project work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-panel border border-line rounded-lg shadow-xl p-4 max-w-[220px]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-pulse mb-1.5">
                  <span className="status-dot" />
                  live in production
                </div>
                <p className="font-body text-xs text-ink-dim leading-relaxed">
                  Real-time order tracking, serving live status over SignalR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-section-gap-sm md:py-section-gap border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Eyebrow>~/about</Eyebrow>
          <h2 className="font-display text-2xl md:text-display-sm text-ink">
            Backend-minded, product-focused.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 font-body text-ink-dim leading-relaxed max-w-2xl">
          <p>
            I'm a full-stack engineer who spends most of my time in the space between the database and the
            browser — designing APIs that make sense, and interfaces that don't hide their complexity from
            the person using them.
          </p>
          <p>
            My work leans toward the .NET and React ecosystem: ASP.NET Core services backed by SQL Server or
            PostgreSQL, paired with React front ends built in TypeScript and Tailwind. I care about the parts
            that are easy to skip — authentication done properly, schemas that scale past the demo, and
            deploy pipelines that don't need a human to babysit them.
          </p>
          <p className="text-ink">
            Right now I'm focused on real-time systems and cloud-native architecture — the kind of engineering
            work that stays invisible when it's done right.
          </p>
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  return (
    <section id="stack" className="py-section-gap-sm md:py-section-gap bg-panel/40 border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter">
        <Eyebrow>~/stack</Eyebrow>
        <h2 className="font-display text-2xl md:text-display-sm text-ink mb-12 max-w-xl">
          Technology, organized by what it's for.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden border border-line">
          {techStack.map((group) => (
            <div key={group.group} className="bg-canvas p-6 flex flex-col">
              <h3 className="font-mono text-xs tracking-wider text-signal mb-2">{group.group}</h3>
              <p className="font-body text-sm text-muted mb-5 leading-relaxed">{group.blurb}</p>
              <ul className="mt-auto space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="font-body text-sm text-ink-dim flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-faint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProject({ project, reverse }) {
  return (
    <div className="grid md:grid-cols-2 border border-line rounded-xl overflow-hidden bg-panel lift-hover">
      <div className={`relative aspect-video md:aspect-auto bg-panel-raised overflow-hidden ${reverse ? "md:order-2" : ""}`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 font-mono text-[11px] text-pulse bg-canvas/80 backdrop-blur border border-pulse-soft rounded-full px-3 py-1">
          <span className="status-dot" />
          {project.status}
        </div>
      </div>

      <div className={`p-7 md:p-9 flex flex-col ${reverse ? "md:order-1" : ""}`}>
        <h3 className="font-display text-xl md:text-2xl text-ink mb-3">{project.title}</h3>

        {project.problem && (
          <p className="font-body text-sm text-muted mb-4 leading-relaxed">
            <span className="text-faint">Problem — </span>
            {project.problem}
          </p>
        )}

        <p className="font-body text-sm text-ink-dim mb-5 leading-relaxed">{project.description}</p>

        {project.build && (
          <ul className="space-y-2 mb-6">
            {project.build.map((line) => (
              <li key={line} className="font-body text-sm text-ink-dim flex gap-2.5">
                <span className="text-signal mt-1 shrink-0">▸</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-line-soft">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[11px] text-muted">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-signal hover:gap-2.5 transition-all shrink-0"
          >
            View repository
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-line rounded-xl overflow-hidden bg-panel lift-hover"
    >
      <div className="aspect-video bg-panel-raised overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg text-ink">{project.title}</h3>
          <ArrowUpRight size={16} className="text-muted group-hover:text-signal transition-colors shrink-0" />
        </div>
        <p className="font-body text-sm text-muted mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[11px] text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-section-gap-sm md:py-section-gap border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <Eyebrow>~/projects</Eyebrow>
            <h2 className="font-display text-2xl md:text-display-sm text-ink">Selected work.</h2>
          </div>
          <p className="font-body text-sm text-muted max-w-sm">
            Systems built to solve a specific, real problem — not demo apps.
          </p>
        </div>

        <div className="space-y-8">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Engineering() {
  return (
    <section id="engineering" className="py-section-gap-sm md:py-section-gap bg-panel/40 border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter">
        <Eyebrow>~/engineering</Eyebrow>
        <h2 className="font-display text-2xl md:text-display-sm text-ink mb-4 max-w-xl">
          Below the interface.
        </h2>
        <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
          What the UI depends on: auth, real-time delivery, data integrity, and deploys that don't require
          someone awake at 2am.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engineeringDepth.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <div
                key={item.title}
                className="border border-line rounded-lg p-6 bg-canvas lift-hover"
              >
                <Icon size={20} className="text-signal mb-4" strokeWidth={1.75} />
                <h3 className="font-display text-base text-ink mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{item.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="py-section-gap-sm md:py-section-gap border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter">
        <Eyebrow>~/journey</Eyebrow>
        <h2 className="font-display text-2xl md:text-display-sm text-ink mb-12">Experience &amp; education.</h2>

        <div className="relative border-l border-line pl-8 space-y-12 max-w-2xl">
          {journey.map((entry) => (
            <div key={entry.title} className="relative">
              <span className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-canvas border-2 border-signal" />
              <div className="flex items-center gap-2 font-mono text-xs text-muted mb-2">
                {entry.type === "work" ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                {entry.date}
              </div>
              <h3 className="font-display text-lg text-ink">{entry.title}</h3>
              <p className="font-body text-sm text-signal mb-4">{entry.org}</p>
              <ul className="space-y-2">
                {entry.bullets.map((b) => (
                  <li key={b} className="font-body text-sm text-ink-dim flex gap-2.5">
                    <span className="text-faint mt-1 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-section-gap-sm md:py-section-gap border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="relative rounded-2xl border border-line bg-panel overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center">
          <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" aria-hidden="true" />
          <div className="relative">
            <StatusBadge />
            <h2 className="mt-6 font-display text-2xl md:text-display-md text-ink max-w-2xl mx-auto">
              Let's build something that has to work.
            </h2>
            <p className="mt-5 font-body text-base text-muted max-w-xl mx-auto leading-relaxed">
              Open to full-stack roles and select freelance work. If you need a developer who thinks about
              the system, not just the screen, let's talk.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-signal text-canvas font-medium rounded-md px-7 py-3.5 text-sm hover:bg-[#ffc247] transition-colors"
              >
                <Mail size={16} strokeWidth={2.5} />
                {profile.email}
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={profile.resume}
                download="Ajay_Paudel_Resume.pdf"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors"
              >
                <Download size={15} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-container-max mx-auto px-gutter py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">
          © 2026 {profile.name} — built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a href="#home" className="font-mono text-xs text-muted hover:text-ink transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Engineering />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
