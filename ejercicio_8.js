const prompt=require("prompt-sync")();
let year = parseFloat(prompt("Introduce el año:  "));
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("El año ingresado es bisiesto");
    } else {
      console.log("El año ingresado no es bisiesto");
    }

