//array -> can contain similar type of elements and different type also

const myArr1 = [1,2,3,true,"trues",0]
const myArr2 = new Array(1,2,3,true,"trues",10)

// console.log(myArr1[4])
// console.log(myArr2)
//=>The arrays are resizable in js
//=>array in js are not associative -> meaning the elements can be accessed by only the index and not by any string
//=>javascript array copy operations create shallow copy , matlab dono naam same array ko point karenge aur ek me change 
//  equivalent to dusre me change. 
const myArr3 = myArr2;
myArr3[2] = false;

// console.log(myArr2);
//Dekha bhai hamne myArr3 = myArr2 set kiya aur arr3 me change kiya, lekin wo change myArr2 me bhi ho gyaa, shallow copy ka example


// -------------------METHODS-----------------------
let myArr4 = [];
myArr4.push(199);   //End me add krne k liye
// console.log(myArr4);
// console.log(myArr4.pop());  //Pop function pop bhi karega aur popped element ko access bhi kar sakte ham
// console.log(myArr4);
// console.log(myArr4.pop());  //Pop function to execute ho jayega lekin uska fark nahi padega, c++ me error aayega
myArr4 = [14,45,53,'45'];   //If the variable type was const then isko reinitialize krne me error ayega

myArr4.unshift("tarif");    //unshift se ham array ke start me add kr sakte, T.C. => O(N)
myArr4.unshift('a'*'3');
// console.log(myArr4);    
// console.log(myArr4.shift());    //unshift same as pop bas start se pop karega ye linear time complexity

myArr4.includes(5); //It gives true or false based on the presence of element in the array
myArr4.indexOf(5); //It gives index of element, -1 if not present

const myStr1 = myArr1.join();   //This will convert all the elements of the array into a comma separated values of string

// console.log(myStr1.replace(/true/g,'false'));  //Bro this replace method is very useful man, /ele/g this line will replace 
                                              //all occurence of the element


//-----Slice and Splice------   
//In short, slice me original array me koi affect nahi hota, splice krne se wo spliced part hat jata hai original array me
//slice me [startInd, endInd) aisa rehta, splice me [startInd, endInd) aisa rehta, maine check karlia, dono me end index nahi ata

const slicedArr = myArr1.slice(0,3);
console.log("original => " + myArr1);
console.log("sliced => " + slicedArr);

const splicedArr = myArr1.splice(0,3);
console.log("original => " + myArr1);
console.log("spliced => " + splicedArr);

