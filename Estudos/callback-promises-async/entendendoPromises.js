// ref  - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises

// event loop - enquanto tiverem ações a cerem executadas 
// Promise é um objeto que representa a eventuas conclusao ou falha de uma operação assincrona.
// Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função. 

// Por exemplo, em vez de uma função old-style que espera dois callbacks, e chama um deles em uma eventual conclusão ou falha:
function doSomething(){

};

function successCallback(result) {
    console.log("It succeed with " + result);
}

function failureCallback(result){
    console.log("It failed with " + result);
} 

doSomething(successCallback, failureCallback); 

// funções modernas retornam uma promise e então você pode adicionar seus callbacks: 

//const promise = doSomething();

promise.then(successCallback, failureCallback); 

// ou simplesmente

doSomething().then(successCallback, failureCallback); 

// isso é chamado de função assincrona, essa convenção tem vantagens. 

// encadeamento:

// uma necessidade comum é executar duas ou mais operações assincronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem sucedida, com o resultado do passo anterior. Nós conseguimos isso criando uma cadeia de promises: 

// aqui está a magica: a função then retorna uma nova promise, diferente da original  

const promise = doSomething(); 

const promise2 = promise.then(successCallback, failureCallback); 
