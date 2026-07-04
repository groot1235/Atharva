"use client"
import React from 'react'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Blockly Redesign Project",
    description: "Redesigned Google Blockly's user interface, focusing on beginner accessibility, clear workspace hierarchy, and responsive workspace navigation.",

    src: "/blockly.png",
    web: "https://blockly-kigq.vercel.app"
  },
  {
    id: 2,
    title: "Inte Interiors Portfolio",
    description: "A premium interior design portfolio showcasing high-end visual galleries, elegant transitions, and a conversion-optimized consultation pipeline.",
    src: "/inte.png",
    web: "https://inte-fawn.vercel.app"
  },
  {
    id: 3,
    title: "Aura Skincare Brand",
    description: "A clean, modern e-commerce skincare brand web experience focused on storytelling layouts, product education, and rich animations.",
    src: "/aura.png",
    web: "https://aura-nu-cyan.vercel.app"
  },
  {
    id: 4,
    title: "Centroid Agency",
    description: "A modern creative growth agency website focused on premium branding, conversion-driven design, and scalable digital experiences for modern internet businesses.",

    src: "/centroid.png",
    web: "https://centroid-8knz.vercel.app/"
  },
  {
    id: 5,
    title: "Dental",
    description: "A modern dental clinic website designed to deliver a clean, trustworthy, and patient-friendly digital experience, featuring online appointment booking, treatment showcases, and responsive healthcare-focused design.",

    src: "/dentists.png",
    web: "https://dentists-navy.vercel.app"
  },
  {
    id: 6,
    title: "Pilates Project",
    description: "A modern pilates studio website focused on wellness, minimal design, and seamless class booking experiences, featuring responsive layouts, membership sections, and conversion-focused user interactions.",

    src: "/pilates.png",
    web: "https://pilates-brown-kappa.vercel.app"
  }
]

export function Projects() {
  return (
    <div className="w-full py-8 border-0 select-none">
      <div className="text-left mb-12 border-0">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Projects
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-base md:text-lg max-w-2xl">
          A showcase of deliberate engineering, thoughtful design, and precise execution.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-0">
        {projects.map((proj) => (
          <a
            key={proj.id}
            href={proj.web}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 group bg-transparent border-0 cursor-pointer text-left"
          >
            {/* Chamfered Image Container */}
            <div
              className="w-full aspect-[16/10] relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 transition-all duration-300 group-hover:shadow-md"
              style={{
                clipPath: 'polygon(12% 0px, 100% 0px, 100% 88%, 88% 100%, 0px 100%, 0px 12%)'
              }}
            >
              <Image
                src={proj.src}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 33vw"
              />
            </div>

            {/* Title & Link Icon */}
            <div className="flex items-center justify-between mt-2 border-0">
              <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-200">
                {proj.title}
              </h3>
              <ExternalLink size={16} className="text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 ml-2" />
            </div>

            {/* Description */}
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed border-0 flex-1">
              {proj.description}
            </p>

            {/* Metadata (Location & Date) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 border-0 mt-1">

            </div>
          </a>
        ))}
      </div>
    </div>
  )
}