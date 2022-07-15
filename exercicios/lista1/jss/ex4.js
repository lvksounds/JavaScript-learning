const inputData = document.getElementById("input-field");
const showAges = document.getElementById("imprime-idades");
const calcBtn = document.getElementById("calc-btn");
const resp = document.getElementById("imprime-calculo");

let ageList = [];
let adultList = [];
let notAdultList = [];

inputData.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault;
    ageList.push(parseInt(inputData.value));
    inputData.value = "";

    for (let i = 0; i <= ageList.length; i++) {
      showAges.innerHTML = `<b>Idades:</b> ${ageList.join(" - ")}`;
    }
  }
});

calcBtn.addEventListener("click", () => {
  for (let i in ageList) {
    if (ageList[i] >= 18) {
      adultList.push(ageList[i]);
    } else {
      notAdultList.push(ageList[i]);
    }
  }
  resp.innerHTML = `<b>Quantidade de pessoas maiores de 18:</b> ${adultList.length}.
  <br>
  <b>Quantidade de pessoas menores de 18:</b> ${notAdultList.length}.
  `;
});
