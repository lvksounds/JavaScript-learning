// deseja-se buscar um elemento no vetor V com N elementos

let vetor = [1, 4, 5, 7, 8, 9, 10, 11, 13, 15, 20, 24, 28, 30, 31, 33];

let buscaLin2 = (x, V) => {
    let i = 0; 
    let n = V.length; 
    let bl2;

    V[n+1] = x // sentinela

    while(V[i] != x){
        console.log(V[i]);
        i += 1;
    }

    if (i === n+1){ // nao encontrou
        bl2 = false;
    } else { // encontrou: (i != n+1)
        bl2 = true;
    }
    return bl2
}

console.log(buscaLin2(12, vetor));

/*
Analise de pior/melhor caso

Melhor: 1 comparação (ocorre quando V[I] = x). 
Nesse caso o enquanto é abandonado na primeira comparação

Pior: Ocorre quando o elemento x nao pertence a lista, istp é, o elemento x não ocorre nas N primeiras posições. 
Neste caso a sentila garante que V[N+1]=X e são efetuadas N+1 comparações na linha do enquanto.
O Busca Linear 2 tem complexidade O(n)
*/