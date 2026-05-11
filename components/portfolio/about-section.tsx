"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Smartphone, Palette, Zap, Award, Briefcase, Users, Rocket } from "lucide-react"

const stats = [
  { value: "6+", label: "Play Store Apps" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "100K+", label: "App Downloads" },
]

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Building enterprise-grade apps with mobile users at the core of every design decision",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Implementing BLoC, MVVM, and MVC patterns for scalable, maintainable code",
  },
  {
    icon: Palette,
    title: "UI/UX Excellence",
    description: "Creating responsive, beautiful interfaces that users love to interact with",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing apps for speed, efficiency, and smooth 60fps animations",
  },
]

const responsibilities = [
  "Took project ownership from scratch to delivery - 10+ apps on Play Store",
  "Handled client communication & requirement gathering for enterprise clients",
  "Published apps on App Store and Play Store with CI/CD pipelines",
  "Team handling and assigning tasks for development teams",
  "Managing complete project lifecycle (UI design, planning, implementation)",
  "Easy to understand and integrate with existing codebases",
]

const certificates = [
  { name: "Project Management", icon: Briefcase },
  { name: "Agile Scrum", icon: Users },
  { name: "Google Play Store Publishing", icon: Award },
]

const marketRecommendations = [
  { title: "AI Integration", desc: "Add Gemini/ChatGPT APIs to apps for 2024 market", icon: Rocket },
  { title: "Flutter Web", desc: "Expand to web platforms for broader reach", icon: Smartphone },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Passionate about creating
            <span className="text-primary"> exceptional </span>
            mobile experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional Software Engineer with <strong>10+ years</strong> of experience specializing in 
                <strong> Android Mobile Application Development</strong>. Highly skilled in Flutter SDK, Dart, Kotlin, 
                and Core Java programming languages. Expert in building responsive UI and implementing 
                enterprise solutions in consultative environments with major clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Successfully delivered <strong>10+ production apps</strong> on Google Play Store including 
                prestigious club management apps (NSCI Mumbai, Rajpath Club, Karnavati Club, Club O7, 
                Glade One Golf Club), Smart City initiatives, and EdTech platforms.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Key Responsibilities
              </h3>
              <ul className="space-y-2">
                {responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Certificates */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Professional Certificates
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificates.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg"
                  >
                    <cert.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2024 Market Recommendations */}
            <div className="glass-card rounded-2xl p-6 border-primary/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                2024 Market Trends & Recommendations
              </h3>
              <div className="grid gap-3">
                {marketRecommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <rec.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{rec.title}</p>
                      <p className="text-xs text-muted-foreground">{rec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
