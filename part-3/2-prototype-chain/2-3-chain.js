//Base
function Pet(name, age) {
  this.name = name;
  this.age = age;
}

//Pet.prototype is an empty object (new Object())

Pet.prototype.feed = function (what) {
  console.log("%s eats %s", this.name, what);
};

//Dog prototypically inherits from Pet
function Dog(name, age) {
  Pet.call(this, name, age);
}

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;
//
// Dog.prototype.love = function (what) {
//   return this.name + " loves food rather than " + what;
// };

/******************************************************************************/
var jam = new Dog("Jam", 8);
jam.feed("meet"); //Bagira eats meet (found on Pet)

/*
 * feed is searched on:
 * jam[.feed]           : jam created by Dog              : (not found)
 * Dog.prototype[.feed] : Dog.prototype created by Pet    : (not found)
 * Pet.prototype[.feed] : Pet.prototype created by Object : (found)
 * Object.prototype     :                                 : (search does not come here)
 * STOP (found on Pet.prototype)
 */

/******************************************************************************/
console.log(jam.lastName);

/*
 * lastName is searched on:
 * jam[.lastName]              : jam created by Dog              : (not found)
 * Dog.prototype[.lastName]    : Dog.prototype created by Pet    : (not found)
 * Pet.prototype[.lastName]    : Pet.prototype created by Object : (not found)
 * Object.prototype[.lastName] :                                 : (not found)
 * STOP (not found)
 */

/******************************************************************************/

// console.log("love" in jam); //true
console.log("feed" in jam); //true

console.log(jam instanceof Dog); //true
console.log(jam instanceof Pet); //true

/******************************************************************************/
//You want to call super method?

Dog.prototype.feed = function (what) {
  Pet.prototype.feed.apply(this, arguments);

  console.log("%s wants more %s!!!", this.name, what);
};

jam.feed("meet"); //Jam eats meet \n Jam wants more meet!!!
