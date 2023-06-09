import { Prisma } from "../prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registroUsuario = async (req, res) => {
  const data = req.body;

  try {
    const password = bcrypt.hashSync(data.password, 10);

    const usuarioCreado = await Prisma.usuario.create({
      data: { ...data, password },
    });
    return res.status(201).json({
      message: "Usuario creado exitosamente",
      content: usuarioCreado,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear el usuario",
      content: error.message,
    });
  }
};

export const loginUsuario = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const user = await Prisma.usuario.findUnique({
      where: {
        correo,
      },
    });

    if (!user) {
      throw new Error("Usuario no existe");
    }

    const result = bcrypt.compareSync(password, user.password);
    if (result == true) {
      const token = jwt.sign(
        {
          jti: user.id,
          nombre: user.nombre,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      return res.json({
        content: token,
      });
    } else {
      throw new Error("Credenciales incorrectas");
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear el usuario",
      content: error.message,
    });
  }
};
