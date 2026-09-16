import { Funcionario } from "./Funcionario.js";
export class Administrador extends Funcionario {
    cra;
    constructor(nome, matricula, salario, telefone, endereco, dataNascimento, cra) {
        super(nome, matricula, salario, telefone, endereco, dataNascimento);
        this.cra = cra;
    }
    get getCra() { return this.cra; }
    set setCra(novoCra) {
        if (novoCra == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.cra = novoCra;
    }
}
