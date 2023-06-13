const prompt= require("prompt-sync")();
var num=prompt("Ingrese los segundos:")
function toTime(num){
    const horas= Math.floor(num / 3600);
    const minutos=Math.floor((num % 3600) / 60);

    console.log("toTime("+ num + ") ==> " + horas + " horas y " + minutos + " minutos");
}
toTime(num);