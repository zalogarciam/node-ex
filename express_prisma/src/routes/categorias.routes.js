import { Router } from "express";
import {
  crearCategoria,
  devolverCategoria,
  listarCategoria,
} from "../controllers/categorias.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categorias").post(crearCategoria).get(listarCategoria);
categoriaRouter.route("/categorias/:id").get(devolverCategoria);
