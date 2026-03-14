"use client"

import { motion } from "framer-motion"

const stackGroups = [
  {
    title: "Languages",
    eyebrow: "Foundation",
    description: "Core languages for problem solving, application logic, and interactive product work.",
    items: [
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    eyebrow: "Interface",
    description: "Modern UI tools for responsive layouts, smooth interactions, and production-ready frontends.",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    eyebrow: "Systems",
    description: "API and server tooling for authentication, business logic, and scalable application flows.",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
  },
  {
    title: "Database",
    eyebrow: "Storage",
    description: "Structured and document-oriented data systems used across product and backend work.",
    items: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    eyebrow: "Workflow",
    description: "Everyday development tools for versioning, APIs, testing flows, and delivery operations.",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "JWT",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jsonwebtokens.svg",
      },
      {
        name: "Socket.IO",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      {
        name: "Postman",
        icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
    ],
  },
]

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f7f7f5] py-24 text-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30 [mask-image:linear-gradient(180deg,transparent,black_14%,black_88%,transparent)]" />
      <motion.div
        className="pointer-events-none absolute left-[-10rem] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0)_72%)] blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -26, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-[-8rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.18)_0%,rgba(100,116,139,0)_74%)] blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 28, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="page-grid relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500"
          >
            Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.05, ease: "easeOut" }}
            className="mt-4 text-[clamp(2.6rem,8vw,6rem)] font-black uppercase tracking-[0.18em] text-slate-950"
            style={{ fontFamily: "var(--font-space-grotesk)", fontVariantLigatures: "none" }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.46, delay: 0.1, ease: "easeOut" }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              Full-stack workflow
            </span>
            <span className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              {stackGroups.length} categories
            </span>
          </motion.div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_100%)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6 md:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.2),transparent)]" />

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Capabilities
                </p>
                <h3
                  className="mt-3 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl md:text-4xl"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Structured for interfaces, APIs, data, and daily development flow.
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {stackGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ x: 6 }}
                  className="group rounded-[1.6rem] border border-slate-200/80 bg-white/85 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        {group.eyebrow}
                      </p>
                      <h4
                        className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {group.title}
                      </h4>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.slice(0, 4).map((item) => (
                      <span
                        key={`${group.title}-${item.name}-label`}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.58, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-[#101215] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]" />
            <motion.div
              className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="pointer-events-none absolute left-[-3rem] bottom-[-3rem] h-40 w-40 rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <div className="relative flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/48">
                  Stack Signals
                </p>
                <h3
                  className="mt-3 text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Tools in active use
                </h3>
              </div>
            </div>

            <div className="relative mt-8 rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
              <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/44">Frontend</p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    05
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/44">Backend</p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    02
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-3 col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/44">Tools</p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    06
                  </p>
                </div>
              </div>

              <div className="space-y-4">
              {stackGroups.map((group, index) => (
                <motion.div
                  key={`${group.title}-items`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/82">
                      {group.title}
                    </h4>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 + itemIndex * 0.04, duration: 0.3, ease: "easeOut" }}
                        whileHover={{ y: -4, scale: 1.04 }}
                        className="group/chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:text-sm"
                      >
                        <motion.span
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(255,255,255,0.08)]"
                          animate={{ y: [0, -2, 0], scale: [1, 1.06, 1] }}
                          transition={{
                            duration: 3 + itemIndex * 0.16,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: itemIndex * 0.1,
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={`${item.name} icon`}
                            className="h-4 w-4 object-contain"
                            loading="lazy"
                          />
                        </motion.span>
                        <span>{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
