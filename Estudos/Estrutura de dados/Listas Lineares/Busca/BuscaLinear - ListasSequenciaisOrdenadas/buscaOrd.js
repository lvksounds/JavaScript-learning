/* 
Quando a lista ja se encontra ordenada, podemos encerrá-la quando sabemos 
ser inútil continuar; 
ex: procurar o elemento x = 8 na lista abaixo: 
lista = [1, 3, 5, 9, 10, 15]

Ao iniciarmos as comparações da esquerda para a direita, a partir do primeiro elemento, 
podemos encerrar a busca na quarta posição, pois como a lista está ordenada sabemos que x = 8 não pode estar da quarta posição em diante.
*/

// ex: deseja-se buscar um elemento x = 12 no vetor V ja ordenado com N elementos

let lista = [1, 4, 5, 7, 8, 9, 10, 11, 13, 15, 20, 24, 28, 30, 31, 33];

let buscaOrd = (x, V) => {
    let i = 0;
    let BO = false;
    let n = V.length
    
    V[n+1] = x; // sentinela 

    while(V[i] < x) {   // V[I]=X,encontrou o elemento
        console.log(V[i])
        i += 1;         // I=N+1,não encontrou, parou na sentinela
    }
    if((i === n+1) || (V[i] != x)){
        BO = false; // nao pertence
    } else {
        BO = true;
    }
    return BO; 
}

console.log(buscaOrd(28, lista));
