var string = "";

string += "H";
string += "e";
string += "l" + "lo";
string += " ";
string += "w";
string += "o";
string += "r";
string += "ld!";

console.log(string); //Hello world!

var buffer = [];
buffer.push("H", "e", "l", "lo");
buffer.push(" ");
buffer.push("w", "o", "r", "ld!");

console.log(buffer.join("")); //Hello world!
