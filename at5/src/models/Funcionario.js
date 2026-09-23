"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    get getNome() { return this.nome; }
    get getMatricula() { return this.matricula; }
    get getSalario() { return this.salario; }
    set setNome(novoNome) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }
    set setMatricula(novoMatricula) {
        if (novoMatricula == 0) {
            console.log("\n A matricula não pode ser vazia!");
            return;
        }
        this.matricula = novoMatricula;
    }
    set setSalario(novoSalario) {
        if (novoSalario == 0) {
            console.log("\n O salario não pode ser vazio!");
            return;
        }
        this.salario = novoSalario;
    }
}
exports.Funcionario = Funcionario;
