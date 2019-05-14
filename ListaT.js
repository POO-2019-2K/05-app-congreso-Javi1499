import Talleres from "./Talleres.js"
export default class ListaT {
    constructor(tableT) {
        this._tablaTalleres = tableT;
        this._talleresArray = [];
        this._initTables();
    }

    _initTables() {
        //localStorage.removeItem("talleres")
        let lsProductos = JSON.parse(localStorage.getItem("talleres1"));
        if (lsProductos === null) {
            return;
        }
        lsProductos.forEach((e, index) => {
            this._showInTable(new Talleres(e));
        });
    }

    _showInTable(taller) {
        let row = this._tablaTalleres.insertRow(-1);

        let cellNomT = row.insertCell(0);
        let cellFechaI = row.insertCell(1);
        let cellFechaF = row.insertCell(2);
        let cellDuracion = row.insertCell(3);
        let cellLugares = row.insertCell(4);

        cellNomT.innerHTML = 1+1;
        cellFechaI.innerHTML = taller.fechaI;
        cellFechaF.innerHTML = taller.fechaF;
        cellDuracion.innerHTML = taller.duracion;
        cellLugares.innerHTML = taller.lugares;

        let objTaller = {
            nomT: taller.nomT,
            fechaI: taller.fechaI,
            fechaF: taller.fechaF,
            duracion: taller.duracion,
            lugares: taller.lugares
        }
        this._talleresArray.push(objTaller);
    }
    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres1", JSON.stringify(this._talleresArray));
        localStorage.setItem("talleres1", JSON.stringify(this._talleresArray));
    }
}