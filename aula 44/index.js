function soma(x, y) {
if (typeof x !== 'number' || typeof y !== 'number'){
  throw new ReferenceError('x e y precisam ser numeros.'); //pode-se usar essas classes de erros para referenciar.
}
return x + y;
}

//caso nao tiver nenhum erro, executa apenas o que esta no bloco "try"
//caso tenha um erro, o bloco "catch" sera excutado

try {
  console.log(soma(1, 2));
  console.log(soma('a', 2));
} catch(error) {
  console.log('error');
}