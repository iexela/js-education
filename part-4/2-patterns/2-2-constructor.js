(function() {
  function Dog(name, age) {
    this.name = name;
    this.age = age;
  }

  new Dog("Jam", 8); //good
  Dog("Jam", 8); //WRONG, sets property on global object
})();

/******************************************************************************/

(function() {
  function Cat(name, age) {
    if (!(this instanceof Cat)) {
      return new Cat(name, age);
    }

    this.name = name;
    this.age = age;
  }

  new Cat("Bagira", 7); //good
  Cat("Bagira", 7); //good
})();
