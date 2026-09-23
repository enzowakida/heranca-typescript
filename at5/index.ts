import readLine from "readline-sync";
import { Programador } from "./src/models/Programador.js";
import { Gerente } from "./src/models/Gerente.js";

console.log("=== CADASTRO DE FUNCIONÁRIO ===");
const novoProgramador = new Programador(
    "Enzo Hideyuki Wakida",
    6969696969,
    5368.00,
    "TypeScript"
);

const novoGerente = new Gerente(
    "Kayque Affonso",
    4242424242,
    7650.00,
    1500
);

console.log(`Funcionário cadastrado: ${novoProgramador.getNome}`);
console.log(`Matricula: ${novoProgramador.getMatricula}`);

console.log(`Funcionário cadastrado: ${novoGerente.getNome}`);
console.log(`Matricula: ${novoGerente.getMatricula}`);

// Interação via teclado utilizando herança
novoProgramador.setNome = readLine.question("\nDigite o nome atualizado do novo Programador: ");
novoProgramador.setMatricula = readLine.questionInt("Digite a nova matricula: ");

novoGerente.setNome = readLine.question("\nDigite o nome atualizado do novo Gerente: ");
novoGerente.setMatricula = readLine.questionInt("Digite a nova matricula: ");

// Exibindo TODOS os dados do funcionário no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS FUNCIONÁRIOS            ");
console.log("==================================================");
// Dados herdados da classe Programador
console.log(`Nome:                              ${novoProgramador.getNome}`);
console.log(`Matricula:                         ${novoProgramador.getMatricula}`);
console.log(`Salario:                           ${novoProgramador.getSalario}`);
console.log(`Linguagem Principal:               ${novoProgramador.getLingPrincipal}`);
console.log("================================================");
// Dados específicos da classe Gerente
console.log(`Nome:                              ${novoGerente.getNome}`);
console.log(`Matricula:                         ${novoGerente.getMatricula}`);
console.log(`Salario:                           ${novoGerente.getSalario}`);
console.log(`Bonus Anual:                       ${novoGerente.getBonusAnual}`);
console.log("================================================\n");