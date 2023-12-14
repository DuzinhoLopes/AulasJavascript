function divisao (numero){
    if (typeof numero !== 'number') {
      return number;
    } else if (numero%3 !== 0 && numero%5 !== 0){
      return console.log(numero);
    } else if (numero%3 === 0 && numero%5 === 0) {
      return console.log("FizzBuzz");
    }else if (numero%3 === 0) {
      return console.log("Fizz");
    }else {
      return console.log("Buzz");
    }
}
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 100;
let rand = random (min, max);

console.log(rand);
divisao(rand);