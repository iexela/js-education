
function test() {
  c = 1;
}

function testSrict() {
  "use strict";

  c = 1; //error
}

test();

testStrict();
