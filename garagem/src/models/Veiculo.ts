export class Veiculo {
    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;

    constructor(
        marca: string, 
        modelo: string, 
        ano: number,
        cor: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    public get getMarca(): string { return this.marca; }
    public get getModelo(): string { return this.modelo; }
    public get getAno(): number { return this.ano; }
    public get getCor(): string { return this.cor; }

    public set setMarca(novoMarca: string) {
        if (novoMarca.trim().length === 0) {
            console.log("\n A marca não pode ser vazia!");
            return;
        }
        this.marca = novoMarca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n O modelo não pode ser vazio!");
            return;
        }
        this.modelo = novoModelo;
    }

    public set setAno(novoAno: number) {
        if (novoAno == 0) {
            console.log("\n O ano não pode ser vazio!");
            return;
        }
        this.ano = novoAno;
    }

    public set setCor(novoCor: string) {
        if (novoCor.trim().length === 0) {
            console.log("\n A cor não pode ser vazia!");
            return;
        }
        this.cor = novoCor;
    }
}