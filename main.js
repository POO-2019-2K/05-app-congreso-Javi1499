import ListaT from "./ListaT.js";
import Talleres from "./Talleres.js"

class Main {
    constructor() {
        this._listaT = new ListaT(document.querySelector("#listado"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            if (form.checkValidity() === true){

            var nombre = document.querySelector("#nT");
            var fechaI = document.querySelector("#fechaInicio");
            var fechaF = document.querySelector("#fechaFinal");
            var duracion = document.querySelector("#duracion");
            var lugares = document.querySelector("#lugares");

            let objTalleres = {
                nombre: nombre,
                fechaI: fechaI,
                fechaF: fechaF,
                duracion: duracion,
                lugares: lugares
            }

            let taller = new Talleres(objTalleres);

            this._listaT.addTaller(taller);
        }
        form.classList.add("was-validated");

        })
    }


}

let m = new Main();