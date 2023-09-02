/*
"use strict";

const arr = [2, 4, 6, 8, 10];

const result = arr.reduce(function (no_of_even$, element, index) {
  if (element % 2 == 0) {
    no_of_even$ += 1;
  }
  return no_of_even$;
}, 0);
//Initial value is taken to be 0

console.log(result);
*/

//We will be using the acculumator to generate an output like this, i.e. we gonna
//return an object from the accumulator
const arr = [2, 44, 666, 8888, 10000];
/*WE WANT OUTPUT TO BE LIKE
{
  1 : 2,
  2 : 44,
  3 : 666,
  4 : 8888,
  5 : 10000
}
*/
const result = arr.reduce(function (acc, element, index) {
  const mappedCurrentEle = {};
  mappedCurrentEle[index] = element;
  return Object.assign(acc, mappedCurrentEle);
}); //We are passing an empty object as the initial staring value

console.log(result);
