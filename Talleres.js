export default class Talleres {
    constructor(taller){
        this._numId = taller.numId
        this._nomT = taller.nomT;
        this._fechaI = taller.fechaI;
        this._fechaF = taller.fechaF;
        this._duracion = taller.duracion;
        this._lugares = taller.lugares;
    }

    get numId(){
        return this._numId;
    }

    get nomT() {
        return this._nomT;
    }

    get fechaI() {
        return this._fechaI;
    }

    get fechaF() {
        return this._fechaF;
    }

    get duracion() {
        return this._duracion;
    }
    get lugares() {
        return this._lugares;
    }


}