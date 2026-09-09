import { PessoaFisica } from "./PessoaFisica.js";
export class Funcionario extends PessoaFisica {
    registro;
    carteiraTrabalho;
    pis;
    constructor(cpf, nome, telefone, email, dataNascimento, registro, carteiraTrabalho, pis) {
        super(cpf, nome, telefone, email, dataNascimento);
        this.registro = registro;
        this.carteiraTrabalho = carteiraTrabalho;
        this.pis = pis;
    }
    get getRegistro() { return this.registro; }
    get getCarteiraTrabalho() { return this.carteiraTrabalho; }
    get getPis() { return this.pis; }
    set setRegistro(novoRegistro) {
        if (novoRegistro.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.registro = novoRegistro;
    }
    set setCarteiraTrabalho(novoCarteiraTrabalho) {
        if (novoCarteiraTrabalho.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.carteiraTrabalho = novoCarteiraTrabalho;
    }
    set setPis(novoPis) {
        if (novoPis.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.pis = novoPis;
    }
}
