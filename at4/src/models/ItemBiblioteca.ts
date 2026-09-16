export class Biblioteca {
    private titulo: string;
    private anoPublicado: number;

    constructor(
        titulo: string, 
        anoPublicado: number, 
    ) {
        this.titulo = titulo;
        this.anoPublicado = anoPublicado;
    }

    public get getTitulo(): string { return this.titulo; }
    public get getAnoPublicado(): number { return this.anoPublicado; }

    public set setTitulo(novoTitulo: string) {
        if (novoTitulo.trim().length === 0) {
            console.log("\n O titulo não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
    }

    public set setAnoPublicado(novoAnoPublicado: number) {
        if (novoAnoPublicado == 0) {
            console.log("\n O ano publicado não pode ser vazio!");
            return;
        }
        this.anoPublicado = novoAnoPublicado;
    }
}