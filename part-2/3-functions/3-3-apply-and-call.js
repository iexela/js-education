function sumAll() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var numbers = [1, 2, 3, 4, 5]; //calculated dynamically

sumAll.apply(null, numbers); //15
sumAll.call(null, 1, 2, 3, 4, 5); //15

/******************************************************************************/

var vasya = {
  name: "Vasya",
  age: 25
};

var petya = {
  name: "Petya",
  age: 24,
  feed: function (food) {
    console.log("%s eat %s", this.name, food);
  }
};

petya.feed("potato"); //Petya eat potato

petya.feed.apply(vasya, ["tomato"]); //Vasya eat tomato
petya.feed.call(vasya, "tomato"); //Vasya eat tomato
