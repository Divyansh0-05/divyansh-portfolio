"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    grade: "CGPA: 7.46",
    duration: "Aug' 2023-Present",
    icon: GraduationCap,
  },
  {
    institution: "Anil Saraswati Vidya Mandir",
    location: "Ayodhya, U P",
    degree: "Intermediate",
    grade: "Percentage: 74.4%",
    duration: "Apr' 2021 – Mar' 2022",
    icon: GraduationCap,
  },
  {
    institution: "Anil Saraswati Vidya Mandir",
    location: "Ayodhya, UP",
    degree: "Matriculation",
    grade: "Percentage: 86%",
    duration: "Apr' 2019 – Mar' 2020",
    icon: GraduationCap,
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#f3f4f6] py-24 text-slate-950">
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
            Academic Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.46, delay: 0.05, ease: "easeOut" }}
            className="mt-4 text-[clamp(2.4rem,8vw,5.4rem)] font-black uppercase tracking-[0.16em] text-slate-950"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Education
          </motion.h2>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-3">
          {education.map((edu, index) => {
            const Icon = edu.icon

            return (
              <motion.div
                key={edu.institution + edu.degree}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[2.1rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.74)_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.24),transparent)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-slate-500">{edu.duration}</span>
                  </div>
                </div>

                <h3
                  className="relative mt-8 text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {edu.institution}
                </h3>
                <p className="relative mt-2 text-lg font-semibold text-slate-700">{edu.location}</p>
                <p className="relative mt-3 text-base font-medium text-slate-600">{edu.degree}</p>
                <p className="relative mt-2 text-sm font-semibold text-slate-500">{edu.grade}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}