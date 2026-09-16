import { Produto } from "./Produto.js";
export class Sorvete extends Produto {
    tempAdequada;
    constructor(id, nome, preco, tempAdequada) {
        super(id, nome, preco);
        this.tempAdequada = tempAdequada;
    }
    get getTempAdequada() { return this.tempAdequada; }
    set setTempAdequada(novoTempAdequada) {
        if (novoTempAdequada == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.tempAdequada = novoTempAdequada;
    }
}
