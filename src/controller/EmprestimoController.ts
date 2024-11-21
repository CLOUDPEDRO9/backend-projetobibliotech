import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";

interface EmprestimoDTO {
    idAluno: number, 
    idLivro: number,
    dataEmprestimo: Date,
    dataDevolucao: Date,
    statusEmprestimo: string // Corrigido o nome do atributo
}

/**
 * A classe `EmprestimoController` estende a classe `Emprestimo` e é responsável por controlar as requisições relacionadas aos empréstimos.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "empréstimo".
 * - Herdando de `Emprestimo`, ela pode acessar métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo {

    /**
     * Lista todos os empréstimos.
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de empréstimos em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de empréstimos.
     */
    static async todos(req: Request, res: Response): Promise<any> {
        try {
            // acessa a função de listar os empréstimos e armazena o resultado
            const listaDeEmprestimos = await Emprestimo.listagemEmprestimos();

            // retorna a lista de empréstimos a quem fez a requisição web
            return res.status(200).json(listaDeEmprestimos);
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log('Erro ao acessar listagem de empréstimos');

            // retorna uma mensagem de erro a quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de empréstimos" });
        }
    }

    /**
     * Método controller para cadastrar um novo empréstimo.
     * 
     * Esta função recebe uma requisição HTTP contendo os dados de um empréstimo no corpo da requisição
     * e tenta cadastrar este empréstimo no banco de dados utilizando a função `cadastroEmprestimo`. Caso o cadastro 
     * seja bem-sucedido, retorna uma resposta HTTP 200 com uma mensagem de sucesso. Caso contrário, retorna
     * uma resposta HTTP 400 com uma mensagem de erro.
     * 
     * @param {Request} req - Objeto de requisição HTTP, contendo o corpo com os dados do empréstimo no formato `EmprestimoDTO`.
     * @param {Response} res - Objeto de resposta HTTP usado para retornar o status e a mensagem ao cliente.
     * @returns {Promise<Response>} - Retorna uma resposta HTTP com o status 200 em caso de sucesso, ou 400 em caso de erro.
     * 
     * @throws {Error} - Se ocorrer um erro durante o processo de cadastro, uma mensagem é exibida no console e uma 
     *                   resposta HTTP 400 com uma mensagem de erro é enviada ao cliente.
     */
    static async novo(req: Request, res: Response): Promise<any> {
        try {
            // recuperando informações do corpo da requisição e colocando em um objeto da interface EmprestimoDTO
            const emprestimoRecebido: EmprestimoDTO = req.body;

            // instanciando um objeto do tipo Emprestimo com as informações recebidas
            const novoEmprestimo = new Emprestimo(
                emprestimoRecebido.idAluno,
                emprestimoRecebido.idLivro,
                emprestimoRecebido.dataEmprestimo,
                emprestimoRecebido.dataDevolucao,
                emprestimoRecebido.statusEmprestimo // Corrigido o nome do atributo
            );

            // Chama a função de cadastro passando o objeto como parâmetro
            const respostaClasse = await Emprestimo.cadastroEmprestimo(novoEmprestimo);

            // verifica a resposta da função
            if (respostaClasse) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Empréstimo cadastrado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao cadastrar o empréstimo. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log(`Erro ao cadastrar um empréstimo. ${error}`);

            // retorna uma mensagem de erro a quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o empréstimo. Entre em contato com o administrador do sistema." });
        }
    }
}
