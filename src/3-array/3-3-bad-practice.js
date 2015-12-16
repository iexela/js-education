var dogs = ["Jam", "Chida", "Fanya", "Vanna", "Bars"];

dogs[10] = "Sharik"; //BAD, because it results in sparse array, decreases performance
console.log(dogs.length); //11

/******************************************************************************/

var all = [0, "Petya", {}, null]; //BAD, it is better when array holds uniform data

var names = ["Petya", "Vasya"]; //good
var digits = [0, 10, 20]; //good
