
(function() {
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
})();

/******************************************************************************/

(function() {
  function atomic(initial) {
    var current = initial,
        instance;

    instance = {
      inc: function () {
        ++current;
        return instance;
      },
      dec: function () {
        --current;
        return instance;
      },
      value: function () {
        return current;
      }
    };

    return instance;
  }

  var value = atomic(10);

  console.log(value.inc().inc().dec().value()); //11
})();
