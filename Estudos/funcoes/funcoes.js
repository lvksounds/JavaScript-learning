// funçoes (definição classica, passagem de parametros padrao, função anonima, armazenamento de funções em arrays e objetos, parametros variaveis, função arrow);
// ref - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions

// Definição classica 
// Uma função sempre retorna um valor.
// Para retornar um valor diferente do padrão, uma função deve ter uma instrução return que especifica o valor a ser retornado. Uma função sem um return retornara um valor padrao.
//No casso de um metodo construtor chamado com a palavra reservada new, o valor padrao é o valor do parametro this. Para todas as outras funções, o valor padrao de retorno é undefined. 

// Se uma função mudar o valor de um argumento, esta mudança nao é refletida globalmente ou na chamada da função. Contudo, referencia de objetos sao valores também, e eles so especiais: se a função muda as propriedades do objeto referenciado, estas mudanças são visiveis fora da função. //ex: 

//declaração da função
function minhaFuncao(objeto){
    objeto.marca = 'Toyota';
}

/*
* Declare a variável 'meucarro';
* crie e inicialize um novo Objeto;
* atribua referência para 'meucarro'
*/

var meucarro = {
    marca: 'Honda',
    modelo: 'Accord',
    ano: 1998
};

// exibe honda
console.log(meucarro);

// chamada que modifica a propriedade marca. 
minhaFuncao(meucarro);

/*
* Exibe 'Toyota' como valor para a propriedade 'marca'
* do objeto, mudado pela função.*/
console.log(meucarro);


// Função anonima ==========================================================
// quando uma função nao possui um nome. Geralmente é atribuida a variaveis para ser chamada.
// ex: 

var show = function(){
    console.log("Função anonima");
};

show();


// Função Arrow ========================================
// Uma expressão arrow function tem uma sintaxe curta e conecta seu valor lexicamente. 
// Estas expressoes de funções são melhor aplicadas para funções que nao sejam métodos, e elas não podem ser usadas como construtoras

/*
([param] [, param]) => {
    instruçoes
 }
 */

// ex: 
// funções mais curtas  

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log("Via função normal:", elements.map(function(element){
    return element.length
}));

// arrow 

console.log("Via arrow function:" , elements.map(element => element.length));



