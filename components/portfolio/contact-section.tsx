"use client"

import Image from "next/image"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen overflow-hidden bg-[#0b0c10] px-4 pb-4 pt-28 text-[#e8e6df] md:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr]">
          <h2
            className="text-[clamp(3.2rem,8.2vw,7.6rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#b8b8b8]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            get in
          </h2>

          <div className="mx-auto w-[min(58vw,360px)] md:w-[360px]">
            <div
              className="relative h-[220px] w-full overflow-hidden rounded-t-[12px] bg-[#131722] md:h-[260px]"
              style={{ clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)" }}
            >
              <Image
                src="/profo.png"
                alt="Divyansh Singh"
                fill
                sizes="(min-width: 768px) 360px, 58vw"
                className="object-cover object-top grayscale"
                priority={false}
              />
            </div>
            <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-[#d0d4ff]" />
          </div>

          <h2
            className="text-right text-[clamp(3.2rem,8.2vw,7.6rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#b8b8b8]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            touch
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 text-sm md:mt-16 md:grid-cols-2">
          <div className="space-y-2 text-[#efede7]">
            <p>
              email:{" "}
              <a href="mailto:divyansh.singh9600@gmail.com" className="text-[#ffd08a]">
                divyansh.singh9600@gmail.com
              </a>
            </p>
            <p>based in: Punjab, India</p>
            <p>available for: freelance projects and full-time roles</p>
          </div>

          <div className="grid grid-cols-2 gap-6 justify-self-start md:justify-self-end">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9ca3af]">pages</p>
              <div className="space-y-1">
                <a href="#home" className="block hover:text-[#ffd08a]">
                  home
                </a>
                <a href="#about" className="block hover:text-[#ffd08a]">
                  about
                </a>
                <a href="#projects" className="block hover:text-[#ffd08a]">
                  projects
                </a>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9ca3af]">socials</p>
              <div className="space-y-1">
                <a
                  href="https://github.com/Divyansh0-05"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-[#ffd08a]"
                >
                  github
                </a>
                <a
                  href="https://www.linkedin.com/in/divyansh-singh-80325123a/"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-[#ffd08a]"
                >
                  linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 text-[clamp(3.2rem,11.8vw,14rem)] font-black lowercase leading-[0.82] tracking-[-0.05em] text-[#ece9e1]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          divyansh singh
        </div>

        <div className="mt-4 border-t border-white/10 pt-4 text-xs text-[#a3a3a3]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} divyansh singh. all rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  )
}
