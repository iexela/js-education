var man = {
  name: "Vasya Pupkin",
  age: 25
};

console.log(man.name); //"Vasya Pupkin"
console.log(man["age"]); //25
console.log(man["a" + "g" + "e"]); //25

var key = "age";
console.log(man[key]); //25

console.log(man.dog); //undefined
