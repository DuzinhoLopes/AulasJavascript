//defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {enumerable: true, //mostra a chave
    value: nome, //valor da chave
    writable: false, //pode ou nao alterar o valor
    configurable: true}, //pode ou nao configurar as propriedades}

    preço: {enumerable: true, //mostra a chave
    value: preco, //valor da chave
    writable: false, //pode ou nao alterar o valor
    configurable: true //pode ou nao configurar as propriedades}
  }
})
    Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, //valor da chave
    writable: false, //pode ou nao alterar o valor
    configurable: true //pode ou nao configurar as propriedades
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);