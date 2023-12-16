//>map

//dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobraNumeros = numeros.map(valor => valor * 2);


//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave ID em casa obje

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Leticia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

const retornaNome = pessoas.map(obj => obj.nome);
const retornaIdade = pessoas.map(obj => ({idade: obj.idade}));
const adicionaID = pessoas.map(function(obj, indice){
  const newObj = {...obj}; //dessa maneira os valores nao sao alterados no objeto original.
  newObj.id = indice + 1;
  return newObj;
});


console.log (adicionaID)