var array = ["Jam", "Vanna"];
// var array = new Array("Jam", "Vanna");

array.push("Bars");

console.log(array); //["Jam", "Vanna", "Bars"]

console.log(array.hasOwnProperty("push")); //false
console.log("push" in array); // true

console.log(Array.prototype.push); //function

/******************************************************************************/
//NOT RECOMMENDED
Array.prototype.push3 = function (value) {
  this.push(value, value, value);
};

array.push3("Fanya");

console.log(array); //["Jam", "Vanna", "Bars", "Fanya", "Fanya", "Fanya"]

/******************************************************************************/
//NOT RECOMMENDED
Object.prototype.printSelf = function () {
  console.log(this);
};

array.printSelf(); //["Jam", "Vanna", "Bars", "Fanya", "Fanya", "Fanya"]
