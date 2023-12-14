//factory function

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); //split > separa as strings em um array
            this.nome = valor.shift(); //shift > remove o primeiro valor do array e retorna.
            this.sobrenome = valor.join(' '); //join > junta os valores restantes do array
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`}, //this pode ser utilizado nesse caso para referenciar ao objeto do escopo da função.
            altura: a,
            peso: p, 
            //getter > utilizamos quando queremos apenas pegar o valor da função.
            get imc() {
                const indice = this.peso / (this.altura ** 2);
                return indice.toFixed(2);
            }
        }
    }


const p1 = criaPessoa('Eduardo', 'Lopes', 1.8, 75);
p1.nomeCompleto = 'Fulano Ciclano Beltrano' 
console.log(p1.nomeCompleto);