"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { toast, Toaster } from 'sonner'


type Props = {}

const Contact = (props: Props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSend = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>Connect with me</h1>

                <div className='flex flex-col gap-10 mt-3'>
                    <div className='flex gap-7'>
                        <Input
                            type="text"
                            placeholder='Name'
                            className='p-6 rounded-lg'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            type="email"
                            placeholder='Email'
                            className='p-6 rounded-lg'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <Input
                        type="text"
                        placeholder='Message'
                        className='h-40 p-6 rounded-lg'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <Button
                    onClick={() => {
                        handleSend()
                        toast.success("Message sent successfully")
                    }}
                    className='border bg-accent border-amber-600 text-white px-6 py-6 rounded-lg mt-3 flex items-center justify-end gap-2'
                >
                    <Send />Send
                </Button>
            </div>
            <Toaster />
        </div>
    )
}

export default Contact