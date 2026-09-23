"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Programador_js_1 = require("./src/models/Programador.js");
const Gerente_js_1 = require("./src/models/Gerente.js");
console.log("=== CADASTRO DE FUNCIONÁRIO ===");
const novoProgramador = new Programador_js_1.Programador("Enzo Hideyuki Wakida", 6969696969, 5368.00, "TypeScript");
const novoGerente = new Gerente_js_1.Gerente("Kayque Affonso", 4242424242, 7650.00, 1500);
console.log(`Funcionário cadastrado: ${novoProgramador.getNome}`);
console.log(`Matricula: ${novoProgramador.getMatricula}`);
console.log(`Funcionário cadastrado: ${novoGerente.getNome}`);
console.log(`Matricula: ${novoGerente.getMatricula}`);
// Interação via teclado utilizando herança
novoProgramador.setNome = readline_sync_1.default.question("\nDigite o nome atualizado do novoProgramador: ");
novoProgramador.setMatricula = readline_sync_1.default.questionInt("Digite a nova matricula: ");
novoGerente.setNome = readline_sync_1.default.question("\nDigite o nome atualizado do novoGerente: ");
novoGerente.setMatricula = readline_sync_1.default.questionInt("Digite a nova matricula: ");
// Exibindo TODOS os dados do funcionário no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS FUNCIONÁRIOS            ");
console.log("==================================================");
// Dados herdados da classe Funcionario
console.log(`Nome:                              ${novoProgramador.getNome}`);
console.log(`Matricula:                         ${novoProgramador.getMatricula}`);
console.log(`Salario:                           ${novoProgramador.getSalario}`);
console.log(`Linguagem Principal:               ${novoProgramador.getLingPrincipal}`);
// Dados específicos da classe Gerente
console.log(`Nome:                              ${novoGerente.getNome}`);
console.log(`Matricula                          ${novoGerente.getMatricula}`);
console.log(`Salario:                           ${novoGerente.getSalario}`);
console.log(`Bonus Anual:                       ${novoGerente.getBonusAnual}`);
console.log("================================================\n");
