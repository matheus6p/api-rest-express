import express from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivrosByEditora)
  .get("/livros/:id", LivroController.listarLivrosByID)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro);

export default router;
