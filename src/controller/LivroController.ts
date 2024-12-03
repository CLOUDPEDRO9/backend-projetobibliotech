import { Request, Response } from "express";
import { Livro } from "../model/Livro";

interface LivroDTO {
    titulo: string,
    autor: string,
    editora: string,
    anoPublicacao: Date,
    isbn: string,
    quantTotal: number,
    quantDisponivel: number,
    valorAquisicao: number,
    statusLivroEmprestado: string,
}

/**
 * A classe `LivroController` estende a classe `Livro` e é responsável por controlar as requisições relacionadas aos livros.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "livro".
 * - Herdando de `Livro`, ela pode acessar métodos e propriedades da classe base.
 */
export class LivroController extends Livro {

    /**
     * Lista todos os livros.
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de livros em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de livros.
     */
    static async todos(req: Request, res: Response): Promise<any> {
        try {
            // acessa a função de listar os livros e armazena o resultado
            const listaDeLivros = await Livro.listagemLivros();

            // retorna a lista de livros a quem fez a requisição web
            return res.status(200).json(listaDeLivros);
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log('Erro ao acessar listagem de livros');

            // retorna uma mensagem de erro a quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de livros" });
        }
    }

    /**
     * Método controller para cadastrar um novo livro.
     * 
     * Esta função recebe uma requisição HTTP contendo os dados de um livro no corpo da requisição
     * e tenta cadastrar este livro no banco de dados utilizando a função `cadastroLivro`. Caso o cadastro 
     * seja bem-sucedido, retorna uma resposta HTTP 200 com uma mensagem de sucesso. Caso contrário, retorna
     * uma resposta HTTP 400 com uma mensagem de erro.
     * 
     * @param {Request} req - Objeto de requisição HTTP, contendo o corpo com os dados do livro no formato `LivroDTO`.
     * @param {Response} res - Objeto de resposta HTTP usado para retornar o status e a mensagem ao cliente.
     * @returns {Promise<Response>} - Retorna uma resposta HTTP com o status 200 em caso de sucesso, ou 400 em caso de erro.
     * 
     * @throws {Error} - Se ocorrer um erro durante o processo de cadastro, uma mensagem é exibida no console e uma 
     *                   resposta HTTP 400 com uma mensagem de erro é enviada ao cliente.
     */
    static async novo(req: Request, res: Response): Promise<any> {
        try {
            // recuperando informações do corpo da requisição e colocando em um objeto da interface LivroDTO
            const livroRecebido: LivroDTO = req.body;

            // instanciando um objeto do tipo livro com as informações recebidas
            const novoLivro = new Livro(
                livroRecebido.titulo,
                livroRecebido.autor,
                livroRecebido.editora,
                livroRecebido.anoPublicacao,
                livroRecebido.isbn,
                livroRecebido.quantTotal,
                livroRecebido.quantDisponivel,
                livroRecebido.valorAquisicao,
                livroRecebido.statusLivroEmprestado
            );

            // Chama a função de cadastro passando o objeto como parâmetro
            const respostaClasse = await Livro.cadastroLivro(novoLivro);

            // verifica a resposta da função
            if (respostaClasse) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Livro cadastrado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao cadastrar o livro. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log(`Erro ao cadastrar um livro. ${error}`);

            // retorna uma mensagem de erro a quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o livro. Entre em contato com o administrador do sistema." });
        }
    }

    static async remover(req: Request, res: Response): Promise<any> {
        try {
            // recuperando o id do livro que será removido
            const idLivro = parseInt(req.params.idLivro as string);

            // chamando a função de remoção de livro
            const respostaModelo = await Livro.removerLivro(idLivro);

            // verificando a resposta da função
            if (respostaModelo) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Livro removido com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao remover o livro. Entre em contato com o administrador do sistema." })
            }
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log(`Erro ao remover um livro. ${error}`);

            // retorna uma mensagem de erro para quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível remover o livro. Entre em contato com o administrador do sistema." });
        }
    }

    static async atualizar(req: Request, res: Response): Promise<any> {
        try {

            // recuperando as informações do livro que serão atualizadas
            const livroRecebido: LivroDTO = req.body;
            // recuperando o id do livro que será atualizado
            const idLivroRecebido = parseInt(req.params.idLivro as string);

            // instanciando um objeto do tipo livro com as informações recebidas
            const livroAtualizado = new Livro(
                livroRecebido.titulo,
                livroRecebido.autor,
                livroRecebido.editora,
                livroRecebido.anoPublicacao,
                livroRecebido.isbn,
                livroRecebido.quantTotal,
                livroRecebido.quantDisponivel,
                livroRecebido.valorAquisicao,
                livroRecebido.statusLivroEmprestado);

            // setando o id do livro que será atualizado
            livroAtualizado.setIdLivro(idLivroRecebido);

            // chamando a função de atualização de livro
            const resposta = await Livro.atualizarLivro(livroAtualizado);

            // verificando a resposta da função
            if (resposta) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Livro atualizado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao atualizar o livro. Entre em contato com o administrador do sistema." })
            }
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log(`Erro ao atualizar um livro. ${error}`);

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível atualizar o livro. Entre em contato com o administrador do sistema." });
        }
    }
}