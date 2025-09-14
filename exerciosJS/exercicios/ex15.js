const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let codigo = 0;

function mostrarProximos20() {
  let fim = Math.min(codigo + 20, 256); // não ultrapassar 255

  for (; codigo < fim; codigo++) {
    let caractere = String.fromCharCode(codigo);
    console.log(`${codigo} -> ${caractere}`);
  }

  if (codigo < 256) {
    rl.question("\nDeseja continuar? (s/n): ", (resposta) => {
      if (resposta.toLowerCase() === 's') {
        mostrarProximos20();
      } else {
        console.log("Programa finalizado!");
        rl.close();
      }
    });
  } else {
    console.log("\n Todos os códigos ASCII foram exibidos!");
    rl.close();
  }
}

mostrarProximos20();
