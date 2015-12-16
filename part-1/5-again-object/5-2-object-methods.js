
var operations = {
  sum: function (a, b) {
    return a + b;
  },
  mul: function mul(a, b) { //function name can help in debugging
    return a * b;
  }
};

console.log(operations.sum(1, 2)); //3
console.log(operations.mul(1, 2)); //2
