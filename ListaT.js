import Talleres from "./Talleres.js"
export default class ListaT {
    constructor(tableTabla) {
        this._tableTabla = tableTabla;
        this._productos = [];
        this._initTables();
    }

    _initTables() {
        //localStorage.removeItem("talleres")
        let lsProductos = JSON.parse(localStorage.getItem("talleres"));
        if (lsProductos === null) {
            return;
        }
        lsProductos.forEach((e, index) => {
            this._showInTable(new Talleres(e));
        });
    }

    _showInTable(taller) {
        let row = this._tableTabla.insertRow(-1);

        let cellNumP = row.insertCell(0);
        let cellNomP = row.insertCell(1);
        let cellCantidad = row.insertCell(2);
        let cellPrecio = row.insertCell(3);
        let cellLugares = row.insertCell(4);

        cellNumP.innerHTML = taller.nomT;
        cellNomP.innerHTML = taller.fechaI;
        cellCantidad.innerHTML = taller.fechaF;
        cellPrecio.innerHTML = taller.duracion;
        cellLugares.innerHTML = taller.lugares;

        let objTaller = {
            nomT: taller.nomT,
            fechaI: taller.fechaI,
            fechaF: taller.fechaF,
            duracion: taller.duracion,
            lugares: taller.lugares
        }
        this._productos.push(objTaller);
    }
    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._productos));
        localStorage.setItem("talleres", JSON.stringify(this._productos));
    }
}