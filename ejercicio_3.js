const prompt= require("prompt-sync")();
const string1 = prompt("Ingresa el primer string");
const string2 = prompt("Ingresa el segundo string");

const sonIguales = string1 === string2;
console.log("¿Los strings son iguales?", sonIguales);

const tienenMismaLongitud = string1.length === string2.length;
console.log("¿Los strings tienen la misma longitud?", tienenMismaLongitud);
