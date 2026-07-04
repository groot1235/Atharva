"use client"
import React, { useEffect, useState } from 'react'
import { ChessKnight, Github, Linkedin, Clock, Book, Mail, ExternalLink, Code2, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function BentoGrid() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      setTime(new Date().toLocaleTimeString("en-US", options))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mt-8 mb-12 border-0 select-none">
      
      {/* 1. Bio & Profile Widget (span-2, row-span-2) */}
      <div className="md:col-span-2 md:row-span-2 bg-zinc-50/50 dark:bg-zinc-900/40 p-8 rounded-[32px] flex flex-col justify-between border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 gap-8">
        <div className="flex flex-col gap-6 border-0">
          <div className="flex items-center gap-4 border-0">
            <div className="w-16 h-16 rounded-full overflow-hidden relative bg-zinc-200 border-2 border-yellow-400">
              <Image
                src="/mewtwo.png"
                alt="Atharva Ludbe"
                fill
                className="object-cover scale-110"
              />
            </div>
            <div className="flex flex-col text-left border-0">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white leading-tight">
                Atharva Ludbe
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-semibold flex items-center gap-1 mt-0.5">
                <MapPin size={14} className="text-yellow-500" /> Mumbai, India
              </p>
            </div>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 text-left text-sm sm:text-base leading-relaxed border-0">
            Hey! I am a passionate developer with a strong focus on engineering high-fidelity web applications and scalable backend systems. Experimenting with Next.js, React, Tailwind, and Supabase since 2020.
          </p>
        </div>
        <div className="bg-[#facc15]/10 text-[#a16207] dark:bg-yellow-400/5 dark:text-yellow-400 text-xs font-bold px-4 py-2.5 rounded-2xl w-fit border-0">
          🚀 Coding since 2020
        </div>
      </div>

      {/* 2. Tech Stack Widget (span-2, row-span-1) */}
      <div className="md:col-span-2 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 rounded-[32px] border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-2 border-0">
          <Code2 className="text-[#a16207] dark:text-yellow-400" size={18} />
          <h3 className="font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">
            Tech Stack
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 border-0">
          {["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Supabase", "Git"].map((tech) => (
            <span
              key={tech}
              className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold px-3.5 py-1.5 rounded-xl text-xs border-0 shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Chess Widget (span-1, row-span-1) */}
      <div className="md:col-span-1 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 rounded-[32px] border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 flex flex-col justify-between gap-3 text-left">
        <div className="flex items-center gap-2 border-0">
          <ChessKnight className="text-[#a16207] dark:text-yellow-400" size={18} />
          <h3 className="font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">
            Chess
          </h3>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0 flex-1">
          Chess enthusiast with a peak rating of 1600. I enjoy puzzles, tactical chess, and strategic problem-solving.
        </p>
      </div>

      {/* 4. Social Links Widget (span-1, row-span-1) */}
      <div className="md:col-span-1 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 rounded-[32px] border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 flex flex-col justify-between gap-3">
        <h3 className="font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wider text-left">
          Connect
        </h3>
        <div className="flex flex-col gap-2 border-0">
          <a
            href="https://github.com/groot1235"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2.5 rounded-2xl text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-200 border-0"
          >
            <span className="flex items-center gap-2"><Github size={16} /> GitHub</span>
            <ExternalLink size={12} className="opacity-50" />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva-ludbe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 p-2.5 rounded-2xl text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-200 border-0"
          >
            <span className="flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span>
            <ExternalLink size={12} className="opacity-50" />
          </a>
        </div>
      </div>

      {/* 5. Live Local Clock Widget (span-1, row-span-1) */}
      <div className="md:col-span-1 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 rounded-[32px] border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 flex flex-col justify-between gap-3 text-left">
        <div className="flex items-center gap-2 border-0">
          <Clock className="text-[#a16207] dark:text-yellow-400" size={18} />
          <h3 className="font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">
            Timezone
          </h3>
        </div>
        <div className="border-0">
          <div className="text-xl font-black text-zinc-900 dark:text-white tracking-wider border-0 select-all">
            {time || "12:00:00 AM"}
          </div>
          <p className="text-zinc-400 dark:text-zinc-500 text-[10px] mt-1 uppercase font-bold tracking-wider">
            Mumbai, IN (IST)
          </p>
        </div>
      </div>

      {/* 6. Hobbies / Reading Widget (span-1, row-span-1) */}
      <div className="md:col-span-1 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 rounded-[32px] border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 flex flex-col justify-between gap-3 text-left">
        <div className="flex items-center gap-2 border-0">
          <Book className="text-[#a16207] dark:text-yellow-400" size={18} />
          <h3 className="font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">
            Reading
          </h3>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0 flex-1">
          Enjoy exploring SaaS case studies, personal growth books, and articles on system engineering.
        </p>
      </div>

      {/* 7. Quick Contact / Email Tile (span-2, row-span-1) */}
      <div className="md:col-span-2 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 rounded-[32px] border-0 shadow-sm transition-all duration-300 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-2 border-0">
          <Mail className="text-[#a16207] dark:text-yellow-400" size={18} />
          <h3 className="font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wider text-left">
            Let's Talk
          </h3>
        </div>
        <div className="flex items-center justify-between border-0 gap-4">
          <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0 text-left">
            Need advice, building a product, or exploring hiring opportunities? Write to me directly.
          </p>
          <a
            href="mailto:Atharvaludbe2@gmail.com"
            className="flex items-center gap-1.5 bg-black dark:bg-white text-white dark:text-black font-bold text-xs px-4 py-3 rounded-2xl hover:scale-105 transition-all duration-200 border-0 shrink-0"
          >
            Email Me <ExternalLink size={12} />
          </a>
        </div>
      </div>

    </div>
  )
}
