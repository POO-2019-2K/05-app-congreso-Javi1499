import Talleres from "./Talleres.js";
import ListaT from "./ListaT.js";
import ListaP from "./ListaP.js";
import Participantes from "./Participantes.js";


class Main {
    constructor() {
        let tabla = new ListaT(document.querySelector("#listado"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let numId = document.querySelector("#numId").value;
            let nomT = document.querySelector("#nT").value;
            let fechaI = document.querySelector("#fechaInicio").value;
            let fechaF = document.querySelector("#fechaFinal").value;
            let duracion = document.querySelector("#duracion").value;
            let lugares = document.querySelector("#lugares").value;


            let objTaller = {
                numId: numId,
                nomT: nomT,
                fechaI: fechaI,
                fechaF: fechaF,
                duracion: duracion,
                lugares: lugares
            }

            let taller = new Talleres(objTaller);

            tabla.addTalleres(taller);


        })
    }
}

let m = new Main();

class Main2 {
    constructor() {
        let tabla2 = new ListaP(document.querySelector("#listado2"));
        document.querySelector("#btnAdd2").addEventListener("click", () => {



            
            let nomP = document.querySelector("#nombreP").value;
            let email = document.querySelector("#email").value;
            let fechaN = document.querySelector("#fechaNacimiento").value;
            let nombreTP = document.querySelector("#nomTallerP").value;
            console.log(numId);


            let objParticipante = {
                nomP: nomP,
                email: email,
                fechaN: fechaN,
                nombreTP: nombreTP,
            }

            let participante = new Participantes(objParticipante);

            tabla2.addParticipante(participante);

        })

    }
}


let m2 = new Main2();