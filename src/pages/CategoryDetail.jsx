import { useParams } from "react-router-dom";
import { flowerTypes } from "../data/flowerTypes";
import "./CategoryDetail.css";

export default function CategoryDetail() {
  const { id } = useParams();

  // Если параметр не передали – сразу показываем сообщение
  if (!id) {
    return (
      <div className="category-details-bg">
        <h2 className="not-found">🌱 Данные для этой категории отсутствуют</h2>
      </div>
    );
  }

  const categoryFlowers = flowerTypes[id] || [];

  if (!categoryFlowers.length) {
    return (
      <div className="category-details-bg">
        <h2 className="not-found">🌱 Данные для этой категории отсутствуют</h2>
      </div>
    );
  }

  const title =
    id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className="category-details-bg">
      <h1 className="category-title">
        🌸 {title} 🌸
      </h1>

      <div className="category-grid">
        {categoryFlowers.map((flower) => (
          <div key={flower.id} className="category-card">
            <img src={flower.image} alt={flower.name} />
            <h2>{flower.name}</h2>
            <p>{flower.short}</p>
            <p className="habitat">
              <strong>Среда обитания:</strong> {flower.habitat}
            </p>
            <button className="details-btn">Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}
