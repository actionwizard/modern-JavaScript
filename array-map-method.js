"use strict";
let arr = [2, 55, 61, 61, 11];

var arr2 = [10, 20, 230, 55, 121];

const arr3 = arr.map(function (val, index, arr2) {
  console.log(arr2);
  return arr2;
});

console.log(arr3, "\n");

console.log(arr2);
