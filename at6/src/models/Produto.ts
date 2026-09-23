export class Produto {
    private codigoBarras: number;
    private fabricante: string;
    private preco: number;

    constructor(
        codigoBarras: number, 
        fabricante: string, 
        preco: number,
    ) {
        this.codigoBarras = codigoBarras;
        this.fabricante = fabricante;
        this.preco = preco;
    }

    public get getCodigoBarras(): number { return this.codigoBarras; }
    public get getFabricante(): string { return this.fabricante; }
    public get getPreco(): number { return this.preco; }

    public set setCodigoBarras(novoCodigoBarras: number) {
        if (novoCodigoBarras == 0) {
            console.log("\n O Codigo de Barras não pode ser vazio!");
            return;
        }
        this.codigoBarras = novoCodigoBarras;
    }

    public set setFabricante(novoFabricante: string) {
        if (novoFabricante.trim().length === 0) {
            console.log("\n O nome do fabricante não pode ser vazio!");
            return;
        }
        this.fabricante = novoFabricante;
    }

    public set setPreco(novoPreco: number) {
        if (novoPreco == 0) {
            console.log("\n O Preco não pode ser vazio!");
            return;
        }
        this.preco = novoPreco;
    }
}