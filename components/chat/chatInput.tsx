"use client";
import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ChatInputProps {
  handleSubmit: (message: string) => void
}

export default function ChatInput({ handleSubmit }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      handleSubmit(message.trim());
      handleClear();
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
        handleSend();
        handleClear();
    }
  };

  const handleClear = () => {
    const emptyString = "";
    setMessage(emptyString.trim());
  };

  return (
    <div className="flex flex-col items-center border rounded-lg">
        <Textarea
            className="w-full border-none shadow-none px-3 py-2 focus:outline-none focus-visible:ring-0 resize-none max-h-40"
            placeholder="Ask anything..."
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
        <div className="p-1 w-full flex justify-end gap-1">
            {message && (
                <Button onClick={handleClear} variant="outline" className='rounded-full' size="icon">
                    <X />
                </Button>
            )}
            <Button onClick={handleSend} variant="outline" className='rounded-full' size="icon">
                <Send />
            </Button>
        </div>
    </div>
  );
}