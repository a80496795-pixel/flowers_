import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import footer from "./components/footer";
import ChatBot from "./components/ChatBot/ChatBot";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Habitat from "./pages/Habitat";
import RedBook from "./pages/RedBook";
import Games from "./pages/Games";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import News from "./pages/News";
import FavoritesPage from "./pages/FavoritesPage";
import ReviewsPage from "./pages/Reviews";
import CategoryFlowers from "./pages/CategoryFlowers";
import FlowersByCategory from "./pages/FlowersByCategory";
import CategoryDetail from "./pages/CategoryDetail";
import FlowerPage from "./pages/FlowerPage";
import FlowerDetails from "./pages/FlowerDetails";
import Guest from "./pages/Guest";
import Register from "./pages/Register";
import HelloModal from "./pages/HelloModal";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminPanel from "./pages/AdminPanel";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminFlowers from "./pages/AdminFlowers";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminDataProvider } from "./contexts/AdminDataContext";
import { NewFavoritesProvider } from "./context/NewFavoritesContext.jsx";
import "./styles/theme.css";

export default function App() {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "light"
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.className = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    
    <AuthProvider>
        <NewFavoritesProvider>
      <AdminDataProvider>
        <Navbar theme={theme} setTheme={setTheme} onSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName" element={<CategoryFlowers />} />
          <Route path="/habitat" element={<Habitat search={search} />} />
          <Route path="/redbook" element={<RedBook search={search} />} />
          <Route path="/flower/:id" element={<FlowerDetails />} />
          <Route path="/flowers/:category/:id" element={<FlowerPage />} />
          <Route path="/flowers/detail/:flowerId" element={<CategoryDetail />} />
          <Route path="/flowers/category/:category" element={<FlowersByCategory />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/news" element={<News />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hello" element={<HelloModal />} />

          <Route
            path="/admin"
            element={<AdminPanel />}
          >
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="flowers" element={<AdminFlowers />} />
          </Route>

          <Route
            path="*"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>404</h1>
                <p>Страница не найдена</p>
              </div>
            }
          />
          
        </Routes>

        <Footer />
        <ChatBot />
      </AdminDataProvider>
      </NewFavoritesProvider>

    </AuthProvider>
  );
}
