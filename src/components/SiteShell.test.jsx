// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import SiteShell from "./SiteShell"
import { getMobileMenuMotion } from "./motionConfig"

function setReducedMotion(matches) {
  window.matchMedia = vi.fn().mockImplementation(() => ({
    matches,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

function renderShell() {
  return render(
    <MemoryRouter initialEntries={["/work"]}>
      <SiteShell><p>Page content</p></SiteShell>
    </MemoryRouter>,
  )
}

describe("mobile navigation", () => {
  afterEach(cleanup)

  beforeEach(() => {
    setReducedMotion(false)
    window.scrollTo = vi.fn()
  })

  it("closes when the active route is selected", async () => {
    renderShell()
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }))
    const mobileNav = screen.getByRole("navigation", { name: "Mobile navigation" })
    fireEvent.click(within(mobileNav).getByRole("link", { name: "Work" }))

    await waitFor(() => expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull())
  })

  it("opens without an entrance transform when reduced motion is requested", () => {
    expect(getMobileMenuMotion(true)).toEqual({
      initial: false,
      animate: { opacity: 1, height: "auto" },
      exit: undefined,
      transition: { duration: 0 },
    })
  })
})
