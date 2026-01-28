import { useState } from "react";
import { useAdminData } from "../contexts/AdminDataContext";
import "./AdminFlowers.css";

export default function AdminFlowers() {
  const { flowers, addFlower, removeFlower, toggleFavoriteFlower } = useAdminData();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    if (!name || !category) return;

    const newFlower = {
      id: Date.now().toString(),
      name,
      category,
      image:
        image ||
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      favorite: false,
    };

    addFlower(newFlower);
    setName("");
    setCategory("");
    setImage("");
  };

  return (
    <div className="admin-flowers-page">
      <h2>Управление цветами</h2>

      <div className="add-flower-form">
        <input
          placeholder="Название цветка"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Категория (например: roses)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="URL картинки"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handleAdd}>Добавить цветок</button>
      </div>

      <div className="flower-list">
        {flowers.map((f) => (
          <div key={f.id} className="flower-card">
            <img src={f.image} alt={f.name} />
            <h3>{f.name}</h3>
            <span>{f.category}</span>
            <div className="flower-card-actions">
              <button onClick={() => toggleFavoriteFlower(f.id)}>
                {f.favorite ? "⭐ Убрать из избранного" : "☆ В избранное"}
              </button>
              <button onClick={() => removeFlower(f.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
