// escreva uma fução que receba 2 numeros e retorne o maior deles.


const max = (x, y) => x > y ? x : y;
console.log(max(10, 50));

//arrow function pode substituir todo esse codigo

/*function maior (valor1, valor2){
  let valorMaior = 0;
  if (valor1 === valor2){
    valorMaior = 'Valores iguais.';
    return console.log(valorMaior);
  }else if (valor1 < valor2){
    valorMaior = `O valor ${valor2} é maior que ${valor1}`;
    return console.log(valorMaior);
  }else{
    valorMaior = `O valor ${valor1} é maior que ${valor2}`;
    return console.log(valorMaior);
  }
}

const valor1 = 20;
const valor2 = 30;

maior(valor1, valor2);*/