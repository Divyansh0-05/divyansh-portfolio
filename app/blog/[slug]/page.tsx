"use client"

import posts from "@/content/blog/posts.json"
import { notFound, useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function BlogPostPage() {
  const params = useParams()
  const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug

  const post =
    typeof slugParam === "string"
      ? posts.find((p) => p.slug === slugParam)
      : undefined

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pb-24 pt-28 md:pt-32">
      <div className="page-grid max-w-3xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
        >
          <span aria-hidden>←</span> Back to all posts
        </Link>

        <article>
          <header className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <h1
              className="mt-3 text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {post.title}
            </h1>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 overflow-hidden rounded-2xl border border-border/80 bg-black/70"
          >
            <div className="relative h-56 w-full md:h-72">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
          </motion.div>

          <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary">
            <p>
              This is a placeholder body for{" "}
              <span className="font-medium text-foreground">{post.title}</span>. You can replace
              this with markdown‑driven content or rich text later. For now, it serves as a canvas
              to showcase the reading experience, spacing, and typography.
            </p>
            <p>
              The idea behind this blog is to give a deeper look into how projects are built:
              decisions around architecture, trade‑offs in UX, and small implementation details that
              make the final experience feel premium and intentional.
            </p>
            <p>
              When you are ready, you can wire each post to an individual markdown file and render
              it here with a markdown renderer, keeping the same layout and transitions.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}

