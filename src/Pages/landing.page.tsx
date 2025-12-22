import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const skills = {
    frontend: ["React", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "REST APIs"],
    databases: ["MongoDB", "Firebase", "SQL", "Database Design"],
    tools: ["Git", "Authentication", "System Design", "AI/ML"],
  }

  const projects = [
    {
      title: "GraphGeneration - AI Learning Assistant",
      description:
        "Full-stack AI-powered learning platform with ChatGPT-style interface that generates educational content with interactive Mermaid diagrams. Features conversation management, JWT authentication, and multi-turn context awareness.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Ollama", "TanStack Query", "Tailwind CSS"],
      github: "https://github.com/Pen-gun/GraphGeneration",
    },
    {
      title: "Wizards Bookstore",
      description:
        "E-Commerce website for buying and selling books online with user authentication, shopping cart, and order management. Built with React and Firebase for real-time data synchronization.",
      tech: ["React", "Firebase", "Firestore", "Tailwind CSS", "Authentication"],
      github: "https://wizardsbookstore.web.app/",
    },
    {
      title: "YouTube Clone Backend",
      description:
        "Backend API for a YouTube-like platform with video upload functionality, user authentication using JWT, and cloud storage integration with Cloudinary for media management.",
      tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "Multer"],
      github: "https://github.com/Pen-gun/Youtube",
    },
    {
      title: "SoftechAI",
      description:
        "Full-stack AI application with React frontend and Python backend. Implements AI-powered features with periodic cleanup utilities for temporary files and efficient resource management.",
      tech: ["React", "TypeScript", "Python", "Vite", "Tailwind CSS"],
      github: "https://github.com/Pen-gun/SoftechAI",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold tracking-tight hover:text-muted-foreground transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="h-9 w-9">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="h-9 w-9">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Paras Limbu</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Full-Stack Developer & CS Student</p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              A problem-solver who builds real-world applications. Passionate about creating elegant solutions to
              complex challenges using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection("projects")} size="lg">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science student based in Kathmandu Valley with a passion for full-stack development and
              innovative technology solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My interests span across full-stack web development, AI systems, and building scalable applications that
              solve real-world problems. I enjoy the entire development process—from ideation and design to
              implementation and deployment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or learning
              about the latest developments in artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-border hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4">Tools & Other</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 border-border hover:border-foreground/20 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Experience & Education</h2>
          <div className="max-w-3xl">
            <Card className="p-6 border-border mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Computer Science Student</h3>
                  <p className="text-muted-foreground">Kathmandu Valley</p>
                </div>
                <span className="text-sm text-muted-foreground">Present</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pursuing a degree in Computer Science with a focus on full-stack development, algorithms, and artificial
                intelligence. Building real-world projects to bridge the gap between academic knowledge and practical
                application.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-xl font-semibold mb-4">Self-Learning & Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuously expanding my skill set through hands-on project development, online courses, and exploring
                emerging technologies. Focused on creating production-ready applications that solve real problems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="https://mailto: paraslimbu7115@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>paraslimbu7115@gmail.com</span>
                </a>
                <a
                  href="https://github.com/pen-gun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/pen-gun</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/paras-limbu-8bb433289/?originalSubdomain=np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/paras-limbu</span>
                </a>
              </div>
            </div>

            <Card className="p-6 border-border">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} className="bg-background resize-none" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Paras Limbu. Built with MERN Stack.
          </p>
        </div>
      </footer>
    </div>
  )
}
