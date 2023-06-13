const prompt=require("prompt-sync")();

var num1=prompt("Ingrese el primer  numero: ");
var  num2=prompt("Ingrese el segundo numero: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
if (num1>num2){
    console.log("El numero",+num1,"es mayor que el numero",+num2);
}else if (num1==num2){
    console.log("El numero",+num1,"es igual que el numero",+num2);
}else (num2>num1)
    console.log("El numero",+num2,"es mayor que el numero",+num1);


