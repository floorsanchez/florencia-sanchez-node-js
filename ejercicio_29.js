const prompt=require("prompt-sync")();

var num= prompt("Ingrese un numero positivo: ")

function contarHasta(num) {
    const lista = [];
    let i = 0;
    while (i <= num) {
      lista.push(i);
      i++;
    }
    console.log(lista);
  }
  

contarHasta(num)