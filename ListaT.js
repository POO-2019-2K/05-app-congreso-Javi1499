export default class ListaT {
    constructor(tableTalleres, tableInfo) {
        this._tableTalleres = tableTalleres;
        this._tableInfo = tableInfo;

        this._numEmployees = 0;
        this._averageAge = 0;
        this._sumAge = 0;
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

        this._numEmployees++;
        this._sumAge = this._sumAge + employee.getAge();
        this._averageAge = this._sumAge / this._numEmployees;
        this._tableInfo.rows[0].cells[1].innerHTML = this._numEmployees;
        this._tableInfo.rows[1].cells[1].innerHTML = this._averageAge.toFixed(1);
    }
}