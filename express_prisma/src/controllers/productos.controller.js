import { Prisma } from "../prima.js";
import { productoRouter } from "../routes/productos.routes.js";

export const crearProducto = async (req, res) => {
  const data = req.body;
  console.log(data);

  const categoria = await Prisma.categoria.findFirst({
    where: { id: data.categoriaId },
    select: { id: true },
  });

  if (!categoria) {
    return res.status(400).json({
      message: "Categoria no existe",
    });
  }

  try {
    const resultado = await Prisma.producto.create({
      data: { ...data, fechaVencimiento: new Date(data.fechaVencimiento) },
    });
    res.status(201).json({
      message: "El producto se creo exitosamente",
      content: resultado,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear",
      error: error.message,
    });
  }
};
