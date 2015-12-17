var Pet = function(name, age) {
  return {
    name: name,
    age: age,
    feed: function(what) {
      console.log("%s eats %s", this.name, what);
    }
  };
};

var jam = Pet("Jam", 8);
var bagira = Pet("Bagira", 7);

jam.feed("meet"); //Jam eats meet
bagira.feed("meet"); //Bagira eats meet

/******************************************************************************/

var Pet = (function() {
  function feed(pet, what) {
    console.log("%s eats %s", pet.name, what);
  }

  return function(name, age) {
    var pet = {
      name: name,
      age: age
    };

    pet.feed = feed.bind(null, pet);

    return pet;
  };
})();

var jam = Pet("Jam", 8);
var bagira = Pet("Bagira", 7);

jam.feed("meet"); //Jam eats meet
bagira.feed("meet"); //Bagira eats meet
