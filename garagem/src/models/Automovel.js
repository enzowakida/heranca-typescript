import { Veiculo } from "./Veiculo.js";
export class Automovel extends Veiculo {
    numeroPortas;
    motor;
    constructor(marca, modelo, ano, cor, numeroPortas, motor) {
        super(marca, modelo, ano, cor);
        this.numeroPortas = numeroPortas;
        this.motor = motor;
    }
    get getNumeroPortas() { return this.numeroPortas; }
    get getMotor() { return this.motor; }
    set setNumeroPortas(novoNumeroPortas) {
        if (novoNumeroPortas == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.numeroPortas = novoNumeroPortas;
    }
    set setMotor(novoMotor) {
        if (novoMotor.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.motor = novoMotor;
    }
}
