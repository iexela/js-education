var vasya = {
  name: "Vasya",
  age: 25,
  print: function () {
    console.log("%s is %d", vasya.name, vasya.age);
  }
};

vasya.print(); //Vasya is 25

vasya = null;

vasya.print(); //ERROR
/******************************************************************************/

var petya = {
  name: "Petya",
  age: 24,
  print: function () {
    console.log("%s is %d", this.name, this.age);
  }
};

petya.print(); //Petya is 24

vasya.print = petya.print;
vasya.print(); //Vasya is 25

/******************************************************************************/

var printFn = petya.print;

printFn(); //undefined is NaN in node.js, this refers to global object

/******************************************************************************/

var bindedPrintFn = petya.print.bind(petya);

bindedPrintFn(); //Petya is 24
