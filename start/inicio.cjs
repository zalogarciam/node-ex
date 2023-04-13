// import {add , substract, secret} from './funciones'

const { add, substract, secret } = require("./funciones.cjs");

console.log("Hello");

const name = "Gonzalo";

function greet() {
  console.log("Good night");
}

greet();

const result = substract(10, 5);
console.log(result);
