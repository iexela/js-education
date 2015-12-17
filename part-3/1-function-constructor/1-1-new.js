
function Dog(name, age) { //started from capital
  this.name = name;
  this.age = age;
}

var jam = new Dog("Jam", 8); //it is a new creatsed object

console.log(jam.name); //Jam
console.log(jam.age); //8

var bars = new Dog("Bars", 10);

jam = Dog("Jam", 8); //this is global object
console.log(jam); //undefined

console.log(name); //Jam (global-object)
console.log(age); //8 (global-object)

/******************************************************************************/
//NOT RECOMMENDED
var bars = new (function (name, age) {
  this.name = name;
  this.age = age;
})("Bars", 10);

console.log(bars.name); //Jam
console.log(bars.age); //8
