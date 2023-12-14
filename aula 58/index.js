// FUNÇÃO CONSTRUTORA -> OBJETOS
//FUNÇÃO FABRICA -> OBJETOS
//CONSTRUTORA -> Pessoa (new)


function Pessoa (nome, sobrenome){
    //atributos ou metodos privados
    const ID = 12345;
    const MetodoPrivado = function(){
        //sua function
    };

    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome + ": eu sou um método");
    }
}

const p1 = new Pessoa ("Eduardo", "Lopes");
p1.metodo();