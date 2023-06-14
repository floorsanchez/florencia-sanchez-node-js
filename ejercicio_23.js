const prompt=require("prompt-sync")();

var num=prompt("Ingresar un numero: ");
 function arregloDeObjetos(num){
    let ante = [];
    for (let i = 1; i < num; i++) {
      ante.push("{valor: "+i+"}");
    }   
    console.log(ante.join(","));
 } 
arregloDeObjetos(num);

  