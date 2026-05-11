"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Smartphone, Palette, Zap } from "lucide-react"

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
    description: "Building apps with mobile users at the core of every design decision",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful interfaces that users love to interact with",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing apps for speed, efficiency, and smooth animations",
  },
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
            <div className="glass-card rounded-2xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate mobile developer with over 10 years of experience 
                specializing in Flutter and native Android development. My journey began 
                with a fascination for creating apps that people use every day.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have successfully published multiple apps on the Google Play Store including 
                NSCI Mobile App, Club O7, Rajpath Club, Karnavati Club, Smart India, and Smart Town Member. 
                I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I focus on building cross-platform applications using Flutter, 
                while maintaining deep expertise in Kotlin for native Android projects. 
                I&apos;m always exploring new technologies and contributing to the developer community.
              </p>
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
