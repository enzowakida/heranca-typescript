import readLine from "readline-sync";
import { Corrente } from "./src/models/Corrente.js";
import { Poupanca } from "./src/models/Poupanca.js";

console.log("=== CADASTRO DE CONTA ===");
const novoCorrente = new Corrente(
    "Enzo Wakida",
    424,
    721.85,
    1000.00,
);
const novoPoupanca = new Poupanca(
    "Kayque Affonso",
    627,
    2400.00,
    2
);

console.log(`Conta cadastrada: ${novoCorrente.getTitular}`);
console.log(`Agencia: ${novoCorrente.getAgencia}`);

console.log(`Conta cadastrada: ${novoPoupanca.getTitular}`);
console.log(`Agencia: ${novoPoupanca.getAgencia}`);

// Interação via teclado utilizando herança
novoCorrente.setTitular = readLine.question("\nDigite o novo titular: ");
novoCorrente.setAgencia = readLine.questionInt("Digite a nova agencia: ");

novoPoupanca.setTitular = readLine.question("\nDigite o novo titular: ");
novoPoupanca.setAgencia = readLine.questionInt("Digite a nova agencia: ");

// Exibindo TODOS os dados do funcionário no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DAS CONTAS            ");
console.log("================================================");
// Dados herdados da classe PessoaFisica
console.log(`Titular:                       ${novoCorrente.getTitular}`);
console.log(`Agencia:                       ${novoCorrente.getAgencia}`);
console.log(`Saldo:                         ${novoCorrente.getSaldo}`);
console.log(`Limite do Cheque Especial:     ${novoCorrente.getLimiteChequeEspecial}`);
console.log("================================================\n");
// Dados específicos da classe Funcionario
console.log(`Titular:                       ${novoPoupanca.getTitular}`);
console.log(`Agencia:                       ${novoPoupanca.getAgencia}`);
console.log(`Saldo:                         ${novoPoupanca.getSaldo}`);
console.log(`Taxa de Rendimento Mensal:     ${novoPoupanca.getTaxaRendimentoMensal}`);
console.log("================================================\n");