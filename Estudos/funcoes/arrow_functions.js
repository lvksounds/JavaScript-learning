// ref https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/arrow-functions

// ES6 introduziu arrow function syntax, um jeito mais curto de escrever funções usando a notação especial "fat arrow () =>"

// Arrow Functions removem a necessidade de escrever a keyword 'function'. Primeiro incluimos um parametro dentro do () e depois adicionamos a seta => que aponta para o corpo da função {}

// função normalmente escrita: 

/*
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
*/
  // arrow funtion:


const plantNeedsWater = (day) => {
    if (day === 'Wednesday'){
        return true;
    } else {
        return false
    }
}

// Javascript nos da varias formas de escrevermos uma arrow function.
// 1.