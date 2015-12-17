var jam = {
  name: "Jam",
  age: 8,
  feed: function(what) {
    console.log("%s eats %s", this.name, what);
  }
};

var bars = {
  name: "Bars",
  age: 10,
  feed: function(what) {
    console.log("%s eats %s", this.name, what);
  }
};

jam.feed("meet"); //Jam eats meet
bars.feed("potato"); //Bars eats potato

console.log(jam.hasOwnProperty("feed")); //true

/******************************************************************************/

var jam = {
  name: "Jam",
  age: 8,
  feed: feed
};

var bars = {
  name: "Bars",
  age: 10,
  feed: feed
};

function feed(what) {
  console.log("%s eats %s", this.name, what);
}

jam.feed("meet"); //Jam eats meet
bars.feed("potato"); //Bars eats potato

console.log(jam.hasOwnProperty("feed")); //true

/******************************************************************************/

function Dog(name, age) {
  this.name = name;
  this.age = age;

  this.feed = function (what) {
    console.log("%s eats %s", this.name, what);
  };
  // this.feed = feed;
}

var jam = new Dog("Jam", 8);
var bars = new Dog("Bars", 10);

jam.feed("meet"); //Jam eats meet
bars.feed("potato"); //Bars eats potato

console.log(jam.hasOwnProperty("feed")); //true

[/* 100500 elements */].forEach(function (ignore, i) {
  new Dog("Jam " + i).feed("meet");
});
