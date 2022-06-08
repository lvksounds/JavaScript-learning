// Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor.
// Ao final, exiba o array e o array ao contrário (generalização do script anterior).

let numeros  = [];
let tamArr = parseInt(window.prompt("Digite o tamanho do array"))

for (let i = 0; i<tamArr; i++){
    var num = (window.prompt(`Insira o ${i+1}° numero:`));
    numeros.push(num);
}

window.alert(`Array: ${numeros}, array reverso ${numeros.reverse()}`);