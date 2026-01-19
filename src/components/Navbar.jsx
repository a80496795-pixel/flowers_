import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar({ theme, setTheme, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); 
  };

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/" className="logo-link">
        <h2>BloomVerse</h2>
      </Link>

      <ul className="nav-links">
        <li><Link to="/categories">Категории</Link></li>
        <li><Link to="/habitat">Среда обитания</Link></li>
        <li><Link to="/redbook">Красная книга</Link></li>
        <li><Link to="/games">Игры</Link></li>
        <li><Link to="/news">Новости</Link></li>
        <li><Link to="/reviews">Отзывы</Link></li>
        <li><Link to="/about">О проекте</Link></li>

        <li>
          <Link to="/favorites" className="mitsuri-btn-fav">
            ⭐
          </Link>
        </li>

        <li>
          <Link to="/guest" className="guest-header">
            <span>Регистрация</span> <span className="guest-icon">🐰</span>
          </Link>
        </li>
      </ul>
      

      <button
        className="theme-btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
