//Base
function Pet(name, age) {
  this.name = name;
  this.age = age;
}

//Pet.prototype is an empty object (new Object())

Pet.prototype.feed = function (what) {
  console.log("%s eats %s", this.name, what);
};

//Cat prototypically inherits from Pet
function Cat(name, age) {
  Pet.call(this, name, age);
}

Cat.prototype = new Pet();
Cat.prototype.constructor = Cat;

Cat.prototype.love = function (what) {
  return this.name + " loves self rather than " + what;
};

//Dog prototypically inherits from Pet
function Dog(name, age) {
  Pet.call(this, name, age);
}

Dog.prototype = new Pet();
Dog.prototype.constructor = Dog;

Dog.prototype.love = function (what) {
  return this.name + " loves food rather than " + what;
};

/******************************************************************************/
var jam = new Dog("Jam", 8);
var bagira = new Cat("Bagira", 7);

console.log(jam.love("you")); //Jam loves food rather than you (found on Dog)
console.log(bagira.love("you")); //Bagira loves self rather than you (found on Cat)

/*
 * love is searched on:
 * jam[.love]           : jam created by Dog              : (not found)
 * Dog.prototype[.love] : Dog.prototype created by Pet    : (found)
 * Pet.prototype        : Pet.prototype created by Object : (search does not come here)
 * Object.prototype     :                                 : (search does not come here)
 * STOP (found on Dog.prototype)
 */

/******************************************************************************/
jam.feed("meet"); //Jam eats meet (found on Pet)
bagira.feed("meet"); //Bagira eats meet (found on Pet)

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

console.log("love" in jam); //true
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
