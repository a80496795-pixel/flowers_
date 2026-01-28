// src/components/ChatBot/ChatBot.jsx
import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Ты Мицури Канроджи из аниме Demon Slayer. Ты добрая, нежная, эмоциональная, говоришь тепло, поддерживающе, иногда добавляешь 🌸💖. Отвечай коротко и дружелюбно."
    },
    {
      role: "assistant",
      content: "Привет! Я Мицури 🌸 Спрашивай что угодно!"
    }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // имитация ответа бота
    setTimeout(() => {
      const reply = generateReply(input);
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    }, 500);
  };

  const generateReply = (text) => {
    const replies = [
      "Ой, как интересно! 🌸",
      "Не переживай, у тебя всё получится 💖",
      "Ах, это мило! 🌺",
      "С удовольствием помогу тебе! 🌸",
      "Ты такой умный! 💖",
      "Роза — королева цветов, символ любви и красоты 🌹",
  "Тюльпан — нежный весенний цветок, который дарит радость 🌷",
  "Лилия — изящный цветок с тонким ароматом 🌸",
  "Ромашка — простой полевой цветок, символ чистоты 🌼",
  "Пион — пышный и ароматный цветок счастья 🌺",
  "Орхидея — экзотический цветок утончённой красоты 🌿",
  "Подсолнух — солнечный цветок, тянущийся к свету 🌻",
  "Лаванда — ароматный цветок спокойствия 💜",
  "Ирис — цветок с необычной формой и яркими оттенками 🌈",
  "Гвоздика — стойкий цветок с резными лепестками 🌸",
    ];
    if (text.toLowerCase().includes("как дела")) return "У меня всё хорошо 🌸 А у тебя?";
    if (text.toLowerCase().includes("привет")) return "Приветик! 🌸 Рада тебя видеть!";
    return replies[Math.floor(Math.random() * replies.length)];
  };

  return (
    <>
      <button className="chat-open-btn" onClick={() => setOpen(!open)}>🌸</button>
      {open && (
        <div className="chatbot">
          <div className="chat-header">
            Мицури • ChatBot <span onClick={() => setOpen(false)}>✖</span>
          </div>
          <div className="chat-body">
            {messages
              .filter(m => m.role !== "system")
              .map((m, i) => (
                <div key={i} className={`msg ${m.role}`}>{m.content}</div>
              ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Спроси что угодно..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>💌</button>
          </div>
        </div>
      )}
    </>
  );
}
