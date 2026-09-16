import { Funcionario } from "./Funcionario.js";
export class Engenheiro extends Funcionario {
    numCrea;
    constructor(nome, matricula, salario, telefone, endereco, dataNascimento, numCrea) {
        super(nome, matricula, salario, telefone, endereco, dataNascimento);
        this.numCrea = numCrea;
    }
    get getNumCrea() { return this.numCrea; }
    set setNumCrea(novoNumCrea) {
        if (novoNumCrea == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.numCrea = novoNumCrea;
    }
}
