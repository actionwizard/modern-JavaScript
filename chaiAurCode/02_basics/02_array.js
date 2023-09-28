//Some more about array
const marvel = ['thor', 'ironman', 'spiderman'];
const dc = ['superman', 'arrow', 'flash'];

const concatenated = marvel.concat(dc);     //We can merge the two arrays using the concat method
//we can also use the spread operator
const spreadOperator = [...marvel, ...dc];

// console.log(marvel);
// console.log(dc);
// console.log(concatenated);
// console.log(spreadOperator);

//If we have array ke ander array ke ander array like situation and we want to flatten the array then we can do that
//we can also choose upto which level the flatten will take place

const highlyRecursiveArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]; //In the output of this I am able to see only 3 levels
// console.log(highlyRecursiveArr); 
// console.log(highlyRecursiveArr.flat(Infinity)); 
// console.log(highlyRecursiveArr.flat(1)); 
// console.log(highlyRecursiveArr.flat(2)); 
// console.log(highlyRecursiveArr.flat(3)); 
// console.log(highlyRecursiveArr.flat(4)); 

//You can check wether a particular data type is array or not
const nameArray = "ANISHWA";
const array1D = [1,5,25];
const array2D = [[1,2],[2,4],[4,8]];

// console.log(Array.isArray(nameArray));  //This will give us a true false result
 
// console.log(Array.from(nameArray));     //This will convert the given quantity into an array 

// console.log(Array.isArray(array1D));  //This will give us a true false result
// console.log(Array.isArray(array2D));  //This will give us a true false result
// console.log((array1D));  //This will give us a true false result
// console.log((array2D));  //This will give us a true false result
 
// console.log(Array.from(array1D));     //This will convert the given quantity into an array 
// console.log(Array.from(array2D));     
//This will convert the given quantity into an array. If the element is already an array then nothing happens, it stays as it is 

//Object ka agar array banaoge then we need to specify kya cheez ke upar array banana chahoge, nahi specify karne par empty array return hoga

const val = {1 : 'ar'};     

// console.log(Array.from(val));   //Undefined ke upar kaam nahi karega, boolean, number in sab pr bhi nahi kar rha kaam
//strings to easily convert ho jaari array me

//Similarly to from ek of ka trika bhi hai, multiple values ko ek sath array me convert karne ke liye
console.log(Array.of(...array1D, array2D));     //This will convert the given quantities into an array, spread operator also works
console.log(Array.of(array1D));     //This will even convert an array into another array containing the array