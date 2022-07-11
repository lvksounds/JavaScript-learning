/*
Algoritmo de ordenação por seleção

Conceito: encontrar o menor elemento da lista e troca-lo de posição com o primeiro. Repetir o processo a partir do segundo elemento, e assim sucessivamente. 
*/

// Algoritmo 
var lista = [4, 2, 6, 9, 10, 15, 11, 1, -8];

function seletionSort(vetor) {
    let n = vetor.length; 

    for (let i=0; i < n; i++){
        // encontrando o menor numero do array 
        let min = i;
        for(let j = i+1; j < n; j++){
            if(vetor[j] < vetor[min]){
                min = j;
            }
        }
        if (min != i){
            //trocando os elementos
            let tmp = vetor[i];
            vetor[i] = vetor[min];
            vetor[min] = tmp;
        }
    }
    return vetor;
    
}

console.log(seletionSort(lista))
