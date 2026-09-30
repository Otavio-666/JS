const palavra = document.getElementById('palavra');

function Sorvete() {

    const quantidadeLetras = palavra.value.length;

    if (quantidadeLetras > 3) {
        if (palavra.value === 'chocolate') {
            alert('Eu amo sorvete de chocolate!');
        } else if (palavra.value === 'flocos'  || palavra.value === 'floco') {
            alert('Ahh, mas chocolate é o meu favorito...');
        } else {
            alert('Ahh, eu esperava um sabor de sorvete...');
        }
    } else {
        alert('Ahh, eu esperava um sabor de sorvete...');
    }


    /*
        Esta forma funcionaria igual,pois ira fazer a verificação da palavra e dar o mesmo resultado que o de cima(deixa o codigo mais limpo)
        if (palavra.value === 'chocolate') {
            alert('Eu amo sorvete de chocolate!');
        } else if (palavra.value === 'flocos') {
            alert('Ahh, mas chocolate é o meu favorito...');
        } else {
            alert('Ahh, eu esperava um sabor de sorvete...');
        }
    */

}

