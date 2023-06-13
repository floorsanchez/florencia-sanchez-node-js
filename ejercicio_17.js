const prompt=require("prompt-sync")();

function nuevoArreglo(num){
    var num = parseInt(prompt("Ingresar un numero:"));
        for (var i = 1; i < num; i++) {
            console.log(i);
        }
    }

var num= nuevoArreglo(1,1000);
console.log(num)
