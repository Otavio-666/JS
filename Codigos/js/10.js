let botaoAvancarImagem = document.getElementById("avancarImagem");
let botaoVoltarImagem = document.getElementById("voltarImagem");

const imagens = [
    "https://picsum.photos/id/237/600/400",
    "https://picsum.photos/id/238/600/400",
    "https://picsum.photos/id/239/600/400",
    "https://picsum.photos/id/240/600/400",
    "https://picsum.photos/id/250/600/400"

];

let indiceImagemAtual = 0;

botaoAvancarImagem.addEventListener("click", function() {
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    document.getElementById("imagem").src = imagens[indiceImagemAtual];
}); 

botaoVoltarImagem.addEventListener("click", function() {
    indiceImagemAtual = (indiceImagemAtual - 1 + imagens.length) % imagens.length;
    document.getElementById("imagem").src = imagens[indiceImagemAtual];
}); 

setInterval(function() {
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    document.getElementById("imagem").src = imagens[indiceImagemAtual];
}, 5000);