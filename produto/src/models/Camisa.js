import { Produto } from "./Produto.js";
export class Camisa extends Produto {
    cor;
    tecido;
    tamanho;
    constructor(id, nome, preco, cor, tecido, tamanho) {
        super(id, nome, preco);
        this.cor = cor;
        this.tecido = tecido;
        this.tamanho = tamanho;
    }
    get getCor() { return this.cor; }
    get getTecido() { return this.tecido; }
    get getTamanho() { return this.tamanho; }
    set setCor(novoCor) {
        if (novoCor.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.cor = novoCor;
    }
    set setTecido(novoTecido) {
        if (novoTecido.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.tecido = novoTecido;
    }
    set setTamanho(novoTamanho) {
        if (novoTamanho.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.tamanho = novoTamanho;
    }
}
