"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 600)
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.span
                className="text-5xl font-bold text-foreground md:text-7xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                D<span className="text-primary">.</span>
              </motion.span>
            </motion.div>

            {/* Loading bar */}
            <div className="h-0.5 w-48 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-[#FFA552]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs uppercase tracking-widest text-muted-foreground"
            >
              Loading experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
