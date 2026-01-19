import { useParams } from "react-router-dom";
import { flowersData } from "../data/data"; 
import "./CategoryDetail.css"

export default function CategoryDetail() {
    const { id } = useParams();
    const items = flowersData[id] || [];

    return (
        <div className="category-details">
            <h1>{id}</h1>
            <p>{items.length} объектов в этой категории</p>

            <div className="items-grid">
                {items.map((item) => (
                    <div key={item.id} className="item-card">
                        <div className="image-container">
                            <img src={item.image} alt={item.name} />
                            {item.rare && <span className="red-book">Редкое</span>}
                        </div>
                        <h3>{item.name}</h3>
                        <p>Среда обитания: {item.habitat}</p>
                        <button className="details-btn">Подробнее</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
