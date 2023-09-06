//Lecture 6, we learn about the imp concept of datatype conversion in this
//To convert any datatype to another we simply write it like this
// newValue => New_data_type(previousValue), the imp thing to note is that new datatype 
//name should be capitalized by first letter. For eg -> see below

let number = "0x1";
let string = "helie";
let num = 1324781;
let changeNumToString = String(num);
// console.log("Data Type = " + typeof changeNumToString);
// console.log(changeNumToString);

let variable = {FDA : 0x1};
let changeVariable = Object(variable);

console.log("type of NaN = " + typeof (variable));
console.log("Data Type of changed = " + typeof changeVariable);
console.log(changeVariable);


