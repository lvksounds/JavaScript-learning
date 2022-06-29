// Busca linear 1 em listas sequenciais: 

// deseja-se buscar um elemento no Vetor V com N elementos; 
// Retorna true se o elemento for encontrado e false, caso contrario. 

let lista = [1, 4, 5, 7, 8, 9, 10, 11, 13, 15, 20, 24, 28, 30, 31, 33];

let buscaLinear = (x, array) => {
    let i = 0;
    let bl1 = false; 
    let n = array.length;

    while(i <= n){
        console.log(array[i])
        if(array[i] === x){ // elemento encontrado
            bl1 = true;
            i = n + 1;
        } else {
            i += 1 // busca prossegue
        }
    }
    return bl1
}

console.log(buscaLinear(12, lista));

/*
Analise de melhor e pior caso. 

Melhor caso:  uma comparação que ocorre quando o V[i] = x

Pior caso: ocorre quando o elemento X nao pertence a lista ou quando V[N] = X.
Em ambos os casos o algoritmo é forçado a fazer N comparações.
*/