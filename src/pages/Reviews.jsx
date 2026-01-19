
import { useState, useEffect } from "react";
import { flowerTypes } from "../data/flowerTypes";
import "./reviews.css"; 

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [flower, setFlower] = useState("Розы");
  const [rating, setRating] = useState(5);


  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("flowerReviews")) || [];
    setReviews(savedReviews);
  }, []);

  const addReview = (e) => {
    e.preventDefault();
    if (!name || !text) return;

    const newReview = {
      id: Date.now(),
      name,
      text,
      flower,
      rating,
      likes: 0,
      date: new Date().toLocaleDateString("ru-RU"),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("flowerReviews", JSON.stringify(updatedReviews));

    setName("");
    setText("");
    setRating(5);
    setFlower("Розы");
  };


  const likeReview = (id) => {
    const updated = reviews.map((r) => {
      if (r.id === id) {
        return { ...r, likes: (r.likes || 0) + 1 };
      }
      return r;
    });
    setReviews(updated);
    localStorage.setItem("flowerReviews", JSON.stringify(updated));
  };

  return (
    <div className="reviews-bg p-6 min-h-screen">
      <h1 className="reviews-title">🌸 Отзывы 🌸</h1>

      <form onSubmit={addReview} className="review-form mb-10">
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="review-input"
        />
        <textarea
          placeholder="Ваш отзыв"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="review-input"
        />
        <select
          value={flower}
          onChange={(e) => setFlower(e.target.value)}
          className="review-input"
        >
          {Object.keys(flowerTypes).map((cat) =>
            flowerTypes[cat].map((f) => (
              <option key={`${cat}-${f.id}`} value={f.name}>
                {f.name}
              </option>
            ))
          )}
        </select>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="review-input"
        >
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>{`${n} ⭐`}</option>
          ))}
        </select>
        <button type="submit" className="review-btn">
          Отправить отзыв
        </button>
      </form>

    
      {reviews.length === 0 ? (
        <p className="reviews-empty">Пока нет отзывов 🌱</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <h2 className="review-name">{rev.name}</h2>
              <p className="review-date">{rev.date}</p>
              <p><b>Цветок:</b> {rev.flower}</p>
              <p>Рейтинг: {"⭐".repeat(rev.rating)}</p>
              <p className="review-text">{rev.text}</p>

       
              <button
                className="review-like-btn"
                onClick={() => likeReview(rev.id)}
              >
                ❤️ Лайк {rev.likes || 0}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
