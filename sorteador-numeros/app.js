//sortear
function sortear () {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numero;
//estrutura de repetição utilizando o for
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
//utilizando o while para não retornar número repetido
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }        
        sorteados.push(numero);
    }
    //exibindo na tela o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}