export class Funcionario {
    private nome: string;
    private matricula: string;
    private salario: number;
    private telefone: string;
    private endereco: string;
    private dataNascimento: string;

    constructor(
        nome: string, 
        matricula: string, 
        salario: number,
        telefone: string,
        endereco: string,
        dataNascimento: string
    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
    }

    public get getNome(): string { return this.nome; }
    public get getMatricula(): string { return this.matricula; }
    public get getSalario(): number { return this.salario; }
    public get getTelefone(): string { return this.telefone; }
    public get getEndereco(): string { return this.endereco; }
    public get getDataNascimento(): string { return this.dataNascimento; }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public set setMatricula(novoMatricula: string) {
        if (novoMatricula.trim().length === 0) {
            console.log("\n A matricula não pode ser vazia!");
            return;
        }
        this.matricula = novoMatricula;
    }

    public set setSalario(novoSalario: number) {
        if (novoSalario == 0) {
            console.log("\n O salario não pode ser vazio!");
            return;
        }
        this.salario = novoSalario;
    }

    public set setTelefone(novoTelefone: string) {
        if (novoTelefone.trim().length === 0) {
            console.log("\n O telefone não pode ser vazio!");
            return;
        }
        this.telefone = novoTelefone;
    }

    public set setEndereco(novoEndereco: string) {
        if (novoEndereco.trim().length === 0) {
            console.log("\n O endereço não pode ser vazio!");
            return;
        }
        this.endereco = novoEndereco;
    }

    public set setDataNascimento(novoDataNascimento: string) {
        if (novoDataNascimento.trim().length === 0) {
            console.log("\n A data de nascimento não pode ser vazia!");
            return;
        }
        this.dataNascimento = novoDataNascimento;
    }
}