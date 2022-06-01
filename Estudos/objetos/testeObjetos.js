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
        console.log('Oi! Eu sou ' + this.nome[0] + '.')
    }
};

console.log(pessoa.nome.primeiro)
// console.log(pessoa.idade)
// console.log(pessoa.bio())
