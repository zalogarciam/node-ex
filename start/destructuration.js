const data = {
  nombre: "Gonzalo",
  correo: "gegarciam95@gmail.com",
  hobbies: [
    {
      nombre: "Dance",
      intensidad: "Normal",
    },
    {
      nombre: "Code",
      intensidad: "High",
    },
  ],
};

const { nombre } = data;
console.log(nombre);

const {correo: nuevo_correo} = data
console.log(correo)

const { hobbies, ...otro } = data;
console.log(otro);
