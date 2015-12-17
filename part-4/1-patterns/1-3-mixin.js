function Cat(name, age) {
  this.name = name;
  this.age = age;
}

var activeCat = {
  run: function() {
    console.log("run");
  }
};

var lazyCat = {
  sleep: function() {
    console.log("sleep");
  }
};

var bagira = new Cat("Bagira", 7);
var baks = new Cat("Baks", 10);

Object.assign(bagira, activeCat);
Object.assign(baks, lazyCat);

bagira.run();
baks.sleep();
