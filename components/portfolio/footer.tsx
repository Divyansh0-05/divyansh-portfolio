"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-[#eef0f3] py-12 text-slate-900 backdrop-blur-3xl">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center text-sm font-light text-slate-600">
          <div className="flex space-x-6">
            <a
              href="https://github.com/Divyansh0-05"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-full border border-slate-300 p-3 text-slate-700 transition-all hover:scale-110 hover:bg-slate-900 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <div className="absolute inset-0 rounded-full bg-slate-900 opacity-0 blur-[10px] transition-opacity group-hover:opacity-15" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-singh-80325123a/"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-full border border-slate-300 p-3 text-slate-700 transition-all hover:scale-110 hover:bg-slate-900 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <div className="absolute inset-0 rounded-full bg-slate-900 opacity-0 blur-[10px] transition-opacity group-hover:opacity-15" />
            </a>
            <a
              href="mailto:divyansh.singh9600@gmail.com"
              className="group relative rounded-full border border-slate-300 p-3 text-slate-700 transition-all hover:scale-110 hover:bg-slate-900 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <div className="absolute inset-0 rounded-full bg-slate-900 opacity-0 blur-[10px] transition-opacity group-hover:opacity-15" />
            </a>
          </div>

          <div className="mt-8">
            <p className="font-heading text-xs uppercase tracking-widest">
              &copy; {new Date().getFullYear()} DIVYANSH SINGH. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
