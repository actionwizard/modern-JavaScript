// --------------NUMBER------------------

let num1 = 40.95;
let num2 = new Number(20);

console.log(num1);
console.log(num2);

//The toString method converts our number to string
console.log(num1.toString().length);    //This will return length
console.log(num2.toString());

//toFixed(k) method => this will convert the number to decimal of k place
let fixNum1 = num1.toFixed(2);
console.log(fixNum1);

//toPrecision(k) => this will round off the number so handle with care

let precisionNum1 = num1.toPrecision(1);
let precisionNum2 = num1.toPrecision(2);
let precisionNum3 = num1.toPrecision(3);
let precisionNum4 = num1.toPrecision(4);
let precisionNum5 = num1.toPrecision(5);

// console.log(`${precisionNum1} \t ${precisionNum2} \t ${precisionNum3} \t ${precisionNum4} \t ${precisionNum5}`);


//JavaScript me zeros count karne ke liye bhot accha tarika
//toLocaleString => comma daal dega ye tumhare number ke beech
//international style me bhi indian style me bhi kr sakte

let salary = 10000000;

console.log(salary.toLocaleString());
console.log(salary.toLocaleString('en-IN'));



// ----------------------MATHS------------------------

//maths library js me inbuilt ati h by default
//console.log(Math) ==> o/p -> it's an object with many properties

// const arr1 = [1, 3, 5, 67, 55, 1];
// console.log(Math.abs(-124));
// console.log(Math.round(12.45));
// console.log(Math.min(12.45, 12, 4, 45));    //Ek array me se minimum val
// console.log(Math.max(arr1));    //Ek array me se minimum val
//Note : Math.max and min functions jo hai na ye array nahi lete input me, multiple values le lenge 


//math.random => iski value 0-1 ke beech me, 0 bhi aur 1 bhi ho sakti

console.log(Math.random());

//You can do manipulations on this random value generated and keep it under a min and max value range too

let min = 10;
let max = 100;

console.log(Math.floor((Math.random())*(max-min)) + min);
 
