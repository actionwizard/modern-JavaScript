/*
    ye bhi ek anonymous function as an input leta hai, wo anonymous function ke ander 2 cheejein chaiye hoti hain, 
    ek accumulator aur ek current value, accumulator me ab tak function jitna accumulate kar chuka hota wo stored, aur current value
    me current iteration me array ke element ki kya value hai. Along with the callback function we can also provide an initial value
    because if not provided then the value of accumulator initially will be set to value of array at first index, and the iteration
    will start from 2nd element (or we can say the index = 1)

    Real Word Example -> shopping cart hai apke paas usme sab cheejon ke price ko add kardo is method ka use karke
*/

//syntax

let inititalValue = 0;
let arr = [1,2,4,5,5,22,312,512];

let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
     inititalValue
);

console.log(sum);