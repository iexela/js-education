var dogs = ["Jam", "Chida", "Fanya", "Vanna", "Bars"];
//var dogs = new Array("Jam", "Chida", "Fanya", "Vanna", "Bars");

console.log(dogs.length); //5
console.log(dogs[2]); //"Fanya"
console.log(dogs["2"]); //"Fanya"

dogs[2] = "Black";
console.log(dogs[2]);

dogs[10] = "Sharik";
console.log(dogs.length); //11

console.log(dogs[20]); //20

dogs.length = 0;
console.log(dogs); //[]

/******************************************************************************/

dogs.push("Jam");
dogs.pop(); //"Jam"

/******************************************************************************/

dogs = ["Fanya", "Vanna", "Chida"];
dogs.splice(1, 1, "Jam");
dogs; //["Fanya", "Jam", "Chida"]
