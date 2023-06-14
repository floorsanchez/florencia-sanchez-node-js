const prompt=require("prompt-sync")();
var paises = [
    {nombre: "argentina", continente: "sudamerica", poblacion: 40000000},
    {nombre: "brasil", continente: "sudamerica", poblacion: 300000000},
    {nombre: "venezuela", continente: "sudamerica", poblacion: 25000000},
    {nombre: "chile", continente: "sudamerica", poblacion: 10000000},
    {nombre: "australia", continente: "oceania", poblacion: 18000000},
    {nombre: "nueva zelanda", continente: "oceania", poblacion: 5000000},
    {nombre: "tailandia", continente: "asia", poblacion: 32000000},
    {nombre: "vietnam", continente: "asia", poblacion: 23000000},
    {nombre: "españa", continente: "europa", poblacion : 29000000},
    {nombre: "alemania", continente: "europa", poblacion: 33000000},
    {nombre: "francia", continente: "europa", poblacion: 65000000},
    {nombre: "portugal", continente: "europa", poblacion: 4000000},
    {nombre: "grecia", continente: "europa", poblacion: 12000000},
];
var continentee=prompt("Ingrese un continente: ");
var poblacioon=parseInt(prompt("Ingrese una cantidad de poblacion: "));
function doubleFilter(paises, continente, poblacion) {
    const paisesFiltrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    const nombres = paisesFiltrados.forEach(pais => console.log("nombres:", pais.nombre));
    const poblacionTotal = paisesFiltrados.reduce((acumulador, pais) => acumulador + pais.poblacion, 0);

    console.log("poblacion total: ", poblacionTotal);
}
doubleFilter(paises,continentee,poblacioon);