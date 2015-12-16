var man = {
  first-name: "Vasya", //error as first-name is not a valid literal
  "last-name": "Pupkin",
  "!@$/aaa,.": "some name",
  0: "zero"
};

man.last-name; //error as it is not a valid identifier
man["last-name"]; //now it is correct
