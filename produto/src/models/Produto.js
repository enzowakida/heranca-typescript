export class Produto {
    id;
    nome;
    preco;
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    get getId() { return this.id; }
    get getNome() { return this.nome; }
    get getPreco() { return this.preco; }
    set setId(novoId) {
        if (novoId.trim().length === 0) {
            console.log("\n O CPF não pode ser vazio!");
            return;
        }
        this.id = novoId;
    }
    set setNome(novoNome) {
        if (novoNome.trim().length === 0) {
            console.log("\n O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }
    set setPreco(novoPreco) {
        if (novoPreco == 0) {
            console.log("\n O telefone não pode ser vazio!");
            return;
        }
        this.preco = novoPreco;
    }
}
