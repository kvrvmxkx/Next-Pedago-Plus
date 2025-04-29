import { GoogleGenAI } from "@google/genai";


let ai: GoogleGenAI | null = null;

export function getAI() {
  if (!ai) {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      throw new Error("Missing GOOGLE_GENAI_API_KEY in environment variables");
    }
    ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY});
  }
  return ai;
}
