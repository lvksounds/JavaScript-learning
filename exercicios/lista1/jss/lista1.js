// exercicio 1

const inputNotas = document.getElementById("input1");
const botao1 = document.getElementById("btn1");
const listaOutput = document.getElementById("lista-notas");
const respSoma = document.getElementById("soma-resp");
const respMedia = document.getElementById("media-resp");
const btnSoma = document.getElementById("btn-soma");
const btnMedia = document.getElementById("btn-media");

let soma = 0;
let media = 0;
let listaNotas = [];

// envia notas pro array e exibe
botao1.addEventListener("click", (e) => {
  if (inputNotas.value != "") {
    listaNotas.push(parseFloat(inputNotas.value));
    inputNotas.value = "";
    for (let i = 0; i < listaNotas.length; i++) {
      listaOutput.innerHTML = `${listaNotas.join(" - ")}`;
    }
  } else {
    alert("Campo vazio. Insira uma nota!");
    inputNotas.focus();
  }
});

//soma das notas

btnSoma.addEventListener("click", () => {
  listaNotas.forEach((nota) => {
    soma += nota;
  });
  respSoma.innerHTML = `Soma das notas: ${soma}`;
});

btnMedia.addEventListener("click", () => {
  media = soma / listaNotas.length;
  respMedia.innerHTML = `Média do aluno: ${media}`;
});
