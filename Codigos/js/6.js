let button = document.getElementById("gerarHistoria");
let fraseHistoria = document.getElementById("fraseHistoria");

let acao = ["A busca", "A batalha", "O resgate"];
let local = ["na Floresta Sombria", "no Reino Perdido", "na Montanha Misteriosa"];
let complemento = ["do Dragão", "do Tesouro Esquecido", "da Espada Ancestral"];

function gerarHistoria() {
    let acaoEscolhida = acao[Math.floor(Math.random() * acao.length)];
    let localEscolhido = local[Math.floor(Math.random() * local.length)];
    let complementoEscolhido = complemento[Math.floor(Math.random() * complemento.length)];

    return `${acaoEscolhida} ${localEscolhido} ${complementoEscolhido}.`;
}

button.addEventListener("click", function() {
    let fraseGerada = gerarHistoria();
    fraseHistoria.textContent = fraseGerada;
});