const container = document.querySelector('.container');

const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
  ];

  elementos.forEach(elemento => {
    const novoElemento = document.createElement(elemento.tag);
    novoElemento.textContent = elemento.texto;
    container.appendChild(novoElemento); // Anexar o novo elemento ao h1
  });