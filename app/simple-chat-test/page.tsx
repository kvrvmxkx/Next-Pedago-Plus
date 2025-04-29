"use client"

import { useChat } from "@ai-sdk/react"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Loader2, Send } from "lucide-react"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Card className="w-full max-w-3xl h-[80vh] flex flex-col">
        <CardHeader>
          <CardTitle className="text-center">Chat with Google Generative AI</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto">
          <div className="space-y-4 pb-4">
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
        </CardContent>

        <CardFooter className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
