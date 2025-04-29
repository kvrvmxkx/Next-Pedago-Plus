"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { Ellipsis, PanelRightClose, PanelRightOpen, Pencil, SquarePen, Trash2 } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
import ChatInput from '@/components/chat/chatInput';

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';



type MessageRole = "user" | "model";

interface MessagePart {
    text: string;
  }

interface Message {
    role: MessageRole;
    parts: MessagePart[];
  }

type ChatHistory = Array<Message>;


const Chat = () => {
  const [history, setHistory] = useState<ChatHistory>([]);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false)


  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    const newUserUserMessage: Message = {
      role: "user",
      parts: [{text: prompt}]
    };

    const upatedHistory = [...history, newUserUserMessage];
    setHistory(upatedHistory);

    try {
      let st = "";
      const response = await fetch('api/agent', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          history: history
        })
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) return;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setOutput((prev) => prev + chunk);
        st += chunk;
        console.log("not ended", chunk);
      }
      console.log("ended st", st);
      console.log("ended o", output);

      const aiMessage: Message = {
        role: "model",
        parts:[{text: st}]
      };

      console.log("aiMessage", aiMessage);

      setHistory([...upatedHistory, aiMessage]);
      setLoading(false);


      // const data = await response.json();

      // if(data.error) {
      //   console.error("AI Error", data.error);
      // };

      // const aiMessage: Message = {
      //   role: "model",
      //   parts:[{text: data.response}]
      // };

      // setHistory([...upatedHistory, aiMessage]);
    } catch (error) {
      console.log(error);
    }
  }

  const [sidebarState, setSidebarState] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current!.scrollIntoView({behavior: "smooth"});
  },[history, output])
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
                <div className='grow h-px overflow-auto flex flex-col gap-6 border rounded-lg p-2 text-sm'>
                  {history.map((message, i) => {
                    const isUser = message.role === "user";

                    return (
                      <div key={i} className={`${isUser ? "bg-gray-200 self-end max-w-[80%] py-2 px-5 rounded-full" : "flex"}`}>
                        {message.parts.map((part, idx) => (
                          <span key={idx}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {part.text}
                            </ReactMarkdown>
                          </span>
                        ))}
                      </div>
                    )
                  })}
                  {loading && <ReactMarkdown remarkPlugins={[remarkGfm]}>{output}</ReactMarkdown>}
                  {/* <pre className="whitespace-pre-wrap mt-4">{output}</pre> */}
                  <div ref={endRef}/>
                </div>
                <ChatInput onSend={handleGenerate} />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Chat