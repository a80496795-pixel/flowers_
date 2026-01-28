import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNewFavorites } from "../context/NewFavoritesContext.jsx";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar({ theme, setTheme, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const { favorites } = useNewFavorites();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(searchTerm);
    // На мобильных после поиска сворачиваем меню
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
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
        className={`nav-toggle ${isMenuOpen ? "nav-toggle--open" : ""}`}
        aria-label="Меню"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* LINKS */}
      <ul className={`nav-links ${isMenuOpen ? "nav-links--open" : ""}`}>
        <li>
          <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
            Категории
          </Link>
        </li>
        <li>
          <Link to="/habitat" onClick={() => setIsMenuOpen(false)}>
            Среда
          </Link>
        </li>
        <li>
          <Link to="/redbook" onClick={() => setIsMenuOpen(false)}>
            Красная книга
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={() => setIsMenuOpen(false)}>
            Новости
          </Link>
        </li>
        <li>
          <Link to="/games" onClick={() => setIsMenuOpen(false)}>
            Мини-игра
          </Link>
        </li>
        <li>
          <Link to="register" onClick={() => setIsMenuOpen(false)}>
             регистрация
          </Link>
        </li>

        {user && (
          <li>
            <Link
              to="/favorites"
              className="fav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              ⭐ <span>{favorites.length}</span>
            </Link>
          </li>
        )}

        {!user && (
          <li>
            <Link
              to="/guest"
              className="login-link"
              onClick={() => setIsMenuOpen(false)}
            >
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

export default Navbar;
