const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//continue > pula para a próxima iteração.
//break > encerra o laço de repetição.


for (let numero of numeros) {
  if (numero === 2){
    continue;
  }

  if (numero === 7){
    break;
  }
    console.log(numero);
}