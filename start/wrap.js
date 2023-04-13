function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function operation(f, a, b) {
  const result = f(a, b);
  console.log(result);
}

operation(add, 1, 5);
operation(substract, 10, 5);

operation(
  (x, y) => {
    return x * y;
  },
  5,
  6
);
