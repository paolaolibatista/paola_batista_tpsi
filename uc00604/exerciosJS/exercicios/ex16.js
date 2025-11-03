const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;
let soma = 0;

function pedirNumero() {
  if (contador < 30) {
    rl.question(`Digite o ${contador + 1}º número (inteiro, par, 1 a 50): `, (resposta) => {
      let numero = parseInt(resposta);

      if (
        isNaN(numero) ||
        numero < 1 ||
        numero > 50 ||
        numero % 2 !== 0
      ) {
        console.log(" Número inválido! Digite um inteiro par entre 1 e 50.");
        pedirNumero(); 
      } else {
        soma += numero;
        contador++;
        pedirNumero(); 
      }
    });
  } else {
    let media = soma / 30;
    console.log(`\n A média dos 30 números pares válidos é: ${media.toFixed(2)}`);
    rl.close();
  }
}

pedirNumero();