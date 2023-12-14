//alert('arroz');
//window.alert();
//window.confirm();
//window.prompt();


/*
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');
let result = Number(num1)+Number(num2);
window.alert(result);*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA] //nova maneira de resolver com js

/*
maneira mais antiga de resolver
const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;
*/
console.log(varA, varB, varC);