const personagens = [
    {
        nome: "Mago",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnIMeCj_VxlsAVQG-YR3EFVmesDTDVF3WBmCExS0HdQ&s=10",
        frases: {
            mouseenter: "O Mago sorri e te observa com atenção.",
            mouseleave: "O Mago parece pensar em mais magia para você.",
            mousemove: "O Mago sente sua presença e murmura encantamentos.",
            click: "O Mago lança uma magia! Você foi desafiado!"
        }
    },
    {
        nome: "Lobo",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR5azwFwYOuSBMRoLiPG0SxCdbMfDzFVTRiTwjXb_9Q&s",
        frases: {
            mouseenter: "O Lobo te encara de perto e abana o rabo.",
            mouseleave: "O Lobo volta a observar o horizonte.",
            mousemove: "O Lobo acompanha cada movimento seu com curiosidade.",
            click: "O Lobo deu um latido feliz!"
        }
    },
];

const botaoTrocarImagem = document.getElementById("trocarImagem");
const imagemPersonagem = document.getElementById("imagem");
const mensagemPersonagem = document.getElementById("mensagemPersonagem");
let indicePersonagem = 0;

function atualizarPersonagem() {
    const personagemAtual = personagens[indicePersonagem];
    imagemPersonagem.src = personagemAtual.imagem;
    imagemPersonagem.alt = personagemAtual.nome;
    mensagemPersonagem.textContent = `${personagemAtual.nome}: ${personagemAtual.frases.mouseenter}`;
}

botaoTrocarImagem.addEventListener("click", function() {
    indicePersonagem = (indicePersonagem + 1) % personagens.length;
    atualizarPersonagem();
});

imagemPersonagem.addEventListener("mouseenter", function() {
    const personagemAtual = personagens[indicePersonagem];
    mensagemPersonagem.textContent = `${personagemAtual.nome}: ${personagemAtual.frases.mouseenter}`;
});

imagemPersonagem.addEventListener("mouseleave", function() {
    const personagemAtual = personagens[indicePersonagem];
    mensagemPersonagem.textContent = `${personagemAtual.nome}: ${personagemAtual.frases.mouseleave}`;
});

imagemPersonagem.addEventListener("mousemove", function() {
    const personagemAtual = personagens[indicePersonagem];
    mensagemPersonagem.textContent = `${personagemAtual.nome}: ${personagemAtual.frases.mousemove}`;
});

imagemPersonagem.addEventListener("click", function() {
    const personagemAtual = personagens[indicePersonagem];
    mensagemPersonagem.textContent = `${personagemAtual.nome}: ${personagemAtual.frases.click}`;
});

atualizarPersonagem();