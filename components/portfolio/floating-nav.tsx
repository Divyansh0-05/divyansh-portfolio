"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Home", href: "#home", type: "anchor" as const },
  { label: "About Me", href: "#about", type: "anchor" as const },
  { label: "Tech Stack", href: "#skills", type: "anchor" as const },
  { label: "Projects", href: "#projects", type: "anchor" as const },
  { label: "Certificates", href: "#certificates", type: "anchor" as const },
  { label: "Achievements", href: "#achievements", type: "anchor" as const },
  { label: "Contact", href: "#contact", type: "anchor" as const },
]

type FloatingNavProps = {
  visible: boolean
}

export default function FloatingNav({ visible }: FloatingNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [open, setOpen] = useState(false)

  const scrollToAnchor = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (!el) return

    const navOffset = 92
    const top = window.scrollY + el.getBoundingClientRect().top - navOffset
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
    setOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      const sections = navItems
        .filter((item) => item.type === "anchor")
        .map((item) => item.href.replace("#", ""))

      const threshold = window.innerHeight * 0.55
      let current = sections[0]

      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= threshold) current = id
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener("scroll", close, { passive: true })
    return () => window.removeEventListener("scroll", close)
  }, [open])

  return (
    <motion.nav
      initial={false}
      animate={visible ? { y: 0, opacity: 1 } : { y: -32, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 md:pt-6"
      style={{ pointerEvents: visible ? "none" : "none" }}
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 md:px-6 md:py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/55 bg-white/45 backdrop-blur-2xl shadow-[0_14px_40px_rgba(15,23,42,0.16)] ring-1 ring-white/40"
            : "border-white/50 bg-gradient-to-b from-white/55 via-white/35 to-white/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-white/35"
        }`}
        style={{ pointerEvents: "auto" }}
      >
          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-8 w-8 rounded-full border border-slate-300 bg-slate-900 shadow-[0_0_15px_rgba(15,23,42,0.25)]" />
            <div className="flex flex-col">
              <span
                className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Portfolio
              </span>
              <span
                className="text-sm font-semibold text-slate-900"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Divyansh Singh
              </span>
            </div>
          </div>

            {/* Desktop menu */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive =
                  item.type === "anchor"
                    ? activeSection === item.href.replace("#", "")
                    : false
                const baseClasses =
                  "relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors text-slate-600 hover:text-slate-900"

                const content = (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-slate-200"
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </>
                )

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={baseClasses}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToAnchor(item.href)
                    }}
                  >
                    {content}
                  </a>
                )
              })}
            </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/55 bg-white/45 text-xs font-medium text-slate-700 backdrop-blur-xl transition-colors hover:border-slate-500 hover:text-slate-900 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-70"
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

      {/* Mobile menu (keep mounted, animate open/close) */}
      <motion.div
        className="absolute inset-x-4 top-[72px] md:hidden"
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/55 bg-white/55 px-4 py-3 shadow-2xl backdrop-blur-2xl ring-1 ring-white/35">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive =
                item.type === "anchor"
                  ? activeSection === item.href.replace("#", "")
                  : false
              const baseClasses =
                "flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"

              const inner = (
                <>
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />}
                </>
              )

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={baseClasses}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToAnchor(item.href)
                  }}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
