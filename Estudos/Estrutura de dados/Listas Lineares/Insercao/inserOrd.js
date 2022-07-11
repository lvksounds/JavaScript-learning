/*
Inserção em Listas Ordenadas

- Suponha que o vetor V esteja agora ordenado, e deseja-se inserir o elemento X em V respeitando-se a ordem dos elementos;

- Isto significa que X pode ser inserido no meio do vetor V;

- Algoritmo: 
*/

let vetor = [9, 6, 5, 1, 0, 2, 7, 4];

let insertOrd = (x, array) => {
    let i = 0;
    let n = array.length;
    let j = 0;
    array[n+1] = x
    while(i < x){
        i += 1
    }
    if ((i < n+1) && (array[i] != x)){
        for (j = n; j < i; j--){
            array[j+1] = array[j];
        }
        array[i] = x;
        n = n+1;
    } else {
        if(i = n+1){
            n = n+1;
        } else {
            console.log("elemento ja existe na lista");
        }
    }
    return array;
}

console.log(insertOrd(10, vetor))