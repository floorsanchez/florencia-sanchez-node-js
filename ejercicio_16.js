const prompt=require("prompt-sync")();

function rango(comienzo,final,sumador){
    var numeros=[];
    for(var i = comienzo; i<= final; i += sumador){
        numeros.push(i);
    }
    return numeros;
}
var num= rango(3,30,6);
console.log(num)