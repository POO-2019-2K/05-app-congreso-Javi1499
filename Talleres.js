export default class Talleres {
    constructor(taller) {
        this._nombre =  taller.nombre;
        this._fechaI = taller.fechaI;
        this._fechaF = taller.fechaF;
        this._duracion = taller.duracion;
        this._lugares = taller.lugares;
        this._x = x;
    }

    get nombre(){
        return this._nombre;
    }

    get fechaI(){
        return this._fechaI;
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