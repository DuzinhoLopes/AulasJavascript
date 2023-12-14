function retornaHora(){
   let data = new Date();
   return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

const timer = setInterval(function(){
  console.log(retornaHora());
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 3000);

setTimeout(function(){
  console.log('Ola Mundo!');
}, 5000);
