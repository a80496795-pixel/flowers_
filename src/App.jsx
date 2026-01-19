import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot/ChatBot";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Habitat from "./pages/Habitat";
import RedBook from "./pages/RedBook";
import Games from "./pages/Games";
import Quiz from "./pages/Quiz";
import AnimalPage from "./pages/AnimalPage";
import About from "./pages/About";
import News from "./pages/News";
import FavoritesPage from "./pages/FavoritesPage";
import ReviewsPage from "./pages/Reviews";
import CategoryFlowers from "./pages/CategoryFlowers";
import FlowersByCategory from "./pages/FlowersByCategory";
import CategoryDetail from "./pages/CategoryDetail";
import FlowerPage from "./pages/FlowerPage";
import Guest from "./pages/Guest";
import Register from "./pages/Register";
import HelloModal from "./pages/HelloModal";
import Admin from "./pages/Admin";
import ProtectedRoute from "./pages/ProtectedRoute";
import NewsModal from "./components/NewsModal";
import FlowerDetails from "./pages/FlowerDetails";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AuthProvider>
      <Navbar theme={theme} setTheme={setTheme} onSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/habitat" element={<Habitat search={search} />} />
   <Route path="/redbook" element={<RedBook search={search} />} />
        <Route path="/games" element={<Games />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/animal/:id" element={<AnimalPage />} />
        <Route path="/categories/:categoryName" element={<CategoryFlowers />} />
        <Route path="/flowers/category/:category" element={<FlowersByCategory />} />
        <Route path="/flowers/detail/:flowerId" element={<CategoryDetail />} />
        <Route path="/flowers/:category/:id" element={<FlowerPage />} />
        <Route path="/news-modal" element={<NewsModal />} />
        <Route path="/hello" element={<HelloModal />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/register" element={<Register />} />
         <Route path="/" element={<RedBook />} />
        <Route path="/flower/:id" element={<FlowerDetails />} />
        
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
      <ChatBot />
    </AuthProvider>
  );
}






















































































