// IIFE > Immediately invoked function expression
// essa função não tem acesso algum ao escopo global, caso queira passar parametros é só colocar os valores no parenteses onde cria a função


const nome = 'Eduardo';

(function (nome) {
    console.log(nome);
})(nome); 
