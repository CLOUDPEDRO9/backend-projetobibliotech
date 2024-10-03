/**
 * Classe que representa um aluno.
 */
export class Aluno {

    /* Atributos */

    /**
     * Identificador do aluno.
     * Inicializado com o valor padrão de 0.
     */
    private idAluno: number = 0;

    /**
     * Registro acadêmico (RA) do aluno.
     */
    private ra: string;

    /**
     * Nome do aluno.
     */
    private nome: string;

    /**
     * Sobrenome do aluno.
     */
    private sobrenome: string;

    /**
     * Data de nascimento do aluno.
     */
    private dataNascimento: Date;

    /**
     * Endereço residencial do aluno.
     */
    private endereco: string;

    /**
     * E-mail do aluno.
     */
    private email: string;

    /**
     * Número de celular do aluno.
     */
    private celular: string;

    /**
     * Construtor da classe Aluno.
     * Inicializa os atributos com os valores fornecidos.
     * 
     * @param ra Registro acadêmico do aluno.
     * @param nome Nome do aluno.
     * @param sobrenome Sobrenome do aluno.
     * @param dataNascimento Data de nascimento do aluno.
     * @param endereco Endereço residencial do aluno.
     * @param email E-mail do aluno.
     * @param celular Número de celular do aluno.
     */
    constructor(
        ra: string,
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.ra = ra;                     // Atribui o RA ao atributo ra.
        this.nome = nome;                 // Atribui o nome ao atributo nome.
        this.sobrenome = sobrenome;       // Atribui o sobrenome ao atributo sobrenome.
        this.dataNascimento = dataNascimento; // Atribui a data de nascimento ao atributo dataNascimento.
        this.endereco = endereco;         // Atribui o endereço ao atributo endereco.
        this.email = email;               // Atribui o email ao atributo email.
        this.celular = celular;           // Atribui o celular ao atributo celular.
    }

    /* Métodos get e set */

    /**
     * Retorna o identificador do aluno.
     * 
     * @returns {number} O identificador do aluno.
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Define o identificador do aluno.
     * 
     * @param idAluno O novo identificador do aluno.
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna o RA do aluno.
     * 
     * @returns {string} O RA do aluno.
     */
    public getRa(): string {
        return this.ra;
    }

    /**
     * Define o RA do aluno.
     * 
     * @param ra O novo RA do aluno.
     */
    public setRa(ra: string): void {
        this.ra = ra;
    }

    /**
     * Retorna o nome do aluno.
     * 
     * @returns {string} O nome do aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do aluno.
     * 
     * @param nome O novo nome do aluno.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o sobrenome do aluno.
     * 
     * @returns {string} O sobrenome do aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.
     * 
     * @param sobrenome O novo sobrenome do aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * Retorna a data de nascimento do aluno.
     * 
     * @returns {Date} A data de nascimento do aluno.
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define a data de nascimento do aluno.
     * 
     * @param dataNascimento A nova data de nascimento do aluno.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * Retorna o endereço do aluno.
     * 
     * @returns {string} O endereço do aluno.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Define o endereço do aluno.
     * 
     * @param endereco O novo endereço do aluno.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * Retorna o e-mail do aluno.
     * 
     * @returns {string} O e-mail do aluno.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o e-mail do aluno.
     * 
     * @param email O novo e-mail do aluno.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Retorna o número de celular do aluno.
     * 
     * @returns {string} O número de celular do aluno.
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o número de celular do aluno.
     * 
     * @param celular O novo número de celular do aluno.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }
}


