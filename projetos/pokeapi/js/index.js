const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

const searchBtn = getElement("#search-btn");
const pokesContainer = getElement("#poke-list");

let pokesList = [];
let pokesNamesList = [];
let pokemonInfo = {};

// fetchs ao carregar a pagina;

window.addEventListener("load", () => {
  //loadPokesCards();
  loadPokesCards();
});
// let pokemonsNameFetcher = async (url) => {
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((json) => json.results);
// };

// let pokemonsInfoFetcher = async (url) => {
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((json) => json);
// };

let loadPokes = async () => {
  const pokeData = [];
  const pokeNames = await fetcher("https://pokeapi.co/api/v2/pokemon");
  for (const pokemon of pokeNames.results) {
    pokeData.push(await fetcher(pokemon.url));
  }
  return pokeData;
};

let fetcher = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

let loadPokesCards = async () => {
  let pokes = await loadPokes();
  console.log(pokes);
  pokes.forEach((poke) => {
    pokesContainer.innerHTML += components.poke_card(poke);
  });
};
