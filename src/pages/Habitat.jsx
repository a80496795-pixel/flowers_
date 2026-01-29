import { useState } from "react";
import habitatFlowers from "../data/habitatFlowers.json";
import "./Habitat.css";

export default function Habitat() {
  const [filter, setFilter] = useState("Все");
  const [search, setSearch] = useState("");

  const habitats = [
    "Все",
    "Сад",
    "Лес",
    "Поле",
    "Луг",
    "Горы",
    "Тропики",
    "Водоёмы",
  ];

  const filtered = habitatFlowers.filter(flower => {
    const byHabitat = filter === "Все" || flower.habitat === filter;
    const bySearch = flower.name.toLowerCase().includes(search.toLowerCase());
    return byHabitat && bySearch;
  });

  return (
    <div className="page">
      <header className="header">
        <h1>BloomVerse</h1>

      
      </header>

      <div className="filters">
        {habitats.map(h => (
          <button
            key={h}
            className={filter === h ? "active" : ""}
            onClick={() => setFilter(h)}
          >
            {h}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((flower, i) => (
          <div
            className="card"
            key={flower.id}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <img
              src={flower.image}
              alt={flower.name}
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
              }}
            />
            <div className="content">
              <h3>{flower.name}</h3>
              <p>{flower.description}</p>
              <span>{flower.habitat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
