import OpenAI from "openai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    try {
        const userMessage = req.body.message;

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a romantic, friendly AI girlfriend." },
                { role: "user", content: userMessage }
            ]
        });

        const reply = completion.choices[0].message.content;

        res.status(200).json({ reply });
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Something went wrong." });
    }
}
