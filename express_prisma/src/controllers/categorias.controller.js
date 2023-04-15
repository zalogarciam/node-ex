import { Prisma } from "../prima.js";
import { categoriaRouter } from "../routes/categorias.routes.js";

export const crearCategoria = async (req, res) => {
  const body = req.body;

  const resultado = await Prisma.categoria.create({
    data: body,
  });

  console.log(resultado);

  res.status(201).json({
    message: "La categoria se creo exitosamente",
  });
};

export const listarCategoria = async (req, res) => {
  const categorias = await Prisma.categoria.findMany();

  res.json({
    content: categorias,
  });
};

export const devolverCategoria = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const categoria = await Prisma.categoria.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!categoria) {
    return res.status(400).json({
      message: "La categoria no existe",
    });
  } else {
    return res.status(200).json({
      content: categoria,
    });
  }
};

export const actualizarCategoria = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const categoria = await Prisma.categoria.findFirst({
    where: {
      id: +id,
    },
    select: {
      id: true,
    },
  });

  if (!categoria) {
    return res.status(400).json({
      message: "La categoria no existe",
    });
  } else {
    const change = await Prisma.categoria.update({
      where: {
        id: categoria.id,
      },
      data: data,
    });
    return res.status(200).json({
      message: "Categoria actualizada",
      content: change,
    });
  }
};

export const eliminarCategoria = async (req, res) => {
  const { id } = req.params;

  const categoria = await Prisma.categoria.findFirst({
    where: {
      id: +id,
    },
    select: {
      id: true,
    },
  });

  if (!categoria) {
    return res.status(400).json({
      message: "La categoria no existe",
    });
  } else {
    const categoriaEliminada = await Prisma.categoria.delete({
      where: {
        id: +id,
      },
    });

    return res.status(200).json({
      message: "Categoria eliminada",
      content: categoriaEliminada,
    });
  }
};
