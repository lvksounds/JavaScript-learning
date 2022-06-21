// ref - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#using_parenthesized_substring_matches

// Expressoes regulares são padrões utilizados para selecionar combinações de caracteres em uma string. 
// Em JS expressoes regulares também são objetos - Elas podem ser utilizadas com os métodos exec e test do objeto RegExp, e com os métodos match, replace, search, e split do objeto String.

// criando uma expressao regular 

// 1° maneira = expressao literal que consiste em um padrão fechado entre barras: 
const re = /abc+c/; // melhor performance quando a expressao ultilizada é uma constante. 

// 2° maneira - chamando o construtor do objeto RegExp 

const re2 = new RegExp("ab+c"); // melhor quando sabemos que padrao da expressao ira mudar 



