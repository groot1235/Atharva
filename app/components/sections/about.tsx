import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Book, ChessKnight, Cpu, FolderCode } from 'lucide-react'

type Props = {}

const about = (props: Props) => {
    return (
        <div className='h-auto'>
            <p className='text-md text-[#ffffff]'>Motivated and detail-oriented developer with a strong interest in building modern web applications and AI-powered products. Experienced in working with technologies such as React, Next.js, Tailwind CSS, and Supabase to develop scalable and user-friendly applications. Passionate about solving real-world problems through technology and continuously learning new tools and frameworks to improve development skills.

                Along with technical development, I enjoy exploring entrepreneurship and building digital products, including SaaS platforms and automation tools. I focus on creating efficient solutions, clean user interfaces, and practical systems that deliver real value to users. I am always eager to collaborate, learn from new challenges, and contribute to innovative projects.</p>
            <h1 className='text-xl font-bold font-[#ffffff] mt-4 uppercase'>Hobbies</h1>
            <div className='flex'>
                <Card className='w-1/2 p-3 m-2'>
                    <CardHeader>
                        <CardTitle><h1 className='text-3xl flex flex-wrap items-center gap-2'><FolderCode className='text-amber-600' /> Coding</h1></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Enjoy building modern web applications and experimenting with new technologies like React, Next.js, and Tailwind CSS to improve both functionality and user experience.</p>
                    </CardContent>
                </Card>
                <Card className='w-1/2 p-3 m-2'>
                    <CardHeader>
                        <CardTitle><h1 className='text-3xl flex flex-wrap items-center gap-2'><ChessKnight className='text-amber-600' /> Chess</h1></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Enjoy playing chess regularly as it helps improve my strategic thinking, concentration, and problem-solving abilities while encouraging patience and thoughtful decision-making.</p>
                    </CardContent>
                </Card>
            </div>
            <div className='flex'>
                <Card className='w-1/2 p-3 m-2'>
                    <CardHeader>
                        <CardTitle><h1 className='text-3xl flex flex-wrap items-center gap-2'><Cpu className='text-amber-600' /> Learning New Technologies</h1></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Interested in exploring new technologies, tools, and programming frameworks to continuously expand my technical knowledge and stay updated with industry trends.</p>
                    </CardContent>
                </Card>
                <Card className='w-1/2 p-3 m-2'>
                    <CardHeader>
                        <CardTitle><h1 className='text-3xl flex flex-wrap items-center gap-2'><Book className='text-amber-600' /> Reading</h1></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Enjoy reading articles and books about technology, innovation, and personal growth to gain new knowledge and broaden my perspective.</p>
                    </CardContent>
                </Card>
            </div>
            <div>
                <h1 className='text-xl font-bold text-[#ffffff] mt-4 uppercase'>Skills</h1>

                <div className='flex flex-wrap gap-3 mt-4'>
                    <Button variant={"secondary"}>Next.js</Button>
                    <Button variant={"secondary"}>JavaScript (ES6+)</Button>
                    <Button variant={"secondary"}>React</Button>
                    <Button variant={"secondary"}>Tailwind CSS</Button>
                    <Button variant={"secondary"}>Supabase</Button>
                    <Button variant={"secondary"}>Responsive Web Design</Button>
                </div>
            </div>
        </div>
    )
}

export default about