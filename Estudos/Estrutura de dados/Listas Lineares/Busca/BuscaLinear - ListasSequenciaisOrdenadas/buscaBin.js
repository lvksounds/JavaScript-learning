/* Listas Binarias
 Empregada apenas em listas ORDENADAS cujo princípio é percorrer a lista como se folheia uma lista telefonica:

 - Abrir a lista no meio;
 - Se a informação procurada encontra-se antes da página que estamos olhando, passamos a procura-la na primeira metade da lista, desprezando a segunda metade e vice-versa;

Vairaveis usadas na busca primaria: 
INF e SUP = variaveis que marcam o inicio e o fim da lista formada pelos elementos sendo atualemnte considerados. 

MEIO = variavel que marca a posição do elemento a ser comparado

exemplo: 

inf = 1; sup = 16; meio = 8

lista = [1, 4, 5, 7, 8, 9, 10, 11, 13, 15, 20, 24, 28, 30, 31, 33];
*/

// ex: 

let lista = [1, 4, 5, 7, 8, 9, 10, 11, 13, 15, 20, 24, 28, 30, 31, 33];

let buscaBin = (x, array) => {
    let inf = 0;
    let sup = array.length;
    let BB = false; 

    while(inf <= sup) {
        let meio = (inf + sup)/2;
    
        
        if (array[meio] === x){
            BB = true;          // elemento encontrado
            inf = sup + 1;       // para forçar o termino do while
            console.log("O elemento pertence ao conjunto")
        } else {
            if(array[meio] < x){
                inf = meio + 1;     // descartar metade anterio
            } else {
                sup = meio - 1;     // descartar metade posterior
            }
        }
    }
    return BB;
}

console.log(buscaBin(33, lista));


/* 
Analise melhor e pior caso: 

- Melhor caso: 1 comparação (ocorre quando V[meio] = x);
- Pior caso: ocorre quando o elemento procurado é o ultimo que resta na lista de elementos possiveis ou quando o elemento procurado não está na lista. Nessas situações, o pior caso ocorre quando a busca prossegue até que a lista se resuma a um único elemento.
*/

// Calculando o numero de comparações que a busca binaria realiza no pior caso (até que a lista tenha um unico elemento): 
// 1° iteração .... n elementos na lista
// 2° iteração .... n/2 elementos na lista
// ...
// ultima iteração .... 1 elemento na lista
