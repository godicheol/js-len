// Universal module definition
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser
    root.jsLen = factory();
  }
})(this, function() {
  'use strict';

  var CONVERSIONS = {
    foot: {
      foot: 1,
      inch: 12,
      millimeter: 304.8,
      centimeter: 30.48,
      meter: 0.3048,
      kilometer: 0.0003048,
    },
    inch: {
      foot: 0.08333333333333,
      inch: 1,
      millimeter: 25.4,
      centimeter: 2.54,
      meter: 0.0254,
      kilometer: 0.0000254,
    },
    millimeter: {
      foot: 0.0032808399,
      inch: 0.0393700787,
      millimeter: 1,
      centimeter: 0.1,
      meter: 0.001,
      kilometer: 0.000001,
    },
    centimeter: {
      foot: 0.032808399,
      inch: 0.393700787,
      millimeter: 10,
      centimeter: 1,
      meter: 0.01,
      kilometer: 10,
    },
    meter: {
      foot: 3.2808399,
      inch: 39.3700787,
      millimeter: 1000,
      centimeter: 100,
      meter: 1,
      kilometer: 0.001,
    },
    kilometer: {
      foot: 3280.8399,
      inch: 39370.0787,
      millimeter: 1000000,
      centimeter: 100000,
      meter: 1000,
      kilometer: 1,
    }
  }

  var ALIASES = {
    foot: ["ft", "foot", "feet"],
    inch: ["in", "inch", "inches"],
    millimeter: ["mm", "millimeter", "millimeters"],
    centimeter: ["cm", "centimeter", "centimeters"],
    meter: ["m", "meter", "meters"],
    kilometer: ["km", "kilometer", "kilometers"],
  }

  var UNITS = [
    "foot",
    "inch",
    "millimeter",
    "centimeter",
    "meter",
    "kilometer",
  ]

  function getUnit(str) {
    for (var unit of UNITS) {
      if (ALIASES[unit].indexOf(str) > -1) {
        return unit;
      }
    }
    return;
  }

  function convert(value, from, to) {
    from = getUnit(from);
    to = getUnit(to);

    if (!from || !to) {
      throw new Error("Unit not found");
    }

    return value * CONVERSIONS[from][to];
  }

  return {
    convert: convert,
  }
});