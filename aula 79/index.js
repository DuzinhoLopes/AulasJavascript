//POLIMORFISMO

function Conta(agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function() {
  console.log(`Ag./c ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
};

const conta1 = new Conta(11, 22, 10);


function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) { //sobrescrita do prototype sacar, para interagir de forma diferente na ContaCorrente.
  if((this.saldo + this.limite) < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }
  this.saldo -= valor
  this.verSaldo()  
}

function ContaPoupanca(agencia, conta, saldo){
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 10, 200);
cc.depositar(80)
cc.sacar(95)  //vemos que em ambos utilizamos o mesmo metodo porem eles se comportam de maneiras diferentes por conta do polimorfismo

const cp = new ContaPoupanca(11, 22, 10);
cp.depositar(80)
cp.sacar(95)