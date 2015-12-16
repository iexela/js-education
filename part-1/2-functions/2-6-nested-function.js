function outer(a, b) {
  inner(a + b);

  function inner(v) {
    console.log(v);
  }
}

console.log(outer(1, 2));
