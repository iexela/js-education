var Pet = function(name, age) {
  var stomach = [];

  return {
    name: name,
    age: age,
    feed: function(what) {
      stomach.push(what);

      console.log("%s eats %s", this.name, what);
    },
    contents: function() {
      return stomach.concat(); //copy array
    }
  };
};

var jam = Pet("Jam", 8);
var bagira = Pet("Bagira", 7);

jam.feed("meet"); //Jam eats meet
jam.feed("egg"); //Jam eats egg

bagira.feed("meet"); //Bagira eats meet

console.log("Jam's stomach: %s", jam.contents());

/******************************************************************************/

var Pet = (function() {

  return function (name, age) {
    var pub = {
          name: name,
          age: age
        },
        priv = {
          stomach: []
        };

    pub.feed = feed.bind(null, priv, pub);
    pub.contents = contents.bind(null, priv, pub);

    return pub;
  }

  function feed(priv, pub, what) {
    priv.stomach.push(what);

    console.log("%s eats %s", pub.name, what);
  }

  function contents(priv, pub) {
    return priv.stomach.concat(); //copy array
  }
})();

var jam = Pet("Jam", 8);
var bagira = Pet("Bagira", 7);

jam.feed("meet"); //Jam eats meet
jam.feed("egg"); //Jam eats egg

bagira.feed("meet"); //Bagira eats meet

console.log("Jam's stomach: %s", jam.contents());
