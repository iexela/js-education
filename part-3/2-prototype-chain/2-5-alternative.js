
function Pet(name, age) {
  return {
    name: name,
    age: age
  };
}

function Dog(name, age) {
  return Pet(name, age);
}

function Cat(name, age) {
  return Pet(name, age);
}

function feed(pet, what) {
  console.log("%s eats %s", pet.name, what);
}

var jam = Dog("Jam", 8);
var bagira = Cat("Bagira", 7);

feed(jam, "meet"); //Jam eats meet
feed(bagira, "meet"); //Bagira eat meet

/******************************************************************************/

function love(pet, what) {
  return pet.name + " loves " + pet.loves + " rather than " + what;
}

function loves(pet, what) {
  return Object.assign({}, pet, {
    loves: what
  });
}

jam = loves(jam, "food");
bagira = loves(bagira, "self");

console.log(love(jam, "you")); //Jam loves food rather than you (found on Dog)
console.log(love(bagira, "you")); //Bagira loves self rather than you (found on Cat)
