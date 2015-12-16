
(function() {
  function internal1() {};

  function internal2() {};

  console.log("module internal");
})(); //module internal

internal1(); //ERROR, internal1 is not defined

/******************************************************************************/

var exports = (function() {
  return {
    process: process,
    notify: notify
  };

  function process(data) {
    return stage2(stage1(data));
  }

  function notify(user) {
    console.log("notify user '%s'", user);
  }

  function stage1(data) {
    return "[" + data + "]";
  }

  function stage2(data) {
    return "???" + data + "???";
  }
})();

console.log(exports.process("Jam")); //???[Jam]???
exports.notify("Vanya");
