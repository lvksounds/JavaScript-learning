// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1
let numeros  = [];
for (let i = 0; i<3; i++){
    var num = (window.prompt(`Insira o ${i+1}° numero:`));
    numeros.push(num);
}

window.alert(numeros.reverse());










