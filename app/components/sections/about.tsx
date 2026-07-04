"use client"
import React from 'react'
import { Book, ChessKnight, Cpu, FolderCode } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full py-8 border-0 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-0">
        
        {/* Biography Block */}
        <div className="lg:col-span-5 flex flex-col justify-center border-0">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm md:text-base leading-relaxed text-justify border-0">
            Motivated and detail-oriented developer with a strong interest in building modern web applications and AI-powered products. Experienced in working with technologies such as React, Next.js, Tailwind CSS, and Supabase to develop scalable and user-friendly applications.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm md:text-base leading-relaxed text-justify border-0">
            Along with technical development, I enjoy exploring entrepreneurship and building digital products, including SaaS platforms and automation tools. I focus on creating efficient solutions, clean user interfaces, and practical systems that deliver real value to users.
          </p>
          
          <div className="mt-8 border-0">
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-zinc-400 mb-3.5">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2 border-0">
              {["Next.js", "React", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "Node.js", "Supabase", "System Design"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-zinc-50 hover:bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 font-semibold px-4 py-2 rounded-full text-xs transition-colors duration-200 border border-zinc-100 dark:border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center border-0">
          <h3 className="text-xs uppercase tracking-wider font-extrabold text-zinc-400 mb-6 block lg:hidden">
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-0">
            {/* Coding */}
            <div className="p-6 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 rounded-3xl transition-all duration-300 border-0 flex flex-col gap-3">
              <div className="flex items-center gap-3 border-0">
                <div className="bg-[#facc15]/20 dark:bg-yellow-500/10 p-2.5 rounded-2xl text-[#a16207] dark:text-yellow-400 border-0">
                  <FolderCode size={20} />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-base">Coding</h4>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0">
                Enjoy building modern web applications and experimenting with new technologies like React, Next.js, and Tailwind CSS.
              </p>
            </div>

            {/* Chess */}
            <div className="p-6 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 rounded-3xl transition-all duration-300 border-0 flex flex-col gap-3">
              <div className="flex items-center gap-3 border-0">
                <div className="bg-[#facc15]/20 dark:bg-yellow-500/10 p-2.5 rounded-2xl text-[#a16207] dark:text-yellow-400 border-0">
                  <ChessKnight size={20} />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-base">Chess</h4>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0">
                Enjoy playing chess regularly as it helps improve my strategic thinking, concentration, and problem-solving abilities.
              </p>
            </div>

            {/* Tech Learning */}
            <div className="p-6 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 rounded-3xl transition-all duration-300 border-0 flex flex-col gap-3">
              <div className="flex items-center gap-3 border-0">
                <div className="bg-[#facc15]/20 dark:bg-yellow-500/10 p-2.5 rounded-2xl text-[#a16207] dark:text-yellow-400 border-0">
                  <Cpu size={20} />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-base">New Tech</h4>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0">
                Interested in exploring new technologies, tools, and programming frameworks to expand technical knowledge.
              </p>
            </div>

            {/* Reading */}
            <div className="p-6 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60 rounded-3xl transition-all duration-300 border-0 flex flex-col gap-3">
              <div className="flex items-center gap-3 border-0">
                <div className="bg-[#facc15]/20 dark:bg-yellow-500/10 p-2.5 rounded-2xl text-[#a16207] dark:text-yellow-400 border-0">
                  <Book size={20} />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-base">Reading</h4>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed border-0">
                Enjoy reading articles and books about technology, innovation, and personal growth to broaden my perspective.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}