var hash = {
  0: "Vasya",
  "1": "Kostya",
  2: "Lena"
};

console.log(hash.1); //error
console.log(hash["1"]); //"Kostya"
console.log(hash[1]); //"Kostya"
console.log(hash[Math.abs(1 - 2)]); //"Kostya"
console.log(hash[2]); //"Lena"

console.log(hash[{}]); //undefined, {} is transformed to [object Object]
