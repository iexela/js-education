function Cat(name, age) {
  this.name = name;
  this.age = age;
}

var active = {
  run: function() {
    console.log("run");
  }
};

var lazy = {
  rest: function() {
    console.log("rest");
  }
};

var bagira = new Cat("Bagira", 7);
var baks = new Cat("Baks", 10);

Object.assign(bagira, active);
Object.assign(baks, lazy);

bagira.run();
baks.rest();

/******************************************************************************/

Object.assign(Cat.prototype, active, lazy);

var bagira = new Cat("Normal", 21);

bagira.run();
bagira.rest();

/******************************************************************************/

var options = {
  src: "src/main/java",
  target: "target"
};

var defaultOptions = {
  language: "java",
  src: "src"
};

console.log(Object.assign({}, defaultOptions, options));
// {
//   language: "java",
//   src: "src/main/java",
//   target: "target"
// }
