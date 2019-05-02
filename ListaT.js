import Talleres from "./Talleres.js";

export default class ListaT {
    constructor(tableTalleres, tableInfo) {
        this._tableTalleres = tableTalleres;
        this._newTaller = [];
        this._initTables();
    }

    _initTables() {
        let nTalleres = JSON.parse (localStorage.getItem("talleres"));
        if (nTalleres === null) {
            return;
        }
        nTalleres.forEach((e, index) => {
            this._showInTable(new Talleres(e));
        });
    }



    _showInTable(taller) {
        let row = this._tableTalleres.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellFechaI = row.insertCell(1);
        let cellFechaF = row.insertCell(2);
        let cellDuracion = row.insertCell(3);
        let cellLugares = row.insertCell(4);

        cellNombre.innerHTML = taller.nombre;
        cellFechaI.innerHTML = taller.fechaI;
        cellFechaF.innerHTML = taller.fechaF;
        cellDuracion.innerHTML = taller.duracion;
        cellLugares.innerHTML = taller.lugares;

        let objTaller = {
            nombre: taller.nombre,
            fechaI: taller.fechaI,
            fechaF: taller.fechaF,
            duracion: taller.duracion,
            lugares : taller.lugares
        }
        this._newTaller.push(objTaller);
    }
    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._newTaller));

        localStorage.setItem("talleres", JSON.stringify(this._newTaller));
    }
}