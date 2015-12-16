var oneName = "Петя Васечкин",
    anotherName = "Василиса Премудрая";

console.log(oneName[100]); undefined
console.log(oneName.charAt(100)); //""

console.log(oneName < anotherName); //false, BAD as not locale sensitive
console.log(oneName.localeCompare(anotherName)); //1, GOOD

//different useful methods
"".concat;
"".indexOf;
"".lastIndexOf;
"".replace;
"".substring;
"".toLowerCase;
"".toUpperCase;
"".trim;
"".split;

"".startsWith; //DO NOT USE as they are not standard (not supported by IE)
"".endsWith; //DO NOT USE as they are not standard (not supported by IE)

"".replaceAll;//DO NOT EXIST

console.log("ababab".replace("a", "A")); //Ababab
console.log("ababab".replace(/a/g, "A")); //AbAbAb
