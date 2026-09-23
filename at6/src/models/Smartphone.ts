import { Produto } from "./Produto.js";

export class Smartphone extends Produto {
    private armazenamentoGB: number;

    constructor(
        codigoBarras: number,
        fabricante: string,
        preco: number,
        armazenamentoGB: number
    ) {
        super(codigoBarras, fabricante, preco);
        this.armazenamentoGB = armazenamentoGB;
    }

    public get getArmazenamentoGB(): number { return this.armazenamentoGB; }

    public set setArmazenamentoGB(novoArmazenamentoGB: number) {
        if (novoArmazenamentoGB == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.armazenamentoGB = novoArmazenamentoGB;
    }
}