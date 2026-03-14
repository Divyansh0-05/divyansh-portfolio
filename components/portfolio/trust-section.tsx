"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const avatars = [
  { name: "A", bg: "bg-neon/20 text-neon" },
  { name: "B", bg: "bg-purple-500/20 text-purple-400" },
  { name: "C", bg: "bg-emerald-500/20 text-emerald-400" },
  { name: "D", bg: "bg-amber-500/20 text-amber-400" },
  { name: "E", bg: "bg-rose-500/20 text-rose-400" },
]

export default function TrustSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass flex flex-col items-center gap-6 rounded-2xl px-8 py-12 text-center neon-glow"
        >
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-background text-sm font-bold ${avatar.bg}`}
              >
                {avatar.name}
              </motion.div>
            ))}
          </div>

          <p className="max-w-md text-lg font-medium text-foreground">
            Trusted by startups, developers and tech communities.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-1"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + 0.1 * i }}
              >
                <Star className="h-5 w-5 fill-neon text-neon" />
              </motion.div>
            ))}
          </motion.div>

          <p className="text-sm text-muted-foreground">
            5.0 average rating from collaborators
          </p>
        </motion.div>
      </div>
    </section>
  )
}
