let ValorContado = 0;

const contador = document.getElementById("contador");
const btnAdicionar = document.getElementById("btn-Adicionar");
const btnZerar = document.getElementById("btn-Zerar");

btnAdicionar.addEventListener("click", () => {
  ValorContado++;
  contador.textContent = ValorContado;
});

btnZerar.addEventListener("click", () => {
  ValorContado = 0;
  contador.textContent = ValorContado;
});