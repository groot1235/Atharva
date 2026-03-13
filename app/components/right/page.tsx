"use client"
import React, { useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Menu } from 'lucide-react'
import About from '../sections/about'
import { Projects } from '../sections/projects'
import { Blogs } from '../sections/blogs'
import Contact from '../sections/contact'

type Props = {}

const Page = (props: Props) => {

    const [active, setActive] = useState("About")
    const [menuOpen, setMenuOpen] = useState(false)

    const renderContent = () => {
        switch (active) {
            case "About":
                return <About />

            case "Projects":
                return <Projects />

            case "Blogs":
                return <Blogs />

            case "Contact":
                return <Contact />

            default:
                return null
        }
    }

    return (
        <div>
            <div className='bg-[#1f1f1f] m-6 p-4 rounded-xl w-full'>

                {/* Header */}
                <div className="flex items-center justify-between">

                    <h1 className='text-xl font-bold'>{active}</h1>

                    {/* Burger button (mobile) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden border border-[#5c5c5c] p-2 rounded-md"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Desktop nav */}
                    <nav className="bg-[#292729] rounded-xl p-2 hidden md:block">
                        <div className="flex items-center gap-4">

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => setActive("About")}
                            >
                                About
                            </button>

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => setActive("Projects")}
                            >
                                Projects
                            </button>

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => setActive("Blogs")}
                            >
                                Blogs
                            </button>

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => setActive("Contact")}
                            >
                                Contact
                            </button>

                        </div>
                    </nav>

                </div>

                {/* Mobile nav menu */}
                {menuOpen && (
                    <nav className="bg-[#292729] rounded-xl p-3 mt-3 md:hidden">
                        <div className="flex flex-col gap-2">

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => {
                                    setActive("About")
                                    setMenuOpen(false)
                                }}
                            >
                                About
                            </button>

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => {
                                    setActive("Projects")
                                    setMenuOpen(false)
                                }}
                            >
                                Projects
                            </button>

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => {
                                    setActive("Blogs")
                                    setMenuOpen(false)
                                }}
                            >
                                Blogs
                            </button>

                            <button
                                className={buttonVariants({ variant: "ghost" })}
                                onClick={() => {
                                    setActive("Contact")
                                    setMenuOpen(false)
                                }}
                            >
                                Contact
                            </button>

                        </div>
                    </nav>
                )}

                <Separator className='m-2 bg-amber-600' />

                <div className="mt-4">
                    {renderContent()}
                </div>

            </div>
        </div>
    )
}

export default Page