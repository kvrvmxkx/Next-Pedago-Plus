"use client"

import { UIMessage } from 'ai';
import React, { useEffect, useRef } from 'react'

const ChatWindow = ({messages}: {messages: UIMessage[]}) => {


    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when messages change
    useEffect(() => {
    if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    }, [messages])

    return (
        <div className='grow h-px overflow-auto flex flex-col gap-6 border rounded-lg p-2 text-sm'>
            {messages.length === 0 ? (
            <div className="text-center text-gray-400 my-8">Start a conversation by sending a message below</div>
            ) : (
            messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`rounded-lg px-4 py-2 ${message.role === "user" ? "bg-muted" : "bg-transparent"}`}>
                        <div className="whitespace-pre-wrap">{message.content}</div>
                    </div>
                </div>
            ))
            )}
            <div ref={messagesEndRef} />
        </div>
  )
}

export default ChatWindow