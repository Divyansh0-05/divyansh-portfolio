 "use client"
 
import { useEffect, useState } from "react"
import HeroSection from "@/components/portfolio/hero-section"
import FloatingNav from "@/components/portfolio/floating-nav"
import ProjectsSection from "@/components/portfolio/projects-section"
import AboutSection from "@/components/portfolio/about-section"
import TechStackSection from "@/components/portfolio/tech-stack-section"
import ContactSection from "@/components/portfolio/contact-section"
import SectionReveal from "@/components/portfolio/section-reveal"
import CustomCursor from "@/components/portfolio/custom-cursor"
import CertificatesSection from "@/components/portfolio/certificates-section"
import AchievementsSection from "@/components/portfolio/achievements-section"
import EducationSection from "@/components/portfolio/education-section"
import SoftSkillsSection from "@/components/portfolio/soft-skills-section"

export default function PortfolioPage() {
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setNavVisible(true)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash
      if (!hash) return

      const target = document.querySelector(hash)
      if (!(target instanceof HTMLElement)) return

      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 120)
      })
    }

    scrollToHashTarget()
    window.addEventListener("hashchange", scrollToHashTarget)

    return () => window.removeEventListener("hashchange", scrollToHashTarget)
  }, [])

  return (
    <main className="relative bg-[#f3f4f6] text-foreground selection:bg-black/10">
      <CustomCursor />
      <FloatingNav visible={navVisible} />

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Tech stack (kept directly after About) */}
      <TechStackSection />

      {/* Projects */}
      <SectionReveal delay={0.05}>
        <ProjectsSection />
      </SectionReveal>

      {/* Soft Skills */}
      <SectionReveal delay={0.05}>
        <SoftSkillsSection />
      </SectionReveal>

      {/* Certificates */}
      <SectionReveal delay={0.05}>
        <CertificatesSection />
      </SectionReveal>

      {/* Achievements */}
      <SectionReveal delay={0.05}>
        <AchievementsSection />
      </SectionReveal>

      {/* Education */}
      <SectionReveal delay={0.05}>
        <EducationSection />
      </SectionReveal>

      {/* Contact */}
      <SectionReveal delay={0.05}>
        <ContactSection />
      </SectionReveal>
    </main>
  )
}
