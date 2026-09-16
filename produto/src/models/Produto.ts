export class Produto {
    private id: string;
    private nome: string;
    private preco: number;

    constructor(
        id: string, 
        nome: string, 
        preco: number
    ) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public get getId(): string { return this.id; }
    public get getNome(): string { return this.nome; }
    public get getPreco(): number { return this.preco; }

    public set setId(novoId: string) {
        if (novoId.trim().length === 0) {
            console.log("\n O CPF não pode ser vazio!");
            return;
        }
        this.id = novoId;
    }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public set setPreco(novoPreco: number) {
        if (novoPreco == 0) {
            console.log("\n O telefone não pode ser vazio!");
            return;
        }
        this.preco = novoPreco;
    }
}