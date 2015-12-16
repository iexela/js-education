
function messager(middleware) {
  return function (msg) {
    middleware.call(null, msg);
  };
}

var consoleLog = messager(console.log),
    httpLog = messager(function (msg) {
      //send via HTTP
      console.log("Send via HTTP: '%s'", msg);
    });

consoleLog("debug info"); //debug info
httpLog("SOS!"); //Send via HTTP: SOS!

/******************************************************************************/

function atomic(initial) {
  var current = initial;

  return {
    inc: function () {
      return ++current;
    },
    dec: function () {
      return --current;
    },
    value: function () {
      return current;
    }
  };
}

var value = atomic(10);

console.log(value.inc()); //11
console.log(value.inc()); //12
console.log(value.dec()); //11
