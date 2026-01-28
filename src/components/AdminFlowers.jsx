import { useState } from "react";
import { flowers as initialFlowers } from "../data/adminData";
import "./AdminPanel.css";

export default function AdminFlowers() {
  const [flowers, setFlowers] = useState(initialFlowers);

  const toggleFavorite = (id) => {
    setFlowers(f =>
      f.map(flower =>
        flower.id === id ? { ...flower, favorite: !flower.favorite } : flower
      )
    );
  };

  const deleteFlower = (id) => {
    setFlowers(f => f.filter(flower => flower.id !== id));
  };

  return (
    <div className="admin-section">
      <h2>Цветы</h2>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Избранное</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {flowers.map(f => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.category}</td>
              <td>{f.favorite ? "⭐" : ""}</td>
              <td>
                <button onClick={() => toggleFavorite(f.id)}>Toggle ⭐</button>
                <button onClick={() => deleteFlower(f.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
