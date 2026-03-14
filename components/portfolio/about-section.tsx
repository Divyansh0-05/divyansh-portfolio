"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sectionEl = sectionRef.current
      const contentEl = contentRef.current
      const homeEl = document.getElementById("home")

      if (!sectionEl || !contentEl) return

      // Pin Home while About slides from below and covers it.
      if (homeEl) {
        gsap.set(sectionEl, { yPercent: 100, willChange: "transform" })

        gsap.fromTo(
          sectionEl,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: homeEl,
              start: "top top",
              end: "+=100%",
              scrub: 1,
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          },
        )
      }

      // Keep text static; only sweep orange highlights on important phrases.
      const highlights = gsap.utils.toArray<HTMLElement>("[data-hl]", contentEl)
      if (highlights.length > 0) {
        gsap.set(highlights, { backgroundSize: "0% 100%" })
      }

      gsap.to(highlights, {
        backgroundSize: "100% 100%",
        duration: 0.45,
        stagger: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-40 flex min-h-screen items-start justify-center overflow-hidden bg-[#f3f4f6] py-16 md:py-20"
    >
      <div className="page-grid">
        <h2
          className="text-[clamp(3rem,7.4vw,6.8rem)] font-bold tracking-[-0.04em] text-slate-900 lowercase"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          about me.
        </h2>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(280px,460px)_minmax(0,1fr)] lg:gap-12">
          <div className="relative h-[360px] w-full max-w-[460px] sm:h-[430px] lg:h-[500px]">
          <div
            id="about-photo-target"
            className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-white shadow-[0_20px_56px_rgba(15,23,42,0.16)]"
          >
            <Image
              id="about-photo-img"
              src="/profo.png"
              alt="Divyansh Singh"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="translate-y-[16%] scale-[1.32] object-contain object-bottom grayscale"
              loading="lazy"
            />
          </div>
          </div>

          <div
            ref={contentRef}
            className="space-y-5 pt-1 md:space-y-6 lg:pt-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <p className="max-w-2xl text-[1.03rem] leading-relaxed text-slate-700 md:text-[1.08rem]">
              I&apos;m <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">Divyansh Singh</span>, a Computer Science student at <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">Lovely Professional University</span> with a passion for building modern web applications and solving real-world problems through technology.
            </p>

            <p className="max-w-2xl text-[1.03rem] leading-relaxed text-slate-700 md:text-[1.08rem]">
              I specialize in <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">full-stack development</span> using the <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">MERN stack</span>, where I develop scalable applications with clean architecture and intuitive user experiences. I enjoy turning ideas into real products that are both technically efficient and visually engaging.
            </p>

            <p className="max-w-2xl text-[1.03rem] leading-relaxed text-slate-700 md:text-[1.08rem]">
              Beyond coding, I enjoy exploring <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">system design</span>, <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">UI/UX concepts</span>, and <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">AI tools</span> that enhance modern development workflows. I continuously work on improving my skills by building projects that combine performance, scalability, and thoughtful design.
            </p>

            <p className="max-w-2xl text-[1.03rem] leading-relaxed text-slate-700 md:text-[1.08rem]">
              My goal is to become a developer who builds <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">impactful products</span> that solve meaningful problems and deliver <span data-hl className="rounded px-1 bg-[linear-gradient(90deg,rgba(194,65,12,0.42)_0%,rgba(194,65,12,0.42)_100%)] bg-no-repeat [background-size:0%_100%]">exceptional user experiences</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
