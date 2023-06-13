const prompt=require("prompt-sync")();
var num = parseInt(prompt("Ingresar un numero: "));
function sumattion(num){
    var suma = 0;
    for (var i = 1; i <= num; i++) {
        suma = suma + i;
    }
    console.log(suma);
}
sumattion(num);

