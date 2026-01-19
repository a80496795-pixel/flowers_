
import { useParams, Link } from "react-router-dom";
import { flowerTypes } from "../data/flowerTypes";
import "../styles/mitsuri.css";

export default function CategoryFlowers() {
  const { categoryName } = useParams();
  const flowers = flowerTypes[categoryName] || [];

  if (!flowers.length) {
    return (
      <div className="mitsuri-bg">
        <h2 className="not-found">🌱 Пока нет цветов в этой категории.</h2>
        <Link to="/categories" className="back-link">← Назад к категориям</Link>
      </div>
    );
  }

  return (
    <div className="mitsuri-bg">
      <h1 style={{ textAlign: "center", color: "#d63a5b", marginBottom: "30px" }}>
        🌸 {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} 🌸
      </h1>
      <div className="category-grid">
        {flowers.map(flower => (
          <div key={flower.id} className="mitsuri-card">
            <img src={flower.image} alt={flower.name} />
            <h2>{flower.name}</h2>
            <p>{flower.short}</p>
            <p className="habitat"><strong>Среда обитания:</strong> {flower.habitat}</p>
            <Link to={`/flowers/${categoryName}/${flower.id}`} className="mitsuri-btn">Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
