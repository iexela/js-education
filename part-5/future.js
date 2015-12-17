import Table from "ui/table";

var table = new Table();

/******************************************************************************/

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  feed(what) {
    console.log(`${this.name} eats ${what}`);
  }

  //getter
  get summary() {
    return `${this.name} is ${this.age}`;
  }

  //setter
  set nickname(name) {
    this.name = name;
  }
}

class Dog extends Pet {
  feed(what) {
    super(what);

    console.log(`${this.name} wants ${what}`);
  }
}

var jam = new Dog("James", 8);

jam.nickname = "Jam";
console.log(jam.summary); //Jam is 8

/******************************************************************************/

var dogs = ["Jam", "Vanna", "Fanya"];
var firstLetters = dogs.map(name => name.charAt(0));

/******************************************************************************/
var {src, dest} = {
  name: "new-super-cool-project",
  src: "main/src",
  dest: "main/target"
};

/******************************************************************************/

function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

/******************************************************************************/
new Map();
new Set();
new WeakMap();
new WeakSet();

/******************************************************************************/

@Controller
class UserCtrl {
  addEmployee(employee) {
    //...
  }
}
/******************************************************************************/

//AND MANY MANY MORE
