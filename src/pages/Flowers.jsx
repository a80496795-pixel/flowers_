import { useParams, Link } from "react-router-dom";
import { flowerTypes } from "../data/flowerTypes";
import "../styles/mitsuri.css";

export default function FlowerPage() {
  const { category, id } = useParams();
  const flowers = flowerTypes[category] || [];
  const flower = flowers.find(f => f.id === Number(id));

  if (!flower) {
    return <h2 className="text-center mt-10 text-gray-500">Цветок не найден 🌱</h2>;
  }

  return (
    <div className="mitsuri-bg p-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {flower.image && <img src={flower.image} alt={flower.name} className="w-full h-64 object-cover rounded-xl mb-4" />}
        <h1 className="text-3xl font-extrabold text-pink-400 mb-4">{flower.name}</h1>
        <p className="text-gray-600 mb-2"><b>Категория:</b> {category}</p>
        <p className="text-gray-600 mb-2"><b>Среда обитания:</b> {flower.habitat}</p>
        <p className="text-gray-700 mb-4">{flower.full}</p>

        <div className="flex gap-3 mb-4">
          <button className="bg-pink-400 text-white px-4 py-2 rounded-full font-semibold">❤️ Лайк</button>
          <button className="bg-green-300 text-white px-4 py-2 rounded-full font-semibold">⭐ В избранное</button>
        </div>

        <Link to={`/flower-catalog/${category}`} className="text-pink-400 font-semibold hover:underline">← Назад</Link>
      </div>
    </div>
  );
}
