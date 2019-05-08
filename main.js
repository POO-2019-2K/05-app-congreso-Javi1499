import Talleres from "./Talleres.js";
import ListaT from "./ListaT.js"
class Main {
    constructor() {
        let tabla = new ListaT(document.querySelector("#listado"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let nomT = document.querySelector("#nT").value;
            let fechaI = document.querySelector("#fechaInicio").value;
            let fechaF = document.querySelector("#fechaFinal").value;
            let duracion = document.querySelector("#duracion").value;
            let lugares = document.querySelector("#lugares").value;


            let objTaller = {
                nomT: nomT,
                fechaI: fechaI,
                fechaF: fechaF,
                duracion: duracion,
                lugares: lugares
            }

            let taller = new Talleres(objTaller);

            tabla.addTaller(taller);


        })
    }

}

let m = new Main();