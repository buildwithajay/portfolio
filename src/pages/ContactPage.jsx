import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { Magnetic, PageTransition, StaggeredWords } from "../components/Motion"
import { profile } from "../data/mockData"

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="contact-page page-width">
        <div>
          <p className="section-kicker">Contact</p>
          <h1><StaggeredWords>Tell me what needs to work better.</StaggeredWords></h1>
          <p>Whether you are hiring for a product team or need a dependable developer for a client project, start with the problem. I will bring curiosity, clear communication, and care for the details.</p>
        </div>
        <div className="contact-card">
          <p>Best way to reach me</p>
          <Magnetic><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20} />{profile.email}</a></Magnetic>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn <ArrowUpRight size={14} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub <ArrowUpRight size={14} /></a>
          </div>
          <p className="response-note">Based in {profile.location}. Open to thoughtful conversations about full-time and freelance work.</p>
        </div>
      </section>
    </PageTransition>
  )
}
