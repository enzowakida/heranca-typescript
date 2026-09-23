export class Conta {
    private titular: string;
    private agencia: number;
    private saldo: number;

    constructor(
        titular: string, 
        agencia: number, 
        saldo: number
    ) {
        this.titular = titular;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    public get getTitular(): string { return this.titular; }
    public get getAgencia(): number { return this.agencia; }
    public get getSaldo(): number { return this.saldo; }

    public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n O titular não pode ser vazio!");
            return;
        }
        this.titular = novoTitular;
    }

    public set setAgencia(novoAgencia: number) {
        if (novoAgencia == 0) {
            console.log("\n A agencia não pode ser vazia!");
            return;
        }
        this.agencia = novoAgencia;
    }

    public set setSaldo(novoSaldo: number) {
        if (novoSaldo == 0) {
            console.log("\n O saldo não pode ser vazio!");
            return;
        }
        this.saldo = novoSaldo;
    }
}