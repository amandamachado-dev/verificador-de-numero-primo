



// Função para verificar se um número é primo


function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Função chamada quando o botão "Verificar" é clicado
function verificarPrimo() {

    // Obter o elemento de entrada de texto
const input = document.getElementById('inputNumber');
// Obter o elemento onde o resultado será exibido
const resultado = document.getElementById('resultado');
// Converter o valor do campo de entrada em um número inteiro
const numero = parseInt(input.value);
    

    // Verificar se o valor é um número
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
    } else {
        // Chamar a função isPrimo para verificar se o número é primo
        if (isPrimo(numero)) {
            resultado.textContent = `${numero} é um número primo.`;
        } else {
            resultado.textContent = `${numero} não é um número primo.`;
        }
    }
}