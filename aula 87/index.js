//promises metodos

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
      return;
    }, tempo)
  })
}

const promises = [
  esperaAi('Promise 1', rand(1, 3)),
  esperaAi('Promise 2', rand(1, 3)),
  esperaAi('Promise 3', rand(1, 3))
];

//promise.all ira resolver todas as promises, porem se uma delas der erro, caira no catch
//promise.race ira retornar a promise que for finalizada primeiro
//promise.resolve ira retornar uma promise ja resolvida.
//promise.reject ira rejeitar uma promise


Promise.race(promises).then(function(valor){
  console.log(valor);
}).catch(function(e){
  console.log(e);
})