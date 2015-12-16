
console.log(sum(1, 2)); //3
console.log(mul(1, 2)); //ERROR

function sum(a, b) { //prefer function declaration
  return a + b;
}

var mul = function (a, b) { //DO NOT RECOMMEND
  return a * b;
};

console.log(mul(1, 2)); //2
