import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ flower }) {
    return (
        <motion.div
            className="card"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <img src={flower.image} alt={flower.name} />
            <h3>{flower.name}</h3>
            {flower.isRedBook && <span className="badge">🌺 Красная книга</span>}
            <p>{flower.type}</p>
            <Link to={`/flower/${flower.id}`}>
                <button className="btn-primary">Подробнее</button>
            </Link>
        </motion.div>
    );
}

export default Card;
