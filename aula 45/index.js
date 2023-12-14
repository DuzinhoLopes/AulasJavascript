try { //executa quando não há erros
  
} catch (err){ //executa quando da erro
  
} finally { //sempre será executado
  
}


function retornaHora(data){
  if (data && !(data instanceof Date)) {
    throw new TypeError('Espereando instância de Date');
  }

  if (!data){
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}
try{
const hora = retornaHora();
console.log(hora);
} catch(e){
  //console.log("Tratar erro");
} finally {
  console.log("Tenha um bom dia");
}
