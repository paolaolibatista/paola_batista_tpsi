const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 1;

function perguntarNumero() {
  if (contador <= 10) {
    rl.question(`Digite o ${contador}º número: `, (resposta) => {
      let numero = parseInt(resposta);

      if (isNaN(numero)) {
        console.log(" Por favor, digite um número válido!");
      } else if (numero % 2 === 0) {
        console.log(`${numero} é PAR`);
      } else {
        console.log(`${numero} é ÍMPAR`);
      }

      contador++;
      perguntarNumero(); 
    });
  } else {
    rl.close();
  }
}

perguntarNumero();