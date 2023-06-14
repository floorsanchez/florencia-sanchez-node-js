const prompt=require("prompt-sync")();
let repetir = true;

do {
  const numero1 = parseInt(prompt("Ingresa el primer número:"));
  const numero2 = parseInt(prompt("Ingresa el segundo número:"));

  const suma = numero1 + numero2;
  console.log("Suma: ",suma);

  let respuesta;
  do {
    respuesta = prompt("¿Quieres repetir la operación? Ingresa 'SI' o 'NO': ");
  } while (respuesta !== "SI" && respuesta !== "NO");

  if (respuesta === "NO") {
    repetir = false;
  }
} while (repetir);
