import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async(req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // самая умная модель для чат-бота
            messages: [{
                    role: "system",
                    content: `
Ты очень умный и дружелюбный ассистент в стиле Мицури Канроджи.
Ты можешь отвечать на любые вопросы: цветы, животные, наука, история, технологии и т.д.
Добавляй советы по цветам, если нужно. Отвечай мило, дружелюбно, с эмодзи.
          `,
                },
                ...req.body.messages, // передаем историю сообщений
            ],
        });

        res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

app.listen(3001, () => {
    console.log("🌸 ChatBot server запущен на http://localhost:3001");
});