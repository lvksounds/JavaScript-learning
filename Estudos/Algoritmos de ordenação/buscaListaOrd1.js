let lista = [2, 5, 10, 3, 7, 8, 1, 9];

const buscaOrd1 = (vetor, x) => {
    let i = 1; 
    let n = vetor.lentgh;
    vetor[n+1] = x
    let achou = false

    while (vetor[i] < x) {
        i += 1;
    }
    if ((i == n+1) || (v[i] != 0)){
        achou = false
    } else {
        achou = true
    }
    return achou
}

console.log(buscaOrd1(lista, 3))