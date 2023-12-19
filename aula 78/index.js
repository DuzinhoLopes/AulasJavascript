//herança

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco); //dessa forma consguimos utilizar os argumentos da função Produto, e adicionar apenas aquelo que é caracteristico desse objeto, que no caso é a cor.
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //utiliza o prototyme de produto
Camiseta.prototype.constructor = Camiseta; //define o construtor para Camiseta novamente.

