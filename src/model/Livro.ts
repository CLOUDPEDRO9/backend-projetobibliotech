/**
 * Classe que representa um livro.
 */
export class Livro {

    /* Atributos */
    /**
     * Identificador do livro.
     * Inicializado com o valor padrão de 0.
     */
    private idLivro: number = 0;

    /**
     * Título do livro.
     */
    private titulo: string;

    /**
     * Autor do livro.
     */
    private autor: string;

    /**
     * Editora do livro.
     */
    private editora: string;

    /**
     * Ano de publicação do livro.
     */
    private anoPublicacao: Date;

    /**
     * ISBN do livro.
     */
    private isbn: string;

    /**
     * Quantidade total de cópias do livro.
     */
    private quantTotal: number;

    /**
     * Quantidade de cópias disponíveis para empréstimo.
     */
    private quantDisponivel: number;

    /**
     * Valor de aquisição do livro.
     */
    private valorAquisicao: number;

    /**
     * Status indicando se o livro está emprestado.
     */
    private statusLivroEmprestado: string;

    /**
     * Construtor da classe Livro.
     * Inicializa os atributos com os valores fornecidos.
     * 
     * @param titulo Título do livro.
     * @param autor Autor do livro.
     * @param editora Editora do livro.
     * @param anoPublicacao Ano de publicação do livro.
     * @param isbn ISBN do livro.
     * @param quantTotal Quantidade total de cópias do livro.
     * @param quantDisponivel Quantidade de cópias disponíveis para empréstimo.
     * @param valorAquisicao Valor de aquisição do livro.
     * @param statusLivroEmprestado Status do livro em relação ao empréstimo.
     */
    constructor(
        titulo: string,
        autor: string,
        editora: string,
        anoPublicacao: Date,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string,
    ) {
        this.titulo = titulo;                      // Atribui o título ao atributo titulo.
        this.autor = autor;                        // Atribui o autor ao atributo autor.
        this.editora = editora;                    // Atribui a editora ao atributo editora.
        this.anoPublicacao = anoPublicacao;        // Atribui o ano de publicação ao atributo anoPublicacao.
        this.isbn = isbn;                          // Atribui o ISBN ao atributo isbn.
        this.quantTotal = quantTotal;              // Atribui a quantidade total ao atributo quantTotal.
        this.quantDisponivel = quantDisponivel;    // Atribui a quantidade disponível ao atributo quantDisponivel.
        this.valorAquisicao = valorAquisicao;      // Atribui o valor de aquisição ao atributo valorAquisicao.
        this.statusLivroEmprestado = statusLivroEmprestado; // Atribui o status do livro ao atributo statusLivroEmprestado.
    }

    /* Métodos get e set */

    /**
     * Retorna o identificador do livro.
     * 
     * @returns {number} O identificador do livro.
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Define o identificador do livro.
     * 
     * @param idLivro O novo identificador do livro.
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna o título do livro.
     * 
     * @returns {string} O título do livro.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Define o título do livro.
     * 
     * @param titulo O novo título do livro.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Retorna o autor do livro.
     * 
     * @returns {string} O autor do livro.
     */
    public getAutor(): string {
        return this.autor;
    }

    /**
     * Define o autor do livro.
     * 
     * @param autor O novo autor do livro.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * Retorna a editora do livro.
     * 
     * @returns {string} A editora do livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define a editora do livro.
     * 
     * @param editora A nova editora do livro.
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * Retorna o ano de publicação do livro.
     * 
     * @returns {Date} O ano de publicação do livro.
     */
    public getAnoPublicacao(): Date {
        return this.anoPublicacao;
    }

    /**
     * Define o ano de publicação do livro.
     * 
     * @param anoPublicacao O novo ano de publicação do livro.
     */
    public setAnoPublicacao(anoPublicacao: Date): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     * Retorna o ISBN do livro.
     * 
     * @returns {string} O ISBN do livro.
     */
    public getIsbn(): string {
        return this.isbn;
    }

    /**
     * Define o ISBN do livro.
     * 
     * @param isbn O novo ISBN do livro.
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    /**
     * Retorna a quantidade total de cópias do livro.
     * 
     * @returns {number} A quantidade total de cópias.
     */
    public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * Define a quantidade total de cópias do livro.
     * 
     * @param quantTotal A nova quantidade total de cópias.
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    /**
     * Retorna a quantidade de cópias disponíveis para empréstimo.
     * 
     * @returns {number} A quantidade de cópias disponíveis.
     */
    public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    /**
     * Define a quantidade de cópias disponíveis para empréstimo.
     * 
     * @param quantDisponivel A nova quantidade de cópias disponíveis.
     */
    public setQuantidadeDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

    /**
     * Retorna o valor de aquisição do livro.
     * 
     * @returns {number} O valor de aquisição.
     */
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * Define o valor de aquisição do livro.
     * 
     * @param valorAquisicao O novo valor de aquisição.
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    /**
     * Retorna o status do livro em relação ao empréstimo.
     * 
     * @returns {string} O status do livro.
     */
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * Define o status do livro em relação ao empréstimo.
     * 
     * @param statusLivroEmprestado O novo status do livro.
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }
}
