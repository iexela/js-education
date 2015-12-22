var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var n in obj) {
  console.log(obj[n]); //printed own fields
}

/******************************************************************************/

Object.prototype.magic = function() {
  console.log("Magic! This is magic!");
};

for (var n in obj) {
  console.log(obj[n]); //printed own fields and magic! too
}

/******************************************************************************/

for (var n in obj) {
  if (obj.hasOwnProperty(n)) {
    console.log(obj[n]); //printed just own fields
  }
}
