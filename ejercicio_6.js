const prompt= require("prompt-sync")();
let angulo1 = parseFloat(prompt("Introduce el primer ángulo: "));
let angulo2 = parseFloat(prompt("Introduce el segundo ángulo: "));
let angulo3 = parseFloat(prompt("Introduce el tercer ángulo: "));

let sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos === 180) {
  console.log("Los ángulos introducidos corresponden a un triángulo válido.");
} else {
  console.log("Los ángulos introducidos no corresponden a un triángulo válido.");
}
