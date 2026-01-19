const KEY = "favoriteFlowers";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function isFavorite(id) {
    return getFavorites().includes(id);
}

export function toggleFavorite(id) {
    const favs = getFavorites();

    if (favs.includes(id)) {
        localStorage.setItem(
            KEY,
            JSON.stringify(favs.filter((f) => f !== id))
        );
    } else {
        localStorage.setItem(KEY, JSON.stringify([...favs, id]));
    }
}