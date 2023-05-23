import Express  from "express";
import LivroController from "../controller/livrosController.js";

const router = Express.Router();

router 
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivrosPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:_id", LivroController.atualizarLivro)
    .delete("/livros/:_id", LivroController.excluirLivro)

    


export default router;