"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"

const certificates = [
  {
    title: "Cloud Computing - NPTEL",
    issuer: "NPTEL",
    image: "/cloud nptel.jpg",
    href: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730170904234352.pdf",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    image: "/Career Essentials in Generative AI by Microsoft and LinkedIn.jpg",
    href: "https://www.linkedin.com/learning/certificates/24ffe4bf6a0c456de4b3d5305cdc59d6ac91742f5ed5da2cb265962a8d47a58d",
  },
  {
    title: "Data Structures and Algorithms Summer Training",
    issuer: "Lovely Professional University",
    image: "/dsa summer training.jpg",
    href: null,
  },
]

export default function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState<(typeof certificates)[number] | null>(null)

  return (
    <>
      <section id="certificates" className="relative overflow-hidden bg-[#0d0f12] py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-20 [mask-image:linear-gradient(180deg,transparent,black_14%,black_86%,transparent)]" />

        <div className="page-grid relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.46, delay: 0.05, ease: "easeOut" }}
              className="mt-4 text-[clamp(2.4rem,8vw,5.2rem)] font-black uppercase tracking-[0.16em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Certificates
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.46, delay: 0.1, ease: "easeOut" }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              <span className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/56">
                Click image to enlarge
              </span>
              <span className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/56">
                Verified learning
              </span>
            </motion.div>
          </div>

          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-12">
            {certificates.map((certificate, index) => {
              const hasLink = Boolean(certificate.href)
              const columnClass = index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12"

              return (
                <motion.div
                  key={certificate.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className={`${columnClass} group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_26px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_36px_90px_rgba(0,0,0,0.38)]`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
                  <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
                    <button
                      type="button"
                      onClick={() => setActiveCertificate(certificate)}
                      className="relative overflow-hidden rounded-[1.7rem] border border-white/10 text-left"
                    >
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="h-[300px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06] lg:h-[360px]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,18,0.04)_0%,rgba(13,15,18,0.18)_50%,rgba(13,15,18,0.48)_100%)]" />
                      <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/16 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/84 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Open Preview
                      </div>
                    </button>

                    <div className="flex flex-col justify-between rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/46">
                            Verified
                          </p>
                          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/58">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3
                          className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em] text-white"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {certificate.title}
                        </h3>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
                          {certificate.issuer}
                        </p>
                        <p className="mt-5 text-sm leading-7 text-white/54">
                          Click the certificate preview to inspect it in full size, then open the original source if available.
                        </p>
                      </div>

                      <div className="mt-8">
                        {hasLink ? (
                          <a
                            href={certificate.href ?? undefined}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex translate-y-3 items-center gap-2 rounded-full border border-white/16 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            View Certificate
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/64">
                            Preview Only
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#111317] p-3 shadow-[0_38px_100px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/45 text-white transition-colors hover:bg-black/70"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-black">
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="max-h-[82vh] w-full object-contain"
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 px-2 pb-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3
                    className="text-xl font-black tracking-[-0.04em] text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {activeCertificate.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
                    {activeCertificate.issuer}
                  </p>
                </div>

                {activeCertificate.href ? (
                  <a
                    href={activeCertificate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black"
                  >
                    Open Certificate
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
