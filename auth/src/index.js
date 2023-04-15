import express from "express";
import cors from "cors";

const server = express();

const PORT = 3000;

server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
