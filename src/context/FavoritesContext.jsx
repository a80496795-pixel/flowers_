import { createContext, useContext, useEffect, useState } from "react";

const NewFavoritesContext = createContext();

export function NewFavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("newFavorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("newFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (flower) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === flower.id);
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

export function useNewFavorites() {
  return useContext(NewFavoritesContext);
}
