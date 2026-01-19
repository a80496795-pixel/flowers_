import { Link } from "react-router-dom";
import "./categories.css"; 



export const categories = [
  { id: "roses", name: "Розы", icon: "🌹" },
  { id: "tulips", name: "Тюльпаны", icon: "🌷" },
  { id: "orchids", name: "Орхидеи", icon: "🪻" },
  { id: "wildflowers", name: "Полевые", icon: "🌼" },
  { id: "succulents", name: "Суккуленты", icon: "🌵" },
  { id: "bonsai", name: "Бонсай", icon: "🌳" },
  { id: "herbs", name: "Травы", icon: "🌿" },
  { id: "aquatic", name: "Водные растения", icon: "💧" },
  { id: "rare", name: "Редкие", icon: "✨" },
  { id: "cacti", name: "Кактусы", icon: "🌵" },
];

export default function Categories() {
  return (
    <div className="p-6">
      <h1>Категории цветов</h1>
      <div className="grid">
        {categories.map(cat => (
          <Link key={cat.id} to={`/categories/${cat.id}`} className="card">
            <span>{cat.icon}</span>
            <h2>{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
