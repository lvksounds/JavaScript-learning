const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

const getBtn = document.getElementById("get-data");
const pokemonList = document.getElementById("pokemons-list");
let pokemonsList = [];
let pokemonInfo = {};

let pokemonsNameFetcher = async (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => (pokemonsList = json.results));
};

let pokemonsInfoFetcher = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => (pokemonInfo = json));
};

window.addEventListener("load", () => {
  pokemonsNameFetcher("https://pokeapi.co/api/v2/pokemon");
});

getBtn.addEventListener("click", (ev) => {
  pokemonsList.forEach(
    (pokemon) =>
      (getElement("#pokemons-names").innerHTML += components.namesList(
        pokemon.name
      ))
  );
  getElements(".pokemon").forEach((poke) =>
    poke.addEventListener("click", (ev) => {
      pokemonsInfoFetcher(`https://pokeapi.co/api/v2/pokemon/${ev.target.id}`);
    })
  );
});
