import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { users as seedUsers, flowers as seedFlowers } from "../data/adminData";

const AdminDataContext = createContext();

const STORAGE_KEYS = {
  FLOWERS: "admin_flowers",
  USERS: "admin_users",
};

export function AdminDataProvider({ children }) {
  const [flowers, setFlowers] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FLOWERS);
    if (saved) return JSON.parse(saved);
    return seedFlowers;
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.USERS);
    if (saved) return JSON.parse(saved);
    const current = localStorage.getItem("user");
    return current ? [JSON.parse(current), ...seedUsers] : seedUsers;
  });

  // Сохраняем в localStorage при изменениях
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FLOWERS, JSON.stringify(flowers));
  }, [flowers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }, [users]);

  const stats = useMemo(
    () => ({
      flowersCount: flowers.length,
      usersCount: users.length,
      favoriteFlowers: flowers.filter((f) => f.favorite).length,
    }),
    [flowers, users]
  );

  const addFlower = (newFlower) => {
    setFlowers((prev) => [...prev, newFlower]);
  };

  const removeFlower = (id) => {
    setFlowers((prev) => prev.filter((f) => f.id !== id));
  };

  const toggleFavoriteFlower = (id) => {
    setFlowers((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, favorite: !f.favorite } : f
      )
    );
  };

  const addUser = (user) => {
    setUsers((prev) => {
      if (prev.find((u) => u.email === user.email)) return prev;
      return [...prev, user];
    });
  };

  const value = {
    flowers,
    users,
    stats,
    addFlower,
    removeFlower,
    toggleFavoriteFlower,
    addUser,
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  return useContext(AdminDataContext);
}
