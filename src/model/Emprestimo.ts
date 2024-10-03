/**
 * Classe que representa um empréstimo de livro.
 */
export class Emprestimo {

    /* Atributos */
    /**
     * Identificador do empréstimo.
     * Inicializado com o valor padrão de 0.
     */
    private idEmprestimo: number = 0;
    /**
     * Identificador do aluno que realizou o empréstimo.
     */
    private idAluno: number;

    /**
     * Identificador do livro emprestado.
     */
    private idLivro: number;

    /**
     * Data em que o empréstimo foi realizado.
     */
    private dataEmprestimo: Date;

    /**
     * Data prevista para devolução do livro.
     */
    private dataDevolucao: Date;
    
    /**
     * Status atual do empréstimo (ex.: "em andamento", "devolvido").
     */
    private statusEmprestimo: string;

    /**
     * Construtor da classe Emprestimo.
     * Inicializa os atributos com os valores fornecidos.
     * 
     * @param idAluno Identificador do aluno que realizou o empréstimo.
     * @param idLivro Identificador do livro emprestado.
     * @param dataEmprestimo Data em que o empréstimo foi realizado.
     * @param dataDevolucao Data prevista para devolução do livro.
     * @param statusEmprestimo Status atual do empréstimo.
     */
    constructor(
        idAluno: number, 
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;                  // Atribui o ID do aluno ao atributo idAluno.
        this.idLivro = idLivro;                  // Atribui o ID do livro ao atributo idLivro.
        this.dataEmprestimo = dataEmprestimo;    // Atribui a data de empréstimo ao atributo dataEmprestimo.
        this.dataDevolucao = dataDevolucao;      // Atribui a data de devolução ao atributo dataDevolucao.
        this.statusEmprestimo = statusEmprestimo;// Atribui o status do empréstimo ao atributo statusEmprestimo.
    }

    /* Métodos get e set */

    /**
     * Retorna o identificador do empréstimo.
     * 
     * @returns {number} O identificador do empréstimo.
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Define o identificador do empréstimo.
     * 
     * @param idEmprestimo O novo identificador do empréstimo.
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Retorna o identificador do aluno que realizou o empréstimo.
     * 
     * @returns {number} O identificador do aluno.
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Define o identificador do aluno que realizou o empréstimo.
     * 
     * @param idAluno O novo identificador do aluno.
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna o identificador do livro emprestado.
     * 
     * @returns {number} O identificador do livro.
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Define o identificador do livro emprestado.
     * 
     * @param idLivro O novo identificador do livro.
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a data do empréstimo.
     * 
     * @returns {Date} A data do empréstimo.
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Define a data do empréstimo.
     * 
     * @param dataEmprestimo A nova data do empréstimo.
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna a data de devolução do empréstimo.
     * 
     * @returns {Date} A data de devolução.
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Define a data de devolução do empréstimo.
     * 
     * @param dataDevolucao A nova data de devolução.
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * Retorna o status atual do empréstimo.
     * 
     * @returns {string} O status do empréstimo.
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * Define o status do empréstimo.
     * 
     * @param statusEmprestimo O novo status do empréstimo.
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }
}
