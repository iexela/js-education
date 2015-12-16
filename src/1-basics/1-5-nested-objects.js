var man = {
  name: "Vasya Pupkin",
  age: 25,
  dog: {
    nickname: "Jam",
    age: 8
  }
};

console.log(man.dog.nickname); //"Jam"
console.log(man["dog"].nickname); //"Jam"
