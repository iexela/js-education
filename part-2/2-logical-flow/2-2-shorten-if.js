console.log(null && false); //null as the last calculated value
console.log(null || undefined); //undefined as the last calculated valule

/******************************************************************************/

setupEnvironment({
  port: 5050
}); //5050

setupEnvironment(); //8081


function setupEnvironment(options) {
  options = options || {
    port: 8081
  };

  console.log(options.port);
  //setup environment using provided options
}

/******************************************************************************/

setupProject({
  src: "main/src",
  target: "main/target"
}); //main/src

setupProject({
  target: "main/target"
}); //src

setupProject(); //src

function setupProject(options) {
  var src = options && options.src || "src";

  console.log(src);
}

/******************************************************************************/
//NOT RECOMMENDED
var a = Math.random() > 0.5;

if (a) {
  console.log("success");
}

a && console.log("success");
