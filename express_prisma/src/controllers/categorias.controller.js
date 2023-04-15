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
