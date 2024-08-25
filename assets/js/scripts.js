import { getPokemon } from './search.js';
import { sortPokemons } from './sort.js';

const form = document.getElementById('searchForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value;

    getPokemon(isNaN(searchTerm) ? searchTerm : parseInt(searchTerm), (error, pokemon) => {
        if (error) {
            resultDiv.innerHTML = `<p>${error}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Pokémon encontrado: ${pokemon.name} (ID: ${pokemon.id}) - Tipos: ${pokemon.types.join(', ')}</p>`;
        }
    });
});

sortPokemons('id', (sortedData) => {
    console.log('Pokémon ordenados por ID:', sortedData);
});

sortPokemons('name', (sortedData) => {
    console.log('Pokémon ordenados por nombre:', sortedData);
});
