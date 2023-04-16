import { Router } from "express";
import {
  actualizarCategoria,
  crearCategoria,
  devolverCategoria,
  eliminarCategoria,
  listarCategoria,
} from "../controllers/categorias.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categorias/").post(crearCategoria).get(listarCategoria);
categoriaRouter
  .route("/categoria/:id")
  .get(devolverCategoria)
  .patch(actualizarCategoria)
  .delete(eliminarCategoria);
