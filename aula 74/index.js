//motodos úteis para objetos.

//Object.values -> ver apenas os valors dos produtos, sem as chaves
//Object.entries -> retorna chave e valor dentre de um array.
//Objects.keys -> ver as chaves de um objeto.
//Object.freeze -> congelar o objeto para evitar qualquer alteração
//Object.getOwnPropertyDescriptor -> mostra as propriedades do objeto

// const outroProduto = { ...produtos, material: 'Vidro'}
// const outroProduto = Object.assign({}, produtos, {material: 'Vidro'})
// const outroProduto = { nome: produtos.nome, preco: produtos.preco, materia: 'Vidro'}
//ambos trazem o mesmo resutaldo quando precisamos pegar o valor de um objeto, normalmente o mais usual é o spread, mas os outros também podem ser importantes em um ambiente especifico dentro do codigo.

const produtos = { nome: 'copo', preco: 1.8}

console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'))