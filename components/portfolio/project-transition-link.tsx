"use client"

import { type MouseEvent, type ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

type ProjectTransitionLinkProps = {
  href: string
  image: string
  title: string
  intro: string
  className?: string
  children: ReactNode
  onTransitionStart?: () => void
}

type TransitionState = {
  rect: {
    top: number
    left: number
    width: number
    height: number
  }
  viewport: {
    width: number
    height: number
  }
}

const TRANSITION_KEY = "portfolio-project-transition"

export default function ProjectTransitionLink({
  href,
  image,
  title,
  intro,
  className,
  children,
  onTransitionStart,
}: ProjectTransitionLinkProps) {
  const router = useRouter()
  const reduceMotion = useReducedMotion()
  const [transition, setTransition] = useState<TransitionState | null>(null)

  useEffect(() => {
    if (!transition) return

    const timeout = window.setTimeout(() => {
      router.push(href)
    }, reduceMotion ? 0 : 980)

    return () => window.clearTimeout(timeout)
  }, [href, reduceMotion, router, transition])

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()

    if (reduceMotion) {
      onTransitionStart?.()
      router.push(href)
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    sessionStorage.setItem(
      TRANSITION_KEY,
      JSON.stringify({
        title,
        image,
        intro,
        triggeredAt: Date.now(),
      }),
    )

    onTransitionStart?.()

    setTransition({
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    })
  }

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={className}
        data-project-intro={intro}
        data-project-href={href}
      >
        {children}
      </a>

      <AnimatePresence>
        {transition ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#07090c]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.96 }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="absolute overflow-hidden border border-white/10 bg-[#0b0e13] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              initial={{
                top: transition.rect.top,
                left: transition.rect.left,
                width: transition.rect.width,
                height: transition.rect.height,
                borderRadius: 28,
              }}
              animate={{
                top: 0,
                left: 0,
                width: transition.viewport.width,
                height: transition.viewport.height,
                borderRadius: 0,
              }}
              transition={{ duration: 0.92, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <motion.img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 0.94, ease: [0.2, 0.9, 0.2, 1] }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,0.08)_0%,rgba(7,9,12,0.18)_36%,rgba(7,9,12,0.96)_100%)]" />
              <motion.div
                className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-10 md:pb-10"
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.24, duration: 0.54, ease: "easeOut" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">
                  Opening Project
                </p>
                <h3
                  className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-white md:text-6xl"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {title}
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export { TRANSITION_KEY }
