import { flowers } from "../data/flower";
import { useNavigate } from "react-router-dom";
import { useNewFavorites } from "../context/NewFavoritesContext.jsx";
import "./RedBook.css";

export default function RedBook({ search = "" }) {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useNewFavorites();

  const filteredFlowers = flowers.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="redbook-page">
      <h1>🌺 Красная книга растений</h1>
      <div className="redbook-grid">
        {filteredFlowers.map(item => (
          <div key={item.id} className="redbook-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.latinName}</p>

            <div className="card-buttons">
              <button
                className={favorites.some(f => f.id === item.id) ? "favorite active" : "favorite"}
                onClick={() => toggleFavorite(item)}
              >
                ⭐
              </button>
              <button onClick={() => navigate(`/flower/${item.id}`, { state: { flower: item } })}>
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
