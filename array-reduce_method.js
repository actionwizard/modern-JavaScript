"use strict";

const arr = [1, 3, 5, 7, 9];

const result = arr.reduce(function (
  previousValue,
  currentValue,
  currentIndex,
  arr
) {
  console.log(previousValue, currentValue, currentIndex);
  return (previousValue += currentValue);
},
4);
