const prompt= require("prompt-sync")();
const temperaturaF = prompt("Ingresa una temperatura en grados Fahrenheit");

function convertirAFahrenheit(tempF) {
  const tempC = (tempF - 32) * (5/9);
  return tempC;
}

const temperaturaC = convertirAFahrenheit(temperaturaF);
console.log("La temperatura en grados Celsius es:", temperaturaC);
