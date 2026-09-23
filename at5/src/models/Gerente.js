"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_js_1 = require("./Funcionario.js");
class Gerente extends Funcionario_js_1.Funcionario {
    bonusAnual;
    constructor(nome, matricula, salario, bonusAnual) {
        super(nome, matricula, salario);
        this.bonusAnual = bonusAnual;
    }
    get getBonusAnual() { return this.bonusAnual; }
    set setBonusAnual(novoBonusAnual) {
        if (novoBonusAnual == 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.bonusAnual = novoBonusAnual;
    }
}
exports.Gerente = Gerente;
