import ListsT from "./ListaT.js";
import Talleres from "./Talleres.js"

class Main {
    constructor() {
        this._agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let sBirthday = document.querySelector("#birthday").value;
            //Se hace el split para tener fecha como vector//
            sBirthday = sBirthday.split('-');
            let birthday = new Date(sBirthday[0], sBirthday[1], sBirthday[2]);

            let employee = new Employee(name, email, birthday);

            this._agenda.addEmployee(employee);

        })
    }


}

let m = new Main();


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