import { data } from './data.js';

export const getPokemon = (searchTerm, callback) => {
    setTimeout(() => {
        const result = data.find(pokemon => {
            if (typeof searchTerm === 'number') {
                return pokemon.id === searchTerm;
            } else if (typeof searchTerm === 'string') {
                return pokemon.name.toLowerCase() === searchTerm.toLowerCase();
            }
        });
        if (result) {
            callback(null, result);
        } else {
            callback('Pokémon no encontrado', null);
        }
    }, 1000);
};