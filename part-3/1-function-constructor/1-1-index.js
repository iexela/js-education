
function Dog(name, age) { //started from capital
  this.name = name;
  this.age = age;
}

var jam = new Dog("Jam", 8); //it is a new created object

console.log(jam.name); //Jam
console.log(jam.age); //8

jam = Dog("Jam", 8); //this is global object
console.log(jam); //undefined

console.log(name); //Jam (global-object)
console.log(age); //8 (global-object)
