"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter SDK (Dart)", level: 95 },
      { name: "Android SDK (Kotlin)", level: 90 },
      { name: "Core Java", level: 85 },
      { name: "Android Studio", level: 92 },
      { name: "Responsive UI/UX", level: 88 },
      { name: "iOS Development", level: 70 },
    ],
  },
  {
    title: "Architecture & State Management",
    skills: [
      { name: "BLoC Pattern (Flutter)", level: 92 },
      { name: "Provider (Flutter)", level: 90 },
      { name: "MVVM (Android)", level: 88 },
      { name: "MVC Architecture", level: 85 },
      { name: "Riverpod", level: 80 },
      { name: "GetX", level: 75 },
    ],
  },
  {
    title: "Backend, API & Database",
    skills: [
      { name: "Firebase Services", level: 92 },
      { name: "REST API Integration", level: 95 },
      { name: "GraphQL", level: 80 },
      { name: "Retrofit", level: 88 },
      { name: "Swagger API", level: 85 },
      { name: "SQLite / Room", level: 88 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    title: "Integrations & Tools",
    skills: [
      { name: "Social Media Integration", level: 90 },
      { name: "Payment Gateway Integration", level: 92 },
      { name: "IoT Device Integration (ESPTouch)", level: 85 },
      { name: "Git & Version Control", level: 92 },
      { name: "CI/CD & Fastlane", level: 88 },
      { name: "Dagger 2 / Dependency Injection", level: 82 },
    ],
  },
]

const technologies = [
  { name: "Flutter SDK", icon: "🐦" },
  { name: "Dart", icon: "🎯" },
  { name: "Android SDK", icon: "🤖" },
  { name: "Kotlin", icon: "🟣" },
  { name: "Core Java", icon: "☕" },
  { name: "Firebase", icon: "🔥" },
  { name: "REST API", icon: "🔌" },
  { name: "BLoC/MVVM", icon: "🏗️" },
  { name: "Payment Gateways", icon: "💳" },
  { name: "IoT Integration", icon: "�" },
  { name: "Git", icon: "📦" },
  { name: "CI/CD", icon: "🚀" },
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
