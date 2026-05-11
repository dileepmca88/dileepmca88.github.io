"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Star, GitFork, Users, Code } from "lucide-react"

const githubStats = [
  { icon: Star, value: "2.4k", label: "Stars Earned" },
  { icon: GitFork, value: "340", label: "Forks" },
  { icon: Users, value: "1.2k", label: "Followers" },
  { icon: Code, value: "850+", label: "Contributions" },
]

const contributionData = [
  [0, 1, 2, 3, 2, 1, 0],
  [1, 2, 4, 3, 2, 3, 1],
  [2, 3, 4, 4, 3, 2, 2],
  [1, 4, 3, 4, 4, 3, 1],
  [2, 3, 4, 3, 4, 2, 2],
  [1, 2, 3, 4, 3, 2, 1],
  [0, 1, 2, 3, 2, 1, 0],
  [1, 2, 3, 4, 3, 2, 1],
  [2, 3, 4, 4, 4, 3, 2],
  [1, 4, 4, 3, 4, 4, 1],
  [2, 3, 4, 4, 4, 3, 2],
  [1, 2, 3, 4, 3, 2, 1],
]

const getContributionColor = (level: number) => {
  const colors = [
    "bg-secondary",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/60",
    "bg-primary",
  ]
  return colors[level] || colors[0]
}

export function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            GitHub
            <span className="text-primary"> Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m passionate about open source and actively contribute to the Flutter and Android community.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {githubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <span className="font-medium">Contribution Activity</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Grid */}
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-fit">
                {contributionData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.2,
                          delay: 0.6 + (weekIndex * 7 + dayIndex) * 0.005,
                        }}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${getContributionColor(day)} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer`}
                        title={`${day * 2} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                850+ contributions in the last year
              </p>
              <a
                href="https://github.com/dileepmca88"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
