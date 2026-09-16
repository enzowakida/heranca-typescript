import readLine from "readline-sync";
import { Administrador } from "./src/models/Administrador.js";
import { Engenheiro } from "./src/models/Engenheiro.js";
import { Medico } from "./src/models/Medico.js";
console.log("=== CADASTRO DE FUNCIONÁRIO ===");
const novoAdministrador = new Administrador("Kauan Affonso", "xxx", 6780, "+15 1111-1111", "Bairro dos Bocós", "12/05/2010", 777);
const novoEngenheiro = new Engenheiro("Enzo Wakida", "zzz", 7340, "+15 2222-2222", "Vila Piedade", "??/??/2009", 67);
const novoMedico = new Medico("Kayque Affonso", "yyy", 9760, "+15 3333-3333", "Bairro dos Bocós", "12/05/2010", 69);
console.log(`Administrador cadastrado: ${novoAdministrador.getNome}`);
console.log(`CRA: ${novoAdministrador.getCra}`);
console.log(`Engenheiro cadastrado: ${novoEngenheiro.getNome}`);
console.log(`numCREA: ${novoEngenheiro.getNumCrea}`);
console.log(`Medico cadastrado: ${novoMedico.getNome}`);
console.log(`CRM: ${novoMedico.getCrm}`);
// Interação via teclado utilizando herança
novoAdministrador.setNome = readLine.question("\nDigite o nome atualizado do Administrador: ");
novoAdministrador.setCra = readLine.questionInt("Digite o novo CRA: ");
novoEngenheiro.setNome = readLine.question("\nDigite o nome atualizado do Engenheiro: ");
novoEngenheiro.setNumCrea = readLine.questionInt("Digite o novo numCREA: ");
novoMedico.setNome = readLine.question("\nDigite o nome atualizado do Medico: ");
novoMedico.setCrm = readLine.questionInt("Digite o novo CRM: ");
// Exibindo TODOS os dados do funcionário no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DOS FUNCIONÁRIOS           ");
console.log("================================================");
// Dados herdados da classe Administrador
console.log(`                ADMINISTRADOR                       `);
console.log(`Nome:                  ${novoAdministrador.getNome}`);
console.log(`Matricula:             ${novoAdministrador.getMatricula}`);
console.log(`Salario:               ${novoAdministrador.getSalario}`);
console.log(`Telefone:              ${novoAdministrador.getTelefone}`);
console.log(`Endereco:              ${novoAdministrador.getEndereco}`);
console.log(`Data de Nascimento:    ${novoAdministrador.getDataNascimento}`);
console.log(`CRA:                   ${novoAdministrador.getCra}`);
console.log("================================================");
// Dados herdados da classe Engenheiro
console.log(`                 ENGENHEIRO                         `);
console.log(`Nome:                  ${novoEngenheiro.getNome}`);
console.log(`Matricula:             ${novoEngenheiro.getMatricula}`);
console.log(`Salario:               ${novoEngenheiro.getSalario}`);
console.log(`Telefone:              ${novoEngenheiro.getTelefone}`);
console.log(`Endereco:              ${novoEngenheiro.getEndereco}`);
console.log(`Data de Nascimento:    ${novoEngenheiro.getDataNascimento}`);
console.log(`numCREA:               ${novoEngenheiro.getNumCrea}`);
console.log("================================================");
// Dados herdados da classe Medico
console.log(`                   MEDICO                           `);
console.log(`Nome:                  ${novoMedico.getNome}`);
console.log(`Matricula:             ${novoMedico.getMatricula}`);
console.log(`Salario:               ${novoMedico.getSalario}`);
console.log(`Telefone:              ${novoMedico.getTelefone}`);
console.log(`Endereco:              ${novoMedico.getEndereco}`);
console.log(`Data de Nascimento:    ${novoMedico.getDataNascimento}`);
console.log(`CRM:                   ${novoMedico.getCrm}`);
console.log("================================================\n");
