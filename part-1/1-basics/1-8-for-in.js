var man = {
  name: "Vasya Pupkin",
  age: 25
};

console.log("all names:");

for (var name in man) {
  console.log("%s=%s", name, man[name]);
}
console.log();

/******************************************************************************/

console.log("all names and 'age' too:");

man.age = null;
for (var name in man) {
  console.log("%s=%s", name, man[name]);
}
console.log();

/******************************************************************************/

console.log("only name:");

delete man.age;
for (var name in man) {
  console.log("%s=%s", name, man[name]);
}
console.log();
