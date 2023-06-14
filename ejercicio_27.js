const prompt=require("prompt-sync")();

let balancesUltimoSemestre = [
    { mes: "enero", ganancia: 85 }, 
    { mes: "mayo", ganancia: 789 }, 
    { mes: "agosto", ganancia: -50 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes: "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 629 }
  ];
  
  function gananciaTotal(balances) {
    let gananciaTotal = 0;
  
    for (let i = 0; i < balances.length; i++) {
      gananciaTotal += balances[i].ganancia;
    }
  
    console.log("Ganancia de los meses:",gananciaTotal);
  }
  
  console.log(gananciaTotal(balancesUltimoSemestre)); 
  
