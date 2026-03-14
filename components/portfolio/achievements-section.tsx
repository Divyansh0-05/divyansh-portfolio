"use client"

import { motion } from "framer-motion"
import { Award, BriefcaseBusiness, Users } from "lucide-react"

const achievements = [
  {
    title: "Solved 150+ LeetCode Problems",
    description:
      "Solved more than 150 problems on LeetCode, strengthening my skills in Data Structures, Algorithms, and problem-solving patterns used in technical interviews.",
    href: "https://leetcode.com/u/Divyansh_singh005/",
    stat: "150+",
    icon: Award,
  },
  {
    title: "Event Manager - Zillion: L&T Club",
    description:
      "Managed and organized technical and student events while coordinating teams and handling event execution responsibilities.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7337792818918191105/",
    stat: "02",
    icon: BriefcaseBusiness,
  },
  {
    title: "Co-CEO - Arambh Student Organization",
    description:
      "Led student initiatives, coordinated teams, and contributed to organizing community-driven programs and events.",
    href: "https://www.linkedin.com/in/divyansh-singh-80325123a/",
    stat: "03",
    icon: Users,
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-[#f7f7f5] py-24 text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30 [mask-image:linear-gradient(180deg,transparent,black_12%,black_88%,transparent)]" />

      <div className="page-grid relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500"
          >
            Highlights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.46, delay: 0.05, ease: "easeOut" }}
            className="mt-4 text-[clamp(2.4rem,8vw,5.4rem)] font-black uppercase tracking-[0.16em] text-slate-950"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Achievements
          </motion.h2>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon

            return (
              <motion.a
                key={achievement.title}
                href={achievement.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.1rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.74)_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.24),transparent)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span
                    className="text-[3.8rem] font-black leading-none tracking-[-0.08em] text-slate-200"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {achievement.stat}
                  </span>
                </div>

                <h3
                  className="relative mt-8 text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {achievement.title}
                </h3>

                <p className="relative mt-5 text-sm leading-7 text-slate-600">{achievement.description}</p>

                <div className="relative mt-8 flex items-center gap-3">
                  <span className="h-px flex-1 bg-slate-200 transition-colors duration-300 group-hover:bg-slate-300" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                    Explore
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
