import { Conta } from "./Conta.js";

export class Poupanca extends Conta {
    private taxaRendimentoMensal: number;

    constructor(
        titular: string,
        agencia: number,
        saldo: number,
        taxaRendimentoMensal: number
    ) {
        super(titular, agencia, saldo);
        this.taxaRendimentoMensal = taxaRendimentoMensal;
    }

    public get getTaxaRendimentoMensal(): number { return this.taxaRendimentoMensal; }

    public set setTaxaRendimentoMensal(novoTaxaRendimentoMensal: number) {
        if (novoTaxaRendimentoMensal == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.taxaRendimentoMensal = novoTaxaRendimentoMensal;
    }
}