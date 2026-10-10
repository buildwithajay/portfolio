import { PageTransition, Reveal, StaggeredWords } from "../components/Motion"
import { experience, principles } from "../data/mockData"

export default function AboutPage() {
  return (
    <PageTransition>
      <header className="page-hero page-width about-hero">
        <p className="section-kicker">About me</p>
        <h1><StaggeredWords>Still learning. Already shipping.</StaggeredWords></h1>
        <p>I am a software developer who likes getting close to the real problem, working through it with experienced people, and leaving the product clearer than I found it.</p>
      </header>

      <section className="about-grid page-width">
        <Reveal className="about-note">
          <p className="hand-note">What matters to me</p>
          <p>Good software is not only technically sound. It respects the time, attention, and daily reality of the person using it.</p>
        </Reveal>
        <div className="principle-list">
          {principles.map((principle, index) => (
            <Reveal className="principle" delay={index * 0.08} key={principle}>
              <span>0{index + 1}</span><p>{principle}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="experience-section page-width">
        <div className="section-intro">
          <p className="section-kicker">Experience</p>
          <h2>The path so far.</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <p className="experience-period">{item.period}</p>
              <div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.summary}</p></div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
