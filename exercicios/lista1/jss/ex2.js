const btnAdd = document.getElementById("btn1");
const inputNums = document.getElementById("input1");
const imprimeNum = document.getElementById("imprime-num");
const btnCalc = document.getElementById("btn-calc");
const resp = document.getElementById("quad-resp");

let numList = [];
let quadNums = [];

btnAdd.addEventListener("click", (e) => {
  if (inputNums.value != "") {
    numList.push(parseFloat(inputNums.value));
    inputNums.value = "";
    for (let i = 0; i <= numList.length; i++) {
      imprimeNum.innerHTML = `Lista: ${numList.join(" - ")}`;
    }
  }
});

btnCalc.addEventListener("click", () => {
  numList.forEach((num) => {
    num = num * num;
    quadNums.push(num);
  });
  for (let i in quadNums) {
    resp.innerHTML = `Elementos da lista ao quadrado: ${quadNums.join(" - ")}`;
  }
});
