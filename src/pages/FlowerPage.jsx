import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useNewFavorites } from "../context/NewFavoritesContext.jsx"; 
import { flowerTypes } from "../data/flowerTypes";
import "./flowerPage.css"; 

export default function FlowerPage() {
  const { category, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let flower = location.state?.flower;

  if (!flower && category && id) {
    const list = flowerTypes[category] || [];
    flower = list.find((f) => String(f.id) === String(id));
  }

  const { favorites, toggleFavorite } = useNewFavorites(); 

  if (!flower) {
    return (
      <div className="flower-not-found">
        <h2>Цветок не найден 😢</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  const isFavorite = favorites.some((f) => f.id === flower.id);
  const description = flower.description || flower.full || flower.short;

  return (
    <div className="flower-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Назад</button>

      <h1 className="flower-title">{flower.name}</h1>

      <div className="favorite-container">
        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={() => toggleFavorite(flower)}
        >
          {isFavorite ? "⭐ Убрать из избранного" : "⭐ В избранное"}
        </button>
      </div>

      <div className="flower-image-container">
        <img
          src={flower.image}
          alt={flower.name}
          className="flower-image"
        />
      </div>

      <p><strong>Среда:</strong> {flower.habitat}</p>
      <p><strong>Описание:</strong> {description}</p>

      {Array.isArray(flower.interestingFacts) && flower.interestingFacts.length > 0 && (
        <>
          <p><strong>Интересные факты:</strong></p>
          <ul>
            {flower.interestingFacts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
