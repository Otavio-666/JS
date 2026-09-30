const form = document.getElementById("formulario");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmarSenha");
const mostrarSenha = document.getElementById("mostrar-senha");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

mostrarSenha.addEventListener("change", () => {
    const tipo = mostrarSenha.checked ? "text" : "password";
    inputSenha.type = tipo;
    inputConfirmarSenha.type = tipo;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroSenha').textContent = '';
    document.getElementById('erroConfirmarSenha').textContent = '';
    document.getElementById('mensagemSucesso').textContent = '';

    if (inputNome.value.trim().length < 3) {
        document.getElementById('erroNome').textContent = 'O nome deve ter pelo menos 3 caracteres.';
        valido = false;
    }

    if (!emailRegex.test(inputEmail.value.trim())) {
        document.getElementById('erroEmail').textContent = 'Por favor, insira um email válido.';
        valido = false;
    }

    if (!senhaRegex.test(inputSenha.value)) {
        document.getElementById('erroSenha').textContent = 'A senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula e um caractere especial.';
        valido = false;
    }

    if (inputSenha.value !== inputConfirmarSenha.value) {
        document.getElementById('erroConfirmarSenha').textContent = 'As senhas não coincidem.';
        valido = false;
    }

    if (valido) {
        document.getElementById('mensagemSucesso').textContent = 'Formulário enviado com sucesso!';
    }
});