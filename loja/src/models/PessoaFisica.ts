export class PessoaFisica {
    private cpf: string;
    private nome: string;
    private telefone: string;
    private email: string;
    private dataNascimento: string;

    constructor(
        cpf: string, 
        nome: string, 
        telefone: string,
        email: string,
        dataNascimento: string
    ) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }

    public get getCpf(): string { return this.cpf; }
    public get getNome(): string { return this.nome; }
    public get getTelefone(): string { return this.telefone; }
    public get getEmail(): string { return this.email; }
    public get getDataNascimento(): string { return this.dataNascimento; }

    public set setCpf(novoCpf: string) {
        if (novoCpf.trim().length === 0) {
            console.log("\n O CPF não pode ser vazio!");
            return;
        }
        this.cpf = novoCpf;
    }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public set setTelefone(novoTelefone: string) {
        if (novoTelefone.trim().length === 0) {
            console.log("\n O telefone não pode ser vazio!");
            return;
        }
        this.telefone = novoTelefone;
    }

    public set setEmail(novoEmail: string) {
        if (novoEmail.trim().length === 0) {
            console.log("\n O email não pode ser vazio!");
            return;
        }
        this.email = novoEmail;
    }

    public set setDataNascimento(novoDataNascimento: string) {
        if (novoDataNascimento.trim().length === 0) {
            console.log("\n A data de nascimento não pode ser vazia!");
            return;
        }
        this.dataNascimento = novoDataNascimento;
    }
}