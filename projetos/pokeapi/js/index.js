const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

const searchBtn = getElement("#search-btn");
const pokesContainer = getElement("#poke-list");
const modalContainer = getElement(".modal-container");

let pokesList = [];
let pokesNamesList = [];
let pokemonInfo = {};

// fetchs ao carregar a pagina;

window.addEventListener("load", () => {
  loadPokesCards();
});

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

// carrega os pokemons na area inicial

let loadPokesCards = async () => {
  let pokes = await loadPokes();
  pokes.forEach((poke) => {
    pokesContainer.innerHTML += components.poke_card(poke);
    const modals = document.querySelectorAll("[data-modal]");
    modalContainer.innerHTML = "";
    modals.forEach(async (modalBtn) => {
      modalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const modal = document.getElementById(modalBtn.dataset.modal);
        modal.classList.add("open");
        loadPokesDetails(event.target.id);
        // corrigir botao de fechar
        const exits = getElements(".modal-exit");
        exits.forEach((exit) => {
          exit.addEventListener("click", (ev) => {
            ev.preventDefault();
            console.log("ai pai para");
            modal.classList.remove("open");
          });
        });
      });
    });
  });
};

//finalizar funçao que monta o modal

let loadPokesDetails = async (pokeid) => {
  let pokes = await loadPokes();
  let pokemon = {};
  for (const poke of pokes) {
    pokeid == poke.id ? (pokemon = poke) : null;
    pokeid == poke.id ? (pokemonInfo = poke) : null;
  }
  console.log(pokemon);
  let buildModal = (modalContainer.innerHTML = components.pokeDetails(pokemon));
  return buildModal;
};
