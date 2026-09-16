import { Funcionario } from "./Funcionario.js";

export class Medico extends Funcionario {
    private crm: number;

    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: string,
        endereco: string,
        dataNascimento: string,
        crm: number
    ) {
        super(nome, matricula, salario, telefone, endereco, dataNascimento);
        this.crm = crm;
    }

    public get getCrm(): number { return this.crm; }

    public set setCrm(novoCrm: number) {
        if (novoCrm == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.crm = novoCrm;
    }
}