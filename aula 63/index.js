//splice

const nomes = ['Maria', 'Júlia', 'Gabriel', 'João', 'Eduardo'];

//pop/shift
//nomes.splice(-1, 1) //remove elemento de um indice


//nomes.splice(3, 2, 'Eduardo', 'João'); // remove elemento de um indice, e adiciona outro no lugar.

//push/unshift
nomes.splice(0, 0, 'Luiz', 'Pedro');

console.log(nomes);