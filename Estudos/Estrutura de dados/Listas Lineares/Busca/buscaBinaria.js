/*
Algoritmo de busca binaria: 
- Empregada apenas em listas ordenadas cujo principio é percorrer a lista como se folheia uma lista telefonica:

- Abrir lista no meio;
- Se a informação procurada encontra-se antes da página que estamos olhando, passamos a procurá-la na primeira metade da lista, desprezando a segunda metade;
- Se, pelo contrário, a informação encontra-se depois da pagina que estamos olhando, passamos a procurá-la na segunda metade da lista, desprezando a primeira metade. 

- Abrimos a lista novamente, no meio da metade escolhida e assim sucessivamente. 

*/

let lista = [1, 4, 5, 7, 8, 9, 10, 11, 13, 15, 20, 24, 28, 30, 31, 33];

let buscaBin = (array, x) => {
  let inf = 0;
  let n =  array.length;
  let sup = n;
  let bb = false;

  // console.log(inf, n, sup, bb)

  while(inf <= sup){
    
    let meio = ((inf+sup)/2)

    if(array[meio] === x){
      bb = true;        // elemento foi encontrado
      inf = sup + 1;    // força o fim do loop
      console.log("O elemento pertence ao conjunto")
    } else {
      // console.log(x, array[meio], inf, sup)
      if (array[meio] < x){
        inf = meio + 1;   // descartar metade anterior
      } else {
        sup = meio - 1;   // descartar metade posterior
      }
    }
  }
  return bb;
}

console.log(buscaBin(lista, 11))