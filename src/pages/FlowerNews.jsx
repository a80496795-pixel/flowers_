import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flowersNews } from "../data/flowersNews";
import "./FlowerNews.css";

export default function FlowerNews() {
  const [openId, setOpenId] = useState(null);
  const [likes, setLikes] = useState({});


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("flowerLikes")) || {};
    setLikes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("flowerLikes", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="mitsuri-news">
      <h2>🌸 Цветочные новости</h2>

      <div className="news-grid">
        {flowersNews.map((news) => {
          const isOpen = openId === news.id;
          const isLiked = likes[news.id];

          return (
            <motion.div
              className="news-card"
              key={news.id}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="image-wrapper">
                <img src={news.image} alt={news.title} />

                <button
                  className={`like-btn ${isLiked ? "liked" : ""}`}
                  onClick={() => toggleLike(news.id)}
                >
                  ♥
                </button>
              </div>

              <div className="news-content">
                <h3>{news.title}</h3>
                <span className="date">{news.date}</span>

                <AnimatePresence>
                  <motion.p
                    key={isOpen ? "full" : "short"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {isOpen ? news.full : news.short}
                  </motion.p>
                </AnimatePresence>

                <button
                  className="toggle-btn"
                  onClick={() =>
                    setOpenId(isOpen ? null : news.id)
                  }
                >
                  {isOpen ? "Свернуть ▲" : "Читать больше ▼"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
