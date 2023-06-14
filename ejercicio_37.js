const prompt=require("prompt-sync")();
var string= prompt("Ingrese un string: ");
function verificarCadena(string) {
    if (/^[A-Z]+$/.test(string)) {
      console.log('Contiene solo Mayúsculas');
    } else if (/^[a-z]+$/.test(string)) {
      console.log('Contiene solo minúsculas');
    } else if (/^[A-Za-z]+$/.test(string)) {
      console.log('Contiene mayúsculas y minúsculas');
    } else {
      console.log('No es una cadena válida');
    }
}
verificarCadena(string);