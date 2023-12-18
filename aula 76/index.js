//manipulando prototypes

const objA = {
  chaveA: 'A'
  //___proto___: Object.prototype
}

const objB = {
  chaveB: 'B'
  //___proto___: objA
}

Object.setPrototypeOf(objB, objA); //dessa forma mudamos a cadeia de objeto do objB, e podemos definir quais objetos querem ser herdados.

//trabalhando nas funções construtores.


function Produto(nome, preco) {
  this.nome = nome,
  this.preco = preco
}

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50);
const p2 = new Produto('Calça', 50);

const p3 = {
  nome: 'Shorts',
  preco: 15
}
Object.setPrototypeOf(p3, Produto.prototype) //setando o prototype de produtos para o objeto literal "p3"

const p4 = Object.create(Produto.prototype, { //dessa maneira conseguimos criar o objeto já passando o prototype de Produto. e também utilizando defineProperty para atribuir valores. 
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 20
  },
  peso: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 40}
})

p1.desconto(10);
p2.aumento(10);
p3.aumento(10);
p4.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);