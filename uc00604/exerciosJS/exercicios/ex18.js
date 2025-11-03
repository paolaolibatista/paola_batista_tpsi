const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", (resposta) => {
  let limite = parseInt(resposta);

  if (isNaN(limite) || limite < 1) {
    console.log("⚠️ Digite um número inteiro positivo válido!");
  } else {
    let numerosPerfeitos = [];

    for (let i = 1; i <= limite; i++) {
      let somaDivisores = 0;

      for (let j = 1; j < i; j++) {
        if (i % j === 0) {
          somaDivisores += j;
        }
      }

      if (somaDivisores === i) {
        numerosPerfeitos.push(i);
      }
    }

    console.log(`\nNúmeros perfeitos entre 1 e ${limite}: ${numerosPerfeitos.join(", ")}`);
    console.log(`Total de números perfeitos: ${numerosPerfeitos.length}`);
  }

  rl.close();
});