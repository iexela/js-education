
//function declaration
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); //3


//function expression
var mul = function(a, b) {
  return a * b;
};

console.log(mul(1, 2)); //3

/******************************************************************************/

mul = 1;
console.log(mul(1, 2)); //ERROR, mul is not a function
console.log(mul); //1

sum = 2;
console.log(sum(1, 2)); //ERROR, sum is not a function
console.log(sum); //2

/******************************************************************************/

var cond,
    a = Math.random() > 0.5; //some calculated value

if (a) {
  cond = function() { console.log("abc"); };
}
else {
  cond = function() { console.log("def"); };
}

cond(); //who knows
