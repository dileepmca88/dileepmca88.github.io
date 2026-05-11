"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Senior Software Developer L2",
    company: "Rysun Labs Pvt Ltd",
    companyUrl: "https://www.rysun.com",
    location: "India",
    period: "Feb 2022 — Present",
    description:
      "Currently working as Senior Software Developer L2, leading mobile development projects, architecting scalable Flutter applications, and mentoring junior developers. Managing multiple client projects including prestigious club management apps and enterprise solutions.",
    technologies: ["Flutter", "Dart", "Firebase", "Kotlin", "CI/CD", "Fastlane"],
    current: true,
  },
  {
    id: 2,
    role: "Senior Android Developer & App Store Deployment Engineer",
    company: "Innovegic Solutions Pvt Ltd",
    companyUrl: "https://innovegic.com",
    location: "India",
    period: "July 2018 — Feb 2022",
    description:
      "Worked as Senior Android Developer and App Store Deployment Engineer. Led development of multiple club management mobile applications for prestigious clubs including Rajpath Club, Karnavati Club, NSCI Mumbai, and more. Managed Play Store deployments and CI/CD pipelines.",
    technologies: ["Flutter", "Kotlin", "Firebase", "REST APIs", "Fastlane", "Git"],
    current: false,
  },
  {
    id: 3,
    role: "Android Developer",
    company: "Fahm Technology Pvt Ltd",
    companyUrl: "#",
    location: "India",
    period: "Jan 2016 — June 2018",
    description:
      "Started professional Android development career. Developed native Android applications including Smart India and Smart Town Member apps for smart city initiatives. Implemented complex UI components, integrated government APIs, and learned mobile development best practices.",
    technologies: ["Java", "Kotlin", "Android SDK", "Firebase", "SQLite", "Git"],
    current: false,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Work
            <span className="text-primary"> Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in mobile development, from junior developer to leading teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full md:-translate-x-1/2 -translate-x-1/2">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div
                    className={`flex flex-col md:flex-row items-start gap-4 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            Current
                          </span>
                        )}
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                      </div>
                      <a
                        href={exp.companyUrl}
                        className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Meta */}
                  <div
                    className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:bg-secondary/80 transition-all duration-300"
          >
            <Briefcase className="w-4 h-4" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
