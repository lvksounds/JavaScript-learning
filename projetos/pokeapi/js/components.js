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
        <p>
          ${poke.types[0].type.name}
        </p>
        
        <a id="${poke.id}" data-modal="modal-one">details</a>
        
      </div>
    </div>
  </li>
    
  `,
};
