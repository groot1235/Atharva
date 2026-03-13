"use client"

import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {

    return (
        <div>

            {/* ---------- MOBILE / TABLET NAVBAR ---------- */}
            <div className="lg:hidden bg-[#1f1f1f] p-4 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <Image
                        src="/mewtwo.png"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />

                    <div>
                        <h1 className="font-bold text-sm">Atharva Ludbe</h1>
                        <p className="text-xs text-gray-400">Coding since 2020</p>
                    </div>
                </div>

                <div className="flex gap-2">

                    <Link
                        href="mailto:Atharvaludbe2@gmail.com"
                        className="border border-[#5c5c5c] p-2 rounded-md"
                    >
                        <Mail size={18} />
                    </Link>

                    <Link
                        href="https://github.com/groot1235"
                        target="_blank"
                        className="border border-[#5c5c5c] p-2 rounded-md"
                    >
                        <Github size={18} />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/atharva-ludbe"
                        target="_blank"
                        className="border border-[#5c5c5c] p-2 rounded-md"
                    >
                        <Linkedin size={18} />
                    </Link>

                </div>

            </div>


            {/* ---------- DESKTOP SIDEBAR ---------- */}
            <div className='hidden lg:block bg-[#1f1f1f] m-6 p-4 rounded-xl'>

                <div>

                    <div className='bg-[#383533] m-4 p-2 flex justify-center items-center rounded-3xl'>
                        <Image src="/mewtwo.png" alt="Profile" width={150} height={150} />
                    </div>

                    <div className='flex items-center justify-center'>
                        <h1 className='text-xl font-bold'>Atharva Ludbe</h1>
                    </div>

                    <div className='bg-[#383533] m-4 w-fit mx-auto p-1 rounded-md'>
                        Coding since 2020
                    </div>

                </div>

                <Separator />

                <div className='my-6 mx-2 xl:m-8'>

                    {/* Email */}
                    <div className='flex items-center gap-3'>
                        <div className='border border-[#5c5c5c] p-2 rounded-md shrink-0 flex items-center justify-center'>
                            <Mail size={18} />
                        </div>

                        <div className='overflow-hidden'>
                            <p className='text-xs text-[#9c9c9c] uppercase'>Email</p>
                            <p className='text-sm truncate' title='Atharvaludbe2@gmail.com'>Atharvaludbe2@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className='flex items-center gap-3 mt-4'>
                        <div className='border border-[#5c5c5c] p-2 rounded-md shrink-0 flex items-center justify-center'>
                            <Smartphone size={18} />
                        </div>

                        <div className='overflow-hidden'>
                            <p className='text-xs text-[#9c9c9c] uppercase'>Phone</p>
                            <p className='text-sm truncate' title='+91 8692829055'>+91 8692829055</p>
                        </div>
                    </div>

                </div>

                <Separator />

                {/* Social Buttons */}
                <div className='m-8 flex flex-col gap-3'>

                    <Link
                        href="https://github.com/groot1235"
                        target='_blank'
                        className={`${buttonVariants({ variant: "secondary" })} flex items-center justify-center gap-2`}
                    >
                        <Github size={18} /> GitHub
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/atharva-ludbe"
                        target='_blank'
                        className={`${buttonVariants({ variant: "secondary" })} flex items-center justify-center gap-2`}
                    >
                        <Linkedin size={18} /> LinkedIn
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default page