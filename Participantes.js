export default class Participantes {
    constructor(participante){
        this._nomP = participante.nomP;
        this._email = participante.email;
        this._fechaN = participante.fechaN;
        this._nombreTP = participante.nombreTP;

    }
    get nomP() {
        return this._nomP;
    }

    get email() {
        return this._email;
    }

    get fechaN() {
        return this._fechaN;
    }

    get nombreTP() {
        return this._nombreTP;
    }
}