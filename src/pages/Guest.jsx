import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google"; 
import { useAuth } from "../contexts/AuthContext"; 
import "./Guest.css";

export default function Guest() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth(); 
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Вы вошли!");
      navigate("/admin"); 
    } catch (err) {
      alert(err.message);
    }
  };


  const handleLoginSuccess = (credentialResponse) => {
    console.log("Успешный вход через Google!", credentialResponse);
    alert("Успешный вход через Google!");
  };

  const handleLoginError = () => {
    console.log("Ошибка при входе через Google");
    alert("Ошибка при входе через Google");
  };

  return (
    <div
      className="guest-page"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <div className="login-card">

   
        <div className="panda">
          <div className="ear left"></div>
          <div className="ear right"></div>
          <div className="face">
            <div className={`eye left ${isTyping ? "blink" : ""}`}>
              <div
                className="pupil"
                style={{
                  transform: `translate(${(mousePos.x / window.innerWidth - 0.5) * 6}px, ${(mousePos.y / window.innerHeight - 0.5) * 6}px)`,
                }}
              ></div>
            </div>
            <div className={`eye right ${isTyping ? "blink" : ""}`}>
              <div
                className="pupil"
                style={{
                  transform: `translate(${(mousePos.x / window.innerWidth - 0.5) * 6}px, ${(mousePos.y / window.innerHeight - 0.5) * 6}px)`,
                }}
              ></div>
            </div>
            <div className="cheek left"></div>
            <div className="cheek right"></div>
            <div className={`mouth ${isTyping ? "smile" : ""}`}></div>
          </div>
        </div>

        <h2>Вход в аккаунт</h2>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            required
          />

          <label>Пароль</label>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            required
          />

          <button type="submit" className="login-btn">Войти</button>
        </form>

        <div className="divider">
          <span>Или продолжить с</span>
        </div>

     
        <div className="google-login">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>

        <p className="signup-text">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>

      </div>
    </div>
  );
}
