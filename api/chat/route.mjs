import OpenAI from "openai";

export async function POST(req) {
    try {
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        const body = await req.json();
        const userMessage = body.message;

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a romantic, friendly AI girlfriend." },
                { role: "user", content: userMessage }
            ]
        });

        return new Response(JSON.stringify({
            reply: completion.choices[0].message.content
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        console.error("API Error:", err);
        return new Response(JSON.stringify({
            error: "Server error",
            details: err.message
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
