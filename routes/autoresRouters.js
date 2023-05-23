import Express  from "express";
import AutorController from "../controller/autoresController.js";

const router = Express.Router();

router 
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutoresPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:_id", AutorController.atualizarAutor)
    .delete("/autores/:_id", AutorController.excluirAutor)
    


export default router;