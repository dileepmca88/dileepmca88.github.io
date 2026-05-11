"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
      { name: "Kotlin", level: 88 },
      { name: "Android SDK", level: 85 },
      { name: "Jetpack Compose", level: 80 },
      { name: "Swift/iOS", level: 65 },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Riverpod", level: 92 },
      { name: "BLoC", level: 88 },
      { name: "Provider", level: 90 },
      { name: "GetX", level: 75 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 75 },
      { name: "SQLite", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "CI/CD", level: 85 },
      { name: "Fastlane", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 78 },
    ],
  },
]

const technologies = [
  { name: "Flutter", icon: "🐦" },
  { name: "Dart", icon: "🎯" },
  { name: "Kotlin", icon: "🟣" },
  { name: "Android", icon: "🤖" },
  { name: "Firebase", icon: "🔥" },
  { name: "REST API", icon: "🔌" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎨" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Technical
            <span className="text-primary"> Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in mobile development.
          </p>
        </motion.div>

        {/* Technology Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="glass-card px-5 py-3 rounded-full flex items-center gap-2 hover:border-primary/30 transition-all cursor-default"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
