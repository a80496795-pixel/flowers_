import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNewFavorites } from "../context/NewFavoritesContext.jsx";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar({ theme, setTheme, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAuth();
  const { favorites = [] } = useNewFavorites();

  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(searchTerm);
    closeMenu();
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo" onClick={closeMenu}>
        🌸 BloomVerse
      </Link>

      {/* SEARCH */}
      <form className="nav-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Поиск растений..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* MOBILE TOGGLE */}
      <button
        type="button"
        className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
        aria-label="Меню"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* LINKS */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/categories" onClick={closeMenu}>Категории</Link></li>
        <li><Link to="/habitat" onClick={closeMenu}>Среда</Link></li>
        <li><Link to="/redbook" onClick={closeMenu}>Красная книга</Link></li>
        <li><Link to="/news" onClick={closeMenu}>Новости</Link></li>
        <li><Link to="/games" onClick={closeMenu}>Мини-игра</Link></li>
        <li><Link to="/register" onClick={closeMenu}>Регистрация</Link></li>

       <li>
  <Link to="/favorites" className="fav-link" onClick={closeMenu}>
    ⭐ <span>{favorites?.length || 0}</span>
  </Link>
</li>

        {/* LOGIN */}
        {!user && (
          <li>
            <Link to="/guest" className="login-link" onClick={closeMenu}>
              Войти 🐰
            </Link>
          </li>
        )}

        {/* THEME TOGGLE */}
        <li>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </li>
      </ul>
    </nav>
  );
}
