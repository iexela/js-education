
if (typeof window !== "undefined") { //window is a global object in browser environment
  console.log(window);
  console.log(window.document); //document is a property of global object
  console.log(document); //window is not necessary
}

if (typeof global !== "undefined") { //global is a global object in browser environment
  console.log(global);
  console.log(global.process); //process is a property of global object
  console.log(process); //global is not necessary
}

/******************************************************************************/

if (typeof window !== "undefined") { //window is a global object in browser environment
  window.a = 1;
  console.log(window.a); //1
  console.log(a); //1

  b = 1; //NOT RECOMMENDED
  console.log(window.b); //1
  console.log(b); //1
}

c = 1;

//anyway assignment of properties to global object is not recommended
