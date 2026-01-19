import { useState } from "react";
import { quizFlowers } from "../data/quizFlowers";
import "./Quiz.css";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizFlowers[current];

  function handleAnswer(option) {
    if (option === question.correct) {
      setScore(score + 1);
    }

    if (current + 1 < quizFlowers.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  return (
    <div className="quiz">
      <h1 className="quiz-title">🌸 Викторина: Цветы</h1>

      {finished ? (
        <h2 className="quiz-result">
          Результат: {score} / {quizFlowers.length}
        </h2>
      ) : (
        <>
          <h3 className="quiz-question">{question.question}</h3>

          <div className="quiz-options">
            {question.options.map((option) => (
              <button
                key={option}
                className="quiz-option"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
