const btnStart = document.getElementById("start");
const numeroSorteado = document.getElementById("numero-sorteado");
const contagemRegressivaDiv = document.getElementById("contagem-regressiva");

function SorteiaNumero() {
  let numero = Math.floor(Math.random() * 100);
  return numero.toString();
}

async function contagemRegressiva() {
  numeroSorteado.style.display = "none";
  contagemRegressivaDiv.style.display = "block";
  contagemRegressivaDiv.innerHTML = 3;
  return await new Promise((res) => {
    let contador = 3;
    const interval = setInterval(() => {
      if (contador > 1) {
        contador -= 1;
        contagemRegressivaDiv.innerHTML = contador;
      } else {
        contagemRegressivaDiv.style.display = "none";
        numeroSorteado.style.display = "block";
        numeroSorteado.classList.add("animation");
        res("Sorteia!");
        clearInterval(interval);
      }
    }, 1000);
  });
}

btnStart.addEventListener("click", async () => {
  console.log(await contagemRegressiva());
  numeroSorteado.innerHTML = SorteiaNumero();
});
