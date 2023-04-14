import express from "express";

const server = express();

server.use(express.json(), express.urlencoded());

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

server
  .route("/productos")
  .get((req, res) => {
    res.status(200).json({
      content: products,
    });
  })
  .post((req, res) => {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({
        message: "Incorrect",
      });
    }
    res.status(201).json({
      message: "Product was added",
      content: req.body,
    });
  });

server.route("/producto/:id").get((req, res) => {
  const { id } = req.params;
  const resultado = products[id];
  if (resultado) {
    res.status(200).json({
      content: resultado,
    });
  } else {
    res.status(404).json({
      content: "No existe",
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
