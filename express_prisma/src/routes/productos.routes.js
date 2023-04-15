import { Router } from "express";
import {
  crearProducto,
  devolverProducto,
  listarProductos,
} from "../controllers/productos.controller.js";

export const productoRouter = Router();

productoRouter.route("/productos").post(crearProducto).get(listarProductos);
productoRouter.route("/producto/:id").get(devolverProducto);
