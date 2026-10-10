import { Link } from "react-router-dom"
import { PageTransition, StaggeredWords } from "../components/Motion"

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="not-found page-width">
        <p className="section-kicker">404</p>
        <h1><StaggeredWords>This page wandered off.</StaggeredWords></h1>
        <p>The route does not exist, but the rest of the portfolio is right where it should be.</p>
        <Link className="button button-primary" to="/">Return home</Link>
      </section>
    </PageTransition>
  )
}
