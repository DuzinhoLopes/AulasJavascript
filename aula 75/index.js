//prototypes

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto =  function (){  //metodo que poderá ser utilizado por qualquer objeto, sem necessidade de cria-lo mais de uma vez.
  return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Eduardo', 'Lopes');
const pessoa2 = new Pessoa('Fulano', 'Ciclano');