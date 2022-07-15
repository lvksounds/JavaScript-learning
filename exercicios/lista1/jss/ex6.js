const nomes = document.getElementById("name-field");
const exibBtn = document.getElementById("btnExib");
const printDados = document.getElementById("exibicao");
let namesList = [];
let nomesInvertidos = [];

nomes.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && nomes.value != "") {
    namesList.push(nomes.value);
    nomes.value = "";
    console.log(namesList);
  }
});

exibBtn.addEventListener("click", () => {
  namesList.forEach((name) => {
    nomesInvertidos.push(name.split("").reverse().join(""));
  });
  for (let i = 0; i < nomesInvertidos.length; i++) {
    printDados.innerHTML = `${nomesInvertidos.join(" - ")}`;
  }
});
