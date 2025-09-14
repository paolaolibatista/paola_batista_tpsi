const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", (resposta) => {
  let numero = parseInt(resposta);

  if (isNaN(numero) || numero <= 1) {
    console.log(" Digite um número inteiro maior que 1!");
  } else {
    let acumulador = 0;

    console.log(`Operações com o número ${numero}:\n`);

    for (let i = 1; i < numero; i++) {
      let soma = numero + i;
      let subtracao = numero - i;
      let multiplicacao = numero * i;
      let divisao = numero / i;

      console.log(`${numero} + ${i} = ${soma}`);
      console.log(`${numero} - ${i} = ${subtracao}`);
      console.log(`${numero} * ${i} = ${multiplicacao}`);
      console.log(`${numero} / ${i} = ${divisao.toFixed(2)}\n`);

      acumulador += 4; 
    }

    console.log(` Total de operações efetuadas: ${acumulador}`);
  }

  rl.close();
});