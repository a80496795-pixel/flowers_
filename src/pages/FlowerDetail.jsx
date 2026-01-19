import { useParams, useNavigate } from "react-router-dom";
import { flowers } from "../data/flowers";

export default function FlowerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const flower = flowers.find(f => f.id === id);

  if (!flower) return <p>Цветок не найден</p>;

  return (
    <div className="container">
      <img src={flower.image} alt={flower.name} className="detail-img" />

      <h1>{flower.name}</h1>
      <p><i>{flower.latinName}</i></p>

      <p>{flower.description}</p>

      <ul>
        <li><b>Происхождение:</b> {flower.origin}</li>
        <li><b>Цветение:</b> {flower.bloomingSeason}</li>
        <li><b>Высота:</b> {flower.height}</li>
        <li><b>Аромат:</b> {flower.aromaLevel}</li>
      </ul>

      <h3>🌱 Уход</h3>
      <ul>
        <li>Полив: {flower.care.watering}</li>
        <li>Свет: {flower.care.sunlight}</li>
        <li>Почва: {flower.care.soil}</li>
      </ul>

      <h3>✨ Интересные факты</h3>
      <ul>
        {flower.interestingFacts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>

      <button className="btn back" onClick={() => navigate(-1)}>
        ← Назад
      </button>
    </div>
  );
}
