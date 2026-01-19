
import { Link } from "react-router-dom";
import { flowerTypes } from "../data/flowerTypes";
import { useState, useEffect } from "react";
import "../styles/mitsuri.css";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = [];


    Object.keys(flowerTypes).forEach(category => {
      flowerTypes[category].forEach(flower => {
        const key = `flower-${category}-${flower.id}`;
        const saved = JSON.parse(localStorage.getItem(key));
        if (saved && (saved.favorite || saved.likes > 0)) {
          favs.push({
            ...flower,
            category,
            likes: saved.likes || 0,
            favorite: saved.favorite || false
          });
        }
      });
    });

    setFavorites(favs);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="mitsuri-bg p-6 min-h-screen text-center">
        <h2 className="text-xl text-pink-400 mt-10">🌱 Пока нет лайков или избранного.</h2>
        <Link to="/categories" className="mitsuri-btn mt-4 block mx-auto">← К категориям</Link>
      </div>
    );
  }

  return (
    <div className="mitsuri-bg p-6 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-pink-400 mb-10">🌸 Ваши любимые цветы 🌸</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(flower => (
          <div key={`${flower.category}-${flower.id}`} className="mitsuri-card">
            <img src={flower.image} alt={flower.name} className="w-full h-48 object-cover rounded-xl" />
            <h2 className="text-xl font-bold mt-2 text-pink-400">{flower.name}</h2>
            <p><b>Категория:</b> {flower.category}</p>
            <p><b>Среда обитания:</b> {flower.habitat}</p>
            <p>{flower.short}</p>
            <p>❤️ Лайков: {flower.likes}</p>
            <p>⭐ {flower.favorite ? "В избранном" : ""}</p>
            <Link to={`/flowers/${flower.category}/${flower.id}`} className="mitsuri-btn mt-2 inline-block">Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
