/*
Filas.

- Listas em que todas as inserções ocorrem em uma das extremidades e todas as remoções ocorrem na outra; 
- Na fila o primeiro elemento que entra é o primeiro elemento que sai (estratégia FIFO - First In First Out), isto é, a ordem das inserções coincide com a ordem das remoções.; 

          [A, B, C, D, E, F]
          [0] - INICIO DA FILA
                          [-1] - FINAL DA FILA

Inicio da fila: extremidade onde ocorrem as remoções;
Final da fila: extremidade onde ocorrem as inserções.

Em alocação sequencial utilizam-se vetores e uma váriavel indica o inicio da fila (frente) e uma variavel indica o fina da fila (retaguarda); 
*/

/*
Algoritmos de inserção e remoção em filas. 
- Mais elaborados do que no caso de pilhas;
- uso de duas variávei (f = frente e r = retaguarda); 
- situação em que a fila está vazia: f = r = 0; 
- em uma inserção, r é incrementado e em uma remoção, f é incrementado, exceto quando a fila se tornar vazia;

- Consequencia: a fila tende a se mover para a direita. esta situação pode provocar a ocorrencia de flasos overflows
*/

let fila = [];

fila.length = 5; 

// for(let i = 0; i < fila.length; i++) {
//   fila[i] = i;
// }

console.log(fila);

let enfilera = (vetor, valor) => {
  let f = vetor [0];
  let r = vetor[-1];
  let prov = (r%f)+1;
  console.log(vetor[f], vetor[r], vetor[prov])
  // if (prov != f){
  //   r = prov;
  //   vetor[r] = valor;

  //   if(f == 0){
  //     f = 1
  //   }
  // } else {
  //   console.log("A fila está cheia - overflow"); 
  // }
  return vetor
}

// console.log(enfilera(fila, 10))
// console.log(enfilera(fila, 11))

console.log(enfilera(fila, 10))