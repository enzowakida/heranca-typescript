export class PessoaFisica {
    cpf;
    nome;
    telefone;
    email;
    dataNascimento;
    constructor(cpf, nome, telefone, email, dataNascimento) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
    get getCpf() { return this.cpf; }
    get getNome() { return this.nome; }
    get getTelefone() { return this.telefone; }
    get getEmail() { return this.email; }
    get getDataNascimento() { return this.dataNascimento; }
    set setCpf(novoCpf) {
        if (novoCpf.trim().length === 0) {
            console.log("\n O CPF não pode ser vazio!");
            return;
        }
        this.cpf = novoCpf;
    }
    set setNome(novoNome) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }
    set setTelefone(novoTelefone) {
        if (novoTelefone.trim().length === 0) {
            console.log("\n O telefone não pode ser vazio!");
            return;
        }
        this.telefone = novoTelefone;
    }
    set setEmail(novoEmail) {
        if (novoEmail.trim().length === 0) {
            console.log("\n O email não pode ser vazio!");
            return;
        }
        this.email = novoEmail;
    }
    set setDataNascimento(novoDataNascimento) {
        if (novoDataNascimento.trim().length === 0) {
            console.log("\n A data de nascimento não pode ser vazia!");
            return;
        }
        this.dataNascimento = novoDataNascimento;
    }
}
