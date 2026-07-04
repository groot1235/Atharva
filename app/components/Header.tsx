"use client"
import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="relative w-full py-6 flex items-center justify-between z-50 bg-transparent border-0 select-none">
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <div className="bg-[#facc15] dark:bg-[#eab308] text-black font-bold p-2.5 rounded-xl flex items-center justify-center border-0 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
          Atharva<span className="font-medium text-zinc-500 dark:text-zinc-400">Ludbe</span>
        </span>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center gap-8 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md px-6 py-2.5 rounded-full border-0 shadow-sm md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
        <a href="#home" className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors duration-200">
          Home
        </a>
        <a href="#projects" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200">
          Projects
        </a>
        <a href="#contact" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200">
          Contact
        </a>
      </nav>

      {/* Right Mode Toggle */}
      <div className="flex items-center">
        {mounted ? (
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Theme"
            className="flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white p-3 rounded-2xl border-0 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
          >
            {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        ) : (
          <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-2xl" />
        )}
      </div>
    </header>
  )
}
