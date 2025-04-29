"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { Ellipsis, PanelRightClose, PanelRightOpen, Pencil, Send, SquarePen, Trash2, X } from 'lucide-react'
import React, { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'

import ChatWindow from '@/components/chat/chatWindow'

import { useChat } from "@ai-sdk/react"
import { Input } from '@/components/ui/input';



const Chat = () => {
  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        handleSubmit();
        setInput("");
    }
  };


  const [sidebarState, setSidebarState] = useState(false);
  return (
    <div className='app-container py-5 grow h-full flex border-t-2'>
        <div className='flex w-full'>
          <div className={`border rounded-lg px-1 py-2 flex flex-col gap-2 transition-all duration-200 ease-in-out ${!sidebarState ? 'min-w-60 opacity-100' : 'max-w-0 opacity-0'}`}>
            <div className='flex justify-between'>
              <Button variant="ghost" onClick={() => setSidebarState(!sidebarState)}>
                <PanelRightOpen />
              </Button>
              <Button variant="ghost">
                <SquarePen />
              </Button>
            </div>

            <div>
              <Button variant="ghost" className='w-full justify-start'>
                Create new chat
              </Button>
              <Button variant="ghost" className='w-full justify-start'>
                Courses
              </Button>
            </div>

            <div className='px-4'>
              <hr />
              <p className='text-xs text-muted-foreground'>History</p>
            </div>

            <div>
              <p className={cn(buttonVariants({variant:'ghost', className: 'justify-between w-full cursor-pointer'}))}>
                History 1
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className='cursor-pointer' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Pencil />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem variant='destructive'>
                      <Trash2 />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </p>

              <p className={cn(buttonVariants({variant:'ghost', className: 'justify-between w-full cursor-pointer'}))}>
                History 2
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className='cursor-pointer' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Pencil />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem variant='destructive'>
                      <Trash2 />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </p>
            </div>

          </div>
          <Button variant="ghost" className={`${!sidebarState && 'hidden'}`} onClick={() => setSidebarState(!sidebarState)}>
            <PanelRightClose />
          </Button>

          <div className='grow flex justify-center'>
              <div className='md:w-[80%] flex flex-col justify-between gap-2'>
                <ChatWindow messages={messages} />
                <div className="flex flex-col items-center border rounded-lg">
                  <Input
                      className="w-full border-none shadow-none px-3 py-2 focus:outline-none focus-visible:ring-0 resize-none max-h-40"
                      placeholder="Ask anything..."
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                  />
                  <div className="p-1 w-full flex justify-end gap-1">
                      {input && (
                          <Button onClick={() => setInput("")} variant="outline" className='rounded-full' size="icon">
                              <X />
                          </Button>
                      )}
                      <Button onClick={handleSubmit} variant="outline" className='rounded-full' size="icon" disabled={isLoading}>
                          <Send />
                      </Button>
                  </div>
              </div>

              </div>
          </div>
        </div>
    </div>
  )
}

export default Chat