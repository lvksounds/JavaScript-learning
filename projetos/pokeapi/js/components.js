let components = {
  poke_card: (poke) =>
    `
    <li>
    <div class="poke-card">
      <img src="/img/pokes/${poke.id}.png" alt="" class="poke-img-1" />
      <div class="poke-desc-1">
        <h4>${poke.name}</h4>
        <p>${poke.id}</p>
      </div>
    </div>
  </li>
    
  `,
};
