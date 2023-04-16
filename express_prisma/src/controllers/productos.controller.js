import { Prisma } from "../prima.js";
import { productoRouter } from "../routes/productos.routes.js";

export const crearProducto = async (req, res) => {
  const data = req.body;
  console.log(data);

  const categoria = await Prisma.categoria.findFirst({
    where: { id: data.categoriaId },
    select: { id: true, disponibilidad: true },
  });

  if (!categoria) {
    return res.status(400).json({
      message: "Categoria no existe",
    });
  }

  if (!categoria.disponibilidad) {
    return res.status(400).json({
      message: "Categoria esta deshabilitada",
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

export const listarProductos = async (req, res) => {
  const productos = await Prisma.producto.findMany();

  res.json({
    content: productos,
  });
};

export const devolverProducto = async (req, res) => {
  const { id } = req.params;

  const productoEncontrado = await Prisma.producto.findFirst({
    where: { id: +id },
    include: { categoria: true },
  });

  if (!productoEncontrado) {
    return res.status(400).json({
      message: "Producto no existe",
    });
  }

  return res.json({
    content: productoEncontrado,
  });
};

export const actualizarProducto = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const producto = await Prisma.producto.findFirst({
    where: {
      id: +id,
    },
    select: {
      id: true,
    },
  });

  if (!producto) {
    return res.status(400).json({
      message: "El producto no existe",
    });
  } else {
    const change = await Prisma.producto.update({
      where: {
        id: producto.id,
      },
      data: data,
    });
    return res.status(200).json({
      message: "Producto actualizado",
      content: change,
    });
  }
};
