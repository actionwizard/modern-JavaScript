//Using the array.map method, what if we use strict
"use strict";
const arr = [2, 4, 8, 6];

const result = arr.map(function (number, index, array) {
  return 1;
});

console.log("result", result);
