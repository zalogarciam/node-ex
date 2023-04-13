import express from "express";

const server = express();

server.get("/saludar", (req, res) => {
  console.log("I am in");
  res.json({
    message: "Welcome here",
  });
});

server.get("/saludar/:nombre", (req, res) => {
  console.log(req.params);
  const { nombre } = req.params;
  res.json({
    message: "hola " + nombre,
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
