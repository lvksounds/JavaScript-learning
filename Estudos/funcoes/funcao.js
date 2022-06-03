/* Def: Trechos de código que recebem o mesmo nome e podem ser chamadas 
várias vezes. 
Vantagens: 1 - Reutilização de código; 2 - Modularidade; 3 - Maior facilidade
de manutenção do sistema. */

//Dois trechos iguais sem utilizar função
let a = 4, b = 5;
let s = a + b;
console.log(`A soma de ${a} e ${b} é ${s}`);

a = 6, b = 1;
s = a + b;
console.log(`A soma de ${a} e ${b} é ${s}`);

//Definição da função soma
//Definição clássica de funções
function soma(a,b){
    s = a + b;
    console.log(`A soma de ${a} e ${b} é ${s}`);
}
//Chamada externa
soma(4,6);

function soma1(a,b){
    s = a + b;
    return s;
}
//Chamada externa
//Precisa de console.log
console.log(soma1(4,6));

//Função com passagem de parâmetro padrão
function login(usuario = 'root', senha = '1234'){
    console.log(`Usuário: ${usuario}`);
    console.log(`Senha: ${senha}`);
}
//Chamada sem passagem de parâmetro
login();
//Chamada com passagem de parâmetro
login('cadu.vieira@gmail.com','astrogildo');

//Calcula a energia potencial gravitacional (EPG)
//onde: m: massa, h: altura e g: gravidade
function calculaEPG(m,h,g = 10){
    e = g*m*h;
    return e;
}
console.log(`Cálculo do EPG: ${calculaEPG(30,12)}.`);
console.log(`Cálculo do EPG: ${calculaEPG(30,12,9.8)}.`);

//Função anônima - função sem nome
//Armazenar uma função dentro de uma variável
let imprimirProduto = function(a,b){
    return a*b;
}
//Chamada da função
console.log(imprimirProduto(5,6));

//Armazenamento de uma função dentro de um array
let array = [ function(a,b) { return a-b }, function(a,b) { return a*b }];
//array[0] - subtrair; array[1] - multiplicar
console.log(array[0](6,8));
console.log(array[1](6,8));

//Armazenamento de uma função dentro de um objeto
const objeto = {};
objeto.somar = function(a,b){return a + b}; 
objeto.subtrair = function(a,b){return a - b}; 
console.log(objeto);
//Notações equivalentes
console.log(objeto.somar(2,10));
console.log(objeto['somar'](2,10));
console.log(objeto.subtrair(10,2));

function area(larg, alt){
    let area = larg*alt;
    if (area > 20){
        console.log(`Valor de área construída acima do permitido: ${area}m2`);
    }else{
        return area;
    }
}
//Retorna a área
console.log(area(2,2));
//Nan - Not a Number
//Em JS não dá erro - diferente de outras linguagens
console.log(area(2));
console.log(area());
//Passando mais de dois parâmetros
//Os demais parâmetros são undefined
console.log(area(3,4,20,30,40));
console.log(area(5,6));

//Parâmetros variáveis
//Toda função tem um array denominado arguments
function produto(){
    let prod = 1;
    for (i in arguments){
        prod = prod*arguments[i];
    }
    return prod;
}

//Podemos executar o produto dos números com vários argumentos
//Podemos passar como parâmetro - números inteiros ou reais
console.log(produto());
console.log(produto(4));
console.log(produto(4,1,10,2));
console.log(produto(1.6,5.5,1.4));

//Parâmetros variáveis
//Operador rest
function totalSoma(...numeros){
    let soma = 0;
    //console.log(numeros);
    for (let i = 0; i < numeros.length;i++){
        soma += numeros[i];
    }
    return soma;
}
//Chamada a função
console.log(totalSoma());
console.log(totalSoma(5,5,5,5,5));

//Função clássica
function triplo(a){
    return 3*a;
}
console.log(triplo(4));

//Atribuição de uma função anônima a uma variável 
let tri = function(a){
    return 3*a;
}
console.log(tri(4));

//Função arrow 1 
tri = (a) => {
    return 3*a;
}
console.log(tri(4));

//Função arrow 2 
tri = a => 3*a;
console.log(tri(4));

let somaNumeros = (a,b) => {
    return a + b;
}
console.log(somaNumeros(4,19));

somaNumeros = (a,b) => a + b;
console.log(somaNumeros(4,19));

let impressao = a => console.log(a);
//Chamando a variável impressão
impressao('JS é muito doido');
impressao('mas, é muito flexível!');