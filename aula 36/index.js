//for in -> lê os índices ou chaves do objeto

const pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Lopes',
  idade: 26
};

for (let chave in pessoa){
  console.log(chave, pessoa[chave]);
}

//utilizando for
//for (let i = 0; i < frutas.length; i++){
//    console.log(frutas[i]);
//}


//for (let i in frutas){
//  console.log(frutas[i]);
//}