import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === item.id);
      return exists
        ? prev.filter((f) => f.id !== item.id)
        : [...prev, item];
    });
  };


  const isFavorite = (id) => {
    return favorites.some((f) => f.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites должен использоваться внутри FavoritesProvider"
    );
  }
  return context;
}
