import express from "express";

const server = express();

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

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
