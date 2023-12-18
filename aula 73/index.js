//defineProperty -> getter e setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    configurable: true, //pode ou nao configurar as propriedades


    get: function(){
      return estoque;
    },
    set: function(valor){
      if (typeof valor !== 'number'){
        console.log("Insira um número");
        return;
      }
      estoque = valor;
    }
  });
}

function criaProduto(nome){
  return { 
    get nome(){
      return nome;
  },
    set nome(valor){
      valor = valor.replace(' coisa',''); // caso queira interceptar algum valor nao desejado
      return nome = valor
    }
}

}

const p2 = criaProduto('Arroz');
p2.nome = "qualquer coisa";
console.log(p2.nome);

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 200;
// console.log(p1.estoque);