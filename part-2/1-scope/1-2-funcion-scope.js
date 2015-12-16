
function testScope(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log(i); //2
}

testScope([10, 20]);

/******************************************************************************/

function testScopeOneMoreTime(array) {
  console.log(i); //undefined rather than error

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

testScopeOneMoreTime();

/******************************************************************************/

function testLocalVariable(v) {
  if (v) {
    var local = 1;
  }

  console.log(local); //1
}

testLocalVariable(true);

/******************************************************************************/
//RECOMMENDED
function recommended(array) {
  var i;

  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

recommended();
