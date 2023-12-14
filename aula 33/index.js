const pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Lopes',
  idade: '26',
  endereço: {
    rua: 'Jose Jeronimo',
    numero: 220
  }
};

// Atribuição via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);