//promises

function rand (min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('');

    setTimeout(() => {
      resolve(msg);
    }, tempo)
  })
}

esperaAi('Frase 1', rand(1, 3))
.then(resposta => {
  console.log(resposta);
  return esperaAi('Frase 2', rand(1, 3)); //utilizando as promises, conseguimos sequenciar os metodos, para que eles sigam uma sequencia correta caso haja necessidade.
})
.then(resposta => {
  console.log(resposta);
  return esperaAi('Frase 3', rand(1, 3))
})
.then(resposta => {
  console.log(resposta);})
.catch(e => {
  console.log('Erro'); //catch utilizado para tratar o erro das promises
});