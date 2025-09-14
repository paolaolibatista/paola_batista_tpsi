const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 1;
let soma = 0;

function perguntarNota() {
  if (contador <= 10) {
    rl.question(`Digite a nota do ${contador}º aluno: `, (resposta) => {
      let nota = parseFloat(resposta);

      if (isNaN(nota)) {
        console.log(" Por favor, digite um número válido!");
      } else {
        soma += nota;
        contador++;
      }

      perguntarNota(); // chama novamente até completar 10
    });
  } else {
    let media = soma / 10;
    console.log(`\n A média das notas é: ${media.toFixed(2)}`);
    rl.close();
  }
}

perguntarNota();