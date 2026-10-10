import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Building2, LockKeyhole, ReceiptText, Utensils } from "lucide-react"
import {
  animate,
  motion as Motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { Link } from "react-router-dom"
import { Magnetic, PageTransition, Reveal, StaggeredWords } from "../components/Motion"
import { capabilities, experience, featuredWork, profile, workDomains } from "../data/mockData"

const domainIcons = [Utensils, Building2, ReceiptText]

function DomainTicket({ domain, index, pointerX, pointerY }) {
  const reduceMotion = useReducedMotion()
  const Icon = domainIcons[index]
  const factor = [0.24, -0.18, 0.3][index]
  const x = useTransform(pointerX, (value) => reduceMotion ? 0 : value * factor)
  const y = useTransform(pointerY, (value) => reduceMotion ? 0 : value * factor)

  return (
    <Motion.article
      className={`domain-ticket domain-ticket-${index + 1} tone-${domain.tone}`}
      style={{ x, y }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.86, rotate: index === 1 ? 5 : -5 }}
      animate={{ opacity: 1, scale: 1, rotate: index === 0 ? -7 : index === 1 ? 5 : -3 }}
      transition={{ delay: reduceMotion ? 0 : 0.5 + index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ticket-topline"><span>0{index + 1}</span><Icon size={23} aria-hidden="true" /></div>
      <h2>{domain.name}</h2>
      <p>{domain.detail}</p>
      <div className="ticket-barcode" aria-hidden="true" />
    </Motion.article>
  )
}

function DomainStage() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const reduceMotion = useReducedMotion()

  function trackPointer(event) {
    if (reduceMotion || event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set(event.clientX - rect.left - rect.width / 2)
    pointerY.set(event.clientY - rect.top - rect.height / 2)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div className="domain-stage" aria-label="Software domains Ajay works in" onPointerMove={trackPointer} onPointerLeave={resetPointer}>
      <div className="stage-orbit stage-orbit-one" aria-hidden="true" />
      <div className="stage-orbit stage-orbit-two" aria-hidden="true" />
      {workDomains.map((domain, index) => <DomainTicket key={domain.name} domain={domain} index={index} pointerX={pointerX} pointerY={pointerY} />)}
      <p className="stage-note">Different workflows. One goal: make the day easier.</p>
    </div>
  )
}

function Fact({ value, suffix = "", label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const reduceMotion = useReducedMotion()
  const count = useMotionValue(reduceMotion ? value : 0)
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useMotionValueEvent(count, "change", (latest) => setDisplay(Math.round(latest)))

  useEffect(() => {
    if (!inView) return undefined
    if (reduceMotion) {
      count.set(value)
      return undefined
    }
    const controls = animate(count, value, { duration: 1.1, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [count, inView, reduceMotion, value])

  return (
    <div className="fact" ref={ref} aria-label={`${value}${suffix} ${label}`}>
      <strong aria-hidden="true">{display}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

function SelectedWorkStrip() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="selected-work" aria-label="Selected work">
      <div className="page-width strip-heading">
        <div><p className="section-kicker">Selected work</p><h2>Built around the way work really happens.</h2></div>
        <Link className="text-link" to="/work">See all work <ArrowUpRight size={16} /></Link>
      </div>
      <div className="work-rail">
        {featuredWork.map((project, index) => (
          <Motion.article className={`work-card tone-${project.tone}`} key={project.title} whileHover={reduceMotion ? undefined : { y: -12 }}>
            <div className="work-card-number">0{index + 1}</div>
            <div className="work-card-meta"><span>{project.category}</span><span>{project.confidentiality === "Private" && <LockKeyhole size={13} />}{project.confidentiality}</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={17} /></a> : <span className="work-card-end">{project.contribution}</span>}
          </Motion.article>
        ))}
      </div>
    </section>
  )
}

function SkillsTicker() {
  const skills = capabilities.flatMap((capability) => capability.tools)
  const reduceMotion = useReducedMotion()
  return (
    <section className="skills-ticker" aria-label="Technology ticker">
      <Motion.div animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 28, ease: "linear", repeat: Infinity }}>
        {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i aria-hidden="true" /></span>)}
      </Motion.div>
    </section>
  )
}

export default function HomePage() {
  const currentRole = experience[0]
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.86], [1, reduceMotion ? 1 : 0.25])

  return (
    <PageTransition>
      <section className="hero page-width" ref={heroRef}>
        <Motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
          <p className="availability"><span />{profile.availability}</p>
          <h1><StaggeredWords>Software that keeps real work moving.</StaggeredWords></h1>
          <Reveal delay={0.2}>
            <p className="hero-intro">{profile.intro} I care about the workflow behind the screen and the people depending on it.</p>
            <div className="hero-actions">
              <Magnetic><Link className="button button-primary" to="/work">See what I build <ArrowUpRight size={17} /></Link></Magnetic>
              <Magnetic><Link className="button button-quiet" to="/contact">Start a conversation</Link></Magnetic>
            </div>
          </Reveal>
        </Motion.div>
        <Reveal className="hero-visual" delay={0.12}><DomainStage /></Reveal>
      </section>

      <SelectedWorkStrip />

      <section className="proof-row page-width" aria-label="Portfolio facts">
        <Fact value={workDomains.length} label="operational domains" />
        <Fact value={experience.length} label="professional chapters" />
        <Fact value={featuredWork.filter((project) => project.confidentiality === "Public").length} label="public client project" />
      </section>

      <SkillsTicker />

      <section className="current-role page-width">
        <div className="section-intro"><p className="section-kicker">Where I am now</p><h2>Growing through the work, not around it.</h2></div>
        <div className="role-story">
          <p className="role-meta">{currentRole.role} at <strong>{currentRole.company}</strong></p>
          <p>{currentRole.summary}</p>
          <ul className="inline-list">{currentRole.work.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link className="text-link" to="/about">More about how I work <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="home-cta page-width">
        <p className="section-kicker">Contact</p>
        <h2>Tell me what needs to work better.</h2>
        <Magnetic><a className="cta-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={30} /></a></Magnetic>
      </section>
    </PageTransition>
  )
}
