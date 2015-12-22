
function setProp(obj, name, value) {
  obj[name] = value;
}

function getProp(obj, name) {
  return obj[name];
}

function setProps(obj, dict) {
  var n;

  for(n in dict) {
    if (dict.hasOwnProperty(n)) {
      setProp(obj, n, dict[n]);
    }
  }
}

var jam = {
  name: "Jam",
  age: 8
};

setProp(jam, "age", 9);
getProp(jam, "age");

setProps(jam, {
  name: "Unchida",
  age: 10
});

/******************************************************************************/

function prop(obj, name, value) {
  switch (typeof name) {
  case "undefined":
    return obj[name];
  case "object":
    Object.keys(name).forEach(function (n) {
      prop(obj, n, name[n]);
    });
    break;
  default:
    obj[name] = value;
    break;
  }
}

prop(jam, "age", 9); //setter
prop(jam, "age");    //getter

prop(jam, {          //multi setter
  name: "Unchida",
  age: 10
});

/******************************************************************************/

if (typeof jQuery !== "undefined") {
  jQuery("div").attr("tabindex");
  jQuery("div").attr("tabindex", "0");
}
