const prompt=require("prompt-sync")();

var num = parseInt(prompt("Ingrese un número: "));
var suma = 0;
while (num !== 0) {
  suma += num;
  num = parseInt(prompt("Ingrese otro número - 0 para finalizar :",num));
}
console.log("La suma de los números ingresados es:", suma);

