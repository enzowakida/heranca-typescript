import { Biblioteca } from "./ItemBiblioteca.js";

export class Revista extends Biblioteca {
    private edicao: number;

    constructor(
        titulo: string,
        anoPublicado: number,
        edicao: number
    ) {
        super(titulo, anoPublicado);
        this.edicao = edicao;
    }

    public get getEdicao(): number { return this.edicao; }

    public set setEdicao(novoEdicao: number) {
        if (novoEdicao == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.edicao = novoEdicao;
    }
}