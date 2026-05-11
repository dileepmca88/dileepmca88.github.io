"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Star, Download, Smartphone } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "NSCI Mumbai Mobile App",
    description: "Official mobile application for NSCI Mumbai (National Sports Club of India) with membership management, event booking, and club facilities access.",
    image: "/projects/nsci.png",
    tags: ["Flutter", "Firebase", "REST API", "Push Notifications"],
    stats: { stars: 0, downloads: "10K+" },
    links: { github: "https://github.com/dileepmca88", live: "https://play.google.com/store/apps/details?id=com.nscimumbai" },
    featured: true,
  },
  {
    id: 2,
    title: "Club O7",
    description: "Premium club management app for Club O7 members - Gujarat's largest city club. Features facility reservations, event management, and member services.",
    image: "/projects/clubo7.png",
    tags: ["Flutter", "Kotlin", "Firebase", "Payment Gateway"],
    stats: { stars: 124, downloads: "5K+" },
    links: { github: "https://github.com/dileepmca88", live: "https://play.google.com/store/apps/details?id=com.clubO7" },
    featured: true,
  },
  {
    id: 3,
    title: "Rajpath Club",
    description: "Comprehensive club app for Rajpath Club Limited with membership features, dining reservations, sports booking, and event notifications.",
    image: "/projects/rajpath.png",
    tags: ["Flutter", "SQLite", "REST API", "BLoC"],
    stats: { stars: 0, downloads: "10K+" },
    links: { github: "https://github.com/dileepmca88", live: "https://play.google.com/store/apps/details?id=com.rajpath.club" },
    featured: true,
  },
  {
    id: 4,
    title: "Karnavati Club",
    description: "Feature-rich club management application for Karnavati Club members with seamless booking and notification systems.",
    image: "/projects/karnavati.png",
    tags: ["Flutter", "Firebase", "Provider", "Charts"],
    stats: { stars: 0, downloads: "10K+" },
    links: { github: "https://github.com/dileepmca88", live: "https://play.google.com/store/apps/details?id=com.karnavaticlub&hl=en_IN" },
    featured: false,
  },
  {
    id: 5,
    title: "Smart India",
    description: "Ed-Tech application designed to enhance the learning journey with smart features and interactive content.",
    image: "/projects/smartindia.png",
    tags: ["Flutter", "REST API", "Google Maps", "Push Notifications"],
    stats: { stars: 0, downloads: "50K+" },
    links: { github: "https://github.com/dileepmca88", live: "https://play.google.com/store/apps/details?id=com.voiceofthings.smartindia&hl=en_IN" },
    featured: false,
  },
  {
    id: 6,
    title: "Smart Town Member",
    description: "Smart township management app for residents with society management, complaint logging, visitor tracking, and community features.",
    image: "/projects/smarttown.png",
    tags: ["Kotlin", "Firebase", "MVVM", "Room"],
    stats: { stars: 0, downloads: "10K+" },
    links: { github: "https://github.com/dileepmca88", live: "https://play.google.com/store/apps/details?id=com.smarttown" },
    featured: false,
  },
]

const filters = ["All", "Flutter", "Kotlin", "Firebase"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" ||
      project.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()))
  )

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Featured
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my mobile applications built with Flutter and native Android technologies.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "glass-card hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Phone Mockup */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,180,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,180,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Phone mockup */}
                <motion.div 
                  className="relative w-32 h-56 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-[1.5rem] p-1 shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 via-background to-primary/20 rounded-[1.3rem] overflow-hidden">
                    {/* Screen content */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-b-lg" />
                    <div className="p-3 pt-5 h-full flex flex-col">
                      <div className="w-8 h-8 rounded-lg bg-primary/40 mb-2 flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-primary" />
                      </div>
                      <div className="h-2 bg-foreground/30 rounded w-2/3 mb-1" />
                      <div className="h-1.5 bg-foreground/20 rounded w-1/2 mb-3" />
                      <div className="flex-1 space-y-1.5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-6 bg-foreground/10 rounded-lg" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating tag */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats & Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {project.stats.downloads}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`View ${project.title} on Play Store`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
