import readLine from "readline-sync";
import { Televisao } from "./src/models/Televisao.js";
import { Smartphone } from "./src/models/Smartphone.js";

console.log("=== CADASTRO DE FUNCIONÁRIO ===");
const novoTelevisao = new Televisao(
    7424237,
    "Samsung",
    2000.00,
    32
);

const novoSmartphone = new Smartphone(
    843654432,
    "Iphone",
    13000,
    256,
);

console.log(`\nProduto cadastrado: ${novoTelevisao.getCodigoBarras}`);
console.log(`Fabricante: ${novoTelevisao.getFabricante}`);

console.log(`\nProduto cadastrado: ${novoSmartphone.getCodigoBarras}`);
console.log(`Fabricante: ${novoSmartphone.getFabricante}`);

// Interação via teclado utilizando herança
novoTelevisao.setCodigoBarras = readLine.questionInt("\nDigite o novo codigo de barras: ");
novoTelevisao.setFabricante = readLine.question("Digite o novo fabricante: ");

novoSmartphone.setCodigoBarras = readLine.questionInt("\nDigite o novo codigo de barras: ");
novoSmartphone.setFabricante = readLine.question("Digite o novo fabricante: ");

// Exibindo TODOS os dados do funcionário no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS PRODUTOS            ");
console.log("================================================");
// Dados herdados da classe Televisao
console.log(`Codigo de barras:                    ${novoTelevisao.getCodigoBarras}`);
console.log(`Fabricante:                          ${novoTelevisao.getFabricante}`);
console.log(`Preco:                               ${novoTelevisao.getPreco}`);
console.log(`Tamanho da tela (polegadas):         ${novoTelevisao.getTamanhoTelaPolegadas}`);
console.log("================================================\n");
// Dados específicos da classe Smartphone
console.log(`Codigo de barras:                    ${novoSmartphone.getCodigoBarras}`);
console.log(`Fabricante:                          ${novoSmartphone.getFabricante}`);
console.log(`Preco:                               ${novoSmartphone.getPreco}`);
console.log(`Armazenamento (GB):                  ${novoSmartphone.getArmazenamentoGB}`);
console.log("================================================\n");