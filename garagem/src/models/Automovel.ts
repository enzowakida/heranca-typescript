import { Veiculo } from "./Veiculo.js";

export class Automovel extends Veiculo {
    private numeroPortas: number;
    private motor: string;

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string,
        numeroPortas: number,
        motor: string
    ) {
        super(marca, modelo, ano, cor);
        this.numeroPortas = numeroPortas;
        this.motor = motor;
    }

    public get getNumeroPortas(): number { return this.numeroPortas; }
    public get getMotor(): string { return this.motor; }

    public set setNumeroPortas(novoNumeroPortas: number) {
        if (novoNumeroPortas == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.numeroPortas = novoNumeroPortas;
    }

    public set setMotor(novoMotor: string) {
        if (novoMotor.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.motor = novoMotor;
    }
}