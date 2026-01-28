import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import habitatFlowers from "../data/habitatFlowers.json";
import { useAdminData } from "../contexts/AdminDataContext";
import "./Home.css";

export default function Home({ search }) {
  const [expandedId, setExpandedId] = useState(null);
  const { flowers } = useAdminData();

  // Новости
  const newsData = [
    {
      id: 1,
      title: "Открытие нового вида орхидей",
      date: "19 января 2026 г.",
      image:
        "https://avatars.mds.yandex.net/i?id=ecd513292856a76f8280fc6fcd8ab896c64e764f-5273789-images-thumbs&n=13",
      short: "Ботаники обнаружили новый вид орхидеи в тропических лесах Юго-Восточной Азии.",
      full: "Ботаники обнаружили новый вид орхидеи в тропических лесах Юго-Восточной Азии. Цветок отличается необычной формой лепестков и редким фиолетово-золотым оттенком.",
    },
    {
      id: 2,
      title: "Редкие тюльпаны снова зацвели",
      date: "19 января 2026 г.",
      image:
        "https://avatars.mds.yandex.net/i?id=1d3c969198d163fc444e6568533d318b2c3ef10a2718102b-10636894-images-thumbs&n=13",
      short: "В ботаническом саду удалось восстановить редкий сорт тюльпанов.",
      full: "В ботаническом саду удалось восстановить редкий сорт тюльпанов, считавшийся исчезнувшим.",
    },
    {
      id: 3,
      title: "Новая разновидность кактусов найдена в пустыне",
      date: "19 января 2026 г.",
      image:
        "https://avatars.mds.yandex.net/i?id=255adfa23d30eb86b81b1c083d1cc9dd89c3dac0-13217575-images-thumbs&n=13",
      short: "Исследователи нашли неизвестный вид кактуса.",
      full: "В мексиканской пустыне ученые обнаружили новый вид кактуса, который цветет только ночью.",
    },
  ];

  // Факты
  const factList = [
    "Растения умеют «общаться» между собой, выделяя химические вещества при опасности 🌱",
    "Некоторые орхидеи меняют запах в зависимости от времени суток 🌸",
    "Листья кактусов могут сохранять воду до нескольких месяцев 💧",
    "Розы могут распознавать день и ночь и регулировать открытие бутонов 🌹",
  ];
  const [factIndex, setFactIndex] = useState(0);
  const nextFact = () => setFactIndex((factIndex + 1) % factList.length);

  // Викторина
  const quizQuestions = [
    { question: "Какой цветок король цветов?", options: ["Роза", "Лилия"], answer: "Роза" },
    { question: "Символ чистоты?", options: ["Лилия", "Тюльпан"], answer: "Лилия" },
    { question: "Какой цветок символизирует дружбу?", options: ["Роза", "Гербера"], answer: "Гербера" },
  ];
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const handleQuizClick = (option) => {
    if (option === quizQuestions[currentQuiz].answer) setQuizScore(quizScore + 1);
    setCurrentQuiz(currentQuiz + 1);
  };

  const filteredFlowers = habitatFlowers.filter((f) =>
    f.name.toLowerCase().includes(search?.toLowerCase() || "")
  );

  const popularFlowers = habitatFlowers.slice(0, 6);

  
  useEffect(() => {
    const cards = document.querySelectorAll(".card, .home-flower-card, .hello-card, .fact-day");
    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  return (
    <div className="home">
      <h1 className="home-title">Добро пожаловать в BloomVerse 🌸</h1>

      <Link to="/categories">
        <button className="start-btn">Начать изучать</button>
      </Link>

      {search && (
        <section className="search-results">
          <h2>Результаты поиска</h2>
          <div className="grid">
            {filteredFlowers.map((f) => (
              <div key={f.id} className="card">
                <img src={f.image} alt={f.name} />
                <h3>{f.name}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Новости */}
      <section className="hello">
        <h2>Новости дня</h2>
        <div className="news-grid">
          {newsData.map((item) => (
            <div key={item.id} className="hello-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{expandedId === item.id ? item.full : item.short}</p>
              <button onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}>
                Читать далее
              </button>
            </div>
          ))}
        </div>
      </section>


      <section className="fact-day">
        <h2>Интересный факт 🌱</h2>
        <p>{factList[factIndex]}</p>
        <button onClick={nextFact}>Другой факт</button>
      </section>


      <section className="popular-flowers">
        <h2>Популярные цветы 🌸</h2>
        <div className="home-flowers">
          {popularFlowers.map((flower) => (
            <div key={flower.id} className="home-flower-card">
              <img src={flower.image} alt={flower.name} />
              <h3>{flower.name}</h3>
              <span>{flower.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Викторина */}
      <section className="flower-quiz">
        <h2>Викторина 🌸</h2>
        {currentQuiz < quizQuestions.length ? (
          <>
            <p>
              Вопрос {currentQuiz + 1} из {quizQuestions.length}
            </p>
            <p>{quizQuestions[currentQuiz].question}</p>
            {quizQuestions[currentQuiz].options.map((o) => (
              <button key={o} onClick={() => handleQuizClick(o)}>
                {o}
              </button>
            ))}
          </>
        ) : (
          <p>Ваш результат: {quizScore} / {quizQuestions.length}</p>
        )}
      </section>

      {/* Блок из админки */}
      <section className="home-section admin-flowers-section">
        <h2>🌸 Добавлено администратором</h2>
        {flowers.length === 0 ? (
          <p>Пока нет цветов 🌱</p>
        ) : (
          <div className="home-flowers">
            {flowers.map((flower) => (
              <div key={flower.id} className="home-flower-card">
                <img src={flower.image} alt={flower.name} />
                <h3>{flower.name}</h3>
                <span>{flower.category}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
