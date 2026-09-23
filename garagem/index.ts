import readLine from "readline-sync";
import { Automovel } from "./src/models/Automovel.js";

console.log("=== CADASTRO DE VEICULO ===");
const novoAutomovel = new Automovel(
    "Honda",
    "Honda Civic 1996",
    1996,
    "Prata",
    4,
    "top?",
);

console.log(`Marca: ${novoAutomovel.getMarca}`);
console.log(`Modelo: ${novoAutomovel.getModelo}`);
console.log(`Ano: ${novoAutomovel.getAno}`);
console.log(`Cor: ${novoAutomovel.getCor}`);
console.log(`Numero de portas: ${novoAutomovel.getNumeroPortas}`);
console.log(`Motor: ${novoAutomovel.getMotor}`);

// Interação via teclado utilizando herança
novoAutomovel.setMarca = readLine.question("\nDigite a marca do automovel: ");
novoAutomovel.setModelo = readLine.question("Digite o modelo do automovel: ");
novoAutomovel.setAno = readLine.questionInt("Digite o ano de produção do automovel: ");
novoAutomovel.setCor = readLine.question("Digite a cor do automovel: ");
novoAutomovel.setNumeroPortas = readLine.questionInt("Digite o numero de portas do automovel: ");
novoAutomovel.setMotor = readLine.question("Digite o motor do automovel: ");

// Exibindo TODOS os dados dos veiculos no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS VEICULOS            ");
console.log("================================================");
// Dados herdados da classe Veiculo
console.log(`Marca:                  ${novoAutomovel.getMarca}`);
console.log(`Modelo:                 ${novoAutomovel.getModelo}`);
console.log(`Ano:                    ${novoAutomovel.getAno}`);
console.log(`Cor:                    ${novoAutomovel.getCor}`);
console.log("================================================");
// Dados específicos da classe Automovel
console.log(`Numero de Portas:       ${novoAutomovel.getNumeroPortas}`);
console.log(`Motor:                  ${novoAutomovel.getMotor}`);
console.log("================================================\n");