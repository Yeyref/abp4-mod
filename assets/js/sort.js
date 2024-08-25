import { data } from './data.js';

export const sortPokemons = (key, callback) => {
    setTimeout(() => {
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
        callback(sortedData);
    }, 500);
};
