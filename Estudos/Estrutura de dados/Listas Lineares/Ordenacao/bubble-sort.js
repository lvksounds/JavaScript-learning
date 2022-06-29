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
    return(arr)
}

let array  = [5, 6, 2, 4, 9, 7, 10];

console.log(bubbleSort(array));