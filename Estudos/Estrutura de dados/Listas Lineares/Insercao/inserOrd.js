/*
Inserção em Listas Ordenadas

- Suponha que o vetor V esteja agora ordenado, e deseja-se inserir o elemento X em V respeitando-se a ordem dos elementos;

- Isto significa que X pode ser inserido no meio do vetor V;

- Algoritmo: 
*/

let insertOrd = (x, array) => {
    // proteção de overflow
    /*
    se (n = m){
        escreva("memoria cheia - overflow");
    }

    senao:
    */
    let n = array.length; 
    let i = 0
    array[n+1] = x; // sentinela

    while(array[i] < x){
        if((i < n+1) && (array[i] != x) {
            for(let j = n)
        })
    }
}