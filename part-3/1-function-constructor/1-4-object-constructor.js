
Object;

var dog1 = new Object({
  name: "Jam",
  age: 8
});

var dog2 = {
  name: "Jam",
  age: 8
};

Object.keys(dog1).forEach(function (name) {
  console.log(name);
}); //name, age
