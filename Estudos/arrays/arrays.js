// topicos: criação e impressao, indexação e fatiamento, propriedades e metodos, iteração.
// ref - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// criando um array 

var frutas = ['Maça', 'Banana']; 
console.log(frutas);
console.log(frutas.length); // metodo lenght que retorna o tamanho em inteiros do array 

// acessar um item (index) do array. 

var primeiro = frutas[0];
var ultimo = frutas[1];
console.log(primeiro, ultimo);

//arrays javascript começam com indice zero: o primeiro elemento de um array está na posição 0 e o ultimo elemento está na posição equivalente ao valor da propriedade lenght - 1:
console.log(frutas.length);
console.log(frutas[frutas.length-1]); // imprime o ultimo item do array frutas ('Banana')

// as propriedades 'lenght' e numéricas de um array são conectadas. 
// varios metodos pré-definidos (join, slice, indexOf) levam e, conta o valor da propriedade lenght de um array quando eles sao chamados. 
// Outros métodos (push, splice) também resultam em uma tualização na propriedade lenght do array.

var nomes = [];
nomes.push('Lucas', 'Julia', 'Pedro');

console.log(nomes.length);
console.log();
console.log();

// quando configurar um propriedade num array em que a propriedade é um indice valido do array e este indice está fora do atual limite do array, o array irá crescer para um tamanho grande o suficiente para acomodar o elemento neste indice, e a propriedade lenght do array sera atualizada de acordo com isso. ex: 
nomes[5] = 'Ranna';
console.log(nomes[5]);
console.log(Object.keys(nomes));
console.log(nomes.length);
console.log();

//o array tem 4 dados no momento - 0 - 'Lucas' 1 - 'Julia' 2 - 'Pedro' 3 - undefined 4 - undefined 5 - Ranna 6 - Undefined

// também é possivel alterar a propriedade lenght diretamente: 

nomes.length = 10;
console.log(Object.keys(nomes));
console.log(nomes.length); // tamanho atual do array = 10

console.log();
console.log();


// Métodos

//map, push, pop, unshift, shift, sort, reverse, indexOf, slice, concat, join, toString

//.map() - utilizado quando queremos fazer modificações nos elementos do array. 



// push - adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array

let nums = [];

nums.push(1, 2, 3);
console.log(nums);

// fusão de dois arrays. .apply()

let nums2 = [4, 5, 6];
Array.prototype.push.apply(nums, nums2);

console.log(nums);


///////