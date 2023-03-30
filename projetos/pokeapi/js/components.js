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

  pokeDetails: (poke) => `
    <div class="poke-detaisl-container">
    <h3 id="poke-details-title">Bulbasaur</h3>
    <div class="poke-details-img">
      <img src="/img/pokes/1.png" alt="" class="poke-details-img" />
    </div>
    <div class="status-container">
      <h4>Status</h4>
      <div class="poke-status">
        <div class="status">
          <h5>Height</h5>
          <p>0.7</p>
        </div>
        <div class="status">
          <h5>Category</h5>
          <p>seed</p>
        </div>
        <div class="status">
          <h5>Weight</h5>
          <p>seed</p>
        </div>
        <div class="status">
          <h5>Abilities</h5>
          <p>Overgrow</p>
        </div>
        <div class="status">
          <h5>Type</h5>
          <p>grass</p>
        </div>
      </div>
    </div>
  </div>
  
  `,
};
