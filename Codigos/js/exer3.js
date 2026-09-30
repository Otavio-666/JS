let titulo = document.querySelector("h1");

let tamanhoAleatorio = Math.floor(Math.random() * (100 - 30 + 1)) + 30;

let cores = ["blue", "green", "red", "purple", "orange"];

titulo.style.color = cores[Math.floor(Math.random() * cores.length)];

titulo.style.fontSize = tamanhoAleatorio + "px";

console.log("Tamanho aleatório: " + tamanhoAleatorio + "px");