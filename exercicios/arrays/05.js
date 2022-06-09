//faça uma funçao que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função a mão. 

// Método bubble sort

let array = [];


// coleta de dados pelo botao
function pegaNum(){
    let txt = document.querySelector('p');
    let num = document.querySelector('input').value;
    
    array.push(parseInt(num));
    txt.innerHTML = `${array}`
    document.querySelector('input').value='';
}


// ordenação do array Bubble Sort
function bubbleSort(arr = array){
    let tam = arr.length;
    let aux;
    for (let j = 0; j<tam-1; j++) {
        for(let i = 0; i<tam-1; i++){ // nao precisamos ir ate o ultimo item da lista, pois nao havera mais comparações a serem feitas.
            if (arr[i] > arr[i+1]){
                //troca de elementos nas posições i e i+1
               aux = arr[i+1];
               arr[i+1] = arr[i]
               arr[i] = aux
            }
        }
    }
    let txt = document.getElementById('imprimeArray');

    txt.innerHTML = `Array ordenado com metodo bubble Sort: ${arr}`
}

