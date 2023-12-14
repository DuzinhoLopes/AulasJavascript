const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let DiasemanaTexto;

switch (diaSemana) {
case 0:
  DiasemanaTexto = 'Domingo';
  break;
case 1:
  DiasemanaTexto = 'Segunda';
  break;
case 2:
  DiasemanaTexto = 'Terça';
  break;
case 3:
  DiasemanaTexto = 'Quarta';
  break;
case 4:
  DiasemanaTexto = 'Quinta';
  break;
case 5:
  DiasemanaTexto = 'Sexta';
  break;
case 6:
  DiasemanaTexto = 'Sábado';
  break;
}

console.log(diaSemana, DiasemanaTexto)