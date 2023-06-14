const prompt=require("prompt-sync")();
function esPrimo(numero) {
    let divisor = 2;
    
    while (divisor < numero) {
      if (numero % divisor === 0) {
        console.log("No es Primo");
        break;
      } else {
        console.log("Es Primo");
        break;
      }
    }
    
}

const numero = parseInt(prompt("Ingresa un número:"));
esPrimo(numero)