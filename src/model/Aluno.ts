import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

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
    private ra: string = "";

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
     * @param nome Nome do aluno.
     * @param sobrenome Sobrenome do aluno.
     * @param dataNascimento Data de nascimento do aluno.
     * @param endereco Endereço residencial do aluno.
     * @param email E-mail do aluno.
     * @param celular Número de celular do aluno.
     */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {                  // Atribui o RA ao atributo ra.
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

    /**
     * Busca e retorna uma lista de alunos do banco de dados.
     * 
     * @returns Um array de objetos do tipo `Aluno` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "aluno".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Aluno`.
     * - Cada aluno é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemAlunos(): Promise<Array<Aluno> | null> {
        // objeto para armazenar a lista de alunos
        const listaDeAlunos: Array<Aluno> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectAluno = `SELECT * FROM aluno;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectAluno);

            // usando a resposta para instanciar um objeto do tipo aluno
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto aluno
                const novoAluno = new Aluno(
                    linha.nome,
                    linha.sobrenome,
                    linha.data_nascimento,
                    linha.endereco,
                    linha.email,
                    linha.celular
                );

                // atribui o ID e o RA ao objeto
                novoAluno.setIdAluno(linha.id_aluno);
                novoAluno.setRa(linha.ra);

                // adiciona o objeto na lista
                listaDeAlunos.push(novoAluno);
            });

            // retorna a lista de alunos
            return listaDeAlunos;
        } catch (error) {
            // mensagem de erro no console em caso de falha
            console.log('Erro ao buscar lista de alunos');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um aluno no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Aluno` e insere seus dados (RA, nome, sobrenome, data de nascimento, 
     * endereço, email e celular) na tabela `aluno` do banco de dados. O método retorna um valor booleano indicando 
     * se o cadastro foi realizado com sucesso.
     * 
     * @param {Aluno} aluno - Objeto contendo os dados do aluno que será cadastrado. O objeto `Aluno`
     *                        deve conter os métodos `getRa()`, `getNome()`, `getSobrenome()`, 
     *                        `getDataNascimento()`, `getEndereco()`, `getEmail()` e `getCelular()`
     *                        que retornam os respectivos valores do aluno.
     * @returns {Promise<boolean>} - Retorna `true` se o aluno foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastroAluno(aluno: Aluno): Promise<boolean> {
        try {
            // query para inserir um aluno no banco de dados
            const queryInsertAluno = `INSERT INTO aluno (ra, nome, sobrenome, data_nascimento, endereco, email, celular)
                                      VALUES
                                      ('${aluno.getRa()}', 
                                      '${aluno.getNome()}', 
                                      '${aluno.getSobrenome()}', 
                                      '${aluno.getDataNascimento()}', 
                                      '${aluno.getEndereco()}', 
                                      '${aluno.getEmail()}', 
                                      '${aluno.getCelular()}')
                                      RETURNING id_aluno;`;

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertAluno);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                // imprime o ID do aluno cadastrado
                console.log(`Aluno cadastrado com sucesso! ID do aluno: ${respostaBD.rows[0].id_aluno}`);
                // true significa que o cadastro foi feito
                return true;
            }

            // false significa que o cadastro NÃO foi feito
            return false;
        } catch (error) {
            // imprime mensagem de erro junto com o log
            console.log('Erro ao cadastrar o aluno. Verifique os logs para mais detalhes.');
            console.log(error);
            // retorna valor falso em caso de falha
            return false;
        }
    }

    static async removerAluno(idAluno: number): Promise<boolean> {
        try {
            // cria uma query para deletar um objeto do banco de dados, passando como parâmetro
            const queryDeleteAluno = `DELETE FROM aluno WHERE id_aluno = ${idAluno}`;

            // executar a query no banco e armazena a resposta do banco de dados
            const respostaBD = await database.query(queryDeleteAluno);

            // verifica se o numero de linhas alteradas é diferente de 0
            if(respostaBD.rowCount != 0) {
                // exibe uma mensagem no console
                console.log(`Aluno removido com sucesso! ID do Aluno: ${idAluno}`);
                // retorna true, indicando que o carro foi removido
                return true;
            }

            // caso não tenha sido removido, retorna false
            return false

        // trata qualquer erro que possa acontecer no caminho    
        } catch (error) {
            // exibe uma mensagem de falha
            console.log(`Erro ao remover aluno. Verifique os logs para mais detalhes.`);
            // imprime o erro no console da API
            console.log(error);
            // retorna false, o que indica que a remoção não foi feita
            return false;
        }
    }
}

