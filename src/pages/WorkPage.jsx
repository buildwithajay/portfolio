import { ArrowUpRight, LockKeyhole } from "lucide-react"
import { PageTransition, Reveal, StaggeredWords } from "../components/Motion"
import { capabilities, featuredWork } from "../data/mockData"

export default function WorkPage() {
  return (
    <PageTransition>
      <header className="page-hero page-width">
        <p className="section-kicker">Selected work</p>
        <h1><StaggeredWords>Work shaped around real operations.</StaggeredWords></h1>
        <p>I build software that supports how an organization already moves, then make that workflow clearer and more dependable.</p>
      </header>

      <section className="project-list page-width" aria-label="Selected projects">
        {featuredWork.map((project, index) => (
          <Reveal className={`project-story tone-${project.tone}`} delay={index * 0.08} key={project.title}>
            <div className="project-index">0{index + 1}</div>
            <div className="project-main">
              <div className="project-heading">
                <div>
                  <p>{project.category}</p>
                  <h2>{project.title}</h2>
                </div>
                <span className="privacy-label">{project.confidentiality === "Private" && <LockKeyhole size={14} />}{project.confidentiality}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="contribution"><strong>My contribution</strong><p>{project.contribution}</p></div>
              {project.href && <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a>}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="capabilities page-width">
        <div className="section-intro">
          <p className="section-kicker">How I contribute</p>
          <h2>Across the product, where it helps.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.detail}</p>
              <ul>{capability.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
