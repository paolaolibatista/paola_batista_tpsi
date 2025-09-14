function ehPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let primos = [];
let num = 2;

while (primos.length < 10) {
  if (ehPrimo(num)) {
    primos.push(num);
  }
  num++;
}

console.log("Os 10 primeiros números primos são:");
console.log(primos.join(", "));