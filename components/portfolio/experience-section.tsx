"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react"

const timelineItems = [
  {
    icon: GraduationCap,
    title: "Computer Science Foundations",
    subtitle: "B.Tech • Core CS & Web",
    description:
      "Strengthened fundamentals in data structures, algorithms, and software engineering while exploring the web stack.",
    date: "2019 – 2023",
    side: "left" as const,
  },
  {
    icon: Rocket,
    title: "Full‑Stack Experimentation",
    subtitle: "Personal Projects",
    description:
      "Built platforms like Learnix, Insurance Management System, and e‑commerce experiences, focusing on UX and scalability.",
    date: "2021 – Present",
    side: "right" as const,
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    subtitle: "Real‑world Engineering",
    description:
      "Worked on production‑grade apps, APIs, and integrations, collaborating closely with designers and stakeholders.",
    date: "2022 – 2024",
    side: "left" as const,
  },
  {
    icon: Award,
    title: "Continual Learning",
    subtitle: "Cloud, Databases & DX",
    description:
      "Actively exploring modern tooling across cloud, databases, and developer experience to keep my stack sharp.",
    date: "Ongoing",
    side: "right" as const,
  },
]

function TimelineCard({
  item,
  index,
}: {
  item: (typeof timelineItems)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: item.side === "left" ? -60 : 60,
      }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex w-full items-center ${
        item.side === "right" ? "justify-end" : "justify-start"
      } md:w-1/2 ${item.side === "right" ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
    >
      {/* Connector dot (desktop) */}
      <div
        className={`absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-neon bg-background md:block ${
          item.side === "left" ? "-right-[7px]" : "-left-[7px]"
        }`}
      />

      <div className="glass group w-full rounded-xl p-6 transition-all hover:border-neon/30 hover:neon-glow">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
            <Icon className="h-5 w-5 text-neon" />
          </div>
          <div>
            <h3
              className="text-sm font-bold text-foreground"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {item.title}
            </h3>
            <p className="text-xs text-neon">{item.subtitle}</p>
          </div>
        </div>
        <p className="mb-2 text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <span className="text-xs font-medium text-muted-foreground/60">
          {item.date}
        </span>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="experience" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neon">
            Journey
          </span>
          <h2
            className="mt-4 text-4xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Experience Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-neon/30 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {timelineItems.map((item, i) => (
              <TimelineCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
