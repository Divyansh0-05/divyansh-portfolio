"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const leftTextRef = useRef<HTMLDivElement | null>(null)
  const rightActionRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sectionEl = sectionRef.current
      const nameEl = nameRef.current
      const leftEl = leftTextRef.current
      const rightEl = rightActionRef.current
      const imageEl = imageRef.current
      const aboutEl = document.getElementById("about")

      if (!sectionEl || !nameEl || !leftEl || !rightEl || !imageEl || !aboutEl) return

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          endTrigger: aboutEl,
          end: "top top",
          scrub: 1.1,
        },
      })
        .to(nameEl, { yPercent: -34, opacity: 0.3, ease: "none" }, 0)
        .to(leftEl, { yPercent: -75, opacity: 0.15, ease: "none" }, 0)
        .to(rightEl, { yPercent: -75, opacity: 0.15, ease: "none" }, 0)
        .to(imageEl, { yPercent: -14, scale: 0.96, opacity: 0.8, ease: "none" }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#d7d7d7]"
    >
      {/* Side labels/actions */}
      <div className="absolute inset-x-0 top-8 z-[110] hidden items-start justify-between px-6 md:flex md:px-12">
        <div
          ref={leftTextRef}
          className="pointer-events-none text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-800/85 md:text-xs"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <div>Full</div>
          <div>Stack</div>
          <div>Developer</div>
        </div>

        <div ref={rightActionRef}>
          <a
            href="/resume.pdf"
            download
            className="group relative isolate inline-flex items-center overflow-hidden rounded-full border border-slate-800/35 bg-white/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-800 backdrop-blur-xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download Resume</span>
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </div>
      </div>

      <div className="relative mt-10 h-[min(78vh,670px)] w-[min(99vw,1320px)] overflow-hidden rounded-[2.2rem] bg-[#8c8c8c] shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
        {/* Mobile side labels/actions inside card */}
        <div className="absolute inset-x-0 top-4 z-[110] flex items-start justify-between px-4 md:hidden">
          <div
            className="pointer-events-none text-[10px] font-semibold uppercase tracking-[0.26em] text-white/90"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <div>Full</div>
            <div>Stack</div>
            <div>Developer</div>
          </div>

          <div>
            <a
              href="/resume.pdf"
              download
              className="group relative isolate inline-flex items-center overflow-hidden rounded-full border border-white/35 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download Resume</span>
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div
          ref={imageRef}
          className="absolute bottom-0 right-[-22%] z-30 h-[99%] w-[92vw] md:right-[-3%] md:w-[760px]"
        >
          <Image
            src="/profo.png"
            alt="Divyansh Singh"
            fill
            priority
            sizes="(min-width: 768px) 640px, 58vw"
            className="object-contain object-bottom grayscale contrast-110"
          />
        </div>

        {/* Giant name */}
        <h1
          ref={nameRef}
          className="pointer-events-none absolute bottom-0 left-4 z-40 max-w-[94%] select-none text-left font-black leading-[0.8] tracking-[-0.045em] text-white md:left-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="hidden whitespace-nowrap text-[clamp(3.2rem,10.8vw,11.5rem)] md:block">
            divyansh&nbsp;singh
          </span>
          <span className="block text-[clamp(3.4rem,16vw,5.5rem)] md:hidden">divyansh</span>
          <span className="block text-[clamp(3.4rem,16vw,5.5rem)] md:hidden">singh</span>
        </h1>
      </div>
    </section>
  )
}
