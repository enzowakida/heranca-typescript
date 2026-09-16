import { Funcionario } from "./Funcionario.js";

export class Engenheiro extends Funcionario {
    private numCrea: number;

    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: string,
        endereco: string,
        dataNascimento: string,
        numCrea: number
    ) {
        super(nome, matricula, salario, telefone, endereco, dataNascimento);
        this.numCrea = numCrea;
    }

    public get getNumCrea(): number { return this.numCrea; }

    public set setNumCrea(novoNumCrea: number) {
        if (novoNumCrea == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.numCrea = novoNumCrea;
    }
}