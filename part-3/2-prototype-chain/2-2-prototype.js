
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.feed = function (what) {
  console.log("%s eats %s", this.name, what);
};

var jam = new Dog("Jam", 8);
var bars = new Dog("Bars", 10);

jam.feed("meet"); //Jam eats meet
bars.feed("potato"); //Bars eats potato

console.log(jam.hasOwnProperty("feed")); //false
console.log("feed" in jam); //true

/******************************************************************************/

jam.feed = function (what) {
  console.log("%s eats %s and drinks water", this.name, what);
};

jam.feed("meet"); //Jam eats meet and drinks water
bars.feed("potato"); //Bars eats potato

console.log(jam.hasOwnProperty("feed")); //true
console.log(bars.hasOwnProperty("feed")); //false
console.log("feed" in bars); //true

/******************************************************************************/

Dog.getMyDogName = function () {
  return "Jam";
};

var myDog = Dog.getMyDogName();
