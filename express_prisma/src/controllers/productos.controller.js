import { Prisma } from "../prima.js";
import { productoRouter } from "../routes/productos.routes.js";

export const crearProducto = async (req, res) => {
  const data = req.body;

  const resultado = await Prisma.producto.create({
    data: { ...data, fechaVencimiento: new Date(data.fechaVencimiento) },
  });

  console.log(resultado);

  res.status(201).json({
    message: "El producto se creo exitosamente",
    content: resultado,
  });
};
