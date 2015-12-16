if (true) {
  console.log(true); //true
}

if ({}) {
  console.log(true); //true
}

if (!0) {
  console.log(false); //false
}

//falsy values
false;
0;
"";
NaN;
undefined;
null;

//all other values are truthy

/******************************************************************************/
//How to convert truthy or falsy value to boolean

var falsy = "",
    truthy = "abc";

console.log(!!falsy); //false
console.log(!!truthy); //true
