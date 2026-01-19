import { useState } from "react";
import { Link } from "react-router-dom";
import habitatFlowers from "../data/habitatFlowers.json";
import "./Home.css";

export default function Home({ search }) {
  const [expandedId, setExpandedId] = useState(null);


  const newsData = [
    {
      id: 1,
      title: "Открытие нового вида орхидей",
      date: "19 января 2026 г.",
      image: "https://avatars.mds.yandex.net/i?id=2a0000019b85ce869565d58beaab259bfa23-1381050-fast-images&n=13",
      short: "Ботаники обнаружили новый вид орхидеи в тропических лесах Юго-Восточной Азии.",
      full: "Ботаники обнаружили новый вид орхидеи в тропических лесах Юго-Восточной Азии. Цветок отличается необычной формой лепестков и редким фиолетово-золотым оттенком.",
    },
    {
      id: 2,
      title: "Редкие тюльпаны снова зацвели",
      date: "19 января 2026 г.",
      image: "https://avatars.mds.yandex.net/i?id=1d3c969198d163fc444e6568533d318b2c3ef10a2718102b-10636894-images-thumbs&n=13",
      short: "В ботаническом саду удалось восстановить редкий сорт тюльпанов.",
      full: "В ботаническом саду удалось восстановить редкий сорт тюльпанов, считавшийся исчезнувшим. Ученые использовали современные методы селекции и ухода.",
    },
    {
      id: 3,
      title: "Новая разновидность кактусов найдена в пустыне",
      date: "19 января 2026 г.",
      image: "https://avatars.mds.yandex.net/i?id=255adfa23d30eb86b81b1c083d1cc9dd89c3dac0-13217575-images-thumbs&n=13",
      short: "Исследователи нашли неизвестный вид кактуса в мексиканской пустыне.",
      full: "В мексиканской пустыне ученые обнаружили новый вид кактуса с уникальной структурой стебля и необычными цветами, которые открываются только ночью.",
    },
  ];


  const factData = {
    id: 1,
    title: "Интересный факт дня",
    image: "https://avatars.mds.yandex.net/i?id=0af155d6ca8f37f4962c951c98bc8178badb1ab4-10471586-images-thumbs&n=13",
    text: `Слепые и глухие растения «разговаривают» друг с другом.
Некоторые растения, например, клевер или подсолнух, выпускают химические вещества в воздух или через корни, когда их атакуют насекомые или болезни. Эти «сигналы тревоги» предупреждают соседние растения — и те начинают укреплять свои защитные механизмы!
То есть растения как будто шепчут друг другу: «Эй, тут опасно, приготовься!» 😲`,
    date: "8 января 2026 г.",
  };

 
  const quizQuestions = [
    { question: "Какой цветок известен как 'король цветов'?", options: ["Роза", "Тюльпан", "Лилия", "Гвоздика"], answer: "Роза" },
    { question: "Какой цветок символизирует чистоту?", options: ["Ромашка", "Лилия", "Орхидея", "Пион"], answer: "Лилия" },
    { question: "Какой цветок называют 'солнечным'?", options: ["Подсолнух", "Нарцисс", "Роза", "Гиацинт"], answer: "Подсолнух" },
    { question: "Какой цветок используется в парфюмерии?", options: ["Роза", "Тюльпан", "Сирень", "Анютины глазки"], answer: "Роза" },
    { question: "Какой цветок открывается только ночью?", options: ["Лотос", "Кактус цветущий", "Ночная фиалка", "Орхидея"], answer: "Ночная фиалка" },
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const handleQuizClick = (option) => {
    if (option === quizQuestions[currentQuiz].answer) {
      setQuizScore(quizScore + 1);
    }
    setCurrentQuiz(currentQuiz + 1);
  };

  const animalData = {
    id: 1,
    name: "Эдельвейс",
    image: "https://avatars.mds.yandex.net/i?id=3fda1ee7fede2f5fca39248a9b9b0b00bd42865a-12422165-images-thumbs&n=13",
    habitat: "Горные склоны Кавказа и Алтая, каменистые почвы на высоте 1500–3000 м",
    status: "Редкий и охраняемый вид",
    description: "Символ альпинистов и горных регионов, цветок с белыми пушистыми лепестками, охраняется законом.",
  };

  const filteredFlowers = habitatFlowers.filter(flower => {
    const flowerName = flower?.name?.toLowerCase() || "";
    const searchTerm = search?.toLowerCase() || "";
    return flowerName.includes(searchTerm);
  });

  return (
    <div className="home">
      <h1 className="home-title">Добро пожаловать в BloomVerse  🌸</h1>

      <Link to="/categories">
        <button className="start-btn">Начать изучать</button>
      </Link>

   
      {search && (
        <section className="search-results">
          <h2>Результаты поиска для: "{search}"</h2>
          <div className="grid">
            {filteredFlowers.length > 0 ? (
              filteredFlowers.map(f => (
                <div key={f.id} className="card">
                  <img
                    src={f.image || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                    alt={f.name}
                  />
                  <h3>{f.name}</h3>
                  <p>{f.description}</p>
                </div>
              ))
            ) : (
              <p>Ничего не найдено 😿</p>
            )}
          </div>
        </section>
      )}


      <section className="hello">
        <h2>Новости дня</h2>
        <div className="news-grid">
          {newsData.map(item => (
            <div key={item.id} className="hello-card">
              <img src={item.image} alt={item.title} />
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{expandedId === item.id ? item.full : item.short}</p>
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="green-btn"
              >
                {expandedId === item.id ? "Свернуть" : "Читать далее →"}
              </button>
            </div>
          ))}
        </div>
      </section>

     
      <section className="fact-day">
        <h2>{factData.title}</h2>
        <div className="card">
          <img src={factData.image} alt="Факт дня" />
          <div className="card-content">
            <p>{factData.text}</p>
            <span className="date">{factData.date}</span>
          </div>
        </div>
      </section>

    
      <section className="animal-day">
        <h2>Лепестки дня</h2>
        <div className="card">
          <img src={animalData.image} alt={animalData.name} />
          <div className="card-content">
            <h3>{animalData.name}</h3>
            <p>🌍 {animalData.habitat}</p>
            <p>⚠️ {animalData.status}</p>
            <p>{animalData.description}</p>
          </div>
        </div>
      </section>

   
      <section className="flower-quiz">
        <h2>Викторина по цветам 🌸</h2>
        {currentQuiz < quizQuestions.length ? (
          <div className="quiz-card">
            <h3>Вопрос {currentQuiz + 1} из {quizQuestions.length}</h3>
            <p>{quizQuestions[currentQuiz].question}</p>
            <div className="quiz-options">
              {quizQuestions[currentQuiz].options.map(option => (
                <button key={option} onClick={() => handleQuizClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-card">
            <h3>Викторина окончена!</h3>
            <p>Вы ответили правильно на {quizScore} из {quizQuestions.length} вопросов.</p>
          </div>
        )}
      </section>
    </div>
  );
}
