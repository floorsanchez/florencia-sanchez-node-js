const prompt=require("prompt-sync")();

var nom= prompt("Ingrese el string: ");

function abbrevName(nom) {
    const nomArray = nom.split(" ");
    const iniciales = nomArray.map(ini => ini.charAt(0).toUpperCase()).join(".");
    let nom_mayuscula = nom.split(" ").map(ini => ini.charAt(0).toUpperCase() + ini.slice(1)).join(" ");
    
    console.log("abbrevName(" + nom_mayuscula+ ") ==> "+ iniciales + "");
}
abbrevName(nom);

