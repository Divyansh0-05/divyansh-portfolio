"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/projects-data"
import { TRANSITION_KEY } from "@/components/portfolio/project-transition-link"
import CustomCursor from "@/components/portfolio/custom-cursor"

type ProjectDetailsViewProps = {
  project: Project
}

export default function ProjectDetailsView({ project }: ProjectDetailsViewProps) {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const raw = sessionStorage.getItem(TRANSITION_KEY)
    if (!raw) return

    try {
      const parsed = JSON.parse(raw) as { triggeredAt?: number }
      if (parsed.triggeredAt && Date.now() - parsed.triggeredAt < 4000) {
        setShowIntro(true)
      }
    } catch {
      // Ignore malformed transition payloads.
    } finally {
      sessionStorage.removeItem(TRANSITION_KEY)
    }
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090c] px-5 py-6 text-white md:px-8 md:py-8">
      <CustomCursor />
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
        >
          <Link
            href="/#projects"
            scroll={false}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/86 backdrop-blur-xl transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        <article className="relative mt-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e13] shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute -top-20 right-[-6rem] h-64 w-64 rounded-full bg-white/8 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-5rem] left-[-3rem] h-56 w-56 rounded-full bg-white/6 blur-3xl" />

          <div className="grid min-h-[78vh] gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ scale: showIntro ? 1.08 : 1.02, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: showIntro ? 0.75 : 0.45, ease: [0.2, 0.9, 0.2, 1] }}
              className="relative min-h-[340px] overflow-hidden lg:min-h-full"
            >
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className="h-full w-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,0.1)_0%,rgba(7,9,12,0.08)_35%,rgba(7,9,12,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,9,12,0.12)_0%,rgba(7,9,12,0.06)_38%,rgba(7,9,12,0.9)_100%)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: "easeOut", delay: showIntro ? 0.16 : 0.06 }}
              className="relative flex flex-col justify-between p-6 md:p-10"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  Project Overview
                </p>
                <h1
                  className="mt-4 max-w-xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                  {project.description}
                </p>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  {project.details}
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-slate-200 uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-[#07090c] transition-colors hover:bg-slate-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </main>
  )
}
