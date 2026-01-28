import { useNewFavorites } from "../context/NewFavoritesContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Favorites.css";   

export default function Favorites() {
  const { favorites, toggleFavorite } = useNewFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return <p style={{ padding: "2rem" }}>⭐ Избранное пусто</p>;
  }

  return (
    <div className="favorites-page">
      <h1>⭐ Избранные растения</h1>
      <div className="favorites-grid">
        {favorites.map(flower => (
          <div key={flower.id} className="favorites-card">
            <div className="image-container">
              <img src={flower.image} alt={flower.name} />
            </div>
            <div className="card-info">
              <h3>{flower.name}</h3>
              <p className="latin-name">{flower.latinName}</p>
              <p className="category">Категория: {flower.category}</p>
            </div>
            <div className="card-buttons">
              <button
                className="favorite active"
                onClick={() => toggleFavorite(flower)}
              >
                ❌ Убрать
              </button>
              <button
                className="details-btn"
                onClick={() =>
                  navigate(`/flower/${flower.id}`, { state: { flower } })
                }
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
