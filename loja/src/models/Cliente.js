import { PessoaFisica } from "./PessoaFisica.js";
export class Cliente extends PessoaFisica {
    clienteDesde;
    constructor(cpf, nome, telefone, email, dataNascimento, clienteDesde) {
        super(cpf, nome, telefone, email, dataNascimento);
        this.clienteDesde = clienteDesde;
    }
    get getClienteDesde() { return this.clienteDesde; }
    set setClienteDesde(novoClienteDesde) {
        if (novoClienteDesde.trim().length === 0) {
            console.log("\n O campo não pode ser vazio!");
            return;
        }
        this.clienteDesde = novoClienteDesde;
    }
}
