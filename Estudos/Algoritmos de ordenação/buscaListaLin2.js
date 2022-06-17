let lista = [2, 5, 10, 3, 7, 8, 1, 9];


let buscaE = (vetor, x) => {
    let i = 1;
    let achou = false;
    vetor[vetor.length+1] = x

    while(vetor[i] != x){
        i += 1;
    }
    if (i == vetor.length+1){
        achou = false;
    } else {
        achou = true;
    }
    return achou; 
}

console.log(buscaE(lista, 10));

