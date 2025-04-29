import { streamText } from "ai"
import { google } from "@ai-sdk/google"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Create a streaming text response using Google's Gemini model
    const result = streamText({
      model: google("gemini-1.5-pro"),
      messages, // Pass the entire message history for context
    })

    // Return the streaming response
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat route:", error)
    return new Response(JSON.stringify({ error: "Failed to generate chat response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
