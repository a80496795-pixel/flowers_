import { useParams, Link } from "react-router-dom";
import { flowers } from "../data/flowers";

export default function CategoryPage() {
  const { id } = useParams();
  const filteredFlowers = flowers.filter(f => f.category === id);

  return (
    <div className="container">
      <h1>Категория: {id}</h1>
      <p>Найдено цветов: {filteredFlowers.length}</p>

      <div className="grid">
        {filteredFlowers.map(flower => (
          <div key={flower.id} className="card">
            <img src={flower.image} alt={flower.name} />
            <h2>{flower.name}</h2>
            <p>{flower.habitat}</p>
            <Link to={`/flower/${flower.id}`} className="btn">
              Подробнее
            </Link>
          </div>
        ))}
      </div>

      <Link to="/" className="btn back">← Назад</Link>
    </div>
  );
}
