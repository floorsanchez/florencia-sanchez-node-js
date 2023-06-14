const prompt=require("prompt-sync")();

let balancesUltimoSemestre = [
    { mes: "enero", ganancia: 85 }, 
    { mes: "mayo", ganancia: 789 }, 
    { mes: "marzo", ganancia: -78 }, 
    { mes: "agosto", ganancia: -50 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes: "noviembre", ganancia: -85 }, 
    { mes: "diciembre", ganancia: 629 }
  ];
  
  function balancesPositivos(balances) {
    let cantidadBalancesPositivos = 0;
  
    for (let i = 0; i < balances.length; i++) {
      if (balances[i].ganancia > 0) {
        cantidadBalancesPositivos++;
      }
    }
  
    console.log("Cantidad de positivos:",cantidadBalancesPositivos);
  }
  
  console.log(balancesPositivos(balancesUltimoSemestre)); 
  