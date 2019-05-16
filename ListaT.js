import Talleres from "./Talleres.js"
export default class ListaT {
    constructor(tableT) {
        this._tablaTalleres = tableT;
        this._talleresArray = [];
        this._initTables();

    }

    _initTables() {
        //localStorage.removeItem("talleres1")
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

        let cellNumId = row.insertCell(0)
        let cellNomT = row.insertCell(1);
        let cellFechaI = row.insertCell(2);
        let cellFechaF = row.insertCell(3);
        let cellDuracion = row.insertCell(4);
        let cellLugares = row.insertCell(5);
        let cellEdit = row.insertCell(6);
        let cellDelete = row.insertCell(7);

        let btnEdit = document.createElement("input");
        btnEdit.type = "button";
        btnEdit.value = "Editar";
        btnEdit.className = "btn btn-success";
        

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";

        cellNumId.innerHTML = taller.numId;
        cellNomT.innerHTML = taller.nomT;
        cellFechaI.innerHTML = taller.fechaI;
        cellFechaF.innerHTML = taller.fechaF;
        cellDuracion.innerHTML = taller.duracion;
        cellLugares.innerHTML = taller.lugares;
        cellEdit.appendChild(btnEdit);
        cellDelete.appendChild(btnDelete);

        let objTaller = {
            numId: taller.numId,
            nomT: taller.nomT,
            fechaI: taller.fechaI,
            fechaF: taller.fechaF,
            duracion: taller.duracion,
            lugares: taller.lugares
        }
        this._talleresArray.push(objTaller);
    }

    _talleres(nomT) {
        let foundAt = -1;

        this._talleresArray.forEach((e, index) => {
            if (e.nomT === nomT) {
                foundAt = index;
                return;
            }
        });
        console.log(foundAt);
        return foundAt;
    }

    addTalleres(e) {
        let found = this._talleres(e.nomT);

        if (found >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "el taller ya esta registrado"
            });
            return;
        }
        this._showInTable(e);
        localStorage.setItem("talleres1", JSON.stringify(this._talleresArray));
        localStorage.setItem("talleres1", JSON.stringify(this._talleresArray));
    }

   
        
    
}