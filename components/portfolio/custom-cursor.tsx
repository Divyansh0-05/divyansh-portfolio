"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringProject, setIsHoveringProject] = useState(false)
  const [projectIntro, setProjectIntro] = useState("")
  const [projectHref, setProjectHref] = useState("")
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    if (!isFinePointer) return
    setEnabled(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over clickable elements
      const isClickable = target.closest("button, a, input, textarea, select, [role='button']")
      setIsHovering(!!isClickable)

      // Check if hovering over project card specifically
      const projectCard = target.closest(".project-card") as HTMLElement | null
      const projectBubble = target.closest(".project-hover-bubble") as HTMLElement | null
      const isProjectContext = !!projectCard || !!projectBubble
      setIsHoveringProject(isProjectContext)

      if (projectCard) {
        setProjectIntro(projectCard.dataset.projectIntro ?? "")
        setProjectHref(projectCard.dataset.projectHref ?? "")
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateHoverState)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateHoverState)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          html,
          body,
          a,
          button,
          input,
          textarea,
          select {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        <div
          className={`flex items-center justify-center rounded-full border border-white transition-all duration-300 ${
            isHovering || isHoveringProject
              ? "w-12 h-12 bg-transparent opacity-100"
              : "w-3 h-3 bg-white opacity-80"
          }`}
        >
          {isHoveringProject && <span className="absolute h-0 w-0 opacity-0">project</span>}
        </div>
      </motion.div>

      {isHoveringProject && (
        <motion.a
          href={projectHref || "#"}
          className="project-hover-bubble fixed top-0 left-0 z-[10000] w-[280px] rounded-2xl border border-white/30 bg-black/45 p-3 text-white backdrop-blur-xl"
          animate={{
            x: position.x + 24,
            y: position.y + 24,
            opacity: 1,
            scale: 1,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.45 }}
        >
          <span className="inline-flex items-center rounded-full border border-white/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            View Project
          </span>
          <p className="mt-2 text-xs leading-relaxed text-white">{projectIntro}</p>
        </motion.a>
      )}
      
      {/* Trailing Particle Effect */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-1 h-1 bg-white rounded-full opacity-30 mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.3 }}
      />
    </>
  )
}
