import {Router} from "express"
import * as controllers from "../controllers/productos.controller.js"

export const productRouter = Router()

productRouter.post("/productos", controllers.crearProducto)