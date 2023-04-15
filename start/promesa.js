async function execute() {
  console.log("Sum");
  console.log("Substract");

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Informacion guardada");
      reject(new Error("Error ..."));
    }, 5000);
  });

  // promesa
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  try {
    const response = await promesa;
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }

  console.log("End");
}

execute();
