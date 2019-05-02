var nombreT = document.querySelector("#nT");
var fechaI = document.querySelector("#fechaInicio");
var fechaF = document.querySelector("#fechaFinal");
var lugares = document.querySelector("#lugares");
var listado = document.querySelector("#listado");
var numT = 0
console.log(nombreT);
document.querySelector("#btnAdd").addEventListener("click", () =>{
    numT++;

    

listado = 'El taller ' + nombreT.value + ' estará disponible del ' + fechaI.value + ' al ' + fechaF.value + ' y tiene ' + lugares.value + ' lugares disponibles';



});