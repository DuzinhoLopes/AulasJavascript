//closures

function retornaFuncao(nome){
  return function () {
    return nome;
  }
}

const funcao = retornaFuncao('Eduardo');
console.log(funcao());