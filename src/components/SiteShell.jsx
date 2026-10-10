import { useEffect, useState } from "react"
import { ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { AnimatePresence, motion as Motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion"
import { Link, NavLink, useLocation } from "react-router-dom"
import { navigation, profile } from "../data/mockData"
import { getMobileMenuMotion } from "./motionConfig"

export default function SiteShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => setCompact(latest > 36))

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo?.({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className={`site-header${compact ? " is-compact" : ""}`}>
        <div className="nav-wrap">
          <Link className="wordmark" to="/" aria-label="Ajay Paudel home">
            Ajay Paudel<span>.</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {({ isActive }) => <>{isActive && <Motion.span className="nav-active-indicator" layoutId="active-nav" transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 340, damping: 30 }} />}<span>{item.label}</span></>}
              </NavLink>
            ))}
          </nav>

          <a className="resume-link desktop-resume" href={profile.resume} download="Ajay_Paudel_Resume.pdf">
            Resume <Download size={15} aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <Motion.nav
              className="mobile-nav"
              aria-label="Mobile navigation"
              {...getMobileMenuMotion(reduceMotion)}
            >
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <a href={profile.resume} download="Ajay_Paudel_Resume.pdf">Download resume</a>
            </Motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <Link className="footer-wordmark" to="/">Ajay<br />Paudel<span>.</span></Link>
          <div className="footer-nav">
            <p>Ajay Paudel, software developer in Nepal.</p>
            <nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />LinkedIn <ArrowUpRight size={13} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} />GitHub <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="page-width footer-bottom"><p>Built with care in 2026.</p><p>{profile.availability}</p></div>
      </footer>
    </div>
  )
}
