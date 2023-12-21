//herança com classe

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar(){
    if (this.ligado){
      console.log(this.nome + ' já ligado');
      return;
    }
    this.ligado = true;
  }
  desligar(){
    if (!this.ligado){
      console.log(this.nome + ' já desligado');
      return;
    }
    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico('Telefone');

console.log(d1);


class Smartphone extends DispositivoEletronico {  //dessa maneira a classe ja herda todo o corpo da classe Dispositivo
  constructor(nome, cor){
    super(nome);
    this.cor = cor;
  }

}

const s1 = new Smartphone('iPhone', 'Prata')
console.log(s1)