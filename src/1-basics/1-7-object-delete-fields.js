var man = {
  name: "Vasya Pupkin",
  age: 25,
  dog: { nickname: "Sharik" }
};

console.log(man.hasOwnProperty("dog")); //true

man.dog = null;
console.log(man.hasOwnProperty("dog")); //true
console.log(man.dog); //null

man.dog = undefined;
console.log(man.hasOwnProperty("dog")); //true
console.log(man.dog); //undefined

delete man.dog;
//or
//delete man["dog"];

console.log(man.hasOwnProperty("dog")); //false
console.log(man.dog); //undefined

/******************************************************************************/
man.dog = {
  nickname: "Sharik"
};

delete man.dog.nickname;
//or
delete man["dog"].nickname;

console.log(man.dog.hasOwnProperty("nickname")); //false
console.log(man.hasOwnProperty("dog")); //true

console.log(man.dog.nickname); //undefined
console.log(man.dog); //empty object

/******************************************************************************/

delete man; //does nothing
console.log(man); //the same object
