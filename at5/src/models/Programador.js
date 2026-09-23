"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programador = void 0;
const Funcionario_js_1 = require("./Funcionario.js");
class Programador extends Funcionario_js_1.Funcionario {
    lingPrincipal;
    constructor(nome, matricula, salario, lingPrincipal) {
        super(nome, matricula, salario);
        this.lingPrincipal = lingPrincipal;
    }
    get getLingPrincipal() { return this.lingPrincipal; }
    set setClienteDesde(novoLingPrincipal) {
        if (novoLingPrincipal.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.lingPrincipal = novoLingPrincipal;
    }
}
exports.Programador = Programador;
