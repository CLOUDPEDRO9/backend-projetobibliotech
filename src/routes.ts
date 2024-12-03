import { Request, Response, Router } from "express";
import { AlunoController } from "./controller/AlunoController";
import { LivroController } from "./controller/LivroController";
import { EmprestimoController } from "./controller/EmprestimoController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA ALUNOS
*/ 
// Rota para listar os alunos
router.get("/aluno", AlunoController.todos);
// Rota para cadastrar novo aluno
router.post("/novo/aluno", AlunoController.novo);
// Rota para deletar aluno
router.delete("/delete/aluno/:idAluno", AlunoController.remover);
// Rota para atualizar um aluno
router.put("/atualizar/aluno/:idAluno", AlunoController.atualizar);


/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/livro", LivroController.todos);
// Rota para cadastrar novo livro
router.post("/novo/livro", LivroController.novo);
// Rota para deletar livro
router.delete("/delete/livro/:idLivro", LivroController.remover);
// Rota para atualizar um livro
router.put("/atualizar/livro/:idLivro", LivroController.atualizar);


/* 
* ROTAS PARA EMPRESTIMOS
*/ 
// Rota para listar os emprestimos
router.get("/emprestimo", EmprestimoController.todos);
// Rota para cadastrar novo emprestimo
router.post("/novo/emprestimo", EmprestimoController.novo);
// Rota para deletar emprestimo
router.delete("/delete/emprestimo/:idEmprestimo", EmprestimoController.remover);
// Rota para atualizar um emprestimo
router.put("/atualizar/emprestimo/:idEmprestimo", EmprestimoController.atualizar);

// exportando as rotas
export { router }; 
