
import React from "react";
import "./HelloModal.css";

export default function HelloModal({ news, onClose }) {
  if (!news) return null;

  return (
    <div className="hello-modal-overlay">
      <div className="hello-modal">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="image-container">
          <img src={news.image} alt={news.title} />
          <span className="news-date">{news.date}</span>
        </div>

        <h3>{news.title}</h3>
        <p>{news.full}</p>
      </div>
    </div>
  );
}
