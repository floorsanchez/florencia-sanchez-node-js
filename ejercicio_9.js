const prompt=require("prompt-sync")();

let edad = parseFloat(prompt("Introduzca la edad:  "));
if (edad < 13) {
    console.log("Es un niño");
  } else if (edad >= 13 && edad <= 17) {
    console.log("Es un adolescente");
  } else if (edad >= 18 && edad <= 110) {
    console.log("Es un adulto");
  } else {
    console.log("No es una edad válida");
  }

