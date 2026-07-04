"use client"
import React from 'react'
import BentoGrid from './BentoGrid'

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center text-center py-10 select-none border-0 relative" id="home">
      {/* Subtle Background Glow Mesh */}
      <div className="absolute top-1/4 left-[35%] -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] bg-gradient-to-tr from-yellow-400/25 via-amber-300/10 to-transparent dark:from-yellow-400/10 dark:via-amber-500/3 dark:to-transparent rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-[65%] -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[480px] h-[250px] sm:h-[480px] bg-gradient-to-tr from-purple-400/20 via-pink-300/8 to-transparent dark:from-purple-500/8 dark:via-pink-500/2 dark:to-transparent rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -z-10" />

      {/* Badge */}
      <div className="flex items-center gap-2.5 bg-transparent border-0 mb-6">
        <span className="bg-[#facc15] dark:bg-[#eab308] text-black font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm tracking-wide">
          developing
        </span>
        <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-sm">
          Something new
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl border-0">
        Where Creativity <br className="hidden md:inline" />
        <span className="text-zinc-900 dark:text-zinc-200">Meets Functionality</span>
      </h1>

      {/* Subtitle */}
      <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-2xl mt-6 leading-relaxed border-0">
        I design and develop modern, user-focused websites that not only
        look stunning but also deliver real business results.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-8 mb-12 border-0">
        <a
          href="#contact"
          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-100 font-bold px-7 py-4 rounded-full border border-black dark:border-white shadow-lg transition-all duration-200"
        >
          Let's Talk
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a
          href="#projects"
          className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold px-7 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-200"
        >
          Projects
        </a>
      </div>

      {/* Bento Grid Info Dashboard */}
      <BentoGrid />
    </div>
  )
}
