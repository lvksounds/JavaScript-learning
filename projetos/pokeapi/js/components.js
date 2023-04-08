let components = {
  poke_card: (poke) =>
    `
    <li>
    <div class="poke-card">
      <div class="poke-img-box">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          poke.id > 9 ? "0" + poke.id : "00" + poke.id
        }.png" alt="" class="poke-img-1" />
      </div>
      <div class="poke-desc-1">
        <h4 class="poke-name">${poke.name}</h4>
        <div class="info-btn-div">
          
          <a id="${
            poke.id
          }" class="details-btn" data-modal="modal-one">details </a>
        </div>
        
      </div>
    </div>
  </li>
    
  `,

  pokeDetails: (poke) =>
    `
    <div class="poke-detaisl-container">
      <div id="poke-details-title-div">
        <h3 id="poke-details-title">${poke.name}</h3>
      </div>
      <div class="poke-details-img">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          poke.id > 9 ? "0" + poke.id : "00" + poke.id
        }.png" alt="" class="poke-details-img" />
      </div>
      <div class="status-container">
        <h4>Status</h4>
        <div class="poke-status">
          <div class="status">
            <h5>Height</h5>
            <p>${poke.height}</p>
          </div>
          <div class="status">
            <h5>Weight</h5>
            <p>${poke.weight}</p>
          </div>
          <div class="status">
            <h5>Main abilitie: </h5>
            ${poke.abilities[0].ability.name}
          </div>
          <div class="status">
            <h5>Type</h5>
            ${poke.types[0].type.name}
          </div>
        </div>
      </div>
      
  </div>
  `,
};
