import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loginWithGoogle } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Аккаунт создан! Теперь вы можете войти.");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      alert("Вы вошли через Google!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
        <div
            className="register-page"
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        >
            <div className="register-card">
                <div className="panda">
                    <div className="ear left"></div>
                    <div className="ear right"></div>
                    <div className="face">
                        <div className="eye left">
                            <div
                                className="pupil"
                                style={{
                                    transform: `translate(${(mousePos.x / window.innerWidth - 0.5) * 6}px, ${(mousePos.y / window.innerHeight - 0.5) * 6}px)`,
                                }}
                            ></div>
                        </div>
                        <div className="eye right">
                            <div
                                className="pupil"
                                style={{
                                    transform: `translate(${(mousePos.x / window.innerWidth - 0.5) * 6}px, ${(mousePos.y / window.innerHeight - 0.5) * 6}px)`,
                                }}
                            ></div>
                        </div>
                        <div className="cheek left"></div>
                        <div className="cheek right"></div>
                        <div className="mouth"></div>
                    </div>
                </div>

                <h2>Создать аккаунт</h2>

                <form onSubmit={handleRegister}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <label>Пароль</label>
                  <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <button type="submit" className="register-btn">
                    Зарегистрироваться
                  </button>
                </form>

                <div className="divider">
                  <span>Или продолжить с</span>
                </div>

                <button type="button" className="google-btn" onClick={handleGoogle}>
                  Войти через Google
                </button>

                <p className="login-text">
                  Уже есть аккаунт? <Link to="/guest">Войти</Link>
                </p>
            </div>
        </div>
    );
}
