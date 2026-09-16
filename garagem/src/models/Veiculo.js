export class Veiculo {
    marca;
    modelo;
    ano;
    cor;
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    get getMarca() { return this.marca; }
    get getModelo() { return this.modelo; }
    get getAno() { return this.ano; }
    get getCor() { return this.cor; }
    set setMarca(novoMarca) {
        if (novoMarca.trim().length === 0) {
            console.log("\n A marca não pode ser vazia!");
            return;
        }
        this.marca = novoMarca;
    }
    set setModelo(novoModelo) {
        if (novoModelo.trim().length === 0) {
            console.log("\n O modelo não pode ser vazio!");
            return;
        }
        this.modelo = novoModelo;
    }
    set setAno(novoAno) {
        if (novoAno == 0) {
            console.log("\n O ano não pode ser vazio!");
            return;
        }
        this.ano = novoAno;
    }
    set setCor(novoCor) {
        if (novoCor.trim().length === 0) {
            console.log("\n A cor não pode ser vazia!");
            return;
        }
        this.cor = novoCor;
    }
}
