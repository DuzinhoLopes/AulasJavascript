const nome = ['Eduardo', 'Lopes'];

for (let i = 0; i < nome.length; i++){
  console.log(i);
}

console.log('######');

for (let valor of nome){
  console.log(valor);
}

console.log('######');

nome.forEach(function(valor, indice) {
  console.log(valor, indice);  
});