
let fibonacci = [1, 1]; 

while (fibonacci.length < 60) {
  let tamanho = fibonacci.length;
  let proximo = fibonacci[tamanho - 1] + fibonacci[tamanho - 2];
  fibonacci.push(proximo);
}

console.log("Primeiros 60 números da série de Fibonacci:");
console.log(fibonacci.join(", "));