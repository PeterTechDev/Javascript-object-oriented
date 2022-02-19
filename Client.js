// O underline antes do cpf é uma convenção para indicar que esta variável é privada e não deve ser alterada

export class Client {
    name;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(name, cpf){
        this.name = name;
        this._cpf = cpf;
    }
}