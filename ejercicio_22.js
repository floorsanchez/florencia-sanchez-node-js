const prompt=require("prompt-sync")();
let num_arr=[];
let cero_arr=[];
function moveZeros(num_arr) {
    do{ 
        const num=prompt("Ingrese un numero:"); 
        num_arr=num_arr.push(num);
        var opcion= prompt("Desea ingresar otro numero? 1-Si / 2-No: ");
    } while (opcion==2);
    // Filtrar los elementos que no son ceros
    let nonZeroArr = num_arr.reduce(num => num !== 0);
    // Contar los ceros y crear un arreglo con esa cantidad de elementos
    let zeroArr = cero_arr(num_arr.length - nonZeroArr.length).fill(0);
  
    // Concatenar los arreglos de no-ceros y ceros
    console.log(nonZeroArr.concat(zeroArr));
}
moveZeros(num_arr);


  