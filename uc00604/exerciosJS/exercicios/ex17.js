let numeros = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 5 === 0 && i % 3 !== 0) {
    numeros.push(i);
  }
}

console.log("Sequência de múltiplos de 5, mas não múltiplos de 3:");
console.log(numeros.join(", ")); 