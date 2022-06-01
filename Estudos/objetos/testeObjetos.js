let pessoa = {
    nome: {
        primeiro: 'Lucas',
        ultimo: 'Oliveira'
    },
    idade: 23,
    sexo: 'masculino',
    interesses: ['música', 'programação'],
    bio: function(){
        console.log(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function(){
        console.log('Oi! Eu sou ' + this.nome[0] + '.');
    }
};

// console.log(pessoa.idade)
// console.log(pessoa.bio())
// pessoa['olhos'] = 'castanho escuro'
// pessoa['despedida'] = function(){console.log("Adeus meros mortais!")}
// console.log(pessoa.despedida())

function pegaNome(){
    let nome = document.getElementById('nome').value;
    let txt = document.getElementById('texto');
    let dados = document.getElementById('dados');
    let botoes = document.getElementById('botoes')

    if(nome == pessoa['nome']['primeiro']){
        txt.innerHTML = `<h1>Olá ${nome}. Voce confirma que esses dados remetem a você?`
        dados.innerHTML = `nome: ${pessoa.nome.primeiro}, idade: ${pessoa.idade}, sexo: ${pessoa.sexo} <br> interesses: ${pessoa.interesses[0]} e ${pessoa.interesses[1]}`
    }

    if (txt.value != ' '){
        botoes.style.display = 'flex'
    }
}