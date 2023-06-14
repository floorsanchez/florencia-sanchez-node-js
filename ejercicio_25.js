const prompt=require("prompt-sync")();

function sumNums(num, numArr) {
    let nume = [];
    let sum = 0;
    while (true) {
      let input = prompt("Ingresa un número - 0 para finalizar:");
      if (input === "0") {
        break;
      }
      let numInput = parseInt(input);
      if (arr(numInput)) {
        console.log("No ingresaste un número válido. Inténtalo de nuevo.");
        continue;
      }
      nume.push(numInput);
    } 
    console.log("Los números que ingresaste son:", nume);
  
    for (let i = 0; i < nume.length; i++) {
      for (let j = i + 1; j < nume.length; j++) {
        if (nume[i] + nume[j] === num) {
          sum = nume[i] + nume[j];
          break;
        }
      }
      if (sum !== 0) {
        break;
      }
    } 
    if (sum === 0) {
      console.log(`No hay dos números en el arreglo que sumen ${num}`);
    } else {
      console.log(`La suma de dos números ${sum}, que es igual a ${num}`);
    }
  }
  const num = parseInt(prompt("Ingresa un número:"));
  const numArr = [];  
  sumNums(num, numArr);
  