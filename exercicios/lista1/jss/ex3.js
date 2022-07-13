const btnAdd = document.getElementById("btn1");
const inputNums = document.getElementById("input1");
const imprimeNum = document.getElementById("imprime-num");
const btnCalc = document.getElementById("btn-calc");
const resp = document.getElementById("quad-resp");

let listaNums = [];
let maiorNumero = 0;
btnAdd.addEventListener("click", () => {
  if (inputNums.value != "") {
    listaNums.push(parseFloat(inputNums.value));
    inputNums.value = "";

    for (let i = 0; i <= listaNums.length; i++) {
      imprimeNum.innerText = `${listaNums.join(" - ")}`;
    }
  }
});

btnCalc.addEventListener("click", () => {
  for (let i = 0; i < listaNums.length; i++) {
    if (listaNums[i] > maiorNumero) {
      maiorNumero = listaNums[i];
    }
  }
  resp.innerHTML = `${maiorNumero}`;
});

// let list2 = [11, 44, 2, 57, 3, 87, 88];
// let numM = 0;
// for (let i = 0; i < list2.length; i++) {
//   if (list2[i] > numM) {
//     numM = list2[i];
//   }
// }
// console.log(numM);
