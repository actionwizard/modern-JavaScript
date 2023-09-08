/*
There are basically two divisions of datatypes in JS
1. Primitive
    -no methods or properties
    
    -immutable (The variable may be reassigned to a new value, 
                but the existing value can not be changed 
                in the ways that objects, arrays, and functions can be altered.)

    -all primitives are declared in the stack, and whenever we access something in the stack we actually do
    using call by value concept, i.e. a copy of the variable value is given. example below
    
    -we have wrappers which create a temporary object of the primitive datatype and 
    access to a few properties of the object. eg string 

    -number, string, boolean, symbol, bigint, null **(return type is object), undefined
    {Conceptually, undefined => absence of a value, while null => absence of an object}

2. Referenced (Non Primitive)
    arrays, objects, function
    -object is a value in memory which is possibly referenced by an identifier
    
    -objects can be seen as a collection of properties
    
    -functions are also objects with the additional capability of being callable

    -all the objects are declared in the heap, and whenever we create two variables when one is object 
    and another which is copied into the object then we are referring to same objects. more clear with example  

*/

let value = -Infinity;
console.log(value);
console.log(typeof value);

//Example of stack and heap allocation

let variable1 = "one humdered horses";
let variable2 = variable1;

console.log(variable1);
console.log(variable2);
variable1 = "100 horses";

console.log(variable1);
console.log(variable2);

let object1 = {100 : "horses",
               101 : "one humdred horses"};

console.log(object1);

let object2 = object1;

object2.oneHundred = 100;

//Although we added a key value pair in object2, but it was actually referring to the value stored by
//object1 thats why original value of object1 was also modified
console.log(object1);