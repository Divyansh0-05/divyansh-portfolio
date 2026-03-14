"use client"

import posts from "@/content/blog/posts.json"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-background pb-24 pt-32 md:pt-36">
      <div className="page-grid max-w-4xl">
        <header className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Blog
          </span>
          <h1
            className="text-4xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Notes from the build log
          </h1>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Short write‑ups on architecture decisions, UX details, and the technologies I use every
            day.
          </p>
        </header>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card group flex flex-col overflow-hidden border border-border/80 md:flex-row"
            >
              <div className="relative h-40 w-full shrink-0 overflow-hidden bg-black/70 md:h-40 md:w-44">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <h2
                    className="mt-2 text-lg font-semibold text-foreground md:text-xl"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-secondary"
                  >
                    Read article
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}

