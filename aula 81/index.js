//criar classe em POO

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando`) //dessa maneira o metodo já vai automaticamente fazer parte do prototype
  }
}
const p1 = new Pessoa('Eduardo', 'Lopes');


//getter e setter
const velocidade = Symbol('velocidade');
class Carro{
  constructor(nome){
    this.nome = nome;
    this[velocidade] = 0;
  }

  get velocidade() {
    return this[velocidade]
  }

  set velocidade(valor) {
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[velocidade] = valor;
  }

  acelerar(){
    if(this[velocidade] >= 100) return;
    this[velocidade]++
  }
  desacelerar(){
    if(this[velocidade] === 0) return;
    this[velocidade]--
  }
}

const c1 = new Carro('gol');

console.log(c1.velocidade);