/*
Pilhas. 
* Conceito - Todo acesso a seus elementos é feito a partir do topo. Quando um elemento novo é introduzido na pilha, ele passa a ser o elemento do topo e o unico elemento que pode ser removido da pilha e o único elemento que pode ser removido da pilha é o elemento do topo.
  - Analogia com uma pilha de pratos. 

* Os elementos da pilha só podem se retirdados na ordem inversa à ordem em que foram introduzidos: o primeiro que sai é ultimo que entrou - LIFO - Last in Firt out. 

*/

/*
Algoritmo de Inserção

- A pilha se encontra armazenada no vetor V que possui N posições; 
- A variável TOPO indica o topo da pilha; 
- Situação em que a pilha está cheia: TOPO === N;
- Situação que ocorre overflow: inserção na pilha com TOPO === N;
- A informação a ser inserida é: VALOR
*/

let lista = new Array(5);


for (let i = 0; i <= lista.length; i++){
  empilha(i, lista);
  console.log(lista);
}

lista = lista.filter(element => {
  if(Object.keys(element).length !== 0){
    return true
  }
  return false;
})
console.log(lista)

let empilha = (valor, pilha) => {
  let M = pilha.length;
  let topo = pilha[0];

  if (topo != M) {
    topo += 1;
    pilha[topo] = valor
  } else {
    console.log("A pilha está cheia - Overflow!")
  }
  return pilha;
}

// console.log(empilha(10, lista))
  
