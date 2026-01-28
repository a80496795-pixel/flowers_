import { Link, useParams } from "react-router-dom";
import { flowerTypes } from "../data/flowerTypes";
import "../styles/mitsuri.css";

export default function FlowersByCategory() {
  const { category } = useParams(); 
  const flowers = flowerTypes[category]; 

  if (!flowers || flowers.length === 0) {
    return <h2 className="text-center text-gray-500 mt-10">🌱 Пока нет цветов в этой категории.</h2>;
  }

  return (
    <div className="mitsuri-bg p-6 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-pink-400 mb-10">
        🌸 {category.charAt(0).toUpperCase() + category.slice(1)} 🌸
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flowers.map(flower => (
          <div key={flower.id} className="mitsuri-card bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition p-4">
            {flower.image && <img src={flower.image} alt={flower.name} className="w-full h-48 object-cover rounded-xl mb-4" />}
            <h2 className="text-xl font-bold text-pink-400 mb-2">{flower.name}</h2>
            <p className="text-gray-600 mb-1">{flower.short}</p>
            <p className="text-gray-500 mb-3"><b>Среда обитания:</b> {flower.habitat}</p>

            <Link
              to={`/flowers/${category}/${flower.id}`}
              className="mitsuri-btn bg-gradient-to-r from-pink-400 to-green-300 text-white px-4 py-2 rounded-full font-semibold"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
