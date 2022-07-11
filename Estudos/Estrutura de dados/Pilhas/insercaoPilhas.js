/*
Algritmo de Inserção 

- A pilha se encontra armazenada no vetor P que possui N posições; 
- A variável TOPO indica o topo da pilha;
- Situação em que a pilha está cheia: TOPO = M;
- Situação onde ocorre overflow: inserção na pilha com TOPO = M;
- A informação a ser inserida é VALOR
*/

let lista = [3, 4];

let empilha = (vetor, valor) => {
  let topo = vetor[0];
  let M = vetor.length;

  if(topo != M) {
    topo = topo + 1;
    vetor[topo] = valor;
  } else {
    console.log("A pilha está cheia - overflow!")
  }
  return vetor;
}

console.log(empilha(lista, 10))