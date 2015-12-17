var dog = {
  name: "Jam",
  age: 8
};

console.log(dog.toString()); //[object Object]
console.log(123 + dog); //123[object Object]

dog.toString = function() {
  return this.name + " is " + this.age;
};

console.log(dog.toString()); //Jam is 8
console.log(123 + dog); //123Jam is 8

dog.valueOf = function() {
  return 877;
};

console.log(dog.toString()); //Jam is 8
console.log(123 + dog); //1000
