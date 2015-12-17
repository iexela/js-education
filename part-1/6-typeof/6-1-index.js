var a = 1;

console.log(typeof a); //number
console.log(typeof "some value"); //string
console.log(typeof true); //boolean
console.log(typeof function () {}); //function

//undefined
console.log(typeof undefined); //undefined
console.log(typeof Worker === "undefined"); //true for old browsers


//BUT
console.log(typeof null); //object

//and for array
var array = [1];
console.log(Array.isArray(array)); //true;
