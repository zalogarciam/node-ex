import express from "express";

const server = express();

server.use(express.json(), express.urlencoded())

const products = [
  {
    nombre: "Martillo",
    precio: 7.5,
    disponible: true,
  },
  {
    nombre: "Cincel",
    precio: 18.5,
    disponible: true,
  },
  {
    nombre: "Cinta",
    precio: 3.8,
    disponible: false,
  },
];

const PORT = 3000;

server.get("/productos", (req, res) => {
  res.status(200).json({
    content: products,
  });
});

server.post("/productos", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "Product was added",
  });
});

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
