import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AnimalPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    setAnimals(animalsData); 
  }, []);

  const animal = animals.find(a => a.id === parseInt(id));
  if (!animal) return <p style={{ textAlign: "center" }}>растение не найдено</p>;

  const isFav = favorites.some(f => f.id === animal.id);

  return (
    <div className="animal-page">
      <style>{`
        .animal-page { max-width: 800px; margin: 30px auto; padding: 20px 25px; font-family: 'Segoe UI', Roboto, sans-serif; background: #f9f7f6; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.08); }
        .animal-page img { width: 100%; max-height: 350px; object-fit: cover; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .animal-page img:hover { transform: scale(1.03); }
        h1 { margin-top: 20px; font-size: 28px; color: #333; text-align: center; }
        .section { margin: 20px 0; background: #fff; padding: 15px 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: box-shadow 0.3s; }
        .section:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
        .section strong { display: block; margin-bottom: 8px; color: #555; font-size: 16px; }
        .section p, .section li { font-size: 15px; line-height: 1.5; color: #666; }
        .section ul { padding-left: 20px; margin: 5px 0 0 0; }
        .buttons { display: flex; justify-content: center; gap: 15px; margin-top: 25px; flex-wrap: wrap; }
        .btn { padding: 10px 18px; border-radius: 8px; border: none; cursor: pointer; font-size: 15px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
        .btn-fav { background: ${isFav ? "#f28c8c" : "#f3e6e6"}; color: ${isFav ? "#fff" : "#b23b3b"}; }
        .btn-fav:hover { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(0,0,0,0.12); }
        .btn-back { background: #a3d5ff; color: #fff; }
        .btn-back:hover { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(0,0,0,0.12); }
        @media (max-width: 500px) { .animal-page { padding: 15px; } h1 { font-size: 24px; } .btn { font-size: 14px; padding: 8px 14px; } }
      `}</style>

      <img src={animal.image} alt={animal.name} />
      <h1>{animal.name}</h1>

      <div className="section">
        <strong>Описание:</strong>
        <p>{animal.description || "Описание недоступно"}</p>
      </div>

      <div className="section">
        <strong>Среда / Питание:</strong>
        <p>{animal.habitat || "Информация недоступна"}</p>
      </div>

      <div className="buttons">
        <button className="btn btn-fav" onClick={() => toggleFavorite(animal)}>
          {isFav ? "В избранном ♥" : "В избранное ♡"}
        </button>
        <button className="btn btn-back" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
}
