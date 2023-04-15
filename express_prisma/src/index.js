import express from "express";
import prisma from "@prisma/client";

const Prisma = new prisma.PrismaClient();

const server = express();
server.use(express.json());

const PORT = 3000;

server.route("/categoria").post(async (req, res) => {
  const body = req.body;

  const result = await Prisma.categoria.create({
    data: body,
  });
  console.log(result);
  res.status(201).json({
    message: "Categoria creada",
  });
});

server.listen(PORT, () => {
  console.log(`Server running ... at ${PORT}`);
});
