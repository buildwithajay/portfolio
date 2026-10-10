
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import SiteShell from "./components/SiteShell"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import WorkPage from "./pages/WorkPage"

export default function App() {
  const location = useLocation()

  return (
    <SiteShell>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </SiteShell>
  )
}
