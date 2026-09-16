import { Funcionario } from "./Funcionario.js";
export class Medico extends Funcionario {
    crm;
    constructor(nome, matricula, salario, telefone, endereco, dataNascimento, crm) {
        super(nome, matricula, salario, telefone, endereco, dataNascimento);
        this.crm = crm;
    }
    get getCrm() { return this.crm; }
    set setCrm(novoCrm) {
        if (novoCrm == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.crm = novoCrm;
    }
}
