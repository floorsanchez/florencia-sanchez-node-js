/*Crear una función pluck que tome dos parámetros, un arreglo de objetos y el nombre de una propiedad.
La función devolverá un nuevo arreglo solo con los valores dentro de la propiedad recibida.*/

const prompt=require("prompt-sync")();

let pro=prompt("ingresar un producto: ")
var precio=prompt ("Ingresar el valor: ")
pro_arr=[{nombre: "", precio:""}];

function pluck(nom,propiedad){
    
    let pro_arr = nom.map(obj => obj[propiedad]);
  
    return pro_arr;

}

  const nom = pluck(pro_arr, 'nom');
  console.log(nom); 
  
  const propiedad = pluck(pro_arr, 'propiedad');
  console.log(productos); 
  

 