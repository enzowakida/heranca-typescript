import { Funcionario } from "./Funcionario.js";

export class Administrador extends Funcionario {
    private cra: number;

    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: string,
        endereco: string,
        dataNascimento: string,
        cra: number
    ) {
        super(nome, matricula, salario, telefone, endereco, dataNascimento);
        this.cra = cra;
    }

    public get getCra(): number { return this.cra; }

    public set setCra(novoCra: number) {
        if (novoCra == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.cra = novoCra;
    }
}