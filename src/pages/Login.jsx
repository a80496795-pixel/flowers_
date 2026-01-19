import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Вы успешно вошли!");
      navigate("/admin"); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-card">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mitsuri-input"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mitsuri-input"
        />
        <button type="submit" className="mitsuri-btn">Войти</button>
      </form>
      <p>Нет аккаунта? <Link to="/register">Регистрация</Link></p>
    </div>
  );
}
