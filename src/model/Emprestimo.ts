import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

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

     /**
     * Busca e retorna uma lista de empréstimos do banco de dados.
     * 
     * @returns Um array de objetos do tipo `Emprestimo` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "emprestimo".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Emprestimo`.
     * - Cada empréstimo é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemEmprestimos(): Promise<Array<Emprestimo> | null> {
        // objeto para armazenar a lista de empréstimos
        const listaDeEmprestimos: Array<Emprestimo> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectEmprestimo = `SELECT * FROM emprestimo;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectEmprestimo);

            // usando a resposta para instanciar um objeto do tipo Emprestimo
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto Emprestimo
                const novoEmprestimo = new Emprestimo(
                    linha.id_aluno,
                    linha.id_livro,
                    linha.data_emprestimo,
                    linha.data_devolucao,
                    linha.status_emprestimo
                );

                // atribui o ID ao objeto
                novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                // adiciona o objeto na lista
                listaDeEmprestimos.push(novoEmprestimo);
            });

            // retorna a lista de empréstimos
            return listaDeEmprestimos;
        } catch (error) {
            // mensagem de erro no console em caso de falha
            console.log('Erro ao buscar lista de empréstimos');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um empréstimo no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Emprestimo` e insere seus dados (ID do aluno, ID do livro, data do empréstimo, 
     * data de devolução e status do empréstimo) na tabela `emprestimo` do banco de dados. 
     * O método retorna um valor booleano indicando se o cadastro foi realizado com sucesso.
     * 
     * @param {Emprestimo} emprestimo - Objeto contendo os dados do empréstimo que será cadastrado. O objeto `Emprestimo`
     *                        deve conter os métodos `getIdAluno()`, `getIdLivro()`, `getDataEmprestimo()`, 
     *                        `getDataDevolucao()` e `getStatusEmprestimo()` que retornam os respectivos valores do empréstimo.
     * @returns {Promise<boolean>} - Retorna `true` se o empréstimo foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    // static async cadastroEmprestimo(emprestimo: Emprestimo): Promise<boolean> {
    //     try {
    //         // query para inserir um empréstimo no banco de dados
    //         const queryInsertEmprestimo = `INSERT INTO emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo)
    //                                 VALUES
    //                                 ('${emprestimo.getIdAluno()}', 
    //                                 '${emprestimo.getIdLivro()}', 
    //                                 '${emprestimo.getDataEmprestimo()}', 
    //                                 '${emprestimo.getDataDevolucao()}', 
    //                                 '${emprestimo.getStatusEmprestimo()}')  // Removido a vírgula extra aqui
    //                                 RETURNING id_emprestimo;`;

    //         // executa a query no banco e armazena a resposta
    //         const respostaBD = await database.query(queryInsertEmprestimo);

    //         // verifica se a quantidade de linhas modificadas é diferente de 0
    //         if (respostaBD.rowCount !== 0) {
    //             // imprime o ID do empréstimo cadastrado
    //             console.log(`Empréstimo cadastrado com sucesso! ID do empréstimo: ${respostaBD.rows[0].id_emprestimo}`);
    //             // true significa que o cadastro foi feito
    //             return true;
    //         }

    //         // false significa que o cadastro NÃO foi feito
    //         return false;
    //     } catch (error) {
    //         // imprime mensagem de erro junto com o log
    //         console.log('Erro ao cadastrar o empréstimo. Verifique os logs para mais detalhes.');
    //         console.log(error);
    //         // retorna valor falso em caso de falha
    //         return false;
    //     }
    // }
}
