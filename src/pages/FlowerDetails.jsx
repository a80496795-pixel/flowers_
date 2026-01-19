import { useLocation, useNavigate } from "react-router-dom";
import "./FlowerDetails.css";

export default function FlowerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const flower = location.state?.flower;

  if (!flower) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Цветок не найден</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  return (
    <div className="flower-details-page">
      <button onClick={() => navigate(-1)}>← Назад</button>
      <h1>{flower.name}</h1>
      <img src={flower.image} alt={flower.name} />
      <p><strong>Среда:</strong> {flower.habitat}</p>
      <p><strong>Описание:</strong> {flower.description}</p>
      <p><strong>Интересные факты:</strong></p>
      <ul>
        {flower.interestingFacts?.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
