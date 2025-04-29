"use client"

import { UIMessage } from 'ai';
import React, { useEffect, useRef } from 'react'
import { Avatar } from '../ui/avatar';

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
                    <div className="flex items-start gap-2 max-w-[80%]">
                        {message.role !== "user" && (
                        <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                            <span className="text-xs">AI</span>
                        </Avatar>
                        )}

                        <div
                        className={`rounded-lg px-4 py-2 ${
                            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                        >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        </div>

                        {message.role === "user" && (
                        <Avatar className="h-8 w-8 bg-secondary text-secondary-foreground">
                            <span className="text-xs">You</span>
                        </Avatar>
                        )}
                    </div>
                </div>
            ))
            )}
            <div ref={messagesEndRef} />
        </div>
  )
}

export default ChatWindow