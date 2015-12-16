var dictionary = {
  0: "Vasya",
  1: "Kostya",
  2: "Lena"
};

console.log(dictionary["1"]);             //get

dictionary["4"] = "Volodya"; //put

delete dictionary[0];        //remove

console.log(dictionary["1"] == null);		//contains
