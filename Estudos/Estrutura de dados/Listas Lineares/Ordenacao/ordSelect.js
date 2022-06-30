/*
Algoritmo de ordenação por seleção

Conceito: encontrar o menor elemento da lista e troca-lo de posição com o primeiro. Repetir o processo a partir do segundo elemento, e assim sucessivamente. 
*/

// Algoritmo 
var lista = [-8, 2, 6, 9, 10, 15, 11, 1];

let selectionSort = (vetor) => {
    let i = 1;
    let j = 0;
    let menor = 0;
    let aux = 0;
    let n = vetor.length
    for (i = 0; i < n-1; i++) {
        console.log(vetor[i]);
        menor = i
        for (j = i+1; j < n; j++){
            if (vetor[j] < vetor[menor]){
                menor = j
            }
        }
        aux = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor = aux];
    }
    return vetor;
};

console.log(selectionSort(lista));
