const prompt= require("prompt-sync")();
const num = prompt("Ingresa un número: ");
if (num % 5 === 0) {
  console.log(num + " es divisible por 5");
} else {
  console.log(num + " no es divisible por 5");
}
