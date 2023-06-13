const prompt=require("prompt-sync")();
let num1 = parseFloat(prompt("Ingresa el primer numero: "));
let num2 = parseFloat(prompt("Ingresa el segundo numero: "));
let num3 = parseFloat(prompt("Ingresa el tercer numero: "));

function operadoresLogicos(num1, num2, num3) {
    if (num1 > num2 && num1 > num3 && num1 > 0) {
        console.log("Número 1 es mayor y positivo");}
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        console.log("Hay negativos");}
    if (num3 > num1 && num3 > num2) {
        suma= num3 + 1;
        console.log("Nuevo valor de num3: ",suma);}
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("Error");}
    else console.log("false");
}
    
    console.log(operadoresLogicos(num1, num2, num3));


