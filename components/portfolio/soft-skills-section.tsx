"use client"

import { motion } from "framer-motion"
import { Brain, Users, Zap } from "lucide-react"

const softSkills = [
  {
    name: "Problem-Solving",
    description: "Strong analytical and logical thinking with hands-on experience solving real-world coding and backend challenges. Regularly apply concepts like sliding window, sorting, and optimization in DSA practice. In project work, I've debugged backend issues by tracing API flows, identifying bottlenecks, and refining logic for better performance. I focus on breaking complex problems into smaller components, testing approaches, and iterating toward efficient solutions.",
    icon: Brain,
  },
  {
    name: "Leadership",
    description: "Proven leadership as Co-CEO of Arambh Organization, where I organized and managed two university-level events end-to-end. Led team coordination, delegated tasks across domains, and ensured smooth execution under tight timelines. Took initiative in brainstorming ideas, resolving on-ground issues during events, and making quick decisions to maintain flow. This experience strengthened my ability to lead teams, communicate clearly, and handle responsibility under pressure.",
    icon: Users,
  },
  {
    name: "Adaptability",
    description: "Demonstrated adaptability by quickly learning and implementing unfamiliar technologies based on project needs. For instance, I independently explored and integrated Nodemailer for email functionality and Socket.IO for real-time communication—tools I had not previously worked with. Additionally, I actively adapt to emerging technologies like AI by leveraging AI tools to improve development workflows, optimize code, and accelerate problem-solving. This ability to continuously learn, experiment, and implement new tools allows me to stay relevant and perform efficiently in fast-changing development environments.",
    icon: Zap,
  },
]

export default function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="relative overflow-hidden bg-[#f3f4f6] py-24 text-slate-950">
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
            Personal Strengths
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.46, delay: 0.05, ease: "easeOut" }}
            className="mt-4 text-[clamp(2.4rem,8vw,5.2rem)] font-black uppercase tracking-[0.16em] text-slate-950"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Soft Skills
          </motion.h2>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-1">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2.1rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.74)_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_36%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.24),transparent)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3
                  className="relative mt-8 text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {skill.name}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-slate-600">{skill.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}