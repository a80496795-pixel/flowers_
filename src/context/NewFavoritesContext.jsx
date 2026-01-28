import { createContext, useContext, useState, useEffect } from "react";

// создаём контекст
const NewFavoritesContext = createContext();

// провайдер
export function NewFavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // загружаем из localStorage при старте
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // сохраняем в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (flower) => {
    setFavorites((prev) => {
      const exists = prev.find(f => f.id === flower.id);
      if (exists) return prev.filter(f => f.id !== flower.id);
      return [...prev, flower];
    });
  };

  return (
    <NewFavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </NewFavoritesContext.Provider>
  );
}

// ✅ хук для использования
export function useNewFavorites() {
  return useContext(NewFavoritesContext);
}
