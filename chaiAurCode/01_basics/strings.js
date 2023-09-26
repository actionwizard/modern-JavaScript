//Basics about string
let userName = "akshay khanna";

//string can be created in any way you like
let str1 = "some value of string";
let str2 = new String("loremipsum");

// console.log(str1.length);
// console.log(str2.length);

//ye str.toUpperCase wala tarika jo hai wo original string me change nahi karta hai
// console.log(str1.toUpperCase());
// console.log(str1);
// console.log(typeof str2);
// console.log(str2.toUpperCase());
// console.log(str2.valueOf());

//Maine ek string banayi aur ek string object banayi dono par operation perform karke dekha

//Some functions of string
// console.log(str1.charAt(5));
// console.log(str1.indexOf('asd'));
// console.log(str1.indexOf('a'));

//Substring and slice me difference itna hai bas ki slice me -ve start denge to wo last se
//start karega substring lena
let subStr = str1.substring(0, 5);
console.log(subStr);

let sliceStr = str1.slice(-6,-2); //This will take values from the end
console.log(sliceStr);

