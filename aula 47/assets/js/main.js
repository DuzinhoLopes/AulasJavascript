function criaHoraDosSegundos(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
  timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

document.addEventListener('click', function(e){
  const el = e.target;  //target > indica onde o cursor esta clicando.

  if(el.classList.contains('iniciar')){ //classList.contains() > testa onde o cursor clicou.
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if(el.classList.contains('pausar')){ //classList.contains() > testa onde o cursor clicou.
    clearInterval(timer);
    relogio.classList.add('pausado');
  }

  if(el.classList.contains('zerar')){ //classList.contains() > testa onde o cursor clicou.
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
  }

});