export async function getFlowers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                    id: 1,
                    name: "Лотос",
                    category: "Красная книга",
                    habitat: "Водоёмы",
                    image: "/images/lotus.png"
                },
                {
                    id: 2,
                    name: "Эдельвейс",
                    category: "Горные",
                    habitat: "Горы"
                }
            ]);
        }, 1200);
    });
}