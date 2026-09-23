export class Funcionario {
    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(
        nome: string, 
        matricula: number, 
        salario: number,
    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    public get getNome(): string { return this.nome; }
    public get getMatricula(): number { return this.matricula; }
    public get getSalario(): number { return this.salario; }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public set setMatricula(novoMatricula: number) {
        if (novoMatricula == 0) {
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
}