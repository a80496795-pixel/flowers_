export const flowersNews = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);

    return {
        id: i + 1,
        title: `Цветочный факт №${i + 1}`,
        image: `/flowers/flower${(i % 6) + 1}.jpg`,
        short: "Учёные обнаружили удивительное свойство цветочных растений.",
        full: "Учёные обнаружили удивительное свойство цветочных растений. Новые исследования показывают, что некоторые виды цветов способны чувствовать изменения температуры и влажности, адаптируя рост и цветение. Эти открытия помогают сохранять редкие виды и вдохновляют селекционеров по всему миру.",
        date: date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
    };
});