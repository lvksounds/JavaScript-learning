const genre = document.getElementById("genre-field");
const age = document.getElementById("age-field");
const height = document.getElementById("height-field");
const sendBtn = document.getElementById("btn-send");
const dataImpress = document.getElementById("imprimeData");
const numPess = document.getElementById("pessoasNum");
const impressao = document.getElementById("impressao");

let genreList = [];
let ageList = [];
let heightList = [];
let contPess = 0;

sendBtn.addEventListener("click", (e) => {
  const inputs = document.querySelectorAll(
    "#genre-field, #age-field, #height-field"
  );
  if (inputs.values != "") {
    genreList.push(genre.value);
    ageList.push(parseFloat(age.value));
    heightList.push(parseFloat(height.value));
  } else {
    alert("Preencha todos os campos");
  }

  inputs.forEach((input) => {
    input.value = "";
  });
  contPess++;
  numPess.innerHTML = `Numero de pessoas: ${contPess}`;
  console.log(heightList);
});

let totalMasc = 0;
let totalFem = 0;
let moreTall = 0;
let moreTallGenre = "";

function imprimeDados() {
  for (let i = 0; i <= 5; i++) {
    if (genreList[i] === "Masculino") {
      totalMasc++;
    } else if (genreList[i] === "Feminino") {
      totalFem++;
    }
    if (heightList[i] > moreTall) {
      moreTall = heightList[i];
      moreTallGenre = genreList[i];
    }
    impressao.innerHTML = `<b>Total de pessoas do sexo masculino: ${totalMasc}</b>
  <br>
  <b>Total de pessoas do sexo feminino: ${totalFem}</b>
  <br>
  <b>Maior altura e seu genero: ${moreTall}cm, ${moreTallGenre}</b>
  `;
  }
}

dataImpress.addEventListener("click", () => {
  imprimeDados();
});
