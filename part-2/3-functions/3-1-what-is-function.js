
if (typeof jQuery !== "undefined") {
  var $ = jQuery;

  $("a");

  $.extend({
    a: 1
  }, {
    b: 2
  });
}

/******************************************************************************/

function jQwery(selector, context) {
  //some implementation
}

jQwery.extend = function() {
  //some implementation
};

jQwery.extend();
