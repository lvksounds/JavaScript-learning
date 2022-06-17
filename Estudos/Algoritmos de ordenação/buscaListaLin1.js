let lista = [2, 4, 9, 5, 3];

let num = 2;

let busca = (vetor, x) => {
    let achou = false;
    let i = 0; 

    while (i < vetor.length) {
        if (vetor[i] = x){
            achou = true;
            i = x + 1;
            return achou; 
        }
        else {
            i += 1
        }
    } return achou
}

console.log(busca(lista, num))