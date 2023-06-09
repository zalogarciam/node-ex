import express from "express";
import cors from "cors";
import { usuarioRouter } from "./routes/usuarios.routes.js";
import dotenv from "dotenv";
import { productRouter } from "./routes/productos.routes.js";

dotenv.config();

const server = express();

const PORT = 3000;

server.use(cors());
server.use(express.json());
server.use(usuarioRouter);
server.use(productRouter);

server.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
