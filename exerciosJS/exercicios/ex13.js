const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para ver a tabuada: ", (resposta) => {
  let numero = parseInt(resposta);

  if (isNaN(numero)) {
    console.log(" Por favor, digite um número válido!");
  } else {
    console.log(`\nTabuada do ${numero}:\n`);

    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }

  rl.close();
});