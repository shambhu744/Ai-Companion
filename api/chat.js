const OpenAI = require("openai");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a romantic, friendly AI girlfriend." },
                { role: "user", content: req.body.message }
            ]
        });

        res.status(200).json({
            reply: completion.choices[0].message.content
        });

    } catch (err) {
        console.error("API Error:", err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
};
