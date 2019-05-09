import Talleres from "./Talleres.js";
import ListaT from "./ListaT.js";
import Participantes from "./Participantes.js";
import ListaP from "./ListaP.js";
class Main {
    constructor() {
        let tabla = new ListaT(document.querySelector("#listado"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("form");
            form.classList.add("was-validated");

            if (form.checkValidity === true) {

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
            }

        })



    }
}

class Main2 {
    constructor() {
        let tabla2 = new ListaP(document.querySelector("#listado2"));
        document.querySelector("#btnAdd2").addEventListener("click", () => {

            let nomP = document.querySelector("#nombreP").value;
            let email = document.querySelector("#email").value;
            let fachaN = document.querySelector("#fechaNacimiento").value;
            let nombreTP = document.querySelector("#nomTallerP").value;


            let objParticipante = {
                nomP: nomP,
                email: email,
                fachaN: fachaN,
                nombreTP: nombreTP,
            }

            let participante = new Participantes(objParticipante);

            tabla2.addParticipante(participante);

        })
    }
}

let m = new Main();
let m2 = new Main2();