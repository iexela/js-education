// '==' attemps to convert to common type
console.log(false == false); //true
console.log(0 == false); //true
console.log("" == false); //true

console.log(undefined == false); //false, although undefined is falsy
console.log(null == false); //false, although null is falsy
console.log(NaN == false); //false, although NaN is falsy

console.log(undefined == null); //true

/******************************************************************************/
//ALWAYS USE '===', no conversion is done

console.log(false === false); //true
console.log(0 === 0); //true
console.log("" === ""); //true

console.log(0 === false); //false
console.log("" === false); //false

console.log(undefined === false); //false, although undefined is falsy
console.log(null === false); //false, although null is falsy
console.log(NaN === false); //false, although NaN is falsy

var n0 = 0,
    n1 = 1;

if (n0 === 0) {
  console.log("zero");
}

if (n1 !== 0) {
  console.log("one");
}

/******************************************************************************/
//There is one exception: to compare with null or undefined use '== null' or '!= null'

var a = null,
    b;

if (a == null) {
  console.log("a is %s", a); //a is null
}

if (b == null) {
  console.log("b is %s", b); //b is undefined
}
