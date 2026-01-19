import { useState } from "react";
import Quiz from "./Quiz.jsx";
import "./Games.css";

function Games() {
  const [game, setGame] = useState(null);
  const [result, setResult] = useState(null);

  const handleFinish = (score) => {
    setResult(score);
    setGame(null);
  };

  return (
    <div className="games-page">
      <h1 className="games-title">Мини-игры BloomVerse</h1>

      {!game && result === null && (
        <div className="game-card">
          <h2>Викторина про цветы</h2>
          <p>
            Проверь свои знания о цветах. Ответь на вопросы за ограниченное время.
          </p>

          <div className="game-stats">
            <div className="stat">
              <strong>12</strong>
              <span>вопросов</span>
            </div>
            <div className="stat">
              <strong>15с</strong>
              <span>на вопрос</span>
            </div>
          </div>

          <button className="start-btn" onClick={() => setGame("quiz")}>
            Начать викторину
          </button>
        </div>
      )}

      {game === "quiz" && <Quiz onFinish={handleFinish} />}

      {result !== null && (
        <div className="result-card">
          <h2>Викторина завершена</h2>
          <p>
            Ваш результат: <strong>{result} / 12</strong>
          </p>
          <button className="start-btn" onClick={() => setResult(null)}>
            Вернуться к играм
          </button>
        </div>
      )}
    </div>
  );
}

export default Games;
