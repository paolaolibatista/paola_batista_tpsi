const prompt = require('prompt-sync')();

function verificarValor() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número: "));
        if (numero < 1 || numero > 100) {
            console.log("Número inválido. Tente novamente.");
        }
    } while (numero < 1 || numero > 100);
    console.log("Número válido: " + numero);
}
verificarValor();