import OpenAI from "openai";

export async function POST(req) {
    try {
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        const body = await req.json();
        const userMessage = body.message;

        const completion = await client.responses.create({
            model: "gpt-4o-mini",
            input: [
                { role: "system", content: "You are a romantic, friendly AI girlfriend." },
                { role: "user", content: userMessage }
            ]
        });

        return new Response(JSON.stringify({
            reply: completion.output_text
        }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
