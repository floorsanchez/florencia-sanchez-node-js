const prompt=require("prompt-sync")();

function breakStatement(num){
    var num = parseInt(prompt("Ingresar un numero:"));
    var breakStatement=[num];
    var suma=0;

    for (i=0;i<10;i++){
        suma=i+=2;
        if (suma==i){
            break;
        }
        nuevo.log(suma);
    }
    if (i==10){
        return nuevo;

        }else{
            console.log("Se interrumpio la ejecuccion");
    }

}
var num= breakStatement(1,10);
console.log(breakStatement);

