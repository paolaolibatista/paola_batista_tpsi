const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", (resposta) => {
  let numero = parseInt(resposta);

  if (isNaN(numero) || numero <= 0) {
    console.log(" Por favor, digite um número inteiro positivo válido!");
  } else {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores++;
      }
    }

    console.log(` O número ${numero} possui ${divisores} divisores.`);
  }

  rl.close();
});