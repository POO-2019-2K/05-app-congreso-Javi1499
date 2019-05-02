export default class ListaT {
    constructor(tableTalleres, tableInfo) {
        this._tableTalleres = tableTalleres;
    }



    addTaller(taller){
        let row = this._tableTalleres.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellFechaI = row.insertCell(1);
        let cellFechaF = row.insertCell(2);
        let cellDuracion = row.insertCell(3);
        let cellLugares = row.insertCell(4);

        cellNombre.innerHTML = taller.nombre;
        cellFechaI.innerHTML = taller.fechaI;
        cellFechaF.innerHTML= taller.fechaF;
        cellDuracion.innerHTML = taller.duracion;
        cellLugares.innerHTML = taller.lugares;

    }
}