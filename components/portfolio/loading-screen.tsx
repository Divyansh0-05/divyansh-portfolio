"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading internal assets
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800) // Call onComplete after fade out
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="w-16 h-16 rounded-full border border-white/20 border-t-white"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="mt-6 font-mono text-sm tracking-[0.2em] text-white/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
