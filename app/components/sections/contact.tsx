"use client"
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import { sendContactEmail } from '@/app/actions/email'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      toast.error("Please fill in all fields")
      return
    }
    
    setLoading(true)
    const toastId = toast.loading("Sending message...")
    
    try {
      const res = await sendContactEmail({ name, email, message })
      if (res.success) {
        toast.success("Message sent successfully!", { id: toastId })
        setName("")
        setEmail("")
        setMessage("")
      } else {
        toast.error(res.error || "Failed to send message. Please try again.", { id: toastId })
      }
    } catch (err: any) {
      toast.error("An unexpected error occurred. Please try again.", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full py-8 border-0 select-none" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-0">
        
        {/* Contact Info Header */}
        <div className="lg:col-span-4 flex flex-col justify-center border-0 text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm md:text-base leading-relaxed border-0">
            Have a project idea, want to collaborate, or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
          </p>
          <div className="mt-6 flex flex-col gap-2 border-0 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2 border-0">
              <span className="text-[#a16207] dark:text-yellow-400">Email:</span>
              <a href="mailto:Atharvaludbe2@gmail.com" className="hover:text-black dark:hover:text-white transition-colors duration-150">
                Atharvaludbe2@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 border-0">
              <span className="text-[#a16207] dark:text-yellow-400">Phone:</span>
              <a href="tel:+918692829055" className="hover:text-black dark:hover:text-white transition-colors duration-150">
                +91 8692829055
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <form onSubmit={handleSend} className="lg:col-span-8 bg-zinc-50/30 dark:bg-zinc-900/30 p-6 sm:p-8 rounded-[32px] border-0 flex flex-col gap-6 w-full text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-0">
            <div className="flex flex-col gap-1 border-0">
              <label htmlFor="name" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                disabled={loading}
                className="w-full bg-zinc-50 hover:bg-zinc-100/70 focus:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800/70 dark:focus:bg-zinc-950 text-sm text-zinc-900 dark:text-white px-5 py-4 rounded-2xl outline-none transition-all duration-200 border border-zinc-100 dark:border-zinc-800 focus:border-zinc-300 dark:focus:border-zinc-700 disabled:opacity-50"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col gap-1 border-0">
              <label htmlFor="email" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                disabled={loading}
                className="w-full bg-zinc-50 hover:bg-zinc-100/70 focus:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800/70 dark:focus:bg-zinc-950 text-sm text-zinc-900 dark:text-white px-5 py-4 rounded-2xl outline-none transition-all duration-200 border border-zinc-100 dark:border-zinc-800 focus:border-zinc-300 dark:focus:border-zinc-700 disabled:opacity-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 border-0">
            <label htmlFor="message" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="What would you like to discuss?"
              rows={5}
              disabled={loading}
              className="w-full bg-zinc-50 hover:bg-zinc-100/70 focus:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800/70 dark:focus:bg-zinc-950 text-sm text-zinc-900 dark:text-white px-5 py-4 rounded-2xl outline-none resize-none transition-all duration-200 border border-zinc-100 dark:border-zinc-800 focus:border-zinc-300 dark:focus:border-zinc-700 disabled:opacity-50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-end border-0">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-black hover:bg-zinc-900 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-black font-bold px-6 py-4 rounded-full border border-black dark:border-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}