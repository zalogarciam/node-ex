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

server
  .route("/producto/:id")
  .get((req, res) => {
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
  })
  .put((req, res) => {
    const { id } = req.params;
    const body = req.body;

    const result = products[id];

    if (!result) {
      res.status(404).json({
        message: "Producto no existe",
      });
    }

    products[id] = body;
    res.status(201).json({
      message: "Actualizado",
      content: products[id],
    });
  })
  .patch((req, res) => {})
  .delete((req, res) => {
    const { id } = req.params;
    const resultado = products[id];

    if (!resultado) {
      res.status(404).json({
        message: "Producto no existe",
      });
    }

    products.splice(id, 1);
    res.status(201).json({
      message: "Eliminado",
      content: products[id],
    });
  });

server.route("/buscar-productos").get((req, res) => {
  console.log(req.query);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  let resultado = [];

  if (req.query.nombre) {
    resultado = [
      ...resultado,
      ...products.filter((producto) => {
        // si en la posicion que estamos en el arreglo retorna true entonces se agregara ese elemento al nuevo arreglo
        return producto.nombre === req.query.nombre;
      }),
    ];
  }

  // Para que sea la busqueda de un inicio de una palabra mediante expresiones regulares
  if (req.query.patron) {
    resultado = [
      ...resultado,
      ...products.filter((producto) => {
        // podemos utilizar expresiones regulares para hacer busqueda de patrones
        return new RegExp(`${req.query.patron}\w*`).test(producto.nombre);
      }),
    ];
  }

  if (req.query.disponible) {
    resultado = [
      ...resultado,
      ...products.filter((producto) => {
        return String(producto.disponible) === req.query.disponible;
      }),
    ];
  }
  res.status(200).json({
    content: resultado,
  });
});

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
