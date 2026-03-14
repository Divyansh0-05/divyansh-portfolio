"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "@/lib/projects-data"
import ProjectTransitionLink from "@/components/portfolio/project-transition-link"

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0")
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const activeProject = useMemo(() => projects[activeIndex] ?? projects[0], [activeIndex])

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-project-step]"))
    if (steps.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          const next = Number(target.dataset.projectStep)
          if (!Number.isNaN(next)) setActiveIndex(next)
        })
      },
      {
        threshold: 0.65,
        rootMargin: "-8% 0px -16% 0px",
      },
    )

    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  const handleTitleClick = (index: number) => {
    setActiveIndex(index)
    const step = document.getElementById(`project-step-${index}`)
    if (!step) return
    step.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section id="projects" className="relative z-10 min-h-[280vh] bg-[#07090c] py-20 text-white md:min-h-[320vh] md:py-24 lg:min-h-[360vh]">
      <div className="page-grid">
        <div className="flex items-start justify-between">
          <h2
            className="text-[clamp(2.6rem,11vw,8rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Projects
          </h2>
          <span className="mt-1 text-sm font-semibold tracking-[0.16em] text-slate-300">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10">
          <aside
            className={`sticky top-[4.5rem] z-20 h-fit bg-[#07090c] pb-4 transition-opacity duration-200 lg:top-24 ${
              isTransitioning ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <div className="h-[110px] overflow-hidden md:h-[138px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeProject.id}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="text-[5rem] font-black leading-[0.9] tracking-[-0.04em] text-white/22 md:text-[7.5rem]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {formatIndex(activeIndex)}.
                </motion.p>
              </AnimatePresence>
            </div>

            <ul className="mt-5 space-y-2 text-slate-400">
              {projects.map((project, index) => (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => handleTitleClick(index)}
                    className={`inline-flex items-center gap-3 text-left text-lg transition-colors ${
                      index === activeIndex ? "font-semibold text-white" : "hover:text-slate-200"
                    }`}
                  >
                    <span
                      className={`h-[1px] w-4 transition-colors ${
                        index === activeIndex ? "bg-white" : "bg-slate-600"
                      }`}
                    />
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div className="sticky top-[22rem] z-10 md:top-[24.5rem] lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/35"
                >
                  <ProjectTransitionLink
                    href={`/projects/${activeProject.id}`}
                    className="project-card relative block"
                    image={activeProject.image}
                    title={activeProject.title}
                    intro={activeProject.description}
                    onTransitionStart={() => setIsTransitioning(true)}
                  >
                    <img
                      src={activeProject.image}
                      alt={`${activeProject.title} preview`}
                      className="h-[280px] w-full object-cover md:h-[470px]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </ProjectTransitionLink>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8" aria-hidden>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  id={`project-step-${index}`}
                  data-project-step={index}
                  className="h-[64vh] snap-start md:h-[72vh] lg:h-[84vh]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
