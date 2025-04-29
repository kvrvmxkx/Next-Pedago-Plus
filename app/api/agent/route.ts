import { streamText } from 'ai';
import { getAI } from '@/lib/ai';
import { NextResponse } from 'next/server';
import { google } from "@ai-sdk/google";
 

export async function POST(request: Request) {
    const ai = getAI();


    try {
        const {prompt, history} = await request.json()

        const chat = ai.chats.create({
            model: "gemini-2.0-flash",
            history: history
        });

        // const aiResponse = await chat.sendMessage({message: prompt})
        // return NextResponse.json({response: aiResponse});

        const aiResponseStream = await chat.sendMessageStream({message: prompt})

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
            for await (const chunk of aiResponseStream) {
                const text = chunk.text;
                controller.enqueue(encoder.encode(text));
            }
            controller.close();
            }
        });

        return new NextResponse(stream, {
            headers: {
            "Content-Type": "text/plain; charset=utf-8",
            },
        });

        //console.log("no Stream",aiResponse);
        // console.log("Stream",aiResponseStream);
        // for await (const chunk of aiResponseStream) {
        //     console.log(chunk.text);
        // }

        //const stream = createStreamableValue();

        // (async () => {
        //     const { textStream } = await streamText({
        //         model: google("gemini-2.0-flash-001"),
        //         messages: history,
        //         system: prompt
        //     });

        //     for await (const text of textStream) {
        //         stream.update(text);
        //     }

        //     stream.done();

        // })();

        const { textStream } = streamText({
            model: google("gemini-2.0-flash-001"),
//            messages: history,
            prompt: prompt
        });

        for await (const textPart of textStream) {
            process.stdout.write(textPart);
        }


        // const result = streamText({
        //     model: google("gemini-2.0-flash-001"),
        //     prompt: prompt,
        // });

        // return result.toDataStreamResponse();

        // for await (const textPart of textStream) {
        //     process.stdout.write(textPart);
        // }

        //console.log(text);


        //return NextResponse.json({response: text});
        //return NextResponse.json({response: "Test"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "AI Agent error"});
    }

}