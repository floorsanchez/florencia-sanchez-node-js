const prompt=require("prompt-sync")();

function Primo(num) {
    let divisor = 2;   
    for (divisor; divisor < num; divisor++) {
      if (numero % divisor === 0) {
        console.log(false);
      } else {
        console.log(true);
      }
    }
    
}
const num= parseInt(prompt("Ingresa un número:"));
Primo(num)

