export const getStored = (key) => JSON.parse(localStorage.getItem(key)) || {};
export const toggleStored = (key, id) => {
    const data = getStored(key);
    data[id] = !data[id];
    localStorage.setItem(key, JSON.stringify(data));
    return data;
};