function sum(a, b) {
  return a + b;
}

sum(1, 2); //3

/******************************************************************************/

sum(1, 2, 3, 4, 5); //3

function sumAll() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

sumAll(1, 2, 3, 4, 5); //15

/******************************************************************************/
//arguments is not an array
function test() {
  return arguments.slice(arguments.length - 1)[0]; //ERROR, there is not slice method
}

console.log(1, 2, 3, 4, 5);
