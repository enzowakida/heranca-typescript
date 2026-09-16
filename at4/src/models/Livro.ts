import { Biblioteca } from "./ItemBiblioteca.js";

export class Livro extends Biblioteca {
    private autor: string;
    private numeroPaginas: number;

    constructor(
        titulo: string,
        anoPublicado: number,
        autor: string,
        numeroPaginas: number

    ) {
        super(titulo, anoPublicado);
        this.autor = autor;
        this.numeroPaginas = numeroPaginas
    }

    public get getAutor(): string { return this.autor; }
    public get getNumeroPaginas(): number { return this.numeroPaginas; }

    public set setAutor(novoAutor: string) {
        if (novoAutor.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.autor = novoAutor;
    }

    public set setNumeroPaginas(novoNumeroPaginas: number) {
        if (novoNumeroPaginas == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.numeroPaginas = novoNumeroPaginas;
    }
}