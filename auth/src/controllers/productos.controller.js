import { Prisma } from "../prisma.js";

export const crearProducto = async (req, res) => {
  const data = req.body;

  try {
    const nuevoProducto = await Prisma.producto.create({ data });
    return res.status(201).json({
      content: nuevoProducto,
      message: "Producto creado",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear",
      content: error.message,
    });
  }
};
