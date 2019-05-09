import Participantes from "./Participantes.js";
export default class ListaP {
    constructor(tableTabla2) {
        this._tableTabla2 = tableTabla2;
        this._participante = [];
        this._initTables2();
    }

    _initTables2() {
        //localStorage.removeItem("participantes")
        let lsParticipante = JSON.parse(localStorage.getItem("participantes"));
        if (lsParticipante === null) {
            return;
        }
        lsParticipante.forEach((d, index) => {
            this._showInTable2(new Participantes)
        });
    }
    _showInTable2(participante) {
        let row = this._tableTabla2.insertRow(-1);

        let cellNomP = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellFechaN = row.insertCell(2);
        let cellNombreTP = row.insertCell(3);

        cellNomP.innerHTML = participante.nomP;
        cellEmail.innerHTML = participante.email;
        cellFechaN.innerHTML = participante.fechaN;
        cellNombreTP.innerHTML = participante.nombreTP;

        let objParticipante = {
            nomP: participante.nomP,
            email: participante.email,
            fechaN: participante.fechaN,
            nombreTP: participante.nombreTP,
        }
        this._participante.push(objParticipante);
    }
    addParticipante(participante) {
        this._showInTable2(participante);
        localStorage.setItem("participantes", JSON.stringify(this._participante));
        localStorage.setItem("participantes", JSON.stringify(this._participante));
    }
}