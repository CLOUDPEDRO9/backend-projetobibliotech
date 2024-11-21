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
* ROTAS PARA CARROS
*/ 
// Rota para listar os carros
router.get("/aluno", AlunoController.todos);
// Rota para cadastrar novo carro
router.post("/novo/aluno", AlunoController.novo);

/* 
* ROTAS PARA CLIENTES
*/ 
// Rota para listar os clientes
router.get("/livro", LivroController.todos);
// Rota para cadastrar novo cliente 
router.post("/novo/livro", LivroController.novo);

/* 
* ROTAS PARA PEDIDOS
*/ 
// Rota para listar os pedidos
router.get("/lista/emprestimos", EmprestimoController.todos);
// Rota para cadastrar novo pedido
// router.post("/novo/emprestimo", EmprestimoController.novo);

// exportando as rotas
export { router }; 
