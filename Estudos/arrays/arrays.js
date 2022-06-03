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


// Métodos ====================================================================================

//, push, pop, unshift, shift, sort, reverse, indexOf, slice, concat, join, toString

// push - adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array

let nums = [];

nums.push(1, 2, 3);
console.log(nums);

// fusão de dois arrays. .apply()

let nums2 = [4, 5, 6];
Array.prototype.push.apply(nums, nums2);

console.log(nums);
console.log();

// .pop() - remove o ultimo elemento de um array e retorna aquele elemento. 

let arr = ['preciso', 'descansar'];
console.log("ultimo elemento do array: " + arr.pop());
console.log("array original apos usar o metodo pop: " + arr);
console.log();
//arr.push('descansar');


// unshift - esse metodo adiciona um ou mais elementos no inicio de um array e retorna esse numero de elementos (propriedade length) atualizado.

arr.unshift('eu');
console.log(arr);
arr.unshift(['euuu', 'sim, ']);
console.log(arr);

// shift - o metodo shift() remove o primeiro elemento de um array e retorna esse elemento, muda o tamano (length) do array. 

arr.shift();
console.log(arr);
console.log();

// sort(); - o metodo sort ordena os elementos do proprio array e retonra o array. A ordenação não é necessariamente estavél. A ordenação padrao é de acordo com a pontuação de código unicode. 

// sintaxe - arr.sort([funcaoDeComparacao]); 
// paramentros - funcaoDeComparacao: especifica uma função que define a ordenação. Se omitido, o array é ordenado de acordo com a pontuação unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.
let letras = ['d', 'c', 'a', 'b'];
let numeros = [3, 5, 1, 2, 4];

letras.sort();
numeros.sort();

console.log(letras, numeros);
console.log();

// .reverse(); - o metodo reverse inverte os elementos de um array, o primeiro item se torna o ultimo e o ultimo se torna o primeiro. 

let arr2 = ['primeiro', 'segundo', 'terceiro', 'quarto']; 

arr2.reverse();
console.log(arr2);

// .indeOf() - retorna o primeiro indice em que o elemento passado como parametro pode ser encontrado, retorna -1 caso o mesmo nao esteja presente 

console.log(numeros.indexOf(1));

// slice() - retorna uma cópia de parte de um array a partir de um subarray criado entre as posições de inicio e fim (fim nao é necessario) de um array. O array original náo é modificado.

// Parametros:
    // inicio - indice baseado em zero no qual se inicia a extração.

let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 19]; 

let corte = pares.slice(1,4); // extrai do segundo até o quarto elemento
console.log(corte);

corte = pares.slice(4, 8); // 10 ate 18
console.log(pares);

console.log();


// .concat() - retorna um novo array contendo todos os arrays ou valores passados como parametros. 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);

console.log(array3); // = [1, 2, 3, 4, 5, 6]; 
console.log();


// .join() - junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string. 
// parametros (separador.) - especifica uma string para separar cada elemento adjacente do array. O separador é convertido em uma string se necessário. Se omitido, os elementos do array são separados com uma virgula (",").Se o separador for uma string vazia, todos os elementos sao juntados sem nenhum caracter entre eles

let palavras = ['vou', 'juntar', 'tudo', 'isso'];

console.log(palavras.join()); // sem parametro, separa com uma ","
console.log(palavras.join('')); // junta tudo. 

console.log(); 

// toString(); - Para obejtos do tipo array, o metodo toString() concatena todos os valores em apenas uma string. 

let names = ['Lucas', 'debora', 'pedro'];
let namesNovos = names.toString();

console.log(namesNovos);