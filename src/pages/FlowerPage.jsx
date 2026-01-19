import { useParams, useNavigate } from "react-router-dom";
  import { flowers } from "../data/flower";
import { useFavorites } from "../context/FavoritesContext";
import "./FlowerPage.css";

export default function FlowerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleFavorite } = useFavorites();

  const current = flowers.find(f => String(f.id) === id);

  if (!current) {
    return <h2 className="not-found">Цветок не найден</h2>;
  }

  return (
    <div className="flower-detail-page">
      {/* Баннер */}
      <div
        className="flower-hero"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="flower-hero-overlay">
          <h1>{current.name}</h1>
          <p>Категория: {current.category}</p>
          <p>Среда обитания: {current.habitat}</p>
        </div>
      </div>

      {/* Контент */}
      <div className="flower-content">
        <h2>Описание</h2>
        <p className="description">{current.description}</p>

        <div className="info-grid">
          <div className="info-card">
            <h3>Питание</h3>
            <p>{current.food}</p>
          </div>

          <div className="info-card">
            <h3>Образ жизни</h3>
            <p>{current.lifeStyle}</p>
          </div>
        </div>

        <h2>Интересные факты</h2>
        <ul className="facts-list">
          {current.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>

        <div className="actions">
          <button onClick={() => toggleFavorite(current)}>
            ⭐ В избранное
          </button>
          <button className="back" onClick={() => navigate(-1)}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}






