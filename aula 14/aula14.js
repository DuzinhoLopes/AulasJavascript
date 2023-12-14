let num1 = 255; 
let num2 = 2.5;

//console.log(num1.toString() + num2); //toString - muda o tipo da variável para concatenar ao invés de somar.
//console.log(typeof num1); // porém ele nao muda o tipo da variável global.
//console.log(num1.toString(2)); //transformar em binario
//console.log(num1.toFixed(2)); //difinir quantidade de decimais e aredondar
//console.log(Number.isInteger(num1)); //mostras se a variavel é inteira ou não
let temp = num1 * 'olá';
console.log(Number.isNaN(temp));