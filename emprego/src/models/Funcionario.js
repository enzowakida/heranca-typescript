export class Funcionario {
    nome;
    matricula;
    salario;
    telefone;
    endereco;
    dataNascimento;
    constructor(nome, matricula, salario, telefone, endereco, dataNascimento) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
    }
    get getNome() { return this.nome; }
    get getMatricula() { return this.matricula; }
    get getSalario() { return this.salario; }
    get getTelefone() { return this.telefone; }
    get getEndereco() { return this.endereco; }
    get getDataNascimento() { return this.dataNascimento; }
    set setNome(novoNome) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }
    set setMatricula(novoMatricula) {
        if (novoMatricula.trim().length === 0) {
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
    set setTelefone(novoTelefone) {
        if (novoTelefone.trim().length === 0) {
            console.log("\n O telefone não pode ser vazio!");
            return;
        }
        this.telefone = novoTelefone;
    }
    set setEndereco(novoEndereco) {
        if (novoEndereco.trim().length === 0) {
            console.log("\n O endereço não pode ser vazio!");
            return;
        }
        this.endereco = novoEndereco;
    }
    set setDataNascimento(novoDataNascimento) {
        if (novoDataNascimento.trim().length === 0) {
            console.log("\n A data de nascimento não pode ser vazia!");
            return;
        }
        this.dataNascimento = novoDataNascimento;
    }
}
