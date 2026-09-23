import { Produto } from "./Produto.js";

export class Televisao extends Produto {
    private tamanhoTelaPolegadas: number;

    constructor(
        codigoBarras: number,
        fabricante: string,
        preco: number,
        tamanhoTelaPolegadas: number
    ) {
        super(codigoBarras, fabricante, preco);
        this.tamanhoTelaPolegadas = tamanhoTelaPolegadas;
    }

    public get getTamanhoTelaPolegadas(): number { return this.tamanhoTelaPolegadas; }

    public set setTamanhoTelaPolegadas(novoTamanhoTelaPolegadas: number) {
        if (novoTamanhoTelaPolegadas == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.tamanhoTelaPolegadas = novoTamanhoTelaPolegadas;
    }
}