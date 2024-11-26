import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

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

     /**
     * Busca e retorna uma lista de livros do banco de dados.
     * 
     * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "livro".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
     * - Cada livro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemLivros(): Promise<Array<Livro> | null> {
        // objeto para armazenar a lista de livros
        const listaDeLivros: Array<Livro> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectLivro = `SELECT * FROM livro;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectLivro);

            // usando a resposta para instanciar um objeto do tipo livro
            respostaBD.rows.forEach((linha) => {
                // instancia (cria) objeto livro
                const novoLivro = new Livro(
                    linha.titulo,
                    linha.autor,
                    linha.editora,
                    linha.ano_publicacao,
                    linha.isbn,
                    linha.quant_total,
                    linha.quant_disponivel,
                    linha.valor_aquisicao,
                    linha.status_livro_emprestado
                );

                // atribui o ID ao objeto
                novoLivro.setIdLivro(linha.id_livro);

                // adiciona o objeto na lista
                listaDeLivros.push(novoLivro);
            });

            // retorna a lista de livros
            return listaDeLivros;
        } catch (error) {
            // mensagem de erro no console em caso de falha
            console.log('Erro ao buscar lista de livros');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um livro no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Livro` e insere seus dados (título, autor, editora, ano de publicação, 
     * ISBN, quantidade total, quantidade disponível, valor de aquisição e status de empréstimo) na tabela `livro` do banco de dados. 
     * O método retorna um valor booleano indicando se o cadastro foi realizado com sucesso.
     * 
     * @param {Livro} livro - Objeto contendo os dados do livro que será cadastrado. O objeto `Livro`
     *                        deve conter os métodos `getTitulo()`, `getAutor()`, `getEditora()`, 
     *                        `getAnoPublicacao()`, `getIsbn()`, `getQuantTotal()`, `getQuantDisponivel()`,
     *                        `getValorAquisicao()` e `getStatusLivroEmprestado()` que retornam os respectivos valores do livro.
     * @returns {Promise<boolean>} - Retorna `true` se o livro foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastroLivro(livro: Livro): Promise<boolean> {
        try {
            // query para inserir um livro no banco de dados
            const queryInsertLivro = `INSERT INTO livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                    VALUES
                                    ('${livro.getTitulo()}', 
                                    '${livro.getAutor()}', 
                                    '${livro.getEditora()}', 
                                    '${livro.getAnoPublicacao()}', 
                                    '${livro.getIsbn()}', 
                                    '${livro.getQuantTotal()}', 
                                    '${livro.getQuantDisponivel()}',
                                    '${livro.getValorAquisicao()}',
                                    '${livro.getStatusLivroEmprestado()}')
                                    RETURNING id_livro;`;

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertLivro);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount !== 0) {
                // imprime o ID do livro cadastrado
                console.log(`Livro cadastrado com sucesso! ID do livro: ${respostaBD.rows[0].id_livro}`);
                // true significa que o cadastro foi feito
                return true;
            }

            // false significa que o cadastro NÃO foi feito
            return false;
        } catch (error) {
            // imprime mensagem de erro junto com o log
            console.log('Erro ao cadastrar o livro. Verifique os logs para mais detalhes.');
            console.log(error);
            // retorna valor falso em caso de falha
            return false;
        }
    }

    static async removerLivro(idLivro: number): Promise<boolean> {
        try {
            // cria uma query para deletar um objeto do banco de dados, passando como parâmetro
            const queryDeleteLivro = `DELETE FROM livro WHERE id_livro = ${idLivro}`;

            // executar a query no banco e armazena a resposta do banco de dados
            const respostaBD = await database.query(queryDeleteLivro);

            // verifica se o numero de linhas alteradas é diferente de 0
            if(respostaBD.rowCount != 0) {
                // exibe uma mensagem no console
                console.log(`Livro removido com sucesso! ID do Livro: ${idLivro}`);
                // retorna true, indicando que o carro foi removido
                return true;
            }

            // caso não tenha sido removido, retorna false
            return false

        // trata qualquer erro que possa acontecer no caminho    
        } catch (error) {
            // exibe uma mensagem de falha
            console.log(`Erro ao remover livro. Verifique os logs para mais detalhes.`);
            // imprime o erro no console da API
            console.log(error);
            // retorna false, o que indica que a remoção não foi feita
            return false;
        }
    }
}