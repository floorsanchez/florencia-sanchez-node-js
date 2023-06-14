const prompt=require("prompt-sync")();
let dinero = 50;

while (dinero > 0 && dinero < 200) {
  let apuestaNumero = prompt(`Tienes ${dinero} pesos disponibles para apostar. ¿A que número quieres apostarle?: `);
  let numero = apuestaNumero ? parseInt(apuestaNumero) : 1;
  let apuestaCantidad = prompt(`¿Cuánto dinero quieres apostar?`);
  let cantidad = apuestaCantidad ? parseInt(apuestaCantidad) : 20;
  let dado = Math.floor(Math.random() * 6) + 1;
  console.log(`El número del dado es ${dado}`);

  if (dado === numero) {
    let ganancia = cantidad * 2;
    dinero += ganancia;
    console.log(`¡Felicidades! Has ganado ${ganancia} pesos. Ahora tienes ${dinero} pesos.`);
  } else {
    dinero -= cantidad;
    console.log(`Lo siento, has perdido ${cantidad} pesos. Ahora tienes ${dinero} pesos.`);
  }
}

if (dinero >= 200) {
  console.log("¡Felicidades! Has ganado el juego.");
} else {
  console.log("Lo siento, has perdido el juego.");
}
