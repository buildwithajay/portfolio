import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Database,
  Wrench,
  Award,
  Users,
  Briefcase,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState({})
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "projects", "experience", "activities", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = ["hero", "about", "education", "skills", "projects", "experience", "activities", "contact"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "JSX"],
    tools: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Firebase", "Postman"],
    other: ["Arduino", "API Testing", "Responsive Design", "Component Architecture"],
  }

  const projects = [
    {
      title: "JobNest",
      period: "Dec 2024 – Apr 2025",
      description: "Interactive job search platform with focus on performance and usability",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Led frontend development using React with functional components and hooks",
        "Implemented responsive design with Tailwind CSS for seamless cross-device experience",
        "Integrated job search and filtering features for efficient job browsing",
      ],
    },
    {
      title: "Smart Agriculture Robot",
      period: "Dec 2023 - Mar 2024",
      description: "Automated field monitoring and irrigation system",
      technologies: ["Arduino", "ESP32", "IoT", "Bluetooth"],
      highlights: [
        "Designed robotic vehicle for automated field navigation and soil moisture detection",
        "Integrated multiple sensors and actuators for responsive irrigation system",
        "Implemented wireless control and data processing capabilities",
      ],
    },
  ]

  const experiences = [
    {
      title: "Tech Support Volunteer",
      company: "InveCareer, Mullana, Ambala",
      period: "Mar 2024 – Sep 2024",
      responsibilities: [
        "Assisted students in resolving software issues and Git/GitHub setup problems",
        "Coordinated and supported interns by organizing tasks and tracking progress",
        "Facilitated communication within development teams",
      ],
    },
  ]

  const activities = [
    {
      title: "Hack IT Sapiens",
      location: "Jaipur, Rajasthan",
      period: "Mar 2024",
      project: "InveCareer - Career Guidance Platform",
      achievements: [
        "Led frontend development using HTML, CSS, and JavaScript",
        "Created responsive, user-friendly interface",
        "Integrated with Django backend for core functionality",
      ],
    },
    {
      title: "HackVerse 1.0",
      location: "MMEC, Mullana",
      period: "Mar 2023",
      project: "Mental Peace & Monitoring Website",
      achievements: [
        "Developed frontend with clean and intuitive user experience",
        "Implemented quiz logic for personalized mental wellness feedback",
        "Created assessment system for mental health monitoring",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              Ajay Paudel
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                    activeSection === item.toLowerCase() ? "text-blue-600 scale-105" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     <section
  id="hero"
  className={`pt-28 pb-24 px-6 sm:px-10 lg:px-16 transition-all duration-1000 ${
    isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  }`}
>
  <div className="max-w-7xl mx-auto text-center">
    <div className="mb-12">
      <div className="w-36 h-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-extrabold shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse">
        AP
      </div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight animate-fade-in-up">
        Ajay Paudel
      </h1>
      <p className="text-2xl sm:text-3xl text-gray-700 mt-4 mb-6 animate-fade-in-up animation-delay-200">
        Frontend Developer & UI Enthusiast
      </p>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
        Passionate about crafting elegant interfaces with React, Tailwind, and JavaScript. Constantly learning and building modern web experiences.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-5 mb-10 animate-fade-in-up animation-delay-600">
      <a
        href="tel:+917042577604"
        className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <Phone className="w-5 h-5 text-indigo-600" />
        <span className="text-gray-800 font-medium">+91 7042577604</span>
      </a>
      <a
        href="mailto:poudelajay547@gmail.com"
        className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <Mail className="w-5 h-5 text-indigo-600" />
        <span className="text-gray-800 font-medium">poudelajay547@gmail.com</span>
      </a>
      <a
        href="https://linkedin.com/in/ajaypaudel/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <Linkedin className="w-5 h-5 text-indigo-600" />
        <span className="text-gray-800 font-medium">LinkedIn</span>
      </a>
      <a
        href="https://github.com/buildwithajay"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <Github className="w-5 h-5 text-indigo-600" />
        <span className="text-gray-800 font-medium">GitHub</span>
      </a>
    </div>

    <button
      onClick={() => scrollToSection("projects")}
      className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 animate-fade-in-up animation-delay-800"
    >
      🚀 View My Work
    </button>
  </div>
</section>


      {/* About Section */}
      <section
        id="about"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 hover:text-blue-600 transition-colors duration-300">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6 hover:text-gray-900 transition-colors duration-300">
              I'm a passionate Computer Science student at Maharishi Markandeshwar Deemed to be University, graduating
              in May 2026 with a strong 8.30 GPA. My journey in frontend development has been driven by a love for
              creating intuitive, responsive user interfaces that solve real-world problems.
            </p>
            <p className="hover:text-gray-900 transition-colors duration-300">
              Through academic projects, hackathons, and volunteer work, I've developed expertise in React.js, Tailwind
              CSS, and modern JavaScript. I'm eager to apply my skills in a professional environment and contribute to
              innovative projects that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible.education ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 hover:text-blue-600 transition-colors duration-300">
            Education
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  B.Tech, Computer Science & Engineering
                </h3>
                <p className="text-gray-600 mb-2">Maharishi Markandeshwar Deemed to be University, Mullana, Ambala</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1 text-gray-700">
                    <Calendar className="w-4 h-4" />
                    Graduating May 2026
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300">
                    8.30 GPA
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Data Structures and Algorithms",
                      "Object-Oriented Programming",
                      "Software Engineering",
                    ].map((course, index) => (
                      <span
                        key={course}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${
          isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 hover:text-blue-600 transition-colors duration-300">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-600 hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
              </div>
              <div className="space-y-2">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-green-600 hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900">Tools & Technologies</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white px-3 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-600 hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900">Other Skills</h3>
              </div>
              <div className="space-y-2">
                {skills.other.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 hover:text-blue-600 transition-colors duration-300">
            Academic Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a href="https://job-nest-frontend.vercel.app/" target="_blank" rel="noopener noreferrer"
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.period}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 hover:scale-150 transition-transform duration-300"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${
          isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 hover:text-blue-600 transition-colors duration-300">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                    <Briefcase className="w-6 h-6 text-blue-600 hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 hover:scale-150 transition-transform duration-300"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        id="activities"
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible.activities ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 hover:text-blue-600 transition-colors duration-300">
            Hackathons & Activities
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                    <Users className="w-6 h-6 text-purple-600 hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{activity.period}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Project: {activity.project}</h4>
                  </div>
                </div>

                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0 hover:scale-150 transition-transform duration-300"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 transition-all duration-1000 ${
          isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8 hover:scale-105 transition-transform duration-300">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:poudelajay547@gmail.com"
              className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/ajaypaudel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/buildwithajay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © 2024 Ajay Paudel. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
