const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", (resposta) => {
  let numero = parseInt(resposta);

  if (isNaN(numero)) {
    console.log(" Por favor, digite um número inteiro válido!");
  } else {
    if (numero <= 1) {
      console.log(`${numero} NÃO é primo`);
    } else {
      let primo = true;
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          primo = false;
          break;
        }
      }

      if (primo) {
        console.log(`${numero} é PRIMO `);
      } else {
        console.log(`${numero} NÃO é primo `);
      }
    }
  }

  rl.close();
});