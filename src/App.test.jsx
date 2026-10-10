import { renderToStaticMarkup } from "react-dom/server"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import App from "./App"

function renderRoute(path) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe("portfolio routes", () => {
  it.each([
    ["/", "Software that keeps real work moving."],
    ["/work", "Work shaped around real operations."],
    ["/about", "Still learning. Already shipping."],
    ["/contact", "Tell me what needs to work better."],
  ])("renders %s as a focused page", (path, heading) => {
    expect(renderRoute(path)).toContain(heading)
  })

  it("gives unknown routes a useful way home", () => {
    const markup = renderRoute("/missing")

    expect(markup).toContain("This page wandered off.")
    expect(markup).toContain('href="/"')
  })

  it("keeps global navigation and resume access on every route", () => {
    const markup = renderRoute("/about")

    expect(markup).toContain('<header class="site-header">')
    expect(markup).toContain('aria-label="Primary navigation"')
    expect(markup).toContain('href="/Resume.pdf"')
    expect(markup).toContain('download="Ajay_Paudel_Resume.pdf"')
    expect(markup).toContain('<footer class="site-footer">')
  })

  it("protects external project links opened in a new tab", () => {
    const markup = renderRoute("/work")

    expect(markup).toContain('href="https://victorydeveloper.com"')
    expect(markup).toContain('target="_blank"')
    expect(markup).toContain('rel="noopener noreferrer"')
  })

  it("turns the home route into a complete portfolio narrative", () => {
    const markup = renderRoute("/")

    expect(markup).toContain('class="domain-stage"')
    expect(markup).toContain('aria-label="Selected work"')
    expect(markup).toContain("Victory Developers")
    expect(markup).toContain('aria-label="Portfolio facts"')
    expect(markup).toContain('aria-label="Technology ticker"')
    expect(markup).toContain('class="home-cta')
  })

  it("renders the richer shell navigation and footer", () => {
    const markup = renderRoute("/")

    expect(markup).toContain('class="nav-active-indicator')
    expect(markup).toContain('class="footer-wordmark"')
    expect(markup).toContain('href="mailto:poudelajay547@gmail.com"')
    expect(markup).toContain('href="https://github.com/buildwithajay"')
  })
})
