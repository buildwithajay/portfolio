import { experienceBullets, images, navItems, projects, skills, stockWiseTags } from "../data/mockData"

function MaterialIcon({ children, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <header className="bg-surface-container-lowest sticky top-0 z-50 border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-6 md:px-gutter flex justify-between items-center h-16">
          <a className="font-headline-md text-headline-md font-bold text-primary" href="#home">
            Ajay Paudel
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                className={
                  item === "Home"
                    ? "text-secondary border-b-2 border-secondary pb-1 font-body-md text-body-md"
                    : "text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md"
                }
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            className="bg-primary text-on-primary px-6 py-2 rounded-lg font-body-md text-body-md hover:bg-opacity-90 transition-all duration-200"
            href="/Resume.pdf"
            download="My_Resume.pdf"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section
          className="max-w-container-max mx-auto px-6 md:px-gutter pt-24 pb-section-gap flex flex-col md:flex-row items-center gap-16"
          id="home"
        >
          <div className="flex-1 space-y-8">
            <div className="inline-block px-3 py-1 bg-surface-container rounded-full text-secondary font-label-code text-label-code">
              Available for New Opportunities
            </div>
            <h1 className="font-display text-5xl md:text-display text-primary leading-none">Ajay Paudel</h1>
            <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant max-w-2xl">
              Full-stack developer skilled in <span className="text-primary font-bold">React</span> and{" "}
              <span className="text-primary font-bold">ASP.NET Core</span>.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              I build scalable, user-focused digital solutions that bridge the gap between complex backend logic and
              seamless frontend experiences.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <a
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-body-md text-body-md hover:shadow-xl transition-all flex items-center gap-2"
                href="#projects"
              >
                View Work
                <MaterialIcon>arrow_forward</MaterialIcon>
              </a>
              <a
                className="text-primary font-body-md text-body-md hover:underline decoration-secondary decoration-2 underline-offset-8"
                href="#contact"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="w-full aspect-[0.77] rounded-xl border border-outline-variant overflow-hidden shadow-sm bg-surface-container-low">
              <img className="w-full h-full object-cover" src={images.hero} alt="Ajay Paudel resume preview" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 border border-outline-variant rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                  <MaterialIcon>code</MaterialIcon>
                </div>
                <div>
                  <p className="font-label-code text-label-code text-primary">Full-Stack</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Architecture Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap" id="skills">
          <div className="max-w-container-max mx-auto px-6 md:px-gutter">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary">Technical Expertise</h2>
              <div className="w-20 h-1 bg-secondary mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {skills.map((skill) => (
                <div key={skill.title} className="bg-surface-container-lowest p-8 border border-outline-variant kinetic-hover">
                  <MaterialIcon className="text-secondary mb-4">{skill.icon}</MaterialIcon>
                  <h3 className="font-headline-md text-headline-md mb-4 text-primary">{skill.title}</h3>
                  <ul className="space-y-2 font-body-md text-on-surface-variant">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-section-gap" id="projects">
          <div className="max-w-container-max mx-auto px-6 md:px-gutter">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">Selected Projects</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  A showcase of recent technical challenges and solutions.
                </p>
              </div>
              <a className="font-body-md text-secondary hover:underline flex items-center gap-1" href="#projects">
                All Projects <MaterialIcon className="text-sm">open_in_new</MaterialIcon>
              </a>
            </div>

            <a className="grid grid-cols-1 md:grid-cols-12 gap-8" href={projects[0].link} target="_blank">
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant group overflow-hidden">
                <div className="aspect-video bg-surface-container-highest relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={projects[0].image}
                    alt="Real-time order tracking dashboard"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-primary/80 backdrop-blur text-on-primary px-3 py-1 rounded font-label-code text-label-code">
                      Live Demo
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">{projects[0].title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-6">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {projects[0].tags.map((tag) => (
                      <span key={tag} className="font-label-code text-label-code text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a className="md:col-span-4 bg-surface-container-lowest border border-outline-variant flex flex-col kinetic-hover" href={projects[1].link} target="_blank" rel="noopener noreferrer">
                <div className="aspect-square bg-surface-container relative overflow-hidden">
                  <img className="w-full h-full object-cover" src={projects[1].image} alt="Appointly scheduling dashboard" />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">{projects[1].title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-6">{projects[1].description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {projects[1].tags.map((tag) => (
                        <span key={tag} className="font-label-code text-label-code text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>

              <a className="md:col-span-12 bg-surface-container-lowest border border-outline-variant grid md:grid-cols-2 group" href="https://github.com/buildwithajay/stock-backend" target="_blank" rel="noopener noreferrer">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 text-secondary mb-4">
                    <MaterialIcon>inventory_2</MaterialIcon>
                    <span className="font-label-code text-label-code font-bold uppercase tracking-widest">Featured Software</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-6">StockWise</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                    Intelligent inventory management system with predictive analytics for stock forecasting. Optimized for small
                    to medium retail businesses.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {stockWiseTags.map((tag) => (
                      <span key={tag} className="font-label-code text-label-code text-secondary border border-outline-variant px-4 py-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-surface-container order-1 md:order-2 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src={images.stockWise}
                    alt="StockWise inventory dashboard"
                  />
                </div>
              </a>
            </a>
          </div>
        </section>

        <section className="bg-surface py-section-gap border-t border-outline-variant" id="about">
          <div className="max-w-container-max mx-auto px-6 md:px-gutter grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-12 flex items-center gap-4">
                <MaterialIcon className="text-4xl">work</MaterialIcon>
                Experience
              </h2>
              <div className="relative pl-8 border-l border-outline-variant space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-secondary border-4 border-surface" />
                  <span className="font-label-code text-label-code text-secondary uppercase tracking-wider mb-2 block">
                    May 2024 — July 2024
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">Frontend Developer Intern</h3>
                  <p className="font-body-md text-secondary font-semibold mb-4">The Quality SEO Pvt. Ltd.</p>
                  <ul className="space-y-4 font-body-md text-on-surface-variant">
                    {experienceBullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-secondary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-12 flex items-center gap-4">
                <MaterialIcon className="text-4xl">school</MaterialIcon>
                Education
              </h2>
              <div className="space-y-8">
                <div className="bg-surface-container-low p-8 border border-outline-variant relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MaterialIcon className="text-6xl">school</MaterialIcon>
                  </div>
                  <span className="font-label-code text-label-code text-secondary uppercase tracking-wider mb-2 block">
                    2020 — 2024
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">B.Tech in Computer Science &amp; Engineering</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Maharishi Markandeshwar University</p>
                  <div className="mt-6 flex items-center gap-2">
                    <MaterialIcon className="text-secondary">verified</MaterialIcon>
                    <span className="font-body-md text-on-surface-variant">Major in Software Engineering</span>
                  </div>
                </div>
                <div className="p-8 border border-outline-variant border-dashed">
                  <p className="font-body-md text-on-surface-variant italic">
                    “Passionate about continuous learning and staying updated with the latest advancements in the .NET ecosystem
                    and modern frontend frameworks.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-6 md:px-gutter py-section-gap" id="contact">
          <div className="bg-primary text-on-primary p-12 md:p-24 text-center rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-6 relative z-10">Let's build something exceptional.</h2>
            <p className="font-body-lg text-body-lg mb-12  text-gray-400 relative z-10 max-w-2xl mx-auto">
              Currently open to full-stack roles and interesting freelance projects. If you're looking for a developer who values
              clean code and architectural integrity, let's talk.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <a className="bg-on-primary text-primary px-10 py-5 font-bold hover:scale-105 transition-transform" href="mailto:poudelajay547@gmail.com">
                Hire Me
              </a>
              <div className="flex items-center justify-center gap-6">
                <a className="hover:text-secondary-fixed-dim transition-colors" href="https://linkedin.com/in/ajaypaudel/">
                  LinkedIn
                </a>
                <a className="hover:text-secondary-fixed-dim transition-colors" href="https://github.com/buildwithajay">
                  GitHub
                </a>
                <a className="hover:text-secondary-fixed-dim transition-colors" href="#contact">
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-6 md:px-gutter py-section-gap flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="font-headline-md text-headline-md text-primary font-bold">Ajay Paudel</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 opacity-70">Full-stack Developer &amp; Designer</p>
          </div>
          <div className="flex gap-12 text-on-surface-variant font-body-md">
            <a className="hover:text-secondary transition-colors" href="#home">
              Home
            </a>
            <a className="hover:text-secondary transition-colors" href="#skills">
              Skills
            </a>
            <a className="hover:text-secondary transition-colors" href="#projects">
              Projects
            </a>
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-right">
            <p className="font-body-md text-body-md text-on-surface-variant opacity-60">© 2024 Ajay Paudel. Built for performance.</p>
            <div className="flex gap-4 mt-4 justify-center md:justify-end">
              <a className="text-on-surface-variant hover:text-secondary transition-colors" href="https://github.com/buildwithajay">
                GitHub
              </a>
              <a className="text-on-surface-variant hover:text-secondary transition-colors" href="https://linkedin.com/in/ajaypaudel/">
                LinkedIn
              </a>
              <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#contact">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
