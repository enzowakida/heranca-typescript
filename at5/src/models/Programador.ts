import { Funcionario } from "./Funcionario.js";

export class Programador extends Funcionario {
    private lingPrincipal: string;

    constructor(
        nome: string,
        matricula: number,
        salario: number,
        lingPrincipal: string
    ) {
        super(nome, matricula, salario);
        this.lingPrincipal = lingPrincipal;
    }

    public get getLingPrincipal(): string { return this.lingPrincipal; }

    public set setClienteDesde(novoLingPrincipal: string) {
        if (novoLingPrincipal.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.lingPrincipal = novoLingPrincipal;
    }
}