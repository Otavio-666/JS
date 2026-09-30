let contadorLista = 1;

const botao = document.getElementById("btn-adicionar-item");
const lista = document.getElementById("lista");

botao.addEventListener('click', () => {
  const novoitem = document.createElement("li");
  novoitem.textContent = 'Item nº ' + contadorLista;
  lista.appendChild(novoitem);
  contadorLista++;
});