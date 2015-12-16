function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

var operations = {
  sum: sum,
  mul: mul
};

console.log(operations.sum(1, 2)); //3
console.log(operations.mul(1, 2)); //2
