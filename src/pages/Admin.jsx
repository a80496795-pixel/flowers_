import { useState } from "react";
import { Plus, Trash2, Edit3, LogOut } from "lucide-react";

export default function Admin() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNews = () => {
    if (!title || !text) return;
    setNews([...news, { id: Date.now(), title, text }]);
    setTitle("");
    setText("");
  };

  const deleteNews = (id) => {
    setNews(news.filter((n) => n.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-green-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700">
            🌸 FlowerPedia — Админ панель
          </h1>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:opacity-90"
          >
            <LogOut size={18} /> Выйти
          </button>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Добавление */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">➕ Добавить новость</h2>

            <input
              className="w-full mb-3 p-3 border rounded-xl"
              placeholder="Заголовок"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="w-full mb-4 p-3 border rounded-xl"
              placeholder="Текст новости"
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onClick={addNews}
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
            >
              <Plus size={18} /> Добавить
            </button>
          </div>

          {/* Список */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">📰 Новости</h2>

            {news.length === 0 && (
              <p className="text-gray-400">Новостей пока нет</p>
            )}

            <ul className="space-y-4">
              {news.map((n) => (
                <li
                  key={n.id}
                  className="p-4 border rounded-xl flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold text-purple-700">
                      {n.title}
                    </h3>
                    <p className="text-sm text-gray-600">{n.text}</p>
                  </div>

                  <div className="flex gap-3">
                    <button className="text-blue-500">
                      <Edit3 size={18} />
                    </button>

                    <button
                      onClick={() => deleteNews(n.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  ч
}
