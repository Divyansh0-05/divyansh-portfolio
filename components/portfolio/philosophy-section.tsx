"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

export default function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const line2Blur = useTransform(scrollYProgress, [0.2, 0.45], [8, 0])
  const line2Opacity = useTransform(scrollYProgress, [0.2, 0.45], [0.3, 1])
  const line3Blur = useTransform(scrollYProgress, [0.35, 0.55], [8, 0])
  const line3Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0.3, 1])

  return (
    <section ref={containerRef} className="relative py-32">
      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -80, rotateY: 15 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="glass absolute left-8 top-1/2 hidden -translate-y-1/2 rounded-xl p-4 lg:block"
        whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="h-28 w-40 rounded-lg bg-gradient-to-br from-neon/20 to-transparent" />
        <p className="mt-2 text-xs text-muted-foreground">UI Design</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80, rotateY: -15 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="glass absolute right-8 top-1/3 hidden rounded-xl p-4 lg:block"
        whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-col gap-1 font-mono text-xs text-muted-foreground">
          <span className="text-neon">{"const"} <span className="text-foreground">build</span> = () =&gt; {"{"}</span>
          <span className="pl-4 text-muted-foreground">{"// clean code"}</span>
          <span className="text-neon">{"}"}</span>
        </div>
      </motion.div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neon"
        >
          Philosophy
        </motion.span>

        <div
          className="mt-8 space-y-4 text-3xl font-bold leading-snug tracking-tight md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground"
          >
            Great software is not
          </motion.p>
          <motion.p
            style={{
              filter: useTransform(line2Blur, (v) => `blur(${v}px)`),
              opacity: line2Opacity,
            }}
            className="text-foreground"
          >
            just written — it is
          </motion.p>
          <motion.p
            style={{
              filter: useTransform(line3Blur, (v) => `blur(${v}px)`),
              opacity: line3Opacity,
            }}
            className="text-gradient"
          >
            designed, engineered
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground"
          >
            and experienced.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
