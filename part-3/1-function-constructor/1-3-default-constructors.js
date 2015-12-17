
Number;
Boolean;
String;
Object;

var one = new String("abc"); //BAD
var two = "abc"; //GOOD

console.log("String as object:");

console.log(one === two); //false
console.log(one == two); //true

console.log(typeof one); //object ???
console.log(typeof two); //string

console.log();

/******************************************************************************/

var three = String("abc");

console.log("String as string");

console.log(two === three); //true
console.log(two == three); //true;

console.log(typeof two); //string
console.log(typeof three); //string

console.log();

/******************************************************************************/

var strNumber = "1";

console.log("String conversion");

console.log(+strNumber); //1
console.log(parseInt(strNumber)); //1
console.log(Number(strNumber)); //1

console.log();

/******************************************************************************/

one = new String("abc");
two = "abc";

one.customField = 100;
two.customField = 100; //set customField on wrapper object

console.log("Custom fields");

console.log(one.customField); //100
console.log(two.customField); //undefined

console.log();

/******************************************************************************/

if (new Boolean(false)) { //object is truthy
  console.log("false?"); //false?
}
