import readLine from "readline-sync";
import { Camisa } from "./src/models/Camisa.js";
import { Sorvete } from "./src/models/Sorvete.js";
console.log("=== CADASTRO DE PRODUTO ===");
const novoCamisa = new Camisa("115", "Camisa Thrasher", 199.99, "Vermelho", "Algodão", "M");
const novoSorvete = new Sorvete("115", "Camisa Thrasher", 119.99, 3);
console.log(`\nProduto cadastrado: ${novoCamisa.getNome}`);
console.log(`Preço: ${novoCamisa.getPreco}`);
console.log(`Temperatura Adequada: ${novoSorvete.getTempAdequada}`);
// Interação via teclado utilizando herança
novoCamisa.setNome = readLine.question("\nDigite o nome atualizado do produto: ");
novoCamisa.setPreco = readLine.questionInt("Digite o novo preco (R$): ");
novoSorvete.setTempAdequada = readLine.questionInt("Digite a nova temperatura adequada (°C): ");
// Exibindo TODOS os dados do produto no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS PRODUTOS            ");
console.log("================================================");
// Dados herdados da classe Produto
console.log(`ID:                   ${novoCamisa.getId}`);
console.log(`Nome:                 ${novoCamisa.getNome}`);
console.log(`Preço:                R$${novoCamisa.getPreco}`);
// Dados específicos da classe Camisa
console.log(`Cor:                  ${novoCamisa.getCor}`);
console.log(`Tecido:               ${novoCamisa.getTecido}`);
console.log(`Tamanho:              ${novoCamisa.getTamanho}`);
// Dados específicos da class Sorvete
console.log(`Temperatura Adequada: ${novoSorvete.getTempAdequada}°C`);
console.log("================================================\n");
