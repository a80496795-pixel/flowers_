import { flower } from "../data/flower";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "./RedBook.css";
import { flowers } from "../data/flower";



export default function RedBook({ search = "" }) {
  const navigate = useNavigate();
  const { toggleFavorite } = useFavorites();


  const filteredFlowers = flower.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDetails = (id) => {

    const selectedFlower = flower.find(f => f.id === id);
    if (!selectedFlower) return alert("Цветок не найден!");

  
    navigate(`/flower/${id}`, { state: { flower: selectedFlower } });
  };

  return (
    <div className="redbook-page">
  
      <div className="redbook-header">
        <div className="redbook-icon">📕</div>
        <h1>Красная книга</h1>
        <p>Редкие и охраняемые цветы</p>
      </div>

  
      <div className="redbook-grid">
        {filteredFlowers.length === 0 ? (
          <p className="empty">Ничего не найдено</p>
        ) : (
          filteredFlowers.map(item => (
            <div key={item.id} className="redbook-card">
              <span className="badge">Красная книга</span>
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p className="habitat">Среда: {item.habitat}</p>

                <div className="card-actions">
                  <button
                    className="icon-btn"
                    onClick={() => toggleFavorite(item)}
                  >
                    ⭐
                  </button>

                  <button
                    className="details-btn"
                    onClick={() => handleDetails(item.id)}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
