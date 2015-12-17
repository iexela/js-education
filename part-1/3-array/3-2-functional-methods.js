var dogs = ["Fanya", "Vanna", "Chida"];

//common
var i;
var firstLetters = [];

for (i = 0; i < dogs.length; i++) {
  firstLetters.push(dogs[i].substring(0, 1));
}

console.log(firstLetters); //["F", "V", "C"];

//functional
firstLetters = dogs.map(function (dog) {
  return dog.charAt(0);
});

console.log(firstLetters); //["F", "V", "C"];

/******************************************************************************/

var obj = {
  a: {
    b: {
      c: 1
    }
  }
};
var path = ["a", "b", "c"];

var value = path.reduce(function (last, prop) {
  if (last) {
    return last[prop];
  }
  return last;
}, obj);

console.log(value);

/******************************************************************************/

[].forEach;
[].filter;
[].some;
[].every;
[].map;
[].reduce;
[].reduceRight
