export default function NewsModal({ news, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>

                <img src={news.image} alt={news.title} />
                <span className="news-date">{news.date}</span>

                <h2>{news.title}</h2>
                <p>{news.full}</p>
            </div>
        </div>
    );
}
