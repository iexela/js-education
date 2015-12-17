function Dog(name, age) {
  this.name = name;
  this.age = age;
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

var jam = new Dog("Jam", 8);
var cat = new Cat("Bagira", 7);

console.log(jam instanceof Dog); //true;
console.log(cat instanceof Cat); //true;

console.log(jam instanceof Cat); //false
console.log(cat instanceof Dog); //false
