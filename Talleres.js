export default class Talleres {
    constructor(nombre, fechaI, fechaF, duracion, lugares) {
        this._nombre =  nombre.toUpperCase();
        this._fechaI = fechaI;
        this._fechaF = fechaF;
        this._duracion = duracion;
        this._lugares = lugares
    }

    get nombre(){
        return this._nombre;
    }

    get fechaI(){
        return this._fechaI;
    }

    getfechaFAsString(){
        let d = this._fechaF.getDate()+ "/" + this._fechaF.getMonth() + "/" + this._fechaF.getFullYear();
        return d;
    }

    get fechaF(){
        return this._fechaF;
    }
    get duracion(){
        return this._duracion;
    }
    get lugares(){
        return this._lugares;
    }

////////////////////returns employee agee(abs es adsoluto)//////////////////////////////
    getAge() {
        let oneDay= (24*60*60*1000);
        let oneYear = oneDay * 365;
        let differenceMs = Math.abs(new Date() - this._fechaF);
        return Math.round(differenceMs / oneYear);
        }
}