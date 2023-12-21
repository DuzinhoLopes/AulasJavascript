//métodos estáticos

class ControleRemoto {
  constructor(tv){
    this.tv = tv;
    this.volume = 0
  }

  //metodos de instancia
  aumentarVolume(){
    this.volume += 2;
  }

  diminuirVolume(){
    this.volume -= 2;
  }

  //metodo estático
  static trocaPilha(){
    console.log('Troca Pilha');
  }

}

const controle = new ControleRemoto;
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();


console.log(controle);

ControleRemoto.trocaPilha(); //o metodo estatico é chamado pelo propria classe, não é possivel chamar pela instancia.