import { Veiculo } from "./Veiculo.js";
export class Moto extends Veiculo {
    cilindrada;
    constructor(marca, modelo, ano, cor, cilindrada) {
        super(marca, modelo, ano, cor);
        this.cilindrada = cilindrada;
    }
    get getCilindrada() { return this.cilindrada; }
    set setCilindrada(novoCilindrada) {
        if (novoCilindrada == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.cilindrada = novoCilindrada;
    }
}
