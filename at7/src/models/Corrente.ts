import { Conta } from "./Conta.js";

export class Corrente extends Conta {
    private limiteChequeEspecial: number;

    constructor(
        titular: string,
        agencia: number,
        saldo: number,
        limiteChequeEspecial: number
    ) {
        super(titular, agencia, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public get getLimiteChequeEspecial(): number { return this.limiteChequeEspecial; }

    public set setLimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        if (novoLimiteChequeEspecial == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.limiteChequeEspecial = novoLimiteChequeEspecial;
    }
}