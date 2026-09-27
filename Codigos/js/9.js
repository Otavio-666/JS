const botao = document.getElementById('Escuro');

    botao.addEventListener('click', () => {
        
        if (document.body.style.backgroundColor === '' || document.body.style.backgroundColor === 'white') {
            document.body.style.backgroundColor = '#121212'; 
            document.body.style.color = '#ffffff';           
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    });