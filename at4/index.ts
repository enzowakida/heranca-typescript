import readLine from "readline-sync";
import { Livro } from "./src/models/Livro.js";
import { Revista } from "./src/models/Revista.js"

console.log("=== CADASTRO DE LIVRO E REVISTA ===");
const novoLivro = new Livro(
    "Hábitos Atômicos",
    2019,
    "James Clear",
    314
);

const novoRevista = new Revista(
    "Turma da Mônica",
    2006,
    67
)

console.log(`Título: ${novoLivro.getTitulo}`);
console.log(`Autor: ${novoLivro.getAutor}`);

console.log(`Título: ${novoRevista.getTitulo}`)
console.log(`Autor: ${novoRevista.getEdicao}`)

// Interação via teclado utilizando herança
novoLivro.setTitulo = readLine.question("\nDigite o titulo atualizado do livro: ");
novoLivro.setAnoPublicado = readLine.questionInt("Digite o novo ano em que foi publicado: ");
novoLivro.setAutor = readLine.question("Digite o nome do autor do novo livro: ");
novoLivro.setNumeroPaginas = readLine.questionInt("Digite o numero de paginas que o novo livro possui: ");

novoRevista.setTitulo = readLine.question("Digite o titulo atualizado da revista: ");
novoRevista.setAnoPublicado = readLine.questionInt("Digite o ano em que foi publicado a nova revista: ");
novoRevista.setEdicao = readLine.questionInt("Digite a edicao da nova revista: ");

// Exibindo TODOS os dados do livro e da revista no final
console.log("\n================================================");
console.log("      DADOS COMPLETOS DO LIVRO E DA REVISTA            ");
console.log("==================================================");
// Dados herdados da classe Livro
console.log(`Titulo do Livro:                   ${novoLivro.getTitulo}`);
console.log(`Publicado no ano de:               ${novoLivro.getAnoPublicado}`);
console.log(`Autor:                             ${novoLivro.getAutor}`);
console.log(`Numero de paginas:                 ${novoLivro.getNumeroPaginas}`);
console.log("================================================");
// Dados específicos da classe Revista
console.log(`Titulo da Revista:                 ${novoRevista.getTitulo}`);
console.log(`Publicada no ano de:               ${novoRevista.getAnoPublicado}`);
console.log(`Edicao:                            ${novoRevista.getEdicao}`);
console.log("================================================\n");