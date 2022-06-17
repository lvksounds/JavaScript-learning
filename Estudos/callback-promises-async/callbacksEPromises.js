setTimeout(() => {
    console.log('setTimeOut data');
}, 3000)

// criando uma new Promise - promise geralmente sao utlizadas quando queremos encapsular um comportamento que nao é imediato

// parametros - resolve and reject

// resolve - chamamos quando as coisas dao certo chamamos o resolve passando qualquer dado que colocamos

const promise = new Promise( resolve => {
    resolve('promise data')
})

promise.then(data => console.log(data))

// promises sao executados no final do loop atual - 

for(i = 1; i<=10000; i++){
    console.log(i)
}